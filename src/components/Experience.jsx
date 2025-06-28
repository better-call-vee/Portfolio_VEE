import React from 'react';
import { motion } from 'framer-motion';
import DotGrid from './DotGrid';
import { FaChalkboardTeacher, FaRegCheckCircle, FaComments, FaCertificate } from 'react-icons/fa';

const Experience = ({ theme }) => {
    const cardHighlightColor = theme === 'dark' ? '#f0bdff' : '#422ad5';

    const experienceData = {
        role: 'Teaching Assistant (IELTS Trainer)',
        company: 'Lexicon',
        duration: 'Aug 2022 - Dec 2022',
        ieltsScore: '7.0',
        responsibilities: [
            {
                icon: <FaChalkboardTeacher />,
                text: 'Conducted interactive IELTS training sessions for diverse groups of students.',
            },
            {
                icon: <FaRegCheckCircle />,
                text: 'Evaluated writing assignments, providing detailed and constructive feedback to improve student performance.',
            },
            {
                icon: <FaComments />,
                text: 'Mentored and guided students to help them achieve target scores, honing strong communication and leadership skills.',
            },
        ],
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const CardContent = () => (
        <>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                        {experienceData.role}
                    </h3>
                    <p className="text-lg font-medium mt-1" style={{ color: 'var(--color-text)' }}>
                        {experienceData.company}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-md opacity-80" style={{ color: 'var(--color-text)' }}>
                        <FaCertificate className='text-prm' />
                        <span>IELTS Score: <strong>{experienceData.ieltsScore}</strong></span>
                    </div>
                </div>
                <p className="text-sm font-medium text-right opacity-80" style={{ color: 'var(--color-text)' }}>
                    {experienceData.duration}
                </p>
            </div>

            <hr className={`my-6 ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'}`} />

            <ul className="space-y-4 text-lg">
                {experienceData.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <span className="text-xl mt-1 text-prm">
                            {item.icon}
                        </span>
                        <span style={{ color: 'var(--color-text)' }}>{item.text}</span>
                    </li>
                ))}
            </ul>
        </>
    );

    return (
        <section id="experience" className="relative overflow-hidden py-24 md:py-32">

            {theme === 'light' && (
                <div className="absolute inset-0 z-0">
                    <DotGrid dotSize={2} gap={25} baseColor="#e0e0e0" activeColor="#422ad5" proximity={100} shockRadius={200} />
                </div>
            )}

            <motion.div
                className="relative z-10 w-full max-w-4xl mx-auto px-4"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2
                    className="text-4xl md:text-5xl font-bold mb-12 text-center text-prm"
                >
                    Experience
                </h2>

                <div
                    className={`h-full rounded-3xl border p-8 shadow-xl backdrop-blur-sm ${theme === 'light' ? 'border-slate-200' : 'border-slate-800'
                        }`}
                    style={{ backgroundColor: 'var(--bbgc)' }}
                >
                    <CardContent />
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;