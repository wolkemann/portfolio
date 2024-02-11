import React from "react";
import { AnimatePresence } from "framer-motion";

// Router Page
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import { Route, Routes, useLocation } from "react-router-dom";

// Supports weights 100-900
import "@fontsource-variable/roboto-serif";
import "./style/global.css";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
