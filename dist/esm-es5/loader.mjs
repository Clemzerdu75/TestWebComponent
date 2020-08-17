import { a as patchEsm, b as bootstrapLazy } from './index-76abd15f.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["mr-card_3", [[4, "mr-card", { "data": [1], "anchor": [4], "movable": [4] }], [1, "x-counter", { "_value": [32] }], [4, "mr-tooltip", { "text": [1], "shortcut": [1], "position": [1] }]]], ["mr-profil-button", [[1, "mr-profil-button"]]], ["mr-simple-input", [[0, "mr-simple-input"]]], ["mr-little-button", [[4, "mr-little-button", { "anchor": [4] }, [[9, "resize", "handleResize"]]]]]], options);
    });
};
export { defineCustomElements };
