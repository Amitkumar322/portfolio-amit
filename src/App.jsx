import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Premium preloader screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="portfolio-app-wrapper">
          {/* Custom cursor follower */}
          <CustomCursor />

          {/* Sticky responsive navigation */}
          <Navbar />

          {/* Content sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Experience />
            <Contact />
          </main>

          {/* Footer branding and social links */}
          <Footer />

          {/* Scroll progress and scroll back triggers */}
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
