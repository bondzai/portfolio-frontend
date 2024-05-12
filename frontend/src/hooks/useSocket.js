import { useState, useEffect } from "react";

const useSocket = (url, handleOpen, handleClose) => {
    const [ws, setWs] = useState(null);
    const [receivedData, setReceivedData] = useState(null);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => {
            handleOpen ? handleOpen() : console.log("WebSocket connected");
        };

        socket.onmessage = (event) => {
            setReceivedData(event.data);
        };

        socket.onclose = () => {
            handleClose ? handleClose() : console.log("WebSocket disconnected");
        };

        setWs(socket);

        return () => {
            socket.close();
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

    return { ws, receivedData };
};

export default useSocket;
