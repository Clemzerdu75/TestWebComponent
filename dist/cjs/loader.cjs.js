'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0ae6b6ef.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["moben-button_5.cjs",[[1,"moben-list",{"name":[1],"arrayData":[32]}],[1,"moben-button",{"status":[32]}],[1,"moben-field",{"type":[1],"name":[1],"placeholder":[1],"inputValue":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"moben-card"]]]], options);
});

exports.defineCustomElements = defineCustomElements;
