import React, { useState, useEffect } from 'react';
import { Card, List, Statistic } from 'antd';

import { RiFocus3Fill } from 'react-icons/ri';
import { FaListAlt } from 'react-icons/fa';
import { MdTipsAndUpdates, MdOutlineTask } from 'react-icons/md';

import CountUp from 'react-countup';

import RoadmapCard from './cards/RoadmapCard';

const columns = [
    {
        title: 'Ideas',
        icon: 'TipsAndUpdatesIcon',
    },
    {
        title: 'Todo',
        icon: 'ListAltIcon',
    },
    {
        title: 'Focusing',
        icon: 'RiFocus3Fill',
    },
    {
        title: 'Done',
        icon: 'TaskAltIcon',
    },
];

import '../styles/Roadmap.css';

interface Task {
    _id: string;
    description: string;
    sub_tasks: Record<string, string>;
    title: string;
    url: string;
    image: string;
    status: number;
    year: string;
}

interface RoadmapOneYearProps {
    data: Task[];
    loading: boolean;
}

const formatter = (value: number | string) => <CountUp end={+value} separator="," />;

const icons = {
    TipsAndUpdatesIcon: <MdTipsAndUpdates />,
    ListAltIcon: <FaListAlt />,
    RiFocus3Fill: <RiFocus3Fill />,
    TaskAltIcon: <MdOutlineTask />,
};

const RoadmapOneYear: React.FC<RoadmapOneYearProps> = ({ data: propData, loading: propLoading }) => {
    const [roadmapList, setRoadmapList] = useState<Task[]>(propData);

    useEffect(() => {
        setRoadmapList(propData);
    }, [propData, propLoading]);

    const getColumnIndex = (status: number): number => {
        const statusToColumnIndex: Record<number, number> = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
        };
        return statusToColumnIndex[status] || 0;
    };

    const getFilteredRoadmapList = (statusIndex: number): Task[] => {
        return roadmapList.filter((data) => getColumnIndex(data.status) === statusIndex);
    };

    return (
        <div>
            <List
                grid={{
                    gutter: 16,
                    column: 4,
                }}
                dataSource={columns}
                renderItem={(item, index) => (
                    <List.Item key={item.icon}>
                        <Card
                            title={
                                <div className="card-title">
                                    {/* {icons[item.icon]} */}
                                    <span className="title-text">{item.title}</span>
                                </div>
                            }
                            extra={
                                <Statistic
                                    title="Total"
                                    value={getFilteredRoadmapList(index).length}
                                    valueStyle={{ fontSize: '15px' }}
                                    suffix="tasks"
                                    formatter={formatter}
                                />
                            }
                            style={{
                                width: 360,
                            }}
                        >
                            <RoadmapCard data={getFilteredRoadmapList(index)} />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default RoadmapOneYear;
