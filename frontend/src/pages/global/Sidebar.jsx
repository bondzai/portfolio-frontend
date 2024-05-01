import React from "react";
import { Space } from "antd";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="">
            <Space direction="vertical" size="large" style={{ display: "flex" }}>
                <SocialMediaIcons />
            </Space>
        </div>
    );
};

export default Sidebar;
