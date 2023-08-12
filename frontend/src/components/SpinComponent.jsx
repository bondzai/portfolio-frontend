import React from "react";
import { Spin } from "antd";
import "../styles/SpinComponent.css";

const SpinComponent = () => (
    <div className="spin-container">
        <Spin size="large" />
    </div>
);

export default SpinComponent;
