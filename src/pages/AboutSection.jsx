import { useInView, motion, useAnimationControls } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { usePoseChanging } from "../hooks/usePoseChanging";
import { SECTIONS, WOMAN_POSES } from "../utils/constants";
import { AnimatedText } from "../components/AnimatedText/AnimatedText";
import getRandomQuotes from "../utils/quotes";

export default function AboutSection() {
  const { updateScene } = usePoseChanging();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimationControls();

  const randomQuote = useMemo(() => getRandomQuotes(), []);

  useEffect(() => {
    if (isInView) {
      updateScene(SECTIONS.ABOUT, WOMAN_POSES.ABOUT_POSE);
      controls.start("visible");
    }
  }, [isInView, updateScene, controls]);

  return (
    <section
      className="relative w-screen h-screen p-5 snap-center md:p-10"
      id={SECTIONS.ABOUT}
      ref={ref}
    >
      <article className="h-full text-gray-100 md:flex md:gap-10 md:items-center">
      <AnimatedText text={randomQuote} color="about-title" />
        <motion.h3
          className="text-about-title self-end font-black mb-5 md:mb-0 text-2xl md:tracking-widest md:text-5xl xl:text-7xl"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          FROM ITALY TO GERMANY
        </motion.h3>
        <motion.div className=" tracking-widest md:text-xl xl:text-3xl" initial="hidden" animate={controls} variants={textVariants}>
          <p className="mb-5 md:mb-10">
            I used to live most of the time in a small town in the center of
            Sicily, Italy.
          </p>
          <p className="my-5 md:my-10">
            My life has been a bit of a roller coaster: after graduating from
            law school and working as a legal consultant, I decided to turn my
            life around and started a new beginning in Germany.
          </p>
          <p className="mt-5 md:mt-10">
            While there learning the language, I decided to embark on a Web
            Developing Bootcamp at Neufische Gmbh at the same time. Today I work
            as a frontend developer for a private jet company, in the Hanseatic
            city of Hamburg.
          </p>
        </motion.div>
      </article>
    </section>
  );
}

const titleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      delay: 3
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      delay: 3
    },
  },
};
