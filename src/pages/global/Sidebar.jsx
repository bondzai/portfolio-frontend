import React from "react";
import { useLocation } from "react-router-dom";
import { Space } from 'antd';
import ScrollButton from "../../components/buttons/ScrollButton";
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions";
import useScroll from "../../hooks/useScroll";
import "./Sidebar.css";


const Content = () => (
    <Space direction="vertical" size="large" style={{ display: "flex" }}>

    </Space>
);

const Sidebar = () => {
    const location = useLocation();
    const { width, height, screenSize } = useScreenDimensions();
    const { showScrollButton, scrollToTop, scrollToBottom } = useScroll();

    const paths = {
        mobileExcluded: ["/", "/experience", "/skills", "/projects", "/certifications", "/stats"],
        excluded: ["/experience", "/skills", "/projects", "/certifications"]
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
            <ScrollButton
                showScrollButton={showScrollButton}
                scrollToTop={scrollToTop}
                scrollToBottom={scrollToBottom}
            />
        </div>
    );
};

export default Sidebar;
