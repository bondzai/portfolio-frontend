import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Drawer, Button, ConfigProvider } from "antd";
import {
    MenuOutlined, RocketFilled, ThunderboltFilled,
    ProjectFilled, TrophyFilled, AppstoreFilled, TeamOutlined, ReadFilled,
    IdcardFilled
} from "@ant-design/icons";
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions";
import BrandLogo from "../../components/common/BrandLogo";

const NAV_ITEMS = [
    { label: "About", key: "about", path: "/about", icon: <IdcardFilled /> },
    { label: "Experience", key: "experience", path: "/experience", icon: <RocketFilled /> },
    { label: "Skills", key: "skills", path: "/skills", icon: <ThunderboltFilled /> },
    { label: "Projects", key: "projects", path: "/projects", icon: <ProjectFilled /> },
    { label: "Certifications", key: "certifications", path: "/certifications", icon: <TrophyFilled /> },
    {
        label: "More",
        key: "more-group",
        icon: <AppstoreFilled />,
        children: [
            { label: "Brotherhood", key: "brotherhood", path: "/brotherhood", icon: <TeamOutlined /> },
            { label: "Blog", key: "blog", path: "/blog", icon: <ReadFilled /> }
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

    const mapItems = (items) => {
        return items.map(item => {
            const styledIcon = item.icon ? React.cloneElement(item.icon, { style: { fontSize: isMobile ? '16px' : '18px', marginBottom: isMobile ? '0' : '4px' } }) : null;

            // Conditional Layout
            // Mobile: Standard Horizontal (Icon Right/Left automatic)
            // Desktop: Stacked Vertical (Icon Top, Text Bottom)
            const labelContent = isMobile ? (
                <span style={{ fontSize: '16px', fontWeight: 500, marginLeft: '10px' }}>{item.label}</span>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1', padding: '4px 0' }}>
                    {styledIcon}
                    <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: '4px' }}>
                        {item.label}
                    </span>
                </div>
            );

            if (item.children) {
                return {
                    label: isMobile ? <span>{styledIcon} {labelContent}</span> : labelContent,
                    key: item.key,
                    children: mapItems(item.children)
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

    const menuItems = mapItems(NAV_ITEMS);

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
            <Button
                type="text"
                onClick={showDrawer}
                icon={<MenuOutlined style={{ color: "var(--text-color-primary)", fontSize: "20px" }} />}
            />
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
