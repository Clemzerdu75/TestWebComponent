import { p as patchBrowser, b as bootstrapLazy } from './index-c9ff436a.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["moben-list",[[1,"moben-list",{"name":[1],"arrayData":[32]}]]],["animation-test",[[0,"animation-test"]]],["moben-button",[[1,"moben-button",{"status":[32]}]]],["moben-field",[[1,"moben-field",{"type":[1],"name":[1],"placeholder":[1],"inputValue":[32]}]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["moben-card",[[1,"moben-card"]]]], options);
});
