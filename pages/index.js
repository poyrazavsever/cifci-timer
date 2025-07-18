import About from '@/components/About';
import Designs from '@/components/Designs';
import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/CountdownTimer';
import FAQ from '@/components/FAQ';
import { useEffect, useState, useCallback } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = ['hero', 'second', 'third', 'faq', 'countdown'];

  const scrollToSection = useCallback((index) => {
    if (isScrolling) return;
    setIsScrolling(true);
    
    const targetPosition = index * window.innerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    setActiveSection(index);
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, [isScrolling]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.floor(scrollPosition / windowHeight);
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    let wheelTimeout;
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      clearTimeout(wheelTimeout);
      
      wheelTimeout = setTimeout(() => {
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextSection = Math.max(0, Math.min(sections.length - 1, activeSection + direction));
        scrollToSection(nextSection);
      }, 20);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('wheel', handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [activeSection, isScrolling, scrollToSection, sections.length]);

  return (
    <div className="relative">
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index ? 'bg-green-950 w-4 h-4' : 'bg-gray-300'
            } hover:bg-gray-400`}
            aria-label={`Scroll to ${section} section`}
          />
        ))}
      </div>

      <div className="overflow-hidden">
        <div id="hero" className="h-screen w-full">
          <HeroSection />
        </div>
        
        <div id="second" className="h-screen w-full">
          <About />
        </div>

        <div id="third" className="h-screen w-full">
          <Designs />
        </div>

        <div id="faq" className="h-screen w-full bg-white">
          <FAQ />
        </div>

        <div id="countdown" className="h-screen w-full bg-green-900 flex items-center justify-center">
          <div className="w-full max-w-xl">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </div>
  );
}
