// src/components/ModuleSelection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { WORLDS } from '../data/pricingData.js';
import { useCalculator } from '../context/CalculatorContext.jsx';
import { ArrowLeft, Plus, ArrowRight } from 'lucide-react';

const ModuleSelection = () => {
    const {
        activeWorld, setActiveServiceId, nextStage, prevStage,
        selectedModules, goToStage, STAGES, addModule, removeModule
    } = useCalculator();

    // Fallback if no world selected (shouldn't happen in normal flow)
    const world = WORLDS[activeWorld] || WORLDS.FOUNDATION;

    const handleBack = () => {
        // Go back to World Map
        goToStage(STAGES.WORLD_MAP);
    };

    return (
        <div className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-12 text-center flex flex-col items-center"
            >
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 border border-black/10 rounded-full text-black/60 hover:text-black transition-all mb-8 shadow-sm backdrop-blur-sm"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to System Map
                </button>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-black">
                    {world.name}
                </h2>
                <p className="text-xl text-black/60 max-w-2xl">
                    {world.description} <br />
                    <span className="text-sm text-black/40 mt-2 block">Choose what you want to build.</span>
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {world.services.map((service, index) => {
                    const currentLevel = selectedModules[service.id]; // 'LIGHT', 'STANDARD', 'INTENSIVE' or undefined
                    const isSelected = !!currentLevel;

                    // Helper to get price
                    const startPrice = service.levels ? service.levels.LIGHT.price : 0;

                    return (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`
                                relative p-8 rounded-[2rem] border transition-all flex flex-col items-start shadow-sm
                                ${isSelected
                                    ? 'bg-brand-red/5 border-brand-red shadow-xl shadow-brand-red/10'
                                    : 'bg-white border-gray-200 hover:border-black/20 hover:shadow-xl hover:shadow-black/5'
                                }
                            `}
                        >
                            <h3 className="text-2xl font-serif font-bold text-black mb-2 leading-tight">{service.name}</h3>
                            <div className="text-lg text-black/40 mb-4">
                                From ₹{startPrice.toLocaleString('en-IN')}
                            </div>
                            <p className="text-black/60 text-sm mb-6 leading-relaxed flex-grow">
                                {service.description}
                            </p>

                            {/* Toggles */}
                            <div className="w-full space-y-3 mb-6">
                                {['LIGHT', 'STANDARD', 'INTENSIVE'].map((levelKey) => {
                                    const levelData = service.levels[levelKey];
                                    const isActive = currentLevel === levelKey;
                                    return (
                                        <button
                                            key={levelKey}
                                            onClick={() => addModule(service.id, levelKey)}
                                            className={`
                                                w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all
                                                ${isActive
                                                    ? 'bg-brand-red text-white border-brand-red shadow-md'
                                                    : 'bg-white text-black border-gray-200 hover:border-brand-red/50 hover:bg-brand-red/5'
                                                }
                                            `}
                                        >
                                            <div className="flex flex-col items-start">
                                                <span className="font-bold">{levelData.label}</span>
                                                <span className={`text-xs ${isActive ? 'text-white/80' : 'text-black/50'}`}>
                                                    {levelData.detail}
                                                </span>
                                            </div>
                                            <span className="font-mono">
                                                ₹{(levelData.price / 1000).toFixed(0)}k
                                            </span>
                                        </button>
                                    )
                                })}
                            </div>

                            {isSelected && (
                                <button
                                    onClick={() => removeModule(service.id)}
                                    className="text-xs text-red-500 hover:text-red-700 underline mx-auto w-full text-center"
                                >
                                    Remove Selection
                                </button>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Floating Continue Bar */}
            {Object.keys(selectedModules).length > 0 && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    className="fixed bottom-8 left-0 right-0 flex justify-center z-50 pointer-events-none"
                >
                    <div className="bg-black/90 text-white rounded-full p-2 pl-6 pr-2 shadow-2xl backdrop-blur-md flex items-center gap-4 pointer-events-auto">
                        <div className="flex flex-col">
                            <span className="text-xs text-white/60 uppercase tracking-widest font-medium">Est. Monthly</span>
                            <span className="font-serif text-xl font-bold">
                                {/* Simple sum for quick check, or just 'Continue' text */}
                                Review Proposal
                            </span>
                        </div>
                        <button
                            onClick={() => goToStage(STAGES.COST_REVEAL)}
                            className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-brand-red hover:text-white transition-colors flex items-center gap-2"
                        >
                            Continue <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ModuleSelection;
