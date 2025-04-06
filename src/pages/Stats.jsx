import React from "react";
import { Space } from "antd";
import WakatimeStat from "../components/cards/WakatimeStats";
import GitHub from "../components/cards/GitHub";
import "./Stats.css";


const Stats = () => {
    return (
        <div className="stat-background">
            <Space direction="vertical" size="large" className="stat-container">
                <div className="stats-waka">
                    <WakatimeStat />
                </div>
                <div className="stats-github">
                    <GitHub />
                </div>
            </Space>
        </div>
    );
};

export default Stats;
