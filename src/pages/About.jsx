import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import ZenGardenBackground from '../components/ZenGardenBackground';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-20 relative overflow-hidden">
            <ZenGardenBackground />
            <section className="py-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-black tracking-tight">
                        Transforming Brands Through the <br className="hidden md:block" /> Cycles of Growth
                    </h1>
                    ...
                    <h2 className="text-2xl font-serif font-bold text-black mb-4">Our Origin</h2>
                    ...
                    <h3 className="text-2xl font-serif font-bold text-black mb-2">Our Mission</h3>
                    ...
                    <h2 className="text-3xl font-serif font-bold text-black mb-16">Our Philosophy</h2>
                    ...
                    <h3 className="text-xl font-serif font-bold text-black mb-3">Approach</h3>
                    ...
                    <h3 className="text-xl font-serif font-bold text-black mb-3">Impact</h3>
                    ...
                    <h3 className="text-xl font-serif font-bold text-black mb-3">Promise</h3>
                    ...
                    <h2 className="text-3xl font-serif font-bold text-black mb-8">Ready to Thrive?</h2>
                    <p className="text-xl text-black/60 leading-relaxed">
                        At Social Samsara, we believe growth is never a straight line. Like the cycles of Saṃsāra, true growth means adapting, evolving, and transforming — again and again.
                    </p>
                </motion.div>
            </section>

            <section className="py-16 relative z-10">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-black mb-4">Our Origin</h2>
                        <p className="text-black/70 leading-relaxed mb-6">
                            Born from the legacy of <strong className="text-brand-red">Exetera</strong>, a multidisciplinary creative powerhouse with nearly a decade of proven results, Social Samsara is the next step in brand evolution.
                        </p>
                        <p className="text-black/70 leading-relaxed">
                            Where Exetera pioneered purpose-driven storytelling and design, Social Samsara goes even further — blending AI, data, and human creativity to drive 360° digital transformation.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-black/10 shadow-sm flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-black mb-2">Our Mission</h3>
                        <p className="text-black/60 text-lg">
                            Empower ambitious brands to build relevance and resilience in a rapidly shifting digital world.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-black mb-16">Our Philosophy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 border-l-2 border-brand-red text-left bg-white rounded-r-xl shadow-sm border border-black/5">
                            <h3 className="text-xl font-bold text-black mb-3">Approach</h3>
                            <p className="text-black/60">Analyse. Adapt. Transform. Thrive. Every strategy begins with data, but connects with humans first.</p>
                        </div>
                        <div className="p-6 border-l-2 border-brand-red text-left bg-white rounded-r-xl shadow-sm border border-black/5">
                            <h3 className="text-xl font-bold text-black mb-3">Impact</h3>
                            <p className="text-black/60">One Partner, Infinite Impact. We don't just plug gaps; we run the full stack so you can focus on your business.</p>
                        </div>
                        <div className="p-6 border-l-2 border-brand-red text-left bg-white rounded-r-xl shadow-sm border border-black/5">
                            <h3 className="text-xl font-bold text-black mb-3">Promise</h3>
                            <p className="text-black/60">No jargon. No bloated retainers. No passing trends. Just results.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 text-center relative z-10">
                <h2 className="text-3xl font-bold text-black mb-8">Ready to Thrive?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <motion.button
                        onClick={() => navigate('/calculator')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            boxShadow: [
                                "0 0 0 0 rgba(0, 0, 0, 0)",
                                "0 0 0 10px rgba(0, 0, 0, 0.05)",
                                "0 0 0 20px rgba(0, 0, 0, 0)"
                            ]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-black text-white hover:text-brand-red font-bold rounded-full hover:shadow-xl transition-all"
                    >
                        Cost Calculator <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        {/* Ripple Effect Ring */}
                        <div className="absolute inset-0 rounded-full border border-black opacity-0 group-hover:animate-ping pointer-events-none" />
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default About;
