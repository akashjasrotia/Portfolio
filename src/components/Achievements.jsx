import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Code, FileBadge, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  { name: 'AI & ML for Real-World Problem Solving', org: 'LPU', date: 'Jul 2025', desc: 'Grade: O (Outstanding)' },
  { name: 'Fundamentals of Computer Networking', org: 'Coursera', date: 'Jul 2025' },
  { name: 'Privacy and Security in Online Social Media', org: 'NPTEL', date: 'Jul 2025' },
  { name: 'Digital Systems: From Logic Gates to Processors', org: 'Coursera', date: 'Oct 2026' },
  { name: 'Introduction to Hardware and Operating System', org: 'Coursera', date: 'Sep 2024' }
];

const achievements = [
  'Solved 250+ problems on LeetCode, HackerRank, GeeksforGeeks',
  'Filed a patent: "AI Language Learning App Using Real-Time Performance Analyzer"',
  'Participated in Binary Blitz Hackathon at LPU'
];

const Achievements = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Pin left side and scroll right side
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function() {
        gsap.to(leftRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: leftRef.current,
            pinSpacing: false,
          }
        });
      }
    });

    const items = gsap.utils.toArray('.reveal-item');
    items.forEach((item) => {
      gsap.fromTo(item, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section id="achievements" ref={containerRef} className="py-24 md:py-0 pb-24 px-6 md:px-12 bg-dark relative min-h-screen">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-12 md:gap-24 relative">
        
        {/* Left Side: Pinned Titles */}
        <div className="w-full md:w-5/12 h-auto md:h-screen flex flex-col justify-center" ref={leftRef}>
          <div className="mb-12">
            <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
              [ 04 — Milestones ]
            </h2>
            <h3 className="font-heading text-6xl md:text-8xl lg:text-9xl uppercase font-bold leading-[0.85] tracking-tighter">
              Proof <br />
              <span className="text-outline text-dark">of</span> <br />
              Work
            </h3>
          </div>
        </div>

        {/* Right Side: Scrollable Lists */}
        <div className="w-full md:w-7/12 md:py-32 flex flex-col gap-16 md:gap-24 font-body" ref={rightRef}>
          
          {/* Achievements Block */}
          <div>
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6 reveal-item">
              <Trophy className="text-accent" size={32} />
              <h4 className="font-heading text-4xl mt-2 uppercase tracking-tight">Achievements</h4>
            </div>
            
            <ul className="flex flex-col gap-8">
              {achievements.map((ach, i) => (
                <li key={i} className="reveal-item flex gap-6 items-start group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-light/30 group-hover:bg-accent group-hover:scale-150 transition-all"></div>
                  <p className="text-xl md:text-2xl text-light/80 hover:text-light transition-colors relative">
                    {ach}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificates Block */}
          <div>
            <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6 reveal-item">
              <FileBadge className="text-accent" size={32} />
              <h4 className="font-heading text-4xl mt-2 uppercase tracking-tight">Certifications</h4>
            </div>
            
            <div className="flex flex-col gap-10">
              {certificates.map((cert, i) => (
                <div key={i} className="reveal-item group flex flex-col md:flex-row justify-between items-start md:items-end p-6 border border-light/10 bg-light/[0.03] hover:bg-light/[0.08] transition-colors rounded-none">
                  <div className="max-w-md">
                    <h5 className="font-heading text-2xl md:text-3xl uppercase tracking-tighter mb-2 group-hover:text-accent transition-colors">
                      {cert.name}
                    </h5>
                    <p className="font-mono text-sm text-light/50 uppercase tracking-widest">
                      {cert.org}
                    </p>
                    {cert.desc && (
                      <p className="font-mono text-xs text-accent/80 mt-2 uppercase tracking-widest">
                        {cert.desc}
                      </p>
                    )}
                  </div>
                  <div className="mt-6 md:mt-0 font-mono text-sm text-light/60 uppercase tracking-widest px-4 py-2 border border-white/10 rounded-full">
                    {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
