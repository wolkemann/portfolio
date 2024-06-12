import { useWindowSize } from "../hooks/useWindowSize";
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
import Background from "../models/Background/Background";
import { Canvas } from "@react-three/fiber";
import {
  getDirectionalLightValues,
  getLentesGlassColor,
  getSceneBackgroundColor,
  getWomanShaderColor,
} from "./getSceneValues";
import Balls from "../models/Ball/Ball";

export default function MainScene() {
  const { width } = useWindowSize();
  const { womanPose, pageSection, poseChanging } = usePortfolio();
  return (
    <div className="canvas">
      <Canvas
        eventSource={document.getElementById("root")}
        eventPrefix="client"
        shadows
        camera={{ zoom: 15 }}
      >
        {/**
         * SCENE PROPS
         */}
        <Background
          color={getSceneBackgroundColor(pageSection)}
          position={[0, 0, -5]}
        />
        <Balls />
        {/**
         * WOMAN MODEL
         */}
        <group
          position={setSceneCoords(womanPose, width).position}
          rotation={setSceneCoords(womanPose, width).rotation}
        >
          <Woman
            shaderColor={getWomanShaderColor(pageSection)}
            position={[0, -0.95, 0.0]}
          />
          <Lentes
            glassColor={getLentesGlassColor(pageSection)}
            scale={0.0225}
          />
        </group>
        {/**
         * SCENE LIGHTS
         */}
        <ambientLight />
        <directionalLight
          position={setLightCoords(womanPose)}
          intensity={getDirectionalLightValues(pageSection)}
        />
        {/**
         * POSTPROCESSING EFFECTS
         */}
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
          <Noise opacity={0.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
