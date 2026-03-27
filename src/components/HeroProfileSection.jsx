import React from 'react';
import { Github, Linkedin, FileText, ArrowUpRight, Download } from 'lucide-react';

const CV_LINK = 'https://drive.google.com/file/d/11pufaccfcve_kcvt_poyodKwNbRJUkG_/view?usp=drive_link';

const photos = [
  { src: '/photo1.jpg', alt: 'Akash – Photo 1' },
  { src: '/photo2.jpg', alt: 'Akash – Photo 2' },
];

const HeroProfileSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-transparent flex items-center justify-center relative font-body pt-16 overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-16 lg:gap-24 py-12">

        {/* ── Left Column: Unified Blended Photo Collage ── */}
        <div className="flex flex-col items-center gap-10 shrink-0 w-full lg:w-[450px]">
          
          {/* 3-Image Fanned Collage */}
          <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center group/collage">
            
            {/* Back Left — profile.jpg */}
            <div className="absolute left-0 top-8 w-2/3 aspect-[4/5] rounded-2xl overflow-hidden bg-light/5 ring-1 ring-light/10 shadow-2xl z-10 -rotate-6 transition-all duration-500 ease-out grayscale hover:grayscale-0 hover:z-40 hover:scale-105 hover:-rotate-3 hover:-translate-y-4">
              <img
                src="/profile.jpg"
                alt="Akash Jasrotia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover/collage:bg-black/10 transition-colors duration-500 pointer-events-none" />
            </div>

            {/* Back Right — photo2.jpg */}
            <div className="absolute right-0 top-12 w-2/3 aspect-[4/5] rounded-2xl overflow-hidden bg-light/5 ring-1 ring-light/10 shadow-2xl z-10 rotate-6 transition-all duration-500 ease-out grayscale hover:grayscale-0 hover:z-40 hover:scale-105 hover:rotate-3 hover:-translate-y-4">
              <img
                src={photos[1].src}
                alt={photos[1].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover/collage:bg-black/10 transition-colors duration-500 pointer-events-none" />
            </div>

            {/* Front Center — photo1.jpg (on top) */}
            <div className="absolute z-30 w-3/4 aspect-[4/5] rounded-2xl overflow-hidden bg-light/5 ring-2 ring-accent/30 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2">
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
            
          </div>

          {/* Identity & Socials */}
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="text-center space-y-2">
              <h2 className="font-heading text-3xl text-light uppercase tracking-[0.05em] leading-tight font-bold">
                Akash Jasrotia
              </h2>
              <p className="font-mono text-sm text-accent/90 uppercase tracking-[0.2em]">
                Web Developer
              </p>
            </div>

            <div className="flex gap-8 pt-6 border-t border-light/10 w-3/4 justify-center">
              {[
                { href: 'https://github.com/akashjasrotia', Icon: Github, title: 'GitHub' },
                { href: 'https://www.linkedin.com/in/akash-jasrotia', Icon: Linkedin, title: 'LinkedIn' },
                { href: CV_LINK, Icon: FileText, title: 'CV' },
              ].map(({ href, Icon, title }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={title}
                  className="text-light/40 hover:text-accent hover:-translate-y-1.5 transition-all duration-300"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right Column: Content ── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl space-y-8 z-20">

          <h1 className="font-heading text-6xl sm:text-7xl lg:text-[7rem] leading-[0.9] tracking-tighter uppercase font-extrabold">
            <span className="text-light block">Web</span>
            <span
              className="text-transparent block mt-2"
              style={{ WebkitTextStroke: '1.5px var(--color-light)', opacity: 0.6 }}
            >
              Developer
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-light/70 font-body leading-relaxed max-w-xl">
            I live for{' '}
            <span className="text-accent font-semibold">patterns</span> — in
            code, in logic, in life. Whether it's cracking a tough algorithm or
            architecting a seamless full-stack product, I chase the elegance
            hidden inside hard problems.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {['DSA Enthusiast', 'Full Stack', 'Problem Solver'].map((tag, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full border border-light/15 bg-light/5 text-light/70 text-xs uppercase tracking-widest font-semibold backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 w-full justify-center lg:justify-start flex-wrap">
            <a
              href="#projects"
              className="group relative flex items-center justify-center gap-3 font-heading uppercase font-bold tracking-wider transition-all duration-500 border border-light/20 bg-light/[0.03] hover:[border-color:var(--color-accent)] px-8 py-4 rounded-none min-w-[200px] overflow-hidden"
              style={{ boxShadow: '0 0 0 transparent' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 25px rgba(204, 255, 0, 0.4)`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 transparent')}
            >
              <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 text-light group-hover:text-dark transition-colors duration-300 flex items-center gap-3">
                View Projects <ArrowUpRight size={18} />
              </span>
            </a>

            <a
              href="#contact"
              className="group relative flex items-center justify-center gap-3 font-heading uppercase font-bold tracking-wider transition-all duration-500 border border-light/20 bg-light/[0.03] hover:[border-color:var(--color-light)] px-8 py-4 rounded-none min-w-[200px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-light opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0" />
              <span className="relative z-10 text-light/70 group-hover:text-light transition-colors duration-300 flex items-center gap-3">
                Get in Touch
              </span>
            </a>

            <a
              href={CV_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-center gap-3 font-heading uppercase font-bold tracking-wider transition-all duration-500 border border-accent/40 bg-accent/5 hover:bg-accent/10 hover:[border-color:var(--color-accent)] px-8 py-4 rounded-none min-w-[200px] overflow-hidden"
              style={{ boxShadow: '0 0 0 transparent' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 20px rgba(204, 255, 0, 0.25)`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 transparent')}
            >
              <span className="relative z-10 text-accent group-hover:text-accent/80 transition-colors duration-300 flex items-center gap-3">
                Download CV <Download size={16} />
              </span>
            </a>
          </div>

          <div className="flex gap-10 sm:gap-16 border-t border-light/10 pt-10 pb-4 mt-10 justify-center lg:justify-start w-full">
            {[
              { num: '3+', label: 'Years\nLearning' },
              { num: '10+', label: 'Projects' },
              { num: '15+', label: 'Tech Stack' },
            ].map(({ num, label }, i) => (
              <div key={i} className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="text-4xl lg:text-5xl text-light font-heading font-extrabold mb-2">{num}</div>
                <div className="text-[11px] text-light/50 uppercase tracking-[0.15em] font-medium leading-relaxed whitespace-pre-line">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProfileSection;