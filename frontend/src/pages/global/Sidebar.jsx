import React from "react";
import { useLocation } from "react-router-dom";
import { Space} from 'antd';
import SocialMediaIcons from "../../components/SocialMediaIcons";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Content = () => (
    <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <SocialMediaIcons />
    </Space>
)

const Sidebar = () => {
    const location = useLocation();
    const excludedPaths = ["/experience", "/skills", "/projects", "/certifications"];
    const { width, height } = useWindowDimensions();

    const shouldRenderSidebar = () => {
        return !excludedPaths.includes(location.pathname);
    };

    return (
        <div>
            {shouldRenderSidebar() && (
                <Content />
            )}
        </div>
    );
};

export default Sidebar;
