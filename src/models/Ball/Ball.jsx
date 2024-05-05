import { Float, Outlines } from "@react-three/drei";
import { useMemo, useState } from "react";
import * as THREE from "three";
import CustomToonMaterial from "../../threeUtils/customToonMaterial/material";

function Ball() {
  const [speed] = useState(() => 0.1 + Math.random() / 10);
  const position = useMemo(() => {
    const z = -0.2 - Math.random();

    return [THREE.MathUtils.randFloatSpread(2), 0, z];
  }, []);

  return (
    <Float
      position={position}
      speed={speed}
      rotationIntensity={30}
      floatIntensity={3}
      dispose={null}
    >
      <mesh
        scale={Math.random() / 22}
        material={new CustomToonMaterial({ red: 0, blue: 250, green: 0 })}
        castShadow
        className="mouse-interact"
      >
        <sphereGeometry />
        <Outlines thickness={2.5} color="black" screenspace />
      </mesh>
    </Float>
  );
}

export default function Balls() {
  return Array.from({ length: 66 }, (_, i) => <Ball key={i} />);
}