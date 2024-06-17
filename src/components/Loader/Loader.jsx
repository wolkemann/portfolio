import { useProgress } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import {
  usePortfolio,
  usePortfolioDispatch,
} from "../../context/PortfolioContext";
import { motion, useAnimationControls } from "framer-motion";
import { AnimatedText } from "../AnimatedText/AnimatedText";
import getRandomQuotes from "../../utils/quotes";

export default function Loader() {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const { pageLoaded } = usePortfolio();
  const { progress } = useProgress();
  const dispatch = usePortfolioDispatch();
  const controls = useAnimationControls();

  const randomQuote = useMemo(() => getRandomQuotes(), []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const sequence = async () => {
      await controls.start("loaded");
      setAnimationCompleted(true);
      document.body.style.overflow = "visible";
      return;
    };
    if (progress === 100) {
      dispatch({ type: "updatePageLoadedState", pageLoaded: true });
      sequence();
    }
  }, [progress, dispatch, controls]);

  return (
    !animationCompleted && (
      <motion.div
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        className="z-[999] fixed w-screen h-screen bg-slate-900"
      >
        {pageLoaded && <AnimatedText text={randomQuote} />}
      </motion.div>
    )
  );
}

const containerVariants = {
  hidden: {
    opacity: 1,
    transform: "scaleY(100%)"
  },
  loaded: {
    transform: "scaleY(0%)",
    transition: {
      type: "EaseInOut",
      damping: 12,
      stiffness: 100,
      delay: 3
    },
  },
};

