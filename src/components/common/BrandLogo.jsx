import React from 'react';

/**
 * A minimal, compact circular monogram logo.
 * @param {number} size - Diameter in pixels (default 32)
 * @param {object} style - Additional styles
 */
const BrandLogo = ({ size = 32, style = {}, className = '' }) => {
    return (
        <div
            className={className}
            style={{
                width: size,
                height: size,
                borderRadius: '50%',
                border: '1.5px solid var(--text-color-primary)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: Math.floor(size * 0.45) + 'px', // Scale font relative to size
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif", // Ensure clean sans-serif
                letterSpacing: '-0.5px',
                color: 'var(--text-color-primary)',
                userSelect: 'none',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                ...style
            }}
            title="James Bond"
        >
            JB
        </div>
    );
};

export default BrandLogo;
