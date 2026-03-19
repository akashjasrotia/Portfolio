import { Github, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

const HeroProfileSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-transparent flex items-center justify-center relative font-body pt-16"
    >
      {/* Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-6xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-16 lg:gap-24 py-12">
        
        {/* Profile Card */}
        <div className="flex flex-col items-center gap-6 w-56 shrink-0 mt-8 lg:mt-0">
  {/* Profile Image */}
  <div className="w-full aspect-square rounded-3xl overflow-hidden relative ring-1 ring-light/15 bg-light/5">
    <img
      src="/profile.jpg"
      alt="Akash Jasrotia"
      className="w-full h-full object-cover"
    />
    {/* Subtle decorative border */}
    <div className="absolute inset-0 border-2 border-transparent ring-2 ring-accent/20 -m-px pointer-events-none" />
  </div>

  {/* Name & Title */}
  <div className="text-center space-y-1.5">
    <h2 className="font-heading text-2xl text-light uppercase tracking-[0.05em] leading-tight">
      Akash Jasrotia
    </h2>
    <p className="font-mono text-xs text-accent/90 uppercase tracking-widest">
      Web Developer
    </p>
  </div>


          {/* Social Links */}
          <div className="flex gap-6 pt-4 border-t border-light/10 w-full justify-center">
            {[
              { href: 'https://github.com/akashjasrotia', Icon: Github, title: 'GitHub' },
              { href: '#', Icon: Twitter, title: 'Twitter' },
              { href: '#', Icon: Instagram, title: 'Instagram' },
              { href: '#', Icon: Youtube, title: 'YouTube' },
            ].map(({ href, Icon, title }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={title}
                className="text-light/30 hover:text-accent hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl space-y-8">
          
          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-[6rem] leading-none tracking-tighter uppercase font-bold">
            <span className="text-light block">Web</span>
            <span className="text-transparent block mt-2" style={{ WebkitTextStroke: '1.5px var(--color-light)', opacity: 0.5 }}>Developer</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-light/50 font-body leading-relaxed max-w-xl">
            I build robust, scalable web applications with clean design and efficient backend logic — turning complex ideas into simple, usable products.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {['DSA Enthusiast', 'Full Stack', 'Problem Solver'].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-light/15 text-light/50 text-xs uppercase tracking-widest font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full justify-center lg:justify-start">
            <a
              href="#projects"
              className="group relative flex items-center justify-center gap-3 font-heading uppercase font-bold tracking-wider transition-all duration-500 border border-light/20 bg-light/[0.03] hover:[border-color:var(--color-accent)] px-8 py-4 rounded-none min-w-[200px] overflow-hidden"
              style={{ boxShadow: '0 0 0 transparent' }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 25px rgba(204, 255, 0, 0.4)`}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 transparent'}
            >
              <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 text-light group-hover:text-dark transition-colors duration-300 flex items-center gap-3">
                View Projects <ArrowUpRight size={18} />
              </span>
            </a>
            <a
              href="#contact"
              className="group relative flex items-center justify-center gap-3 font-heading uppercase font-bold tracking-wider transition-all duration-500 border border-light/20 bg-light/[0.03] hover:[border-color:var(--color-light)] px-8 py-4 rounded-none min-w-[200px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-light opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"></div>
              <span className="relative z-10 text-light/70 group-hover:text-light transition-colors duration-300 flex items-center gap-3">
                Get in Touch
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 sm:gap-14 border-t border-light/10 pt-8 pb-4 mt-8 justify-center lg:justify-start w-full">
            {[
              { num: '3+', label: 'Years\nLearning' },
              { num: '10+', label: 'Projects' },
              { num: '15+', label: 'Tech Stack' },
            ].map(({ num, label }, i) => (
              <div key={i} className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="text-3xl lg:text-4xl text-light font-heading font-bold mb-1">{num}</div>
                <div className="text-[10px] text-light/40 uppercase tracking-widest leading-relaxed whitespace-pre-line">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroProfileSection;
