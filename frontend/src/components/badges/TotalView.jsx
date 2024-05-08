import React from "react";
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions.js";
import { EyeOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const TotalView = ({ totalUsersCount }) => {
    const { screenSize } = useScreenDimensions();

    const style = {
        position: 'fixed',
        border: 'none',
        bottom: "2px",
        right: "20px",
        zIndex: "10",
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    if (screenSize === ScreenSize.XS) {
        style.right = "10px";
        style.fontSize = "14px";
        return (
            <div style={style}>
                <EyeOutlined style={{ marginRight: '5px' }} />
                <small> {totalUsersCount} </small>
            </div>
        );
    };

    return (
        <Tooltip placement="top" title={`Watching: ${totalUsersCount}`}>
            <div style={style}>
                <EyeOutlined style={{ marginRight: '5px' }} />
                <small> {totalUsersCount} </small>
            </div>
        </Tooltip>
    );
};

export default TotalView;
