import { a as patchEsm, b as bootstrapLazy } from './index-80c1fa74.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["mr-little-button_2",[[1,"mr-profil-button"],[1,"mr-little-button"]]]], options);
  });
};

export { defineCustomElements };
