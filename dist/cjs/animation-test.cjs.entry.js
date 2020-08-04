'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e89bd670.js');

const animationTestCss = ":host{display:block}";

class AnimationTest {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return index.h("div", { class: "nice_anim" });
    }
    get el() { return index.getElement(this); }
}
AnimationTest.style = animationTestCss;

exports.animation_test = AnimationTest;
