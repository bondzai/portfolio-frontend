import React from 'react';
import {
  BellOutlined,
  DatabaseOutlined,
  CodeOutlined,
  CoffeeOutlined,
  ReadOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Badge, Space } from 'antd';


const StatusIcons = () => (
    <Space size={10}>
        <Badge dot>
            <BellOutlined className="status-icon" />
        </Badge>
        <DatabaseOutlined className="status-icon" />
        <CodeOutlined className="status-icon" />
        <CoffeeOutlined className="status-icon" />
        <ReadOutlined className="status-icon" />
        <SyncOutlined className="status-icon" spin />
    </Space>
);

export default StatusIcons;
