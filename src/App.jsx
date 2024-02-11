import React from "react";
import ReactDOM from "react-dom/client";

// Supports weights 100-900
import "@fontsource-variable/roboto-serif";

// Router Page
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Loader from "./components/Loader/Loader.jsx";

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";

import "./style/global.css";
import AnimatedCursor from "react-animated-cursor";
import { AnimatePresence } from "framer-motion";

import Transition from "./components/loaderTwo/LoaderTwo.jsx";

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
