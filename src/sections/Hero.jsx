import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaWordpress, FaCode, FaArrowRight } from 'react-icons/fa';
import { SiElementor } from 'react-icons/si';

export default function Hero() {
  const canvasRef = useRef(null);

  // Background Particles effect on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const particleCount = 60;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = Math.random() > 0.5 ? 'rgba(255, 59, 59, 0.25)' : 'rgba(255, 255, 255, 0.15)';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and connect particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Connect particles if they are close
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(255, 59, 59, ${0.08 - (distance / 120) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Floating animations for skills icons
  const iconVariants = (duration) => ({
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  });

  return (
    <section 
      id="hero" 
      className="d-flex align-items-center position-relative overflow-hidden"
      style={{ minHeight: '100vh', backgroundColor: '#0A0A0A', paddingTop: '80px' }}
    >
      {/* Canvas Particles */}
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Decorative Radial Background Gradients */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 59, 59, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 92, 92, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center py-5">
          {/* Left Text Column */}
          <div className="col-lg-6 text-left mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 
                className="text-red-accent text-uppercase font-weight-bold tracking-widest mb-3"
                style={{ fontSize: '0.9rem', color: '#FF3B3B', letterSpacing: '3px' }}
              >
                Welcome to my portfolio
              </h5>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h1 
                className="text-white font-weight-bold mb-3"
                style={{ fontSize: 'calc(2.5rem + 1.5vw)', lineHeight: '1.1' }}
              >
                Hi, I'm <span className="text-glow-red" style={{ color: '#FF3B3B' }}>Amit Kumar</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 
                className="text-white-50 font-weight-bold mb-4"
                style={{ fontSize: 'calc(1.2rem + 0.5vw)', fontWeight: '600' }}
              >
                Frontend & WordPress Developer
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <p 
                className="text-muted-custom mb-5"
                style={{ fontSize: '1.1rem', color: '#A0A0A0', lineHeight: '1.6', maxWidth: '520px' }}
              >
                Crafting pixel-perfect layouts, interactive web applications, and custom search-optimized WordPress platforms. Merging high-performance clean code with stunning animations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="d-flex flex-wrap gap-3"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn btn-red px-4 py-3 font-weight-bold d-flex align-items-center gap-2 interactive-card"
                style={{
                  borderRadius: '30px',
                  boxShadow: '0 4px 15px rgba(255, 59, 59, 0.4)',
                  fontSize: '0.95rem'
                }}
              >
                View Projects <FaArrowRight size={14} />
              </button>
              <a href='/Amit kumar-(web developer).pdf' download>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-red-outline px-4 py-3 font-weight-bold interactive-card"
                style={{
                  borderRadius: '30px',
                  fontSize: '0.95rem'
                }}
              >
                Download Resume
              </button>
              </a>
            </motion.div>
          </div>

          {/* Right Image/Dashboard Column */}
          <div className="col-lg-6 d-flex justify-content-center position-relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="position-relative"
              style={{ width: '100%', maxWidth: '450px' }}
            >
              {/* Glassmorphic Mock IDE Graphic Card */}
              <motion.div
                animate={{
                  y: [12, -12],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="interactive-card shadow-lg"
                style={{
                  background: 'rgba(25, 25, 25, 0.45)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 59, 59, 0.15)',
                  borderRadius: '20px',
                  padding: '24px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  position: 'relative',
                  zIndex: 2,
                  overflow: 'hidden'
                }}
              >
                {/* Dashboard Header Circles */}
                <div className="d-flex align-items-center gap-2 mb-4">
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5C5C', display: 'inline-block' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFDF6C', display: 'inline-block' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#00E676', display: 'inline-block' }}></span>
                  <span className="text-white-50 ms-3" style={{ fontSize: '0.75rem', fontFamily: 'monospace' }}>amit-kumar.js</span>
                </div>

                {/* Dashboard Mock Code Content */}
                <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '0.85rem', color: '#FFFFFF', overflowX: 'auto' }}>
                  <code>
                    <span style={{ color: '#FF5C5C' }}>const</span> developer = &#123;<br />
                    &nbsp;&nbsp;name: <span style={{ color: '#FFDF6C' }}>'Amit Kumar'</span>,<br />
                    &nbsp;&nbsp;role: <span style={{ color: '#FFDF6C' }}>'Frontend & WordPress'</span>,<br />
                    &nbsp;&nbsp;skills: [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#61DAFB' }}>'React'</span>, <span style={{ color: '#21759B' }}>'WordPress'</span>, <span style={{ color: '#777BB4' }}>'PHP'</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#FF3B3B' }}>'Html'</span>, <span style={{ color: '#61DAFB' }}>'GSAP'</span>, <span style={{ color: '#FF5C5C' }}>'CSS'</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#FF3B3B' }}>'JS'</span>, <span style={{ color: '#61DAFB' }}>'Bootstrap'</span>, <span style={{ color: '#FF5C5C' }}>'github'</span><br />
                    &nbsp;&nbsp;],<br />
                    &nbsp;&nbsp;passion: <span style={{ color: '#00E676' }}>'Clean Code & Premium UI'</span>,<br />
                    &nbsp;&nbsp;coffeeCount: <span style={{ color: '#FF8A00' }}>Infinity</span><br />
                    &#125;;<br /><br />
                    <span style={{ color: '#FF5C5C' }}>function</span> <span style={{ color: '#61DAFB' }}>buildBeautifulWebsites</span>() &#123;<br />
                    &nbsp;&nbsp;return developer.skills.combine();<br />
                    &#125;
                  </code>
                </pre>
              </motion.div>

              {/* Floating Floating Tech Badges around IDE Card */}
              {/* React Badge */}
              <motion.div
                variants={iconVariants(3.5)}
                animate="animate"
                className="position-absolute"
                style={{
                  top: '-15%',
                  left: '10%',
                  zIndex: 3,
                  backgroundColor: 'rgba(97, 218, 251, 0.1)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(97, 218, 251, 0.3)',
                  padding: '12px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <FaReact size={26} style={{ color: '#61DAFB' }} />
              </motion.div>

              {/* WordPress Badge */}
              <motion.div
                variants={iconVariants(4.5)}
                animate="animate"
                className="position-absolute"
                style={{
                  bottom: '-5%',
                  right: '5%',
                  zIndex: 3,
                  backgroundColor: 'rgba(33, 117, 155, 0.15)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(33, 117, 155, 0.3)',
                  padding: '12px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <FaWordpress size={26} style={{ color: '#21759B' }} />
              </motion.div>

              {/* Elementor / UI Badge */}
              <motion.div
                variants={iconVariants(4)}
                animate="animate"
                className="position-absolute"
                style={{
                  top: '40%',
                  right: '-10%',
                  zIndex: 3,
                  backgroundColor: 'rgba(146, 0, 59, 0.15)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(146, 0, 59, 0.3)',
                  padding: '12px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <SiElementor size={26} style={{ color: '#92003B' }} />
              </motion.div>

              {/* Generic Code Badge */}
              <motion.div
                variants={iconVariants(3.8)}
                animate="animate"
                className="position-absolute"
                style={{
                  bottom: '15%',
                  left: '-12%',
                  zIndex: 3,
                  backgroundColor: 'rgba(255, 59, 59, 0.1)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255, 59, 59, 0.3)',
                  padding: '12px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <FaCode size={24} style={{ color: '#FF3B3B' }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
