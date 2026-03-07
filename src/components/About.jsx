import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  const text = "A web developer who also works with ML and AI on the side. Building premium web experiences that blend engineering precision with uncompromised aesthetic vision.";
  const words = text.split(" ");

  useEffect(() => {
    let ctx = gsap.context(() => {
      const wordElements = textRef.current.querySelectorAll('.word');
    
    gsap.fromTo(wordElements, 
      { opacity: 0.1, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'top 50%',
          scrub: 1,
        }
      }
    );

    gsap.fromTo(lineRef.current, 
      { scaleX: 0 },
      { 
        scaleX: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'top 30%',
          scrub: 1,
        }
      }
    );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 bg-dark">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          {/* Section Marker and Info */}
          <div className="w-full md:w-1/4 flex flex-col gap-12">
            <div>
              <h2 className="font-mono text-base md:text-lg uppercase tracking-widest text-accent mb-4">
                [ 01 — About ]
              </h2>
              <div ref={lineRef} className="w-full h-[1px] bg-light/20 origin-left"></div>
            </div>

            {/* Added Contact Info Block */}
            <div className="flex flex-col gap-6 font-mono text-sm uppercase tracking-widest text-light/70">
              <div className="flex items-center gap-4 group">
                <MapPin size={18} className="text-accent group-hover:-mt-1 transition-all" />
                <span className="group-hover:text-light transition-colors">Punjab, India</span>
              </div>
              <a href="mailto:akashjasrotia2005@gmail.com" className="flex items-center gap-4 group hover:text-accent transition-colors">
                <Mail size={18} className="text-light/50 group-hover:text-accent transition-colors" />
                <span className="truncate">Email Me</span>
              </a>
              <div className="flex items-center gap-4 group">
                <Globe size={18} className="text-accent group-hover:rotate-12 transition-all" />
                <span className="group-hover:text-light transition-colors">English, Hindi</span>
              </div>
            </div>
          </div>

          {/* Large text reveal */}
          <div className="w-full md:w-3/4">
            <h3 ref={textRef} className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight font-medium uppercase tracking-tighter">
              {words.map((word, i) => (
                <span key={i} className="word inline-block mr-3 md:mr-5 pt-2">
                  {word}
                </span>
              ))}
            </h3>
            
            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 font-body text-light/70 text-lg leading-relaxed">
              <p>
                My foundation is in web development, but my curiosity leads me into machine learning and artificial intelligence. I don't just write code; I craft digital experiences that look premium and function flawlessly.
              </p>
              <p>
                Currently pursuing a B.Tech in CSE at Lovely Professional University. As an aspiring DSA enthusiast actively learning and coding algorithmic challenges, I aim to merge high-performance interfaces with intelligent backends. Let's create something unexpected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
