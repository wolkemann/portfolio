import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import CursorBlinker from "./Cursor";

export default function TextAnim({ handleFinish, randomQuote }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    randomQuote.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, randomQuote.length, {
      type: "tween",
      duration: 2,
      delay: 1,
      ease: "easeInOut",
      onComplete: () => {
        handleFinish();
      },
    });
    return controls.stop;
  }, []);

  return <motion.span>{displayText}</motion.span>;
}
