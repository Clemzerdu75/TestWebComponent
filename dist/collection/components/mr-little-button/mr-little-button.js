import { Component, h } from "@stencil/core";
// Simple as f***
export class MrLittleButton {
    componentDidLoad() {
        this.wrapper.style.border = ` solid ${this.wrapper.offsetWidth * 0.1}px #f3f3f3`;
        setTimeout(() => {
            this.wrapper.style.transition = " 0.2s ease-in-out";
        }, 50);
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
}
