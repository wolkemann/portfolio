import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import useWindowSize from "../hooks/useWindowSize";
import TrackingLight from "../threeUtils/TrackingLight";
import { Woman } from "../models/Woman";
import { Lentes } from "../models/Lentes";

export default function HomeScene() {
  const [width, height] = useWindowSize();

  const modelPos = width >= 768 ? [0.28, 0, 0] : [0, -0.03, 0];

  return (
    <div className="canvas">
      <Canvas
        eventSource={document.getElementById("root")}
        eventPrefix="client"
        camera={{ zoom: 15 }}
      >
        <group position={modelPos}>
          <Woman position={[0, -0.95, 0.0]} />
          <Lentes position={[0, 0.155, 0.063]} scale={0.0225} />
        </group>

        <OrbitControls />
        <ambientLight />
        <TrackingLight />
      </Canvas>
    </div>
  );
}
