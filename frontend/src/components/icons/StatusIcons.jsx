import React from 'react';
import {
  BellOutlined,
  DatabaseOutlined,
  CodeOutlined,
  CoffeeOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { Badge, Space } from 'antd';
import { MemoryUsage } from './PerformanceMonitor';


const StatusIcons = () => (
    <Space>
        <MemoryUsage/>
        <Badge dot>
            <BellOutlined className="status-icon" />
        </Badge>
        <CodeOutlined className="status-icon" />
        <CoffeeOutlined className="status-icon" />
        <ReadOutlined className="status-icon" />
    </Space>
);

export default StatusIcons;
