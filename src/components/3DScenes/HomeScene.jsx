import { Canvas } from "@react-three/fiber";
import RomanStatue from "../3DModels/RomanStatue";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { motion } from "framer-motion-3d";
import { Float } from "@react-three/drei";

export default function HomeScene({ loaded }) {
  return (
    <div className="canvasScreen">
      <Canvas dpr={[1, 1.5]} camera={{ position: [-0.5, 0, 4.9], zoom: 1.8 }}>
        <motion.group variants={animations} animate={loaded ? "show" : ""}>
          <RomanStatue
            floatSpeed={2}
            floatIntensity={0.8}
            floatRotation={0.05}
            floatRange={[0, 0]}
            rotation={[-1.5, -0.1, -0.5]}
            position={[0, -6.5, 0]}
            scale={1.5}
          />
        </motion.group>

        <Float>
          <directionalLight
            rotation={[-1.9, -0.6, 0.5]}
            position={[5, 3.5, 2]}
          />
        </Float>

        <ambientLight />
      </Canvas>
    </div>
  );
}

const animations = {
  show: {
    x: [3, 0],
    y: [1, 0],
    transition: {
      type: "spring",
      delay: 0,
      duration: 5.5,
    },
  },
};
