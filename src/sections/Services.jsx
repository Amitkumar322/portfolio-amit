import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';

export default function Services() {
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
      id="services" 
      className="py-6 position-relative overflow-hidden" 
      style={{ backgroundColor: '#0A0A0A', padding: '100px 0' }}
    >
      {/* Decorative Blur Background Element */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
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
                Services
              </h5>
              <h2 className="text-white font-weight-bold display-4 mb-3" style={{ fontSize: 'calc(1.8rem + 1.2vw)' }}>
                What I Offer
              </h2>
              <div 
                className="mx-auto" 
                style={{ width: '60px', height: '3px', backgroundColor: '#FF3B3B', borderRadius: '2px' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Services Cards Container */}
        <motion.div 
          className="row g-4 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div className="col-md-6 col-lg-4" key={service.id}>
                <motion.div
                  variants={cardVariants}
                  className="interactive-card h-100"
                  style={{
                    background: 'rgba(25, 25, 25, 0.45)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 59, 59, 0.08)',
                    borderRadius: '20px',
                    padding: '40px 30px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                    transition: 'border-color 0.3s ease, transform 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{ 
                    y: -8, 
                    borderColor: 'rgba(255, 59, 59, 0.4)',
                    boxShadow: '0 15px 35px rgba(255, 59, 59, 0.08)'
                  }}
                >
                  {/* Glowing card base line */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'transparent',
                      transition: 'background-color 0.3s ease'
                    }}
                    className="card-glow-bar"
                  />

                  {/* Icon */}
                  <div 
                    className="mb-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(255, 59, 59, 0.1)',
                      border: '1px solid rgba(255, 59, 59, 0.2)',
                      color: '#FF3B3B'
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-white font-weight-bold mb-3" style={{ fontSize: '1.4rem' }}>
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-muted-custom mb-0" style={{ color: '#A0A0A0', fontSize: '0.95rem', lineHeight: '1.7' }}>
                    {service.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
