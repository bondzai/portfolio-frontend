import { useEffect, useState } from "react";
import useSocket from "../../hooks/useSocket";


export const Users = () => {
    const [activeUsersCount, setActiveUsersCount] = useState(0);
    const [totalUsersCount, setTotalUsersCount] = useState(0);

    const wsUrl = import.meta.env.VITE_WS_URL;
    const { receivedData } = useSocket(wsUrl);
    const data = JSON.parse(receivedData);

    useEffect(() => {
        if (data) {
            setActiveUsersCount(data.activeUsers);
            setTotalUsersCount(data.totalUsers);
        }
    }, [data]);

    return [activeUsersCount, totalUsersCount];
};
