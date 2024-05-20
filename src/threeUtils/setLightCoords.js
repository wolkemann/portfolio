import { WOMAN_POSES } from "../utils/constants";

export default function setLightCoords(pos) {
  switch (pos) {
    case WOMAN_POSES.ABOUT_POSE: {
      return [-5, 3, -2];
    }
    default: {
      return [2, 3, 2];
    }
  }
}
