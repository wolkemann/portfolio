import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import getReadTime from "../../utils/getReadTime";

import {
  usePortfolio,
  usePortfolioDispatch,
} from "../../context/PortfolioContext";
import getRandomQuotes from "../../utils/quotes";

export default function Typewriter() {
  const { quoteFinished } = usePortfolio();
  const [quoteText] = useState(getRandomQuotes());
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
      ease: "easeInOut",
      onComplete: () => {
        setTimeout(
          () =>
            dispatch({ type: "updateQuoteFinishedState", quoteFinished: true }),
          500
        );
      },
    });
  }, [quoteText, count, dispatch]);

  return (
    !quoteFinished && (
      <div className="w-screen h-screen">
        <span className="absolute left-[50%] translate-x-[-50%]">
          {quoteText}
        </span>
        <motion.span>{displayText}</motion.span>
      </div>
    )
  );
}
