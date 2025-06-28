import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCplusplus, SiC, SiPython } from 'react-icons/si';

const Skills = ({ theme }) => {
    const skillsData = [
        {
            title: 'C & C++',
            logos: [<SiCplusplus size={32} className="text-blue-500" />, <SiC size={32} className="text-blue-600" />],
            description: "Mastered Data Structures and Algorithms by solving over 600 problems on various platforms, achieving the Pupil rank on Codeforces."
        },
        {
            title: 'MERN Stack',
            logos: [
                <SiMongodb size={32} className="text-green-600" />,
                <SiExpress size={32} className="text-neutral-500" style={{ color: theme === 'dark' ? '#d4d4d4' : '#525252' }} />,
                <FaReact size={32} className="text-cyan-400" />,
                <FaNodeJs size={32} className="text-green-500" />
            ],
            description: "Proficient in building foundational full-stack applications, handling both client-side and server-side development from concept to deployment."
        },
        {
            title: 'Python & Data Science',
            logos: [<SiPython size={32} className="text-yellow-400" />],
            description: "Currently expanding my skills into Data Science and Machine Learning, using Python and its libraries to explore data and build intelligent models."
        },
        {
            title: 'Version Control',
            logos: [
                <FaGitAlt size={32} className="text-orange-600" />,
                // --- THIS ICON IS NOW UPDATED ---
                <FaGithub size={32} style={{ color: 'var(--bbgc)' }} />
            ],
            description: "Experienced with Git and GitHub for version control, managing codebases, and collaborating effectively on projects."
        }
    ];

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="skills" className="py-24 md:py-32">
            <motion.div
                className="w-full max-w-[85%] mx-auto px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ color: theme === 'dark' ? '#ffffff' : 'var(--color-primary)' }}>
                    Skills & Expertise
                </h2>

                <div className="space-y-16">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="grid md:grid-cols-[1fr_3fr] gap-8 items-start"
                            variants={itemVariants}
                        >
                            <div className="text-center md:text-left">
                                <div className={`flex items-center justify-center md:justify-start gap-4 text-4xl mb-3`}>
                                    {skill.logos}
                                </div>
                                <h3 className="text-2xl font-bold text-prm">
                                    {skill.title}
                                </h3>
                            </div>

                            <div>
                                <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                                    {skill.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;