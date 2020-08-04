import { r as registerInstance, h, g as getElement } from './index-c9ff436a.js';

const animationTestCss = ":host{display:block}";

class AnimationTest {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", { class: "nice_anim" });
    }
    get el() { return getElement(this); }
}
AnimationTest.style = animationTestCss;

export { AnimationTest as animation_test };
