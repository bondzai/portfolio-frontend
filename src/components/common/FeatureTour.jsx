import React, { useRef } from 'react';
import { Tour } from 'antd';

const FeatureTour = ({ isOpen, onClose, refs }) => {
    const { startRef, taskRef, statusRef } = refs;

    const steps = [
        {
            title: 'Start Menu',
            description: 'Access all your applications, tools, and system preferences here.',
            cover: (
                <div style={{ height: 120, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f0f2f5' }}>
                    <span style={{ fontSize: 50 }}>🚀</span>
                </div>
            ),
            target: () => startRef.current,
        },
        {
            title: 'Task Manager & Notifications',
            description: 'See running background apps here. Click to view count and restore minimized windows.',
            cover: (
                <div style={{ height: 120, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#daf0ff' }}>
                    <span style={{ fontSize: 50 }}>⚡</span>
                </div>
            ),
            target: () => taskRef.current,
        },
        {
            title: 'System Status',
            description: 'Monitor real-time system performance, CPU/Memory usage, and active user sessions.',
            cover: (
                <div style={{ height: 120, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f6ffed' }}>
                    <span style={{ fontSize: 50 }}>📊</span>
                </div>
            ),
            target: () => statusRef.current,
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
