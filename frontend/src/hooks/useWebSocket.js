import { useState, useEffect } from "react";

const useWebSocket = (wsUrl, handleMessage) => {
    const [ws, setWs] = useState(null);

    useEffect(() => {
        const websocket = new WebSocket(wsUrl);
        setWs(websocket);

        const handleOpen = () => {
            console.log("WebSocket connected");
        };

        const handleClose = () => {
            console.log("WebSocket disconnected");
        };

        const handleBeforeUnload = () => {
            websocket.close();
        };

        websocket.addEventListener("open", handleOpen);
        websocket.addEventListener("message", handleMessage);
        websocket.addEventListener("close", handleClose);
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            websocket.removeEventListener("open", handleOpen);
            websocket.removeEventListener("message", handleMessage);
            websocket.removeEventListener("close", handleClose);
            window.removeEventListener("beforeunload", handleBeforeUnload);
            websocket.close();
        };
    }, [wsUrl, handleMessage]);

    return ws;
};

export default useWebSocket;
