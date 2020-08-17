'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1809432.js');

const mrCardCss = ":host{display:block}.MR-card-wrapper-WC{width:200px;height:250px;padding:10px;background:#f3f3f3;border-radius:7px;-webkit-box-shadow:0px 2px 30px rgba(0, 0, 0, 0.15);box-shadow:0px 2px 30px rgba(0, 0, 0, 0.15);-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;cursor:-webkit-grab;cursor:grab}.MR-card-wrapper-WC:hover{-webkit-box-shadow:0px 2px 60px rgba(0, 0, 0, 0.15);box-shadow:0px 2px 60px rgba(0, 0, 0, 0.15)}.MR-card-wrapper-WC.anchor{-webkit-box-shadow:4px 4px 8px #d6d6d6, -4px -4px 8px #ffffff;box-shadow:4px 4px 8px #d6d6d6, -4px -4px 8px #ffffff;cursor:unset}";

class MrCard {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.anchor = true;
        this.movable = false;
    }
    render() {
        return (index.h(index.Host, { ref: (el) => (this.wrapper = el), class: `MR-card-wrapper-WC ${this.anchor ? "anchor" : ""}`, draggable: this.movable ? "true" : "false" }, index.h("slot", null)));
    }
}
MrCard.style = mrCardCss;

const mrTooltipCss = ":host{display:block}.MrToolTipWrapperWC{position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;}.MrToolTipWrapperWC .ToolTip{position:absolute;display:block;opacity:0;z-index:-1;min-width:85px;max-width:300px;text-align:center;font-size:0.8rem;padding:5px 20px;background:rgba(0, 0, 0, 0.2);color:white;-webkit-transition:0.2 ease-in-out;transition:0.2 ease-in-out}.MrToolTipWrapperWC:hover .ToolTip{opacity:1;z-index:1000}.MrToolTipWrapperWC:hover .ToolTip:hover{display:none}";

/*   The tooltip component works as a wrapper for the component that need
  to be have some information displayed.
    It takes 3 Props:
      - text for the inforamtion text
      - shortcut if the component have a shortcut to do its function
      - position for the placement of the tooltip ("left", "top", "right" or "bottom")
      the default position is bottom.
*/
class MrTooltip {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.position = "bottom";
    }
    /* --- Styling of the tooltip after the render --- */
    componentDidRender() {
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
        return (index.h(index.Host, { ref: (el) => (this.wrapper = el), class: "MrToolTipWrapperWC" }, index.h("slot", null), index.h("p", { ref: (el) => (this.content = el), class: "ToolTip" }, this.text, " (", index.h("strong", null, this.shortcut), ")")));
    }
}
MrTooltip.style = mrTooltipCss;

const xCounterCss = "button,p{display:inline-block}";

class XCounter {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this._value = 0;
        this.valueChange = index.createEvent(this, "valueChange", 7);
    }
    set value(value) {
        this._value = value;
        this.valueElement.innerText = `${this._value}`;
        this.valueChange.emit(this._value);
    }
    get value() {
        return this._value;
    }
    static get observedAttributes() {
        return ["value"];
    }
    componentDidLoad() {
        this.incrementButton.addEventListener("click", () => this.value++);
        this.decrementButton.addEventListener("click", () => this.value--);
    }
    render() {
        return (index.h("div", null, index.h("button", { ref: (el) => (this.decrementButton = el), "aria-label": "decrement" }, "-"), index.h("p", { ref: (el) => (this.valueElement = el) }, "0"), index.h("button", { "aria-label": "increment", ref: (el) => (this.incrementButton = el) }, "+")));
    }
}
XCounter.style = xCounterCss;

exports.mr_card = MrCard;
exports.mr_tooltip = MrTooltip;
exports.x_counter = XCounter;
