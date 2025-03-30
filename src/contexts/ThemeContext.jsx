import React, { createContext, useContext, useState, useEffect } from 'react';

const themeOptions = ['light', 'dark', 'dim'];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme && themeOptions.includes(savedTheme) ? savedTheme : 'dark';
    });

    const toggleTheme = () => {
        const currentIndex = themeOptions.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themeOptions.length;
        setTheme(themeOptions[nextIndex]);
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