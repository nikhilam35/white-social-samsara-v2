import React from 'react';
import SamsaraWheel from '../../components/SamsaraWheel';

const WheelDemo = () => {
    return (
        <div className="min-h-screen bg-[#0C0E10] flex flex-col items-center justify-center p-10 overflow-hidden">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-white mb-2">The Wheel of Growth</h1>
                <p className="text-gray-400">Concept #2: Interactive Cycle Navigation</p>
            </div>

            <SamsaraWheel />
        </div>
    );
};

export default WheelDemo;
