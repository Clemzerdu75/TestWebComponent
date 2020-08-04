import { Component, h } from "@stencil/core";
export class MrLittleButton {
    render() {
        return (h("div", { class: "Wrapper" },
            h("slot", null)));
    }
    static get is() { return "mr-little-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["mr-little-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["mr-little-button.css"]
    }; }
}
