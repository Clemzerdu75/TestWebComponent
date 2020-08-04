import { r as registerInstance, h } from './index-a6c9c68c.js';

const mrSimpleButtonCss = ":host{position:relative;display:block;width:35px;height:35px}.Wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border-radius:50%;border:solid 4px #f3f3f3;background:linear-gradient(145deg, #dedada, #ffffff);-webkit-box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15);box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15);-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out}.Wrapper:active{-webkit-box-shadow:1px 1px 2.5px rgba(0, 0, 0, 0.05);box-shadow:1px 1px 2.5px rgba(0, 0, 0, 0.05);-webkit-transform:scale(0.9) !important;transform:scale(0.9) !important;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}.Wrapper:hover{-webkit-box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);-webkit-transform:scale(1.05);transform:scale(1.05)}::slotted(img){width:60%}";

/* Simple as f**k */
class MrSimpleButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "Wrapper" }, h("slot", null)));
    }
}
MrSimpleButton.style = mrSimpleButtonCss;

export { MrSimpleButton as mr_simple_button };
