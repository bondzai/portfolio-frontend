import { useEffect, useState } from "react";
import useSocket from "../../hooks/useSocket";


export const Users = () => {
    const [activeUsersCount, setActiveUsersCount] = useState(0);
    const [totalUsersCount, setTotalUsersCount] = useState(0);

    const wsUrl = import.meta.env.VITE_WS_URL;
    const { receivedData, isConnected } = useSocket(wsUrl);

    // Parse inside the effect, keyed on the raw frame string. Parsing during
    // render instead would throw on any non-JSON frame and, with no error
    // boundary above this, blank the whole app — and it produced a new object
    // identity every render, so the effect re-ran on every render.
    useEffect(() => {
        if (!receivedData) return;

        let payload;
        try {
            payload = JSON.parse(receivedData);
        } catch {
            console.warn("Ignoring non-JSON WebSocket frame:", receivedData);
            return;
        }

        // The server opens with { type: "connected" }, which carries no counts;
        // only take numbers so a control frame cannot blank the display.
        if (typeof payload?.activeUsers === "number") setActiveUsersCount(payload.activeUsers);
        if (typeof payload?.totalUsers === "number") setTotalUsersCount(payload.totalUsers);
    }, [receivedData]);

    return [activeUsersCount, totalUsersCount, isConnected];
};
