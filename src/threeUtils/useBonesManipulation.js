import { useThree } from "@react-three/fiber";
import { Quaternion, Euler } from "three";

// Utility function to set bone rotation
const setBoneRotation = (nodes, boneName, rotation) => {
  const bone = nodes[boneName];
  if (!bone) return;

  const euler = new Euler(rotation.x, rotation.y, rotation.z);
  bone.rotation.copy(euler);
};

// Utility function to reset bone rotation
const resetBoneRotation = (nodes, boneName, originalRotation) => {
  setBoneRotation(nodes, boneName, originalRotation);
};

export const useBonesManipulation = () => {
  const { scene } = useThree();
  const originalRotations = new Map();

  // Remember the original rotations of the bones
  const rememberOriginalRotations = (bonesNames) => {
    bonesNames.forEach((name) => {
      const bone = scene.getObjectByName(name);
      if (bone) {
        originalRotations.set(name, bone.quaternion.clone());
      }
    });
  };

  // Apply rotations to a list of bones
  const applyRotations = (rotations) => {
    rotations.forEach((rotation, boneName) => {
      setBoneRotation(scene.__r3f.objects.nodes, boneName, rotation);
    });
  };

  // Reset all modified bones to their original rotations
  const resetAllBones = () => {
    originalRotations.forEach((quaternion, name) => {
      const bone = scene.getObjectByName(name);
      if (bone) {
        bone.quaternion.copy(quaternion);
      }
    });
  };

  return { rememberOriginalRotations, applyRotations, resetAllBones };
};
