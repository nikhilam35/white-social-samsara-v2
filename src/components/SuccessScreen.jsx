// src/components/SuccessScreen.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useCalculator } from '../context/CalculatorContext.jsx';
import { CheckCircle, ArrowLeft } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const SuccessScreen = () => {
    const { goToStage, STAGES } = useCalculator();
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen py-20 px-6 w-full flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-[2rem] p-12 md:p-16 border border-black/10 shadow-xl max-w-2xl w-full"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="bg-green-50 rounded-full p-6 mb-8 w-fit mx-auto"
                >
                    <CheckCircle className="w-16 h-16 text-green-600" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-light mb-6 text-black"
                >
                    System Locked.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-black/60 leading-relaxed mb-12"
                >
                    We have received your configuration. Our team will review your system efficiency score and contact you ASAP.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onClick={handleHome}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-brand-red transition-all shadow-lg hover:shadow-brand-red/20 mx-auto w-full md:w-auto"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 opacity-50 text-sm font-mono text-black/40"
            >
                samsara@exetera.in
            </motion.div>
        </div>
    );
};

export default SuccessScreen;
