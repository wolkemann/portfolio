import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";

import { MenuButton } from "./MenuButton";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 3000) => ({
    clipPath: `circle(${3000 * 2 + 200}px at 40px 40px)`,
    background: "red",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className="absolute top-0 left-0 bottom-0"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="absolute bg-bgloader top-0 bottom-0 w-screen"
        variants={sidebar}
      ></motion.div>
      <div className="absolute w-screen h-screen flex justify-center items-center gap-4">
        <div>lorem ipsum dolor si atamet</div>
        <Navigation />
      </div>

      <MenuButton toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Sidebar;
