import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose, theme }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className={`relative max-w-2xl w-full p-8 rounded-2xl shadow-xl ${theme === 'light' ? 'bg-white' : 'bg-slate-900'
                        }`}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                >
                    <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
                        <FaTimes />
                    </button>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                        {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map(tech => (
                            <span key={tech} className={`px-3 py-1 text-sm rounded-full ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-800'
                                }`}>{tech}</span>
                        ))}
                    </div>
                    <p className="text-lg leading-relaxed">{project.longDescription}</p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;