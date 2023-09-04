import React, { useState, useEffect } from 'react';
import { Card, Tabs } from 'antd';
import RoadmapOneYear from '../components/RoadmapOneYear';
import { getRoadmapList, years } from '../apis/Roadmap';
import '../styles/Roadmap.css';

const Roadmap = () => {
    const [roadmapList, setRoadmapList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedYear, setSelectedYear] = useState('2023');

    useEffect(() => {
        const fetchData = async () => {
            const result = await getRoadmapList();
            setRoadmapList(result);
            setLoading(false);
        };
        fetchData();
    }, []);

    const filteredRoadmapList = roadmapList.filter(data => {
        return data.year == selectedYear
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
