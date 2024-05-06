import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions.js";
import { EyeOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const TotalView = ({ totalUsersCount }) => {
    const { screenSize } = useScreenDimensions();
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFirstRender(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

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
    }

    return (
        <div style={style}>
            <EyeOutlined style={{ marginRight: '5px' }} />
            <small>
                {firstRender ? (
                    <CountUp end={totalUsersCount} separator="," />
                ) : (
                    totalUsersCount
                )}
            </small>
        </div>
    );
};

export default TotalView;
