import React, { useState } from 'react';
import { Popover, Tooltip } from 'antd';
import { AppstoreOutlined, CalculatorOutlined, SettingOutlined, LineChartOutlined, InfoCircleOutlined, ReadOutlined } from '@ant-design/icons';
import './StartMenu.css';

const StartMenu = ({ onOpenSettings, onOpenResources, onOpenAbout, onOpenGuide }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = (newOpen) => {
        setIsOpen(newOpen);
    };

    const handleAppClick = (action) => {
        if (action) action();
        setIsOpen(false);
    };

    const menuContent = (
        <div className="start-menu-content">
            <div className="start-menu-header">
                <span>Applications</span>
            </div>
            <div className="start-menu-list">
                <Tooltip title="Soon" placement="right">
                    <div className="app-list-item disabled">
                        <div className="app-icon-bg calc">
                            <CalculatorOutlined />
                        </div>
                        <span className="app-name">Calculator</span>
                        <span className="app-badge dev">DEV</span>
                    </div>
                </Tooltip>

                <div className="app-list-item" onClick={() => handleAppClick(onOpenSettings)}>
                    <div className="app-icon-bg settings">
                        <SettingOutlined />
                    </div>
                    <span className="app-name">System Settings</span>
                </div>

                <div className="app-list-item" onClick={() => handleAppClick(onOpenResources)}>
                    <div className="app-icon-bg resource">
                        <LineChartOutlined />
                    </div>
                    <span className="app-name">System Resources</span>
                </div>

                <div className="app-list-item" onClick={() => handleAppClick(onOpenAbout)}>
                    <div className="app-icon-bg about-app">
                        <InfoCircleOutlined />
                    </div>
                    <span className="app-name">About System</span>
                </div>

                <div className="app-list-item" onClick={() => handleAppClick(onOpenGuide)}>
                    <div className="app-icon-bg guide">
                        <ReadOutlined />
                    </div>
                    <span>System Guide</span>
                </div>
            </div>
        </div>
    );

    return (
        <Popover
            content={menuContent}
            trigger="click"
            open={isOpen}
            onOpenChange={handleOpenChange}
            placement="topLeft"
            classNames={{ root: 'start-menu-popover' }}
            getPopupContainer={() => document.body}
        >
            <Tooltip title="Start" placement="top">
                <div className="start-button">
                    <AppstoreOutlined style={{ fontSize: '22px' }} />
                </div>
            </Tooltip>
        </Popover>
    );
};

export default StartMenu;
