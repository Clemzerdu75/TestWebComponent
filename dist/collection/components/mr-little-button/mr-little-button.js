import { Component, h, Listen, Prop } from "@stencil/core";
/*

This component is a simple one. It's just a fully responsive and adaptive button.
There is a lifecycle method and resize event handler to get the proper size of the border

*/
export class MrLittleButton {
    constructor() {
        this.levitate = false;
    }
    /* Resize handler */
    handleResize() {
        this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f5f5f5`;
    }
    /* Set the border size when the component is mounted */
    componentDidLoad() {
        this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f5f5f5`;
    }
    render() {
        return (h("div", { class: `Wrapper ${this.levitate ? "levitate" : ""}`, ref: (el) => (this.wrapper = el) },
            h("slot", null)));
    }
    static get is() { return "mr-little-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["mr-little-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["mr-little-button.css"]
    }; }
    static get properties() { return {
        "levitate": {
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
            "attribute": "levitate",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get listeners() { return [{
            "name": "resize",
            "method": "handleResize",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
