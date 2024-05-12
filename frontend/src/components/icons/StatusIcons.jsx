import React from 'react';
import {
    CodeOutlined,
    CoffeeOutlined,
    ReadOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import { MemoryUsage } from './PerformanceMonitor';
import NotificationIcon from './Notification';

const StatusIcons = () => (
    <Space>
        <MemoryUsage />
        <CodeOutlined className="status-icon" />
        <CoffeeOutlined className="status-icon" />
        <ReadOutlined className="status-icon" />
        <NotificationIcon />
    </Space>
);

export default StatusIcons;
