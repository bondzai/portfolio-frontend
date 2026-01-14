import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Progress } from 'antd';
import { LineChartOutlined, DesktopOutlined, ThunderboltOutlined } from '@ant-design/icons';
import OSWindow from '../OSWindow';

const ResourcesWindow = ({ isOpen, onClose, onMinimize, isMinimized, activeUsersCount, isConnected }) => {
    // Internal Mock Resource Data
    const [cpuUsage, setCpuUsage] = useState(30);
    const [memUsage, setMemUsage] = useState(45);

    useEffect(() => {
        if (isOpen) {
            const interval = setInterval(() => {
                setCpuUsage(prev => Math.min(100, Math.max(5, prev + (Math.random() * 10 - 5))));
                setMemUsage(prev => Math.min(100, Math.max(20, prev + (Math.random() * 6 - 3))));
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isOpen]);

    return (
        <OSWindow
            title="System Resources"
            icon={<LineChartOutlined />}
            isOpen={isOpen}
            onClose={onClose}
            onMinimize={onMinimize}
            isMinimized={isMinimized}
            width={400}
            height={350}
        >
            <div style={{ padding: '20px', color: 'white' }}>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Card bordered={false} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                            <div style={{ textAlign: 'center', color: 'white' }}>
                                <DesktopOutlined style={{ fontSize: '24px', color: '#52c41a', marginBottom: '8px' }} />
                                <div style={{ fontSize: '12px', opacity: 0.7 }}>CPU Usage</div>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{Math.round(cpuUsage)}%</div>
                                <Progress percent={Math.round(cpuUsage)} showInfo={false} strokeColor="#52c41a" size="small" />
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card bordered={false} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                            <div style={{ textAlign: 'center', color: 'white' }}>
                                <ThunderboltOutlined style={{ fontSize: '24px', color: '#1890ff', marginBottom: '8px' }} />
                                <div style={{ fontSize: '12px', opacity: 0.7 }}>Memory</div>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{Math.round(memUsage)}%</div>
                                <Progress percent={Math.round(memUsage)} showInfo={false} strokeColor="#1890ff" size="small" />
                            </div>
                        </Card>
                    </Col>
                </Row>

                <div style={{ marginTop: '20px', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '12px' }}>
                    <h5 style={{ color: 'white', margin: '0 0 10px 0' }}>Network Status</h5>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ opacity: 0.8 }}>Status</span>
                        <span style={{ color: isConnected ? '#52c41a' : '#ff4d4f' }}>{isConnected ? 'Connected' : 'Disconnected'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ opacity: 0.8 }}>Active Sessions</span>
                        <span style={{ fontWeight: 'bold' }}>{activeUsersCount} users</span>
                    </div>
                </div>
            </div>
        </OSWindow>
    );
};

export default ResourcesWindow;
