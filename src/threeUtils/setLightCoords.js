export default function setLightCoords(pos) {
  switch (pos) {
    case "Pose_1": {
      return [-5, 3, -2];
    }
    default: {
      return [2, 3, 2];
    }
  }
}
