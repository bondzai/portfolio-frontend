import React, { useState } from "react";
import Watchers from "../../components/icons/Watchers";
import useSocket from "../../hooks/useSocket";


const Background = () => {
    const [activeUsersCount, setActiveUsersCount] = useState(0);
    const [totalUsersCount, setTotalUsersCount] = useState(0);

    const wsUrl = import.meta.env.VITE_WS_URL;

    const handleMessage = (event) => {
        const data = JSON.parse(event.data);

        let activeUsers = parseInt(data.activeUsers) || 0;
        setActiveUsersCount(activeUsers);

        let totalUsers = parseInt(data.totalUsers) || 0;
        setTotalUsersCount(totalUsers);
    };

    const ws = useSocket(wsUrl, handleMessage);

    return (
        <>
            <Watchers activeUsersCount={activeUsersCount} />
        </>
    );
};

export default Background;
