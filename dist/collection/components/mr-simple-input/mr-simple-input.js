import { Component, h } from "@stencil/core";
export class MrSimpleInput {
    render() {
        return h("input", { placeholder: "First name", name: "firstName" });
    }
    static get is() { return "mr-simple-input"; }
    static get originalStyleUrls() { return {
        "$": ["mr-simple-input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["mr-simple-input.css"]
    }; }
}
