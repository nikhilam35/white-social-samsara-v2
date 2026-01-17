import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Why Social Samsara', path: '/why' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Left Side: Logo + Links */}
                    <div className="flex items-center gap-10">
                        <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
                            <img src="/logo.png" alt="Social Samsara" className="h-12 w-auto object-contain" />
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-8">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                                                ? 'text-black font-bold'
                                                : 'text-black/60 hover:text-black'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: CTA Button (Desktop) */}
                    <div className="hidden md:block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/calculator')}
                            className="px-6 py-2 bg-black text-white text-sm font-bold rounded-full hover:bg-[#FF3B30] hover:shadow-xl transition-all flex items-center gap-2"
                        >
                            Cost Calculator <Rocket size={16} />
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-black/60 hover:text-black hover:bg-black/5 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-black/5"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                            ? 'text-black bg-black/5'
                                            : 'text-black/60 hover:text-black hover:bg-black/5'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <div className="pt-4 pb-2">
                                <button
                                    onClick={() => {
                                        navigate('/calculator');
                                        setIsOpen(false);
                                    }}
                                    className="w-full text-center px-6 py-3 bg-black text-white text-base font-bold rounded-full hover:bg-black/90 transition-colors"
                                >
                                    Calculate Cost
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
