import React, { useState, useEffect } from 'react';
import { Popover, Badge, Tooltip } from 'antd';
import {
    WifiOutlined,
    DatabaseOutlined,
    GlobalOutlined,
    AppstoreOutlined,
    ClockCircleOutlined,
    ThunderboltOutlined,
    PlayCircleOutlined,
    CloseOutlined,
    HddOutlined
} from '@ant-design/icons';
import versionData from "../../../package.json";
import './SystemControlCenter.css';

const appIcons = {
    calculator: <div className="app-icon-bg calc"><i className="anticon">calculator</i></div>, // Placeholder class logic
    feature: <div className="app-icon-bg feature"><i className="anticon">bulb</i></div>,
    settings: <div className="app-icon-bg settings"><i className="anticon">setting</i></div>,
    resources: <div className="app-icon-bg resource"><i className="anticon">line-chart</i></div>,
    about: <div className="app-icon-bg about-task"><i className="anticon">info-circle</i></div>
};

// Simplified icon component mapping for better reliability than specific cached JSX
const AppIcon = ({ type }) => {
    switch (type) {
        case 'calculator': return <div className="task-icon-bg calculator"><i className="anticon">calculator</i></div>;
        case 'feature': return <div className="task-icon-bg feature"><i className="anticon">bulb</i></div>;
        case 'settings': return <div className="task-icon-bg settings"><i className="anticon">setting</i></div>;
        case 'resources': return <div className="task-icon-bg resources"><i className="anticon">line-chart</i></div>;
        case 'about': return <div className="task-icon-bg about-task"><i className="anticon">info-circle</i></div>;
        default: return <div className="task-icon-bg"><AppstoreOutlined /></div>;
    }
}

const appNames = {
    calculator: "Calculator",
    feature: "Feature Request",
    settings: "System Settings",
    resources: "System Resources",
    about: "About System"
};

const SystemControlCenter = ({ runningApps = [], onRestore, onClose, onCloseAll, activeUsersCount, isConnected }) => {
    const [memoryUsage, setMemoryUsage] = useState({ used: 0, total: 0 });
    const [isOpen, setIsOpen] = useState(false);

    // Auto-show tooltip on mount (Tour effect)
    useEffect(() => {
        const hasSeenTour = localStorage.getItem('has_seen_v2_tour');
        if (!hasSeenTour) {
            setIsOpen(true);
            const timer = setTimeout(() => {
                setIsOpen(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleOpenChange = (newOpen) => {
        setIsOpen(newOpen);
    };

    // Memory monitor
    useEffect(() => {
        const updateMemory = () => {
            if (performance && performance.memory) {
                const { usedJSHeapSize, totalJSHeapSize } = performance.memory;
                setMemoryUsage({
                    used: (usedJSHeapSize / (1024 * 1024)).toFixed(1),
                    total: (totalJSHeapSize / (1024 * 1024)).toFixed(1)
                });
            }
        };
        // Update on open or interval if open
        if (isOpen) {
            updateMemory();
            const interval = setInterval(updateMemory, 2000);
            return () => clearInterval(interval);
        }
    }, [isOpen]);

    const content = (
        <div className="control-center-popover">
            {/* Section 1: System Status */}
            <div className="section-status">
                <div className="status-header">
                    <span className="section-title">System Status</span>
                    <span className={`status-badge-text ${isConnected ? 'online' : 'offline'}`}>
                        {isConnected ? 'Stable' : 'Offline'}
                    </span>
                </div>

                <div className="status-grid">
                    <div className="status-item">
                        <WifiOutlined className="status-icon" />
                        <div className="status-info">
                            <span className="label">Network</span>
                            <span className="value">{isConnected ? 'Online' : 'Disconnected'}</span>
                        </div>
                    </div>
                    <div className="status-item">
                        <DatabaseOutlined className="status-icon" />
                        <div className="status-info">
                            <span className="label">Memory</span>
                            <span className="value">{memoryUsage.used} MB</span>
                        </div>
                    </div>
                    <div className="status-item">
                        <GlobalOutlined className="status-icon" />
                        <div className="status-info">
                            <span className="label">Region</span>
                            <span className="value">Asia-Pacific</span>
                        </div>
                    </div>
                    <div className="status-item">
                        <ClockCircleOutlined className="status-icon" />
                        <div className="status-info">
                            <span className="label">Uptime</span>
                            <span className="value">{(performance.now() / 60000).toFixed(0)}m</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            {/* Section 2: Task Manager */}
            <div className="section-tasks">
                <div className="task-header">
                    <span className="section-title">Running Apps ({runningApps.length})</span>
                    {runningApps.length > 0 && (
                        <div className="kill-all-btn" onClick={onCloseAll}>
                            <ThunderboltOutlined /> Kill All
                        </div>
                    )}
                </div>

                <div className="task-list-container">
                    {runningApps.length === 0 ? (
                        <div className="empty-state">
                            <span style={{ fontSize: '24px', opacity: 0.5 }}>💤</span>
                            <span>No active background tasks</span>
                        </div>
                    ) : (
                        <div className="task-list-scroll">
                            {runningApps.map(appId => (
                                <div key={appId} className="control-task-item" onClick={() => onRestore(appId)}>
                                    <div className="task-left">
                                        <AppIcon type={appId} />
                                        <span className="task-name-text">{appNames[appId] || appId}</span>
                                    </div>
                                    <div className="task-actions">
                                        <PlayCircleOutlined className="action-icon restore" />
                                        <CloseOutlined
                                            className="action-icon close"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onClose(appId);
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="footer-info">
                bond-os v{versionData.version}
            </div>
        </div>
    );

    // Determine Status Priority: Red (Offline) > Yellow (Active) > Green (Online)
    let statusClass = 'online';
    if (runningApps.length > 0) statusClass = 'active';
    if (!isConnected) statusClass = 'offline';

    return (
        <Popover
            content={content}
            trigger="click" // Changed to click for better usability with complex content
            open={isOpen}
            onOpenChange={handleOpenChange}
            placement="topRight"
            classNames={{ root: 'control-center-overlay' }}
            getPopupContainer={() => document.body}
        >
            <div className="control-center-trigger">
                <Tooltip title="System Control Center">
                    <div className="trigger-icon-wrapper">
                        <HddOutlined style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)' }} />
                        <div className={`server-status-dot ${statusClass}`}></div>
                    </div>
                </Tooltip>
            </div>
        </Popover>
    );
};

export default SystemControlCenter;
