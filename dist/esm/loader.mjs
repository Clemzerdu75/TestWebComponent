import { a as patchEsm, b as bootstrapLazy } from './index-bb11a4d1.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["mr-little-button_2",[[1,"mr-profil-button"],[4,"mr-little-button",{"anchor":[4]},[[9,"resize","handleResize"]]]]]], options);
  });
};

export { defineCustomElements };
