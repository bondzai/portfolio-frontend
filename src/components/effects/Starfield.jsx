import React, { useEffect, useRef } from 'react';

const Starfield = ({ active, width, height, speed = 20 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;

        const stars = [];
        const shootingStars = [];

        // "less stars more clean"
        // drastically reduced density: 1 star per 6000px² roughly
        const STAR_COUNT = Math.floor((width * height) / 6000);

        // Helper: Random Range
        const random = (min, max) => Math.random() * (max - min) + min;

        // Initialize Stars
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: random(0, width),
                y: random(0, height),
                size: random(0.5, 1.5), // Smaller, pin-point stars
                opacity: random(0.3, 0.8),
                speed: random(0.005, 0.02) * (speed / 20) // Very slow twinkle
            });
        }

        let animationFrameId;

        const draw = () => {
            // Clear canvas - TRANSPARENT background
            ctx.clearRect(0, 0, width, height);

            // Draw Static Stars
            stars.forEach(star => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Twinkle logic
                star.opacity += star.speed;
                if (star.opacity > 0.8 || star.opacity < 0.2) {
                    star.speed = -star.speed;
                }
            });

            // Spawn Shooting Star
            // Reduced chance for cleaner look
            if (active && Math.random() < 0.005 * (speed / 20)) {
                shootingStars.push({
                    x: random(0, width),
                    y: random(0, height / 2),
                    length: random(30, 80), // Longer trails
                    speed: random(15, 25) * (speed / 20),
                    angle: Math.PI / 4
                });
            }

            // Draw Shooting Stars
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'; // Subtle trail
            ctx.lineWidth = 1.5;
            for (let i = 0; i < shootingStars.length; i++) {
                const s = shootingStars[i];

                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x - s.length, s.y - s.length);
                ctx.stroke();

                s.x += s.speed;
                s.y += s.speed;

                // Remove off-screen
                if (s.x > width || s.y > height) {
                    shootingStars.splice(i, 1);
                    i--;
                }
            }

            if (active) {
                animationFrameId = requestAnimationFrame(draw);
            }
        };

        if (active) {
            draw();
        } else {
            ctx.clearRect(0, 0, width, height);
            cancelAnimationFrame(animationFrameId);
        }

        return () => cancelAnimationFrame(animationFrameId);
    }, [active, width, height, speed]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 0,
                background: 'transparent', // Ensure transparent
                opacity: active ? 1 : 0,
                transition: 'opacity 1s ease',
            }}
        />
    );
};

export default Starfield;
