import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/global/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Stat from './pages/Stat';
import Contact from './pages/Contact';

import DisplayModal from './components/DisplayModal';
import { getProjectList } from "./apis/ProjectList";
import { getCertificationList } from "./apis/CertificationList";

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
                    <Route path='/stat' element={<Stat />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;