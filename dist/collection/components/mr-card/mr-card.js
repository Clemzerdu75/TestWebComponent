import { Component, Host, h, Prop } from "@stencil/core";
export class MrCard {
    constructor() {
        this.anchor = true;
    }
    render() {
        return (h(Host, { class: `MR-card-wrapper-WC ${this.anchor ? "anchor" : ""}` },
            h("slot", null)));
    }
    static get is() { return "mr-card"; }
    static get originalStyleUrls() { return {
        "$": ["mr-card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["mr-card.css"]
    }; }
    static get properties() { return {
        "data": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "data",
            "reflect": false
        },
        "anchor": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "anchor",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
}
