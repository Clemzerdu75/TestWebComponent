import { r as registerInstance, h, H as Host } from './index-72d4129f.js';

const mrTooltipCss = ":host{display:block}.MrToolTipWrapperWC{position:relative;width:fit-content;display:flex;justify-content:center;align-items:center;}.MrToolTipWrapperWC .ToolTip{position:absolute;display:block;opacity:0;z-index:-1;min-width:85px;max-width:300px;text-align:center;font-size:0.8rem;padding:5px 20px;background:rgba(0, 0, 0, 0.2);color:white;transition:0.2 ease-in-out}.MrToolTipWrapperWC:hover .ToolTip{opacity:1;z-index:1000}.MrToolTipWrapperWC:hover .ToolTip:hover{display:none}.ToolTip::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent black transparent}";

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
        registerInstance(this, hostRef);
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
        return (h(Host, { ref: (el) => (this.wrapper = el), class: "MrToolTipWrapperWC" }, h("slot", null), h("p", { ref: (el) => (this.content = el), class: "ToolTip" }, this.text, " (", h("strong", null, this.shortcut), ")")));
    }
}
MrTooltip.style = mrTooltipCss;

export { MrTooltip as mr_tooltip };
