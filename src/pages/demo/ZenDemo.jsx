import React from 'react';
import ZenGardenBackground from '../../components/ZenGardenBackground';

const ZenDemo = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <ZenGardenBackground />

            <div className="relative z-10 text-center p-10 max-w-2xl bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl">
                <h1 className="text-5xl font-bold text-black mb-6">Zen Garden Mode</h1>
                <p className="text-xl text-gray-700 mb-8">
                    Move your cursor around to rake the digital sand.
                    <br />
                    A calming interaction to keep users engaged during reading.
                </p>
                <div className="text-sm font-mono text-gray-400">
                    Concept #1: Interactive Background
                </div>
            </div>
        </div>
    );
};

export default ZenDemo;
