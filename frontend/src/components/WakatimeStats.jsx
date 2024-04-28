import React, { useState, useEffect } from "react";
import SpinLoader from "./loaders/SpinLoader";
import { getWakatimeStats } from "../apis/rest/WakatimeStats";
import { globalDelay } from "../utils/constants.js";
import "./Wakatime.css";
import PieChart from "../components/cards/Piechart.jsx";

const WakatimeStats = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const result = await getWakatimeStats();
                setStats(result);
            }, globalDelay);
        };
        fetchData();
    }, []);

    if (!stats) {
        return (
            <SpinLoader customColor="whitesmoke" customHeight="330px" />
        );
    };

    const os = stats.operating_systems.map(item => ({ value: item.percent, name: item.name, text: item.text }));
    const editor = stats.editors.map(item => ({ value: item.percent, name: item.name, text: item.text }));
    const language = stats.languages.map(item => ({ value: item.percent, name: item.name, text: item.text }));

    return (
        <div className="wakatime-stats">
            <PieChart data={os} />
            <PieChart data={editor} />
            <PieChart data={language} />
        </div>
    );
};

export default WakatimeStats;
