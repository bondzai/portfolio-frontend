import React, { useRef } from 'react';
import { Tour } from 'antd';

const FeatureTour = ({ isOpen, onClose, refs }) => {
    const { startRef, controlRef } = refs;

    const coverStyle = {
        height: 120,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(var(--color-primary-rgb), 0.1)',
        backdropFilter: 'blur(5px)'
    };

    const iconStyle = {
        fontSize: 50,
        color: 'var(--color-primary)'
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
        <Tour
            open={isOpen}
            onClose={onClose}
            steps={steps}
            mask={{
                style: {
                    boxShadow: 'inset 0 0 15px #fff',
                },
                color: 'rgba(0, 0, 0, 0.6)',
            }}
            type="primary"
        />
    );
};

export default FeatureTour;
