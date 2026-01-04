import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./pages/global/Navbar";
import Sidebar from "./pages/global/Sidebar";
import Footer from "./pages/global/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Experience from "./pages/Experience";
import Stats from "./pages/Stats";
import More from "./pages/More";

import DisplayModal from "./components/modals/DisplayModal";

import { getProjectList } from "./apis/rest/Project";
import { getCertificationList } from "./apis/rest/Certification";

import "./App.css";
import { HoverProvider, HoverContext } from './contexts/HoverContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useContext } from 'react';

const App = () => {
    const HoverWrapper = ({ children }) => {
        const { setIsHovered } = useContext(HoverContext);
        return (
            <div onMouseEnter={() => setIsHovered(false)} onMouseLeave={() => setIsHovered(true)}>
                {children}
            </div>
        );
    };

    const MainContent = () => (
        <div className="main-content">
            <section id="home" className="section">
                <HoverWrapper><Home /></HoverWrapper>
            </section>
            <section id="experience" className="section">
                <HoverWrapper><Experience /></HoverWrapper>
            </section>
            <section id="skills" className="section">
                <HoverWrapper><Skills /></HoverWrapper>
            </section>
            <section id="projects" className="section">
                <HoverWrapper><Projects /></HoverWrapper>
            </section>
            <section id="certifications" className="section">
                <HoverWrapper><Certifications /></HoverWrapper>
            </section>
            <section id="stats" className="section">
                <HoverWrapper><Stats /></HoverWrapper>
            </section>
            <section id="more" className="section">
                <HoverWrapper><More /></HoverWrapper>
            </section>
        </div>
    );

    return (
        <div className="App">
            <ThemeProvider>
                <HoverProvider>
                    <Router basename="/">
                        <Navbar />
                        <Sidebar />
                        <Footer />
                        <Routes>
                            <Route path="/" element={<MainContent />} />
                            <Route path="/project/:id" element={<HoverWrapper><DisplayModal getDataList={getProjectList} dataRoutePath="/projects" /></HoverWrapper>} />
                            <Route path="/certification/:id" element={<HoverWrapper><DisplayModal getDataList={getCertificationList} dataRoutePath="/certifications" /></HoverWrapper>} />
                            {/* Fallback for direct links */}
                            <Route path="/experience" element={<MainContent />} />
                            <Route path="/skills" element={<MainContent />} />
                            <Route path="/projects" element={<MainContent />} />
                            <Route path="/certifications" element={<MainContent />} />
                            <Route path="/stats" element={<MainContent />} />
                            <Route path="/more" element={<MainContent />} />
                        </Routes>
                    </Router>
                </HoverProvider>
            </ThemeProvider>
        </div>
    );
};

export default App;
