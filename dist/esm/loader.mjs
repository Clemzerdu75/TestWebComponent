import { a as patchEsm, b as bootstrapLazy } from './index-d30830d6.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["moben-button_5",[[1,"moben-list",{"name":[1],"arrayData":[32]}],[1,"moben-button",{"status":[32]}],[1,"moben-field",{"type":[1],"name":[1],"placeholder":[1],"inputValue":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"moben-card"]]]], options);
});

export { defineCustomElements };
