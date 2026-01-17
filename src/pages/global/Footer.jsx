import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import Watcher from "../../components/icons/Watcher";
import Copyright from "../../components/icons/Copyright";
import Counter from "../../components/icons/Counter";
import SocialMediaIcons from "../../components/icons/SocialMediaIcons";
import StartMenu from "../../components/os/StartMenu";
import SystemControlCenter from "../../components/os/SystemControlCenter";
import FeatureTour from "../../components/common/FeatureTour";
import { Users } from "../../apis/websocket/Users";
import { usePopup } from "../../contexts/PopupContext";
import { useWindow } from "../../contexts/WindowContext";
import useScreenDimensions, { ScreenSize } from "../../hooks/useScreenDimensions";
import "./Footer.css";

// OS Apps
import CalculatorWindow from "../../components/os/apps/CalculatorWindow";
import FeatureWindow from "../../components/os/apps/FeatureWindow";
import ResourcesWindow from "../../components/os/apps/ResourcesWindow";
import AboutWindow from "../../components/os/apps/AboutWindow";

const { Footer: AntFooter } = Layout;

const Footer = () => {
    const navigate = useNavigate();
    const { screenSize } = useScreenDimensions();
    const isMobile = screenSize === ScreenSize.XS || screenSize === ScreenSize.SM;
    const { popupQueue } = usePopup();

    // Window Context
    const {
        runningApps,
        minimizedApps,
        openWindow,
        closeWindow,
        minimizeWindow,
        closeAll,
        isWindowOpen,
        isWindowMinimized
    } = useWindow();

    const [activeUsersCount, , isConnected] = Users();

    // Tour Refs
    const startRef = useRef(null);
    const controlRef = useRef(null);

    // Tour State
    const [isTourOpen, setIsTourOpen] = useState(false);

    useEffect(() => {
        // Build a tour trigger check
        // Wait for popupQueue to be empty
        if (popupQueue.length > 0) return;

        // Disable tour on mobile
        if (isMobile) return;

        const hasSeenTour = localStorage.getItem('has_seen_v2_tour');
        if (!hasSeenTour) {
            const timer = setTimeout(() => {
                setIsTourOpen(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [popupQueue, isMobile]);

    const handleStartTour = () => {
        setIsTourOpen(true);
    };

    const handleCloseTour = () => {
        setIsTourOpen(false);
        localStorage.setItem('has_seen_v2_tour', 'true');
    };

    return (
        <AntFooter className="footer">
            {/* Left: System Status & Watcher & Start Menu */}
            <div className="footer-section footer-left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {!isMobile && (
                        <>
                            <div ref={startRef}>
                                <StartMenu
                                    onOpenCalculator={() => openWindow('calculator')}
                                    onOpenFeatureRequest={() => openWindow('feature')}
                                    onOpenSettings={() => navigate('/settings')}
                                    onOpenResources={() => openWindow('resources')}
                                    onOpenAbout={() => openWindow('about')}
                                    onOpenGuide={handleStartTour}
                                />
                            </div>

                            <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)', margin: '0 5px' }}></div>

                            <div ref={controlRef}>
                                <SystemControlCenter
                                    runningApps={runningApps}
                                    onRestore={openWindow}
                                    onClose={closeWindow}
                                    onCloseAll={closeAll}
                                    activeUsersCount={activeUsersCount}
                                    isConnected={isConnected}
                                />
                            </div>
                        </>
                    )}

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

            {/* Tour Component */}
            <FeatureTour
                isOpen={isTourOpen}
                onClose={handleCloseTour}
                refs={{ startRef, controlRef }}
            />

            {/* OS Windows */}
            <CalculatorWindow
                isOpen={isWindowOpen('calculator')}
                onClose={() => closeWindow('calculator')}
                onMinimize={() => minimizeWindow('calculator')}
                isMinimized={isWindowMinimized('calculator')}
            />
            <FeatureWindow
                isOpen={isWindowOpen('feature')}
                onClose={() => closeWindow('feature')}
                onMinimize={() => minimizeWindow('feature')}
                isMinimized={isWindowMinimized('feature')}
            />
            {/* SettingsWindow removed (migrated to /settings page) */}
            <ResourcesWindow
                isOpen={isWindowOpen('resources')}
                onClose={() => closeWindow('resources')}
                onMinimize={() => minimizeWindow('resources')}
                isMinimized={isWindowMinimized('resources')}
                activeUsersCount={activeUsersCount}
                isConnected={isConnected}
            />
            <AboutWindow
                isOpen={isWindowOpen('about')}
                onClose={() => closeWindow('about')}
                onMinimize={() => minimizeWindow('about')}
                isMinimized={isWindowMinimized('about')}
            />
        </AntFooter>
    );
};

export default Footer;
