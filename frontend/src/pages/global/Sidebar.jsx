import React from "react";
import { useLocation } from "react-router-dom";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import "./Sidebar.css";


const Sidebar = () => {
    const location = useLocation();
    const excludedPaths = ["/experience", "/skills"];

    const shouldRenderSidebar = () => {
        return !excludedPaths.includes(location.pathname);
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
                <Badge count={1}>
                    <Avatar shape="circle" icon={<UserOutlined />} />
                </Badge>
            </div>
        </div>
    );
};

export default Sidebar;
