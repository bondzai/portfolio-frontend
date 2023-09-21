import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import React, { ReactElement } from 'react'; // Import React and ReactElement type

import Navbar from './components/global/Navbar';

const Home = lazy(() => import('./pages/Home'));
// const Skills = lazy(() => import('./pages/Skills'));
// const Projects = lazy(() => import('./pages/Projects'));
// const Certifications = lazy(() => import('./pages/Certifications'));
// const Experience = lazy(() => import('./pages/Experience'));
// const Stats = lazy(() => import('./pages/Stats'));
// const Roadmap = lazy(() => import('./pages/Roadmap'));

// import DisplayModal from './components/DisplayModal';

// import { getProjectList } from "./apis/rest/Project";
// import { getCertificationList } from "./apis/rest/Certification";

import './App.css';

const App: React.FC = (): ReactElement => ( // Add types to App component
    <div className="App">
        <Router basename='/'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
                {/* <Route path='/skills' element={<Suspense fallback={<div>Loading...</div>}><Skills /></Suspense>} />
                <Route path='/projects' element={<Suspense fallback={<div>Loading...</div>}><Projects /></Suspense>} />
                <Route path='/project/:id' element={<DisplayModal getDataList={getProjectList} dataRoutePath="/projects" />} />
                <Route path='/certifications' element={<Suspense fallback={<div>Loading...</div>}><Certifications /></Suspense>} />
                <Route path='/certification/:id' element={<DisplayModal getDataList={getCertificationList} dataRoutePath="/certifications" />} />
                <Route path='/experience' element={<Suspense fallback={<div>Loading...</div>}><Experience /></Suspense>} />
                <Route path='/roadmap' element={<Suspense fallback={<div>Loading...</div>}><Roadmap /></Suspense>} />
                <Route path='/stats' element={<Suspense fallback={<div>Loading...</div>}><Stats /></Suspense>} /> */}
            </Routes>
        </Router>
    </div>
);

export default App;
                