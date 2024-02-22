import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

/*
  rotation={[-1.55, 0, -1]}
  position={[1.5, -2.7, 0]}
*/

export default function RomanStatue({
  rotation,
  position,
  scale,
  shaderColor,
}) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/rhetorician/scene.gltf");

  const modelRotation = rotation || [0, 0, 0];
  const modelPosition = position || [0, 0, 0];
  const modelScale = scale || 1;

  const ModelShaderColor = shaderColor || 0xff00ff;

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      geometry={nodes.mentor_roman_retopo_0.geometry}
      rotation={[modelRotation[0], modelRotation[1], modelRotation[2]]}
      position={[modelPosition[0], modelPosition[1], modelPosition[2]]}
      scale={modelScale}
    >
      <meshToonMaterial color={ModelShaderColor} />
    </mesh>
  );
}

// 0xff00ff
