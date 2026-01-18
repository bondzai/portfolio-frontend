import React, { useEffect, useRef } from 'react';

const MatrixRain = ({ active, width = 180, height = 180, speed = 20 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set dimensions
        canvas.width = width;
        canvas.height = height;

        // Constants
        const fontSize = 10;
        const columns = width / fontSize;
        const drops = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start above for staggered fall
        }

        // Characters (Katakana + Latin)
        const chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let animationFrameId;

        // Theme Colors
        const getThemeColor = () => {
            const style = getComputedStyle(document.body);
            return style.getPropertyValue('--color-highlight').trim() || '#00ff00';
        };

        let color = getThemeColor();

        const draw = () => {
            // Fade out previous frame to create trails (Transparency Logic)
            // 'destination-out' removes pixels, making them transparent over time
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Slower fade for longer trails
            ctx.fillRect(0, 0, width, height);

            // Switching back to draw text
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = color;
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                // x = column * font_size, y = drops[i] * font_size
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop or move down
                if (drops[i] * fontSize > height && Math.random() > 0.995) { // Slower reset chance
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        let lastTime = 0;
        const fps = speed; // Dynamic speed from props
        const interval = 1000 / fps;

        const animate = (time) => {
            if (!active) return;
            animationFrameId = requestAnimationFrame(animate);

            const delta = time - lastTime;
            if (delta > interval) {
                lastTime = time - (delta % interval);
                draw();
            }
        };

        if (active) {
            // Start transparent
            ctx.clearRect(0, 0, width, height);
            animate(0);
        } else {
            // Clear when inactive
            ctx.clearRect(0, 0, width, height);
            cancelAnimationFrame(animationFrameId);
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [active, width, height, speed]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed', // Changed to fixed for full background support
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 0,
                opacity: active ? 0.3 : 0, // Lower opacity for background subtlety
                transition: 'opacity 0.8s ease',
            }}
        />
    );
};

export default MatrixRain;
