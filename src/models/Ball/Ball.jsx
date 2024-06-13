import { Float, Outlines } from "@react-three/drei";
import { useMemo, useState } from "react";
import * as THREE from "three";
import CustomToonMaterial from "../../threeUtils/customToonMaterial/material";
import useWindowSize from "../../hooks/useWindowSize";
import { MOBILE_BREAKPOINT } from "../../utils/constants";

function Ball({isMobile = false}) {
  const [speed] = useState(() => 0.1 + Math.random() / 10);
  const position = useMemo(() => {
    const z = -0.2 - Math.random();

    return [THREE.MathUtils.randFloatSpread(isMobile? 0.3 : 2), 0, z];
  }, [isMobile]);

  const scale = useMemo(() => Math.random() / 22, []);

  return (
    <Float
      position={position}
      speed={speed}
      rotationIntensity={30}
      floatIntensity={3}
      dispose={null}
    >
      <mesh
        scale={scale}
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
  const { width } = useWindowSize();

  const isMobile = useMemo(() => (width <= MOBILE_BREAKPOINT), [width]);

  return Array.from({ length: isMobile? 10 : 66 }, (_, i) => <Ball key={i} isMobile={isMobile} />);
}
