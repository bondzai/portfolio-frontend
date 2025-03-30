import React from 'react';
import { FloatButton } from 'antd';
import { useTheme } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <FloatButton
            tooltip={<div>{theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}</div>}
            onClick={toggleTheme}
            icon={theme === 'dark' ? <FaMoon size={12} /> : <FaSun size={12} />}
            style={{
                position: 'fixed',
                top: '10px',
                left: '8px',
                opacity: 0.9,
                zIndex: 1000,
                width: '30px',
                height: '30px',
            }}
        />
    );
};

export default ThemeSwitcher;