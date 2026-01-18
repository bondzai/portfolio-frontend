import React, { useEffect, useRef } from 'react';

const Snow = ({ active, width, height, speed = 20 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;

        const flakes = [];
        const FLAKE_COUNT = 100;
        const FLAKE_CHARS = ["❄", "❅", "❆", "•"];

        for (let i = 0; i < FLAKE_COUNT; i++) {
            flakes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 15 + 8, // Size: 8px to 23px
                char: FLAKE_CHARS[Math.floor(Math.random() * FLAKE_CHARS.length)],
                density: Math.random() * FLAKE_COUNT,
                speed: Math.random() * 1 + 0.5,
                opacity: Math.random() * 0.5 + 0.2 // Random opacity
            });
        }

        let animationFrameId;
        let angle = 0;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Transparent background - we just draw on top

            const gravity = speed / 20;

            angle += 0.01;

            ctx.fillStyle = '#fff'; // White snow

            for (let i = 0; i < FLAKE_COUNT; i++) {
                const flake = flakes[i];

                // Movement
                flake.y += (Math.cos(angle + flake.density) + 1 + flake.radius / 20) * gravity;
                flake.x += Math.sin(angle) * 2;

                // Reset / Wrap logic
                if (flake.x > width + 20 || flake.x < -20 || flake.y > height) {
                    if (i % 3 > 0) {
                        flake.x = Math.random() * width;
                        flake.y = -20;
                    } else {
                        // Side entry
                        if (Math.sin(angle) > 0) {
                            flake.x = -20;
                            flake.y = Math.random() * height;
                        } else {
                            flake.x = width + 20;
                            flake.y = Math.random() * height;
                        }
                    }
                }

                // Draw Character
                ctx.globalAlpha = flake.opacity;
                ctx.font = `${flake.radius}px sans-serif`;
                ctx.fillText(flake.char, flake.x, flake.y);
                ctx.globalAlpha = 1;
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
                opacity: active ? 1 : 0,
                transition: 'opacity 1s ease',
            }}
        />
    );
};

export default Snow;
