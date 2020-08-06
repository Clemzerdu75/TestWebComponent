import { p as patchBrowser, b as bootstrapLazy } from './index-ebcebcac.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["mr-little-button",[[1,"mr-little-button",{"anchor":[4]},[[9,"resize","handleResize"]]]]],["mr-profil-button",[[1,"mr-profil-button"]]]], options);
});
