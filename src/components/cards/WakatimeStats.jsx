import React, { useState, useEffect } from "react";
import SpinLoader from "../loaders/SpinLoader.jsx";
import { getWakatimeStats } from "../../apis/rest/WakatimeStats.js";
import ReactEcharts from 'echarts-for-react';
import { Row, Col, Card, Avatar, Typography, Divider, Button, Space } from "antd";
import { UserOutlined, CodeOutlined, LaptopOutlined, AppstoreOutlined, LinkOutlined } from "@ant-design/icons";
import GitHubCalendar from 'react-github-calendar';
import "./Wakatime.css";

const { Title, Text } = Typography;

// Card styles for dark theme
const cardStyle = {
    background: 'var(--color-deep)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
};

const cardHeadStyle = {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#f5f5f5',
    padding: '12px 16px',
    minHeight: 'auto',
};

const cardBodyStyle = {
    padding: '16px',
    color: '#f5f5f5',
};

const WakatimeStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getWakatimeStats();
                setStats(data);
            } catch (e) {
                console.error(e);
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, []);

    if (loading) return (
        <Card style={{ ...cardStyle, display: 'flex', justifyContent: 'center', height: '300px', alignItems: 'center' }}>
            <SpinLoader customColor="whitesmoke" customHeight="50px" />
        </Card>
    );
    
    if (error || !stats) return (
        <Card style={{ ...cardStyle, textAlign: 'center' }}>
            <h3>Unable to load stats</h3>
            <p>{error || "No data available"}</p>
        </Card>
    );

    // Chart configs
    const getBarOption = (data = [], color) => ({
        tooltip: { 
            trigger: 'axis', 
            axisPointer: { type: 'shadow' },
            formatter: (params) => {
                const item = params[0];
                const dataItem = data[item.dataIndex];
                const percent = item.value || 0;
                return `${item.name}<br/>${percent}%<br/>${dataItem?.text || ''}`;
            }
        },
        grid: { left: '3%', right: '15%', bottom: '3%', top: '3%', containLabel: true },
        xAxis: { type: 'value', show: false },
        yAxis: { 
            type: 'category', 
            data: data.map(i => i.name), 
            axisLabel: { 
                color: '#f5f5f5',
                width: 80,
                overflow: 'truncate'
            }, 
            axisLine: { show: false }, 
            axisTick: { show: false } 
        },
        series: [{ 
            type: 'bar', 
            data: data.map(i => i.percent), 
            itemStyle: { color, borderRadius: [0, 4, 4, 0] }, 
            label: { 
                show: true, 
                position: 'right', 
                color: '#f5f5f5', 
                formatter: (params) => `${params.value}%`
            },
            barWidth: '60%'
        }]
    });

    const languages = stats.languages ? stats.languages.slice(0, 8) : [];
    const editors = stats.editors ? stats.editors.slice(0, 5) : [];
    const os = stats.operating_systems ? stats.operating_systems.slice(0, 5) : [];

    // DRY Component for Stat Cards using Ant Design Card
    const StatCard = ({ title, icon, data, color, extra }) => (
        <Card
            title={<span style={{ color: '#f5f5f5' }}>{icon} {title}</span>}
            extra={extra}
            style={cardStyle}
            styles={{ header: cardHeadStyle, body: { padding: '8px' } }}
            size="small"
        >
            <ReactEcharts 
                option={getBarOption(data, color)} 
                style={{ height: '220px', width: '100%' }} 
                opts={{ renderer: 'svg' }}
            />
        </Card>
    );

    return (
        <div className="wakatime-dashboard">
            <Row gutter={[16, 16]}>
                {/* Profile Section */}
                <Col xs={24} lg={6}>
                    <Card style={cardStyle} styles={{ body: cardBodyStyle }}>
                        <Space direction="vertical" size="middle" style={{ width: '100%', textAlign: 'center' }}>
                            <a href="https://wakatime.com/@bondzai" target="_blank" rel="noopener noreferrer">
                                <Avatar 
                                    size={100} 
                                    src="https://wakatime.com/photo/db315f08-0ee9-40ea-ae79-5bde24c123db" 
                                    icon={<UserOutlined />} 
                                    shape="square" 
                                    style={{ borderRadius: '12px' }}
                                />
                            </a>
                            <div>
                                <Title level={4} style={{ margin: 0, color: '#f5f5f5' }}>
                                    <a href="https://wakatime.com/@bondzai" target="_blank" rel="noopener noreferrer" style={{ color: '#f5f5f5' }}>
                                        Puritat Chamart
                                    </a>
                                </Title>
                                <Text style={{ color: '#b0b0b0' }}>@bondzai</Text>
                            </div>
                            
                            <div style={{ background: 'rgba(88, 166, 255, 0.1)', border: '1px solid rgba(88, 166, 255, 0.2)', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
                                <div style={{ color: '#58a6ff', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '4px' }}>
                                    {stats.human_readable_total_including_other_language}
                                </div>
                                <div style={{ color: '#f5f5f5', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    TOTAL CODING TIME
                                </div>
                            </div>

                            <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '8px 0' }} />
                            
                            <Space direction="vertical" size="small" style={{ width: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 8px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                                    <span style={{ color: '#ffffff !important' }}>Daily Average</span>
                                    <span style={{ color: '#ffffff !important', fontWeight: '500' }}>
                                        {stats.human_readable_daily_average_including_other_language || stats.human_readable_daily_average || 'N/A'}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 8px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                                    <span style={{ color: '#ffffff !important' }}>Joined</span>
                                    <span style={{ color: '#ffffff !important', fontWeight: '500' }}>Jul 19 2022</span>
                                </div>
                            </Space>

                            <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '8px 0' }} />
                            
                            <Button 
                                type="primary" 
                                ghost 
                                icon={<LinkOutlined />} 
                                href="https://wakatime.com/@bondzai" 
                                target="_blank"
                                style={{ borderRadius: '20px', color: '#58a6ff', borderColor: '#58a6ff' }}
                            >
                                View WakaTime Profile
                            </Button>
                            <span style={{ color: '#ffffff !important', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                POWERED BY WAKATIME
                            </span>
                        </Space>
                    </Card>
                </Col>

                {/* Main Stats Section */}
                <Col xs={24} lg={18}>
                    <Space direction="vertical" size={16} style={{ width: '100%' }}>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={8}>
                                <StatCard 
                                    title="Top Languages" 
                                    icon={<CodeOutlined />} 
                                    data={languages} 
                                    color="#58a6ff" 
                                />
                            </Col>
                            <Col xs={24} md={8}>
                                <StatCard 
                                    title="Top Editors" 
                                    icon={<LaptopOutlined />} 
                                    data={editors} 
                                    color="#bc8cff" 
                                />
                            </Col>
                            <Col xs={24} md={8}>
                                <StatCard 
                                    title="Top OS" 
                                    icon={<AppstoreOutlined />} 
                                    data={os} 
                                    color="#d2a8ff" 
                                />
                            </Col>
                        </Row>

                        {/* Activity Heatmap */}
                        <div style={{ 
                            background: 'var(--color-deep)', 
                            border: '1px solid rgba(255, 255, 255, 0.1)', 
                            borderRadius: '12px',
                            padding: '16px'
                        }}>
                            <div style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                marginBottom: '16px',
                                paddingBottom: '12px',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <h3 style={{ margin: 0, color: 'var(--text-color-primary)', fontSize: '16px', fontWeight: '600' }}>
                                    GitHub Contribution Activity
                                </h3>
                                <Space size="small">
                                    <a href="https://github.com/bondzai" target="_blank" rel="noopener noreferrer" style={{ 
                                        color: 'var(--text-color-primary)', 
                                        background: 'rgba(255,255,255,0.05)', 
                                        padding: '2px 8px', 
                                        borderRadius: '4px', 
                                        fontSize: '12px', 
                                        textDecoration: 'none' 
                                    }}>
                                        Source: GitHub
                                    </a>
                                    <span title="Visit WakaTime profile to view full coding stats" style={{ 
                                        cursor: 'help', 
                                        color: 'var(--text-color-primary)' 
                                    }}>ⓘ</span>
                                </Space>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <GitHubCalendar 
                                    username="bondzai" 
                                    blockSize={12}
                                    blockMargin={3}
                                    fontSize={12}
                                    showWeekdayLabels
                                    theme={{
                                        level0: "#161b22",
                                        level1: "#0e4429",
                                        level2: "#006d32",
                                        level3: "#26a641",
                                        level4: "#39d353",
                                    }}
                                />
                            </div>
                        </div>
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default WakatimeStats;
