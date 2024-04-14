import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function TrackingLight(props) {
  const light = useRef();
  useFrame((state) => {
    light.current.position.x = state.pointer.x * 1.5;
    light.current.position.y = state.pointer.y * 1.5;
  });
  return <directionalLight ref={light} {...props} />;
}
