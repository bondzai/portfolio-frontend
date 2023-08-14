import React, { useState, useEffect } from 'react';

import SpinComponent from "../components/SpinComponent";

import { getWakatimeStat } from '../apis/WakatimeStat';

import '../styles/WakatimeStat.css';

const WakatimeStats = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getWakatimeStat();
            setStats(result);
        };
        fetchData();
    }, []);

    if (!stats) {
        return <SpinComponent />
    }

    return (
        <div className='wakatime-stat'>
            <strong>WakaTime stat: {stats.human_readable_range}</strong>
            <p>Total development time: {stats.human_readable_total_including_other_language}</p>
            <p> OS <br />
                &emsp; - {stats.operating_systems[0].name}: {stats.operating_systems[0].text} ({stats.operating_systems[0].percent} %)<br />
                &emsp; - {stats.operating_systems[1].name}: {stats.operating_systems[1].text} ({stats.operating_systems[1].percent} %) <br />
                &emsp; - {stats.operating_systems[2].name}: {stats.operating_systems[2].text} ({stats.operating_systems[2].percent} %) <br />
            </p>
            <p> IDE <br />
                &emsp; - {stats.editors[0].name}: {stats.editors[0].text} ({stats.editors[0].percent} %)<br />
                &emsp; - {stats.editors[1].name}: {stats.editors[1].text} ({stats.editors[1].percent} %) <br />
                &emsp; - {stats.editors[2].name}: {stats.editors[2].text} ({stats.editors[2].percent} %) <br />
            </p>
            <p> Top 5 languages <br />
                &emsp; - {stats.languages[0].name}: {stats.languages[0].text} ({stats.languages[0].percent} %)<br />
                &emsp; - {stats.languages[1].name}: {stats.languages[1].text} ({stats.languages[1].percent} %) <br />
                &emsp; - {stats.languages[2].name}: {stats.languages[2].text} ({stats.languages[2].percent} %) <br />
                &emsp; - {stats.languages[3].name}: {stats.languages[3].text} ({stats.languages[3].percent} %) <br />
                &emsp; - {stats.languages[4].name}: {stats.languages[4].text} ({stats.languages[4].percent} %) <br />
            </p>
            <p> Best day <br />
                &emsp; - {stats.best_day.date}: {stats.best_day.text} <br />
            </p>

        </div>
    );
};

export default WakatimeStats;
