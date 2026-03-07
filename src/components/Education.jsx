import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech Computer Science and Engineering',
    score: 'CGPA: 8.2',
    duration: 'Aug 2023 – Jul 2027',
  },
  {
    institution: 'Triple M Public School Hoshiarpur',
    degree: 'Intermediate (12th Grade)',
    score: '89.4%',
    duration: 'Apr 2020 – Mar 2022',
  },
  {
    institution: 'Mount Carmel School Bhunga',
    degree: 'Matriculation (10th Grade)',
    score: '82%',
    duration: 'Apr 2017 – Mar 2020',
  }
];

const Education = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const blocks = gsap.utils.toArray('.edu-block');
    
    blocks.forEach((block, i) => {
      gsap.fromTo(block, 
        { 
          opacity: 0,
          scaleY: 0,
          transformOrigin: "top"
        },
        {
          opacity: 1,
          scaleY: 1,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            end: "bottom 80%",
            scrub: 1,
          }
        }
      );

      const content = block.querySelector('.edu-content');
      gsap.fromTo(content,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: block,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section id="education" ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-dark">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-16 text-center">
          [ 05 — Academic Journey ]
        </h2>

        <div className="flex flex-col items-center">
          {educationData.map((edu, i) => (
            <div 
              key={i} 
              className="edu-block w-full max-w-4xl border border-light/10 bg-light/[0.03] p-8 md:p-12 relative overflow-hidden group hover:bg-light/[0.08] transition-colors rounded-none mb-6"
            >
              {/* Animated Progress Line on Hover */}
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out"></div>
              
              <div className="edu-content flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12">
                <div className="flex-1">
                  <h3 className="font-heading text-3xl md:text-5xl uppercase font-bold tracking-tighter mb-4 text-light group-hover:text-accent transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="font-body text-xl md:text-2xl text-light/70 mb-4">
                    {edu.degree}
                  </p>
                  <p className="inline-block px-4 py-1 border border-accent/30 rounded-full font-mono text-accent text-sm uppercase tracking-widest">
                    Score: {edu.score}
                  </p>
                </div>
                
                <div className="font-heading text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter text-outline-accent w-full md:w-auto text-left md:text-right mt-4 md:mt-0">
                  {edu.duration.split(' – ').map((year, idx) => (
                    <div key={idx} className="inline-block md:block mr-3 md:mr-0">
                      {year} {idx === 0 && <span className="md:hidden">—</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;
