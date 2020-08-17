import { r as registerInstance, h, H as Host, c as createEvent } from './index-76abd15f.js';
var mrCardCss = ":host{display:block}.MR-card-wrapper-WC{width:200px;height:250px;padding:10px;background:#f3f3f3;border-radius:7px;-webkit-box-shadow:0px 2px 30px rgba(0, 0, 0, 0.15);box-shadow:0px 2px 30px rgba(0, 0, 0, 0.15);-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;cursor:-webkit-grab;cursor:grab}.MR-card-wrapper-WC:hover{-webkit-box-shadow:0px 2px 60px rgba(0, 0, 0, 0.15);box-shadow:0px 2px 60px rgba(0, 0, 0, 0.15)}.MR-card-wrapper-WC.anchor{-webkit-box-shadow:4px 4px 8px #d6d6d6, -4px -4px 8px #ffffff;box-shadow:4px 4px 8px #d6d6d6, -4px -4px 8px #ffffff;cursor:unset}";
var MrCard = /** @class */ (function () {
    function MrCard(hostRef) {
        registerInstance(this, hostRef);
        this.anchor = true;
        this.movable = false;
    }
    MrCard.prototype.render = function () {
        var _this = this;
        return (h(Host, { ref: function (el) { return (_this.wrapper = el); }, class: "MR-card-wrapper-WC " + (this.anchor ? "anchor" : ""), draggable: this.movable ? "true" : "false" }, h("slot", null)));
    };
    return MrCard;
}());
MrCard.style = mrCardCss;
var mrTooltipCss = ":host{display:block}.MrToolTipWrapperWC{position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;}.MrToolTipWrapperWC .ToolTip{position:absolute;display:block;opacity:0;z-index:-1;min-width:85px;max-width:300px;text-align:center;padding:5px 20px;background:rgba(0, 0, 0, 0.2);color:white;-webkit-transition:0.2 ease-in-out;transition:0.2 ease-in-out}.MrToolTipWrapperWC:hover .ToolTip{opacity:1;z-index:1000}.MrToolTipWrapperWC:hover .ToolTip:hover{display:none}";
/*   The tooltip component works as a wrapper for the component that need
  to be have some information displayed.
    It takes 3 Props:
      - text for the inforamtion text
      - shortcut if the component have a shortcut to do its function
      - position for the placement of the tooltip ("left", "top", "right" or "bottom")
      the default position is bottom.
*/
var MrTooltip = /** @class */ (function () {
    function MrTooltip(hostRef) {
        registerInstance(this, hostRef);
        this.position = "bottom";
    }
    /* --- Styling of the tooltip after the render --- */
    MrTooltip.prototype.componentDidRender = function () {
        // Handle  font size
        var size = this.wrapper.offsetWidth * 0.01 < 0.8
            ? 0.8 // min size
            : this.wrapper.offsetWidth * 0.01 > 1
                ? 1 // max size
                : this.wrapper.offsetWidth * 0.01;
        this.content.style.fontSize = size + "em";
        // Handle placement according to position
        switch (this.position) {
            case "bottom":
                this.content.style.bottom = "-" + ((this.content.offsetHeight / this.wrapper.offsetHeight) * this.wrapper.offsetHeight + 30) + "px";
                break;
            case "left":
                this.content.style.left = "-" + ((this.content.offsetWidth / this.wrapper.offsetWidth) * this.wrapper.offsetWidth + 20) + "px";
                break;
            case "top":
                this.content.style.top = "-" + ((this.content.offsetHeight / this.wrapper.offsetHeight) * this.wrapper.offsetHeight + 35) + "px";
                break;
            case "right":
                this.content.style.right = "-" + ((this.content.offsetWidth / this.wrapper.offsetWidth) * this.wrapper.offsetWidth + 20) + "px";
                break;
        }
    };
    MrTooltip.prototype.render = function () {
        var _this = this;
        return (h(Host, { ref: function (el) { return (_this.wrapper = el); }, class: "MrToolTipWrapperWC" }, h("slot", null), h("p", { ref: function (el) { return (_this.content = el); }, class: "ToolTip" }, this.text, " (", h("strong", null, this.shortcut), ")")));
    };
    return MrTooltip;
}());
MrTooltip.style = mrTooltipCss;
var xCounterCss = "button,p{display:inline-block}";
var XCounter = /** @class */ (function () {
    function XCounter(hostRef) {
        registerInstance(this, hostRef);
        this._value = 0;
        this.valueChange = createEvent(this, "valueChange", 7);
    }
    Object.defineProperty(XCounter.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.valueElement.innerText = "" + this._value;
            this.valueChange.emit(this._value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XCounter, "observedAttributes", {
        get: function () {
            return ["value"];
        },
        enumerable: false,
        configurable: true
    });
    XCounter.prototype.componentDidLoad = function () {
        var _this = this;
        this.incrementButton.addEventListener("click", function () { return _this.value++; });
        this.decrementButton.addEventListener("click", function () { return _this.value--; });
    };
    XCounter.prototype.render = function () {
        var _this = this;
        return (h("div", null, h("button", { ref: function (el) { return (_this.decrementButton = el); }, "aria-label": "decrement" }, "-"), h("p", { ref: function (el) { return (_this.valueElement = el); } }, "0"), h("button", { "aria-label": "increment", ref: function (el) { return (_this.incrementButton = el); } }, "+")));
    };
    return XCounter;
}());
XCounter.style = xCounterCss;
export { MrCard as mr_card, MrTooltip as mr_tooltip, XCounter as x_counter };
