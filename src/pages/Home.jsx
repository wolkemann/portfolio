import { Link } from "react-router-dom";
import { useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

import Sidebar from "../components/Sidebar/Sidebar";
import Loader from "../components/Loader/Loader";
import HomeScene from "../components/3DScenes/HomeScene";

import { fade, fadeIn } from "../utils/animations";

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
        <div className="w-screen p-12 text-center md:w-[800px] md:m-auto md:p-0">
          <motion.h2
            className="h2"
            variants={fadeIn("right", 2)}
            initial="hidden"
            animate={textTyped ? "show" : ""}
          >
            Hello there, I am
          </motion.h2>
          <motion.h1
            className="h1"
            variants={fadeIn("up", 4)}
            initial="hidden"
            animate={textTyped ? "show" : ""}
          >
            Federico Sardo
          </motion.h1>
          <motion.h2
            className="h2 text-accent"
            variants={fadeIn("left", 5.5)}
            initial="hidden"
            animate={textTyped ? "show" : ""}
          >
            Web Developer
          </motion.h2>
          <motion.p
            className="text-2xl italic my-12"
            variants={fade(7)}
            initial="hidden"
            animate={textTyped ? "show" : ""}
          >
            — from <span className="text-accent">Hamburg</span> with love —
          </motion.p>
        </div>
        <Sidebar />
        <HomeScene loaded={textTyped} />
      </div>
    </Loader>
  );
};

export default Home;
