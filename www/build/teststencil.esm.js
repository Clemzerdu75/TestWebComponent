import { p as patchBrowser, b as bootstrapLazy } from './index-72d4129f.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["mr-card",[[4,"mr-card",{"data":[1],"anchor":[4]}]]],["mr-little-button",[[4,"mr-little-button",{"anchor":[4]},[[9,"resize","handleResize"]]]]],["mr-profil-button",[[1,"mr-profil-button"]]],["mr-simple-input",[[0,"mr-simple-input",{"isError":[16],"isActive":[32],"isDisable":[32],"rawValue":[32],"value":[32]}]]],["x-counter",[[1,"x-counter",{"_value":[32]}]]],["mr-tooltip",[[4,"mr-tooltip",{"text":[1],"shortcut":[1],"position":[1]}]]]], options);
});
