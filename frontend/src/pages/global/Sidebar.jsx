import React from "react";
import { useLocation } from "react-router-dom";
import { Space } from 'antd';
import SocialMediaIcons from "../../components/SocialMediaIcons";
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions";

const Content = () => (
    <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <SocialMediaIcons />
    </Space>
);

const Sidebar = () => {
    const location = useLocation();
    const { width, height, screenSize } = useScreenDimensions();

    const paths = {
        mobileExcluded: ["/", "/experience", "/skills", "/projects", "/certifications", "/stats"],
        excluded: ["/experience", "/skills"]
    };

    const shouldRenderSidebar = (excludedPaths) => !excludedPaths.includes(location.pathname);

    const renderSidebar = (excludedPaths) => (
        <div>
            {shouldRenderSidebar(excludedPaths) && <Content />}
        </div>
    );

    return (
        <div>
            {(screenSize === ScreenSize.XS || screenSize === ScreenSize.SM) ? renderSidebar(paths.mobileExcluded) : renderSidebar(paths.excluded)}
        </div>
    );
};

export default Sidebar;
