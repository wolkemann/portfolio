import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const AnimatedText = ({ text, color = "white", delay = 500 }) => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });
  const containerControls = useAnimationControls();
  const words = text.split(" ");

  useEffect(() => {
    if (isInView) {
      const sequence = async () => {
        await containerControls.start("visible");
        await containerControls.start("hidden");
        setAnimationCompleted(true);
        return;
      };

      const timeout = setTimeout(() => {
        sequence();
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isInView, containerControls, delay]);

  return (
    !animationCompleted && (
      <motion.div
        ref={ref}
        className={`absolute flex font-black text-${color} select-none left-[50%] bottom-[50%] -translate-x-2/4 md:text-6xl xl:md:text-8xl`}
        variants={container}
        initial="hidden"
        animate={containerControls}
      >
        {words.map((word, index) => (
          <motion.span variants={child} className="mr-2 md:mr-5" key={index}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
  );
};

// Variants for Container of words.
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.07 * i },
  }),
};

// Variants for each word.
const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
