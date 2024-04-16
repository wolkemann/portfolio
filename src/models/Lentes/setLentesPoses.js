export const setLentesPoses = (pose, nodes) => {
  switch (pose) {
    case "initialPose": {
      return {
        position: [0, 0.155, 0.063],
        rotation: [0, 0, 0],
      };
    }
    case "gg": {
      return { position: [0, 0.179, 0.018], rotation: [-0.4, 0, 0] };
    }
  }
};
