import { useProgress } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import {
  usePortfolio,
  usePortfolioDispatch,
} from "../../context/PortfolioContext";
import { motion, useAnimationControls } from "framer-motion";
import { AnimatedText } from "../AnimatedText/AnimatedText";
import { useWindowSize } from "../../hooks/useWindowSize";
import getRandomQuotes from "../../utils/quotes";

export default function Loader() {
  const { width } = useWindowSize();
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const { pageLoaded } = usePortfolio();
  const { progress } = useProgress();
  const dispatch = usePortfolioDispatch();
  const controls = useAnimationControls();
  const loaderControls = useAnimationControls();

  const randomQuote = useMemo(() => getRandomQuotes(), []);

  const loaderVariants = {
    loaded: (i = 0) => ({
      x: i % 2 == 0 ? width : -width,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.5,
      },
    }),
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const sequence = async () => {
      loaderControls.start("loaded");
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
        <div className="absolute flex flex-col justify-center items-center w-screen h-screen">
          <div className="flex flex-col justify-center items-center md:w-fit">
            <motion.p
              className="text-about-title font-black tracking-widest"
              custom={0}
              variants={loaderVariants}
              animate={loaderControls}
            >
              FEDERICOSARDOPORTFOLIO
              <span className="hidden md:inline">WOLKEMANN</span>
            </motion.p>
            <motion.p
              className=" text-white font-black tracking-widest text-5xl md:text-7xl"
              custom={1}
              variants={loaderVariants}
              animate={loaderControls}
            >
              LOADING
            </motion.p>
            <motion.div
              className=" bg-slate-50 h-[8px] w-full rounded"
              variants={progressBarVariants}
              animate={loaderControls}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{
                  width: `${progress}%`,
                }}
                transition={{ duration: 0.1 }}
                className={`h-full bg-about-title rounded`}
              ></motion.div>
            </motion.div>
          </div>
        </div>
        {pageLoaded && <AnimatedText text={randomQuote} />}
      </motion.div>
    )
  );
}

const containerVariants = {
  hidden: {
    opacity: 1,
    transform: "scaleY(100%)",
  },
  loaded: {
    transform: "scaleY(0%)",
    transition: {
      type: "EaseInOut",
      damping: 12,
      stiffness: 100,
      delay: 2.5,
    },
  },
};

const progressBarVariants = {
  loaded: {
    width: "99vw",
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      delay: 0.5,
    },
  },
};
