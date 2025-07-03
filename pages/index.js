import HeroSection from '@/components/HeroSection';
import { useEffect, useState, useCallback } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = ['hero', 'second', 'third'];

  const scrollToSection = useCallback((index) => {
    if (isScrolling) return;
    setIsScrolling(true);
    
    const targetPosition = index * window.innerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    setActiveSection(index);
    
    // Scroll işlemi bitene kadar yeni scroll'u engelle
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // 1 saniye bekle
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
      
      // Mevcut timeout'u temizle
      clearTimeout(wheelTimeout);
      
      // Yeni bir timeout başlat
      wheelTimeout = setTimeout(() => {
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextSection = Math.max(0, Math.min(sections.length - 1, activeSection + direction));
        scrollToSection(nextSection);
      }, 20); // 50ms debounce
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
        
        <div id="second" className="h-screen w-full bg-gray-100">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold">İkinci Bölüm</h2>
          </div>
        </div>

        <div id="third" className="h-screen w-full bg-gray-200">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold">Üçüncü Bölüm</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
