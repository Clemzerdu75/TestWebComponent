'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1809432.js');

const mrCardCss = ":host{display:block}";

class MrCard {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
}
MrCard.style = mrCardCss;

exports.mr_card = MrCard;
