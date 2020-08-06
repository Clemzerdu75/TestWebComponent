'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4efe92.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return index.patchEsm().then(() => {
  return index.bootstrapLazy([["mr-little-button_2.cjs",[[1,"mr-profil-button"],[4,"mr-little-button",{"anchor":[4]},[[9,"resize","handleResize"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
