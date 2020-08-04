'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e89bd670.js');

const mobenCardCss = ":host{display:block}.Wrapper{-webkit-box-shadow:20px 20px 60px #cccccc, \r\n  -20px -20px 60px #f4f4f4;box-shadow:20px 20px 60px #cccccc, \r\n  -20px -20px 60px #f4f4f4;background-color:#f4f4f4;border-radius:10px;min-width:200px;max-width:300px;width:30vw;height:30vw;min-height:200px;max-height:300px;display:-ms-flexbox;display:flex;margin:5vw;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-webkit-transition:.2s ease-out;transition:.2s ease-out}.Wrapper:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}";

class MobenCard {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "Wrapper" }, index.h("slot", null)));
    }
}
MobenCard.style = mobenCardCss;

exports.moben_card = MobenCard;
