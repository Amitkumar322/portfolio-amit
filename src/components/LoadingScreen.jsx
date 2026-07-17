import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds loading
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress === 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600); // Allow fadeout animation to complete
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#0A0A0A',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFFFF'
          }}
        >
          <div className="d-flex flex-column align-items-center" style={{ maxWidth: '300px', width: '80%' }}>
            {/* Animated Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white font-weight-bold tracking-wider mb-2"
              style={{ fontSize: '1.8rem', letterSpacing: '3px' }}
            >
              AMIT <span style={{ color: '#FF3B3B' }}>KUMAR</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3 }}
              className="text-muted text-uppercase tracking-widest mb-4"
              style={{ fontSize: '0.7rem', letterSpacing: '2px' }}
            >
              Portfolio Loading...
            </motion.p>

            {/* Progress Bar Container */}
            <div 
              style={{ 
                width: '100%', 
                height: '2px', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                borderRadius: '2px',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '15px'
              }}
            >
              <motion.div 
                style={{ 
                  height: '100%', 
                  backgroundColor: '#FF3B3B', 
                  width: `${progress}%`,
                  boxShadow: '0 0 10px #FF3B3B'
                }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Percentage Indicator */}
            <div className="text-white font-weight-bold" style={{ fontSize: '1rem', fontFamily: 'monospace' }}>
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
