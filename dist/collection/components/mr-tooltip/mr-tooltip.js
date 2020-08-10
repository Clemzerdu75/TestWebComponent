import { Component, Host, h, Prop } from "@stencil/core";
export class MrTooltip {
    componentDidRender() {
        const size = this.wrapper.offsetWidth * 0.01 < 0.8
            ? 0.8 // min size
            : this.wrapper.offsetWidth * 0.01 > 1
                ? 1 // max size
                : this.wrapper.offsetWidth * 0.01;
        this.content.style.fontSize = `${size}em`;
    }
    render() {
        return (h(Host, { ref: (el) => (this.wrapper = el), class: "MrToolTipWrapperWC" },
            h("slot", null),
            h("p", { ref: (el) => (this.content = el), class: "ToolTip" },
                this.text,
                " ",
                h("strong", null,
                    "(",
                    this.shortcut,
                    ")"))));
    }
    static get is() { return "mr-tooltip"; }
    static get originalStyleUrls() { return {
        "$": ["mr-tooltip.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["mr-tooltip.css"]
    }; }
    static get properties() { return {
        "text": {
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
            "attribute": "text",
            "reflect": false
        },
        "shortcut": {
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
            "attribute": "shortcut",
            "reflect": false
        }
    }; }
}
