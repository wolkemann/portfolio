import { WOMAN_POSES } from "../utils/constants";

export const setSceneCoords = (pos) => {
  switch (pos) {
    case WOMAN_POSES.DEFAULT_POSE: {
      return { position: [0, 0, 0], rotation: [0, -1.55, 0] };
    }
    case WOMAN_POSES.ABOUT_POSE: {
      return { position: [-0.4, 0, 0], rotation: [0, -5.55, 0] };
    }
    case WOMAN_POSES.HOME_QUOTE_POSE: {
      return { position: [0, 0.72, 0], rotation: [0, 3.32, 0] };
    }
    case WOMAN_POSES.SIDEBAR_PROJECTS_POSE: {
      return { position: [0.35, 0, 0], rotation: [0, -0.8, 0] };
    }
    case WOMAN_POSES.CONTACTS_POSE: {
      return { position: [0.2, -0.1, 3], rotation: [-1, 1, 1] };
    }
    case "Pose_5": {
      return { position: [0, 0.1, 0], rotation: [0, 0, 0] };
    }
    default: {
      return { position: [0, 0, 0], rotation: [0, 0, 0] };
    }
  }
};
