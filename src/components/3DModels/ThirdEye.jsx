import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Thirdeye() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
  });

  return (
    <mesh
      ref={ref}
      scale={0.12}
      position={[0.7, 0.53, 0.65]}
      rotation={[0, 0, 1]}
    >
      <tetrahedronGeometry args={[1.1]} />
      <meshToonMaterial color={0xff9900} />
    </mesh>
  );
}
