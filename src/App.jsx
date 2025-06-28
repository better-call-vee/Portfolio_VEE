import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Notes from './components/Notes';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const Section = ({ id, title }) => (
    <div id={id} className="min-h-screen pt-24">
      <h2 className="text-4xl font-bold text-center">{title}</h2>
    </div>
  );

  return (
    <div className="font-poppins" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero theme={theme} />

        <div className="container mx-auto px-4">

          {/* 2. Replace the placeholder with the new component */}
          <About theme={theme} />

          <Education theme={theme} />
          <Experience id="experience" title="Experience" />
          <Skills id="skills" title="Skills" theme={theme} />
          <Projects id="projects" title="Projects" theme={theme} />
          <Notes id="notes" title="Notes" theme={theme} />

          <div id="contact" className="min-h-screen pt-24 text-center">
            <h2 className="text-4xl font-bold">Contact Me</h2>
            <a
              href="https://wa.me/8801601623676"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-4 rounded-lg text-lg font-medium shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff' }}
            >
              Say Hello on WhatsApp
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;