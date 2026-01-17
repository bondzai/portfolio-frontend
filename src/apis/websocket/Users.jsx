import { useEffect, useState } from "react";
import useSocket from "../../hooks/useSocket";

export const useUsers = () => {
    const [activeUsersCount, setActiveUsersCount] = useState(0);
    const [totalUsersCount, setTotalUsersCount] = useState(0);

    const wsUrl = import.meta.env.VITE_WS_URL;
    const { receivedData, isConnected } = useSocket(wsUrl);

    // Safety check: only parse if receivedData is present
    const data = receivedData ? JSON.parse(receivedData) : null;

    useEffect(() => {
        if (data) {
            setActiveUsersCount(data.activeUsers);
            setTotalUsersCount(data.totalUsers);
        }
    }, [data]);

    return [activeUsersCount, totalUsersCount, isConnected];
};
