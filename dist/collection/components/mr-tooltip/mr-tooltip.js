import { Component, Host, h, Prop } from "@stencil/core";
/*   The tooltip component works as a wrapper for the component that need
  to be have some information displayed.
    It takes 3 Props:
      - text for the inforamtion text
      - shortcut if the component have a shortcut to do its function
      - position for the placement of the tooltip ("left", "top", "right" or "bottom")
      the default position is bottom.
*/
export class MrTooltip {
    constructor() {
        this.position = "bottom";
    }
    /* --- Styling of the tooltip after the render --- */
    componentDidRender() {
        // Handle  font size
        const size = this.wrapper.offsetWidth * 0.01 < 0.8
            ? 0.8 // min size
            : this.wrapper.offsetWidth * 0.01 > 1
                ? 1 // max size
                : this.wrapper.offsetWidth * 0.01;
        this.content.style.fontSize = `${size}em`;
        // Handle placement according to position
        switch (this.position) {
            case "bottom":
                this.content.style.bottom = `-${(this.content.offsetHeight / this.wrapper.offsetHeight) * this.wrapper.offsetHeight + 30}px`;
                break;
            case "left":
                this.content.style.left = `-${(this.content.offsetWidth / this.wrapper.offsetWidth) * this.wrapper.offsetWidth + 20}px`;
                break;
            case "top":
                this.content.style.top = `-${(this.content.offsetHeight / this.wrapper.offsetHeight) * this.wrapper.offsetHeight + 35}px`;
                break;
            case "right":
                this.content.style.right = `-${(this.content.offsetWidth / this.wrapper.offsetWidth) * this.wrapper.offsetWidth + 20}px`;
                break;
        }
    }
    render() {
        return (h(Host, { ref: (el) => (this.wrapper = el), class: "MrToolTipWrapperWC" },
            h("slot", null),
            h("p", { ref: (el) => (this.content = el), class: "ToolTip" },
                this.text,
                " (",
                h("strong", null, this.shortcut),
                ")")));
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
        },
        "position": {
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
            "attribute": "position",
            "reflect": false,
            "defaultValue": "\"bottom\""
        }
    }; }
}
