import React from "react";
import { Space } from "antd";
import WakatimeStat from "../components/WakatimeStats";
import GitHub from "../components/GitHub";
import "../styles/Stats.css";

const Stats = () => {
    return (
        <div className="background">
            <Space direction="vertical" size="large" style={{ display: "flex" }}>
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
