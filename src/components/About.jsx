import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from './RotatingText';
import DotGrid from './DotGrid';

const AboutCardWrapper = ({ children, theme }) => {
    return (
        <div
            className={`h-full rounded-3xl p-8 shadow-lg ${theme === 'light' ? 'border border-slate-200' : 'border border-slate-800'
                }`}
            style={{ backgroundColor: 'var(--bbgc)' }}
        >
            {children}
        </div>
    );
};

const About = ({ theme }) => {
    const myPassions = ["Fitness", "Music", "Singing", "Football"];
    const highlightColor = theme === 'dark' ? '#f0bdff' : 'var(--color-primary)';

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="about" className="relative overflow-hidden py-24 md:py-32">
            {theme === 'light' && (
                <div className="absolute inset-0 z-0">
                    <DotGrid dotSize={2} gap={25} baseColor="#e0e0e0" activeColor="#422ad5" proximity={100} shockRadius={200} />
                </div>
            )}

            <motion.div
                className="relative z-10 w-full max-w-6xl mx-auto px-4"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: theme === 'dark' ? '#ffffff' : 'var(--color-primary)' }}>
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Personality / Hobbies Card */}
                    <AboutCardWrapper theme={theme}>
                        <div className="text-lg leading-relaxed h-full" style={{ color: 'var(--color-text)' }}>
                            I'm a peace-loving and optimistic person, driven by loyalty and a strong work ethic, especially when deadlines are near. Outside of coding, I'm passionate about activities like{' '}
                            <RotatingText
                                texts={myPassions}
                                mainClassName={`px-4 py-1 w-[7rem] justify-center inline-flex rounded-md font-semibold ${theme === 'light'
                                    ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)]'
                                    : 'bg-[#f0bdff] text-black'
                                    }`}
                                staggerDuration={0.03}
                                elementLevelClassName="inline-block"
                            />
                            . I started programming with C, C++ back in 2023 and everyday I am trying to learn new skills.
                        </div>
                    </AboutCardWrapper>

                    {/* Professional Focus Card - UPDATED */}
                    <AboutCardWrapper theme={theme}>
                        <p className="text-lg leading-relaxed h-full" style={{ color: 'var(--color-text)' }}>
                            As a dedicated <span className="font-semibold" style={{ color: highlightColor }}>Computer Science enthusiast</span>, I am currently pivoting my focus toward <strong style={{ color: highlightColor }}>System Administration</strong> and understanding <strong style={{ color: highlightColor }}>Artificial Intelligence</strong> from the ground up. I am actively seeking <strong style={{ color: highlightColor }}>hands-on opportunities</strong>—whether internships or junior roles—where I can apply my skills in real-world environments. My goal is to solve practical infrastructure and automation challenges rather than pursuing purely theoretical research.
                        </p>
                    </AboutCardWrapper>
                </div>
            </motion.div>
        </section>
    );
};

export default About;