import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

export default function TrackingLight({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);

  useFrame((state) => {
    light.current.position.x = state.pointer.x * 1.5;
    light.current.position.y = state.pointer.y;
  });

  return (
    <spotLight
      ref={light}
      intensity={10}
      position={[0, 0, 6]}
      angle={0.05}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      castShadow
      distance={14}
      {...props}
    />
  );
}
