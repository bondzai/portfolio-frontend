import React, { useState, useContext } from "react";
import { ColorPicker, Button, message, Switch, Slider, Select, Card } from "antd";
import { UndoOutlined, BgColorsOutlined, SoundOutlined, GlobalOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { SystemContext } from "../contexts/SystemContext";
import "./Settings.css";

const Settings = () => {
    const { backgroundEffect, setBackgroundEffect, effectSpeed, setEffectSpeed } = useContext(SystemContext);
    const [primaryColor, setPrimaryColor] = useState(
        getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim() || '#21325e'
    );

    // Helper to darken/lighten color
    const adjustColor = (color, amount) => {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }

    // Helper to get RGB string
    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
    }

    const applyTheme = (colorHex) => {
        const root = document.documentElement;

        // Calculate Palette
        const primary = colorHex;
        const secondary = adjustColor(colorHex, 20); // Slightly lighter
        const deep = adjustColor(colorHex, -20); // Slightly darker
        const highlight = adjustColor(colorHex, 60); // Much lighter for highlight
        const rgb = hexToRgb(colorHex);

        // Apply Variables
        root.style.setProperty('--const-primary-color', primary);
        root.style.setProperty('--const-secondary-color', secondary);
        root.style.setProperty('--color-primary', primary);
        root.style.setProperty('--color-primary-rgb', rgb);
        root.style.setProperty('--color-secondary', secondary);
        root.style.setProperty('--color-deep', deep);
        root.style.setProperty('--color-highlight', highlight);

        setPrimaryColor(colorHex);
    };

    const handleColorChange = (value) => {
        const color = typeof value === 'string' ? value : value.toHexString();
        applyTheme(color);
        message.success("Theme Updated");
    };

    const resetTheme = () => {
        const root = document.documentElement;
        // Restore exact defaults from App.css
        root.style.setProperty('--const-primary-color', '#21325e');
        root.style.setProperty('--const-secondary-color', '#3e497a');
        root.style.setProperty('--color-primary', '#21325e');
        root.style.setProperty('--color-primary-rgb', '33, 50, 94');
        root.style.setProperty('--color-secondary', '#3e497a');
        root.style.setProperty('--color-deep', '#1a2949');
        root.style.setProperty('--color-highlight', '#4facfe');
        root.style.setProperty('--text-color-primary', '#f5f5f5');
        root.style.setProperty('--text-color-secondary', '#d9d9d9');

        setPrimaryColor('#21325e');
        message.success("Restored Default Theme");
    };

    return (
        <div className="settings-section">
            <div className="settings-container">
                <div className="settings-header">
                    <div className="settings-subtitle">Customize your experience</div>
                </div>

                <div className="settings-content">
                    {/* Appearance Group */}
                    <div className="settings-group">
                        <div className="settings-group-title">
                            <BgColorsOutlined style={{ marginRight: '10px' }} />
                            Appearance
                        </div>

                        <div className="settings-item">
                            <div className="settings-label">
                                <strong>Accent Color</strong>
                                <span>Choose a primary color for the system theme.</span>
                            </div>
                            <ColorPicker
                                value={primaryColor}
                                onChangeComplete={handleColorChange}
                                showText
                            />
                        </div>

                        <div className="settings-item">
                            <div className="settings-label">
                                <strong>Background Effect</strong>
                                <span>Choose an immersive environmental effect.</span>
                            </div>
                            <div style={{ width: '200px' }}>
                                <Select
                                    value={backgroundEffect}
                                    onChange={setBackgroundEffect}
                                    style={{ width: '100%' }}
                                    options={[
                                        { value: 'none', label: 'None' },
                                        { value: 'auto', label: 'Auto (Time/Weather) - Soon 🚀', disabled: true },
                                        { value: 'matrix', label: 'Matrix Rain' },
                                        { value: 'stars', label: 'Starfall' },
                                        { value: 'snow', label: 'Snow' },
                                        { value: 'moonlight', label: 'Moonlight' },
                                    ]}
                                />
                            </div>
                        </div>

                        {backgroundEffect !== 'none' && (
                            <div className="settings-item">
                                <div className="settings-label">
                                    <strong>Effect Intensity</strong>
                                    <span>Adjust the speed or density of the effect.</span>
                                </div>
                                <div style={{ width: '150px' }}>
                                    <Slider
                                        min={10}
                                        max={60}
                                        value={effectSpeed}
                                        onChange={setEffectSpeed}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="settings-item">
                            <div className="settings-label">
                                <strong>Reset Theme</strong>
                                <span>Restore default system colors.</span>
                            </div>
                            <Button
                                icon={<UndoOutlined />}
                                onClick={resetTheme}
                                ghost
                            >
                                Reset to Default
                            </Button>
                        </div>
                    </div>

                    {/* General Group (Placeholders for Scalability) */}
                    <div className="settings-group">
                        <div className="settings-group-title">
                            <GlobalOutlined style={{ marginRight: '10px' }} />
                            General
                        </div>


                        <div className="settings-item">
                            <div className="settings-label">
                                <strong>UI Sound Effects</strong>
                                <span>Enable click and hover sounds (Coming Soon)</span>
                            </div>
                            <Switch disabled />
                        </div>
                    </div>

                    {/* About Group */}
                    <div className="settings-group">
                        <div className="settings-group-title">
                            <InfoCircleOutlined style={{ marginRight: '10px' }} />
                            About System
                        </div>

                        <div className="settings-item">
                            <div className="settings-label">
                                <strong>Portfolio OS Version</strong>
                                <span>v2.0.1 (Stable)</span>
                            </div>
                        </div>
                        <div className="settings-item">
                            <div className="settings-label">
                                <strong>Developer</strong>
                                <span>Puritat Chamart (James-Bond)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Settings;
