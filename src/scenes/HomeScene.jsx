import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import useWindowSize from "../hooks/useWindowSize";
import TrackingLight from "../threeUtils/TrackingLight";
import { Woman } from "../models/Woman/Woman";
import { Lentes } from "../models/Lentes/Lentes";
import { setSceneCoords } from "../threeUtils/setSceneCoords";
import { usePortfolio } from "../context/PortfolioContext";

export default function HomeScene() {
  const [width, height] = useWindowSize();
  const { womanPose } = usePortfolio();

  const responsivePos = width >= 768 ? [0, 0, 0] : [0, -0.03, 0];

  return (
    <div className="canvas">
      <Canvas
        eventSource={document.getElementById("root")}
        eventPrefix="client"
        camera={{ zoom: 15 }}
      >
        <group position={responsivePos} rotation={setSceneCoords(womanPose)}>
          <Woman position={[0, -0.95, 0.0]} />
          <Lentes scale={0.0225} />
        </group>

        <OrbitControls />
        <ambientLight />
        <TrackingLight />
      </Canvas>
    </div>
  );
}
