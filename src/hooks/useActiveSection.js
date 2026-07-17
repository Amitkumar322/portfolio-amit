import { useState, useEffect } from 'react';

export default function useActiveSection(sectionIds, offset = 150) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          const absoluteTop = el.offsetTop;
          const absoluteBottom = absoluteTop + el.offsetHeight;

          if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
