import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phases = [
    {
        id: 'analyze',
        title: 'Analyse',
        color: '#FF3B30',
        desc: "We dive deep into your data, auditing your current presence to find hidden leaks and opportunities.",
        icon: "📊"
    },
    {
        id: 'adapt',
        title: 'Adapt',
        color: '#FF5D53',
        desc: "Strategies aren't static. We pivot and refine based on real-time feedback and market shifts.",
        icon: "🔄"
    },
    {
        id: 'transform',
        title: 'Transform',
        color: '#FAFAFA', // White/Light for contrast
        textColor: '#000',
        desc: "The metamorphosis. We implement high-impact creative and tech to reshape your brand perception.",
        icon: "🦋"
    },
    {
        id: 'thrive',
        title: 'Thrive',
        color: '#8A2BE2', // Purple accent
        desc: "Sustainable growth. Your brand becomes a market leader, generating recurring revenue on autopilot.",
        icon: "🌟"
    }
];

const SamsaraWheel = () => {
    const [activePhase, setActivePhase] = useState(0);

    return (
        <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center">
            {/* The Wheel */}
            <div className="relative w-[500px] h-[500px]">
                {phases.map((phase, i) => {
                    const rotation = i * 90;
                    const isActive = activePhase === i;

                    return (
                        <motion.div
                            key={phase.id}
                            className="absolute top-0 left-0 w-full h-full origin-center cursor-pointer pointer-events-auto"
                            initial={{ rotate: rotation }}
                            animate={{
                                rotate: rotation - (activePhase * 90),
                                scale: isActive ? 1.05 : 0.95,
                                zIndex: isActive ? 10 : 1
                            }}
                            transition={{ type: "spring", stiffness: 60 }}
                            onClick={() => setActivePhase(i)}
                        >
                            {/* Quadrant Slice */}
                            <div
                                className="absolute top-0 right-0 w-1/2 h-1/2 border-2 border-white/10 flex items-center justify-center overflow-hidden transition-colors duration-300 hover:bg-white/5"
                                style={{
                                    borderBottomLeftRadius: '100%',
                                    transformOrigin: 'bottom left',
                                    background: isActive ? phase.color : 'rgba(0,0,0,0.4)'
                                }}
                            >
                                <div className="absolute bottom-12 left-12 transform -translate-x-1/2 translate-y-1/2">
                                    <span className="text-4xl">{phase.icon}</span>
                                </div>
                                <h3
                                    className="absolute bottom-4 left-4 text-xl font-bold uppercase tracking-wider transform -rotate-45 origin-bottom-left"
                                    style={{ color: isActive && phase.textColor ? phase.textColor : 'white' }}
                                >
                                    {phase.title}
                                </h3>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-black rounded-full border-4 border-white/20 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center shadow-2xl">
                    <div className="text-white font-bold text-center leading-tight">
                        SOCIAL<br /><span className="text-brand-red">SAMSARA</span>
                    </div>
                </div>
            </div>

            {/* Content Display (Right Side) */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-80">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activePhase}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">{phases[activePhase].title}</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {phases[activePhase].desc}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SamsaraWheel;
