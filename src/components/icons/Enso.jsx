import React from 'react';

const Enso = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M50 15 C 30 15, 10 30, 10 50 C 10 75, 30 90, 50 90 C 80 90, 90 60, 85 40"
            strokeLinecap="round"
            strokeDasharray="200"
            style={{
                filter: "url(#brush-stroke)",
                opacity: 0.8
            }}
        />
        <defs>
            <filter id="brush-stroke">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
            </filter>
        </defs>
    </svg>
);

export default Enso;
