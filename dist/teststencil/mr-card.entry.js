import { r as registerInstance, h, H as Host } from './index-d277bb3f.js';

const mrCardCss = ":host{display:block}.MR-card-wrapper-WC{width:200px;height:250px;padding:10px;background:#f3f3f3;border-radius:7px;box-shadow:0px 2px 30px rgba(0, 0, 0, 0.15);transition:0.2s ease-in-out;cursor:grab}.MR-card-wrapper-WC:hover{box-shadow:0px 2px 60px rgba(0, 0, 0, 0.15)}.MR-card-wrapper-WC.anchor{box-shadow:4px 4px 8px #d6d6d6, -4px -4px 8px #ffffff;cursor:unset}";

class MrCard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.anchor = true;
        this.movable = false;
    }
    render() {
        return (h(Host, { ref: (el) => (this.wrapper = el), class: `MR-card-wrapper-WC ${this.anchor ? "anchor" : ""}`, draggable: this.movable ? "true" : "false" }, h("slot", null)));
    }
}
MrCard.style = mrCardCss;

export { MrCard as mr_card };
