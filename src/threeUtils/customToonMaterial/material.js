import { MeshToonMaterial, ShaderLib } from "three";

import merge from "lodash.merge";

import vert from "./vert";
import frag from "./frag";

export default class CustomToonMaterial extends MeshToonMaterial {
  constructor(shaderColor = {}, uniforms = {}) {
    super();

    const isShaderDefault = Object.keys(shaderColor).length === 0;

    this.uniforms = merge(
      {
        time: {
          value: 0,
        },
        threshold: {
          value: 0.7,
        },
      },
      ShaderLib.phong.uniforms,
      uniforms
    );

    this.vertexShader = vert;
    this.setShaderColor(
      isShaderDefault
        ? {
            red: 0.31,
            blue: 0.329,
            green: 0.867,
          }
        : { ...shaderColor }
    );

    this.type = "ShaderMaterial";
  }

  setShaderColor(props) {
    this.fragmentShader = frag(props);
  }
}
