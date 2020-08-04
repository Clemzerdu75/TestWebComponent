'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e89bd670.js');

const myComponentCss = ":host{display:block}h1{font-family:'Helvetica Neue', sans-serif;font-size:8vw;color:rgba(0,0,0,.8);margin:0 auto;text-align:center}";

class MyComponent {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return index.h("h1", null, "Web Component");
    }
}
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
