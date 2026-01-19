import React, { createContext, useState, useEffect } from 'react';
import { DEFAULT_BACKGROUND_EFFECT, DEFAULT_BACKGROUND_EFFECT_SPEED } from '../utils/constants';

export const SystemContext = createContext();

export const SystemProvider = ({ children }) => {
    // Background Effect State
    const [backgroundEffect, setBackgroundEffect] = useState(() => {
        return localStorage.getItem('background_effect') || DEFAULT_BACKGROUND_EFFECT;
    });

    const [matrixSpeed, setEffectSpeed] = useState(() => {
        return parseInt(localStorage.getItem('background_effect_speed')) || DEFAULT_BACKGROUND_EFFECT_SPEED;
    });

    // Alias for backward compatibility if needed, but better to just use effectSpeed
    const effectSpeed = matrixSpeed;

    // Persist changes
    useEffect(() => {
        localStorage.setItem('background_effect', backgroundEffect);
    }, [backgroundEffect]);

    useEffect(() => {
        localStorage.setItem('background_effect_speed', effectSpeed);
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
