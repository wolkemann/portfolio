import * as React from "react";
import useDomProps from "../../utils/useDomProps";
import { motion, useCycle } from "framer-motion";

import { MenuButton } from "./MenuButton";
import { Navigation } from "./Navigation";

import logo from "../../images/wolkemann-logo.png";
import MessageBox from "./MessageBox";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 800}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 50px 48px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const sideImage = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
  closed: {
    opacity: 0,
    x: -30,
  },
};

const menuElement = {
  open: {
    display: "grid",
    transition: {
      delay: 0,
      duration: 0,
    },
  },
  closed: {
    display: "none",
    transition: {
      delay: 1,
    },
  },
};

export const Sidebar = () => {
  const { width: windowWidth, height } = useDomProps();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className="absolute top-0 left-0 bottom-0 flex "
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="absolute bg-bgloader top-0 bottom-0 w-screen"
        variants={sidebar}
        custom={height}
      ></motion.div>

      <motion.div
        variants={menuElement}
        className="relative flex w-screen h-screen justify-center gap-[10px]"
      >
        <motion.div className="md:w-[750px] grid grid-cols-2 row-template gap-5 gap-y-5">
          <motion.div variants={sideImage}>
            <img src={logo} className="w-[350px]" />
          </motion.div>
          <Navigation />
          {/* TODO: Feature about random message when menu opens
          windowWidth >= 768 && (
            <div className="col-span-2">
              <MessageBox />
            </div>
          )*/}
        </motion.div>
      </motion.div>

      <MenuButton toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Sidebar;
