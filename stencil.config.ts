import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  plugins: [sass()],
  namespace: "teststencil",
  taskQueue: "async",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [{ src: "assets", dest: "build/assets" }],
    },
    {
      type: "docs-readme",
    },
    { type: "www", copy: [{ src: "assets", dest: "build/assets" }] },
  ],
};
