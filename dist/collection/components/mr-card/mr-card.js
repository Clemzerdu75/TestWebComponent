import { Component, Host, h, Prop } from "@stencil/core";
export class MrCard {
    constructor() {
        this.anchor = true;
        this.movable = false;
    }
    render() {
        return (h(Host, { ref: (el) => (this.wrapper = el), class: `MR-card-wrapper-WC ${this.anchor ? "anchor" : ""}`, draggable: this.movable ? "true" : "false" },
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
        },
        "movable": {
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
            "attribute": "movable",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
