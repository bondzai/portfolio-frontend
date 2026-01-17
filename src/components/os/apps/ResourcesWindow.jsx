import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Progress } from 'antd';
import { LineChartOutlined, DesktopOutlined, ThunderboltOutlined } from '@ant-design/icons';
import OSWindow from '../OSWindow';

const ResourcesWindow = ({ isOpen, onClose, onMinimize, isMinimized, activeUsersCount, isConnected }) => {
    // Browser Resource Data
    const [memory, setMemory] = useState({ used: 0, total: 0, limit: 0, percent: 0 });
    const [cpuCores, setCpuCores] = useState(navigator.hardwareConcurrency || 4); // Default to 4 if unknown

    useEffect(() => {
        if (isOpen) {
            const updateResources = () => {
                // Memory (Chrome only property)
                if (performance && performance.memory) {
                    const { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } = performance.memory;
                    // Convert to MB
                    const used = usedJSHeapSize / (1024 * 1024);
                    const limit = jsHeapSizeLimit / (1024 * 1024);

                    setMemory({
                        used: used.toFixed(1),
                        total: (totalJSHeapSize / (1024 * 1024)).toFixed(1),
                        limit: limit.toFixed(1),
                        percent: Math.min(100, (used / limit) * 100) // Percent of tab limit
                    });
                } else {
                    // Fallback for non-Chrome browsers
                    setMemory({ used: 'N/A', limit: 'N/A', percent: 0 });
                }
            };

            updateResources();
            const interval = setInterval(updateResources, 2000);
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
                                <div style={{ fontSize: '12px', opacity: 0.7 }}>CPU Cores</div>
                                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{cpuCores}</div>
                                <div style={{ fontSize: '10px', opacity: 0.5 }}>Logical Processors</div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card bordered={false} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                            <div style={{ textAlign: 'center', color: 'white' }}>
                                <ThunderboltOutlined style={{ fontSize: '24px', color: '#1890ff', marginBottom: '8px' }} />
                                <div style={{ fontSize: '12px', opacity: 0.7 }}>JS Heap Memory</div>
                                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{memory.used} MB</div>
                                <Progress percent={memory.percent} showInfo={false} strokeColor="#1890ff" size="small" />
                                <div style={{ fontSize: '10px', opacity: 0.5, marginTop: '4px' }}>of {memory.limit} MB Limit</div>
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
