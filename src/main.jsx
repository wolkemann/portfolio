import React from "react";
import ReactDOM from "react-dom/client";

// Supports weights 100-900
import "@fontsource-variable/roboto-serif";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/global.css";
import AnimatedCursor from "react-animated-cursor";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </Router>
    <AnimatedCursor
      outerSize={35}
      outerScale={1.5}
      innerStyle={{
        backgroundColor: "black",
      }}
      outerStyle={{
        border: "2px solid black",
      }}
    />
  </React.StrictMode>
);
