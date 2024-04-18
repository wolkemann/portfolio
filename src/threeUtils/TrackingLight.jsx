import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function TrackingLight(props) {
  const light = useRef();
  useFrame((state) => {
    light.current.position.x = state.pointer.x * 1.5;
    light.current.position.y = state.pointer.y;
  });

  return (
    <spotLight
      ref={light}
      intensity={20}
      position={[0, 0, 6]}
      angle={0.05}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      castShadow
      {...props}
    />
  );
}
