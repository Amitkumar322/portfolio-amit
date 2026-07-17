import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut' 
      } 
    }
  };

  return (
    <section 
      id="skills" 
      className="py-6 position-relative overflow-hidden" 
      style={{ backgroundColor: '#0A0A0A', padding: '100px 0' }}
    >
      {/* Background Glow */}
      <div 
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 59, 59, 0.04) 0%, rgba(0, 0, 0, 0) 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Section Title */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="text-uppercase tracking-widest font-weight-bold mb-2" style={{ color: '#FF3B3B', fontSize: '0.9rem', letterSpacing: '3px' }}>
                Skills & Tech
              </h5>
              <h2 className="text-white font-weight-bold display-4 mb-3" style={{ fontSize: 'calc(1.8rem + 1.2vw)' }}>
                Core Capabilities
              </h2>
              <div 
                className="mx-auto" 
                style={{ width: '60px', height: '3px', backgroundColor: '#FF3B3B', borderRadius: '2px' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <motion.div
                  variants={cardVariants}
                  className="interactive-card h-100"
                  style={{
                    background: 'rgba(25, 25, 25, 0.45)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 59, 59, 0.08)',
                    borderRadius: '16px',
                    padding: '30px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                    transition: 'border-color 0.3s ease, transform 0.3s ease',
                    cursor: 'default'
                  }}
                  whileHover={{ 
                    y: -6, 
                    borderColor: skill.color,
                    boxShadow: `0 15px 30px rgba(${parseInt(skill.color.slice(1,3), 16)}, ${parseInt(skill.color.slice(3,5), 16)}, ${parseInt(skill.color.slice(5,7), 16)}, 0.12)`
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <Icon size={32} style={{ color: skill.color }} />
                  </div>

                  {/* Skill Name */}
                  <h4 className="text-white font-weight-bold mb-3" style={{ fontSize: '1.05rem', letterSpacing: '0.5px' }}>
                    {skill.name}
                  </h4>

                  {/* Skill Level Progress Bar */}
                  <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      style={{ 
                        height: '100%', 
                        backgroundColor: skill.color,
                        borderRadius: '2px',
                        boxShadow: `0 0 8px ${skill.color}`
                      }}
                    />
                  </div>
                  <span className="text-muted-custom mt-2" style={{ fontSize: '0.75rem', color: '#A0A0A0', fontWeight: 'bold' }}>
                    {skill.level}% Proficiency
                  </span>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
