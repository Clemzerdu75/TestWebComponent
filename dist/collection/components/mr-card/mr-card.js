import { Component, Host, h } from '@stencil/core';
export class MrCard {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "mr-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["mr-card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["mr-card.css"]
    }; }
}
