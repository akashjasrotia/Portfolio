import { useState } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import HeroProfileSection from './components/HeroProfileSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';

import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ReactLenis root>
      {loading ? (
        <Loader onLoadingComplete={() => setLoading(false)} />
      ) : (
        <div className="bg-dark min-h-screen text-light font-body selection:bg-accent selection:text-dark">
          <Navbar />
          <main>
          <HeroProfileSection />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </main>
      </div>
      )}
    </ReactLenis>
  );
}

export default App;
