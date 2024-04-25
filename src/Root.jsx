
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import App from "./App";
import { useDetectGPU } from "@react-three/drei";

function Root() {
   const { isMobile } = useDetectGPU();

    return <>
    <Router>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </Router>
    {!isMobile &&<AnimatedCursor
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
    />}</>
}

export default Root;