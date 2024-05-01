import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import "./Sidebar.css";

const Sidebar = () => {
    const location = useLocation();
    const excludedPaths = ["/experience", "/skills"];
    const [activeUsersCount, setActiveUsersCount] = useState(0);
    let ws;

    const shouldRenderSidebar = () => {
        return !excludedPaths.includes(location.pathname);
    };

    useEffect(() => {
        ws = new WebSocket("ws://localhost:10000/ws/");

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            console.log("Received message:", event.data);
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
                className="icon-social"
                style={{ bottom: "300px", right: "40px" }}
            >
                <Badge count={activeUsersCount}>
                    <Avatar shape="circle" icon={<UserOutlined />} />
                </Badge>
            </div>
        </div>
    );
};

export default Sidebar;
