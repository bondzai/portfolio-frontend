import React, { useState, useEffect } from "react";
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions.js";
import { EyeOutlined, SyncOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';


const Watchers = ({ activeUsersCount }) => {
    const { screenSize } = useScreenDimensions();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900);

        return () => clearTimeout(timer);
    }, []);

    const style = {
        position: 'fixed',
        border: 'none',
        bottom: "1px",
        right: "20px",
        zIndex: "10",
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    if (loading) {
        return (
            <div style={style}>
                <SyncOutlined className="status-icon" spin />
            </div>
        );
    }

    if (screenSize === ScreenSize.XS) {
        style.right = "10px";
        style.fontSize = "14px";

        return (
            <div style={style}>
                <EyeOutlined style={{ marginRight: '5px' }} />
                <small> {activeUsersCount} </small>
            </div>
        );
    }

    return (
        <Tooltip placement="top" title={`Watching: ${activeUsersCount}`}>
            <div style={style}>
                <EyeOutlined style={{ marginRight: '5px' }} />
                <small> {activeUsersCount} </small>
            </div>
        </Tooltip>
    );
};

export default Watchers;
