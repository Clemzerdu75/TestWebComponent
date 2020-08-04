import { a as patchEsm, b as bootstrapLazy } from './index-e6727c95.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["mr-little-button_2",[[0,"mr-profil-button"],[1,"mr-little-button"]]]], options);
  });
};

export { defineCustomElements };
