'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d2e3fa7b.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return index.patchEsm().then(() => {
  return index.bootstrapLazy([["mr-little-button_2.cjs",[[1,"mr-profil-button"],[1,"mr-little-button"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
