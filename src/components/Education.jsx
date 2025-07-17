import React from 'react';
import { motion } from 'framer-motion';
import DotGrid from './DotGrid';

// We can use the same academic status logic here
const getAcademicStatus = () => {
    const startYearOfUni = 2024;
    const currentYear = new Date().getFullYear();
    const yearInUni = currentYear - startYearOfUni + 1;
    switch (yearInUni) {
        case 1: return "1st Year Running";
        case 2: return "2nd Year Running";
        case 3: return "3rd Year Running";
        case 4: return "Final Year Running";
        default:
            if (yearInUni > 4) return "Graduated";
            return "Future Student";
    }
};

const Education = ({ theme }) => {

    const educationData = [
        {
            degree: 'B.Sc in Computer Science & Engineering',
            institution: 'Bangladesh University of Business & Technology',
            details: 'CGPA: 3.99 out of 4.00',
            status: getAcademicStatus(), // Dynamic status
            icon: '🎓'
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Cantonment College, Jashore',
            details: 'GPA: 5.00 out of 5.00',
            status: 'Completed',
            icon: '🏫'
        },
        {
            degree: 'Secondary School Certificate (SSC)',
            institution: 'Khulna Zilla School',
            details: 'GPA: 5.00 out of 5.00',
            status: 'Completed',
            icon: '🏫'
        }
    ];

    const timelineVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="education" className="relative overflow-hidden py-24 md:py-32">

            {/* Conditional DotGrid Background for Light Theme */}
            {theme === 'light' && (
                <div className="absolute inset-0 z-0">
                    <DotGrid dotSize={2} gap={25} baseColor="#e0e0e0" activeColor="#422ad5" proximity={100} shockRadius={200} />
                </div>
            )}

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ color: theme === 'dark' ? '#ffffff' : 'var(--color-primary)' }}>
                    My Education
                </h2>

                {/* The Timeline Container */}
                <motion.div
                    className="relative pl-8"
                    variants={timelineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-slate-300 dark:bg-slate-700"></div>

                    {educationData.map((item, index) => (
                        <motion.div key={index} className="relative mb-12" variants={itemVariants}>
                            <div className="absolute -left-[38px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: '#f0bdff', color: 'var(--color-primary-text)' }}>
                                {item.icon}
                            </div>

                            <div className={`p-6 rounded-xl border border-transparent backdrop-blur-sm shadow-md ${theme === 'light'
                                ? 'bg-white'
                                : 'bg-slate-800'
                                }`}>
                                <h3 className="text-xl font-bold" style={{ color: theme === 'dark' ? '#f0bdff' : 'var(--color-primary)' }}>{item.degree}</h3>
                                <p className="text-lg font-medium mt-1" style={{ color: 'var(--color-text)' }}>{item.institution}</p>
                                <p className="mt-2 text-md opacity-90" style={{ color: 'var(--color-text)' }}>{item.details}</p>
                                <p className="mt-1 text-sm font-semibold opacity-70" style={{ color: 'var(--color-text)' }}>{item.status}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;