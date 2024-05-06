import { useProgress } from "@react-three/drei";
import Typewriter from "./Typewriter";
import { useEffect, useState } from "react";
import {
  usePortfolio,
  usePortfolioDispatch,
} from "../../context/PortfolioContext";
import { motion } from "framer-motion";
import useWindowSize from "../../hooks/useWindowSize";

export default function Loader() {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const { width } = useWindowSize();
  const { pageLoaded, quoteFinished } = usePortfolio();
  const { progress } = useProgress();
  const dispatch = usePortfolioDispatch();

  useEffect(() => {
    if (progress === 100) {
      dispatch({ type: "updatePageLoadedState", pageLoaded: true });
    }
  }, [progress, dispatch]);

  return (
    !animationCompleted && (
      <motion.div
        animate={quoteFinished ? "loaded" : false}
        exit="closing"
        variants={containerVariants}
        className="z-[999] fixed w-screen h-screen"
      >
        {pageLoaded && (
          <div className="md:text-[65px] absolute">
            <Typewriter />
          </div>
        )}
        <motion.div
          variants={tileVariants}
          custom={width}
          className="z-[999] w-screen h-[20%] bg-backgroundColor"
        ></motion.div>
        <motion.div
          variants={tileVariants}
          custom={width}
          className="z-[999] w-screen h-[20%] bg-backgroundColor"
        ></motion.div>
        <motion.div
          variants={tileVariants}
          custom={width}
          className="z-[999] w-screen h-[20%] bg-backgroundColor"
        ></motion.div>
        <motion.div
          variants={tileVariants}
          custom={width}
          className="z-[999] w-screen h-[20%] bg-backgroundColor"
        ></motion.div>
        <motion.div
          variants={tileVariants}
          custom={width}
          onAnimationComplete={() => setAnimationCompleted(true)}
          className="z-[999] w-screen h-[20%] bg-backgroundColor"
        ></motion.div>
      </motion.div>
    )
  );
}

const containerVariants = {
  closing: {
    opacity: 1,
    transition: {
      type: "Ease",
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.3,
    },
  },
  loaded: {
    opacity: 1,
    transition: {
      type: "Ease",
      duration: 0,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const tileVariants = {
  loaded: (width) => ({
    x: -width,
    transition: {
      type: "Ease",
      duration: 1,
    },
  }),
};
