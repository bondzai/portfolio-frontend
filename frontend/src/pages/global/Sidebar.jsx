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
    const mobileExcludedPaths = ["/", "/experience", "/skills", "/projects", "/certifications", "/stats"];
    const excludedPaths = ["/experience", "/skills"];
    const { width } = useWindowDimensions();

    const shouldRenderSidebar = (paths) => {
        return !paths.includes(location.pathname);
    };

    if (width <= 850) {
        return (
            <div>
                {shouldRenderSidebar(mobileExcludedPaths) && (
                    <Content />
                )}
            </div>
        );
    }

    return (
        <div>
            {shouldRenderSidebar(excludedPaths) && (
                <Content />
            )}
        </div>
    );
};

export default Sidebar;
