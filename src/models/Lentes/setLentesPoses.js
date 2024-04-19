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
      return { position: [-0.04, 0.132, 0.08], rotation: [0.2, -0.4, 0] };
    }
    default: {
      return {
        position: [0, 0.155, 0.063],
        rotation: [0, 0, 0],
      };
    }
  }
};
