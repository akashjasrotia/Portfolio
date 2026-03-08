import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const TextRoll = ({ children, className = '', center = false }) => {
  const text = typeof children === 'string' ? children : String(children);
  const DURATION = 0.4;
  const STAGGER = 0.025;
  const chars = text.split("");

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={`inline-flex cursor-none ${className}`}
    >
      <div className="relative inline-flex overflow-hidden whitespace-nowrap leading-none pb-[0.05em] pt-[0.05em]">
        <div>
          {chars.map((char, i) => {
            const delay = center
              ? Math.abs((chars.length / 2) - i) * STAGGER
              : i * STAGGER;

            return (
              <motion.span
                key={`top-${i}`}
                variants={{
                  initial: { y: 0 },
                  hover: { y: "-100%" },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </div>
        <div className="absolute inset-0">
          {chars.map((char, i) => {
            const delay = center
              ? Math.abs((chars.length / 2) - i) * STAGGER
              : i * STAGGER;

            return (
              <motion.span
                key={`bot-${i}`}
                variants={{
                  initial: { y: "100%" },
                  hover: { y: 0 },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

TextRoll.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  center: PropTypes.bool,
};

export default TextRoll;
