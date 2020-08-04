import { Component, Element, h } from "@stencil/core";
export class AnimationTest {
    render() {
        return h("div", { class: "nice_anim" });
    }
    static get is() { return "animation-test"; }
    static get originalStyleUrls() { return {
        "$": ["animation-test.css"]
    }; }
    static get styleUrls() { return {
        "$": ["animation-test.css"]
    }; }
    static get elementRef() { return "el"; }
}
