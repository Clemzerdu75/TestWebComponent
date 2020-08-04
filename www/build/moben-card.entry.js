import { r as registerInstance, h } from './index-c9ff436a.js';

const mobenCardCss = ":host{display:block}.Wrapper{box-shadow:20px 20px 60px #cccccc, \r\n  -20px -20px 60px #f4f4f4;background-color:#f4f4f4;border-radius:10px;min-width:200px;max-width:300px;width:30vw;height:30vw;min-height:200px;max-height:300px;display:flex;margin:5vw;flex-direction:column;align-items:center;transition:.2s ease-out}.Wrapper:hover{transform:scale(1.05)}";

class MobenCard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "Wrapper" }, h("slot", null)));
    }
}
MobenCard.style = mobenCardCss;

export { MobenCard as moben_card };
