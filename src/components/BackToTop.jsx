import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the user has scrolled
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Show button if scrolled past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG Circle details
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="back-to-top-btn"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#0A0A0A',
            border: '1px solid rgba(255, 59, 59, 0.2)',
            boxShadow: '0px 8px 24px rgba(255, 59, 59, 0.15)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 999,
            outline: 'none'
          }}
          aria-label="Back to top"
        >
          {/* Scroll Progress Ring */}
          <svg
            width="46"
            height="46"
            style={{
              position: 'absolute',
              transform: 'rotate(-90deg)',
              pointerEvents: 'none'
            }}
          >
            <circle
              cx="23"
              cy="23"
              r={radius}
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="23"
              cy="23"
              r={radius}
              stroke="#FF3B3B"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 0.1s ease'
              }}
            />
          </svg>

          {/* Arrow Icon */}
          <FaArrowUp size={16} style={{ color: '#FFFFFF', zIndex: 1, transition: 'transform 0.3s ease' }} className="arrow-icon" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
