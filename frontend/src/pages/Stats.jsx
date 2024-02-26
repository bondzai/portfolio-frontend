import React from "react";
import { Space } from "antd";
import SocialMediaIcons from "../components/SocialMediaIcons";
import WakatimeStat from "../components/WakatimeStats";
import Github from "../components/Github";
import Counter from "../components/Counter";
import "../styles/Stats.css";

const Stats = () => {

    return (
        <div className="stats-background">
            <div className="stats-content">
                <Space direction="vertical" size="large" style={{ display: "flex" }}>
                    <div className="stats-waka">
                        <WakatimeStat />
                    </div>
                    <div className="stats-github">
                        <Github />
                    </div>
                    <SocialMediaIcons />
                </Space>
            </div>
            <div className="footer">
                <div>
                    <Counter />
                </div>
            </div>
        </div>
    );
};

export default Stats;
