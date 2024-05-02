import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Space} from 'antd';
import SocialMediaIcons from "../../components/SocialMediaIcons";
import Watchers from "../../components/badges/Watchers";
import "./Sidebar.css";


const Sidebar = () => {
    const location = useLocation();
    const excludedPaths = ["/experience", "/skills", "/projects", "/certifications"];
    const [activeUsersCount, setActiveUsersCount] = useState(0);

    const shouldRenderSidebar = () => {
        return !excludedPaths.includes(location.pathname);
    };

    const wsUrl = import.meta.env.VITE_WS_URL;
    let ws;

    useEffect(() => {
        ws = new WebSocket(wsUrl);

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            setActiveUsersCount(parseInt(event.data));
        };

        ws.onclose = () => {
            console.log("WebSocket disconnected");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            ws.close();
        };
    }, []);

    const handleBeforeUnload = () => {
        ws.close();
    };

    return (
        <div>
            {shouldRenderSidebar() && (
                <Space direction="vertical" size="large" style={{ display: "flex" }}>
                    <SocialMediaIcons />
                </Space>
            )}

            <Watchers activeUsersCount={activeUsersCount}/>
        </div>
    );
};

export default Sidebar;
