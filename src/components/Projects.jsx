import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Heart Rate Estimation',
    date: 'Jan 2026',
    desc: 'Non-contact heart rate monitoring via computer vision & ML. Uses OpenCV for webcam capture and FFT for pulse frequency detection. Employs XGBoost & Random Forest regressors for precise BPM prediction.',
    tech: ['Python', 'OpenCV', 'Scikit-learn', 'XGBoost', 'NumPy'],
    color: '#ff3333'
  },
  {
    title: 'AgroInnovate',
    date: 'May 2025',
    desc: 'AI chatbot for real-time crop & agricultural market insights. Integrates Gemini API for NLP, powered by a Flask backend with a responsive, farmer-friendly user interface.',
    tech: ['Python', 'Flask', 'Gemini API', 'HTML', 'CSS', 'JS'],
    color: '#ccff00'
  },
  {
    title: 'EduStats',
    date: 'Jun 2025',
    desc: 'Full-stack student performance analytics platform. Features role-based auth and dynamic dashboards. Built RESTful APIs with NodeJS to serve performance graphs & progress tracking.',
    tech: ['React', 'NodeJS', 'MongoDB', 'PHP'],
    color: '#00f0ff'
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.project-panel');
    
    const scrollTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.1, max: 0.3 },
          delay: 0,
          ease: 'power1.inOut'
        },
        end: () => "+=" + wrapperRef.current.offsetWidth,
      }
    });

    // Animate inner elements of panels
    panels.forEach((panel, i) => {
      const pTitle = panel.querySelector('.p-title');
      const pDesc = panel.querySelector('.p-desc');
      const pTags = panel.querySelectorAll('.p-tag');
      
      gsap.from(pTitle, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: panel,
          containerAnimation: scrollTween,
          start: 'left 80%',
          toggleActions: 'play none none reverse',
        }
      });
      
      gsap.from(pDesc, {
        y: 50,
        opacity: 0,
        delay: 0.2,
        scrollTrigger: {
          trigger: panel,
          containerAnimation: scrollTween,
          start: 'left 80%',
          toggleActions: 'play none none reverse',
        }
      });
      
      gsap.from(pTags, {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        delay: 0.4,
        scrollTrigger: {
          trigger: panel,
          containerAnimation: scrollTween,
          start: 'left 80%',
          toggleActions: 'play none none reverse',
        }
      });
    });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="h-screen bg-dark overflow-hidden flex items-center relative">
      <div className="absolute top-12 md:top-24 left-6 md:left-12 z-20">
        <h2 className="font-mono text-base md:text-lg uppercase tracking-widest text-accent mb-4">
          [ 03 — Selected Works ]
        </h2>
      </div>
      
      <div ref={wrapperRef} className="flex h-full w-[300vw]">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="project-panel w-screen h-full flex flex-col justify-center px-6 md:px-24"
          >
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-24">
              {/* Massive Number Background */}
              <div 
                className="absolute text-[60vw] md:text-[40vw] font-heading font-black opacity-[0.03] pointer-events-none rotate-12 -z-10"
                style={{ color: project.color, left: '50%', top: '50%', transform: 'translate(-50%, -50%) rotate(12deg)' }}
              >
                0{idx + 1}
              </div>
              
              <div className="flex-1 w-full">
                <span className="font-mono text-accent text-sm tracking-widest uppercase mb-6 block">
                  {project.date}
                </span>
                <h3 className="p-title text-4xl sm:text-5xl md:text-8xl font-heading font-bold uppercase tracking-tighter leading-none mb-6 md:mb-8">
                  {project.title}
                </h3>
                <p className="p-desc text-light/70 font-body text-xl max-w-2xl leading-relaxed mb-12">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="p-tag px-5 py-2 border border-light/20 rounded-full font-mono text-xs uppercase tracking-wider text-light/80 hover:bg-light hover:text-dark transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <div 
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4"
                  style={{ '--p-color': project.color, '--p-glow': `${project.color}60` }}
                >
                  <a 
                    href="#" 
                    className="group relative flex items-center justify-center gap-3 font-heading uppercase font-bold tracking-wider transition-all duration-500 border border-light/20 bg-light/[0.03] hover:[border-color:var(--p-color)] px-6 py-4 rounded-none w-full sm:w-auto text-center overflow-hidden"
                    style={{ boxShadow: '0 0 0 transparent' }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 25px var(--p-glow)`}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0 transparent`}
                  >
                    <div className="absolute inset-0 bg-[var(--p-color)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                    <span className="relative z-10 text-light group-hover:text-dark transition-colors duration-300 flex items-center gap-3">
                      View Project <ExternalLink size={18} />
                    </span>
                  </a>
                  <a 
                    href="#" 
                    className="group relative flex items-center justify-center gap-3 font-heading uppercase font-bold tracking-wider transition-all duration-500 border border-light/20 bg-light/[0.03] hover:[border-color:var(--p-color)] px-6 py-4 rounded-none w-full sm:w-auto text-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[var(--p-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"></div>
                    <span className="relative z-10 text-light/50 group-hover:[color:var(--p-color)] transition-colors duration-300 flex items-center gap-3">
                      Source <Github size={18} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
