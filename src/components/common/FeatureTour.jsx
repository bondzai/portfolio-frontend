import React, { useRef } from 'react';
import { Tour, ConfigProvider } from 'antd';
import { AppstoreFilled } from '@ant-design/icons';

import './FeatureTour.css';
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions";

const FeatureTour = ({ isOpen, onClose, refs }) => {
    const { screenSize } = useScreenDimensions();
    const isMobile = screenSize === ScreenSize.XS || screenSize === ScreenSize.SM;
    const { startRef, controlRef, hamburgerRef } = refs;

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

    let steps = [];

    if (isMobile) {
        steps = [
            {
                title: 'Mobile Navigation',
                description: 'Tap here to access the full menu, including Apps, Projects, and System Settings.',
                cover: (
                    <div style={coverStyle}>
                        <AppstoreFilled style={iconStyle} />
                    </div>
                ),
                target: () => hamburgerRef?.current,
            }
        ];
    } else {
        steps = [
            {
                title: 'Start Menu',
                description: 'Access all your applications, tools, and system preferences here.',
                cover: (
                    <div style={coverStyle}>
                        <span style={iconStyle}>🚀</span>
                    </div>
                ),
                target: () => startRef?.current,
            },
            {
                title: 'System Control Center',
                description: 'Your central hub for System Health and Active Tasks. Monitor resources and manage running apps.',
                cover: (
                    <div style={coverStyle}>
                        <span style={iconStyle}>⚡</span>
                    </div>
                ),
                target: () => controlRef?.current,
            },
        ];
    }

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
