import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Certifications from './pages/Certifications';
import CertificationDisplay from './pages/CertificationDisplay';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
    return (
        <div className="App">
            <Router basename='/'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/project/:id' element={<ProjectDisplay />} />
                    <Route path='/certifications' element={<Certifications />} />
                    <Route path='/certification/:id' element={<CertificationDisplay />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;