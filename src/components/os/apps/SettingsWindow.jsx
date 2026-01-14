import React, { useState } from 'react';
import { SettingOutlined, UndoOutlined } from '@ant-design/icons';
import { message, ColorPicker, Button } from 'antd';
import OSWindow from '../OSWindow';

const SettingsWindow = ({ isOpen, onClose, onMinimize, isMinimized }) => {
    const [primaryColor, setPrimaryColor] = useState('#21325e');

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

        // Simple text contrast logic (if very dark, use light text)
        // For now defaulting to light text as the OS is dark mode optimized
        root.style.setProperty('--text-color-primary', '#f5f5f5');
        root.style.setProperty('--text-color-secondary', '#d9d9d9');

        setPrimaryColor(colorHex);
    };

    const handleColorChange = (value, hex) => {
        // Antd ColorPicker returns object, we trigger on changeComplete or check value
        // value.toHexString() is reliable
        const color = typeof value === 'string' ? value : value.toHexString();
        applyTheme(color);
        message.success("Theme Updated");
    };

    const resetTheme = () => {
        applyTheme('#21325e');
        message.success("Restored Default Theme");
    };

    return (
        <OSWindow
            title="System Settings"
            icon={<SettingOutlined />}
            isOpen={isOpen}
            onClose={onClose}
            onMinimize={onMinimize}
            isMinimized={isMinimized}
            width={380}
            height={280}
        >
            <div style={{ padding: '20px', color: 'white' }}>
                <h4 style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Appearance</h4>

                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <p style={{ margin: 0, fontWeight: 500 }}>Accent Color</p>
                            <span style={{ fontSize: '12px', opacity: 0.6 }}>Customize system theme</span>
                        </div>
                        <ColorPicker
                            value={primaryColor}
                            onChangeComplete={handleColorChange}
                            showText
                        />
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                        <Button
                            icon={<UndoOutlined />}
                            onClick={resetTheme}
                            style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                        >
                            Reset to Default
                        </Button>
                    </div>
                </div>
            </div>
        </OSWindow>
    );
};

export default SettingsWindow;
