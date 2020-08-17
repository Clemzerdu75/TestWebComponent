import { r as registerInstance, h, H as Host } from './index-76abd15f.js';
var mrLittleButtonCss = ":host{display:block;width:35px;height:35px;background:transparent}.LittleButtonWrapperWC{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:35px;height:35px;border-radius:50%;background:linear-gradient(145deg, #e9e6e6, #ffffff);-webkit-box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;cursor:pointer;}.LittleButtonWrapperWC:hover{-webkit-box-shadow:2px 2px 15px rgba(0, 0, 0, 0.075);box-shadow:2px 2px 15px rgba(0, 0, 0, 0.075);-webkit-transform:scale(1.02);transform:scale(1.02)}.LittleButtonWrapperWC:active{-webkit-box-shadow:1px 1px 5px rgba(0, 0, 0, 0.15);box-shadow:1px 1px 5px rgba(0, 0, 0, 0.15);-webkit-transform:scale(0.93);transform:scale(0.93);-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}.LittleButtonWrapperWC.anchor{-webkit-box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff}.LittleButtonWrapperWC.anchor:hover{-webkit-box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;-webkit-transform:scale(1.01);transform:scale(1.01)}.LittleButtonWrapperWC.anchor:active{-webkit-transform:scale(0.98);transform:scale(0.98);-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}::slotted(img){width:60%}";
/*

This component is a simple one. It's just a fully responsive and adaptive button.
There is a lifecycle method and resize event handler to get the proper size of the border

*/
var MrLittleButton = /** @class */ (function () {
    function MrLittleButton(hostRef) {
        registerInstance(this, hostRef);
        this.anchor = false;
    }
    /* Resize handler */
    MrLittleButton.prototype.handleResize = function () {
        this.wrapper.style.border = "solid " + this.wrapper.offsetWidth * 0.1 + "px #f5f5f5";
    };
    /* Set the border size when the component is mounted */
    MrLittleButton.prototype.componentDidLoad = function () {
        this.wrapper.style.border = "solid " + this.wrapper.offsetWidth * 0.1 + "px #f5f5f5";
    };
    MrLittleButton.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: "LittleButtonWrapperWC " + (this.anchor ? "anchor" : ""), ref: function (el) { return (_this.wrapper = el); } }, h("slot", null)));
    };
    return MrLittleButton;
}());
MrLittleButton.style = mrLittleButtonCss;
export { MrLittleButton as mr_little_button };
