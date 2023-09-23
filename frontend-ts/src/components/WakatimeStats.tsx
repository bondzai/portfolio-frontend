import { FC, useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import { getWakatimeStats } from '../apis/rest/endpoints';
import '../styles/WakatimeStats.css';

interface WakatimeStatsProps { }

interface Stats {
    human_readable_total_including_other_language: string;
    operating_systems: {
        name: string;
        text: string;
        percent: number;
    }[];
    editors: {
        name: string;
        text: string;
        percent: number;
    }[];
    languages: {
        name: string;
        text: string;
        percent: number;
    }[];
}

const WakatimeStats: FC<WakatimeStatsProps> = () => {
    const [stats, setStats] = useState<Stats | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getWakatimeStats();
            setStats(result);
        };
        fetchData();
    }, []);

    return (
        <div className='wakatime-stats'>
            <div className='title-center'>
                <h3>WakaTime Stats</h3>
            </div>

            <Descriptions bordered>
                <Descriptions.Item label='Total development time since Jul 19 2022: '>
                    {stats?.human_readable_total_including_other_language}
                </Descriptions.Item>
            </Descriptions>
            <Descriptions layout='vertical' bordered className='first-row-highlight'>
                <Descriptions.Item label='Operating Systems'>
                    {stats?.operating_systems.map((os) => (
                        <p key={os.name}>
                            {os.name}: {os.text} ({os.percent}%)
                        </p>
                    ))}
                </Descriptions.Item>
                <Descriptions.Item label='IDEs'>
                    {stats?.editors.map((editor) => (
                        <p key={editor.name}>
                            {editor.name}: {editor.text} ({editor.percent}%)
                        </p>
                    ))}
                </Descriptions.Item>
                <Descriptions.Item label='Top 3 Languages'>
                    {stats?.languages.slice(0, 3).map((language) => (
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
