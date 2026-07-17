import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      } 
    }
  };

  return (
    <section 
      id="about" 
      className="py-6 position-relative overflow-hidden" 
      style={{ backgroundColor: '#0A0A0A', padding: '100px 0' }}
    >
      {/* Glow Backdrop */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 59, 59, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Section Heading */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="text-uppercase tracking-widest font-weight-bold mb-2" style={{ color: '#FF3B3B', fontSize: '0.9rem', letterSpacing: '3px' }}>
                About Me
              </h5>
              <h2 className="text-white font-weight-bold display-4 mb-3" style={{ fontSize: 'calc(1.8rem + 1.2vw)' }}>
                Professional Profile
              </h2>
              <div 
                className="mx-auto" 
                style={{ width: '60px', height: '3px', backgroundColor: '#FF3B3B', borderRadius: '2px' }}
              />
            </motion.div>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Left Text Detail */}
          <div className="col-lg-6 mb-5 mb-lg-0 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-white font-weight-bold mb-4" style={{ fontSize: '1.75rem' }}>
                Developing High-End Solutions With Modern Technologies
              </h3>
              
              <p className="text-muted-custom mb-4" style={{ color: '#A0A0A0', fontSize: '1.05rem', lineHeight: '1.8' }}>
                {personalInfo.about}
              </p>
              
              <p className="text-muted-custom mb-5" style={{ color: '#A0A0A0', fontSize: '1.05rem', lineHeight: '1.8' }}>
                With a deep focus on design aesthetics and robust layouts, I bridge the gap between creative wireframes and optimized production code. I write modular codebases, integrate modern headless configurations, and build performant websites that are fast, accessible, and responsive.
              </p>

              <div className="d-flex flex-wrap gap-4 align-items-center">
                <div>
                  <h4 className="text-white font-weight-bold mb-0" style={{ fontSize: '2.5rem' }}>1+</h4>
                  <span className="text-uppercase font-weight-bold text-muted-custom" style={{ fontSize: '0.8rem', letterSpacing: '1px', color: '#A0A0A0' }}>
                    Years of Coding
                  </span>
                </div>
                <div style={{ height: '40px', width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
                <div>
                  <h4 className="text-white font-weight-bold mb-0" style={{ fontSize: '2.5rem' }}>3+</h4>
                  <span className="text-uppercase font-weight-bold text-muted-custom" style={{ fontSize: '0.8rem', letterSpacing: '1px', color: '#A0A0A0' }}>
                    Successful Projects
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Statistics Cards Grid */}
          <div className="col-lg-6">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="row g-4"
            >
              {personalInfo.stats.map((stat, index) => (
                <div className="col-sm-6" key={index}>
                  <motion.div
                    variants={cardVariants}
                    className="interactive-card h-100"
                    style={{
                      background: 'rgba(25, 25, 25, 0.45)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 59, 59, 0.1)',
                      borderRadius: '16px',
                      padding: '35px 25px',
                      textAlign: 'center',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                      transition: 'border-color 0.3s ease, transform 0.3s ease',
                      position: 'relative'
                    }}
                    whileHover={{ 
                      y: -8, 
                      borderColor: 'rgba(255, 59, 59, 0.4)',
                      boxShadow: '0 15px 35px rgba(255, 59, 59, 0.08)'
                    }}
                  >
                    {/* Glowing highlight indicator */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '40px',
                        height: '3px',
                        backgroundColor: '#FF3B3B',
                        borderRadius: '0 0 2px 2px'
                      }}
                    />
                    <h3 
                      className="font-weight-bold mb-2 text-glow-red" 
                      style={{ fontSize: '2.8rem', color: '#FF3B3B', fontFamily: 'Inter, sans-serif' }}
                    >
                      {stat.value}
                    </h3>
                    <p 
                      className="text-white-50 text-uppercase font-weight-bold mb-0" 
                      style={{ fontSize: '0.85rem', letterSpacing: '1.5px' }}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
