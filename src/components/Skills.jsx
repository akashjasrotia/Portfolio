import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { 
  SiCplusplus, SiJavascript, SiPhp, SiHtml5, SiPython,
  SiBootstrap, SiNodedotjs, SiReact, SiFlask,
  SiOpencv, SiScikitlearn, SiTailwindcss, SiMysql, SiMongodb 
} from 'react-icons/si';
import { FaJava, FaCuttlefish, FaCode, FaCss3Alt } from 'react-icons/fa';
import { TbBrandFramerMotion } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { 
    category: 'Languages', 
    items: [
      { name: 'C++', icon: SiCplusplus }, 
      { name: 'JavaScript', icon: SiJavascript }, 
      { name: 'C', icon: FaCuttlefish }, 
      { name: 'PHP', icon: SiPhp }, 
      { name: 'HTML5', icon: SiHtml5 }, 
      { name: 'CSS3', icon: FaCss3Alt },  
      { name: 'Java', icon: FaJava }, 
      { name: 'Python', icon: SiPython }
    ] 
  },
  { 
    category: 'Frameworks', 
    items: [
      { name: 'Bootstrap', icon: SiBootstrap }, 
      { name: 'Node.js', icon: SiNodedotjs }, 
      { name: 'React', icon: SiReact }, 
      { name: 'React Native', icon: SiReact }, 
      { name: 'Flask', icon: SiFlask }
    ] 
  },
  { 
    category: 'Libraries / Tools', 
    items: [
      { name: 'OpenCV', icon: SiOpencv }, 
      { name: 'Scikit-learn', icon: SiScikitlearn }, 
      { name: 'XGBoost', icon: FaCode }, // Fallback icon for XGBoost
      { name: 'PCA', icon: FaCode },    // Fallback icon for PCA
      { name: 'FFT', icon: FaCode },    // Fallback icon for FFT
      { name: 'GSAP', icon: FaCode },   // Fallback icon for GSAP
      { name: 'Framer Motion', icon: TbBrandFramerMotion }, 
      { name: 'Tailwind CSS', icon: SiTailwindcss }
    ] 
  },
  { 
    category: 'Databases', 
    items: [
      { name: 'MySQL', icon: SiMysql }, 
      { name: 'MongoDB', icon: SiMongodb }
    ] 
  }
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
    <section id="skills" ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-dark relative border-t border-light/10">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20">
            <h2 className="font-mono text-base md:text-lg uppercase tracking-widest text-accent mb-4">
              [ 02 — Arsenal ]
            </h2>
        </div>

        <div className="flex flex-col gap-24">
          {skillsData.map((group, idx) => (
            <div key={idx} className="skill-category w-full">
              <h3 className="skill-title font-heading text-3xl md:text-5xl uppercase tracking-tighter border-b border-light/20 pb-6 mb-8 text-light/40">
                {group.category}
              </h3>
              <div className="skill-items-container flex flex-wrap gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
                {group.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="skill-item flex items-center text-2xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-heading uppercase font-bold tracking-tighter text-outline hover:text-outline-hover transition-all duration-300 cursor-default cursor-crosshair group"
                  >
                    <item.icon className="mr-3 md:mr-6 text-[0.8em] text-light opacity-50 group-hover:opacity-100 group-hover:text-accent  transition-all duration-300" />
                    {item.name}
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
