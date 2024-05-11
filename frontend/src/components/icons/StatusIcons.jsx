import React from 'react';
import {
  BellOutlined,
  DatabaseOutlined,
  CodeOutlined,
  CoffeeOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { Badge, Space, Tooltip, Popover } from 'antd';
import { MemoryUsage } from './PerformanceMonitor';


const StatusIcons = () => (
    <Space>
        <MemoryUsage/>
        <Badge dot>
            <BellOutlined className="status-icon" />
        </Badge>
        <Tooltip placement="top" title="test">
            <CodeOutlined className="status-icon" />
        </Tooltip>
        <CoffeeOutlined className="status-icon" />
        <ReadOutlined className="status-icon" />
    </Space>
);

export default StatusIcons;
