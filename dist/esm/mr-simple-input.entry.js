import { r as registerInstance, h } from './index-76abd15f.js';

const mrSimpleInputCss = ":host{display:block}";

class MrSimpleInput {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("input", { placeholder: "First name", name: "firstName" });
    }
}
MrSimpleInput.style = mrSimpleInputCss;

export { MrSimpleInput as mr_simple_input };
