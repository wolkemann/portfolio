import { Link } from "react-router-dom";
import { useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";

import Loader from "../components/Loader/Loader";

import HomeScene from "../components/3DScenes/HomeScene";

import { fadeIn } from "../utils/animations";

const Home = () => {
  const [textTyped, setTextTyped] = useState(false);
  const { progress } = useProgress();

  return (
    <Loader
      progress={progress}
      textTyped={textTyped}
      handleTextTyped={setTextTyped}
    >
      <div className="w-screen h-screen md:p-12">
        <div className="w-screen p-12 text-center md:w-[750px] md:m-auto md:p-0">
          <motion.h2
            className="h2"
            variants={fadeIn("right", 1.5)}
            initial="hidden"
            animate={textTyped ? "show" : ""}
          >
            Hello there, I am
          </motion.h2>
          <motion.h1
            className="h1"
            variants={fadeIn("up", 1.8)}
            initial="hidden"
            animate={textTyped ? "show" : ""}
          >
            Federico Sardo
          </motion.h1>
          <motion.h2
            className="h2 text-accent"
            variants={fadeIn("left", 1.9)}
            initial="hidden"
            animate={textTyped ? "show" : ""}
          >
            Web Developer
          </motion.h2>
          <motion.p
            className="font-thin text-2xl italic my-12"
            variants={fadeIn("down", 2)}
            initial="hidden"
            animate={textTyped ? "show" : ""}
          >
            — <Link to="/projects">from</Link>{" "}
            <span className="text-accent">Hamburg</span> with love —
          </motion.p>
        </div>
        <Sidebar />
        <HomeScene />
      </div>
    </Loader>
  );
};

export default Home;
