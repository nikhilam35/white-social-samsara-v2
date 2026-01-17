// src/components/WorldMap.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { COPY } from '../data/copy.js';
import { WORLDS } from '../data/pricingData.js';
import { useCalculator } from '../context/CalculatorContext.jsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const WorldMap = () => {
    const { nextStage, prevStage, setActiveWorld, activeWorld } = useCalculator();
    const { title, body, note } = COPY.WORLD_MAP;

    const handleEnterWorld = (worldId) => {
        setActiveWorld(worldId);
        nextStage(); // Go to Stage 3 (Module Selection)
    };

    return (
        <div className="min-h-screen py-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 max-w-3xl"
            >
                <div className="mb-6">
                    <button
                        onClick={prevStage}
                        className="text-sm flex items-center gap-2 mx-auto transition-all px-5 py-2.5 bg-white hover:bg-gray-50 border border-black/10 rounded-full shadow-sm text-black/60 hover:text-black backdrop-blur-sm"
                    >
                        Start Over
                    </button>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-black">Select Your Growth Path</h2>
                <p className="text-xl text-black/60 leading-relaxed">Start with the bucket that aligns with your immediate goals.</p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16 px-4">
                {Object.entries(WORLDS).map(([key, world], index) => (
                    <motion.div
                        key={world.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="group relative bg-white rounded-[2rem] p-8 border border-gray-200 transition-all cursor-pointer flex flex-col h-full hover:shadow-2xl hover:shadow-black/5 hover:border-black/10"
                        onClick={() => handleEnterWorld(key)}
                    >
                        {/* Number Badge */}
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                Path 0{index + 1}
                            </span>
                        </div>

                        <h3 className="text-2xl font-serif font-bold mb-2 text-black leading-tight">{world.name}</h3>

                        <p className="text-black/60 text-sm leading-relaxed mb-8 flex-grow mt-4">
                            {world.description}
                        </p>

                        <button className="w-full py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors mb-8 shadow-sm">
                            Enter System
                        </button>

                        {/* Feature List */}
                        <div className="border-t border-gray-100 pt-8 space-y-3">
                            {world.services.slice(0, 3).map((service, i) => (
                                <div key={i} className="flex items-start gap-3 w-full">
                                    <div className="mt-1 w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                                    </div>
                                    <span className="text-sm text-black/60 leading-tight">
                                        {service.name}
                                    </span>
                                </div>
                            ))}
                            {world.services.length > 3 && (
                                <div className="text-xs text-black/30 pl-7">
                                    + {world.services.length - 3} more modules
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-black/40 text-sm"
            >
                {note}
            </motion.p>
        </div>
    );
};

export default WorldMap;
