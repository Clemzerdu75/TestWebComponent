'use strict';

const index = require('./index-e89bd670.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["moben-list.cjs",[[1,"moben-list",{"name":[1],"arrayData":[32]}]]],["animation-test.cjs",[[0,"animation-test"]]],["moben-button.cjs",[[1,"moben-button",{"status":[32]}]]],["moben-field.cjs",[[1,"moben-field",{"type":[1],"name":[1],"placeholder":[1],"inputValue":[32]}]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["moben-card.cjs",[[1,"moben-card"]]]], options);
});
