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

import meImage from "/images/me_placeholder.jpg";

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
      <div className="none md:fixed right-1 p-8 text-warmGray-100 font-bold">
        In development
      </div>
      <Cursor />
      <Loader />
      <Sidebar />

      <article>
        <h2 className="w-screen h-screen p-5 md:p-10 flex text-bold text-[60px] md:text-[100px] text-center">
          <span className="text-about-title m-auto">
            About me<span className="text-gray-100">.</span>
          </span>
        </h2>
        <div className="h-screen" />
        <section className="min-h-screen h-screen text-gray-100 p-5 md:relative md:p-10 md:m-auto md:w-[768px] xl:w-[1000px]">
          <h2 className="text-about-title md:ml-11 md:absolute md:bottom-10 text-[35px] md:text-[85px]">
            <span className="bg-black">From Italy to Germany</span>
          </h2>
          <div className="h-full bg-me bg-about-title bg-no-repeat bg-cover bg-origin-content p-10 bg-center md:w-[300px]"></div>
          <p className="md:absolute md:top-0 md:m-24 md:ml-[150px] md:mt-35 md:mr-0 text-[20px]">
            <span className="bg-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis est
              magnam tempora pariatur rem voluptate, porro sint ea magni! Libero
              vitae et adipisci nisi corrupti ipsa natus voluptas! Impedit, quo.
              Minus nam repellendus deleniti excepturi odio aspernatur, quasi
              facere maxime! Iusto ullam voluptas, voluptatibus corrupti
              nesciunt illum itaque asperiores rerum a. Autem soluta modi
              repudiandae possimus non inventore. Magni, accusamus. Facere qui
              provident at? Fugiat, facere eligendi? Beatae, quaerat facere
              voluptate delectus quidem vel sunt voluptas perferendis libero.
              Enim molestias nostrum deleniti! Aperiam ipsam perspiciatis minus
              qui provident voluptatem placeat? Veniam, magni veritatis tenetur
              quos asperiores repellat est cum suscipit eaque sint quibusdam
              temporibus ab laborum nemo in cumque incidunt quidem perferendis
              aut laboriosam atque, quam dicta ducimus minima? Quisquam. Enim,
              itaque voluptatibus saepe a officiis illo odit. Perspiciatis eos
              consectetur voluptate, eveniet perferendis molestias tempora id,
              asperiores ullam magni accusantium ab ut voluptates autem eligendi
              velit. Labore, incidunt error.
            </span>
          </p>
        </section>
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
