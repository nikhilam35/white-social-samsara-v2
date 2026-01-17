
import React, { useEffect, useRef } from 'react';

const HeroBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0, isActive: false, lastMoved: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId;

        // Configuration
        const PARTICLE_COUNT = 800; // Increased density
        const COLORS = ['#0C0E10', '#FF3B30']; // Black and "Samsara Red"
        const FRICTION = 0.95; // More friction for slower feel
        const IDLE_TIMEOUT = 3000; // 3 seconds
        const ORIGIN_SPRING = 0.002; // Extremely gentle return to prevent snapping
        const MOUSE_RADIUS = 300;
        const MAX_SPEED = 0.5; // HARD CAP on speed

        // State
        let particles = [];

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            mouseRef.current.isActive = true;
            mouseRef.current.lastMoved = Date.now();
        };

        const handleMouseLeave = () => {
            mouseRef.current.isActive = false;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave); // Detect leaving page

        class Particle {
            constructor() {
                this.init();
            }

            init() {
                // Random Home Position (Spread all over)
                this.originX = Math.random() * width;
                this.originY = Math.random() * height;

                // Start at home
                this.x = this.originX;
                this.y = this.originY;

                // Reduced initial velocity for calm start
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;

                // Base size is now nano-scale (Barely visible dust)
                this.baseSize = Math.random() * 0.4 + 0.2;
                this.currentSize = this.baseSize;

                // Randomly pick color
                this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            }

            update() {
                const now = Date.now();
                const timeSinceMove = now - mouseRef.current.lastMoved;
                const isIdle = timeSinceMove > IDLE_TIMEOUT || !mouseRef.current.isActive;

                let targetSize = this.baseSize;

                if (isIdle) {
                    // IDLE BEHAVIOR: Return to Origin
                    const dx = this.originX - this.x;
                    const dy = this.originY - this.y;

                    // Spring to home
                    this.vx += dx * ORIGIN_SPRING;
                    this.vy += dy * ORIGIN_SPRING;
                } else {
                    // ACTIVE BEHAVIOR: Just Size Reaction (No Motion Force)
                    const dxMouse = mouseRef.current.x - this.x;
                    const dyMouse = mouseRef.current.y - this.y;
                    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                    if (distMouse < MOUSE_RADIUS) {
                        // REMOVED REPLUSION FORCE

                        // Grow when close
                        const growthFactor = (1 - distMouse / MOUSE_RADIUS) * 3; // Grow up to 3x (+ base)
                        targetSize = this.baseSize * (1 + growthFactor);
                    }
                }

                // Smoothly interpolate size
                this.currentSize += (targetSize - this.currentSize) * 0.1;

                // Friction
                this.vx *= FRICTION;
                this.vy *= FRICTION;

                // VELOCITY CLAMPING
                const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                if (speed > MAX_SPEED) {
                    const ratio = MAX_SPEED / speed;
                    this.vx *= ratio;
                    this.vy *= ratio;
                }

                this.x += this.vx;
                this.y += this.vy;

                // Wrapper (Infinite Canvas)
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw(ctx) {
                const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                const size = this.currentSize;

                ctx.save();
                ctx.translate(this.x, this.y);

                if (speed > 0.1) {
                    ctx.rotate(Math.atan2(this.vy, this.vx));
                    const length = Math.min(speed * 3, 12) + size; // Length also correlates with size
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.rect(-length / 2, -size / 2, length, size);
                    ctx.fill();
                } else {
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(0, 0, size, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.restore();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(new Particle());
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        // Start
        handleResize();
        mouseRef.current.lastMoved = Date.now(); // Start timer
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            style={{ zIndex: 0 }}
        />
    );
};

export default HeroBackground;
