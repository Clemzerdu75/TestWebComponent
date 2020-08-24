import { Component, Event, h, State } from "@stencil/core";
export class XCounter {
    constructor() {
        this._value = 0;
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
        return (h("div", null,
            h("button", { ref: (el) => (this.decrementButton = el), "aria-label": "decrement" }, "-"),
            h("p", { ref: (el) => (this.valueElement = el) }, "0"),
            h("button", { "aria-label": "increment", ref: (el) => (this.incrementButton = el) }, "+")));
    }
    static get is() { return "x-counter"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["x-counter.css"]
    }; }
    static get styleUrls() { return {
        "$": ["x-counter.css"]
    }; }
    static get states() { return {
        "_value": {}
    }; }
    static get events() { return [{
            "method": "valueChange",
            "name": "valueChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
/*


export class XCounter extends HTMLElement {
  private _value = 0;
  private valueElement: HTMLElement;
  private incrementButton: HTMLElement;
  private decrementButton: HTMLElement;

  static get observedAttributes() {
    return ["value"];
  }

  set value(value) {
    this._value = value;
    this.valueElement.innerText = `${this._value}`;
    this.dispatchEvent(new CustomEvent("valueChange", { detail: this._value }));
  }

  get value() {
    return this._value;
  }

  constructor() {
    super();
    this._value = 0;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.valueElement = this.shadowRoot.querySelector("p");
    this.incrementButton = this.shadowRoot.querySelectorAll("button")[1];
    this.decrementButton = this.shadowRoot.querySelectorAll("button")[0];

    this.incrementButton.addEventListener("click", (e) => this.value++);

    this.decrementButton.addEventListener("click", (e) => this.value--);
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "value") {
      this.value = parseInt(newValue, 10);
    }
  }
}

customElements.define("x-counter", XCounter);



*/
