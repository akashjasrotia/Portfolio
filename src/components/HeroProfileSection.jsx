import { Github, Twitter, Instagram, Youtube } from 'lucide-react';
const HeroProfileSection = () => {
  return (
    <section id="home" className="min-h-screen bg-dark pt-32 pb-24 px-6 md:px-12 flex items-center justify-center relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          
          {/* Left Side: Profile Card */}
          <div className="w-full lg:w-1/3 max-w-[288px]">
            <div className="bg-surface/50 border border-light/10 rounded-3xl p-4 md:p-5 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              {/* Image Container */}
              <div className="w-full aspect-square bg-light/5 rounded-2xl mb-5 overflow-hidden relative group-hover:bg-light/10 transition-colors">
                {/* Replace with actual image source */}
                <img 
                  src="/profile.jpg" 
                  alt="Akash Jasrotia" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Profile Info */}
              <div className="text-center">
                <h2 className="text-3xl font-heading font-bold text-light mb-3 tracking-tight">Akash Jasrotia</h2>
                <p className="text-light/60 font-body text-sm mb-8 px-4 leading-relaxed">
                  A passionate developer focused on creating interactive digital experiences.
                </p>
                
                {/* Social Icons */}
                <div className="flex items-center justify-center gap-3">
                  <a href="https://github.com/akashjasrotia" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-light/5 border border-light/10 flex items-center justify-center text-light/70 hover:bg-accent hover:text-dark hover:border-transparent transition-all duration-300">
                    <Github size={16} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-light/5 border border-light/10 flex items-center justify-center text-light/70 hover:bg-accent hover:text-dark hover:border-transparent transition-all duration-300">
                    <Twitter size={16} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-light/5 border border-light/10 flex items-center justify-center text-light/70 hover:bg-accent hover:text-dark hover:border-transparent transition-all duration-300">
                    <Instagram size={16} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-light/5 border border-light/10 flex items-center justify-center text-light/70 hover:bg-accent hover:text-dark hover:border-transparent transition-all duration-300">
                    <Youtube size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Hero Content & Stats */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            
            {/* Title Area */}
            <div className="mb-12">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-heading font-black uppercase tracking-tighter leading-[0.9] mb-4 text-light">
                WEB<br/>
                <span className="text-light/30 text-outline-accent">DEVELOPER</span>
              </h1>
              
              <div className="flex flex-wrap gap-4 mt-8 mb-8">
                <span className="px-4 py-2 rounded-full border border-light/20 text-xs font-mono uppercase tracking-widest text-light/70">
                  DSA Enthusiast
                </span>
                <span className="px-4 py-2 rounded-full border border-light/20 text-xs font-mono uppercase tracking-widest text-light/70">
                  ML Enthusiast
                </span>
              </div>
              
              <p className="text-xl md:text-2xl text-light/60 font-body max-w-2xl leading-relaxed">
                I build robust, scaleable frontend and full-stack applications with beautiful aesthetics and flawless physics. Turning complex problems into elegant data structures.
              </p>
            </div>

            {/* Statistics */}
            <div className="flex flex-wrap items-center gap-10 md:gap-16 pt-8 border-t border-light/10">
              <div className="flex flex-col">
                <span className="text-5xl font-heading font-bold text-accent mb-2">3+</span>
                <span className="text-xs font-mono uppercase tracking-widest text-light/50">Years of<br/>Learning</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-5xl font-heading font-bold text-accent mb-2">10+</span>
                <span className="text-xs font-mono uppercase tracking-widest text-light/50">Projects<br/>Completed</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-5xl font-heading font-bold text-accent mb-2">15+</span>
                <span className="text-xs font-mono uppercase tracking-widest text-light/50">Technologies<br/>Mastered</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProfileSection;
