import React from 'react';
import { Timeline, Card, Tag, Typography } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, SyncOutlined, RocketOutlined } from '@ant-design/icons';
import './Roadmap.css';

const { Title, Text } = Typography;

const Roadmap = () => {
    return (
        <div className="roadmap-section">
            <div className="roadmap-container">
                <div className="roadmap-header">
                    <Title level={2} style={{ color: 'white', margin: 0 }}>
                        <RocketOutlined style={{ marginRight: '10px' }} />
                        Project Roadmap
                    </Title>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Tracking the evolution of Portfolio OS.
                    </Text>
                </div>

                <div className="roadmap-content">
                    <Timeline
                        mode="left"
                        items={[
                            {
                                color: 'green',
                                dot: <CheckCircleOutlined style={{ fontSize: '16px' }} />,
                                children: (
                                    <Card className="roadmap-card completed">
                                        <div className="card-header">
                                            <Tag color="green">Completed</Tag>
                                            <span className="phase-date">2022</span>
                                        </div>
                                        <Title level={4} style={{ color: 'white', marginTop: '10px' }}>Phase 1: Foundation</Title>
                                        <ul className="roadmap-list">
                                            <li>Core OS Architecture (Windows, Taskbar)</li>
                                            <li>Basic App Suite (About, Skills, Projects)</li>
                                            <li>Responsive Mobile Design</li>
                                            <li>Glassmorphism UI System</li>
                                        </ul>
                                    </Card>
                                ),
                            },
                            {
                                color: 'blue',
                                dot: <SyncOutlined spin style={{ fontSize: '16px' }} />,
                                children: (
                                    <Card className="roadmap-card active">
                                        <div className="card-header">
                                            <Tag color="blue" className="pulsing-tag">In Progress</Tag>
                                            <span className="phase-date">Q1 2026</span>
                                        </div>
                                        <Title level={4} style={{ color: 'white', marginTop: '10px' }}>Phase 2: Expansion & Polish</Title>
                                        <ul className="roadmap-list">
                                            <li>Global State Management Refactor</li>
                                            <li>Enhanced Settings & Customization</li>
                                            <li>Beta: Roadmap & Art Studio Integration</li>
                                            <li>System Notification System v2</li>
                                        </ul>
                                    </Card>
                                ),
                            },
                            {
                                color: 'gray',
                                dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                                children: (
                                    <Card className="roadmap-card future">
                                        <div className="card-header">
                                            <Tag color="default">Planned</Tag>
                                            <span className="phase-date">Q2 2026+</span>
                                        </div>
                                        <Title level={4} style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '10px' }}>Phase 3: The Ecosystem</Title>
                                        <ul className="roadmap-list">
                                            <li>Real-time Collaboration Features</li>
                                            <li>Art Studio: Interactive Canvas</li>
                                            <li>File System persistence (IndexedDB)</li>
                                            <li>3rd Party App Store Mockup</li>
                                        </ul>
                                    </Card>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
