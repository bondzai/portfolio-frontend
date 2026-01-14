import React from "react";
import { Layout } from "antd";
import Watcher from "../../components/icons/Watcher";
import Copyright from "../../components/icons/Copyright";
import Counter from "../../components/icons/Counter";
import ServerStatus from "../../components/icons/ServerStatus";
import { Users } from "../../apis/websocket/Users";
import "./Footer.css";


const { Footer: AntFooter } = Layout;

const Footer = () => {
    const [activeUsersCount, , isConnected] = Users();

    return (
        <AntFooter className="footer">
            {/* Left: Watcher (Eye) */}
            <div className="footer-section footer-left">
                <Watcher activeUsersCount={activeUsersCount} isConnected={isConnected} />
            </div>

            {/* Center: Copyright & Counter */}
            <div className="footer-section footer-center">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Copyright />
                    <span>:</span>
                    <Counter />
                </div>
            </div>

            {/* Right: System Status */}
            <div className="footer-section footer-right">
                <ServerStatus activeUsersCount={activeUsersCount} isConnected={isConnected} />
            </div>
        </AntFooter>
    );
};



export default Footer;
