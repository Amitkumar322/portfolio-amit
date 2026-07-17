import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className="py-5" 
      style={{ 
        backgroundColor: '#070707', 
        borderTop: '1px solid rgba(255, 59, 59, 0.08)' 
      }}
    >
      <div className="container text-center">
        <div className="row justify-content-center align-items-center g-4">
          {/* Logo / Brand signature */}
          <div className="col-12">
            <a 
              className="text-white font-weight-bold text-decoration-none" 
              href="#hero"
              onClick={scrollToTop}
              style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '1px' }}
            >
              AMIT<span style={{ color: '#FF3B3B' }}>.</span>KUMAR
            </a>
            <p className="text-white-50 mt-2 mb-0" style={{ fontSize: '0.85rem' }}>
              Frontend & WordPress Developer
            </p>
          </div>

          {/* Social icons */}
          <div className="col-12 d-flex justify-content-center gap-3">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white-50 hover-red"
              style={{ transition: 'color 0.3s ease' }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white-50 hover-red"
              style={{ transition: 'color 0.3s ease' }}
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-white-50 hover-red"
              style={{ transition: 'color 0.3s ease' }}
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Copyright details */}
          <div className="col-12 mt-4">
            <div 
              style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', margin: '0 auto 20px auto' }}
            />
            <p className="text-muted mb-0" style={{ fontSize: '0.8rem', color: '#A0A0A0' }}>
              &copy; {new Date().getFullYear()} Amit Kumar. All Rights Reserved.
            </p>
            <p className="text-muted mt-1 mb-0" style={{ fontSize: '0.75rem', opacity: 0.5 }}>
              Handcrafted in India with React & Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
