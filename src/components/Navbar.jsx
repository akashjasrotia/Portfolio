import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const sections = [
  { name: 'Home', to: 'home', index: 0 },
  { name: 'About', to: 'about', index: 5 },
  { name: 'Skills', to: 'skills', index: 10 },
  { name: 'Projects', to: 'projects', index: 15 },
  { name: 'Achievements', to: 'achievements', index: 20 },
  { name: 'Education', to: 'education', index: 25 },
  { name: 'Contact', to: 'contact', index: 30 },
];

const totalTicks = 31;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [offsets, setOffsets] = useState(sections.map((_, i) => i * 1000)); // Default fallback array

  const { scrollY } = useScroll();
  
  const tickPercentages = sections.map(s => `${(s.index / (totalTicks - 1)) * 100}%`);
  const thumbLeft = useTransform(scrollY, offsets, tickPercentages);

  useEffect(() => {
    // Check initial user preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Dynamic offset calculations for correct scroll pill mapping
    const updateOffsets = () => {
      // Delay slightly to let GSAP initialize its pin spacers properly
      setTimeout(() => {
        let newOffsets = sections.map((sec) => {
          const el = document.getElementById(sec.to);
          return el ? el.offsetTop || (el.getBoundingClientRect().top + window.scrollY) : 0;
        });
        
        // Final section (Contact) mapping to maximum scroll height to ensure it hits 100%
        const maxScroll = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        ) - window.innerHeight;
        
        if (newOffsets.length > 0) {
           newOffsets[newOffsets.length - 1] = Math.max(newOffsets[newOffsets.length - 1], maxScroll);
        }
        
        // Framer motion's useTransform input array requires strictly ascending monotonic values
        for(let i = 1; i < newOffsets.length; i++) {
          if (newOffsets[i] <= newOffsets[i - 1]) {
            newOffsets[i] = newOffsets[i - 1] + 1; // force minimal strictly ascending difference
          }
        }
        
        setOffsets(newOffsets);
      }, 500); // 500ms allows initial layouts and fonts to fully load
    };

    updateOffsets();
    window.addEventListener('resize', updateOffsets);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateOffsets);
    };
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? 'bg-dark/80 backdrop-blur-md border-light/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="home" 
          smooth={true} 
          duration={800} 
          className="font-heading text-2xl font-bold tracking-tighter cursor-pointer text-light hover:text-accent transition-colors z-50"
        >
          AJ.
        </Link>

        {/* Desktop Nav (Pill) */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center px-6 h-[56px] bg-surface rounded-full border border-light/10 shadow-xl backdrop-blur-md">
            <div className="relative flex items-center">
              {/* Ticks Container */}
              <div className="flex items-center gap-[6px]">
                {Array.from({ length: totalTicks }).map((_, i) => {
                  const isMainTick = i % 5 === 0;
                  const section = sections.find(s => s.index === i);
                  
                  if (isMainTick && section) {
                    return (
                      <Link
                        key={i}
                        to={section.to}
                        smooth={true}
                        duration={800}
                        className="group relative flex items-center justify-center cursor-pointer h-10 w-2 z-20"
                      >
                        <div className="w-[2px] h-[20px] bg-light rounded-full group-hover:scale-y-125 transition-transform duration-300" />
                        <div className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-mono tracking-widest font-bold uppercase whitespace-nowrap bg-surface text-light px-4 py-2 rounded-lg border border-light/10 pointer-events-none drop-shadow-xl z-50">
                          {section.name}
                        </div>
                      </Link>
                    );
                  }
                  
                  return (
                    <div key={i} className="flex items-center justify-center h-10 w-2 pointer-events-none z-0">
                      <div className="w-[2px] h-[10px] bg-light/20 rounded-full" />
                    </div>
                  );
                })}
              </div>
              
              {/* Progress Thumb Track */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[1px] right-[1px] h-[24px] pointer-events-none">
                <motion.div 
                  className="absolute top-0 w-[12px] h-[24px] bg-accent rounded-full z-10 -ml-[6px]"
                  style={{ left: thumbLeft }}
                />
              </div>
            </div>
          </nav>
          
          <button 
            onClick={toggleTheme} 
            className="w-[56px] h-[56px] flex items-center justify-center bg-surface rounded-full border border-light/10 text-light/70 hover:text-accent transition-colors focus:outline-none shadow-xl cursor-pointer backdrop-blur-md"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-6 md:hidden z-50">
          <button 
            onClick={toggleTheme} 
            className="text-light hover:text-accent transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button 
            className="text-light focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-dark flex flex-col items-center justify-center gap-8"
            >
              {sections.filter(s => s.to !== 'home').map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-5xl font-bold uppercase tracking-tighter text-light hover:text-accent transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
