import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Space} from 'antd';
import SocialMediaIcons from "../../components/SocialMediaIcons";


const Sidebar = () => {
    const location = useLocation();
    const excludedPaths = ["/experience", "/skills", "/projects", "/certifications"];

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

        </div>
    );
};

export default Sidebar;
