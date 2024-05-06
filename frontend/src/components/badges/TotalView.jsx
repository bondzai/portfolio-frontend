import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions.js";


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
        bottom: "5px",
        right: "20px",
        zIndex: "10",
        color: 'white',
    };

    if (screenSize === ScreenSize.XS) {
        style.bottom = "7.5px";
        style.right = "10px";
        style.fontSize = "14px";
    }

    return (
        <div style={style}>
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
