import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    institution: 'Mount Carmel School Bhunga',
    degree: 'Matriculation (10th Grade)',
    score: '82%',
    duration: 'Apr 2017 – Mar 2020',
  },
  {
    institution: 'Triple M Public School Hoshiarpur',
    degree: 'Intermediate (12th Grade)',
    score: '89.4%',
    duration: 'Apr 2020 – Mar 2022',
  },
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech Computer Science and Engineering',
    score: 'CGPA: 8.2',
    duration: 'Aug 2023 – Jul 2027',
  }
];

const Education = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Timeline continuous line animation
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );

      const blocks = gsap.utils.toArray('.edu-block');
      const dots = gsap.utils.toArray('.timeline-dot');
    
      blocks.forEach((block, i) => {
        // Block slide in animation
        gsap.fromTo(block, 
          { 
            opacity: 0,
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              end: "bottom 30%",
              scrub: 1,
            }
          }
        );

        // Dot scale up animation
        gsap.fromTo(dots[i],
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-transparent">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-mono text-base md:text-lg uppercase tracking-widest text-accent mb-16 text-center">
          [ 05 — Academic Journey ]
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Timeline Line Background */}
          <div className="absolute left-6 md:left-[220px] top-0 bottom-0 w-[2px] bg-light/10 transform -translate-x-1/2"></div>
          
          {/* Animated Timeline Line */}
          <div 
            ref={lineRef}
            className="absolute left-6 md:left-[220px] top-0 bottom-0 w-[2px] bg-accent origin-top transform -translate-x-1/2"
          ></div>

          <div className="flex flex-col space-y-8 md:space-y-12">
            {educationData.map((edu, i) => (
              <div 
                key={i} 
                className="relative pl-14 md:pl-[280px] w-full"
              >
                {/* Timeline Dot */}
                <div className="timeline-dot absolute left-6 md:left-[220px] top-[24px] md:top-[60px] w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent z-10 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(var(--color-accent),0.5)]"></div>

                {/* Timeline Year - Desktop */}
                <div className="hidden md:flex absolute left-0 w-[190px] top-[60px] flex-col items-end pr-8 font-mono text-accent text-base tracking-wide font-bold transform -translate-y-1/2">
                  {edu.duration.split(' – ').map((year, idx) => (
                    <span key={idx} className="block">{year}</span>
                  ))}
                </div>

                {/* Timeline Year - Mobile */}
                <div className="md:hidden flex items-center h-[48px] mb-2 font-mono text-accent text-sm font-bold pl-2">
                  {edu.duration}
                </div>

                <div className="edu-block border border-light/10 bg-light/[0.03] p-8 md:p-10 relative overflow-hidden group hover:bg-light/[0.08] transition-colors rounded-none">
                  {/* Animated Progress Line on Hover */}
                  <div className="absolute top-0 left-0 h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out"></div>
                  
                  <div className="edu-content flex flex-col gap-4 relative z-10">
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl uppercase font-bold tracking-tighter mb-2 text-light group-hover:text-accent transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="font-body text-lg md:text-xl text-light/70 mb-4">
                        {edu.degree}
                      </p>
                      <br className="hidden md:block"/>
                      <p className="inline-block px-4 py-1 border border-accent/30 rounded-full font-mono text-accent text-sm uppercase tracking-widest">
                        Score: {edu.score}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
