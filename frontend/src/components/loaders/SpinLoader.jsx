import React from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";
import "./SpinLoader.css";

const SpinLoader = ({ customColor, customHeight}) => {
    const dynamicStyle = {
        "--custom-spin-color": customColor || "#1677ff",
        "--custom-spin-height": customHeight || "100vh",
    };

    return (
        <div className="spin-container" style={dynamicStyle}>
            <Spin size="large" />
        </div>
    );
};

SpinLoader.propTypes = {
    customColor: PropTypes.string,
};

export default SpinLoader;
