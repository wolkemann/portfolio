export const setSceneCoords = (pos) => {
  switch (pos) {
    case "Pose_0": {
      return { position: [0, 0, 0], rotation: [0, -1.55, 0] };
    }
    case "Pose_1": {
      return { position: [0, 0, 0], rotation: [0, -5.55, 0] };
    }
    case "Pose_3": {
      return { position: [0, 0.72, 0], rotation: [0, 3.32, 0] };
    }
    default: {
      return { position: [0, 0, 0], rotation: [0, 0, 0] };
    }
  }
};
