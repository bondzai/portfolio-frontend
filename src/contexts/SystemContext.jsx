import React, { createContext, useState, useEffect } from 'react';

export const SystemContext = createContext();

export const SystemProvider = ({ children }) => {
    // Background Effect State
    const [backgroundEffect, setBackgroundEffect] = useState(() => {
        return localStorage.getItem('backgroundEffect') || 'matrix';
    });

    const [matrixSpeed, setEffectSpeed] = useState(() => {
        return parseInt(localStorage.getItem('effectSpeed')) || 20;
    });

    // Alias for backward compatibility if needed, but better to just use effectSpeed
    const effectSpeed = matrixSpeed;

    // Persist changes
    useEffect(() => {
        localStorage.setItem('backgroundEffect', backgroundEffect);
    }, [backgroundEffect]);

    useEffect(() => {
        localStorage.setItem('effectSpeed', effectSpeed);
    }, [effectSpeed]);

    return (
        <SystemContext.Provider value={{
            backgroundEffect,
            setBackgroundEffect,
            effectSpeed,
            setEffectSpeed
        }}>
            {children}
        </SystemContext.Provider>
    );
};
