import React, { useRef } from 'react';
import { Tour, ConfigProvider } from 'antd';

import './FeatureTour.css';

const FeatureTour = ({ isOpen, onClose, refs }) => {
    const { startRef, controlRef } = refs;

    const coverStyle = {
        height: 120,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.03)', // Very subtle for glass theme
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    };

    const iconStyle = {
        fontSize: 50,
        textShadow: '0 0 20px rgba(24, 144, 255, 0.5)' // Glowing neon effect for icons
    };

    const steps = [
        {
            title: 'Start Menu',
            description: 'Access all your applications, tools, and system preferences here.',
            cover: (
                <div style={coverStyle}>
                    <span style={iconStyle}>🚀</span>
                </div>
            ),
            target: () => startRef.current,
        },
        {
            title: 'System Control Center',
            description: 'Your central hub for System Health and Active Tasks. Monitor resources and manage running apps.',
            cover: (
                <div style={coverStyle}>
                    <span style={iconStyle}>⚡</span>
                </div>
            ),
            target: () => controlRef.current,
        },
    ];

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'rgba(255, 255, 255, 0.85)',
                    colorTextHeading: '#ffffff',
                    colorPrimary: '#1890ff',
                    borderRadiusLG: 12
                },
                components: {
                    Tour: {
                        fontSize: 14,
                        fontWeightStrong: 600
                    }
                }
            }}
        >
            <Tour
                open={isOpen}
                onClose={onClose}
                steps={steps}
                rootClassName="glass-tour"
                mask={{
                    style: {
                        backdropFilter: 'blur(4px)',
                    },
                    color: 'rgba(0, 0, 0, 0.8)',
                }}
                type="primary"
            />
        </ConfigProvider>
    );
};

export default FeatureTour;
