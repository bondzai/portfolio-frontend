import React from "react";
import { EyeOutlined } from '@ant-design/icons';
import { Avatar, Badge, Tooltip } from 'antd';

const Watchers = ({ activeUsersCount }) => {
    return (
        <div
            style={{
                position: 'fixed',
                padding: '10px 10px',
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                opacity: 0.95,
                bottom: "50px",
                left: "20px",
            }}
        >
            <Tooltip title={`Active Users: ${activeUsersCount}`}>
                <Badge count={activeUsersCount} style={{ backgroundColor: "green" }}>
                    <Avatar shape="circle" icon={<EyeOutlined />} />
                </Badge>
            </Tooltip>
        </div>
    )
}

export default Watchers;
