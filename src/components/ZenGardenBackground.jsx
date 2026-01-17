import React, { useEffect, useRef } from 'react';

const ZenGardenBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0, isActive: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let animationFrameId;

        // Configuration
        const DENSITY = 0.0008; // Particles per pixel area
        const COLOR_BASE = '#0C0E10'; // Dark background
        const PARTICLE_COLOR = 'rgba(200, 200, 200, 0.5)'; // Sand color
        const MOUSE_RADIUS = 100;
        const FRICTION = 0.9;
        const RETURN_STRENGTH = 0.01;

        let particles = [];

        class SandGrain {
            constructor(x, y) {
                this.originX = x;
                this.originY = y;
                this.x = x;
                this.y = y;
                this.vx = 0;
                this.vy = 0;
                this.size = Math.random() * 1.5 + 0.5; // Varied grain size
                this.color = Math.random() > 0.9 ? 'rgba(255, 59, 48, 0.4)' : PARTICLE_COLOR; // Occasional red grain
            }

            update() {
                // Return to origin (settling)
                const dxHome = this.originX - this.x;
                const dyHome = this.originY - this.y;

                this.vx += dxHome * RETURN_STRENGTH;
                this.vy += dyHome * RETURN_STRENGTH;

                // Mouse Interaction (Rake)
                if (mouseRef.current.isActive) {
                    const dx = this.x - mouseRef.current.x;
                    const dy = this.y - mouseRef.current.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < MOUSE_RADIUS) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
                        const repulsionStrength = 2.0;

                        this.vx += forceDirectionX * force * repulsionStrength;
                        this.vy += forceDirectionY * force * repulsionStrength;
                    }
                }

                // Physics
                this.vx *= FRICTION;
                this.vy *= FRICTION;
                this.x += this.vx;
                this.y += this.vy;
            }

            draw(ctx) {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.size, this.size);
            }
        }

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            particles = [];
            const count = Math.floor(width * height * DENSITY);

            for (let i = 0; i < count; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                particles.push(new SandGrain(x, y));
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw background if needed (or keep transparent to overlay on other colored divs)
            // ctx.fillStyle = COLOR_BASE;
            // ctx.fillRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            mouseRef.current.isActive = true;
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        init();
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default ZenGardenBackground;
