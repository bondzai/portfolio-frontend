import React from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const Watcher = ({ activeUsersCount, isConnected }) => {
    const Icon = isConnected ? EyeOutlined : EyeInvisibleOutlined;

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
            <Icon style={{ fontSize: '14px' }} />
            <span style={{ fontSize: '12px' }}>{activeUsersCount}</span>
        </div>
    );
};

export default Watcher;
