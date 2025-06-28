import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Aurora from './Aurora';
import DotGrid from './DotGrid';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLightbulb } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';

const Hero = ({ theme }) => {
    const [copied, setCopied] = useState(false);
    const emailAddress = 'faiyaztanvee9@gmail.com';
    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/better-call-vee' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/tanvee009/' },
        { icon: <SiCodeforces />, url: 'https://codeforces.com/profile/tanvee' },
        { icon: <SiLeetcode />, url: 'https://leetcode.com/u/tanvee009/' },
    ];

    const handleEmailClick = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const darkModeAuroraColors = ["#3A29FF", "#FF94B4", "#FF3232"];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-background)]">

            <div className="absolute top-0 left-0 w-full h-full z-0">
                {theme === 'light' ? (
                    <DotGrid dotSize={2} gap={25} baseColor="#e0e0e0" activeColor="#422ad5" proximity={100} shockRadius={200} />
                ) : (
                    <Aurora colorStops={darkModeAuroraColors} blend={0.5} amplitude={1.0} speed={0.5} verticalOffset={0.2} />
                )}
            </div>

            <div className="w-full max-w-[85%] mx-auto px-4 grid md:grid-cols-[3fr_2fr] items-center gap-16 z-10 pt-28 md:pt-0">

                <motion.div
                    className="text-center md:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="text-lg md:text-xl mb-2" style={{ color: 'var(--color-text)' }}>
                        Hello, I'm
                    </motion.p>
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold"
                        style={{
                            color: theme === 'light' ? '#422ad5' : '#f0bdff',
                            ...(theme === 'light' && { WebkitTextStroke: '1.5px #ffffff' })
                        }}
                    >
                        Faiyaz Tanvee
                    </motion.h1>

                    <motion.div variants={itemVariants} className="mt-6 flex items-center justify-center md:justify-start gap-4">
                        <div className="flex items-center gap-2 rounded-full px-4 py-2 font-medium text-sm" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-text)' }}>
                            <FaCode className="text-white" />
                            <span className='text-white'>Developer</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full px-4 py-2 font-medium text-sm" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-text)' }}>
                            <FaLightbulb className="text-white" />
                            <span className='text-white'>Learner</span>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start space-x-6 mt-8">
                        <div className="relative flex items-center">
                            <button
                                onClick={handleEmailClick}
                                aria-label="Copy email to clipboard"
                                className="text-3xl transition-transform duration-300 hover:scale-125"
                                style={{ color: 'var(--color-text)' }}
                            >
                                <FaEnvelope />
                            </button>
                            {copied && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm rounded-md"
                                    style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-background)' }}
                                >
                                    Copied!
                                </motion.div>
                            )}
                        </div>

                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl transition-transform duration-300 hover:scale-125"
                                style={{ color: 'var(--color-text)' }}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-8">
                        <Link to="projects" smooth={true} duration={500} offset={-70} className="inline-block px-8 py-3 rounded-lg text-lg font-medium shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer" style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff' }}>
                            View My Work
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div className="flex justify-center md:justify-end" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <motion.img src="/pic.jpg" alt="Faiyaz Tanvee" className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4" style={{ borderColor: 'var(--color-primary)' }} animate={{ translateY: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;