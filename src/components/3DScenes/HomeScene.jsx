import { Canvas } from "@react-three/fiber";
import RomanStatue from "../3DModels/RomanStatue";
import { motion } from "framer-motion-3d";
import { Float } from "@react-three/drei";

export default function HomeScene({ loaded }) {
  return (
    <div className="canvasScreen">
      <Canvas dpr={[1, 1.5]} camera={{ position: [-0.5, 0, 4.9], zoom: 4.2 }}>
        <motion.group
          variants={statueAnimations}
          animate={loaded ? "show" : ""}
        >
          <Float
            speed={1}
            rotationIntensity={0.2}
            floatIntensity={0.03}
            floatingRange={[0, 0.05]}
          >
            <RomanStatue
              rotation={[-1.9, -0, 0.1]}
              position={[0.9, -4.4, 0]}
              scale={1.5}
            />
          </Float>
        </motion.group>

        {
          <motion.mesh
            variants={lineAnimations}
            animate={loaded ? "show" : ""}
            position={[0.6, 0.2, -3]}
            rotation={[0, 0, 0]}
          >
            <boxGeometry args={[7, 2, 1]} />
            <meshToonMaterial color={0xff9900ff} />
          </motion.mesh>
        }

        <Float speed={0.4}>
          <directionalLight
            rotation={[-1.9, -0.6, 0.5]}
            position={[-5, 7.5, 2]}
          />
        </Float>

        <ambientLight />
      </Canvas>
    </div>
  );
}

const statueAnimations = {
  show: {
    x: [-5, 0],
    rotateY: [-4, 0],
    transition: {
      type: "spring",
      delay: 1,
      duration: 5,
    },
  },
};

const lineAnimations = {
  show: {
    x: [20, 0],
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 2.5,
    },
  },
};
