import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Enso from '../components/icons/Enso';
import ZenGardenBackground from '../components/ZenGardenBackground';

const Home = () => {
    const navigate = useNavigate();

    const brandLogos = [
        '00', '02', '03', '05', '07', '08', '09',
        '10', '12', '13', '15', '16', '17'
    ].map(i => `https://www.exetera.in/assets/brands/logos-${i}.png`);

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">
                {/* Replaced generic particles with Zen Sand Swarm */}
                <ZenGardenBackground />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-black tracking-tight mb-6">
                            Skyrocket Your Sales. <span className="text-brand-red">Seriously.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/60 mb-10 max-w-2xl leading-relaxed">
                            Is your marketing delivering real revenue, or just... noise?
                        </p>
                        <motion.button
                            onClick={() => navigate('/calculator')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-white hover:text-brand-red px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:bg-black/90 transition-colors shadow-lg hover:shadow-xl"
                        >
                            Start Growing Now <ArrowRight size={20} />
                        </motion.button>
                    </motion.div>

                    {/* Right text area is now empty to let stones be visible, but we keep the grid for spacing */}
                    <div className="hidden md:block"></div>
                </div>
            </div>

            {/* Problem/Solution Section */}
            <section className="py-24 bg-white z-10 relative border-t border-black/5">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 opacity-5 pointer-events-none">
                        <img src="/enso-placeholder.png" alt="" className="hidden" /> {/* Fallback if needed, but using component below */}
                        <Enso className="w-[500px] h-[500px] text-brand-red rotate-12" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-6">Stop Guessing. <br /><span className="text-brand-red underline decoration-2 underline-offset-4">Start Growing.</span></h2>
                        <p className="text-black/70 text-lg leading-relaxed mb-6">
                            Most businesses pour money into digital marketing and see very little in return. Fragmented strategies, generic content, and a constant scramble to keep up.
                        </p>
                        <p className="text-black/70 text-lg leading-relaxed">
                            You're losing sales, missing opportunities, and wondering if there's a better way to grow. <strong className="text-brand-red">There is.</strong>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[2rem] border border-black/10"
                    >
                        <h3 className="text-2xl font-semibold text-black mb-4">Social Samsara is your Partner.</h3>
                        <p className="text-black/70 mb-6">
                            We deliver 360° digital transformation designed to explode your sales and build unshakable brand authority.
                        </p>
                        <p className="text-black/70">
                            We're not just another agency. We're your dedicated growth engine, fusing cutting-edge AI with proven data strategies and compelling storytelling.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Logos Section - Carousel */}
            <section className="py-20 border-t border-black/5 z-10 relative overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center mb-10">
                    <p className="text-sm font-medium text-black/40 uppercase tracking-widest">Trusted by the Brands You Know</p>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max">
                        <motion.div
                            className="flex gap-16 px-8"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {/* Duplicate list for seamless loop */}
                            {[...brandLogos, ...brandLogos].map((src, i) => (
                                <div key={i} className="flex-shrink-0 grayscale transition-all duration-500 hover:filter-none opacity-60 hover:opacity-100">
                                    <img
                                        src={src}
                                        alt="brand logo"
                                        className="h-12 md:h-16 w-auto object-contain pointer-events-none filter invert"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services/Features Grid */}
            <section className="py-24 z-10 relative bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-4">How We Drive Your Revenue</h2>
                        <p className="text-black/60 max-w-2xl mx-auto">We guide your brand through its own cycle of growth: Analyse → Adapt → Transform → Thrive.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "AI-Powered Sales Funnels", desc: "From LLM optimization to privacy-compliant ad targeting, we build pathways that lead directly to sales." },
                            { title: "Predictive Revenue Growth", desc: "We analyze data to identify your most profitable customers and optimize every touchpoint." },
                            { title: "Brand Authority & Trust", desc: "Through reputation and sentiment analysis and expert influencer matchmaking, we build a brand that buyers trust." },
                            { title: "Seamless Marketing Power", desc: "Our retainer-based model gives you an entire marketing team focused on increasing your bottom line." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-[2rem] border border-black/10 hover:border-black transition-colors h-full flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold text-black mb-6">{feature.title}</h3>
                                    <p className="text-black/60 text-base leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white z-10 relative border-t border-black/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-8">Ready to Talk Revenue?</h2>
                    <p className="text-xl text-black/60 mb-10">
                        Stop leaving money on the table. It's time to transform your digital presence into a powerful sales machine.
                    </p>
                    <div className="bg-white p-10 rounded-[2rem] border border-black/10 inline-block w-full max-w-2xl shadow-sm">
                        <h3 className="text-2xl font-bold text-black mb-4">Discover Your Sales Potential</h3>
                        <p className="text-black/60 mb-8">
                            Ready to see how a strategic partnership can directly boost your sales and revenue? Click below to use our instant retainer fee calculator.
                        </p>
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
                            className="w-full md:w-auto px-10 py-4 bg-black text-white text-lg font-bold rounded-full hover:bg-[#FF3B30] hover:shadow-xl transition-all group relative"
                        >
                            Cost Calculator
                            {/* Ripple Effect Ring */}
                            <div className="absolute inset-0 rounded-full border border-black opacity-0 group-hover:animate-ping pointer-events-none" />
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
