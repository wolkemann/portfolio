import { useInView, useSpring, motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePoseChanging } from "../hooks/usePoseChanging";
import { SECTIONS, WOMAN_POSES } from "../utils/constants";
import ProjectCard from "../components/ProjectCard/ProjectCard";

export default function ProjectsSection() {
  const { updateScene } = usePoseChanging();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const projectsRef = useRef(null);
  const { scrollY } = useScroll({container: projectsRef});
  const scaleX = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView) {
      updateScene(SECTIONS.PROJECTS, WOMAN_POSES.SIDEBAR_PROJECTS_POSE);
    }
  }, [isInView]);

  return (
    <section className="container snap-center" ref={ref} id={SECTIONS.PROJECTS}>
      <motion.div className="fixed bottom-0 h-[10px] bg-projects-title" style={{width: scrollY}}></motion.div>
      <div className="w-screen h-screen p-5 flex flex-col-reverse relative md:flex-row md:items-center md:gap-10 md:p-10">
        <div
          className="w-full h-full overflow-y-scroll snap-mandatory snap-y md:max-w-[700px] xl:max-w-[100%]"
          ref={projectsRef}
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>

        <h3 className="text-projects-title font-black mb-5 md:mb-0 text-2xl self-start md:self-end md:flex md:flex-col md:tracking-widest md:text-5xl xl:text-7xl">
          <span>MY</span> <span>PROJECTS</span>
        </h3>
      </div>
    </section>
  );
}

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
