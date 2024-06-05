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
      <div className="w-screen min-h-screen text-gray-100 p-5 md:flex md:gap-10 md:items-center md:p-10">
        <h3 className="text-projects-title font-black mb-5 md:mb-0 text-2xl self-end md:max-w-[200px] md:tracking-widest md:text-5xl xl:text-7xl">
          MY PROJECTS
        </h3>
        <div className="mx-auto">
          <div className="w-[700px] h-[300px] overflow-y-scroll snap-mandatory snap-y">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    name: "Gentle Letters",
    description:
      "lorem ipsum dolor sit amet conscution amoris tenebris donae donaotum",
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
