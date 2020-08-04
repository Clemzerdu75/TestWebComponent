import { a as patchEsm, b as bootstrapLazy } from './index-a6c9c68c.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["moben-list", [[1, "moben-list", { "name": [1], "arrayData": [32] }]]], ["animation-test", [[0, "animation-test"]]], ["moben-button", [[1, "moben-button", { "status": [32] }]]], ["moben-field", [[1, "moben-field", { "type": [1], "name": [1], "placeholder": [1], "inputValue": [32] }]]], ["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]], ["moben-card", [[1, "moben-card"]]]], options);
    });
};
export { defineCustomElements };
