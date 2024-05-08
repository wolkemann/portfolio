import { EffectComposer, Noise } from "@react-three/postprocessing";
import Background from "../models/Background/Background";
import { Woman } from "../models/Woman/Woman";
import { Lentes } from "../models/Lentes/Lentes";

export default function AboutScene() {
  return (
    <>
      <Background color={0x0a0824} position={[0, 0, -5]} />

      <group>
        <Woman shaderColor={{red: 0, blue: 0.1, green: 0.0}} position={[0, -0.95, 0.0]} />
        <Lentes glassColor={'pink'} scale={0.0225} />
      </group>

      <spotLight angle={0.1} distance={1} penumbra={0.5} intensity={0.5} />

      <EffectComposer>
        <Noise opacity={0.05} />
      </EffectComposer>
    </>
  );
}
