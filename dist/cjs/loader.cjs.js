'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1809432.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return index.patchEsm().then(() => {
  return index.bootstrapLazy([["mr-card_3.cjs",[[4,"mr-card",{"data":[1],"anchor":[4],"movable":[4]}],[1,"x-counter",{"_value":[32]}],[4,"mr-tooltip",{"text":[1],"shortcut":[1],"position":[1]}]]],["mr-profil-button.cjs",[[1,"mr-profil-button"]]],["mr-simple-input.cjs",[[0,"mr-simple-input"]]],["mr-little-button.cjs",[[4,"mr-little-button",{"anchor":[4]},[[9,"resize","handleResize"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
