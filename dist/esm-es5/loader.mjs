import { a as patchEsm, b as bootstrapLazy } from './index-76abd15f.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["mr-card", [[1, "mr-card"]]], ["mr-little-button_3", [[1, "mr-profil-button"], [4, "mr-tooltip", { "text": [1], "shortcut": [1] }], [4, "mr-little-button", { "anchor": [4] }, [[9, "resize", "handleResize"]]]]]], options);
    });
};
export { defineCustomElements };
