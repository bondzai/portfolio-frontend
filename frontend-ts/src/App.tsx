import { useRoutes } from 'react-router-dom'
import { Routes } from './routes'
import React, { ReactElement } from 'react'; 

import Navbar from './components/global/Navbar';

import './App.css';

const App: React.FC = (): ReactElement => {
    const element = useRoutes(Routes)
    return (
        <div className="App">
            <Navbar />
            {element}
        </div>)
}

export default App;
