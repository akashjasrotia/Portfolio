import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { category: 'Languages', items: ['C++', 'JavaScript', 'C', 'PHP', 'HTML5', 'CSS3', 'Java', 'Python'] },
  { category: 'Frameworks', items: ['Bootstrap', 'Node.js', 'React', 'React Native', 'Flask'] },
  { category: 'Libraries / Tools', items: ['OpenCV', 'Scikit-learn', 'XGBoost', 'PCA', 'FFT', 'GSAP', 'Framer Motion', 'Tailwind CSS'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB'] }
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const categories = gsap.utils.toArray('.skill-category');
      
      categories.forEach((cat) => {
        const items = cat.querySelectorAll('.skill-item');
        const title = cat.querySelector('.skill-title');
        const itemsContainer = cat.querySelector('.skill-items-container');

        gsap.fromTo(title,
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.6, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: title,
              start: 'top 95%',
            }
          }
        );

        if (items.length > 0) {
          gsap.fromTo(items,
            { opacity: 0, y: 30 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.5, 
              stagger: 0.05, 
              ease: 'back.out(1.5)',
              scrollTrigger: {
                trigger: itemsContainer,
                start: 'top 95%',
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-dark relative border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20">
            <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
              [ 02 — Arsenal ]
            </h2>
        </div>

        <div className="flex flex-col gap-24">
          {skillsData.map((group, idx) => (
            <div key={idx} className="skill-category w-full">
              <h3 className="skill-title font-heading text-3xl md:text-5xl uppercase tracking-tighter border-b border-light/20 pb-6 mb-8 text-light/40">
                {group.category}
              </h3>
              <div className="skill-items-container flex flex-wrap gap-4 md:gap-6">
                {group.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="skill-item text-2xl sm:text-3xl md:text-6xl lg:text-8xl font-heading uppercase font-bold tracking-tighter text-outline hover:text-outline-hover transition-all duration-300 cursor-default cursor-crosshair"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
