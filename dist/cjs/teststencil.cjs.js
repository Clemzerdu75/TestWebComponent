'use strict';

const index = require('./index-d2e3fa7b.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["mr-little-button_2.cjs",[[1,"mr-profil-button"],[1,"mr-little-button"]]]], options);
});
