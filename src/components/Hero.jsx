import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight } from 'lucide-react';
import { Link } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const decoRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      title1Ref.current,
      { y: 150, rotate: 10, opacity: 0 },
      { y: 0, rotate: 0, opacity: 1, duration: 1.2, clearProps: 'all' },
      0.2
    )
    .fromTo(
      title2Ref.current,
      { y: 150, rotate: -10, opacity: 0 },
      { y: 0, rotate: 0, opacity: 1, duration: 1.2, clearProps: 'all' },
      0.4
    )
    .fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0.8
    )
    .fromTo(
      decoRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 1.5, transformOrigin: 'left' },
      0.6
    );

    // Parallax on scroll
    gsap.to(containerRef.current, {
      yPercent: 30,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="overflow-hidden mb-[-2rem] md:mb-[-4rem] pb-4 md:pb-8">
          <h1 
            ref={title1Ref} 
            className="text-[12vw] leading-[0.85] font-heading font-bold uppercase tracking-tighter"
          >
            Akash
          </h1>
        </div>
        <div className="overflow-hidden flex items-center gap-6">
          <div ref={decoRef} className="hidden md:block w-32 h-[8px] bg-accent translate-y-2"></div>
          <h1 
            ref={title2Ref} 
            className="text-[12vw] leading-[0.85] font-heading font-bold uppercase tracking-tighter text-outline"
          >
            Jasrotia
          </h1>
        </div>

        <div className="mt-12 md:mt-24 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-light/20 bg-light/5 shrink-0 relative group">
              {/* This image tag looks for profile.jpg in the public folder */}
              <img src="/profile.jpg" alt="Akash Jasrotia" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent rounded-full transition-colors z-10 pointer-events-none"></div>
            </div>
            <p 
              ref={subtitleRef} 
              className="font-mono text-sm md:text-lg max-w-md leading-relaxed text-light/70 uppercase tracking-widest"
            >
              Web Developer, <br className="hidden md:block"/>
              Machine Learning & <br className="hidden md:block"/>
              <span className="text-accent">DSA Enthusiast</span>
            </p>
          </div>

          <Link 
            to="about" 
            smooth={true} 
            duration={800}
            className="group flex items-center gap-4 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full border border-light/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-dark transition-all duration-300">
              <ArrowDownRight className="group-hover:rotate-[-45deg] transition-transform duration-300" />
            </div>
            <span className="font-heading text-xl uppercase tracking-wider font-bold group-hover:text-accent transition-colors">
              Explore
            </span>
          </Link>
        </div>

        {/* Steph Curry Secondary Photo */}
        <div className="absolute right-0 top-32 hidden lg:block w-48 h-48 xl:w-64 xl:h-64 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-light/20 bg-light/5 z-0 group">
          <img src="/steph.jpg" alt="Steph Curry Overlay" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent rounded-full transition-colors z-10 pointer-events-none"></div>
        </div>
      </div>

      {/* Background grain noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')]" style={{ backgroundSize: '200px' }}></div>
      
      {/* Abstract blurred orb */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2"></div>
    </section>
  );
};

export default Hero;
