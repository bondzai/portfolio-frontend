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
import GenericPopup from "./components/common/GenericPopup";
import useScreenDimensions, { ScreenSize } from "./hooks/useScreenDimensions";

// Component to handle mobile limitation check via PopupContext
const MobileLimitationManager = () => {
    const { screenSize } = useScreenDimensions();
    const { addPopup } = usePopup();

    useEffect(() => {
        const isMobile = screenSize === ScreenSize.XS || screenSize === ScreenSize.SM;
        if (isMobile) {
            addPopup({
                id: 'mobile-limitation',
                title: 'Desktop Experience Recommended',
                content: (
                    <>
                        <p>You are currently viewing this portfolio on a mobile device.</p>
                        <p>Some advanced features (like the OS simulation, Start Menu, and System Stats) are optimized for larger screens.</p>
                        <p>Please switch to a desktop or tablet for the full interactive experience.</p>
                    </>
                ),
                oncePerSession: true,
                okText: "I Understand",
                trafficLights: { showClose: true, showMinimize: false, showMaximize: false }
            });
        }
    }, [screenSize, addPopup]);

    return null;
};

// Component to handle Welcome Popup
const WelcomePopupManager = () => {
    const { addPopup } = usePopup();

    useEffect(() => {
        // Check if welcome popup has been seen forever (or use session if preferred, but "welcome" implies once)
        const hasSeenWelcome = localStorage.getItem('has_seen_welcome_v2');

        if (!hasSeenWelcome) {
            addPopup({
                id: 'welcome-popup',
                title: 'System Online',
                content: (
                    <>
                        <p>Welcome to Portfolio OS v2.0</p>
                        <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                            Patch 2.0.1: Enhanced Mobile Experience, New Popup System, and UI Polish.
                        </p>
                    </>
                ),
                onceForever: true, // Uses localStorage via context logic
                okText: "Enter System",
                trafficLights: { showClose: true, showMinimize: false, showMaximize: false }
            });
            // Mark as seen immediately so it doesn't queue again if re-mounted (Context handles this primarily, but good safety)
            localStorage.setItem('has_seen_welcome_v2', 'true');
        }
    }, [addPopup]);

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
                <HoverProvider>
                    <Router basename="/" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                        <Navbar />
                        <Sidebar />
                        <Footer />
                        <GenericPopup />
                        <WelcomePopupManager />
                        <MobileLimitationManager />
                        <Routes>
                            <Route path="/" element={<HoverWrapper><Home /></HoverWrapper>} />
                            <Route path="/skills" element={<HoverWrapper><Skills /></HoverWrapper>} />
                            <Route path="/projects" element={<HoverWrapper><Projects /></HoverWrapper>} />
                            <Route path="/project/:id" element={<HoverWrapper><DisplayModal getDataList={getProjectList} dataRoutePath="/projects" /></HoverWrapper>} />
                            <Route path="/certifications" element={<HoverWrapper><Certifications /></HoverWrapper>} />
                            <Route path="/certification/:id" element={<HoverWrapper><DisplayModal getDataList={getCertificationList} dataRoutePath="/certifications" /></HoverWrapper>} />
                            <Route path="/about" element={<HoverWrapper><About /></HoverWrapper>} />
                            <Route path="/experience" element={<HoverWrapper><Experience /></HoverWrapper>} />
                            <Route path="/stats" element={<HoverWrapper><Stats /></HoverWrapper>} />
                            <Route path="/brotherhood" element={<HoverWrapper><Brotherhood /></HoverWrapper>} />
                            <Route path="/blog" element={<HoverWrapper><Blog /></HoverWrapper>} />
                        </Routes>
                    </Router>
                </HoverProvider>
            </PopupProvider>
        </div>
    );
}

export default App;
