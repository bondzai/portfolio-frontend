import { useState, useEffect } from 'react';

import { Card, Tabs } from 'antd';

import RoadmapOneYear from '../components/RoadmapOneYear';

import { getRoadmapList } from '../apis/rest/endpoints';

import '../styles/Roadmap.css';

import { RoadmapTask } from "../types/index";

const years = [
    {
        label: '2022',
        key: '2022',
    },
    {
        label: '2023',
        key: '2023',
    },
];

const Roadmap = () => {
    const [roadmapList, setRoadmapList] = useState<RoadmapTask[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedYear, setSelectedYear] = useState<string>("2023");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: RoadmapTask[] = await getRoadmapList();
                setRoadmapList(result);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const filteredRoadmapList = roadmapList.filter(data => {
        // todo strong type data from API
        return data.year == selectedYear; 
    });

    return (
        <div className='roadmap-background'>
            <div className='roadmap-content'>
                <Card bordered={false}>
                    <Tabs
                        defaultActiveKey={selectedYear}
                        items={years}
                        onChange={year => setSelectedYear(year)}
                    />
                    <RoadmapOneYear loading={loading} data={filteredRoadmapList} />
                </Card>
            </div>
        </div>
    );
};

export default Roadmap;
