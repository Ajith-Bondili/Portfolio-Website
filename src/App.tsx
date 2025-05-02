import React, { useState, useEffect, useRef } from 'react';
import { MobileNav, SideNav } from './components/Navigation';
import { Hero, About, Experience, Skills, Portfolio, Contact } from './components/Sections';
import Background from './components/Background';
import GridCellsEffect from './components/GridCellsEffect';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [activeExperience, setActiveExperience] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showGrid, setShowGrid] = useState(false);

  // Refs for sections
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({
    hero: null,
    about: null,
    experience: null,
    skills: null,
    portfolio: null,
    contact: null,
  });

  // Refs for experience timeline items
  const experienceRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Show grid background when scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = sectionsRef.current.hero;
      if (!heroSection) return;

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > heroBottom - 200) {
        setShowGrid(true);
      } else {
        setShowGrid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Use requestAnimationFrame to optimize scroll performance
      requestAnimationFrame(() => {
        // Check which section is active
        Object.entries(sectionsRef.current).forEach(([id, sectionRef]) => {
          if (!sectionRef) return;

          const sectionTop = sectionRef.offsetTop;
          const sectionBottom = sectionTop + sectionRef.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Only update state if it's different to avoid unnecessary re-renders
            if (activeSection !== id) {
              setActiveSection(id);
            }

            // If we're in the experience section, check which timeline item is active
            if (id === 'experience') {
              experienceRefs.current.forEach((ref, index) => {
                if (!ref) return;

                const itemTop = ref.offsetTop;
                const itemBottom = itemTop + ref.offsetHeight;

                if (scrollPosition >= itemTop - 100 && scrollPosition < itemBottom + 100) {
                  if (activeExperience !== index) {
                    setActiveExperience(index);
                  }
                }
              });
            }
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, activeExperience]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Navigation links
  const navLinks = [
    { title: "Home", path: "#hero", id: "hero" },
    { title: "About", path: "#about", id: "about" },
    { title: "Experience", path: "#experience", id: "experience" },
    { title: "Skills", path: "#skills", id: "skills" },
    { title: "Projects", path: "#portfolio", id: "portfolio" },
    { title: "Contact", path: "#contact", id: "contact" },
  ];

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white overflow-x-hidden">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* Background elements */}
      <Background showGrid={showGrid} />
      <GridCellsEffect showGrid={showGrid} />

      {/* Fixed side navigation */}
      <SideNav activeSection={activeSection} navLinks={navLinks} />

      {/* Mobile navigation */}
      <MobileNav 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        closeMenu={closeMenu} 
        activeSection={activeSection} 
        navLinks={navLinks} 
      />

      <main>
        <Hero ref={(el) => (sectionsRef.current.hero = el)} />
        <About ref={(el) => (sectionsRef.current.about = el)} />
        <Experience 
          ref={(el) => (sectionsRef.current.experience = el)} 
          activeExperience={activeExperience}
          experienceRefs={experienceRefs}
        />
        <Skills ref={(el) => (sectionsRef.current.skills = el)} />
        <Portfolio ref={(el) => (sectionsRef.current.portfolio = el)} />
        <Contact ref={(el) => (sectionsRef.current.contact = el)} />
      </main>

      <Footer />
    </div>
  );
}

export default App;