import React, { useState, useEffect } from 'react';
import { Descriptions } from 'antd';
import SpinComponent from './SpinComponent';
import { getWakatimeStats } from '../apis/WakatimeStats';
import '../styles/WakatimeStats.css';

const WakatimeStats = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getWakatimeStats();
            setStats(result);
        };
        fetchData();
    }, []);

    if (!stats) {
        return <SpinComponent customColor="whitesmoke" />;
    }

return (
    <div className='wakatime-stats'>
        <div className='title-center'>
            <h3>WakaTime Stats</h3>
        </div>

        <Descriptions bordered>
            <Descriptions.Item label='Since Jul 19 2022'>
                Total development time: {stats.human_readable_total_including_other_language} / Best day: {stats.best_day.date} ({stats.best_day.text})
            </Descriptions.Item>
        </Descriptions>
        <Descriptions layout="vertical" bordered className='first-row-highlight'>
            <Descriptions.Item label='Operating Systems'>
                {stats.operating_systems.map(os => (
                    <p key={os.name}>
                        {os.name}: {os.text} ({os.percent}%)
                    </p>
                ))}
            </Descriptions.Item>
            <Descriptions.Item label='IDEs'>
                {stats.editors.map(editor => (
                    <p key={editor.name}>
                        {editor.name}: {editor.text} ({editor.percent}%)
                    </p>
                ))}
            </Descriptions.Item>
            <Descriptions.Item label='Top 3 Languages'>
                {stats.languages.slice(0, 3).map(language => (
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
