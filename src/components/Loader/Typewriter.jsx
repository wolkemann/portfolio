import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import getReadTime from "../../utils/getReadTime";

import { usePortfolioDispatch } from "../../context/PortfolioContext";
import getRandomQuotes from "../../utils/quotes";

export default function Typewriter() {
  const [quoteText] = useState(getRandomQuotes())
  const dispatch = usePortfolioDispatch();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
  quoteText.slice(0, latest)
  );

  useEffect(() => {
    animate(count, quoteText.length, {
      type: "tween",
      duration: getReadTime(quoteText),
      delay: 1,
      ease: "easeInOut",
      onComplete: () => {
        dispatch({ type: "updateQuoteFinishedState", quoteFinished: true });
      },
    });
   
  }, [quoteText, count, dispatch]);

  return <motion.span>{displayText}</motion.span>;
}
