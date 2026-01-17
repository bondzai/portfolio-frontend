import React, { createContext, useState, useContext } from 'react';

const WindowContext = createContext();

export const useWindow = () => useContext(WindowContext);

export const WindowProvider = ({ children }) => {
    // Stores IDs of currently open windows
    const [runningApps, setRunningApps] = useState([]);

    // Stores IDs of minimized windows
    const [minimizedApps, setMinimizedApps] = useState([]);

    const openWindow = (appId) => {
        // Add to running apps if not present
        if (!runningApps.includes(appId)) {
            setRunningApps(prev => [...prev, appId]);
        }
        // Remove from minimized apps if present (Restore)
        if (minimizedApps.includes(appId)) {
            setMinimizedApps(prev => prev.filter(id => id !== appId));
        }
    };

    const closeWindow = (appId) => {
        setRunningApps(prev => prev.filter(id => id !== appId));
        setMinimizedApps(prev => prev.filter(id => id !== appId));
    };

    const minimizeWindow = (appId) => {
        if (!minimizedApps.includes(appId)) {
            setMinimizedApps(prev => [...prev, appId]);
        }
    };

    const closeAll = () => {
        setRunningApps([]);
        setMinimizedApps([]);
    };

    const isWindowOpen = (appId) => runningApps.includes(appId);
    const isWindowMinimized = (appId) => minimizedApps.includes(appId);

    return (
        <WindowContext.Provider value={{
            runningApps,
            minimizedApps,
            openWindow,
            closeWindow,
            minimizeWindow,
            closeAll,
            isWindowOpen,
            isWindowMinimized
        }}>
            {children}
        </WindowContext.Provider>
    );
};
