import { Component, h, Prop, Event, State } from '@stencil/core';
export class MobenInput {
    constructor() {
        this.inputValue = "";
        this.type = "text";
        this.name = "Name";
        this.placeholder = "Type your text";
        this.inputHandler = (event) => {
            this.inputValue = event.target.value;
            this.inputChange.emit({
                name: this.name,
                value: this.inputValue
            });
        };
    }
    render() {
        return (h("input", { type: this.type, name: this.name, value: this.inputValue, placeholder: this.placeholder, onChange: this.inputHandler }));
    }
    static get is() { return "moben-field"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["moben-field.css"]
    }; }
    static get styleUrls() { return {
        "$": ["moben-field.css"]
    }; }
    static get properties() { return {
        "type": {
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
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"text\""
        },
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
            "defaultValue": "\"Name\""
        },
        "placeholder": {
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
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "\"Type your text\""
        }
    }; }
    static get states() { return {
        "inputValue": {}
    }; }
    static get events() { return [{
            "method": "inputChange",
            "name": "inputChange",
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
