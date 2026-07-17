import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import useActiveSection from '../hooks/useActiveSection';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav 
        className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
          isScrolled 
            ? 'navbar-glass py-2' 
            : 'bg-transparent py-4'
        }`}
        style={{
          borderBottom: isScrolled ? '1px solid rgba(255, 59, 59, 0.1)' : '1px solid transparent',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container">
          <a 
            className="navbar-brand text-white font-weight-bold d-flex align-items-center" 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '1px' }}
          >
            AMIT<span style={{ color: '#FF3B3B' }}>.</span>KUMAR
          </a>

          {/* Toggle Button for Mobile */}
          <button 
            className="navbar-toggler text-white border-0 p-0 cursor-pointer" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            style={{ outline: 'none' }}
          >
            {isOpen ? <FaTimes size={24} style={{ color: '#FF3B3B' }} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav align-items-center gap-3">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a
                    className={`nav-link text-uppercase font-weight-bold px-3 py-2 cursor-pointer transition-all ${
                      activeSection === link.id 
                        ? 'text-white' 
                        : 'text-muted-custom'
                    }`}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    style={{ 
                      fontSize: '0.85rem', 
                      letterSpacing: '1px',
                      position: 'relative',
                      color: activeSection === link.id ? '#FFFFFF' : '#A0A0A0',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.div 
                        className="active-bar"
                        layoutId="activeSectionIndicator"
                        style={{
                          position: 'absolute',
                          bottom: '-5px',
                          left: '12px',
                          right: '12px',
                          height: '2px',
                          backgroundColor: '#FF3B3B',
                        }}
                      />
                    )}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-2">
                <a 
                  href="/Amit kumar-(web developer).pdf" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="btn btn-red-outline btn-sm font-weight-bold"
                  style={{
                    borderRadius: '30px',
                    padding: '8px 20px',
                    fontSize: '0.85rem',
                    letterSpacing: '1px'
                  }}
                  download
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu-drawer d-lg-none"
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(10, 10, 10, 0.95)',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid rgba(255, 59, 59, 0.2)',
              zIndex: 999,
              padding: '20px'
            }}
          >
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0 text-center">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className={`d-block py-2 text-uppercase font-weight-bold cursor-pointer ${
                      activeSection === link.id ? 'text-red' : 'text-white'
                    }`}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    style={{
                      fontSize: '1rem',
                      letterSpacing: '1px',
                      color: activeSection === link.id ? '#FF3B3B' : '#FFFFFF',
                      textDecoration: 'none'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="btn btn-red btn-block font-weight-bold"
                  style={{
                    borderRadius: '30px',
                    padding: '10px 24px',
                    fontSize: '0.9rem'
                  }}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
