import React, { createContext, useState, useEffect } from 'react';

export const SystemContext = createContext();

export const SystemProvider = ({ children }) => {
    // Background Effect State
    const [backgroundEffect, setBackgroundEffect] = useState(() => {
        return localStorage.getItem('backgroundEffect') || 'matrix';
    });

    const [matrixSpeed, setMatrixSpeed] = useState(() => {
        return parseInt(localStorage.getItem('matrixSpeed')) || 20; // Default 20 FPS
    });

    // Persist changes
    useEffect(() => {
        localStorage.setItem('backgroundEffect', backgroundEffect);
    }, [backgroundEffect]);

    useEffect(() => {
        localStorage.setItem('matrixSpeed', matrixSpeed);
    }, [matrixSpeed]);

    return (
        <SystemContext.Provider value={{
            backgroundEffect,
            setBackgroundEffect,
            matrixSpeed,
            setMatrixSpeed
        }}>
            {children}
        </SystemContext.Provider>
    );
};
