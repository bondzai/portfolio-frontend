import React from 'react';
import { Popover, Badge, Tooltip } from 'antd';
import { BellOutlined, AppstoreOutlined, CalculatorOutlined, BulbOutlined, SettingOutlined, LineChartOutlined, InfoCircleOutlined, PlayCircleOutlined, ThunderboltOutlined, CloseOutlined } from '@ant-design/icons';
import './TaskManager.css';

const appIcons = {
    calculator: <CalculatorOutlined />,
    feature: <BulbOutlined />,
    settings: <SettingOutlined />,
    resources: <LineChartOutlined />,
    about: <InfoCircleOutlined />
};

const appNames = {
    calculator: "Calculator",
    feature: "Feature Request",
    settings: "System Settings",
    resources: "System Resources",
    about: "About System"
};

const TaskManager = ({ runningApps = [], onRestore, onClose, onCloseAll }) => {

    const content = (
        <div className="task-manager-content">
            <div className="task-manager-header">
                <span>Running Apps ({runningApps.length})</span>
                {runningApps.length > 0 && (
                    <span className="clear-all-btn" onClick={onCloseAll}>
                        Kill All
                    </span>
                )}
            </div>
            {runningApps.length === 0 ? (
                <div className="empty-tasks">
                    <p>No apps running in background</p>
                </div>
            ) : (
                <div className="task-list">
                    {runningApps.map(appId => (
                        <div key={appId} className="task-item" onClick={() => onRestore(appId)}>
                            <div className={`task-icon-bg ${appId === 'about' ? 'about-task' : appId}`}>
                                {appIcons[appId] || <AppstoreOutlined />}
                            </div>
                            <span className="task-name">{appNames[appId] || appId}</span>
                            <PlayCircleOutlined className="restore-icon" />
                            <CloseOutlined
                                className="close-task-icon"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClose(appId);
                                }}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <Popover
            content={content}
            trigger="click"
            placement="bottom"
            classNames={{ root: 'task-manager-popover' }}
            getPopupContainer={() => document.body}
        >
            <div className="task-manager-icon">
                <Tooltip title="Activity / Running Tasks">
                    <Badge dot={runningApps.length > 0} offset={[-2, 2]} className="notification-badge">
                        <ThunderboltOutlined style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }} />
                    </Badge>
                </Tooltip>
            </div>
        </Popover>
    );
};

export default TaskManager;
