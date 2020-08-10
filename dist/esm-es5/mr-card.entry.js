import { r as registerInstance, h, H as Host } from './index-76abd15f.js';
var mrCardCss = ":host{display:block}";
var MrCard = /** @class */ (function () {
    function MrCard(hostRef) {
        registerInstance(this, hostRef);
    }
    MrCard.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return MrCard;
}());
MrCard.style = mrCardCss;
export { MrCard as mr_card };
