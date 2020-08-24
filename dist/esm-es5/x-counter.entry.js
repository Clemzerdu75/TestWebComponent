import { r as registerInstance, c as createEvent, h } from './index-ab602a57.js';
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
export { XCounter as x_counter };
