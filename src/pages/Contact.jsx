import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import ZenGardenBackground from '../components/ZenGardenBackground';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://samsara.exetera.in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen pt-20 px-6 relative overflow-hidden">
            <ZenGardenBackground />
            <div className="max-w-6xl mx-auto py-12 grid md:grid-cols-2 gap-12 relative z-10">
                {/* Contact Info */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl font-bold text-black mb-6">Get in Touch</h1>
                        <p className="text-black/60 mb-10 text-lg">
                            Have questions about our services or ready to start your transformation? We're here to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm border border-black/5">
                                    <Mail className="text-brand-red w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-black font-semibold text-lg">Email Us</h3>
                                    <p className="text-black/60">hello@socialsamsara.com</p>
                                </div>
                            </div>
                            {/* Add more info if needed, keeping it generic as per request */}
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-8 rounded-2xl border border-black/10 shadow-sm"
                >
                    <h2 className="text-2xl font-bold text-black mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-black/70 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-brand-red transition-colors shadow-sm"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black/70 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-brand-red transition-colors shadow-sm"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black/70 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-brand-red transition-colors shadow-sm"
                                placeholder="How can we help you?"
                                required
                            />
                        </div>
                        <motion.button
                            type="submit"
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
                            className="group relative w-full bg-black text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:text-brand-red"
                        >
                            Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            {/* Ripple Effect Ring (Rounded lg for form button) */}
                            <div className="absolute inset-0 rounded-lg border border-black opacity-0 group-hover:animate-ping pointer-events-none" />
                        </motion.button>
                        <div className="mt-4 text-center">
                            {status === 'submitting' && <p className="text-black/60">Sending...</p>}
                            {status === 'success' && <p className="text-green-600">Message sent successfully! We'll be in touch.</p>}
                            {status === 'error' && <p className="text-red-600">Something went wrong. Please try again later.</p>}
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
