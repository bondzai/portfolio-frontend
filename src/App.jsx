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

import DisplayModal from "./components/modals/DisplayModal";

import { getProjectList } from "./apis/rest/Project";
import { getCertificationList } from "./apis/rest/Certification";

import "./App.css";
import { useContext, useEffect } from 'react';
import { HoverProvider, HoverContext } from './contexts/HoverContext';
import { PopupProvider, usePopup } from './contexts/PopupContext';
import { WindowProvider } from './contexts/WindowContext';
import GenericPopup from "./components/common/GenericPopup";
import WelcomeMessage from "./components/common/WelcomeMessage";
import useScreenDimensions, { ScreenSize } from "./hooks/useScreenDimensions";

// Unified System Popup Manager (Scalable)
// To add more popups, you can chain useEffects or add logic here.
const SystemPopupManager = () => {
    const { screenSize } = useScreenDimensions();
    const { addPopup } = usePopup();

    useEffect(() => {
        const isMobile = screenSize === ScreenSize.XS || screenSize === ScreenSize.SM;
        const hasSeenWelcome = localStorage.getItem('has_seen_welcome_v2');

        // Example: If you want to scale up, add another check here for 'has_seen_promo' etc.
        // if (!hasSeenPromo) { ... }

        if (!hasSeenWelcome) {
            addPopup({
                id: 'system-welcome',
                title: 'System Notification',
                content: (
                    <WelcomeMessage
                        align="center"
                        title="Welcome"
                        subTitle="Portfolio OS v2.0.1"
                        message={
                            <p>Welcome to my digital workspace. Feel free to explore the apps, windows, and features I've built.</p>
                        }
                        footer={isMobile ? (
                            <div style={{
                                padding: '10px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '8px',
                                borderLeft: '3px solid #ffcc00'
                            }}>
                                <p style={{ margin: 0, fontSize: '13px', fontStyle: 'italic' }}>
                                    <strong>* Info:</strong> You are using a mobile device. For the full OS experience (Start Menu, draggable windows), please try a desktop screen.
                                </p>
                            </div>
                        ) : null}
                    />
                ),
                onceForever: true,
                okText: "Enter System",
                trafficLights: { showClose: true, showMinimize: false, showMaximize: false }
            });
            localStorage.setItem('has_seen_welcome_v2', 'true');
        }
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
            <PopupProvider>
                <WindowProvider>
                    <HoverProvider>
                        <Router basename="/" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
                            </Routes>
                        </Router>
                    </HoverProvider>
                </WindowProvider>
            </PopupProvider>
        </div>
    );
}

export default App;
