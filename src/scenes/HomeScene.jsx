import { OrbitControls } from "@react-three/drei";

import useWindowSize from "../hooks/useWindowSize";
import TrackingLight from "../threeUtils/TrackingLight";
import { Woman } from "../models/Woman/Woman";
import { Lentes } from "../models/Lentes/Lentes";
import { setSceneCoords } from "../threeUtils/setSceneCoords";
import { usePortfolio } from "../context/PortfolioContext";
import CustomToonMaterial from "../threeUtils/customToonMaterial/material";

export default function HomeScene() {
  const [width, height] = useWindowSize();
  const { womanPose } = usePortfolio();

  const responsivePos = width >= 768 ? [0, 0, 0] : [0, -0.03, 0];

  return (
    <>
      <group position={responsivePos} rotation={setSceneCoords(womanPose)}>
        <Woman position={[0, -0.95, 0.0]} />
        <Lentes scale={0.0225} />
      </group>

      <mesh
        receiveShadow
        position={[0, 0, -0.5]}
        material={new CustomToonMaterial({ red: 0, blue: 0.76, green: 0.85 })}
      >
        <planeGeometry args={[width, height]} />
      </mesh>

      <ambientLight />
      <TrackingLight />
      {!import.meta.env.PROD && <OrbitControls />}
    </>
  );
}
