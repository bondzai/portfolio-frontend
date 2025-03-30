import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaCheck } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const { theme, toggleTheme, themeOptions, setCustomTheme } = useTheme();

    return (
        <div className="theme-switcher">
            <div className="theme-options">
                {themeOptions.map((t) => (
                    <button
                        key={t}
                        className={`theme-option ${theme === t ? 'selected' : ''}`}
                        onClick={() => setCustomTheme(t)}
                    >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                        {theme === t && (
                            <FaCheck className="theme-check-icon" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeSwitcher;