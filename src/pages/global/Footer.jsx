
import React, { useState } from "react";
import { Layout } from "antd";
import Watcher from "../../components/icons/Watcher";
import Copyright from "../../components/icons/Copyright";
import Counter from "../../components/icons/Counter";
import ServerStatus from "../../components/icons/ServerStatus";
import SocialMediaIcons from "../../components/icons/SocialMediaIcons";
import StartMenu from "../../components/os/StartMenu";
import { Users } from "../../apis/websocket/Users";
import "./Footer.css";

// OS Apps
import CalculatorWindow from "../../components/os/apps/CalculatorWindow";
import FeatureWindow from "../../components/os/apps/FeatureWindow";
import SettingsWindow from "../../components/os/apps/SettingsWindow";
import ResourcesWindow from "../../components/os/apps/ResourcesWindow";
import AboutWindow from "../../components/os/apps/AboutWindow";

const { Footer: AntFooter } = Layout;

const Footer = () => {
    const [activeUsersCount, , isConnected] = Users();

    // OS Window States
    const [isCalcOpen, setIsCalcOpen] = useState(false);
    const [isFeatureOpen, setIsFeatureOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

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
            <CalculatorWindow isOpen={isCalcOpen} onClose={() => setIsCalcOpen(false)} />
            <FeatureWindow isOpen={isFeatureOpen} onClose={() => setIsFeatureOpen(false)} />
            <SettingsWindow isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
            <ResourcesWindow
                isOpen={isResourcesOpen}
                onClose={() => setIsResourcesOpen(false)}
                activeUsersCount={activeUsersCount}
                isConnected={isConnected}
            />
            <AboutWindow isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
        </AntFooter>
    );
};

export default Footer;
