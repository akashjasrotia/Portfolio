import { Github, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroProfileSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="h-screen w-full bg-dark flex items-center justify-center relative overflow-hidden font-body pt-16">
      
      {/* Spiderman Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-[0.25] dark:opacity-[0.4]"
        style={{ backgroundImage: 'url("/spiderman-bg.jpg")' }}
      />
      
      {/* Gradients to blend the edges into the theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20 pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none z-0" />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.05] dark:opacity-40 mix-blend-overlay dark:mix-blend-screen"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.035\'/%3E%3C/svg%3E")' }}
      />
      
      {/* Ambient glow blobs - (glow effects remain for atmosphere, only removed from buttons as requested) */}
      <div className="absolute w-[500px] h-[500px] bg-accent/20 dark:bg-accent/5 rounded-full blur-[120px] pointer-events-none -top-24 -right-24 z-0" />
      <div className="absolute w-[400px] h-[400px] bg-dark/10 dark:bg-light/5 rounded-full blur-[120px] pointer-events-none -bottom-20 left-[10%] z-0" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ 
        backgroundImage: 'linear-gradient(var(--color-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-light) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        opacity: 0.05
      }} />
      
      {/* Corner decorations */}
      <div className="absolute top-24 right-8 w-16 h-16 border-t border-r border-accent/25 z-10 hidden md:block" />
      <div className="absolute bottom-12 left-8 w-12 h-12 border-b border-l border-light/10 z-10 hidden md:block" />

      {/* Main Container */}
      <div className="relative z-20 container mx-auto px-6 max-w-6xl w-full h-[85vh] flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center lg:justify-between">
        
        {/* Left: Profile Card (Scaled down slightly for 1-page fit) */}
        <div
          className="flex-shrink-0 w-[240px] md:w-[260px] bg-surface/80 backdrop-blur-sm border border-light/10 rounded-3xl p-4 relative group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          style={{
            transform: mounted
              ? `perspective(1000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg)`
              : undefined,
          }}
        >
          {/* Status badge */}
          <div className="absolute -top-3 -right-3 flex items-center gap-1.5 bg-surface border border-accent/20 rounded-full py-1.5 px-3 z-10 shadow-lg">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-sm" />
            <span className="font-mono text-[9px] text-accent tracking-widest uppercase font-bold">Open to work</span>
          </div>

          {/* Floating label */}
          <div className="absolute top-[40%] -right-5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent/50 -rotate-90 origin-center z-10 hidden md:block">
            Portfolio 2025
          </div>

          <div className="w-full aspect-square rounded-2xl overflow-hidden bg-dark mb-4 relative group-hover:bg-light/5 transition-colors">
            <img 
              src="/profile.jpg" 
              alt="Akash Jasrotia" 
              className="w-full h-full object-cover opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0" 
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
          </div>

          <div className="font-heading text-2xl text-light tracking-wider text-center mb-1">Akash Jasrotia</div>
          <div className="text-[11px] text-light/50 text-center leading-relaxed mb-4 px-2">
            A passionate developer focused on creating interactive digital experiences.
          </div>

          <div className="flex justify-center gap-2">
            {[
              { href: 'https://github.com/akashjasrotia', Icon: Github },
              { href: 'https://twitter.com', Icon: Twitter },
              { href: 'https://instagram.com', Icon: Instagram },
              { href: 'https://youtube.com', Icon: Youtube },
            ].map(({ href, Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-light/10 bg-transparent flex items-center justify-center text-light/50 transition-all duration-300 hover:bg-accent hover:border-accent hover:text-dark hover:-translate-y-1">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Hero Content */}
        <div className="flex-1 min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] font-medium">Available for projects</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-[6.5rem] lg:text-[7rem] leading-[0.85] tracking-tight text-light mb-1">
            Web<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-light)', opacity: 0.5 }}>Developer</span>
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 my-5">
            {['DSA Enthusiast', 'ML Enthusiast', 'Full Stack'].map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full border border-light/10 font-mono text-[9px] uppercase tracking-[0.1em] text-light/60 transition-all duration-300 hover:border-accent/40 hover:text-accent hover:bg-accent/10 cursor-default">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm sm:text-base text-light/60 leading-relaxed max-w-[480px] mb-8">
            I build robust, scalable frontend and full-stack applications with beautiful aesthetics and flawless interactions. Turning complex problems into elegant solutions.
          </p>

          {/* CTA Buttons with sweep-up hover animation */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            <a 
              href="#projects" 
              className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-accent/10 border border-accent text-accent rounded-full font-body font-semibold text-sm transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-2 text-accent group-hover:text-dark transition-colors duration-300">
                View Projects <ArrowUpRight size={16} />
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-light/[0.03] text-light border border-light/20 rounded-full font-body font-medium text-sm transition-all duration-300 hover:border-light overflow-hidden"
            >
              <div className="absolute inset-0 bg-light translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-2 text-light group-hover:text-dark transition-colors duration-300">
                Get in touch
              </span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-8 border-t border-light/10 pt-6">
            {[
              { num: '3+', label: 'Years of\nLearning' },
              { num: '10+', label: 'Projects\nCompleted' },
              { num: '15+', label: 'Technologies\nMastered' },
            ].map(({ num, label }, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-heading text-4xl tracking-wide text-accent leading-none mb-1">{num}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-light/40 leading-relaxed whitespace-pre-line">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroProfileSection;