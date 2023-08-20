import React from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";
import "../styles/SpinComponent.css";

const SpinComponent = ({ customColor }) => {
    const dynamicStyle = {
        "--custom-spin-color": customColor || "#1677ff",
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
