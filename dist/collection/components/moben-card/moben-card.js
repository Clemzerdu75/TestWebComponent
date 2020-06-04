import { Component, h } from '@stencil/core';
export class MobenCard {
    render() {
        return (h("div", { class: "Wrapper" },
            h("slot", null)));
    }
    static get is() { return "moben-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["moben-card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["moben-card.css"]
    }; }
}
