import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';

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
import Changelog from "./pages/Changelog";
import Research from "./pages/Research";

import DisplayModal from "./components/modals/DisplayModal";
import GenericPopup from "./components/common/GenericPopup";
import WelcomeMessage from "./components/common/WelcomeMessage";
import MatrixRain from "./components/effects/MatrixRain";
import Starfield from "./components/effects/Starfield";
import Snow from "./components/effects/Snow";
import Moonlight from "./components/effects/Moonlight";

import { getProjectList } from "./apis/rest/Project";
import { getCertificationList } from "./apis/rest/Certification";
import pkg from "../package.json";
import { POPUP_VERSION, TOUR_VERSION } from "./utils/constants";

import { HoverProvider, HoverContext } from './contexts/HoverContext';
import { PopupProvider, usePopup } from './contexts/PopupContext';
import { WindowProvider } from './contexts/WindowContext';
import { TourProvider } from './contexts/TourContext';
import { SystemProvider, SystemContext } from './contexts/SystemContext';
import { AuthProvider } from "./contexts/AuthContext";

import useScreenDimensions, { ScreenSize } from "./hooks/useScreenDimensions";

import "./App.css";

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
                setAutoEffect(isNight ? 'moonlight' : 'matrix');
            };

            updateAutoEffect();
            const timer = setInterval(updateAutoEffect, 60000); // Check every minute
            return () => clearInterval(timer);
        }
    }, [backgroundEffect]);

    const activeEffect = backgroundEffect === 'auto' ? autoEffect : backgroundEffect;

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

// Unified System Popup Manager
const SystemPopupManager = () => {
    const { screenSize } = useScreenDimensions();
    const { addPopup, dismissPopup } = usePopup();
    const navigate = useNavigate();

    useEffect(() => {
        const isMobile = screenSize === ScreenSize.XS || screenSize === ScreenSize.SM;
        const appVersion = pkg.version;

        const handleChangelogClick = (e) => {
            e.preventDefault();
            dismissPopup('system_welcome_version');
            navigate('/changelog');
        };

        addPopup({
            id: 'system_welcome_version',
            title: 'System Update',
            version: POPUP_VERSION,
            storageKey: 'popup_version',
            content: (
                <WelcomeMessage
                    align="center"
                    title="Welcome Back"
                    subTitle={`Portfolio OS v${appVersion}`}
                    message={
                        <div style={{ textAlign: 'left' }}>
                            <p><strong>New Feature: Feedback System 💬</strong></p>
                            <p>You can now send messages directly to me via the new Feedback button!</p>
                            <ul>
                                <li>🔒 <strong>Secure Login</strong>: Sign in with Google to prevent spam.</li>
                                <li>🛡️ <strong>Crash Proof</strong>: Robust error handling for smoother experience.</li>
                            </ul>
                            <br />
                            <p><strong>Recent Updates: Immersive Environments 🌍</strong></p>
                            <p>Customize your experience with dynamic background effects:</p>
                            <ul>
                                <li>✨ <strong>Starfall</strong>: A clean, twinkling night sky.</li>
                                <li>❄️ <strong>Snow</strong>: Gentle winter vibes.</li>
                                <li>🌕 <strong>Moonlight</strong>: Deep night ambiance.</li>
                                <li>💻 <strong>Matrix</strong>: The classic digital rain.</li>
                            </ul>
                            <p>Go to <strong>Settings &gt; Appearance</strong> to try them out!</p>
                            <br />
                            <a href="/changelog" onClick={handleChangelogClick} style={{ color: '#1890ff', cursor: 'pointer' }}>View Full Changelog &rarr;</a>
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
    }, [addPopup, dismissPopup, navigate, screenSize]);

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

    const LayoutContent = () => {
        const location = useLocation();
        const isResearchNode = location.pathname.startsWith('/research');

        return (
            <>
                {!isResearchNode && <SystemBackground />}
                {!isResearchNode && <Navbar />}
                {!isResearchNode && <Sidebar />}
                {!isResearchNode && <Footer />}
                {!isResearchNode && <GenericPopup />}
                {!isResearchNode && <SystemPopupManager />}
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
                    <Route path="/changelog" element={<HoverWrapper><Changelog /></HoverWrapper>} />
                    <Route path="/research" element={<HoverWrapper><Research /></HoverWrapper>} />
                    <Route path="/research/:id" element={<HoverWrapper><Research /></HoverWrapper>} />
                </Routes>
            </>
        );
    };

    return (
        <div className="App">
            <AuthProvider>
                <SystemProvider>
                    <PopupProvider>
                        <WindowProvider>
                            <TourProvider>
                                <HoverProvider>
                                    <Router basename="/" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                                        <LayoutContent />
                                    </Router>
                                </HoverProvider>
                            </TourProvider>
                        </WindowProvider>
                    </PopupProvider>
                </SystemProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
