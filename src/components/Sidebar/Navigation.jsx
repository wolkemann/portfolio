import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItems = [
  {
    name: "About me",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blog",
  },
  {
    name: "Extras",
  },
];

export const Navigation = () => {
  return (
    <motion.ul
      variants={variants}
      className="flex flex-col gap-3 justify-between"
    >
      {menuItems.map((menu, index) => (
        <MenuItem key={index} {...menu} />
      ))}
    </motion.ul>
  );
};
