import { useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

import Sidebar from "../components/Sidebar/Sidebar";
import Loader from "../components/Loader/Loader";
import HomeScene from "../components/3DScenes/HomeScene";

import { fade, fadeIn, startButton } from "../utils/animations";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const [textTyped, setTextTyped] = useState(false);
  const { progress } = useProgress();

  return (
    <>
      <Loader
        progress={progress}
        textTyped={textTyped}
        handleTextTyped={setTextTyped}
      />
      <Sidebar />
      <div className="w-screen h-screen md:p-12">
        <div className="w-screen h-full flex flex-col justify-around text-center p-12 md:text-left md:max-w-fit md:m-0 md:px-12 md:py-0">
          <div>
            <motion.h2
              className="h2"
              variants={fadeIn("right", 2.5)}
              initial="hidden"
              animate={textTyped ? "show" : ""}
            >
              Hello there, I am
            </motion.h2>
            <motion.h1
              className="h1"
              variants={fadeIn("up", 3.5)}
              initial="hidden"
              animate={textTyped ? "show" : ""}
            >
              Federico Sardo
            </motion.h1>
            <motion.h2
              className="h2 text-accent"
              variants={fadeIn("left", 4)}
              initial="hidden"
              animate={textTyped ? "show" : ""}
            >
              Web Developer
            </motion.h2>
            <motion.p
              className="text-2xl italic my-12 text-right"
              variants={fade(5.0)}
              initial="hidden"
              animate={textTyped ? "show" : ""}
            >
              — from <span className="text-accent">Hamburg</span> with love —
            </motion.p>
          </div>
          <motion.div
            variants={startButton}
            initial="hidden"
            animate="animate"
            className="bg-orange-500 w-fit p-4 md:text-9xl"
          >
            <NavLink to={"/about"}>Let's start</NavLink>
          </motion.div>
        </div>
        <HomeScene loaded={textTyped} />
      </div>
    </>
  );
};

export default Home;
