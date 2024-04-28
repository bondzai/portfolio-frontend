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
        return <SpinLoader customColor="whitesmoke" customHeight="330px" />;
    }

    const osData = stats.operating_systems.map(item => ({ value: item.percent, name: item.name, text: item.text }));
    const editorData = stats.editors.map(item => ({ value: item.percent, name: item.name, text: item.text }));
    const languageData = stats.languages.slice(0, 5).map(item => ({ value: item.percent, name: item.name, text: item.text }));

    return (
        <div className="wakatime-stats">
            <PieChart data={osData} />
            <PieChart data={editorData} />
            <PieChart data={languageData} />
        </div>
    );
};

export default WakatimeStats;
