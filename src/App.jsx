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
import SystemPopupManager from "./components/common/SystemPopupManager";
import SystemBackground from "./components/common/SystemBackground";
import HoverWrapper from "./components/common/HoverWrapper";

import { getProjectList } from "./apis/rest/Project";
import { getCertificationList } from "./apis/rest/Certification";

import { HoverProvider } from './contexts/HoverContext';
import { PopupProvider } from './contexts/PopupContext';
import { WindowProvider } from './contexts/WindowContext';
import { TourProvider } from './contexts/TourContext';
import { SystemProvider } from './contexts/SystemContext';
import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";

const App = () => {
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
