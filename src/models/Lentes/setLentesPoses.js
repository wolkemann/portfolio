export const setLentesPoses = (pose, nodes) => {
  switch (pose) {
    case "Pose_0": {
      return {
        position: [0, 0.155, 0.063],
        rotation: [0, 0, 0],
      };
    }
    case "Pose_1": {
      return { position: [0, 0.179, 0.018], rotation: [-0.4, 0, 0] };
    }
    case "Pose_2": {
      return { position: [-0.08, 0.124, 0.132], rotation: [0.3, -0.8, 0.05] };
    }
    case "Pose_5": {
      return { position: [0, -0.065, 0.371], rotation: [0.32, 0, 0] };
    }
    default: {
      return {
        position: [0, 0.155, 0.063],
        rotation: [0, 0, 0],
      };
    }
  }
};
