import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCplusplus, SiPython } from 'react-icons/si';

const Notes = ({ theme }) => {
    const notesData = [
        {
            title: 'Web Development Notes',
            repoName: 'VEEBDEV',
            description: 'A comprehensive collection of notes covering the MERN stack, HTML, CSS, and core web concepts.',
            logos: [
                <SiMongodb key="mongo" />, <SiExpress key="express" />, <FaReact key="react" />,
                <FaNodeJs key="node" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />
            ],
            link: 'https://github.com/better-call-vee/VEEBDEV'
        },
        {
            title: 'C++ & DSA Notes',
            repoName: 'Cpp-programming',
            description: 'In-depth notes on C++ programming fundamentals and essential Data Structures & Algorithms.',
            logos: [<SiCplusplus key="cpp" />],
            link: 'https://github.com/better-call-vee/Cpp-programming'
        },
        {
            title: 'Python Programming Notes',
            repoName: 'Python_programming',
            description: 'My personal notes and code snippets for Python, focusing on fundamentals and its applications in Data Science.',
            logos: [<SiPython key="python" />],
            link: 'https://github.com/better-call-vee/Python_programming'
        }
    ];

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="notes" className="py-24 md:py-32">
            <motion.div
                className="w-full max-w-6xl mx-auto px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ color: theme === 'dark' ? '#ffffff' : 'var(--color-primary)' }}>
                    Knowledge & Notes
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {notesData.map((note, index) => (
                        <motion.a
                            key={index}
                            href={note.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                            variants={cardVariants}
                        >
                            <div
                                className={`h-full p-6 rounded-2xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${theme === 'light' ? 'bg-white' : 'bg-slate-800/80'
                                    }`}
                            >
                                <div className="flex items-center gap-3 text-2xl mb-4 text-prm">
                                    {note.logos}
                                </div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                                    {note.repoName}
                                </h3>
                                <p className="text-md flex-grow" style={{ color: 'var(--color-text)', opacity: 0.8 }}>
                                    {note.description}
                                </p>
                                <div className="flex items-center gap-2 mt-4 text-prm font-semibold">
                                    <span>View on GitHub</span>
                                    <FaGithub />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Notes;