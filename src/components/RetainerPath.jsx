// src/components/RetainerPath.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useCalculator } from '../context/CalculatorContext.jsx';
import { ArrowRight, Check, X } from 'lucide-react';

const RetainerPath = () => {
    const { pkgTotal, nextStage } = useCalculator();

    // Fabricate a "Transactional" price for comparison (e.g. 1.4x the system price)
    // In reality, this would be calculated by summing up non-bundled base prices.
    // For now we simulate the markup.
    const transactionalPrice = Math.round(pkgTotal.totalCost * 1.45);
    const systemPrice = pkgTotal.totalCost;

    return (
        <div className="min-h-screen py-20 px-6 max-w-6xl mx-auto flex flex-col items-center">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 max-w-2xl"
            >
                <div className="inline-block px-4 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-medium mb-4 shadow-sm border border-brand-red/20">
                    ✨ System Stability Unlocked
                </div>
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-black">Compare Approaches</h2>
                <p className="text-xl text-black/60">
                    Brands with interconnected systems work best on a monthly rhythm.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {/* Transactional Path */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-8 md:p-12 rounded-[2rem] border border-black/10 bg-gray-50 opacity-60 hover:opacity-100 transition-opacity shadow-sm"
                >
                    <h3 className="text-2xl font-light mb-2 text-black/60">One-off Execution</h3>
                    <div className="text-4xl font-light mb-8 text-black">₹{transactionalPrice.toLocaleString('en-IN')}</div>

                    <ul className="space-y-4 mb-8 text-black/60">
                        <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-500" /> Higher per-unit cost</li>
                        <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-500" /> Context resets monthly</li>
                        <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-500" /> More coordination effort</li>
                    </ul>
                </motion.div>

                {/* System Path (Retainer) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative p-8 md:p-12 rounded-[2rem] border border-brand-red/20 bg-white ring-1 ring-brand-red/10 shadow-xl shadow-brand-red/5"
                >
                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

                    <h3 className="text-2xl font-light mb-2 text-black">Monthly System (Retainer)</h3>
                    <div className="text-4xl font-light mb-2 text-black">₹{systemPrice.toLocaleString('en-IN')} <span className="text-lg text-black/40">/ month</span></div>
                    <div className="text-brand-red text-sm mb-8 font-medium">Efficient System Savings Applied</div>

                    <ul className="space-y-4 mb-10 text-black/70">
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-600" /> Lower per-unit cost</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-600" /> Continuous optimisation</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-600" /> Shared learning across systems</li>
                    </ul>

                    <button
                        onClick={nextStage} // Moves to Stage 10 (Contact Form)
                        className="w-full py-4 bg-brand-red text-white rounded-full font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20"
                    >
                        Choose System Path <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-center text-xs text-black/40 mt-4">Same ambition. Different outcomes.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default RetainerPath;
