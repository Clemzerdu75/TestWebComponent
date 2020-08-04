import { Component, h } from "@stencil/core";
/* Simple as f**k */
export class MrSimpleButton {
    render() {
        return (h("div", { class: "Wrapper" },
            h("slot", null)));
    }
    static get is() { return "mr-simple-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["mr-simple-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["mr-simple-button.css"]
    }; }
}
