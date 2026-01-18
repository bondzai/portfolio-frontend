import React, { useEffect, useRef } from 'react';

const Rain = ({ active, width, height, speed = 20 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;

        const drops = [];
        const DROP_COUNT = Math.floor(width / 5);

        for (let i = 0; i < DROP_COUNT; i++) {
            drops.push({
                x: Math.random() * width,
                y: Math.random() * height,
                length: Math.random() * 20 + 10,
                speed: Math.random() * 10 + 10
            });
        }

        let animationFrameId;

        const draw = () => {
            // Clear canvas - TRANSPARENT background
            ctx.clearRect(0, 0, width, height);

            // Optional: Very subtle darken merely to make rain visible?
            // User said "don't touch background color". So we trust the rain color is visible against the theme.
            // ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; 
            // ctx.fillRect(0, 0, width, height);

            ctx.strokeStyle = 'rgba(174, 194, 224, 0.6)'; // Slightly more visible blue
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';

            const gravity = speed / 20;

            drops.forEach(drop => {
                ctx.beginPath();
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(drop.x, drop.y + drop.length);
                ctx.stroke();

                drop.y += drop.speed * gravity;

                if (drop.y > height) {
                    drop.y = -drop.length;
                    drop.x = Math.random() * width;
                    drop.speed = Math.random() * 10 + 10;
                }
            });

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
                opacity: active ? 1 : 0,
                transition: 'opacity 0.8s ease',
            }}
        />
    );
};

export default Rain;
