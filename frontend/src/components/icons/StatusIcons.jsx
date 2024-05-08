import React from 'react';
import {
  BellOutlined,
  DatabaseOutlined,
  CodeOutlined,
  CoffeeOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { Badge, Space, Tooltip, Popover } from 'antd';


const StatusIcons = () => (
    <Space>
        <Badge dot>
            <BellOutlined className="status-icon" />
        </Badge>
        <Popover content="content" title="Title" trigger="hover">
            <DatabaseOutlined className="status-icon" />
        </Popover>
        <Tooltip placement="top" title="test">
            <CodeOutlined className="status-icon" />
        </Tooltip>
        <CoffeeOutlined className="status-icon" />
        <ReadOutlined className="status-icon" />
    </Space>
);

export default StatusIcons;
