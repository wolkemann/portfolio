import { useProgress } from "@react-three/drei";
import Typewriter from "./Typewriter";
import { useEffect } from "react";
import {
  usePortfolio,
  usePortfolioDispatch,
} from "../../context/PortfolioContext";
import { motion } from "framer-motion";
import useWindowSize from "../../hooks/useWindowSize";

export default function Loader() {
  const { height } = useWindowSize();
  const { pageLoaded, quoteFinished } = usePortfolio();
  const dispatch = usePortfolioDispatch();
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      dispatch({ type: "updatePageLoadedState", pageLoaded: true });
    }
  }, [progress, dispatch]);

  return (
    <motion.div
      animate={quoteFinished ? "loaded" : false}
      exit="closing"
      variants={variants}
      custom={height}
      className=" z-[999] fixed w-screen h-screen bg-backgroundColor md:p-10"
    >
      {pageLoaded && (
        <div className="md:text-[65px]">
          <Typewriter />
        </div>
      )}
    </motion.div>
  );
}

const variants = {
  closing: {
    y: 0,
    transition: {
      type: "Ease",
      duration: 1,
    },
  },
  loaded: (height) => ({
    y: -height,
    transition: {
      type: "Ease",
      duration: 1,
      delay: 1,
    },
  }),
};
