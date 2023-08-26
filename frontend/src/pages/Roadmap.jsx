import React from 'react';
import { Card, List } from 'antd';
import '../styles/Roadmap.css';
import RoadmapCard from '../components/RoadmapCard';

const data = [
    {
        title: 'Ideas',
        content: "",
    },
    {
        title: 'Todo',
        content: "",
    },
    {
        title: 'Focus',
        content: ["a", "b"],
    },
    {
        title: 'Done',
        content: "",
    },
];

const Roadmap = () => (
    <div className='roadmap-background'>
        <List
            grid={{
                gutter: 16,
                column: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <Card 
                        title={item.title}
                        extra={<a href="#">More</a>}
                        style={{
                            width: 360,
                        }}                   
                    >
                        <RoadmapCard/>
                    </Card>
                    
                </List.Item>
            )}
        />
    </div>
);

export default Roadmap;