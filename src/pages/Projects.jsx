import { useState } from "react";
import Loader from "../components/Loader/Loader";
import { useProgress } from "@react-three/drei";

const Projects = () => {
  const [textTyped, setTextTyped] = useState();
  const { progress } = useProgress();
  return (
    <Loader progress={100} textTyped={textTyped} handleTextTyped={setTextTyped}>
      <div className="w-screen h-screen md:p-12">
        <div className="w-screen p-12 text-center md:w-[750px] md:m-auto md:p-0">
          <h2 className="h2">Hello there, I am</h2>
          <h1 className="h1">Federico Sardo</h1>
          <h2 className="h2 text-accent">Web Developer</h2>
          <p className="font-thin text-2xl italic my-12">
            —<span className="text-accent">Hamburg</span> with love —
          </p>
        </div>
      </div>
    </Loader>
  );
};

export default Projects;
