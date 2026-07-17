import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    // Mock Form submission logic
    setTimeout(() => {
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    }, 1500);
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
      id="contact" 
      className="py-6 position-relative overflow-hidden" 
      style={{ backgroundColor: '#0A0A0A', padding: '100px 0' }}
    >
      {/* Decorative background glow */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '5%',
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
                Contact
              </h5>
              <h2 className="text-white font-weight-bold display-4 mb-3" style={{ fontSize: 'calc(1.8rem + 1.2vw)' }}>
                Get In Touch
              </h2>
              <div 
                className="mx-auto" 
                style={{ width: '60px', height: '3px', backgroundColor: '#FF3B3B', borderRadius: '2px' }}
              />
            </motion.div>
          </div>
        </div>

        <div className="row g-5">
          {/* Left Column: Contact info details */}
          <div className="col-lg-5 text-left d-flex flex-column justify-content-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-white font-weight-bold mb-4" style={{ fontSize: '1.75rem' }}>
                Let's discuss your project
              </h3>
              <p className="text-muted-custom mb-5" style={{ color: '#A0A0A0', fontSize: '1.05rem', lineHeight: '1.8' }}>
                Have an idea for a custom React app, dynamic WordPress portal, or need help optimizing your landing pages for organic SEO and faster page speeds? Reach out, and let's craft something premium together.
              </p>

              {/* Info grid */}
              <div className="d-flex flex-column gap-4">
                {/* Email details */}
                <div className="d-flex align-items-start gap-3">
                  <div 
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 59, 59, 0.08)',
                      border: '1px solid rgba(255, 59, 59, 0.2)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#FF3B3B',
                      flexShrink: 0
                    }}
                  >
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h4 className="text-white-50 font-weight-bold mb-1" style={{ fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      Email Me
                    </h4>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-white font-weight-bold text-decoration-none transition-all hover-red"
                      style={{ fontSize: '1.05rem' }}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location details */}
                <div className="d-flex align-items-start gap-3">
                  <div 
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 59, 59, 0.08)',
                      border: '1px solid rgba(255, 59, 59, 0.2)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#FF3B3B',
                      flexShrink: 0
                    }}
                  >
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h4 className="text-white-50 font-weight-bold mb-1" style={{ fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      My Location
                    </h4>
                    <span className="text-white font-weight-bold" style={{ fontSize: '1.05rem' }}>
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels icons */}
              <div className="d-flex gap-3 mt-5">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="interactive-card d-flex align-items-center justify-content-center"
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(25, 25, 25, 0.45)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#FF3B3B';
                    e.currentTarget.style.color = '#FF3B3B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  <FaLinkedin size={18} />
                </a>

                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="interactive-card d-flex align-items-center justify-content-center"
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(25, 25, 25, 0.45)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#FF3B3B';
                    e.currentTarget.style.color = '#FF3B3B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact form fields */}
          <div className="col-lg-7 text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="interactive-card"
              style={{
                background: 'rgba(25, 25, 25, 0.45)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 59, 59, 0.08)',
                borderRadius: '24px',
                padding: '40px 30px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
              }}
            >
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                <div className="row g-4">
                  {/* Name field */}
                  <div className="col-md-6">
                    <label className="text-white-50 font-weight-bold mb-2" style={{ fontSize: '0.85rem' }}>Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control contact-input"
                      placeholder="Your Name"
                    />
                  </div>
                  {/* Email field */}
                  <div className="col-md-6">
                    <label className="text-white-50 font-weight-bold mb-2" style={{ fontSize: '0.85rem' }}>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control contact-input"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="text-white-50 font-weight-bold mb-2" style={{ fontSize: '0.85rem' }}>Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control contact-input"
                    placeholder="Project Subject"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="text-white-50 font-weight-bold mb-2" style={{ fontSize: '0.85rem' }}>Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control contact-input"
                    placeholder="Your Message..."
                    style={{ resize: 'none' }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn btn-red px-4 py-3 font-weight-bold d-flex align-items-center justify-content-center gap-2 interactive-card"
                  style={{
                    borderRadius: '30px',
                    fontSize: '0.95rem',
                    cursor: status.loading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {status.loading ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FaPaperPlane size={14} />
                    </>
                  )}
                </button>

                {/* Status Alerts */}
                {status.success && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="alert alert-success border-0 text-center mb-0 mt-2"
                    style={{ backgroundColor: 'rgba(0, 230, 118, 0.1)', color: '#00E676', borderRadius: '12px' }}
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
