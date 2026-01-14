import { useState, useEffect } from "react";


const useSocket = (url, handleOpen, handleClose) => {
    const [ws, setWs] = useState(null);
    const [receivedData, setReceivedData] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (!url) return;

        let deviceId = localStorage.getItem("device_id");
        if (!deviceId) {
            deviceId = crypto.randomUUID();
            localStorage.setItem("device_id", deviceId);
        }

        let socket;
        try {
            const socketUrl = new URL(url);
            socketUrl.searchParams.append("device_id", deviceId);
            socket = new WebSocket(socketUrl.toString());

            socket.onopen = () => {
                setIsConnected(true);
                handleOpen ? handleOpen() : console.log("WebSocket connected");
            };

            socket.onmessage = (event) => {
                setReceivedData(event.data);
            };

            socket.onclose = () => {
                setIsConnected(false);
                handleClose ? handleClose() : console.log("WebSocket disconnected");
            };

            setWs(socket);
        } catch (error) {
            console.error("Invalid WebSocket URL:", error);
            setIsConnected(false);
        }

        return () => {
            if (socket) {
                socket.close();
            }
        };
    }, [url]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            if (ws) {
                ws.close();
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [ws]);

    return { ws, receivedData, isConnected };
};

export default useSocket;
