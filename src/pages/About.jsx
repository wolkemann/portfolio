import { motion, useAnimation, useInView } from "framer-motion";

import Loader from "../components/Loader/Loader";
import { Canvas } from "@react-three/fiber";
import Sidebar from "../components/Sidebar/Sidebar";
import Cursor from "../components/Cursor/Cursor";
import AboutScene from "../scenes/AboutScene";
import { useEffect, useRef } from "react";
import { useScroll } from "@react-three/drei";
import { WOMAN_POSES } from "../utils/constants";
import { usePoseChanging } from "../hooks/usePoseChanging";

export default function About() {
  const { updatePose } = usePoseChanging();

  const cvRef = useRef(null);
  const cvInView = useInView(cvRef);

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef);

  useEffect(() => {
    if (aboutInView) {
      updatePose(WOMAN_POSES.DEFAULT_POSE);
    }
    if (cvInView) {
      updatePose(WOMAN_POSES.SIDEBAR_PROJECTS_POSE);
    }
  }, [cvInView, aboutInView, updatePose]);

  return (
    <main>
      <div className="none md:fixed right-1 p-8 text-warmGray-100 font-bold"></div>
      <Cursor />
      <Loader />
      <Sidebar />

      <article>
        <h2 className="w-screen h-screen p-5 md:p-10 flex text-bold text-[60px] md:text-[100px] text-center">
          <span className="text-about-title m-auto">
            About me<span className="text-gray-100">.</span>
          </span>
        </h2>
      </article>

      <div className="canvas">
        <Canvas
          eventSource={document.getElementById("root")}
          eventPrefix="client"
          shadows
          camera={{ zoom: 15 }}
        >
          <AboutScene />
        </Canvas>
      </div>
    </main>
  );
}

const workExperience = [
  {
    date: "Jul 2022 - Present",
    location: "Hamburg",
    company: "VistaJet Gmbh",
    job: "Frontend Web Developer",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto commodi fuga obcaecati vitae error necessitatibus aut consequuntur cum, dolor ea itaque optio accusamus nam aliquid eum harum recusandae nobis. Pariatur.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto commodi fuga obcaecati vitae error necessitatibus aut consequuntur cum, dolor ea itaque optio accusamus nam aliquid eum harum recusandae nobis. Pariatur.",
    ],
  },
  {
    date: "Jan 2022 - Apr 2022",
    location: "Remote",
    company: "Neuefische Gmbh",
    job: "Fullstack Web Developer",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto commodi fuga obcaecati vitae error necessitatibus aut consequuntur cum, dolor ea itaque optio accusamus nam aliquid eum harum recusandae nobis. Pariatur.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto commodi fuga obcaecati vitae error necessitatibus aut consequuntur cum, dolor ea itaque optio accusamus nam aliquid eum harum recusandae nobis. Pariatur.",
    ],
  },
];

const certifications = [
  {
    name: "Graph Developer - Associate",
    url: "https://www.apollographql.com/tutorials/certifications/18b626d9-95ff-453c-a233-2674e0dda645",
  },
  {
    name: "Javascript Algorithms and Data Structures",
    url: "https://freecodecamp.org/certification/wolkemann/javascript-algorithms-and-data-structures",
  },
  {
    name: "Responsive Web Design",
    url: "https://freecodecamp.org/certification/wolkemann/responsive-web-design",
  },
  {
    name: "The Fundamentals of Digital Marketing",
    url: "https://drive.google.com/file/d/1FzDffEZgLrWU37jGiI5xIDUbvYWnPbsQ/view?usp=sharing",
  },
];
