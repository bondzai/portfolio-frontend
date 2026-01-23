import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Drawer, Button, ConfigProvider } from "antd";
import {
    MenuOutlined, RocketFilled, ThunderboltFilled,
    ProjectFilled, TrophyFilled, AppstoreFilled, TeamOutlined, ReadFilled,
    IdcardFilled, HomeFilled, SettingFilled, BgColorsOutlined, RadarChartOutlined, MessageOutlined, HistoryOutlined, ExperimentOutlined
} from "@ant-design/icons";
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions";
import BrandLogo from "../../components/common/BrandLogo";
import { useTour } from "../../contexts/TourContext";
import FeedbackModal from "../../components/common/FeedbackModal";
import { BADGE_BETA, BADGE_SOON, BADGE_NEW } from "../../utils/constants";

const NAV_ITEMS = [
    { label: "Home", key: "home", path: "/", icon: <HomeFilled /> },
    { label: "About", key: "about", path: "/about", icon: <IdcardFilled /> },
    { label: "Experience", key: "experience", path: "/experience", icon: <RocketFilled /> },
    { label: "Skills", key: "skills", path: "/skills", icon: <ThunderboltFilled /> },
    { label: "Projects", key: "projects", path: "/projects", icon: <ProjectFilled /> },
    { label: "Certifications", key: "certifications", path: "/certifications", icon: <TrophyFilled /> },
    { label: "Brotherhood", key: "brotherhood", path: "/brotherhood", icon: <TeamOutlined /> },
    { label: "Feedback", key: "feedback", path: "/feedback", icon: <MessageOutlined />, badge: BADGE_BETA },
    { label: "Settings", key: "settings", path: "/settings", icon: <SettingFilled />, badge: BADGE_BETA },
    { label: "Activities", key: "activities", path: "#", icon: <RadarChartOutlined />, badge: BADGE_SOON },
    {
        label: "Research",
        key: "research",
        path: "/research",
        icon: <ExperimentOutlined />,
        badge: BADGE_NEW
    },
    {
        label: "More",
        key: "more-group",
        icon: <AppstoreFilled />,
        children: [
            {
                label: "Blog",
                key: "blog",
                path: "/blog",
                icon: <ReadFilled />,
                badge: BADGE_BETA
            },
            {
                label: "Changelog",
                key: "changelog",
                path: "/changelog",
                icon: <HistoryOutlined />,
            },
            {
                label: "Art Studio",
                key: "art-studio",
                path: "#",
                icon: <BgColorsOutlined />,
                badge: BADGE_SOON,
                onClick: (e) => e.preventDefault()
            }
        ]
    },
];

// Theme Config
const themeConfig = {
    components: {
        Menu: {
            colorBgElevated: "var(--color-primary)",
            itemBg: "transparent",
            itemColor: "var(--text-color-primary)",
            itemSelectedColor: "#f0f2f5",
            itemHoverColor: "#ffffff",
            fontSize: 14,
            controlItemBgActive: "rgba(255, 255, 255, 0.1)",
            controlItemBgHover: "rgba(255, 255, 255, 0.05)",
            horizontalItemSelectedColor: "#f0f2f5",
        },
        Drawer: {
            colorBgElevated: "var(--color-primary)",
            colorText: "var(--text-color-primary)",
        }
    },
    token: {
        colorPrimary: "#f0f2f5",
    }
};

const Navbar = () => {
    const location = useLocation();
    const { screenSize } = useScreenDimensions();
    const [current, setCurrent] = useState("");
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [feedbackVisible, setFeedbackVisible] = useState(false);

    useEffect(() => {
        const path = location.pathname.substring(1);
        if (location.pathname === "/") {
            setCurrent("");
        } else {
            const findKey = (items) => {
                for (const item of items) {
                    if (item.key === path || (item.key && path.startsWith(item.key))) return item.key;
                    if (item.children) {
                        const childKey = findKey(item.children);
                        if (childKey) return childKey;
                    }
                }
                return null;
            };
            const activeKey = findKey(NAV_ITEMS);
            if (activeKey) setCurrent(activeKey);
        }
    }, [location]);

    const isMobile = screenSize === ScreenSize.XS || screenSize === ScreenSize.SM;

    const mapItems = (items, isSubMenu = false) => {
        return items.map(item => {
            const styledIcon = item.icon ? React.cloneElement(item.icon, { style: { fontSize: isMobile ? '16px' : '18px', marginBottom: isMobile ? '0' : '4px' } }) : null;

            const useRowLayout = isMobile || (isSubMenu && !isMobile);
            const isSubMenuParent = !!item.children;
            const centerSubMenuTitle = isMobile && isSubMenuParent;

            const labelContent = useRowLayout ? (
                <span style={{
                    fontSize: isMobile ? '16px' : '14px',
                    fontWeight: 500,
                    marginLeft: centerSubMenuTitle ? '0' : (isMobile ? '10px' : '0px'),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: centerSubMenuTitle ? 'center' : 'flex-start',
                    width: '100%',
                    gap: isMobile ? '12px' : '12px'
                }}>
                    {!isMobile && isSubMenu && <span>{styledIcon}</span>}
                    {item.label}
                    {item.badge && (
                        <span style={{
                            backgroundColor: item.badge.color,
                            color: 'white',
                            fontSize: '9px',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            marginLeft: centerSubMenuTitle ? '8px' : 'auto',
                            fontWeight: '600',
                            letterSpacing: '0.5px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            lineHeight: '1.2'
                        }}>
                            {item.badge.text}
                        </span>
                    )}
                </span>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1', padding: '4px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        {styledIcon}
                        {item.badge && (
                            <span style={{
                                marginLeft: '6px',
                                backgroundColor: item.badge.color,
                                color: 'white',
                                fontSize: '8px',
                                padding: '1px 5px',
                                borderRadius: '10px',
                                fontWeight: 'bold',
                                lineHeight: '1',
                                transform: 'translateY(-2px)'
                            }}>
                                {item.badge.text}
                            </span>
                        )}
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: '4px' }}>
                        {item.label}
                    </span>
                </div>
            );

            if (item.children) {
                return {
                    label: isMobile ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            {styledIcon}
                            {labelContent}
                        </div>
                    ) : labelContent,
                    key: item.key,
                    children: mapItems(item.children, true)
                };
            }

            if (item.onClick) {
                return {
                    label: <div onClick={item.onClick} style={{ display: isMobile ? 'flex' : 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: 'center', color: 'inherit', cursor: 'pointer' }}>
                        {isMobile && styledIcon}
                        {labelContent}
                    </div>,
                    key: item.key,
                };
            }

            // Specific handling for Research to open in new tab
            if (item.path === '/research') {
                return {
                    label: <a href={item.path} target="_blank" rel="noopener noreferrer" style={{ display: isMobile ? 'flex' : 'block', alignItems: 'center', color: 'inherit' }}>
                        {isMobile && styledIcon}
                        {labelContent}
                    </a>,
                    key: item.key,
                };
            }

            return {
                label: <Link to={item.path} style={{ display: isMobile ? 'flex' : 'block', alignItems: 'center', color: 'inherit' }}>
                    {isMobile && styledIcon}
                    {labelContent}
                </Link>,
                key: item.key,
            };
        });
    };

    const { registerRef } = useTour();
    const hamburgerRef = React.useRef(null);

    useEffect(() => {
        if (isMobile) {
            registerRef('hamburgerRef', hamburgerRef);
        }
    }, [isMobile, registerRef]);

    // Restore activeItems and inject onClick for Feedback
    const activeItems = NAV_ITEMS.map(item => {
        if (item.key === 'feedback') {
            return {
                ...item,
                path: undefined, // Remove path to prevent Link rendering
                onClick: () => setFeedbackVisible(true)
            };
        }
        return item;
    });

    const menuItems = mapItems(activeItems);

    const showDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);

    const MobileNav = () => (
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "50px" }}>
            <span style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                color: "var(--text-color-primary)",
                fontSize: "18px",
                fontWeight: "600",
                userSelect: "none"
            }}>
                {(() => {
                    const findLabel = (items) => {
                        for (const item of items) {
                            if (item.key === current) return item.label;
                            if (item.children) {
                                const childLabel = findLabel(item.children);
                                if (childLabel) return childLabel;
                            }
                        }
                        return "";
                    };
                    return findLabel(NAV_ITEMS); // Note: Current label might not show Feedback if logic relies on key match with path?
                    // Feedback has no path, so findLabel might return empty. That's fine.
                })()}
            </span>
            <div ref={hamburgerRef}>
                <Button
                    type="text"
                    onClick={showDrawer}
                    icon={<MenuOutlined style={{ color: "var(--text-color-primary)", fontSize: "20px" }} />}
                />
            </div>
            <Drawer
                title={<span style={{ color: "var(--text-color-primary)" }}>Menu</span>}
                placement="right"
                width={250}
                onClose={closeDrawer}
                open={drawerVisible}
                closeIcon={
                    <MenuOutlined style={{ color: "var(--text-color-primary)", fontSize: "20px" }} />
                }
            >
                <Menu
                    mode="vertical"
                    selectedKeys={[current]}
                    items={menuItems}
                    onClick={closeDrawer}
                    style={{ background: "transparent", borderRight: "none" }}
                    expandIcon={() => null}
                />
            </Drawer>
        </div>
    );

    const DesktopNav = () => (
        <div style={{ display: "flex", justifyContent: "flex-start", marginLeft: "50px" }}>
            <Menu
                mode="horizontal"
                selectedKeys={[current]}
                items={menuItems}
                style={{
                    background: "transparent",
                    borderBottom: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    fontSize: "14px",
                    fontWeight: 500
                }}
            />
        </div>
    );

    return (
        <ConfigProvider theme={themeConfig}>
            <div style={{
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
                background: "rgba(var(--color-primary-rgb), 0.7)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderBottom: "1px solid var(--color-secondary)",
                padding: "0 20px",
                boxSizing: "border-box"
            }}>
                {/* Minimal Logo - Desktop & Mobile */}
                <Link to="/" style={{
                    position: "absolute",
                    left: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 1001,
                    display: 'block'
                }}>
                    <BrandLogo size={26} />
                </Link>

                {isMobile ? <MobileNav /> : <DesktopNav />}

                <FeedbackModal visible={feedbackVisible} onClose={() => setFeedbackVisible(false)} />
            </div>
        </ConfigProvider>
    );
};

export default Navbar;
