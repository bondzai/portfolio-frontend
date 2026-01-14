import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { message } from 'antd';
import OSWindow from '../OSWindow';

const SettingsWindow = ({ isOpen, onClose, onMinimize, isMinimized }) => {

    const applyTheme = (theme) => {
        const root = document.documentElement;
        if (theme === 'brown') {
            root.style.setProperty('--const-primary-color', '#2b2626');
            root.style.setProperty('--const-secondary-color', '#423d3d');
            root.style.setProperty('--color-primary', '#2b2626');
            root.style.setProperty('--color-primary-rgb', '43, 38, 38');
            root.style.setProperty('--color-secondary', '#423d3d');
            root.style.setProperty('--color-deep', '#1e1b1b');
            root.style.setProperty('--color-highlight', '#d4c5b0');
            root.style.setProperty('--text-color-primary', '#e6e1db');
            root.style.setProperty('--text-color-secondary', '#b0aca8');
            message.success("Applied Zen/Dimmed Theme");
        } else {
            // Default Blue
            root.style.setProperty('--const-primary-color', '#21325e');
            root.style.setProperty('--const-secondary-color', '#3e497a');
            root.style.setProperty('--color-primary', '#21325e');
            root.style.setProperty('--color-primary-rgb', '33, 50, 94');
            root.style.setProperty('--color-secondary', '#3e497a');
            root.style.setProperty('--color-deep', '#1a2949');
            root.style.setProperty('--color-highlight', '#4facfe');
            root.style.setProperty('--text-color-primary', '#f5f5f5');
            root.style.setProperty('--text-color-secondary', '#d9d9d9');
            message.success("Restored Default Theme");
        }
    };

    return (
        <OSWindow
            title="System Settings"
            icon={<SettingOutlined />}
            isOpen={isOpen}
            onClose={onClose}
            onMinimize={onMinimize}
            isMinimized={isMinimized}
            width={350}
            height={250}
        >
            <div style={{ padding: '20px', color: 'white' }}>
                <h4 style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Appearance</h4>
                <div style={{ marginTop: '15px' }}>
                    <p style={{ opacity: 0.8, marginBottom: '10px' }}>Accent Color</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div
                            onClick={() => applyTheme('default')}
                            style={{
                                width: '40px', height: '40px', borderRadius: '50%', background: '#21325e',
                                cursor: 'pointer', border: '2px solid white', boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                            }}
                            title="Default Blue"
                        />
                        <div
                            onClick={() => applyTheme('brown')}
                            style={{
                                width: '40px', height: '40px', borderRadius: '50%', background: '#2b2626',
                                cursor: 'pointer', border: '2px solid rgba(255,255,255,0.3)', boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                            }}
                            title="Zen / Dimmed"
                        />
                    </div>
                </div>
            </div>
        </OSWindow>
    );
};

export default SettingsWindow;
