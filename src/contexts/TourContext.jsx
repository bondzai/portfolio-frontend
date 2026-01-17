import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import FeatureTour from '../components/common/FeatureTour';
import useScreenDimensions, { ScreenSize } from '../hooks/useScreenDimensions';
import { usePopup } from './PopupContext';

const TourContext = createContext();

export const TourProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { screenSize } = useScreenDimensions();
    const { popupQueue } = usePopup();
    const isMobile = screenSize === ScreenSize.XS || screenSize === ScreenSize.SM;

    // Store refs in a mutable object
    // We use a getter function or direct access pattern for the Tour component
    const refs = useRef({});

    const registerRef = (key, ref) => {
        refs.current[key] = ref;
    };

    const openTour = () => setIsOpen(true);
    const closeTour = () => {
        setIsOpen(false);
        localStorage.setItem('has_seen_v2_tour', 'true');
    };

    useEffect(() => {
        // Build a tour trigger check
        // Wait for popupQueue to be empty
        if (popupQueue.length > 0) return;

        // Auto-start allowed on mobile now (User Request)
        // if (isMobile) return;

        const hasSeenTour = localStorage.getItem('has_seen_v2_tour');
        if (!hasSeenTour) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [popupQueue, isMobile]);

    return (
        <TourContext.Provider value={{ openTour, closeTour, registerRef, isOpen }}>
            {children}
            <FeatureTour
                isOpen={isOpen}
                onClose={closeTour}
                refs={refs.current}
            />
        </TourContext.Provider>
    );
};

export const useTour = () => useContext(TourContext);
