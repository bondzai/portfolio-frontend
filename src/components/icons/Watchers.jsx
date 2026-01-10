import React, { useState, useEffect } from "react";
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions.js";
import { EyeOutlined, EyeInvisibleOutlined, SyncOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import "./Watchers.css";


const Watchers = ({ activeUsersCount, isConnected }) => {
    const { screenSize } = useScreenDimensions();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900);

        return () => clearTimeout(timer);
    }, []);

    const style = {
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

    const badge = <div className={`status-badge ${isConnected ? "connected" : "disconnected"}`} />;
    const tooltipTitle = `Watching: ${activeUsersCount} • ${isConnected ? "Connected" : "Disconnected"}`;
    const Icon = isConnected ? EyeOutlined : EyeInvisibleOutlined;

    if (screenSize === ScreenSize.XS) {
        style.fontSize = "14px";

        return (
            <div style={style}>
                <Icon style={{ marginRight: '5px' }} />
                <small> {activeUsersCount} </small>
                {badge}
            </div>
        );
    }

    return (
        <Tooltip placement="top" title={tooltipTitle}>
            <div style={style}>
                <Icon style={{ marginRight: '5px' }} />
                <small> {activeUsersCount} </small>
                {badge}
            </div>
        </Tooltip>
    );
};

export default Watchers;
