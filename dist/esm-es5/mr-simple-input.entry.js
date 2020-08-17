import { r as registerInstance, h } from './index-76abd15f.js';
var mrSimpleInputCss = ":host{display:block}";
var MrSimpleInput = /** @class */ (function () {
    function MrSimpleInput(hostRef) {
        registerInstance(this, hostRef);
    }
    MrSimpleInput.prototype.render = function () {
        return h("input", { placeholder: "First name", name: "firstName" });
    };
    return MrSimpleInput;
}());
MrSimpleInput.style = mrSimpleInputCss;
export { MrSimpleInput as mr_simple_input };
