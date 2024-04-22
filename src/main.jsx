import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";

import "./css/global.css";
import AnimatedCursor from "react-animated-cursor";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </Router>
    <AnimatedCursor 
    innerSize={0}
    outerSize={55}
    outerScale={3}
    trailingSpeed={2}
    outerStyle={{
      //border: '2px solid #b200b2',
      background: '#e9afe3',
      mixBlendMode: 'difference'
    }}
  clickables={[
    'a',
    '.mouse-interact'
  ]}
    />
  </React.StrictMode>
);
