import React from 'react';
import { Card, List, Statistic } from 'antd';
import '../styles/Roadmap.css';
import RoadmapCard from '../components/RoadmapCard';
import CountUp from 'react-countup';

const table = [
    {
        title: 'Ideas',
    },
    {
        title: 'Todo',
    },
    {
        title: 'Focus',
    },
    {
        title: 'Done',
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
                        title={item.title}
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