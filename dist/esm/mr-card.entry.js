import { r as registerInstance, h, H as Host } from './index-76abd15f.js';

const mrCardCss = ":host{display:block}";

class MrCard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
MrCard.style = mrCardCss;

export { MrCard as mr_card };
