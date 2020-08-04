import { Component, h, State, Event } from '@stencil/core';
export class MobenButton {
    constructor() {
        this.status = false;
        this.statusHandler = () => {
            this.status = !this.status;
            this.bloublou.emit(this.status);
        };
    }
    render() {
        return (h("button", { onClick: this.statusHandler }, "Button"));
    }
    static get is() { return "moben-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["moben-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["moben-button.css"]
    }; }
    static get states() { return {
        "status": {}
    }; }
    static get events() { return [{
            "method": "bloublou",
            "name": "bloublou",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
