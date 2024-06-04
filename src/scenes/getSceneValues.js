import { SECTIONS } from "../utils/constants";

export const getSceneBackgroundColor = (section) => {
  switch (section) {
    case SECTIONS.HOME:
      return 0x35daec;

    case SECTIONS.ABOUT:
      return 0x0a0824;

    case SECTIONS.PROJECTS:
      return 0xfab67f;

    default:
      return "white";
  }
};

export const getDirectionalLightValues = (section) => {
  switch (section) {
    case SECTIONS.HOME:
      return 0.4;

    case SECTIONS.ABOUT:
      return 0;

    default:
      return 0.4;
  }
};

export const getWomanShaderColor = (section) => {
  switch (section) {
    case SECTIONS.HOME:
      return { red: 1.7, green: 0, blue: 1.7 };

    case SECTIONS.ABOUT:
      return { red: 0, green: 0, blue: 0.1 };

    case SECTIONS.PROJECTS:
      return { red: 1.7, green: 0, blue: 1.7 };

    default:
      return { red: 170, green: 0, blue: 170 };
  }
};

export const getLentesGlassColor = (section) => {
  switch (section) {
    case SECTIONS.HOME:
      return 0x0a0c37ff;

    case SECTIONS.ABOUT:
      return "black";

    default:
      return 0x0a0c37ff;
  }
};

export const getBallsNumber = (section) => {
  switch (section) {
    case SECTIONS.HOME:
      return 66;

    case SECTIONS.ABOUT:
      return 0;

    default:
      return 66;
  }
};
