// src/utils/pricingEngine.js
import { WORLDS } from '../data/pricingData.js';

// Flatten services for easier lookup
const servicesMap = {};
Object.values(WORLDS).forEach(bucket => {
    bucket.services.forEach(service => {
        servicesMap[service.id] = service;
    });
});

export const getServiceById = (id) => servicesMap[id];

/**
 * Calculates the cost for a specific service at a given level.
 * @param {string} serviceId 
 * @param {string} levelKey key (LIGHT, STANDARD, INTENSIVE)
 */
export const calculateModuleCost = (serviceId, levelKey) => {
    const service = servicesMap[serviceId];
    if (!service || !levelKey) return { cost: 0, traditionalCost: 0, savings: 0 };

    const levelData = service.levels[levelKey];
    if (!levelData) return { cost: 0, traditionalCost: 0, savings: 0 };

    const cost = levelData.price;
    const traditionalCost = levelData.traditionalPrice;
    const savings = traditionalCost - cost;

    return {
        cost,
        traditionalCost,
        savings,
        label: levelData.label,
        detail: levelData.detail
    };
};

/**
 * Calculates total cost and details for the entire system selections.
 * @param {Object} selectedModules Map of serviceId -> levelKey
 */
export const calculateSystemTotal = (selectedModules) => {
    let totalCost = 0;
    let totalTraditionalCost = 0;
    let totalSavings = 0;
    let breakdown = [];

    Object.entries(selectedModules).forEach(([serviceId, levelKey]) => {
        if (!levelKey) return;
        const details = calculateModuleCost(serviceId, levelKey);
        totalCost += details.cost;
        totalTraditionalCost += details.traditionalCost;
        totalSavings += details.savings;

        breakdown.push({ serviceId, ...details });
    });

    return {
        totalCost,
        totalTraditionalCost,
        totalSavings,
        breakdown
    };
};

export const getEfficiencyLevel = (selectedModules) => {
    // Logic: More modules = Higher Efficiency/Compounding effect?
    // Or just simple count based.
    const count = Object.keys(selectedModules).length;
    if (count <= 1) return { level: 'low', label: 'Fragmented', score: 20 };
    if (count <= 3) return { level: 'medium', label: 'Integrated', score: 60 };
    return { level: 'high', label: 'Samsara System', score: 95 };
};
