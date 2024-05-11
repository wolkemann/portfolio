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
      <Cursor />
      <Loader />
      <Sidebar />

      <article
        ref={aboutRef}
        className="min-w-screen min-h-screen flex flex-col"
      >
        <h1 className="min-w-screen min-h-screen flex about-title-size about-title-color">
          <span className="m-auto">
            About me<span className="text-gray-200">.</span>
          </span>
        </h1>
        <div className="h-screen" />
        <section className="about-article flex-col">
          <h3 className="about-article-title">From Italy to Germany</h3>
          <p className="about-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore
            non mollitia provident voluptatum laborum, quisquam nobis ex officia
            harum assumenda temporibus tempora id, optio unde natus veritatis
            nihil. Aliquid?
          </p>
        </section>
      </article>
      <div className="h-screen" />
      <article className="min-w-screen min-h-screen flex flex-col" ref={cvRef}>
        <h2 className="min-w-screen min-h-screen flex about-title-size about-title-color">
          <span className="m-auto">
            Curriculum Vitae<span className="text-gray-200">.</span>
          </span>
        </h2>

        <div className="h-screen" />

        <section className="md:w-[768px] md:m-auto">
          <section>
            <h3 className="about-article-title md:m-0 md:text-[40px] border-b-4 border-gray-100">
              Work Experience<span className="text-gray-200">.</span>
            </h3>
            <ul className="about-p md:text-[22px] md:mx-0">
              {workExperience.map(
                ({ date, company, location, job, description }) => (
                  <li key={company} className="my-5 md:my-10 text-[18px]">
                    <div>
                      {date}, {location}
                    </div>
                    <div className="flex justify-between flex-wrap">
                      <span className="font-bold">{company}</span>{" "}
                      <span className="text-about-title font-bold">{job}</span>
                    </div>
                    <div>
                      <ul>
                        {description.map((desc, index) => {
                          return (
                            <li className="my-5" key={index}>
                              {desc}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                )
              )}
            </ul>
          </section>
          <section>
            <h3 className="about-article-title md:m-0 md:text-[40px] border-b-4 border-gray-100">
              Certifications<span className="text-gray-200">.</span>
            </h3>
            <ul className="about-p md:mt-1 md:text-[22px] md:mx-0 md:flex md:gap-5">
              {certifications.map(({ url, name }) => (
                <li key={url} className="py-5 text-[18px] md:text-center">
                  <a href={url} target="_blank" className="py-5 w-full">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
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
