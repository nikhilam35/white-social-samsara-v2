// src/data/pricingData.js

export const WORLDS = {
  AUDIENCE: {
    id: 'audience',
    name: 'Audience Growth & Awareness',
    description: 'Keep your brand visible and consistently top-of-mind.',
    color: '#0C0E10', // Charcoal
    services: [
      {
        id: 'social_media',
        name: 'Social Media Management',
        category: 'Audience Growth',
        description: 'Content pillars, calendars, and engagement.',
        unit: 'Platform',
        levels: {
          LIGHT: { label: 'Light', price: 20000, traditionalPrice: 35000, detail: '1 Platform, 8 Posts/mo' },
          STANDARD: { label: 'Standard', price: 35000, traditionalPrice: 55000, detail: '2 Platforms, 12 Posts/mo' },
          INTENSIVE: { label: 'Intensive', price: 60000, traditionalPrice: 90000, detail: '3+ Platforms, Daily Posts' }
        }
      },
      {
        id: 'paid_media',
        name: 'Paid Media (PPC)',
        category: 'Audience Growth',
        description: 'Google, Meta, LinkedIn ads management.',
        unit: 'Campaign',
        levels: {
          LIGHT: { label: 'Light', price: 30000, traditionalPrice: 45000, detail: 'Total Spend < $5k' },
          STANDARD: { label: 'Standard', price: 50000, traditionalPrice: 75000, detail: 'Total Spend < $20k' },
          INTENSIVE: { label: 'Intensive', price: 85000, traditionalPrice: 120000, detail: 'Total Spend > $20k' }
        }
      },
      {
        id: 'seo_organic',
        name: 'SEO & Organic Growth',
        category: 'Audience Growth',
        description: 'Search visibility and organic traffic.',
        unit: 'Strategy',
        levels: {
          LIGHT: { label: 'Light', price: 25000, traditionalPrice: 40000, detail: 'Local/Basic SEO' },
          STANDARD: { label: 'Standard', price: 45000, traditionalPrice: 70000, detail: 'National/Content SEO' },
          INTENSIVE: { label: 'Intensive', price: 75000, traditionalPrice: 110000, detail: 'Enterprise/Technical SEO' }
        }
      },
      {
        id: 'community_building',
        name: 'Community Building',
        category: 'Audience Growth',
        description: 'Engagement and community management.',
        unit: 'Community',
        levels: {
          LIGHT: { label: 'Light', price: 15000, traditionalPrice: 25000, detail: 'Monitoring Only' },
          STANDARD: { label: 'Standard', price: 30000, traditionalPrice: 45000, detail: 'Active Engagement' },
          INTENSIVE: { label: 'Intensive', price: 55000, traditionalPrice: 80000, detail: 'Events & Growth' }
        }
      }
    ]
  },
  CONTENT: {
    id: 'content',
    name: 'Content & Creative on Demand',
    description: 'Fresh, relevant content delivered every month.',
    color: '#E6D5C3', // Warm Stone
    services: [
      {
        id: 'campaign_calendars',
        name: 'Campaign Calendars',
        category: 'Content',
        description: 'Planned thematic campaigns.',
        unit: 'Calendar',
        levels: {
          LIGHT: { label: 'Light', price: 10000, traditionalPrice: 18000, detail: 'Quarterly Planning' },
          STANDARD: { label: 'Standard', price: 20000, traditionalPrice: 32000, detail: 'Monthly Planning' },
          INTENSIVE: { label: 'Intensive', price: 35000, traditionalPrice: 50000, detail: 'Weekly Agile Sprints' }
        }
      },
      {
        id: 'blogs_newsletters',
        name: 'Blogs & Newsletters',
        category: 'Content',
        description: 'Thought leadership and updates.',
        unit: 'Piece',
        levels: {
          LIGHT: { label: 'Light', price: 15000, traditionalPrice: 28000, detail: '2 Blogs/mo' },
          STANDARD: { label: 'Standard', price: 28000, traditionalPrice: 48000, detail: '4 Blogs + 1 Newsletter' },
          INTENSIVE: { label: 'Intensive', price: 45000, traditionalPrice: 75000, detail: '8 Blogs + Weekly Newsletter' }
        }
      },
      {
        id: 'video_editing',
        name: 'Short-form Video',
        category: 'Content',
        description: 'Editing & repurposing for Reels/TikTok.',
        unit: 'Video',
        levels: {
          LIGHT: { label: 'Light', price: 20000, traditionalPrice: 40000, detail: '4 Videos/mo' },
          STANDARD: { label: 'Standard', price: 40000, traditionalPrice: 75000, detail: '8 Videos/mo' },
          INTENSIVE: { label: 'Intensive', price: 70000, traditionalPrice: 120000, detail: '12+ Videos/mo' }
        }
      },
      {
        id: 'graphic_production',
        name: 'Graphic Production',
        category: 'Content',
        description: 'Visual assets on demand.',
        unit: 'Asset',
        levels: {
          LIGHT: { label: 'Light', price: 15000, traditionalPrice: 30000, detail: 'Ad-hoc Requests' },
          STANDARD: { label: 'Standard', price: 30000, traditionalPrice: 55000, detail: 'Standard Retainer' },
          INTENSIVE: { label: 'Intensive', price: 55000, traditionalPrice: 90000, detail: 'Dedicated Designer' }
        }
      }
    ]
  },
  CONVERSION: {
    id: 'conversion',
    name: 'Conversion & Revenue',
    description: 'Turn attention into measurable business results.',
    color: '#2E4F4F', // Forest Green
    services: [
      {
        id: 'funnel_setup',
        name: 'Funnel Optimization',
        category: 'Conversion',
        description: 'Continuous funnel improvements.',
        unit: 'Funnel',
        levels: {
          LIGHT: { label: 'Light', price: 25000, traditionalPrice: 45000, detail: 'Audit & Tweaks' },
          STANDARD: { label: 'Standard', price: 45000, traditionalPrice: 80000, detail: 'A/B Testing Loops' },
          INTENSIVE: { label: 'Intensive', price: 80000, traditionalPrice: 140000, detail: 'Full Funnel Rebuilds' }
        }
      },
      {
        id: 'landing_pages',
        name: 'Landing Pages',
        category: 'Conversion',
        description: 'High-converting optional pages.',
        unit: 'Page',
        levels: {
          LIGHT: { label: 'Light', price: 15000, traditionalPrice: 35000, detail: '1 Page/mo' },
          STANDARD: { label: 'Standard', price: 28000, traditionalPrice: 60000, detail: '2 Pages/mo' },
          INTENSIVE: { label: 'Intensive', price: 50000, traditionalPrice: 100000, detail: 'Weekly Variations' }
        }
      },
      {
        id: 'email_marketing',
        name: 'Email & Lifecycle',
        category: 'Conversion',
        description: 'Automation flows and newsletters.',
        unit: 'Flow',
        levels: {
          LIGHT: { label: 'Light', price: 20000, traditionalPrice: 35000, detail: 'Basic Flows' },
          STANDARD: { label: 'Standard', price: 35000, traditionalPrice: 60000, detail: 'Advanced Segmentation' },
          INTENSIVE: { label: 'Intensive', price: 60000, traditionalPrice: 100000, detail: 'Hyper-Personalization' }
        }
      },
      {
        id: 'retargeting',
        name: 'Retargeting Campaigns',
        category: 'Conversion',
        description: 'Bring back lost visitors.',
        unit: 'Campaign',
        levels: {
          LIGHT: { label: 'Light', price: 18000, traditionalPrice: 30000, detail: 'Basic Pixel Setup' },
          STANDARD: { label: 'Standard', price: 32000, traditionalPrice: 55000, detail: 'Dynamic Product Ads' },
          INTENSIVE: { label: 'Intensive', price: 50000, traditionalPrice: 85000, detail: 'Cross-Channel Sequences' }
        }
      }
    ]
  },
  AI_EFFICIENCY: {
    id: 'ai_efficiency',
    name: 'AI-Enhanced Efficiency',
    description: 'Smarter operations that save cost and time.',
    color: '#7DF9FF', // Electric Cyan
    services: [
      {
        id: 'ai_content',
        name: 'AI Content Creation',
        category: 'AI Efficiency',
        description: 'Drafts, variations, translations.',
        unit: 'System',
        levels: {
          LIGHT: { label: 'Light', price: 12000, traditionalPrice: 30000, detail: 'Basic Tooling' },
          STANDARD: { label: 'Standard', price: 25000, traditionalPrice: 60000, detail: 'Custom Models' },
          INTENSIVE: { label: 'Intensive', price: 45000, traditionalPrice: 110000, detail: 'Full Content Factory' }
        }
      },
      {
        id: 'auto_reporting',
        name: 'Automated Reporting',
        category: 'AI Efficiency',
        description: 'Dashboards and insights.',
        unit: 'Dashboard',
        levels: {
          LIGHT: { label: 'Light', price: 8000, traditionalPrice: 20000, detail: 'Monthly PDF' },
          STANDARD: { label: 'Standard', price: 15000, traditionalPrice: 35000, detail: 'Live Dashboard' },
          INTENSIVE: { label: 'Intensive', price: 25000, traditionalPrice: 60000, detail: 'Predictive Insights' }
        }
      },
      {
        id: 'customer_journey',
        name: 'Journey Mapping',
        category: 'AI Efficiency',
        description: 'AI analytics of user paths.',
        unit: 'Map',
        levels: {
          LIGHT: { label: 'Light', price: 15000, traditionalPrice: 40000, detail: 'Quarterly Audit' },
          STANDARD: { label: 'Standard', price: 28000, traditionalPrice: 70000, detail: 'Monthly Optimization' },
          INTENSIVE: { label: 'Intensive', price: 50000, traditionalPrice: 120000, detail: 'Real-time Adaptation' }
        }
      }
    ]
  }
};

// Simplified LEVELS for metadata if needed, though services now have self-contained levels
export const LEVELS = {
  LIGHT: { label: 'Light Efforts', multiplier: 1 },
  STANDARD: { label: 'Standard Growth', multiplier: 1 },
  INTENSIVE: { label: 'Intensive Scale', multiplier: 1 }
};
