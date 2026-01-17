import React, { createContext, useState, useContext, useEffect } from 'react';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
    const [popupQueue, setPopupQueue] = useState([]);

    const addPopup = (popup) => {
        const { id, oncePerSession, onceForever } = popup;

        // Check Access Logic
        if (onceForever && localStorage.getItem(`popup_ack_${id}`)) return;
        if (oncePerSession && sessionStorage.getItem(`popup_ack_${id}`)) return;

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
            if (popup.onceForever) localStorage.setItem(`popup_ack_${id}`, 'true');
            if (popup.oncePerSession) sessionStorage.setItem(`popup_ack_${id}`, 'true');
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
