import { OrbitControls } from "@react-three/drei";

import useWindowSize from "../hooks/useWindowSize";
import TrackingLight from "../threeUtils/TrackingLight";
import { Woman } from "../models/Woman/Woman";
import { Lentes } from "../models/Lentes/Lentes";
import { setSceneCoords } from "../threeUtils/setSceneCoords";
import { usePortfolio } from "../context/PortfolioContext";
import CustomToonMaterial from "../threeUtils/customToonMaterial/material";

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  Glitch,
} from "@react-three/postprocessing";

import { GlitchMode } from "postprocessing";

export default function HomeScene() {
  const [width, height] = useWindowSize();
  const { womanPose, poseChanging } = usePortfolio();

  return (
    <>
      <group
        position={setSceneCoords(womanPose).position}
        rotation={setSceneCoords(womanPose).rotation}
      >
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

      <EffectComposer>
        {poseChanging && (
          <Glitch
            delay={[0, 3.5]} // min and max glitch delay
            duration={[0.6, 1.0]} // min and max glitch duration
            strength={[0.3, 1.0]} // min and max glitch strength
            mode={GlitchMode.CONSTANT_WILD} // glitch mode
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          />
        )}
      </EffectComposer>
      {!import.meta.env.PROD && <OrbitControls />}
    </>
  );
}
