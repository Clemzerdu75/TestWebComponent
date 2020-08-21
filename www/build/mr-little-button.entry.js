import { r as registerInstance, h, H as Host } from './index-72d4129f.js';

const mrLittleButtonCss = ":host{display:block;width:35px;height:35px;background:transparent}.LittleButtonWrapperWC{position:relative;display:flex;align-items:center;justify-content:center;width:35px;height:35px;border-radius:50%;background:linear-gradient(145deg, #e9e6e6, #ffffff);box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);transition:transform 0.2s ease-in-out;cursor:pointer;}.LittleButtonWrapperWC:hover{box-shadow:2px 2px 15px rgba(0, 0, 0, 0.075);transform:scale(1.02)}.LittleButtonWrapperWC:active{box-shadow:1px 1px 5px rgba(0, 0, 0, 0.15);transform:scale(0.93);transition:0.1s ease-in-out}.LittleButtonWrapperWC.anchor{box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff}.LittleButtonWrapperWC.anchor:hover{box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;transform:scale(1.01)}.LittleButtonWrapperWC.anchor:active{transform:scale(0.98);transition:0.1s ease-in-out}::slotted(img){width:60%}";

/*

This component is a simple one. It's just a fully responsive and adaptive button.
There is a lifecycle method and resize event handler to get the proper size of the border

*/
class MrLittleButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.anchor = false;
    }
    /* Resize handler */
    handleResize() {
        this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f5f5f5`;
    }
    /* Set the border size when the component is mounted */
    componentDidLoad() {
        this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f5f5f5`;
    }
    render() {
        return (h(Host, { class: `LittleButtonWrapperWC ${this.anchor ? "anchor" : ""}`, ref: (el) => (this.wrapper = el) }, h("slot", null)));
    }
}
MrLittleButton.style = mrLittleButtonCss;

export { MrLittleButton as mr_little_button };
