
import React, { useState } from "react";
import { Layout, Button, Input, Form, message } from "antd";
import { CalculatorOutlined, BulbOutlined, SendOutlined } from '@ant-design/icons';
import Watcher from "../../components/icons/Watcher";
import Copyright from "../../components/icons/Copyright";
import Counter from "../../components/icons/Counter";
import Version from "../../components/icons/Version";
import ServerStatus from "../../components/icons/ServerStatus";
import SocialMediaIcons from "../../components/icons/SocialMediaIcons";
import StartMenu from "../../components/os/StartMenu";
import OSWindow from "../../components/os/OSWindow";
import { Users } from "../../apis/websocket/Users";
import "./Footer.css";


const { Footer: AntFooter } = Layout;
const { TextArea } = Input;

const Footer = () => {
    const [activeUsersCount, , isConnected] = Users();

    // OS Window States
    const [isCalcOpen, setIsCalcOpen] = useState(false);
    const [isFeatureOpen, setIsFeatureOpen] = useState(false);

    const handleFeatureSubmit = () => {
        message.success("Feature request sent to developer!");
        setIsFeatureOpen(false);
    };

    return (
        <AntFooter className="footer">
            {/* Left: System Status & Watcher & Start Menu */}
            <div className="footer-section footer-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <StartMenu
                        onOpenCalculator={() => setIsCalcOpen(true)}
                        onOpenFeatureRequest={() => setIsFeatureOpen(true)}
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
        </AntFooter>
    );
};



export default Footer;
