import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from './Carousel';
import ProjectModal from './ProjectModal';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const Projects = ({ theme }) => {
    const projectsData = [
        {
            id: 1,
            title: 'Giggy',
            shortDescription: 'A full-stack freelance platform built to master the MERN stack, featuring a RESTful API, Firebase authentication, and a dynamic user dashboard.',
            // --- UPDATED longDescription to be minimal ---
            longDescription: (
                <div className="space-y-4">
                    <p>A full-stack freelance marketplace connecting clients and freelancers with a feature-rich, interactive platform.</p>
                    <h4 className="text-xl font-semibold pt-2">Development Highlight:</h4>
                    <p>Solved a critical 500 API error on the Vercel deployment by implementing a custom <code className="text-sm bg-slate-200 dark:bg-slate-700 p-1 rounded">vercel.json</code> configuration and integrating the 'serverless-http' package. This restored stable communication between the serverless backend and the React frontend.</p>
                </div>
            ),
            images: ['/p1-1.png', '/p1-2.png', '/p1-3.png'],
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Vercel'],
            repoLink: 'https://github.com/better-call-vee/giggy',
            liveLink: 'https://giggy-9.web.app/',
        },
        {
            id: 2,
            title: 'Learnify',
            shortDescription: 'A full-stack application connecting language learners with tutors, featuring session booking and real-time reviews.',
            longDescription: (
                <div className="space-y-4">
                    <p>A full-stack platform connecting language learners with tutors, featuring secure JWT authentication and a real-time booking system.</p>
                    <h4 className="text-xl font-semibold pt-2">Development Highlight:</h4>
                    <p>
                        To optimize the homepage dashboard's performance, I engineered a single `/stats` endpoint to replace multiple, slow API calls. This endpoint runs concurrent database queries using <strong>`Promise.all`</strong> and leverages a powerful <strong>MongoDB Aggregation Pipeline</strong> with a <strong>`$facet`</strong> stage. This allows the server to calculate total users, tutors, reviews, and languages in a single, efficient database operation, dramatically reducing network traffic and improving load times.
                    </p>
                </div>
            ),
            images: ['/p2-1.png', '/p2-2.png', '/p2-3.png', '/p2-4.png', '/p2-5.png'],
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Firebase', 'Tailwind CSS', 'DaisyUI'],
            repoLink: 'https://github.com/better-call-vee/Learnify',
            liveLink: 'https://learnify009.web.app/',
        },

        {
            id: 3,
            title: 'Opportunest',
            shortDescription: 'A full-stack Scholarship Management System featuring a secure, multi-role architecture (Admin, Moderator, User), advanced data handling with Tanstack Query, and a dynamic, interactive UI.',
            longDescription: (
                <div className="space-y-4">
                    <p>A comprehensive MERN-stack platform designed to connect students with global scholarship opportunities. This project showcases a robust backend with complex database aggregations and a polished, professional frontend built for an exceptional user experience.</p>

                    <h4 className="text-xl font-semibold pt-2">Development Highlights:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Engineered a Secure Image Upload Proxy:</strong> Solved a critical CORS error by creating a backend route to securely handle file uploads to a third-party service (ImgBB), ensuring the client-side never exposes the API key.
                        </li>
                        <li>
                            <strong>Resolved a Server Race Condition:</strong> Debugged and fixed intermittent `500 Internal Server Errors` on the deployed Vercel server by restructuring the application's startup logic to guarantee the MongoDB connection is established *before* the server begins accepting API requests.
                        </li>
                    </ul>
                </div>
            ),
            images: ['/p3-1.png', '/p3-2.png', '/p3-3.png', '/p3-4.png'],
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tanstack Query', 'Firebase', 'Vercel', 'Framer Motion', 'GSAP', 'Matter.js', 'Recharts'],
            repoLink: 'https://github.com/better-call-vee/opportunest',
            liveLink: 'https://opportunest9.web.app/',
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <section id="projects" className="py-24 md:py-32">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ color: theme === 'dark' ? '#ffffff' : 'var(--color-primary)' }}>
                        My Projects
                    </h2>

                    <div className="space-y-20">
                        {projectsData.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                            >
                                <div className="h-80 rounded-2xl shadow-2xl bg-slate-200 dark:bg-slate-800">
                                    <Carousel items={project.images} autoplay={true} autoplayDelay={2500 + Math.random() * 1000} />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-prm">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 my-4">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className={`px-3 py-1 text-xs rounded-full font-semibold ${theme === 'light' ? 'bg-slate-200 text-slate-700' : 'bg-slate-800 text-slate-300'
                                                }`}>{tech}</span>
                                        ))}
                                    </div>
                                    <p className="text-lg leading-relaxed mb-6">{project.shortDescription}</p>
                                    <div className="flex items-center gap-4">
                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 py-2 rounded-lg ${project.repoLink === '#' ? 'opacity-50 cursor-not-allowed' : ''}`} style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-text)' }}>
                                            <FaGithub />
                                            <span>GitHub</span>
                                        </a>
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border-2" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                                            <FaExternalLinkAlt />
                                            <span>Live Site</span>
                                        </a>
                                        <button onClick={() => setSelectedProject(project)} className="flex items-center gap-2 px-4 py-2 rounded-lg border-2" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                                            <FaInfoCircle />
                                            <span>Details</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} theme={theme} />
        </>
    );
};

export default Projects;