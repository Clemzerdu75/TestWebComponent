'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e89bd670.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return index.patchEsm().then(() => {
  return index.bootstrapLazy([["moben-list.cjs",[[1,"moben-list",{"name":[1],"arrayData":[32]}]]],["animation-test.cjs",[[0,"animation-test"]]],["moben-button.cjs",[[1,"moben-button",{"status":[32]}]]],["moben-field.cjs",[[1,"moben-field",{"type":[1],"name":[1],"placeholder":[1],"inputValue":[32]}]]],["mr-simple-button.cjs",[[1,"mr-simple-button"]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["moben-card.cjs",[[1,"moben-card"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
