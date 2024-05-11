import { OrbitControls } from "@react-three/drei";

import TrackingLight from "../threeUtils/TrackingLight";
import { Woman } from "../models/Woman/Woman";
import { Lentes } from "../models/Lentes/Lentes";
import { setSceneCoords } from "../threeUtils/setSceneCoords";
import { usePortfolio } from "../context/PortfolioContext";

import {
  ChromaticAberration,
  EffectComposer,
  Glitch,
  Noise,
} from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import setLightCoords from "../threeUtils/setLightCoords";
import Balls from "../models/Ball/Ball";
import Background from "../models/Background/Background";

export default function HomeScene() {
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

      <Balls />

      <ambientLight />
      <directionalLight position={setLightCoords(womanPose)} intensity={0.4} />

      <Background color={0x35daec} position={[0, 0, -5]} />

      <EffectComposer>
        <Glitch
          delay={[0, 3.5]} // min and max glitch delay
          duration={[0.6, 1.0]} // min and max glitch duration
          strength={[0.3, 1.0]} // min and max glitch strength
          mode={GlitchMode.CONSTANT_WILD} // glitch mode
          active={poseChanging} // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
          ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
        />
        {poseChanging && (
          <ChromaticAberration
            offset={[0.01, 0.0]} // color offset
          />
        )}
        <Noise opacity={0.3} />
      </EffectComposer>
      {!import.meta.env.PROD && <OrbitControls />}
    </>
  );
}
