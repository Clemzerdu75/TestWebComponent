import { Component, h, Listen } from "@stencil/core";
// Simple as f***
export class MrLittleButton {
    handleResize() {
        this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f3f3f3`;
    }
    componentDidLoad() {
        this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f3f3f3`;
    }
    render() {
        return (h("div", { class: "Wrapper", ref: (el) => (this.wrapper = el) },
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
    static get listeners() { return [{
            "name": "resize",
            "method": "handleResize",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
