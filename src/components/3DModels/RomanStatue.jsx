import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
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
  floatSpeed,
  floatRotation,
  floatIntensity,
  floatRange,
}) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/rhetorician/scene.gltf");

  const modelRotation = rotation || [0, 0, 0];
  const modelPosition = position || [0, 0, 0];
  const modelScale = scale || 1;

  const modelFloatSpeed = floatSpeed || 0;
  const modelFloatRotation = floatRotation || 0;
  const modelFloatIntensity = floatIntensity || 0;
  const modelFloatRange = floatRange || 0;

  const ModelShaderColor = shaderColor || 0xff00ff;

  return (
    <Float
      scale={modelScale}
      rotation={[modelRotation[0], modelRotation[1], modelRotation[2]]}
      position={[modelPosition[0], modelPosition[1], modelPosition[2]]}
      speed={modelFloatSpeed} // Animation speed, defaults to 1 - - - - 1.5
      rotationIntensity={modelFloatRotation} // XYZ rotation intensity, defaults to 1 ------ -0.3
      floatIntensity={modelFloatIntensity} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1 --- 1.5
      floatingRange={modelFloatRange} // Range of y-axis values the object will float within, defaults to [-0.1,0.1] [1, 1]
    >
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.mentor_roman_retopo_0.geometry}
        scale={modelScale}
      >
        <meshToonMaterial color={ModelShaderColor} />
      </mesh>
    </Float>
  );
}

// 0xff00ff
