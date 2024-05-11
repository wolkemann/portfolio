import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import getReadTime from "../../utils/getReadTime";

import {
  usePortfolio,
  usePortfolioDispatch,
} from "../../context/PortfolioContext";
import getRandomQuotes from "../../utils/quotes";

export default function Typewriter() {
  const { quoteFinished } = usePortfolio();
  const [quoteText] = useState(getRandomQuotes());
  const [quoteX, setQuotex] = useState();
  const dispatch = usePortfolioDispatch();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    quoteText.slice(0, latest)
  );

  useEffect(() => {
    if (document.getElementById("fakeQuote")?.getBoundingClientRect()?.left) {
      setQuotex(
        document.getElementById("fakeQuote")?.getBoundingClientRect()?.left
      );
    }
  }, [quoteText]);

  useEffect(() => {
    animate(count, quoteText.length, {
      type: "tween",
      duration: getReadTime(quoteText),
      delay: 0.5,
      ease: "easeInOut",
      onComplete: () => {
        setTimeout(
          () =>
            dispatch({ type: "updateQuoteFinishedState", quoteFinished: true }),
          1000
        );
      },
    });
  }, [quoteText, count, dispatch]);

  return (
    !quoteFinished && (
      <div className="w-screen h-screen">
        <span
          id="fakeQuote"
          className="opacity-0 absolute left-[50%] translate-x-[-50%]"
        >
          {quoteText}
        </span>
        <motion.span style={{ left: quoteX }} className={`absolute`}>
          {displayText}
        </motion.span>
      </div>
    )
  );
}
