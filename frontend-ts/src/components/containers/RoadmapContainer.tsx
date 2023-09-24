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

const RoadmapContainer: React.FC<RoadmapTasksType> = ({ data, loading }) => {
    const [roadmapList, setRoadmapList] = useState<RoadmapTaskType[]>(data);
    const [filteredLists, setFilteredLists] = useState<Record<number, RoadmapTaskType[]>>({});

    useEffect(() => {
        setRoadmapList(data);

        const newFilteredLists: Record<number, RoadmapTaskType[]> = {};
        for (let i = 0; i < columns.length; i++) {
            newFilteredLists[i] = roadmapList.filter((task) => task.status === i);
        }
        
        setFilteredLists(newFilteredLists);
    }, [data, loading]);

    const renderCardTitle = (icon: React.ReactNode, title: string) => (
        <div className="card-title">
            {icon || null}
            <span className="title-text">{title}</span>
        </div>
    );

    const renderStatistic = (value: number) => (
        <Statistic
            title="Total"
            value={value}
            valueStyle={{ fontSize: '15px' }}
            suffix="tasks"
            formatter={(value) => <CountUp end={+value} separator="," />}
        />
    );

    const renderCard = (item: RoadmapColumnType, index: number) => {
        const filteredList = filteredLists[index] || [];
        return (
            <List.Item key={item.title}>
                <Card
                    title={renderCardTitle(item.icon, item.title)}
                    extra={renderStatistic(filteredList.length)}
                    style={{ width: 360 }}
                >
                    <RoadmapCard data={filteredList} />
                </Card>
            </List.Item>
        );
    };

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
