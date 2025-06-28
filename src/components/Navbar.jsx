import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaUser, FaGraduationCap, FaBriefcase, FaCode, FaProjectDiagram, FaStickyNote, FaEnvelope, FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const RESUME_PATH = '/faiyaz-tanvee-resume.pdf';

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleThemeSwitch = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'about', text: 'About', icon: <FaUser /> },
    { to: 'education', text: 'Education', icon: <FaGraduationCap /> },
    { to: 'experience', text: 'Experience', icon: <FaBriefcase /> },
    { to: 'skills', text: 'Skills', icon: <FaCode /> },
    { to: 'projects', text: 'Projects', icon: <FaProjectDiagram /> },
    { to: 'notes', text: 'Notes', icon: <FaStickyNote /> },
    { to: 'contact', text: 'Contact', icon: <FaEnvelope /> },
  ];

  const NavLink = ({ to, text, icon, onClick }) => (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      className="flex items-center space-x-2 px-3 py-2 rounded-md font-medium cursor-pointer transition-colors duration-300 hover:bg-[var(--color-nav-hover-bg)] hover:text-[var(--color-nav-hover-text)]"
      activeClass="active-link"
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-opacity-90 backdrop-blur-sm shadow-lg' : ''}`}
      style={{ backgroundColor: isScrolled || isMenuOpen ? 'var(--color-nav-scrolled-bg)' : 'transparent' }}
    >
      <div className="w-full max-w-[85%] mx-auto flex items-center justify-between h-20 px-4">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
          <img
            src={theme === 'light' ? '/lightlogo.png' : '/darklogo.png'}
            alt="Logo"
            className="h-10"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleThemeSwitch}
            aria-label="Toggle theme"
            className={`p-2 rounded-full transition-colors cursor-pointer duration-300 ${theme === 'light' ? 'hover:bg-amber-100' : 'hover:bg-slate-700'}`}
          >
            {theme === 'light' ? <BsMoonStarsFill className="text-xl text-slate-800" /> : <BsSunFill className="text-xl text-yellow-400" />}
          </button>
          <a
            href={RESUME_PATH}
            download
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-transform duration-300 hover:scale-105 shadow-md"
            style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff' }}
          >
            <FaFileDownload />
            <span>Resume</span>
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={handleThemeSwitch} aria-label="Toggle theme" className="p-2 mr-2 rounded-full">
            {theme === 'light' ? <BsMoonStarsFill className="text-xl text-slate-800" /> : <BsSunFill className="text-xl text-yellow-400" />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu" className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink key={link.to} {...link} onClick={() => setIsMenuOpen(false)} />
          ))}
          <a
            href={RESUME_PATH}
            download
            className="flex items-center justify-center space-x-2 w-full mt-4 px-4 py-3 rounded-lg text-sm font-medium shadow-md"
            style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff' }}
          >
            <FaFileDownload />
            <span>Download Resume</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;