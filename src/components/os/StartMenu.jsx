import React from 'react';
import { Popover, Tooltip } from 'antd';
import { AppstoreOutlined, CalculatorOutlined, BulbOutlined } from '@ant-design/icons';
import './StartMenu.css';

const StartMenu = ({ onOpenCalculator, onOpenFeatureRequest }) => {

    const menuContent = (
        <div className="start-menu-content">
            <div className="start-menu-header">
                <span>Applications</span>
            </div>
            <div className="start-menu-grid">
                <div className="app-icon-item" onClick={onOpenCalculator}>
                    <div className="app-icon-bg calc">
                        <CalculatorOutlined />
                    </div>
                    <span>Calculator</span>
                </div>
                <div className="app-icon-item" onClick={onOpenFeatureRequest}>
                    <div className="app-icon-bg feature">
                        <BulbOutlined />
                    </div>
                    <span>Feature Req</span>
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
