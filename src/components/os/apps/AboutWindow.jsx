import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import OSWindow from '../OSWindow';
import packageJson from '../../../../package.json';

const AboutWindow = ({ isOpen, onClose, onMinimize, isMinimized }) => {
    return (
        <OSWindow
            title="About System"
            icon={<InfoCircleOutlined />}
            isOpen={isOpen}
            onClose={onClose}
            onMinimize={onMinimize}
            isMinimized={isMinimized}
            width={400}
            height={320}
        >
            <div style={{ padding: '30px', color: 'white', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <div style={{ marginBottom: '15px' }}>
                    <div style={{
                        width: '90px', height: '90px', borderRadius: '50%',
                        border: '3px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                        fontSize: '32px', fontWeight: 'bold', color: 'white',
                        letterSpacing: '2px'
                    }}>
                        JB
                    </div>
                </div>
                <h2 style={{ color: 'white', margin: '0 0 5px 0' }}>Bond OS UI</h2>
                <p style={{ opacity: 0.7, margin: '0 0 20px 0' }}>Version {packageJson.version}</p>

                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px', width: '100%' }}>
                    <p style={{ margin: '0 0 5px 0', fontSize: '13px' }}>Developed by <strong>Puritat Chamart</strong></p>
                    <p style={{ margin: 0, fontSize: '12px', opacity: 0.6 }}>Built with React, Vite & Ant Design</p>
                </div>

                <p style={{ marginTop: '20px', fontSize: '11px', opacity: 0.4 }}>
                    © 2024 All Rights Reserved.
                </p>
            </div>
        </OSWindow>
    );
};

export default AboutWindow;
