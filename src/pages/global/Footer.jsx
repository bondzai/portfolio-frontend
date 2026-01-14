
import React, { useState, useEffect } from "react";
import { Layout, Button, Input, Form, message, Progress, Card, Row, Col } from "antd";
import { CalculatorOutlined, BulbOutlined, SendOutlined, SettingOutlined, LineChartOutlined, DesktopOutlined, ThunderboltOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Watcher from "../../components/icons/Watcher";
import Copyright from "../../components/icons/Copyright";
import Counter from "../../components/icons/Counter";
import Version from "../../components/icons/Version";
import ServerStatus from "../../components/icons/ServerStatus";
import SocialMediaIcons from "../../components/icons/SocialMediaIcons";
import StartMenu from "../../components/os/StartMenu";
import OSWindow from "../../components/os/OSWindow";
import { Users } from "../../apis/websocket/Users";
import packageJson from "../../../package.json";
import "./Footer.css";


const { Footer: AntFooter } = Layout;
const { TextArea } = Input;

const Footer = () => {
    const [activeUsersCount, , isConnected] = Users();

    // OS Window States
    const [isCalcOpen, setIsCalcOpen] = useState(false);
    const [isFeatureOpen, setIsFeatureOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    // Mock Resource Data
    const [cpuUsage, setCpuUsage] = useState(30);
    const [memUsage, setMemUsage] = useState(45);

    useEffect(() => {
        if (isResourcesOpen) {
            const interval = setInterval(() => {
                setCpuUsage(prev => Math.min(100, Math.max(5, prev + (Math.random() * 10 - 5))));
                setMemUsage(prev => Math.min(100, Math.max(20, prev + (Math.random() * 6 - 3))));
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isResourcesOpen]);

    const handleFeatureSubmit = () => {
        message.success("Feature request sent to developer!");
        setIsFeatureOpen(false);
    };

    const applyTheme = (theme) => {
        const root = document.documentElement;
        if (theme === 'brown') {
            root.style.setProperty('--const-primary-color', '#2b2626');
            root.style.setProperty('--const-secondary-color', '#423d3d');
            root.style.setProperty('--color-primary', '#2b2626');
            root.style.setProperty('--color-primary-rgb', '43, 38, 38'); /* Brighter warm charcoal */
            root.style.setProperty('--color-secondary', '#423d3d');
            root.style.setProperty('--color-deep', '#1e1b1b');
            root.style.setProperty('--color-highlight', '#d4c5b0');
            root.style.setProperty('--text-color-primary', '#e6e1db');
            root.style.setProperty('--text-color-secondary', '#b0aca8');
            message.success("Applied Zen/Dimmed Theme");
        } else {
            // Default Blue
            root.style.setProperty('--const-primary-color', '#21325e');
            root.style.setProperty('--const-secondary-color', '#3e497a');
            root.style.setProperty('--color-primary', '#21325e');
            root.style.setProperty('--color-primary-rgb', '33, 50, 94');
            root.style.setProperty('--color-secondary', '#3e497a');
            root.style.setProperty('--color-deep', '#1a2949');
            root.style.setProperty('--color-highlight', '#4facfe');
            root.style.setProperty('--text-color-primary', '#f5f5f5');
            root.style.setProperty('--text-color-secondary', '#d9d9d9');
            message.success("Restored Default Theme");
        }
    };

    return (
        <AntFooter className="footer">
            {/* Left: System Status & Watcher & Start Menu */}
            <div className="footer-section footer-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <StartMenu
                        onOpenCalculator={() => setIsCalcOpen(true)}
                        onOpenFeatureRequest={() => setIsFeatureOpen(true)}
                        onOpenSettings={() => setIsSettingsOpen(true)}
                        onOpenResources={() => setIsResourcesOpen(true)}
                        onOpenAbout={() => setIsAboutOpen(true)}
                    />
                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 5px' }}></div>
                    <ServerStatus activeUsersCount={activeUsersCount} isConnected={isConnected} />
                    <Watcher activeUsersCount={activeUsersCount} isConnected={isConnected} />
                </div>
            </div>

            {/* Center: Copyright & Counter */}
            <div className="footer-section footer-center">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Copyright />
                    <span>:</span>
                    <Counter />
                </div>
            </div>

            {/* Right: Social Media & Version */}
            <div className="footer-section footer-right">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <SocialMediaIcons />
                </div>
            </div>

            {/* OS Windows */}
            <OSWindow
                title="Calculator"
                icon={<CalculatorOutlined />}
                isOpen={isCalcOpen}
                onClose={() => setIsCalcOpen(false)}
                width={320}
                height={480}
            >
                <iframe
                    src="https://bondzai.github.io/micro-app-simple-calculator/"
                    title="Calculator"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                />
            </OSWindow>

            <OSWindow
                title="Feature Request"
                icon={<BulbOutlined />}
                isOpen={isFeatureOpen}
                onClose={() => setIsFeatureOpen(false)}
                width={400}
                height={350}
            >
                <div style={{ padding: '20px', color: 'white', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <p style={{ margin: 0, opacity: 0.8 }}>Have an idea? Send it directly to the developer.</p>
                    <Form layout="vertical" onFinish={handleFeatureSubmit}>
                        <Form.Item name="title" label={<span style={{ color: 'white' }}>Title</span>} style={{ marginBottom: '10px' }}>
                            <Input placeholder="Feature title" style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }} />
                        </Form.Item>
                        <Form.Item name="description" label={<span style={{ color: 'white' }}>Description</span>}>
                            <TextArea rows={4} placeholder="Describe your idea..." style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }} />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" icon={<SendOutlined />} block>
                            Send Request
                        </Button>
                    </Form>
                </div>
            </OSWindow>

            <OSWindow
                title="System Settings"
                icon={<SettingOutlined />}
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                width={350}
                height={250}
            >
                <div style={{ padding: '20px', color: 'white' }}>
                    <h4 style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Appearance</h4>
                    <div style={{ marginTop: '15px' }}>
                        <p style={{ opacity: 0.8, marginBottom: '10px' }}>Accent Color</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div
                                onClick={() => applyTheme('default')}
                                style={{
                                    width: '40px', height: '40px', borderRadius: '50%', background: '#21325e',
                                    cursor: 'pointer', border: '2px solid white', boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                                }}
                                title="Default Blue"
                            />
                            <div
                                onClick={() => applyTheme('brown')}
                                style={{
                                    width: '40px', height: '40px', borderRadius: '50%', background: '#2b2626',
                                    cursor: 'pointer', border: '2px solid rgba(255,255,255,0.3)', boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                                }}
                                title="Zen / Dimmed"
                            />
                        </div>
                    </div>
                </div>
            </OSWindow>

            <OSWindow
                title="System Resources"
                icon={<LineChartOutlined />}
                isOpen={isResourcesOpen}
                onClose={() => setIsResourcesOpen(false)}
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
            <OSWindow
                title="About System"
                icon={<InfoCircleOutlined />}
                isOpen={isAboutOpen}
                onClose={() => setIsAboutOpen(false)}
                width={400}
                height={320}
            >
                <div style={{ padding: '30px', color: 'white', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <div style={{
                            width: '90px', height: '90px', borderRadius: '50%',
                            border: '3px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 0 0 4px rgba(255, 255, 255, 0.05)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                            fontSize: '32px', fontWeight: 'bold', color: 'white',
                            letterSpacing: '2px'
                        }}>
                            JB
                        </div>
                    </div>
                    <h2 style={{ color: 'white', margin: '0 0 5px 0' }}>Bond OS UI</h2>
                    <p style={{ opacity: 0.7, margin: '0 0 20px 0' }}>Version {packageJson.version}</p>

                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px', width: '100%' }}>
                        <p style={{ margin: '0 0 5px 0', fontSize: '13px' }}>Developed by <strong>Puritat Chamart</strong></p>
                        <p style={{ margin: 0, fontSize: '12px', opacity: 0.6 }}>Built with React, Vite & Ant Design</p>
                    </div>

                    <p style={{ marginTop: '20px', fontSize: '11px', opacity: 0.4 }}>
                        © 2024 All Rights Reserved.
                    </p>
                </div>
            </OSWindow>
        </AntFooter>
    );
};



export default Footer;
