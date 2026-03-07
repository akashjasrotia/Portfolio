import { useEffect, useRef } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Reveal text from bottom
    gsap.fromTo(textRef.current.querySelectorAll('.char'),
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const title = "LET'S TALK".split("");

  return (
    <footer id="contact" ref={containerRef} className="bg-accent text-dark pt-32 pb-12 px-6 md:px-12 relative overflow-hidden selection:bg-dark selection:text-accent">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col justify-between h-full min-h-[60vh]">
          
          <div className="mb-24">
            <h2 className="font-mono text-sm uppercase tracking-widest text-dark/60 mb-8 font-bold">
              [ 06 — Contact ]
            </h2>
            <div className="overflow-hidden">
              <h1 
                ref={textRef} 
                className="font-heading text-[15vw] md:text-[18vw] font-black uppercase tracking-tighter leading-[0.8] mix-blend-difference text-white"
              >
                {title.map((char, i) => (
                  <span key={i} className="char inline-block">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-body text-dark/80 text-xl md:text-2xl mt-auto">
            
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-sm tracking-widest font-bold uppercase mb-2">Connect</h4>
              <a href="mailto:akashjasrotia2005@gmail.com" className="group flex items-center justify-between border-b border-dark/20 pb-4 hover:border-dark transition-colors">
                <span>Email</span>
                <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
              </a>
              <a href="tel:+917087792964" className="group flex items-center justify-between border-b border-dark/20 pb-4 hover:border-dark transition-colors">
                <span>Phone</span>
                <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-sm tracking-widest font-bold uppercase mb-2">Socials</h4>
              <a href="https://linkedin.com/akash-jasrotia" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-dark/20 pb-4 hover:border-dark transition-colors">
                <span>LinkedIn</span>
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/akashjasrotia" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-dark/20 pb-4 hover:border-dark transition-colors">
                <span>GitHub</span>
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col gap-4 justify-end items-start md:items-end font-mono text-sm uppercase tracking-wider font-bold text-dark/50">
              <p>© {new Date().getFullYear()} Akash Jasrotia</p>
              <p>Designed with Intent</p>
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="mt-8 px-6 py-3 border border-dark rounded-full hover:bg-dark hover:text-accent transition-colors">
                Back to Top ↑
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Background grain noise for footer too */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay z-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')]" style={{ backgroundSize: '150px' }}></div>
    </footer>
  );
};

export default Contact;
