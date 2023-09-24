import React, { FC } from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";
import "../styles/SpinComponent.css";

interface SpinComponentProps {
    customColor?: string;
    customHeight?: string;
}

interface CustomCSSProperties extends React.CSSProperties {
    '--custom-spin-color'?: string;
    '--custom-spin-height'?: string;
}

const SpinComponent: FC<SpinComponentProps> = ({ customColor, customHeight }) => {
    const dynamicStyle: CustomCSSProperties = {
        '--custom-spin-color': customColor || "#1677ff",
        '--custom-spin-height': customHeight || "100vh",
    };

    return (
        <div className="spin-container" style={dynamicStyle}>
            <Spin size="large" />
        </div>
    );
};

SpinComponent.propTypes = {
    customColor: PropTypes.string,
    customHeight: PropTypes.string
};

export default SpinComponent;
