import { a as patchEsm, b as bootstrapLazy } from './index-80c1fa74.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["mr-little-button_2", [[1, "mr-profil-button"], [1, "mr-little-button"]]]], options);
    });
};
export { defineCustomElements };
