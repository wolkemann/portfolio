import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    scale: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ name, path }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ x: 20, scale: 1.1 }}
      whileTap={{ x: 20, scale: 0.95 }}
      style={{ width: "fit-content" }}
    >
      <div className="icon-placeholder" />

      <div className="text-[40px]" style={{ width: "fit-content" }}>
        <Link to={path ? path : "/"}>{name}</Link>
      </div>
    </motion.li>
  );
};
