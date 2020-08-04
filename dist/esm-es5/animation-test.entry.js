import { r as registerInstance, h, g as getElement } from './index-a6c9c68c.js';
var animationTestCss = ":host{display:block}";
var AnimationTest = /** @class */ (function () {
    function AnimationTest(hostRef) {
        registerInstance(this, hostRef);
    }
    AnimationTest.prototype.render = function () {
        return h("div", { class: "nice_anim" });
    };
    Object.defineProperty(AnimationTest.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return AnimationTest;
}());
AnimationTest.style = animationTestCss;
export { AnimationTest as animation_test };
