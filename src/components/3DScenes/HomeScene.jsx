import { Canvas } from "@react-three/fiber";
import RomanStatue from "../3DModels/RomanStatue";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export default function HomeScene() {
  return (
    <div className="canvasScreen">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.9], zoom: 1.8 }}>
        <RomanStatue
          rotation={[-1.5, -0.1, -0.5]}
          position={[0, -6.5, 0]}
          scale={1.5}
        />

        <directionalLight
          rotation={[-1.9, -0.6, -0.5]}
          position={[0, -6.5, 0]}
        />

        <ambientLight />
      </Canvas>
    </div>
  );
}
