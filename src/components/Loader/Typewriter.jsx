import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import getReadTime from "../../utils/getReadTime";
import getRandomQuotes from "../../utils/quotes";
import { usePortfolioDispatch } from "../../context/PortfolioContext";

export default function Typewriter() {
  const [randomQuote] = useState(getRandomQuotes());
  const dispatch = usePortfolioDispatch();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    randomQuote.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, randomQuote.length, {
      type: "tween",
      duration: getReadTime(randomQuote),
      delay: 1,
      ease: "easeInOut",
      onComplete: () => {
        dispatch({ type: "updateQuoteFinishedState", quoteFinished: true });
      },
    });
    return controls.stop;
  }, []);

  return <motion.span>{displayText}</motion.span>;
}
