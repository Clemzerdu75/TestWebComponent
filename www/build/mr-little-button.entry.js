import { r as registerInstance, h } from './index-3ceb11f8.js';

const mrLittleButtonCss = ":host{display:block;width:35px;height:35px}.Wrapper{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:50%;border:solid 4px #f3f3f3;background:linear-gradient(145deg, #dedada, #ffffff);box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15);transition:0.2s ease-in-out}.Wrapper:active{box-shadow:1px 1px 2.5px rgba(0, 0, 0, 0.05);transform:scale(0.9) !important;transition:0.1s ease-in-out}.Wrapper:hover{box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);transform:scale(1.05)}::slotted(img){width:60%}";

class MrLittleButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "Wrapper" }, h("slot", null)));
    }
}
MrLittleButton.style = mrLittleButtonCss;

export { MrLittleButton as mr_little_button };
