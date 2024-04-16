export const setSceneCoords = (pos) => {
  switch (pos) {
    case "initialPose": {
      return [0, -1.55, 0];
    }
    case "gg": {
      return [0, -5.55, 0];
    }
  }
};
