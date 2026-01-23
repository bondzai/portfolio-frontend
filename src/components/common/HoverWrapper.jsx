import React, { useContext } from 'react';
import { HoverContext } from '../../contexts/HoverContext';

const HoverWrapper = ({ children }) => {
    const { setIsHovered } = useContext(HoverContext);
    return (
        <div onMouseEnter={() => setIsHovered(false)} onMouseLeave={() => setIsHovered(true)}>
            {children}
        </div>
    );
};

export default HoverWrapper;
