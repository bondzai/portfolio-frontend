import React from 'react';

const Moonlight = ({ active, width, height }) => {
    if (!active) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            // Transparent background, only the light effect
            background: 'transparent',
            overflow: 'hidden',
            pointerEvents: 'none',
            transition: 'opacity 1s ease',
            opacity: active ? 1 : 0
        }}>
            {/* Top-down Moonlight Beam/Glow */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '20%',
                right: '20%',
                height: '80%',
                background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.15) 0%, rgba(200, 220, 255, 0.05) 40%, transparent 70%)',
                filter: 'blur(40px)',
                borderRadius: '50%'
            }}></div>

            {/* Subtle ambient light from top */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '40%',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, transparent 100%)',
            }}></div>
        </div>
    );
};

export default Moonlight;
