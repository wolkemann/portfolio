import { useAnimationControls, useInView, motion } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";
import { usePoseChanging } from "../hooks/usePoseChanging";
import { SECTIONS, WOMAN_POSES } from "../utils/constants";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { AnimatedText } from "../components/AnimatedText/AnimatedText";
import getRandomQuotes from "../utils/quotes";

export default function ProjectsSection() {
  const { updateScene } = usePoseChanging();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimationControls();

  const randomQuote = useMemo(() => getRandomQuotes(), []);

  useEffect(() => {
    if (isInView) {
      updateScene(SECTIONS.PROJECTS, WOMAN_POSES.SIDEBAR_PROJECTS_POSE);
      controls.start("visible");
    }
  }, [isInView, updateScene, controls]);

  return (
    <section className="container snap-center" ref={ref} id={SECTIONS.PROJECTS}>
      <div className="w-screen h-screen p-5 flex flex-col-reverse relative md:flex-row md:items-center md:gap-10 md:p-10">
        <AnimatedText text={randomQuote} color="projects-title" />
        <motion.div
          className="w-full h-full overflow-y-scroll snap-mandatory snap-y md:max-w-[700px] xl:max-w-[100%]"
          initial="hidden"
          variants={projectsVariants}
          animate={controls}
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </motion.div>

        <motion.h3
          className="text-projects-title font-black mb-5 md:mb-0 text-2xl self-start md:self-end md:flex md:flex-col md:tracking-widest md:text-5xl xl:text-7xl"
          initial="hidden"
          variants={titleVariants}
          animate={controls}
        >
          <span>MY</span> <span>PROJECTS</span>
        </motion.h3>
      </div>
    </section>
  );
}

const projectsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      delay: 3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      delay: 3,
    },
  },
};

const projects = [
  {
    name: "Gentle Letters",
    description:
      "Gentle Letters is an anonymous and relaxing social App where you can send letters and wait a response from a random stranger who is willig to help you. As a token of appreciation for your helper's precious words, you can can send a sticker to let them know you read the response and appreciated it.",
    tech: ["Next.js", "styled components"],
    gitUrl: "https://github.com/wolkemann/capstone-project",
    demoUrl: "",
    website: "https://gentle-letters.vercel.app",
  },
  {
    name: "Geschichte Engine",
    description:
      'The Geschichte Engine (short "G-Engine") is a library written to create dynamic and yet simple visual novels.',
    gitUrl: "https://github.com/wolkemann/g-engine",
    demoUrl: "https://wolkemann.net/geschengine",
  },
  {
    name: "Project HH",
    description:
      "lorem ipsum dolor sit amet conscution amoris tenebris donae donaotum",
  },
];
