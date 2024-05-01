import React from "react";
import { useLocation } from "react-router-dom";
import { Space } from "antd";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import "./Sidebar.css";

const Sidebar = () => {
    const location = useLocation();

    console.log(location)

    const excludedPaths = ["/experience"];

    const shouldRenderSidebar = () => {
        return !excludedPaths.includes(location.pathname);
    };

    return (
        <div className="">
            {shouldRenderSidebar() && (
                <Space direction="vertical" size="large" style={{ display: "flex" }}>
                    <SocialMediaIcons />
                </Space>
            )}
        </div>
    );
};

export default Sidebar;
