import { EffectComposer, Noise } from "@react-three/postprocessing";
import Background from "../models/Background/Background";
import { OrbitControls } from "@react-three/drei";

export default function AboutScene() {
  return (
    <>
      <Background color={0x0a0824} position={[0, 0, -5]} />

      <ambientLight />

      <EffectComposer>
        <Noise opacity={0.05} />
      </EffectComposer>
    </>
  );
}
