import React from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const Watcher = ({ activeUsersCount, isConnected }) => {
    const Icon = isConnected ? EyeOutlined : EyeInvisibleOutlined;

    return (
        <Tooltip title="Active users currently viewing this page">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', cursor: 'pointer' }}>
                <Icon style={{ fontSize: '14px' }} />
                <span style={{ fontSize: '12px' }}>{activeUsersCount}</span>
            </div>
        </Tooltip>
    );
};

export default Watcher;
