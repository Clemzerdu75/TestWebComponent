'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1809432.js');

const mrSimpleInputCss = ":host{display:block}";

class MrSimpleInput {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return index.h("input", { placeholder: "First name", name: "firstName" });
    }
}
MrSimpleInput.style = mrSimpleInputCss;

exports.mr_simple_input = MrSimpleInput;
