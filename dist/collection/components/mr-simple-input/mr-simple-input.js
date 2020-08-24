import { Component, h, Prop, State, Event, Watch, Host } from "@stencil/core";
export class MrSimpleInput {
    constructor() {
        this.isActive = false;
        this.isDisable = false;
        this.isError = { status: false, message: "", priority: false };
        this.type = "text";
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    handleError(newValue) {
        if (newValue.status) {
            if (this.isActive)
                this.handleFocus();
            else
                this.handleBlur();
        }
        else {
        }
    }
    handleFocus() {
        this.isActive = true;
        if (this.textInput.value.length && !this.isError.status) {
            this.labelInput.style.color = "#42c19a";
        }
        else {
            this.labelInput.style.color = "rgba(0,0,0,0.8)";
        }
    }
    handleBlur() {
        this.isActive = false;
        if (this.textInput.value.length && !this.isError.status) {
            this.labelInput.style.color = "#42c19a";
        }
        else if (this.textInput.value.length && this.isError.status) {
            this.isError.priority = true;
        }
        else {
            this.labelInput.style.color = "rgba(0,0,0,0.8)";
        }
    }
    handleChange(event) {
        this.value = event.target.value;
        this.inputChange.emit({ name: event.target.name, value: this.value });
    }
    render() {
        return (h(Host, { class: "MR-input-global-wrapper-WC" },
            h("div", { class: `MR-input-wrapper-WC ${this.isActive && !this.isError.status ? "isFocus" : ""}
          ${this.isError.status && this.isError.priority ?
                    "isError" :
                    this.isError.status && !this.isError.priority && !this.isActive ? "isError" : this.isError.status && this.isError.priority ? "isInvalid" : ""}` },
                h("label", { ref: (el) => this.labelInput = el }, this.name),
                h("input", { ref: (el) => this.textInput = el, onFocus: () => this.isActive = true, onBlur: this.handleBlur, onInput: (event) => this.handleChange(event), class: `MR-input-WC ${this.isError ? "error" : ""}`, placeholder: this.placeholder, name: this.name, type: this.type, value: this.value })),
            this.isError.message.length && this.isError.status ?
                h("p", { class: this.isError.priority ? "invalid" : "" }, this.isError.message) : null));
    }
    static get is() { return "mr-simple-input"; }
    static get originalStyleUrls() { return {
        "$": ["mr-simple-input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["mr-simple-input.css"]
    }; }
    static get properties() { return {
        "isError": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Error",
                "resolved": "Error",
                "references": {
                    "Error": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "{ status: false, message: \"\", priority: false }"
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
            "reflect": false
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
            "reflect": false
        },
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
        }
    }; }
    static get states() { return {
        "isActive": {},
        "isDisable": {},
        "rawValue": {},
        "value": {}
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
    static get watchers() { return [{
            "propName": "isError",
            "methodName": "handleError"
        }]; }
}
