import React, { useRef, Suspense } from "react";

import { Float, Stars, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import RomanStatue from "../3DModels/RomanStatue";
import { Bloom, EffectComposer, GodRays } from "@react-three/postprocessing";

import { BlendFunction, Resizer, KernelSize } from "postprocessing";

const sceneStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -999,
};

export default function VaporwaveScene(props) {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  // 0xff00ff
  // #df00df
  return (
    <div style={sceneStyle}>
      <Canvas camera={{ position: [0, -9, 50], fov: 40 }}>
        <group>
          <RomanStatue
            position={[60, -48, -100]}
            rotation={[-1.5, 0, 0]}
            scale={5}
            shaderColor={0x5cecff}
            floatSpeed={1.5}
            floatRotation={-0.3}
            floatIntensity={1.5}
            floatingRange={[1, 1]}
          />
          <Model />
          <Float
            speed={1.7} // Animation speed, defaults to 1
            rotationIntensity={-1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <directionalLight position={[90, -9, 20]} />
          </Float>

          <ambientLight intensity={0.5} />
        </group>
      </Canvas>
    </div>
  );
}
function Model({}) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/city/city.glb");

  const sunRef = useRef();
  const starsRef = useRef();

  return (
    <group
      ref={group}
      scale={0.001}
      position={[10, 0, -100]}
      rotation={[0, 2, 0]}
      dispose={null}
    >
      {/*<Stars
        ref={starsRef}
        radius={80000}
        depth={2000}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
  />*/}

      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-122253.52, -21688.86, -37050.52]}>
          <mesh geometry={nodes.mesh_0.geometry} castShadow receiveShadow>
            <meshToonMaterial color={0xff00ff} />
          </mesh>
          <mesh
            material={materials.Scene_Root}
            geometry={nodes.mesh_1.geometry}
            castShadow
            receiveShadow
          >
            <meshToonMaterial color={0xb700b7} />
          </mesh>
          <mesh
            material={materials.Scene_Root}
            geometry={nodes.mesh_2.geometry}
            castShadow
            receiveShadow
          >
            <meshToonMaterial color={0xff00ff} />
          </mesh>
          <mesh
            material={materials.Scene_Root}
            geometry={nodes.mesh_3.geometry}
            castShadow
            receiveShadow
          >
            <meshToonMaterial color={0xdf00df} />
          </mesh>
        </group>
        <mesh
          ref={sunRef}
          receiveShadow
          castShadow
          position={[100000, -200000, 70000]}
        >
          <sphereGeometry args={[80000, 32, 32]} />
          <meshBasicMaterial attach="material" color="#ff9900" />
        </mesh>
        {sunRef.current && (
          <EffectComposer>
            {/*<Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
        />*/}
            <GodRays
              sun={sunRef}
              blendFunction={BlendFunction.Screen}
              samples={40}
              density={0.12}
              decay={0.97}
              weight={0.6}
              exposure={0.5}
              clampMax={1}
              width={Resizer.AUTO_SIZE}
              height={Resizer.AUTO_SIZE}
              kernelSize={KernelSize.SMALL}
            />
          </EffectComposer>
        )}
      </group>
    </group>
  );
}
