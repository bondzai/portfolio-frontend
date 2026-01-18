import React, { createContext, useState, useRef, useEffect, useContext } from 'react';
import FeatureTour from '../components/common/FeatureTour';
import useScreenDimensions, { ScreenSize } from '../hooks/useScreenDimensions';
import { usePopup } from './PopupContext';
import { TOUR_VERSION } from '../utils/constants'; // Use same version logic as popup
import { compareVersions } from '../utils/versionUtils';

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
        // Save the current Popup/Tour version, not App version
        localStorage.setItem('tour_version', TOUR_VERSION);
    };

    useEffect(() => {
        // Build a tour trigger check
        // Wait for popupQueue to be empty
        if (popupQueue.length > 0) return;

        // Auto-start allowed on mobile now (User Request)
        // if (isMobile) return;

        const currentVersion = TOUR_VERSION;
        const savedVersion = localStorage.getItem('tour_version') || '0';

        if (compareVersions(savedVersion, currentVersion) !== 0) {
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
