import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from './RotatingText';
import DotGrid from './DotGrid';

// This wrapper now uses your --bbgc variable for the background.
// SpotlightCard is no longer used here to simplify the design as requested.
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

const getAcademicStatus = () => {
    const startYearOfUni = 2024;
    const currentYear = new Date().getFullYear();
    const yearInUni = currentYear - startYearOfUni + 1;
    switch (yearInUni) {
        case 1: return "1st year";
        case 2: return "2nd year";
        case 3: return "3rd year";
        case 4: return "Final year";
        default:
            if (yearInUni > 4) return "Graduated";
            return "Future Student";
    }
};

const About = ({ theme }) => {
    const academicStatus = getAcademicStatus();
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

                    <AboutCardWrapper theme={theme}>
                        <p className="text-lg leading-relaxed h-full" style={{ color: 'var(--color-text)' }}>
                            As a dedicated <span className="font-semibold" style={{ color: highlightColor }}>{academicStatus}</span> Computer Science student, I am channeling my passion for problem-solving into the fields of <strong style={{ color: highlightColor }}>Artificial Intelligence</strong>, <strong style={{ color: highlightColor }}>Machine Learning</strong>, and <strong style={{ color: highlightColor }}>Data Science</strong>. I am actively seeking a <strong style={{ color: highlightColor }}>remote internship</strong> or <strong style={{ color: highlightColor }}>job</strong> where I can contribute to real-world <strong style={{ color: highlightColor }}>MERN</strong> projects. Concurrently, I am pursuing <strong style={{ color: highlightColor }}>research opportunities</strong> to help push the boundaries of these exciting technologies.
                        </p>
                    </AboutCardWrapper>
                </div>
            </motion.div>
        </section>
    );
};

export default About;