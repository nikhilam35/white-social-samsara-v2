// src/components/LevelSelection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { LEVELS } from '../data/pricingData.js';
import { getServiceById, calculateModuleCost } from '../utils/pricingEngine.js';
import { useCalculator } from '../context/CalculatorContext.jsx';
import { ArrowLeft, Check } from 'lucide-react';

const LevelSelection = () => {
    const {
        activeServiceId, nextStage, prevStage,
        addModule, selectedModules
    } = useCalculator();

    const service = getServiceById(activeServiceId);

    // Safety check
    if (!service) return <div className="p-20 text-center">Service not found.</div>;

    const currentLevel = selectedModules[service.id];

    const handleSelectLevel = (levelKey) => {
        addModule(service.id, levelKey);
        nextStage(); // Go to Cost Reveal (Stage 5)
    };

    return (
        <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto">
            <div className="w-full flex justify-center mb-12">
                <button
                    onClick={prevStage}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 border border-black/10 rounded-full text-black/60 hover:text-black transition-all shadow-sm backdrop-blur-sm"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Modules
                </button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center flex flex-col items-center"
            >
                <span className="text-black/40 text-sm uppercase tracking-widest mb-2 block">Configuring</span>
                <h2 className="text-4xl md:text-5xl font-light mb-4 text-black">{service.name}</h2>
                <p className="text-xl text-black/60">
                    Different levels suit different stages.<br />
                    This isn’t about volume. It’s about intent.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {Object.entries(LEVELS).map(([key, level], index) => {
                    const isSelected = currentLevel === key;
                    const details = calculateModuleCost(service.id, key); // Calculate live cost

                    return (
                        <motion.button
                            key={key}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleSelectLevel(key)}
                            className={`
                                relative text-left p-8 rounded-[2rem] border transition-all group w-full flex flex-col items-start
                                ${isSelected
                                    ? 'bg-white ring-2 ring-brand-red border-transparent shadow-xl shadow-brand-red/10 scale-[1.01]'
                                    : 'bg-white border-gray-200 hover:border-black/20 hover:shadow-xl hover:shadow-black/5'
                                }
                            `}
                        >
                            {/* Badge */}
                            <div className="mb-6 w-full flex justify-between items-center">
                                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${isSelected ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-600'}`}>
                                    {level.label}
                                </span>
                                {isSelected && <Check className="w-5 h-5 text-brand-red" />}
                            </div>

                            <h3 className="text-3xl font-normal mb-2 text-black text-left">{level.name}</h3>
                            <div className="text-lg text-black/40 mb-6 text-left w-full">
                                {details.quantity} {service.unit}s
                            </div>

                            <div className="text-4xl font-normal text-black mb-8 w-full text-left">
                                ₹{details.cost.toLocaleString('en-IN')}
                                <span className="text-lg text-black/40 ml-2 font-light">/ month</span>
                            </div>

                            <div className={`w-full py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 mb-8 text-center
                                ${isSelected
                                    ? 'bg-brand-red text-white shadow-md'
                                    : 'bg-black text-white hover:bg-gray-800'
                                }
                            `}>
                                {isSelected ? 'Selected' : 'Select Level'}
                            </div>

                            {/* Feature List */}
                            <div className="w-full border-t border-gray-100 pt-8 space-y-3">
                                <div className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-black/60 leading-tight text-left">
                                        {level.description}
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-black/60 leading-tight text-left">
                                        Full access to system assets
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-black/60 leading-tight text-left">
                                        Monthly optimization cycle
                                    </span>
                                </div>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default LevelSelection;
