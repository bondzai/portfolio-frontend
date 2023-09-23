import React from "react";

import PropTypes from "prop-types";

import { Spin } from "antd";

import "../styles/SpinComponent.css";

const SpinComponent = ({ customColor, customHeight}) => {
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

SpinComponent.propTypes = {
    customColor: PropTypes.string,
};

export default SpinComponent;
