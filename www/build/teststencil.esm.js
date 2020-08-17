import { p as patchBrowser, b as bootstrapLazy } from './index-d277bb3f.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["mr-profil-button",[[1,"mr-profil-button"]]],["mr-card",[[4,"mr-card",{"data":[1],"anchor":[4],"movable":[4]}]]],["mr-simple-input",[[0,"mr-simple-input"]]],["x-counter",[[1,"x-counter",{"_value":[32]}]]],["mr-little-button",[[4,"mr-little-button",{"anchor":[4]},[[9,"resize","handleResize"]]]]],["mr-tooltip",[[4,"mr-tooltip",{"text":[1],"shortcut":[1],"position":[1]}]]]], options);
});
