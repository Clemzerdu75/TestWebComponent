import { r as registerInstance, h, g as getElement } from './index-a6c9c68c.js';

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
