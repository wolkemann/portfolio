import { SECTIONS } from "../utils/constants";

export const getSceneBackgroundColor = (section) => {
  switch (section) {
    case SECTIONS.HOME:
      return 0x35daec;

    case SECTIONS.ABOUT:
      return 0x0a0824;

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
      return { red: 170, blue: 170, green: 0 };

    case SECTIONS.ABOUT:
      return { red: 0, blue: 0.1, green: 0.0 };

    default:
      return { red: 170, blue: 170, green: 0 };
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
