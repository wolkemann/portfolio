import { useEffect, useState } from "react";
import useDomProps from "../../utils/useDomProps";
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
    clipPath: [`circle(${window.innerHeight * 2 + 200}px at 50vw 50vh)`],
    transition: {
      duration: 2.5,
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
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

const Loader = ({ children, progress, textTyped, handleTextTyped }) => {
  const [randomQuote, setRandomQuote] = useState(getRandomQuotes());
  const { width: windowWidth } = useDomProps();
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

  const spinnerVariants = {
    initial: {
      scale: windowWidth <= 640 ? [0.8, 1.2] : [1, 1.5],
    },
    visible: {
      scale: windowWidth <= 640 ? [0.8, 1.2] : [1, 1.5],
      rotate: [0, 360],
      transition: {
        duration: 1,
      },
    },
    exit: {
      scale: windowWidth <= 640 ? 0.8 : 1,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <motion.div
      layout
      variants={mainWindowVariants}
      animate={textTyped ? "loaded" : ""}
      exit="exit"
      className="w-full h-screen flex flex-col justify-center top-0 left-0 absolute z-50 bg-bgloader"
    >
      <motion.div
        variants={spinnerVariants}
        initial="initial"
        animate={progress === 100 ? "visible" : ""}
        exit="exit"
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
        className="h2__quote absolute opacity-0"
        style={{
          top: "80px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <span id="quoteDOM">{randomQuote}</span>
      </h2>
      {progress === 100 && (
        <motion.h2
          className="h2__quote absolute top-10"
          variants={quoteVariants}
          initial="initial"
          animate="visible"
          exit="fadeOut"
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
  );
};

export default Loader;
