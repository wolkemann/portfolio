import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePoseChanging } from "../hooks/usePoseChanging";
import { SECTIONS, WOMAN_POSES } from "../utils/constants";
import ProjectCard from "../components/ProjectCard/ProjectCard";

export default function ProjectsSection() {
  const { updateScene } = usePoseChanging();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      updateScene(SECTIONS.PROJECTS, WOMAN_POSES.SIDEBAR_PROJECTS_POSE);
    }
  }, [isInView]);

  return (
    <section className="container snap-center" ref={ref} id={SECTIONS.PROJECTS}>
      <div className="w-screen h-screen p-5 md:flex md:flex-wrap md:items-center md:gap-10 md:p-10">
        <h3 className="text-projects-title font-black mb-5 md:mb-0 text-2xl self-end md:flex md:flex-col md:tracking-widest md:text-5xl xl:text-7xl">
          <span>MY</span> <span>PROJECTS</span>
        </h3>

        <div className="w-full h-full overflow-y-scroll snap-mandatory snap-y md:max-w-[700px] xl:max-w-[900px]">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    name: "Gentle Letters",
    description:
      "Gentle Letters is an anonymous and relaxing social App where you can send letters and wait a response from a random stranger who is willig to help you. As a token of appreciation for your helper's precious words, you can can send a sticker to let them know you read the response and appreciated it.",
  },
  {
    name: "Geschichte Engine",
    description:
      "lorem ipsum dolor sit amet conscution amoris tenebris donae donaotum",
  },
  {
    name: "Project HH",
    description:
      "lorem ipsum dolor sit amet conscution amoris tenebris donae donaotum",
  },
];
