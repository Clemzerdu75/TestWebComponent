import { a as patchEsm, b as bootstrapLazy } from './index-ab602a57.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["mr-profil-button", [[1, "mr-profil-button"]]], ["mr-card_2", [[4, "mr-card", { "data": [1], "anchor": [4] }], [0, "mr-simple-input", { "isError": [16], "name": [1], "placeholder": [1], "type": [1], "isActive": [32], "isDisable": [32], "rawValue": [32], "value": [32] }]]], ["x-counter", [[1, "x-counter", { "_value": [32] }]]], ["mr-little-button_2", [[4, "mr-little-button", { "anchor": [4] }, [[9, "resize", "handleResize"]]], [4, "mr-tooltip", { "text": [1], "shortcut": [1], "position": [1] }]]]], options);
    });
};
export { defineCustomElements };
