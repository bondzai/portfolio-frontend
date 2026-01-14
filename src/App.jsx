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
import More from "./pages/More";

import DisplayModal from "./components/modals/DisplayModal";

import { getProjectList } from "./apis/rest/Project";
import { getCertificationList } from "./apis/rest/Certification";

import "./App.css";
import { HoverProvider, HoverContext } from './contexts/HoverContext';
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

    return (
        <div className="App">
            <HoverProvider>
                <Router basename="/" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                    <Navbar />
                    <Sidebar />
                    <Footer />
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
                        <Route path="/more" element={<HoverWrapper><More /></HoverWrapper>} />
                    </Routes>
                </Router>
            </HoverProvider>
        </div>
    );
}

export default App;
