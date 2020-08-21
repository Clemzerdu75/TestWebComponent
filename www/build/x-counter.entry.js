import { r as registerInstance, c as createEvent, h } from './index-72d4129f.js';

const xCounterCss = "button,p{display:inline-block}";

class XCounter {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this._value = 0;
        this.valueChange = createEvent(this, "valueChange", 7);
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
        return (h("div", null, h("button", { ref: (el) => (this.decrementButton = el), "aria-label": "decrement" }, "-"), h("p", { ref: (el) => (this.valueElement = el) }, "0"), h("button", { "aria-label": "increment", ref: (el) => (this.incrementButton = el) }, "+")));
    }
}
XCounter.style = xCounterCss;

export { XCounter as x_counter };
