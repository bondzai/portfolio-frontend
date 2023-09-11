import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/global/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Stats from './pages/Stats';
import Roadmap from './pages/Roadmap';
import DisplayModal from './components/DisplayModal';
import { getProjectList } from "./apis/rest/Project";
import { getCertificationList } from "./apis/rest/Certification";

function App() {
    return (
        <div className="App">
            <Router basename='/'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/project/:id' element={<DisplayModal getDataList={getProjectList} dataRoutePath="/projects" />} />
                    <Route path='/certifications' element={<Certifications />} />
                    <Route path='/certification/:id' element={<DisplayModal getDataList={getCertificationList} dataRoutePath="/certifications" />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/roadmap' element={<Roadmap />} />
                    <Route path='/stats' element={<Stats />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;