import React, { useState, useEffect } from 'react';
import { Card, List, Statistic } from 'antd';
import { RiFocus3Fill } from 'react-icons/ri';
import { FaListAlt } from 'react-icons/fa';
import { MdTipsAndUpdates, MdOutlineTask } from 'react-icons/md';
import CountUp from 'react-countup';
import RoadmapCard from './cards/RoadmapCard';
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

interface Column {
    title: string;
    icon: React.ReactNode;
}

interface RoadmapOneYearProps {
    data: Task[];
    loading: boolean;
}

const columns: Column[] = [
    { title: 'Ideas', icon: <MdTipsAndUpdates /> },
    { title: 'Todo', icon: <FaListAlt /> },
    { title: 'Focusing', icon: <RiFocus3Fill /> },
    { title: 'Done', icon: <MdOutlineTask /> },
];

const RoadmapOneYear: React.FC<RoadmapOneYearProps> = ({ data, loading }) => {
    const [roadmapList, setRoadmapList] = useState<Task[]>(data);

    useEffect(() => {
        setRoadmapList(data);
    }, [data, loading]);

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
        return roadmapList.filter((task) => getColumnIndex(task.status) === statusIndex);
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
