import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Heart Rate Estimation',
    date: 'Jan 2026',
    index: '01',
    desc: 'Non-contact heart rate monitoring via computer vision & ML. Uses OpenCV for webcam capture and FFT for pulse frequency detection. Employs XGBoost & Random Forest regressors for precise BPM prediction.',
    tech: ['Python', 'OpenCV', 'Scikit-learn', 'XGBoost', 'NumPy'],
    color: '#ff3333',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80'
  },
  {
    title: 'AgroInnovate',
    date: 'May 2025',
    index: '02',
    desc: 'AI chatbot for real-time crop & agricultural market insights. Integrates Gemini API for NLP, powered by a Flask backend with a responsive, farmer-friendly user interface.',
    tech: ['Python', 'Flask', 'Gemini API', 'HTML', 'CSS', 'JS'],
    color: '#ccff00',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80'
  },
  {
    title: 'EduStats',
    date: 'Jun 2025',
    index: '03',
    desc: 'Full-stack student performance analytics platform. Features role-based auth and dynamic dashboards. Built RESTful APIs with NodeJS to serve performance graphs & progress tracking.',
    tech: ['React', 'NodeJS', 'MongoDB', 'PHP'],
    color: '#00f0ff',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80'
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
          end: () => '+=' + wrapperRef.current.offsetWidth,
        }
      });

      panels.forEach((panel) => {
        const pTitle = panel.querySelector('.p-title');
        const pDesc = panel.querySelector('.p-desc');
        const pTags = panel.querySelectorAll('.p-tag');
        const pImg = panel.querySelector('.p-image');
        const pMeta = panel.querySelector('.p-meta');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: 'left 75%',
            toggleActions: 'play none none reverse',
          }
        });

        tl.from(pImg, { opacity: 0, scale: 1.08, duration: 0.9, ease: 'power3.out' }, 0)
          .from(pMeta, { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, 0.1)
          .from(pTitle, { y: 60, opacity: 0, duration: 0.7, ease: 'power3.out' }, 0.2)
          .from(pDesc, { y: 30, opacity: 0, duration: 0.6, ease: 'power2.out' }, 0.38)
          .from(pTags, { y: 15, opacity: 0, stagger: 0.07, duration: 0.4, ease: 'power2.out' }, 0.5);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="h-screen bg-transparent overflow-hidden relative"
    >
      {/* Section label */}
      <div className="absolute top-8 md:top-10 left-6 md:left-12 z-30">
        <h2 className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-accent opacity-80">
          [ 03 — Selected Works ]
        </h2>
      </div>

      <div ref={wrapperRef} className="flex h-full w-[300vw]">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-panel relative w-screen h-full flex overflow-hidden"
          >
            {/* ── LEFT: Content pane ─────────────────── */}
            <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-[52%] h-full bg-dark/[0.92] md:bg-transparent shrink-0">
              {/* Dark backing only on desktop, bleed over image */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-dark via-dark/96 to-dark/0 pointer-events-none" />

              <div className="relative z-10 max-w-lg">
                {/* Project meta row */}
                <div className="p-meta flex items-center gap-4 mb-6">
                  <span
                    className="font-mono text-[11px] tracking-[0.3em] uppercase px-3 py-1 border rounded-full"
                    style={{ color: project.color, borderColor: `${project.color}50`, background: `${project.color}12` }}
                  >
                    {project.date}
                  </span>
                  <span className="font-mono text-xs text-light/20 tracking-widest">
                    {project.index} / 03
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="p-title font-heading font-black uppercase leading-[0.9] tracking-tighter mb-7"
                  style={{
                    fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                    textShadow: `0 0 30px ${project.color}15`
                  }}
                >
                  {project.title}
                </h3>

                {/* Accent rule */}
                <div
                  className="w-12 h-[2px] mb-7 rounded-full"
                  style={{ background: project.color }}
                />

                {/* Description */}
                <p className="p-desc font-body text-light/60 text-base md:text-lg leading-relaxed mb-8">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="p-tag font-mono text-[10px] md:text-xs uppercase tracking-widest px-4 py-1.5 border border-light/10 text-light/50 hover:border-light/30 hover:text-light/80 transition-colors duration-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div
                  className="flex gap-4"
                  style={{ '--p-color': project.color, '--p-glow': `${project.color}55` }}
                >
                  <a
                    href="#"
                    className="group relative flex items-center gap-3 font-heading uppercase font-bold text-sm tracking-wider px-7 py-3.5 overflow-hidden transition-all duration-400"
                    style={{
                      border: `1px solid ${project.color}60`,
                      background: `${project.color}10`,
                      boxShadow: '0 0 0 transparent'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = `0 0 32px ${project.color}55`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = '0 0 0 transparent';
                    }}
                  >
                    <div
                      className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"
                      style={{ background: project.color }}
                    />
                    <span className="relative z-10 text-light group-hover:text-dark transition-colors duration-300 flex items-center gap-2.5">
                      View Project <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group relative flex items-center gap-2.5 font-heading uppercase font-bold text-sm tracking-wider px-6 py-3.5 border border-light/10 text-light/40 hover:border-light/25 overflow-hidden transition-all duration-400"
                  >
                    <div
                      className="absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"
                      style={{ background: `${project.color}15` }}
                    />
                    <span className="relative z-10 group-hover:text-light/80 transition-colors duration-300 flex items-center gap-2.5">
                      <Github size={15} />
                      Source
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Full-height Image pane ──────── */}
            <div className="hidden md:block absolute right-0 top-0 w-[54%] h-full overflow-hidden">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="p-image w-full h-full object-cover"
                style={{ opacity: 0.82, willChange: 'transform, opacity' }}
              />

              {/* Left-edge feather: blends image into content */}
              <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/20 to-transparent" style={{ width: '45%' }} />

              {/* Top/bottom vignette for atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-dark/40 pointer-events-none" />

              {/* Subtle color tint overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `${project.color}12` }}
              />

              {/* Huge ghost index number — visible on the image */}
              <div
                className="absolute bottom-6 right-8 font-heading font-black text-[16vw] leading-none select-none pointer-events-none opacity-[0.07]"
                style={{ color: project.color }}
              >
                {project.index}
              </div>

              {/* Corner accent line */}
              <div
                className="absolute top-0 left-0 w-[2px] h-full"
                style={{ background: `linear-gradient(to bottom, transparent 0%, ${project.color}80 40%, ${project.color}80 60%, transparent 100%)` }}
              />
            </div>

            {/* Mobile: background image (low opacity) */}
            <div className="md:hidden absolute inset-0 z-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{ opacity: 0.18 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/75 to-dark/60" />
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {projects.map((p, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-light/20"
            style={{ background: `${p.color}40` }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;