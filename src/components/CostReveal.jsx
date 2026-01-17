// src/components/CostReveal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCalculator } from '../context/CalculatorContext.jsx';
import { ArrowLeft, CheckCircle, Info, Calendar } from 'lucide-react';

const CostReveal = () => {
    const {
        pkgTotal, goToStage, STAGES
    } = useCalculator();

    const [showBreakdown, setShowBreakdown] = useState(false);

    // If no services selected, redirect back
    if (pkgTotal.totalCost === 0) {
        goToStage(STAGES.WORLD_MAP);
        return null;
    }

    return (
        <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto flex flex-col items-center">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-sm font-bold mb-6 tracking-wide uppercase">
                    Your Growth Engine
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
                    Proposal Summary
                </h2>
                <p className="text-xl text-black/60 max-w-2xl mx-auto">
                    A comprehensive system tailored to your goals.
                </p>
            </motion.div>

            {/* Comparison Card */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full bg-white rounded-[2.5rem] p-8 md:p-12 border border-black/10 shadow-xl mb-12 relative overflow-hidden"
            >
                {/* AI Savings Banner */}
                {pkgTotal.totalSavings > 0 && (
                    <div className="absolute top-0 right-0 bg-[#7DF9FF] text-black text-xs font-bold px-6 py-2 rounded-bl-2xl">
                        AI EFFICIENCY SAVINGS
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="text-center md:text-left opacity-50 grayscale blur-[0.5px]">
                        <p className="text-sm font-bold uppercase tracking-widest mb-2">Traditional Agency</p>
                        <p className="text-4xl font-serif text-black line-through decoration-brand-red/50 decoration-2">
                            ₹{(pkgTotal.totalTraditionalCost).toLocaleString('en-IN')}
                        </p>
                        <p className="text-sm text-black/60 mt-2">Manual execution, higher overhead.</p>
                    </div>

                    <div className="text-center md:text-left relative">
                        <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-px h-24 bg-black/10 hidden md:block" />

                        <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-2">Social Samsara</p>
                        <div className="flex items-baseline justify-center md:justify-start gap-2">
                            <span className="text-2xl text-black">₹</span>
                            <span className="text-6xl font-serif font-bold text-black">
                                {(pkgTotal.totalCost).toLocaleString('en-IN')}
                            </span>
                            <span className="text-xl text-black/40">/mo</span>
                        </div>
                        <p className="text-sm text-black/60 mt-2">AI-Enhanced, Data-Driven.</p>

                        {pkgTotal.totalSavings > 0 && (
                            <div className="mt-4 px-4 py-2 bg-[#7DF9FF]/20 text-black text-sm rounded-lg inline-flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#2E4F4F]" />
                                You save <strong>₹{pkgTotal.totalSavings.toLocaleString('en-IN')}</strong> per month
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Breakdown List */}
            <div className="w-full max-w-2xl mb-12">
                <button
                    onClick={() => setShowBreakdown(!showBreakdown)}
                    className="flex items-center gap-2 mx-auto text-sm text-black/60 hover:text-black transition-all mb-6"
                >
                    <Info className="w-4 h-4" /> {showBreakdown ? 'Hide Breakdown' : 'View Breakdown'}
                </button>

                <AnimatePresence>
                    {showBreakdown && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-white rounded-3xl p-8 border border-black/5 overflow-hidden"
                        >
                            <ul className="space-y-4">
                                {pkgTotal.breakdown.map((item, i) => (
                                    <li key={i} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2 last:border-0">
                                        <div className="flex flex-col text-left">
                                            <span className="font-bold text-black">{getServiceById(item.serviceId)?.name}</span>
                                            <span className="text-xs text-black/50">{item.label} • {item.detail}</span>
                                        </div>
                                        <span className="font-mono text-black">₹{item.cost.toLocaleString('en-IN')}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                <button
                    onClick={() => goToStage(STAGES.MODULE_SELECTION)}
                    className="px-8 py-4 bg-white border border-black/10 rounded-full text-black hover:bg-gray-50 transition-colors font-medium flex-1 md:flex-none"
                >
                    Edit Selection
                </button>
                <button
                    onClick={() => goToStage(STAGES.CONTACT_FORM)} // Or Final Summary
                    className="px-10 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-brand-red transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 flex-[2] md:flex-none"
                >
                    <Calendar className="w-5 h-5" />
                    Book Your Strategy Call
                </button>
            </div>
        </div>
    );
};

export default CostReveal;
