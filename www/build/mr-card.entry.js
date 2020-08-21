import { r as registerInstance, h, H as Host } from './index-72d4129f.js';

const mrCardCss = ":host{display:block}.MR-card-wrapper-WC{width:fit-content;height:fit-content;padding:10px 20px;background:#f1f1f1;border-radius:7px;box-shadow:0px 2px 30px rgba(0, 0, 0, 0.15);transition:0.2s ease-in-out}.MR-card-wrapper-WC:hover{box-shadow:0px 2px 60px rgba(0, 0, 0, 0.15)}.MR-card-wrapper-WC.anchor{background:#f3f3f3;box-shadow:4px 4px 8px #d6d6d6, -4px -4px 8px #ffffff}";

class MrCard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.anchor = true;
    }
    render() {
        return (h(Host, { class: `MR-card-wrapper-WC ${this.anchor ? "anchor" : ""}` }, h("slot", null)));
    }
}
MrCard.style = mrCardCss;

export { MrCard as mr_card };
