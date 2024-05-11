import { MeshToonMaterial, ShaderLib } from "three";

import merge from "lodash.merge";

import vert from "./vert";
import frag from "./frag";

export default class CustomToonMaterial extends MeshToonMaterial {
  constructor(shaderColor = {}, uniforms = {}) {
    super();

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
    this.setShaderColor({ ...shaderColor });

    this.type = "ShaderMaterial";
  }

  setShaderColor(props) {
    this.fragmentShader = frag(props);
  }
}
