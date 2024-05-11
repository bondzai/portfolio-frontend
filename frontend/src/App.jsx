import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Background from "./pages/global/Background";
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


const App = () => {
    return (
        <div className="App">
            <Router basename="/">
                <Background />
                <Navbar />
                <Sidebar />
                <Footer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<DisplayModal getDataList={getProjectList} dataRoutePath="/projects" />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/certification/:id" element={<DisplayModal getDataList={getCertificationList} dataRoutePath="/certifications" />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/more" element={<More />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
