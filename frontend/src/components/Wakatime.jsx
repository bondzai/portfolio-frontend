import React, { useState, useEffect } from 'react';
import { getWakatimeStat } from '../apis/WakatimeStat';

import SpinComponent from "../components/SpinComponent";

const WakaTimeStats = () => {
    const [stats, setStats] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getWakatimeStat();
            setStats(result);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (!stats) {
        return <SpinComponent />
    }

    return (
        <div>
            <h2>WakaTime Stats for the Last 7 Days</h2>
            <p>human_readable_range: {stats.human_readable_range}</p>
            <p>days_including_holidays: {stats.days_including_holidays}</p>
            <p>human_readable_total_including_other_language: {stats.human_readable_total_including_other_language}</p>
            {/* <p>operating_systems: {stats.operating_systems}</p> */}
            {/* <p>editors: {stats.editors}</p> */}
            {/* <p>languages: {stats.languages}</p> */}
            {/* <p>best_day: {stats.best_day}</p> */}
        </div>
    );
};

export default WakaTimeStats;
