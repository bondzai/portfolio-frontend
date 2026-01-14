import React, { useState, useEffect } from 'react';
import { Popover } from 'antd';
import {
    WifiOutlined,
    DatabaseOutlined,
    GlobalOutlined,
    EyeOutlined,
    EyeInvisibleOutlined
} from '@ant-design/icons';
import versionData from "../../../package.json";
import './ServerStatus.css';

const ServerStatus = ({ activeUsersCount, isConnected }) => {
    const [memoryUsage, setMemoryUsage] = useState({ used: 0, total: 0 });
    const [isOpen, setIsOpen] = useState(false);

    // Auto-show tooltip on mount
    useEffect(() => {
        setIsOpen(true);
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, 3000);
        return () => clearTimeout(timer);
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
        const interval = setInterval(updateMemory, 2000);
        updateMemory();
        return () => clearInterval(interval);
    }, []);

    const content = (
        <div className="server-status-popover">
            <div className="status-header">
                <span className={`status-dot ${isConnected ? 'online' : 'offline'}`}></span>
                <span className="status-text">{isConnected ? 'System Stable' : 'Disconnected'}</span>
            </div>

            <div className="status-metrics">
                <div className="metric-row">
                    <div className="metric-label">
                        <WifiOutlined className="metric-icon" />
                        <span>Connection</span>
                    </div>
                    <span className={`metric-value ${isConnected ? 'good' : 'bad'}`}>
                        {isConnected ? 'Online' : 'Offline'}
                    </span>
                </div>

                <div className="metric-row">
                    <div className="metric-label">
                        <DatabaseOutlined className="metric-icon" />
                        <span>Memory</span>
                    </div>
                    <span className="metric-value">{memoryUsage.used} MB</span>
                </div>

                <div className="metric-row">
                    <div className="metric-label">
                        <GlobalOutlined className="metric-icon" />
                        <span>Region</span>
                    </div>
                    <span className="metric-value">Asia-Pacific</span>
                </div>
            </div>

            <div className="status-footer">
                v{versionData.version} • {new Date().toLocaleTimeString()}
            </div>
        </div>
    );

    const Icon = isConnected ? EyeOutlined : EyeInvisibleOutlined;

    return (
        <Popover
            content={content}
            trigger="hover"
            open={isOpen}
            onOpenChange={handleOpenChange}
            placement="topRight"
            overlayClassName="server-status-overlay"
            arrow={false}
        >
            <div className="server-status-trigger">
                <div className={`status-badge ${isConnected ? 'connected' : 'disconnected'}`}></div>
            </div>
        </Popover>
    );
};

export default ServerStatus;
