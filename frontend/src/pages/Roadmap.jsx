import React from 'react';
import { Card, List, Statistic } from 'antd';
import CountUp from 'react-countup';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { RiFocus3Fill } from 'react-icons/ri';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RoadmapCard from '../components/RoadmapCard';
import '../styles/Roadmap.css';

const table = [
    {
        title: 'Ideas',
        icon: <TipsAndUpdatesIcon />,
    },
    {
        title: 'Todo',
        icon: <ListAltIcon />,
    },
    {
        title: 'Focusing',
        icon: <RiFocus3Fill />,
    },
    {
        title: 'Done',
        icon: <TaskAltIcon />,
    },
];

const formatter = (value) => <CountUp end={value} separator="," />;

const Roadmap = () => (
    <div className='roadmap-background'>
        <List
            grid={{
                gutter: 16,
                column: 4,
            }}
            dataSource={table}
            renderItem={(item) => (
                <List.Item>
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
                                value={112893}
                                valueStyle={{ fontSize: '15px' }}
                                suffix="tasks"
                                formatter={formatter}
                            />
                        }
                        style={{
                            width: 360,
                        }}
                    >
                        <RoadmapCard />
                    </Card>
                </List.Item>
            )}
        />
    </div>
);

export default Roadmap;
