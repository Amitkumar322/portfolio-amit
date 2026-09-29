import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: 'easeOut' 
      } 
    }
  };

  return (
    <section 
      id="projects" 
      className="py-6 position-relative overflow-hidden" 
      style={{ backgroundColor: '#0A0A0A', padding: '100px 0' }}
    >
      {/* Decorative Radial Background */}
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
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
                Portfolio
              </h5>
              <h2 className="text-white font-weight-bold display-4 mb-3" style={{ fontSize: 'calc(1.8rem + 1.2vw)' }}>
                Featured Projects
              </h2>
              <div 
                className="mx-auto" 
                style={{ width: '60px', height: '3px', backgroundColor: '#FF3B3B', borderRadius: '2px' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="row g-4 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <div className="col-md-6" key={project.id}>
              <motion.div
                variants={cardVariants}
                className="interactive-card h-100 d-flex flex-column"
                style={{
                  background: 'rgba(25, 25, 25, 0.45)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 59, 59, 0.08)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                  transition: 'border-color 0.3s ease, transform 0.3s ease'
                }}
                whileHover={{ 
                  y: -10, 
                  borderColor: 'rgba(255, 59, 59, 0.35)',
                  boxShadow: '0 20px 40px rgba(255, 59, 59, 0.06)'
                }}
              >
                {/* Image Container with Zoom effect */}
                <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(10,10,10,0.85) 100%)',
                      pointerEvents: 'none'
                    }}
                  />
                </div>

                {/* Info Container */}
                <div className="p-4 d-flex flex-column flex-grow-1 text-left">
                  {/* Tech Tags */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((techItem, index) => (
                      <span 
                        key={index} 
                        className="badge"
                        style={{
                          backgroundColor: 'rgba(255, 59, 59, 0.08)',
                          color: '#FF5C5C',
                          border: '1px solid rgba(255, 59, 59, 0.2)',
                          borderRadius: '30px',
                          padding: '6px 12px',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-weight-bold mb-3" style={{ fontSize: '1.5rem' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-custom flex-grow-1 mb-4" style={{ color: '#A0A0A0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="d-flex gap-3 mt-auto">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-red px-3 py-2 font-weight-bold d-flex align-items-center gap-2 text-decoration-none"
                      style={{ borderRadius: '30px', fontSize: '0.85rem' }}
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-red-outline px-3 py-2 font-weight-bold d-flex align-items-center gap-2 text-decoration-none"
                      style={{ borderRadius: '30px', fontSize: '0.85rem' }}
                    >
                      <FaGithub size={14} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
