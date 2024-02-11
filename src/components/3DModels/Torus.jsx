import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Torus() {
  const ref = useRef();

  return (
    <mesh ref={ref} scale={0.1} position={[0.27, 1, -1.5]}>
      <torusGeometry args={[11, 4, 10, 48]} />
      <meshToonMaterial color={"orange"} />
    </mesh>
  );
}
