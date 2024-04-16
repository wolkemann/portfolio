import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function TrackingLight(props) {
  const light = useRef();
  useFrame((state) => {
    if (
      light.current.position.x > -0.4 &&
      state.pointer.x > -0.4 &&
      light.current.position.x < 0.5 &&
      state.pointer.x < 0.5
    ) {
      light.current.position.x = state.pointer.x;
    }

    if (light.current.position.y > 0.87 && state.pointer.y > 0.87) {
      light.current.position.y = state.pointer.y;
    }
  });

  return <directionalLight ref={light} {...props} />;
}
