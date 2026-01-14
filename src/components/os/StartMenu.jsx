import React from 'react';
import { Popover, Tooltip } from 'antd';
import { AppstoreOutlined, CalculatorOutlined, BulbOutlined, SettingOutlined, LineChartOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './StartMenu.css';

const StartMenu = ({ onOpenCalculator, onOpenFeatureRequest, onOpenSettings, onOpenResources, onOpenAbout }) => {

    const menuContent = (
        <div className="start-menu-content">
            <div className="start-menu-header">
                <span>Applications</span>
            </div>
            <div className="start-menu-list">
                <Tooltip title="In Development" placement="right">
                    <div className="app-list-item disabled">
                        <div className="app-icon-bg calc">
                            <CalculatorOutlined />
                        </div>
                        <span className="app-name">Calculator</span>
                        <span className="app-badge dev">DEV</span>
                    </div>
                </Tooltip>
                <div className="app-list-item" onClick={onOpenFeatureRequest}>
                    <div className="app-icon-bg feature">
                        <BulbOutlined />
                    </div>
                    <span className="app-name">Feature Request</span>
                    <span className="app-badge beta">BETA</span>
                </div>
                <div className="app-list-item" onClick={onOpenSettings}>
                    <div className="app-icon-bg settings">
                        <SettingOutlined />
                    </div>
                    <span className="app-name">System Settings</span>
                </div>
                <div className="app-list-item" onClick={onOpenResources}>
                    <div className="app-icon-bg resource">
                        <LineChartOutlined />
                    </div>
                    <span className="app-name">System Resources</span>
                </div>
                <div className="app-list-item" onClick={onOpenAbout}>
                    <div className="app-icon-bg about-app">
                        <InfoCircleOutlined />
                    </div>
                    <span className="app-name">About System</span>
                </div>
            </div>
        </div>
    );

    return (
        <Popover
            content={menuContent}
            trigger="click"
            placement="topLeft"
            overlayClassName="start-menu-popover"
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
