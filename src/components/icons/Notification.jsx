import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge, Space, notification } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';


const NotificationIcon = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
            message: 'Notification',
            description: 'Nothing here.',
            placement: 'bottomLeft',
            icon: (
                <CheckCircleOutlined style={{ color: '#108ee9'}}/>
            ),
        });
    };

    return (
        <Space>
            {contextHolder}
            <Badge dot>
                <BellOutlined className="status-icon" onClick={openNotification} />
            </Badge>
        </Space>
    );
};

export default NotificationIcon;
