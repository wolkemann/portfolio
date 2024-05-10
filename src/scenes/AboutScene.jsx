import { ChromaticAberration, EffectComposer, Glitch, Noise } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import Background from "../models/Background/Background";
import { Woman } from "../models/Woman/Woman";
import { Lentes } from "../models/Lentes/Lentes";
import { usePortfolio } from "../context/PortfolioContext";

export default function AboutScene() {
  const { poseChanging } = usePortfolio();
  return (
    <>
      <Background color={0x0a0824} position={[0, 0, -5]} />

      <group>
        <Woman
          shaderColor={{ red: 0, blue: 0.1, green: 0.0 }}
          position={[0, -0.95, 0.0]}
        />
        <Lentes glassColor={"black"} scale={0.0225} />
      </group>

      <ambientLight intensity={5} />

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
        <Noise opacity={0.05} />
      </EffectComposer>
    </>
  );
}
