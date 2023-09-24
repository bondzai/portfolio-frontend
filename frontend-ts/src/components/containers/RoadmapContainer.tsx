import React, { useState, useEffect } from "react";

import { Card, List, Statistic } from "antd";

import { RiFocus3Fill } from "react-icons/ri";
import { FaListAlt } from "react-icons/fa";
import { MdTipsAndUpdates, MdOutlineTask } from "react-icons/md";

import CountUp from "react-countup";

import RoadmapCard from "../cards/RoadmapCard";

import { RoadmapColumnType, RoadmapTaskType, RoadmapTasksType } from "../../types";

import '../../styles/Roadmap.css';

const columns: RoadmapColumnType[] = [
    { title: 'Ideas', icon: <MdTipsAndUpdates /> },
    { title: 'Todo', icon: <FaListAlt /> },
    { title: 'Focusing', icon: <RiFocus3Fill /> },
    { title: 'Done', icon: <MdOutlineTask /> },
];

const CardTitle: React.FC<{ icon: React.ReactNode, title: string }> = ({ icon, title }) => (
    <div className="card-title">
        {icon}
        <span className="title-text">{title}</span>
    </div>
);

const CardStatistic: React.FC<{ value: number }> = ({ value }) => (
    <Statistic
        title="Total"
        value={value}
        valueStyle={{ fontSize: '15px' }}
        suffix="tasks"
        formatter={(value) => <CountUp end={+value} separator="," />}
    />
);

const RoadmapContainer: React.FC<RoadmapTasksType> = ({ data }) => {
    const [taskListsByStatus, setTaskListsByStatus] = useState<Record<number, RoadmapTaskType[]>>({});

    useEffect(() => {
        const newTaskLists: Record<number, RoadmapTaskType[]> = {};
        columns.forEach((_, index) => {
            newTaskLists[index] = data.filter(task => task.status === index);
        });
        setTaskListsByStatus(newTaskLists);
    }, [data]);

    return (
        <div>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={columns}
                renderItem={({ title, icon }, index) => {
                    const tasksForColumn = taskListsByStatus[index] || [];
                    return (
                        <List.Item key={title}>
                            <Card
                                title={<CardTitle icon={icon} title={title} />}
                                extra={<CardStatistic value={tasksForColumn.length} />}
                                style={{ width: 360 }}
                            >
                                <RoadmapCard data={tasksForColumn} />
                            </Card>
                        </List.Item>
                    );
                }}
            />
        </div>
    );
};

export default RoadmapContainer;
