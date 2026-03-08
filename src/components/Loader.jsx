import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate complex loading process
    const duration = 2500; // 2.5 seconds total loading time
    const interval = 30; // Update every 30ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      // Use an ease-out calculation for progress feeling more natural
      const easeOutProgress = 1 - Math.pow(1 - currentStep / steps, 3);
      setProgress(Math.min(easeOutProgress * 100, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onLoadingComplete();
        }, 400); // Give a small tail end delay before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-sm px-6">
          {/* Main Loading Text */}
          <div className="overflow-hidden mb-8">
            <motion.h2 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-heading font-black text-light uppercase tracking-tighter text-center"
            >
              Good things<br/>
              <span className="text-outline-accent">take time.</span>
            </motion.h2>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full relative mt-4">
            {/* Progress Percentage */}
            <div className="flex justify-between items-end mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-light/50">
                Loading Experience
              </span>
              <span className="font-mono text-sm font-bold text-accent">
                {Math.floor(progress)}%
              </span>
            </div>

            {/* Progress Track */}
            <div className="w-full h-[2px] bg-light/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-accent relative"
                style={{ width: `${progress}%` }}
              >
                {/* Glowing tip */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 rounded-full bg-accent blur-[4px]"></div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

Loader.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

export default Loader;
