export const getSceneBackgroundColor = (section) => {
  switch (section) {
    case "home":
      return 0x35daec;

    case "about":
      return 0x0a0824;

    default:
      return "white";
  }
};

export const getDirectionalLightValues = (section) => {
  switch (section) {
    case "home":
      return 0.4;

    case "about":
      return 0;

    default:
      return 0.4;
  }
};

export const getWomanShaderColor = (section) => {
  switch (section) {
    case "home":
      return { red: 170, blue: 170, green: 0 };

    case "about":
      return { red: 0, blue: 0.1, green: 0.0 };

    default:
      return { red: 170, blue: 170, green: 0 };
  }
};

export const getLentesGlassColor = (section) => {
  switch (section) {
    case "home":
      return 0x0a0c37ff;

    case "about":
      return "black";

    default:
      return 0x0a0c37ff;
  }
};

export const getBallsNumber = (section) => {
  switch (section) {
    case "home":
      return 66;

    case "about":
      return 0;

    default:
      return 66;
  }
};
