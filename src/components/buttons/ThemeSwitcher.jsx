import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme, themeOptions, setCustomTheme } = useTheme();

    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>
                Cycle Theme
            </button>
            <select
                value={theme}
                onChange={(e) => setCustomTheme(e.target.value)}
                style={{ marginLeft: '10px' }}
            >
                {themeOptions.map((t) => (
                    <option key={t} value={t}>
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ThemeSwitcher;