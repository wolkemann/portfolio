/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf --transform 
Files: scene.gltf [38.93KB] > C:\Users\ohtor\Desktop\le Fede\web-projects\portfolio\public\woman\scene-transformed.glb [374.43KB] (-862%)
Author: camilooh (https://sketchfab.com/camilooh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/womenfemale-body-base-rigged-45caea510e4b4b65bf4ef9bbb4d2045c
Title: Women/Female Body Base Rigged
*/

import React, { useEffect } from "react";
import { Outlines, useGLTF } from "@react-three/drei";
import CustomToonMaterial from "../../threeUtils/customToonMaterial/material";
import { usePortfolio } from "../../context/PortfolioContext";
import { setwomanPoses } from "./setWomanPoses";

export function Woman(props) {
  const { womanPose } = usePortfolio();
  const { nodes, materials } = useGLTF("woman/scene-transformed.glb");

  useEffect(() => {
    setwomanPoses(womanPose, nodes);
  }, [womanPose]);

  return (
    <group {...props} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        castShadow
        geometry={nodes.Object_85.geometry}
        material={new CustomToonMaterial({ red: 170, blue: 170, green: 0 })}
        skeleton={nodes.Object_85.skeleton}
        position={[0, -0.008, 0]}
        scale={0.161}
      >
        <Outlines thickness={2.5} color="black" screenspace />
      </skinnedMesh>
    </group>
  );
}

useGLTF.preload("woman/scene-transformed.glb");
