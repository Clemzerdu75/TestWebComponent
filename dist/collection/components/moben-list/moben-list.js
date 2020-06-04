import { Component, h, Prop, Watch, State } from '@stencil/core';
export class MobenList {
    constructor() {
        this.name = "";
    }
    componentWillLoad() {
        this.parseMyArrayProp(this.name);
    }
    parseMyArrayProp(newValue) {
        if (newValue)
            this.arrayData = JSON.parse(newValue);
    }
    render() {
        return (h("div", { class: "Wrapper" }, this.arrayData.map(el => (h("moben-card", null,
            h("h1", null, el.name),
            h("div", { class: "Image-Wrapper" }),
            h("h3", null, el.value))))));
    }
    static get is() { return "moben-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["moben-list.css"]
    }; }
    static get styleUrls() { return {
        "$": ["moben-list.css"]
    }; }
    static get properties() { return {
        "name": {
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
            "attribute": "name",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
    static get states() { return {
        "arrayData": {}
    }; }
    static get watchers() { return [{
            "propName": "name",
            "methodName": "parseMyArrayProp"
        }]; }
}
