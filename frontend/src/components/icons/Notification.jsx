import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge, Space } from 'antd';


const NotificationIcon = () => {
    return (
        <Space>
            <Badge dot>
                <BellOutlined className="status-icon" />
            </Badge>
        </Space>
    );
};

export default NotificationIcon;
