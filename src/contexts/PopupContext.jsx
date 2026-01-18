import React, { createContext, useState, useContext, useEffect } from 'react';
import { compareVersions } from '../utils/versionUtils';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
    const [popupQueue, setPopupQueue] = useState([]);

    const addPopup = (popup) => {
        const { id, oncePerSession, onceForever, version, storageKey } = popup;

        // Determine key
        const key = storageKey || `popup_ack_${id}`;

        // Check Access Logic
        if (onceForever) {
            const storedAck = localStorage.getItem(key);
            if (version) {
                // If versioned, check if stored version is >= current version
                // Fix: parseFloat('2.0.3') stops at '2'. distinct strings comparison needed.
                const storedVersion = storedAck || '0';

                // If stored version matches current version exactly, don't show
                if (compareVersions(storedVersion, version.toString()) === 0) return;
            } else {
                // Fallback to boolean check
                if (storedAck) return;
            }
        }

        if (oncePerSession && sessionStorage.getItem(key)) return;

        // Avoid duplicates in current queue
        setPopupQueue((prev) => {
            if (prev.find(p => p.id === id)) return prev;
            return [...prev, popup];
        });
    };

    const dismissPopup = (id) => {
        // Acknowledge logic
        const popup = popupQueue.find(p => p.id === id);
        if (popup) {
            const key = popup.storageKey || `popup_ack_${id}`;
            if (popup.onceForever) {
                const value = popup.version ? popup.version.toString() : 'true';
                localStorage.setItem(key, value);
            }
            if (popup.oncePerSession) sessionStorage.setItem(key, 'true');
        }

        setPopupQueue((prev) => prev.filter(p => p.id !== id));
    };

    const clearAll = () => {
        setPopupQueue([]);
    };

    return (
        <PopupContext.Provider value={{ popupQueue, addPopup, dismissPopup, clearAll }}>
            {children}
        </PopupContext.Provider>
    );
};
