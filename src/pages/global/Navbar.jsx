import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Drawer, Button, ConfigProvider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions";

const NAV_ITEMS = [
    { label: "Home", key: "", path: "/" },
    { label: "About", key: "about", path: "/about" },
    { label: "Experience", key: "experience", path: "/experience" },
    { label: "Skills", key: "skills", path: "/skills" },
    { label: "Projects", key: "projects", path: "/projects" },
    { label: "Certifications", key: "certifications", path: "/certifications" },
    {
        label: "More",
        key: "more-group",
        children: [
            { label: "Brotherhood", key: "brotherhood", path: "/brotherhood" },
            { label: "Blog", key: "blog", path: "/blog" }
        ]
    },
];

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
            if (item.children) {
                return {
                    label: item.label,
                    key: item.key,
                    children: mapItems(item.children)
                };
            }
            return {
                label: <Link to={item.path}>{item.label}</Link>,
                key: item.key,
            };
        });
    };

    const menuItems = mapItems(NAV_ITEMS);

    const showDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);

    // Theme Customization for smoother UI
    const themeConfig = {
        components: {
            Menu: {
                // Backgrounds
                colorBgElevated: "var(--color-primary)",
                itemBg: "transparent",

                // Colors
                itemColor: "var(--text-color-primary)",
                itemSelectedColor: "#f0f2f5", // Soft white/grey for text
                itemHoverColor: "#ffffff",

                // Selection Background (Smoother highlight)
                controlItemBgActive: "rgba(255, 255, 255, 0.1)", // Subtle translucent white
                controlItemBgHover: "rgba(255, 255, 255, 0.05)",

                // Horizontal Line (if applicable)
                horizontalItemSelectedColor: "#f0f2f5",
            },
            Drawer: {
                colorBgElevated: "var(--color-primary)",
                colorText: "var(--text-color-primary)",
            }
        },
        token: {
            colorPrimary: "#f0f2f5", // Main accent color
        }
    };

    return (
        <ConfigProvider theme={themeConfig}>
            <div style={{
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
                background: "rgba(33, 50, 94, 0.7)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderBottom: "1px solid var(--color-secondary)",
                padding: "0 20px",
                boxSizing: "border-box"
            }}>
                {isMobile ? (
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
                            {NAV_ITEMS.find(item => item.key === current)?.label || "Home"}
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
                            />
                        </Drawer>
                    </div>
                ) : (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Menu
                            mode="horizontal"
                            selectedKeys={[current]}
                            items={menuItems}
                            style={{
                                background: "transparent",
                                borderBottom: "none",
                                justifyContent: "center",
                                width: "100%",
                                fontSize: "16px"
                            }}
                        />
                    </div>
                )}
            </div>
        </ConfigProvider>
    );
};

export default Navbar;
