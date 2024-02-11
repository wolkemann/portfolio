import { useEffect, useState } from "react";
import TextAnim from "../Typewriter/Typewriter";
import { motion } from "framer-motion";
import getRandomQuotes from "../../utils/quotes";

import "../Loader/loader.css";

const mainWindowVariants = {
  loaded: {
    clipPath: [
      `circle(${window.innerHeight * 3}px at 50vw 50vh)`,
      "circle(0px at 50vw 50vh)",
    ],
    transition: {
      duration: 1.5,
      delay: 0.5,
      type: "easeinOut",
    },
  },
  exit: {
    clipPath: [`circle(${window.innerHeight * 3}px at 50vw 50vh)`],
    transition: {
      duration: 3,
    },
  },
};

const spinnerVariants = {
  visible: {
    scale: [1, 1.5],
    rotate: [0, 360],
    transition: {
      duration: 1,
    },
  },
};

const quoteVariants = {
  initial: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  fadeOut: {
    opacity: [1, 0],
    y: 123,
    transition: {
      duration: 5.5,
    },
  },
};

const Loader = ({ children, progress, textTyped, handleTextTyped }) => {
  const [randomQuote, setRandomQuote] = useState(getRandomQuotes());
  const [domText, setDomtext] = useState(0);

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  }

  useEffect(() => {
    setDomtext(getOffset(document.getElementById("quoteDOM")).left);
  }, [domText]);

  return (
    <>
      {children}
      <motion.div
        layout
        variants={mainWindowVariants}
        animate={textTyped ? "loaded" : ""}
        exit="exit"
        className="w-full h-screen flex flex-col justify-center top-0 left-0 absolute z-50 bg-bgloader"
      >
        <motion.div
          variants={spinnerVariants}
          animate={progress === 100 ? "visible" : ""}
          className="hexagon self-center"
          aria-label="Animated hexagonal ripples"
        >
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
        </motion.div>
        <h2
          id="quoteDOM"
          className="h2__quote absolute "
          style={{
            top: "80px",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {randomQuote}
        </h2>
        {progress === 100 && (
          <motion.h2
            className="h2__quote absolute top-10"
            variants={quoteVariants}
            initial="initial"
            animate="visible"
            style={{
              left: domText,
            }}
          >
            <TextAnim
              randomQuote={randomQuote}
              handleFinish={() => handleTextTyped(true)}
            />
          </motion.h2>
        )}
      </motion.div>
    </>
  );
};

export default Loader;
