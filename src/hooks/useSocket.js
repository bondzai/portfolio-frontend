import { useState, useEffect, useRef } from "react";

// Backoff between reconnect attempts, doubling from BASE up to MAX.
const RECONNECT_BASE_MS = 1000;
const RECONNECT_MAX_MS = 30000;
// Spread reconnects so every open tab does not retry on the same tick.
const JITTER_RATIO = 0.3;
// A server can accept the socket and then never finish the handshake, which
// leaves readyState stuck at CONNECTING with no close event to retry from.
const CONNECT_TIMEOUT_MS = 10000;

const useSocket = (url, handleOpen, handleClose) => {
    const [ws, setWs] = useState(null);
    const [receivedData, setReceivedData] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    const socketRef = useRef(null);
    const attemptRef = useRef(0);
    const retryTimerRef = useRef(null);
    // Set while unmounting, so a deliberate close is not treated as a drop.
    const closingRef = useRef(false);

    useEffect(() => {
        if (!url) return undefined;

        closingRef.current = false;

        let deviceId = localStorage.getItem("device_id");
        if (!deviceId) {
            deviceId = crypto.randomUUID();
            localStorage.setItem("device_id", deviceId);
        }

        const scheduleReconnect = () => {
            const backoff = Math.min(RECONNECT_BASE_MS * 2 ** attemptRef.current, RECONNECT_MAX_MS);
            attemptRef.current += 1;
            retryTimerRef.current = setTimeout(connect, backoff + Math.random() * JITTER_RATIO * backoff);
        };

        function connect() {
            if (closingRef.current) return;

            let socket;
            try {
                const socketUrl = new URL(url);
                socketUrl.searchParams.set("device_id", deviceId);
                socket = new WebSocket(socketUrl.toString());
            } catch (error) {
                // A malformed URL will never succeed, so do not retry it.
                console.error("Invalid WebSocket URL:", error);
                setIsConnected(false);
                return;
            }

            socketRef.current = socket;
            setWs(socket);

            const openTimer = setTimeout(() => {
                if (socket.readyState === WebSocket.CONNECTING) {
                    // Closing a stalled socket surfaces as onclose, which
                    // schedules the next attempt.
                    socket.close();
                }
            }, CONNECT_TIMEOUT_MS);

            socket.onopen = () => {
                clearTimeout(openTimer);
                attemptRef.current = 0;
                setIsConnected(true);
                handleOpen ? handleOpen() : console.log("WebSocket connected");
            };

            socket.onmessage = (event) => {
                setReceivedData(event.data);
            };

            // An errored socket still fires onclose, which is where reconnects
            // are scheduled — so this only needs to force the close.
            socket.onerror = () => socket.close();

            socket.onclose = () => {
                clearTimeout(openTimer);
                setIsConnected(false);
                handleClose ? handleClose() : console.log("WebSocket disconnected");
                if (!closingRef.current) {
                    scheduleReconnect();
                }
            };
        }

        // Coming back online is a strong signal: retry at once rather than
        // waiting out a backoff that may have grown to 30s while offline.
        const onOnline = () => {
            if (socketRef.current?.readyState === WebSocket.OPEN) return;
            clearTimeout(retryTimerRef.current);
            attemptRef.current = 0;
            connect();
        };
        window.addEventListener("online", onOnline);

        connect();

        return () => {
            closingRef.current = true;
            clearTimeout(retryTimerRef.current);
            window.removeEventListener("online", onOnline);
            socketRef.current?.close();
        };
    }, [url]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            closingRef.current = true;
            clearTimeout(retryTimerRef.current);
            socketRef.current?.close();
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return { ws, receivedData, isConnected };
};

export default useSocket;
