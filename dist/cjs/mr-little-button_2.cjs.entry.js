'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5470f36d.js');

const mrLittleButtonCss = ":host{display:block;width:35px;height:35px;background:transparent}.LittleButtonWrapperWC{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:35px;height:35px;border-radius:50%;background:linear-gradient(145deg, #e9e6e6, #ffffff);-webkit-box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;cursor:pointer;}.LittleButtonWrapperWC:hover{-webkit-box-shadow:2px 2px 15px rgba(0, 0, 0, 0.075);box-shadow:2px 2px 15px rgba(0, 0, 0, 0.075);-webkit-transform:scale(1.02);transform:scale(1.02)}.LittleButtonWrapperWC:active{-webkit-box-shadow:1px 1px 5px rgba(0, 0, 0, 0.15);box-shadow:1px 1px 5px rgba(0, 0, 0, 0.15);-webkit-transform:scale(0.93);transform:scale(0.93);-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}.LittleButtonWrapperWC.anchor{-webkit-box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff}.LittleButtonWrapperWC.anchor:hover{-webkit-box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;-webkit-transform:scale(1.01);transform:scale(1.01)}.LittleButtonWrapperWC.anchor:active{-webkit-transform:scale(0.98);transform:scale(0.98);-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}::slotted(img){width:60%}";

/*

This component is a simple one. It's just a fully responsive and adaptive button.
There is a lifecycle method and resize event handler to get the proper size of the border

*/
class MrLittleButton {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { class: `LittleButtonWrapperWC ${this.anchor ? "anchor" : ""}`, ref: (el) => (this.wrapper = el) }, index.h("slot", null)));
    }
}
MrLittleButton.style = mrLittleButtonCss;

const mrTooltipCss = ":host{display:block}.MrToolTipWrapperWC{position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;}.MrToolTipWrapperWC .ToolTip{position:absolute;display:block;opacity:0;z-index:-1;min-width:85px;max-width:300px;text-align:center;font-size:0.8rem;padding:5px 20px;background:rgba(0, 0, 0, 0.2);color:white;-webkit-transition:0.2 ease-in-out;transition:0.2 ease-in-out}.MrToolTipWrapperWC:hover .ToolTip{opacity:1;z-index:1000}.MrToolTipWrapperWC:hover .ToolTip:hover{display:none}.ToolTip::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent black transparent}";

/*   The tooltip component works as a wrapper for the component that need
  to be have some information displayed.
    It takes 3 Props:
      - text for the inforamtion text
      - shortcut if the component have a shortcut to do its function
      - position for the placement of the tooltip ("left", "top", "right" or "bottom")
      the default position is bottom.
*/
class MrTooltip {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.position = "bottom";
    }
    /* --- Styling of the tooltip after the render --- */
    componentDidRender() {
        // Handle placement according to position
        switch (this.position) {
            case "bottom":
                this.content.style.bottom = `-${(this.content.offsetHeight / this.wrapper.offsetHeight) * this.wrapper.offsetHeight + 30}px`;
                break;
            case "left":
                this.content.style.left = `-${(this.content.offsetWidth / this.wrapper.offsetWidth) * this.wrapper.offsetWidth + 20}px`;
                break;
            case "top":
                this.content.style.top = `-${(this.content.offsetHeight / this.wrapper.offsetHeight) * this.wrapper.offsetHeight + 35}px`;
                break;
            case "right":
                this.content.style.right = `-${(this.content.offsetWidth / this.wrapper.offsetWidth) * this.wrapper.offsetWidth + 20}px`;
                break;
        }
    }
    render() {
        return (index.h(index.Host, { ref: (el) => (this.wrapper = el), class: "MrToolTipWrapperWC" }, index.h("slot", null), index.h("p", { ref: (el) => (this.content = el), class: "ToolTip" }, this.text, " (", index.h("strong", null, this.shortcut), ")")));
    }
}
MrTooltip.style = mrTooltipCss;

exports.mr_little_button = MrLittleButton;
exports.mr_tooltip = MrTooltip;
