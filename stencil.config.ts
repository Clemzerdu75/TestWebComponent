import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { angularOutputTarget, ValueAccessorConfig } from "@stencil/angular-output-target";

export const config: Config = {
  plugins: [sass()],
  namespace: "teststencil",
  taskQueue: "async",
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: "component-library",
      directivesProxyFile: "../component-library-angular/src/directives/proxies.ts",
    }),
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
