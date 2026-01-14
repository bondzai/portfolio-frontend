import React, { useState } from "react";
import { Layout } from "antd";
import Watcher from "../../components/icons/Watcher";
import Copyright from "../../components/icons/Copyright";
import Counter from "../../components/icons/Counter";
import ServerStatus from "../../components/icons/ServerStatus";
import SocialMediaIcons from "../../components/icons/SocialMediaIcons";
import StartMenu from "../../components/os/StartMenu";
import TaskManager from "../../components/os/TaskManager";
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

    // Dynamic list of running apps
    const [runningApps, setRunningApps] = useState([]);

    // List of minimized apps (hidden but running)
    const [minimizedApps, setMinimizedApps] = useState([]);

    const openApp = (appId) => {
        // Add to running apps if not present
        if (!runningApps.includes(appId)) {
            setRunningApps(prev => [...prev, appId]);
        }

        // Remove from minimized apps if present (Restore)
        if (minimizedApps.includes(appId)) {
            setMinimizedApps(prev => prev.filter(id => id !== appId));
        }

        // Set Open State
        switch (appId) {
            case 'calculator': setIsCalcOpen(true); break;
            case 'feature': setIsFeatureOpen(true); break;
            case 'settings': setIsSettingsOpen(true); break;
            case 'resources': setIsResourcesOpen(true); break;
            case 'about': setIsAboutOpen(true); break;
            default: break;
        }
    };

    const closeApp = (appId) => {
        // Remove from running apps
        setRunningApps(prev => prev.filter(id => id !== appId));
        // Remove from minimized apps
        setMinimizedApps(prev => prev.filter(id => id !== appId));

        // Set Closed State
        switch (appId) {
            case 'calculator': setIsCalcOpen(false); break;
            case 'feature': setIsFeatureOpen(false); break;
            case 'settings': setIsSettingsOpen(false); break;
            case 'resources': setIsResourcesOpen(false); break;
            case 'about': setIsAboutOpen(false); break;
            default: break;
        }
    };

    const minimizeApp = (appId) => {
        // Add to minimized apps
        if (!minimizedApps.includes(appId)) {
            setMinimizedApps(prev => [...prev, appId]);
        }

        // Ensure it stays "Open" (mounted) so state is preserved
        // We do NOT set isOpen to false here.
    };

    return (
        <AntFooter className="footer">
            {/* Left: System Status & Watcher & Start Menu */}
            <div className="footer-section footer-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <StartMenu
                        onOpenCalculator={() => openApp('calculator')}
                        onOpenFeatureRequest={() => openApp('feature')}
                        onOpenSettings={() => openApp('settings')}
                        onOpenResources={() => openApp('resources')}
                        onOpenAbout={() => openApp('about')}
                    />
                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 5px' }}></div>
                    <TaskManager runningApps={runningApps} onRestore={openApp} />
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
            <CalculatorWindow
                isOpen={isCalcOpen}
                onClose={() => closeApp('calculator')}
                onMinimize={() => minimizeApp('calculator')}
                isMinimized={minimizedApps.includes('calculator')}
            />
            <FeatureWindow
                isOpen={isFeatureOpen}
                onClose={() => closeApp('feature')}
                onMinimize={() => minimizeApp('feature')}
                isMinimized={minimizedApps.includes('feature')}
            />
            <SettingsWindow
                isOpen={isSettingsOpen}
                onClose={() => closeApp('settings')}
                onMinimize={() => minimizeApp('settings')}
                isMinimized={minimizedApps.includes('settings')}
            />
            <ResourcesWindow
                isOpen={isResourcesOpen}
                onClose={() => closeApp('resources')}
                onMinimize={() => minimizeApp('resources')}
                isMinimized={minimizedApps.includes('resources')}
                activeUsersCount={activeUsersCount}
                isConnected={isConnected}
            />
            <AboutWindow
                isOpen={isAboutOpen}
                onClose={() => closeApp('about')}
                onMinimize={() => minimizeApp('about')}
                isMinimized={minimizedApps.includes('about')}
            />
        </AntFooter>
    );
};

export default Footer;
