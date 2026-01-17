import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Drawer, Button, ConfigProvider } from "antd";
import {
    MenuOutlined, RocketFilled, ThunderboltFilled,
    ProjectFilled, TrophyFilled, AppstoreFilled, TeamOutlined, ReadFilled,
    IdcardFilled, HomeFilled, SettingFilled, BgColorsOutlined, QuestionCircleOutlined
} from "@ant-design/icons";
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions";
import BrandLogo from "../../components/common/BrandLogo";
import { useTour } from "../../contexts/TourContext";

const NAV_ITEMS = [
    { label: "Home", key: "home", path: "/", icon: <HomeFilled /> },
    { label: "About", key: "about", path: "/about", icon: <IdcardFilled /> },
    { label: "Experience", key: "experience", path: "/experience", icon: <RocketFilled /> },
    { label: "Skills", key: "skills", path: "/skills", icon: <ThunderboltFilled /> },
    { label: "Projects", key: "projects", path: "/projects", icon: <ProjectFilled /> },
    { label: "Certifications", key: "certifications", path: "/certifications", icon: <TrophyFilled /> },
    { label: "Brotherhood", key: "brotherhood", path: "/brotherhood", icon: <TeamOutlined /> },
    { label: "Settings", key: "settings", path: "/settings", icon: <SettingFilled />, badge: { text: "Beta", color: "#1890ff" } },
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
                badge: { text: "Beta", color: "#1890ff" }
            },
            {
                label: "Roadmap",
                key: "roadmap",
                path: "/roadmap",
                icon: <RocketFilled />,
                badge: { text: "Beta", color: "#1890ff" }
            },
            {
                label: "Art Studio",
                key: "art-studio",
                path: "#",
                icon: <BgColorsOutlined />,
                badge: { text: "Soon", color: "#faad14" },
                onClick: (e) => e.preventDefault() // Prevent navigation for coming soon
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

    useEffect(() => {
        const path = location.pathname.substring(1);
        if (location.pathname === "/") {
            setCurrent("");
        } else {
            // Flatten items for search if needed, or simple check
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

            // Determines if we should use the horizontal row layout (Mobile or Desktop Dropdown)
            // or the default vertical column layout (Desktop Top Level)
            const useRowLayout = isMobile || (isSubMenu && !isMobile);

            const labelContent = useRowLayout ? (
                <span style={{
                    fontSize: isMobile ? '16px' : '14px',
                    fontWeight: 500,
                    marginLeft: isMobile ? '10px' : '0px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    gap: isMobile ? '12px' : '12px' // Added gap for spacing
                }}>
                    {/* For Desktop SubMenu, put Icon to the left if needed */}
                    {!isMobile && isSubMenu && <span>{styledIcon}</span>}

                    {item.label}

                    {item.badge && (
                        <span style={{
                            backgroundColor: item.badge.color,
                            color: 'white',
                            fontSize: '9px',
                            padding: '2px 8px', // Increased padding for "smooth" pill look
                            borderRadius: '12px', // More rounded
                            marginLeft: 'auto', // Push to right end if width is full, or just '10px'
                            fontWeight: '600',
                            letterSpacing: '0.5px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Subtle shadow
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
                                // Optional: adjust slightly up to align center-ish with icon or top
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
                    label: isMobile ? <span>{styledIcon} {labelContent}</span> : labelContent,
                    key: item.key,
                    children: mapItems(item.children, true)
                };
            }

            // Handle pure onClick items (like Settings)
            if (item.onClick) {
                return {
                    label: <div onClick={item.onClick} style={{ display: isMobile ? 'flex' : 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: 'center', color: 'inherit', cursor: 'pointer' }}>
                        {isMobile && styledIcon}
                        {labelContent}
                    </div>,
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

    // Use augmented items specifically for the Mobile Drawer if desired, or global?
    // User request: "menu in mobile mode... must include home... and setting"
    // implies Desktop might not need it, or maybe it does.
    // "Home" is usually redundant on desktop if Logo clicks to home.
    // "Settings" on desktop is in the OS bar (Footer).

    // Let's filter based on isMobile.
    // User request: "show setting in desktop mode also"
    // Register Hamburger Ref for Tour
    const { registerRef } = useTour();
    const hamburgerRef = React.useRef(null);

    useEffect(() => {
        if (isMobile) {
            registerRef('hamburgerRef', hamburgerRef);
        }
    }, [isMobile, registerRef]);

    const activeItems = [...NAV_ITEMS];
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
                {NAV_ITEMS.find(item => item.key === current)?.label || ""}
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
                closeIcon={<span style={{ color: "var(--text-color-primary)" }}>X</span>}
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
            </div>
        </ConfigProvider>
    );
};

export default Navbar;
