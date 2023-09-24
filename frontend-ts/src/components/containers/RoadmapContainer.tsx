import React, { useState, useEffect } from 'react';
import { Card, List, Statistic } from 'antd';
import { RiFocus3Fill } from 'react-icons/ri';
import { FaListAlt } from 'react-icons/fa';
import { MdTipsAndUpdates, MdOutlineTask } from 'react-icons/md';
import CountUp from 'react-countup';
import RoadmapCard from '../cards/RoadmapCard';
import '../../styles/Roadmap.css';

import { RoadmapColumnType, RoadmapTaskType, RoadmapTasksType } from "../../types";

const columns: RoadmapColumnType[] = [
    { title: 'Ideas', icon: <MdTipsAndUpdates /> },
    { title: 'Todo', icon: <FaListAlt /> },
    { title: 'Focusing', icon: <RiFocus3Fill /> },
    { title: 'Done', icon: <MdOutlineTask /> },
];

const statusToColumnIndex: Record<number, number> = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
};

const RoadmapContainer: React.FC<RoadmapTasksType> = ({ data, loading }) => {
    const [roadmapList, setRoadmapList] = useState<RoadmapTaskType[]>(data);

    useEffect(() => {
        setRoadmapList(data);
    }, [data, loading]);

    const getFilteredRoadmapList = (statusIndex: number): RoadmapTaskType[] => {
        return roadmapList.filter((task) => statusToColumnIndex[task.status] === statusIndex);
    };

    const renderCard = (item: RoadmapColumnType, index: number) => (
        <List.Item key={item.title}>
            <Card
                title={
                    <div className="card-title">
                        {item.icon}
                        <span className="title-text">{item.title}</span>
                    </div>
                }
                extra={
                    <Statistic
                        title="Total"
                        value={getFilteredRoadmapList(index).length}
                        valueStyle={{ fontSize: '15px' }}
                        suffix="tasks"
                        formatter={(value) => <CountUp end={+value} separator="," />}
                    />
                }
                style={{ width: 360 }}
            >
                <RoadmapCard data={getFilteredRoadmapList(index)} />
            </Card>
        </List.Item>
    );

    return (
        <div>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={columns}
                renderItem={renderCard}
            />
        </div>
    );
};

export default RoadmapContainer;
