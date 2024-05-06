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
    <Space>
        <Badge dot>
            <BellOutlined style={{ color: "white" }} />
        </Badge>
        <DatabaseOutlined />
        <CodeOutlined />
        <CoffeeOutlined />
        <ReadOutlined />
        {/* <SyncOutlined spin /> */}
    </Space>
);

export default StatusIcons;
