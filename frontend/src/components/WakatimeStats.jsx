import React, { useState, useEffect } from "react";
import { Descriptions } from "antd";
import SpinComponent from "./loaders/SpinComponent";
import { getWakatimeStats } from "../apis/rest/WakatimeStats";
import "../styles/WakatimeStats.css";

const WakatimeStats = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const result = await getWakatimeStats();
                setStats(result);
            }, 1000);
        };
        fetchData();
    }, []);

    if (!stats) {
        return <SpinComponent customColor="whitesmoke" customHeight="330px" />;
    }

    return (
        <div className="wakatime-stats">
            <div className="title-center">
                <h3>WakaTime Stats</h3>
            </div>

            <Descriptions bordered>
                <Descriptions.Item label="Total development time since Jul 19 2022: ">
                    {stats.human_readable_total_including_other_language}
                </Descriptions.Item>
            </Descriptions>
            <Descriptions layout="vertical" bordered className="first-row-highlight">
                <Descriptions.Item label="Operating Systems">
                    {stats.operating_systems.map(os => (
                        <p key={os.name}>
                            {os.name}: {os.text} ({os.percent}%)
                        </p>
                    ))}
                </Descriptions.Item>
                <Descriptions.Item label="IDEs">
                    {stats.editors.map(editor => (
                        <p key={editor.name}>
                            {editor.name}: {editor.text} ({editor.percent}%)
                        </p>
                    ))}
                </Descriptions.Item>
                <Descriptions.Item label="Languages">
                    {stats.languages.slice(0, 5).map(language => (
                        <p key={language.name}>
                            {language.name}: {language.text} ({language.percent}%)
                        </p>
                    ))}
                </Descriptions.Item>
            </Descriptions>

        </div>
    );
};

export default WakatimeStats;
