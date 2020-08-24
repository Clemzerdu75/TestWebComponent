'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5470f36d.js');

const xCounterCss = "button,p{display:inline-block}";

class XCounter {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this._value = 0;
        this.valueChange = index.createEvent(this, "valueChange", 7);
    }
    set value(value) {
        this._value = value;
        this.valueElement.innerText = `${this._value}`;
        this.valueChange.emit(this._value);
    }
    get value() {
        return this._value;
    }
    static get observedAttributes() {
        return ["value"];
    }
    componentDidLoad() {
        this.incrementButton.addEventListener("click", () => this.value++);
        this.decrementButton.addEventListener("click", () => this.value--);
    }
    render() {
        return (index.h("div", null, index.h("button", { ref: (el) => (this.decrementButton = el), "aria-label": "decrement" }, "-"), index.h("p", { ref: (el) => (this.valueElement = el) }, "0"), index.h("button", { "aria-label": "increment", ref: (el) => (this.incrementButton = el) }, "+")));
    }
}
XCounter.style = xCounterCss;

exports.x_counter = XCounter;
