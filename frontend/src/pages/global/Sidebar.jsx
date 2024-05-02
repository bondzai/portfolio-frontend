import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import { EyeOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space, Tooltip } from 'antd';
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

            <div
                style={{
                    position: 'fixed',
                    padding: '10px 10px',
                    backgroundColor: 'var(--color-secondary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    opacity: 0.95,
                    bottom: "50px",
                    left: "20px",
                }}
            >
                <Tooltip title={`Active Users: ${activeUsersCount}`}>
                    <Badge count={activeUsersCount} style={{ backgroundColor: "green" }}>
                        <Avatar shape="circle" icon={<EyeOutlined />} />
                    </Badge>
                </Tooltip>
            </div>
        </div>
    );
};

export default Sidebar;
