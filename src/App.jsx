import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./pages/global/Navbar";
import Sidebar from "./pages/global/Sidebar";
import Footer from "./pages/global/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import Brotherhood from "./pages/Brotherhood";
import Blog from "./pages/Blog";
import Roadmap from "./pages/Roadmap";

import DisplayModal from "./components/modals/DisplayModal";

import { getProjectList } from "./apis/rest/Project";
import { getCertificationList } from "./apis/rest/Certification";

import "./App.css";
import { useContext, useEffect, useState } from 'react';
import { HoverProvider, HoverContext } from './contexts/HoverContext';
import { PopupProvider, usePopup } from './contexts/PopupContext';
import { WindowProvider } from './contexts/WindowContext';
import { TourProvider } from './contexts/TourContext';
import { SystemProvider, SystemContext } from './contexts/SystemContext';
import GenericPopup from "./components/common/GenericPopup";
import WelcomeMessage from "./components/common/WelcomeMessage";
import MatrixRain from "./components/effects/MatrixRain";
import Starfield from "./components/effects/Starfield";
import Snow from "./components/effects/Snow";
import Moonlight from "./components/effects/Moonlight";
import useScreenDimensions, { ScreenSize } from "./hooks/useScreenDimensions";
import pkg from "../package.json"; // Import package.json to get version
import { POPUP_VERSION } from "./utils/constants";

// Global Background Manager
const SystemBackground = () => {
    const { backgroundEffect, effectSpeed } = useContext(SystemContext);
    const { width, height } = useScreenDimensions();
    const [autoEffect, setAutoEffect] = useState('matrix');

    // Handle Auto Mode (Time-based for now)
    useEffect(() => {
        if (backgroundEffect === 'auto') {
            const updateAutoEffect = () => {
                const hour = new Date().getHours();
                const isNight = hour >= 18 || hour < 6;
                // Future: Integrate Weather API here
                setAutoEffect(isNight ? 'moonlight' : 'matrix');
            };

            updateAutoEffect();
            const timer = setInterval(updateAutoEffect, 60000); // Check every minute
            return () => clearInterval(timer);
        }
    }, [backgroundEffect]);

    const activeEffect = backgroundEffect === 'auto' ? autoEffect : backgroundEffect;

    // Force active=true because the switch determines visibility/mounting
    switch (activeEffect) {
        case 'matrix':
            return <MatrixRain active={true} width={width} height={height} speed={effectSpeed} />;
        case 'stars':
            return <Starfield active={true} width={width} height={height} speed={effectSpeed} />;
        case 'snow':
            return <Snow active={true} width={width} height={height} speed={effectSpeed} />;
        case 'moonlight':
            return <Moonlight active={true} width={width} height={height} />;
        default:
            return null;
    }
};

// Unified System Popup Manager (Scalable)
// To add more popups, you can chain useEffects or add logic here.
const SystemPopupManager = () => {
    const { screenSize } = useScreenDimensions();
    const { addPopup } = usePopup();

    useEffect(() => {
        const isMobile = screenSize === ScreenSize.XS || screenSize === ScreenSize.SM;
        // User Request: Use version from package.json
        const appVersion = pkg.version;
        // Separate version for popup logic to avoid showing it on every patch update
        // const POPUP_VERSION = "1.0.0"; // Now imported from constants

        // Example: If you want to scale up, add another check here for 'has_seen_promo' etc.
        // if (!hasSeenPromo) { ... }

        addPopup({
            id: 'system_welcome_version',
            title: 'System Update v2.0',
            version: POPUP_VERSION,
            content: (
                <WelcomeMessage
                    align="center"
                    title="Welcome Back"
                    subTitle={`Portfolio OS v${POPUP_VERSION}`}
                    message={
                        <div style={{ textAlign: 'left' }}>
                            <p><strong>New Feature: Immersive Environments 🌍</strong></p>
                            <p>Customize your experience with dynamic background effects:</p>
                            <ul>
                                <li>✨ <strong>Starfall</strong>: A clean, twinkling night sky.</li>
                                <li>❄️ <strong>Snow</strong>: Gentle winter vibes.</li>
                                <li>🌕 <strong>Moonlight</strong>: Deep night ambiance.</li>
                                <li>💻 <strong>Matrix</strong>: The classic digital rain.</li>
                            </ul>
                            <p>Go to <strong>Settings &gt; Appearance</strong> to try them out!</p>
                            <p><em>Note: Auto Sync mode is coming soon.</em></p>
                        </div>
                    }
                    footer={
                        isMobile ? (
                            <div style={{
                                padding: '10px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '8px',
                                borderLeft: '3px solid #ffcc00'
                            }} >
                                <p style={{
                                    margin: 0,
                                    fontSize: '13px',
                                    fontStyle: 'italic'
                                }}>
                                    <strong>* Info:</strong> You are using a mobile device. For the full OS experience (Start Menu, draggable windows), please try a desktop screen.
                                </p>
                            </div >
                        ) : null}
                />
            ),
            onceForever: true,
            okText: "Enter System",
            trafficLights: { showClose: true, showMinimize: false, showMaximize: false }
        });
    }, [addPopup, screenSize]);

    return null;
};

const App = () => {
    const HoverWrapper = ({ children }) => {
        const { setIsHovered } = useContext(HoverContext);
        return (
            <div onMouseEnter={() => setIsHovered(false)} onMouseLeave={() => setIsHovered(true)}>
                {children}
            </div>
        );
    };

    return (
        <div className="App">
            <SystemProvider>
                <PopupProvider>
                    <WindowProvider>
                        <TourProvider>
                            <HoverProvider>
                                <Router basename="/" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                                    <SystemBackground />
                                    <Navbar />
                                    <Sidebar />
                                    <Footer />
                                    <GenericPopup />
                                    <SystemPopupManager />
                                    <Routes>
                                        <Route path="/" element={<HoverWrapper><Home /></HoverWrapper>} />
                                        <Route path="/skills" element={<HoverWrapper><Skills /></HoverWrapper>} />
                                        <Route path="/projects" element={<HoverWrapper><Projects /></HoverWrapper>} />
                                        <Route path="/project/:id" element={<HoverWrapper><DisplayModal getDataList={getProjectList} dataRoutePath="/projects" /></HoverWrapper>} />
                                        <Route path="/certifications" element={<HoverWrapper><Certifications /></HoverWrapper>} />
                                        <Route path="/certification/:id" element={<HoverWrapper><DisplayModal getDataList={getCertificationList} dataRoutePath="/certifications" /></HoverWrapper>} />
                                        <Route path="/about" element={<HoverWrapper><About /></HoverWrapper>} />
                                        <Route path="/settings" element={<HoverWrapper><Settings /></HoverWrapper>} />
                                        <Route path="/experience" element={<HoverWrapper><Experience /></HoverWrapper>} />
                                        <Route path="/stats" element={<HoverWrapper><Stats /></HoverWrapper>} />
                                        <Route path="/brotherhood" element={<HoverWrapper><Brotherhood /></HoverWrapper>} />
                                        <Route path="/blog" element={<HoverWrapper><Blog /></HoverWrapper>} />
                                        <Route path="/roadmap" element={<HoverWrapper><Roadmap /></HoverWrapper>} />
                                    </Routes>
                                </Router>
                            </HoverProvider>
                        </TourProvider>
                    </WindowProvider>
                </PopupProvider>
            </SystemProvider>
        </div>
    );
}

export default App;
