
import React from "react";
import { Layout } from "antd";
import Watcher from "../../components/icons/Watcher";
import Copyright from "../../components/icons/Copyright";
import Counter from "../../components/icons/Counter";
import Version from "../../components/icons/Version";
import ServerStatus from "../../components/icons/ServerStatus";
import SocialMediaIcons from "../../components/icons/SocialMediaIcons";
import { Users } from "../../apis/websocket/Users";
import "./Footer.css";


const { Footer: AntFooter } = Layout;

const Footer = () => {
    const [activeUsersCount, , isConnected] = Users();

    return (
        <AntFooter className="footer">
            {/* Left: System Status & Watcher */}
            <div className="footer-section footer-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
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
                    <Version />
                </div>
            </div>
        </AntFooter>
    );
};



export default Footer;
