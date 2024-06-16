import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const AnimatedText = ({ text, color = "white" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1, once: true });

  const containerControls = useAnimationControls();
  const childrenControls = useAnimationControls();
  const words = text.split(" ");

  useEffect(() => {
    if (isInView) {
      const sequence = async () => {
        await containerControls.start("visible");
        await containerControls.start("hidden");
        return;
      };

      sequence();
    }
  }, [isInView]);

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

  return (
    <motion.div
      ref={ref}
      className={`absolute flex font-black text-${color} left-[50%] -translate-x-2/4 md:text-6xl`}
      variants={container}
      initial="hidden"
      animate={containerControls}
    >
      {words.map((word, index) => (
        <motion.span variants={child} className="mr-5" key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
