import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile or touch-capable
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const onMouseMove = (e) => {
      setHidden(false);
      
      // Animate dot immediately
      gsap.to(dotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      // Animate outer ring with a slight delay
      gsap.to(ringRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Add event listeners to all interactive items
    const updateHoverElements = () => {
      const targets = document.querySelectorAll('a, button, .interactive-card, .btn, .navbar-brand');
      targets.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateHoverElements();

    // Re-bind occasionally when DOM changes
    const observer = new MutationObserver(updateHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      observer.disconnect();
      
      const targets = document.querySelectorAll('a, button, .interactive-card, .btn, .navbar-brand');
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#FF3B3B',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: hidden ? 0 : 1,
          transition: 'opacity 0.2s ease, width 0.2s ease, height 0.2s ease',
          ...(hovered && {
            width: '12px',
            height: '12px',
            backgroundColor: '#FF5C5C'
          })
        }}
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1.5px solid #FF3B3B',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          opacity: hidden ? 0 : 1,
          transition: 'opacity 0.2s ease, width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
          ...(hovered && {
            width: '50px',
            height: '50px',
            backgroundColor: 'rgba(255, 59, 59, 0.1)',
            borderColor: '#FF5C5C'
          })
        }}
      />
    </>
  );
}
