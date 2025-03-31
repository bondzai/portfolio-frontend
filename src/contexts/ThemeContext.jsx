import React, { createContext, useContext, useState, useEffect } from 'react';

const themeOptions = ['dark', 'light'];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme && themeOptions.includes(savedTheme) ? savedTheme : 'dark';
    });

    const playSound = () => {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const bufferDuration = 0.02;
        const bufferSize = audioCtx.sampleRate * bufferDuration;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        const noiseSource = audioCtx.createBufferSource();
        noiseSource.buffer = noiseBuffer;

        const gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + bufferDuration);

        noiseSource.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        noiseSource.start();
    };

    const toggleTheme = () => {
        const currentIndex = themeOptions.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themeOptions.length;
        setTheme(themeOptions[nextIndex]);
        playSound();
    };

    const setCustomTheme = (newTheme) => {
        if (themeOptions.includes(newTheme)) {
            setTheme(newTheme);
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, themeOptions, toggleTheme, setCustomTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);