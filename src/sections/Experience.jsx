import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const lineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: '100%', 
      transition: { 
        duration: 1.5, 
        ease: 'easeInOut' 
      } 
    }
  };

  return (
    <section 
      id="experience" 
      className="py-6 position-relative overflow-hidden" 
      style={{ backgroundColor: '#0A0A0A', padding: '100px 0' }}
    >
      {/* Background Radial Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '40%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 59, 59, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="text-uppercase tracking-widest font-weight-bold mb-2" style={{ color: '#FF3B3B', fontSize: '0.9rem', letterSpacing: '3px' }}>
                Timeline
              </h5>
              <h2 className="text-white font-weight-bold display-4 mb-3" style={{ fontSize: 'calc(1.8rem + 1.2vw)' }}>
                Work History
              </h2>
              <div 
                className="mx-auto" 
                style={{ width: '60px', height: '3px', backgroundColor: '#FF3B3B', borderRadius: '2px' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="position-relative mt-5" style={{ padding: '30px 0' }}>
          {/* Vertical Center Line */}
          <motion.div 
            className="d-none d-md-block position-absolute"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            style={{
              width: '2px',
              backgroundColor: 'rgba(255, 59, 59, 0.15)',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
              zIndex: 1
            }}
          />

          {/* Timeline Items */}
          <div className="row g-5">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="col-12 position-relative">
                  {/* Timeline Dot (Desktop only, positioned in middle) */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="d-none d-md-block position-absolute"
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: '#0A0A0A',
                      border: '3px solid #FF3B3B',
                      left: '50%',
                      top: '25px',
                      transform: 'translateX(-50%)',
                      boxShadow: '0 0 10px #FF3B3B',
                      zIndex: 3
                    }}
                  />

                  {/* Left Column Content / Alignment */}
                  <div className="row w-100 m-0">
                    {/* Item Container */}
                    <div 
                      className={`col-md-5 p-0 ${
                        isEven ? 'offset-md-7 text-start' : 'text-start text-md-end'
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="interactive-card"
                        style={{
                          background: 'rgba(25, 25, 25, 0.45)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255, 59, 59, 0.08)',
                          borderRadius: '16px',
                          padding: '24px',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                          position: 'relative'
                        }}
                      >
                        {/* Mobile Side Indicator Line */}
                        <div
                          className="d-md-none"
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '4px',
                            backgroundColor: '#FF3B3B',
                            borderRadius: '16px 0 0 16px'
                          }}
                        />

                        {/* Year Badge */}
                        <span 
                          className="badge mb-3 d-inline-block"
                          style={{
                            backgroundColor: 'rgba(255, 59, 59, 0.08)',
                            color: '#FF3B3B',
                            border: '1px solid rgba(255, 59, 59, 0.2)',
                            borderRadius: '30px',
                            padding: '6px 12px',
                            fontSize: '0.8rem',
                            fontWeight: '700'
                          }}
                        >
                          {item.year}
                        </span>

                        {/* Title & Organization */}
                        <h3 className="text-white font-weight-bold mb-1" style={{ fontSize: '1.25rem' }}>
                          {item.role}
                        </h3>
                        <h4 className="font-weight-bold mb-3" style={{ fontSize: '0.95rem', color: '#FF5C5C' }}>
                          {item.company}
                        </h4>

                        {/* Description Details */}
                        <p className="text-muted-custom mb-0" style={{ color: '#A0A0A0', fontSize: '0.9rem', lineHeight: '1.6' }}>
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
