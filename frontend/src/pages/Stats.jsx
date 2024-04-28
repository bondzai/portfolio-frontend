import React from "react";
import { Space } from "antd";
import SocialMediaIcons from "../components/SocialMediaIcons";
import WakatimeStat from "../components/WakatimeStats";
import GitHub from "../components/GitHub";
import Counter from "../components/Counter";
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
                <SocialMediaIcons />
            </Space>
            <div className="footer">
                <div>
                    <Counter />
                </div>
            </div>
        </div>
    );
};

export default Stats;
