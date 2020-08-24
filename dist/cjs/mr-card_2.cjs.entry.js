'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5470f36d.js');

const mrCardCss = ":host{display:block}.MR-card-wrapper-WC{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:10px 20px;background:#f1f1f1;border-radius:7px;-webkit-box-shadow:0px 2px 30px rgba(0, 0, 0, 0.15);box-shadow:0px 2px 30px rgba(0, 0, 0, 0.15);-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out}.MR-card-wrapper-WC:hover{-webkit-box-shadow:0px 2px 60px rgba(0, 0, 0, 0.15);box-shadow:0px 2px 60px rgba(0, 0, 0, 0.15)}.MR-card-wrapper-WC.anchor{background:#f3f3f3;-webkit-box-shadow:4px 4px 8px #d6d6d6, -4px -4px 8px #ffffff;box-shadow:4px 4px 8px #d6d6d6, -4px -4px 8px #ffffff}";

class MrCard {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.anchor = true;
    }
    render() {
        return (index.h(index.Host, { class: `MR-card-wrapper-WC ${this.anchor ? "anchor" : ""}` }, index.h("slot", null)));
    }
}
MrCard.style = mrCardCss;

const mrSimpleInputCss = ":host{display:block}.MR-input-global-wrapper-WC{position:relative;height:2rem;margin-bottom:2rem;width:50vw}.MR-input-wrapper-WC{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.MR-input-wrapper-WC::after{content:\"\";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%) scaleX(1);transform:translateX(-50%) scaleX(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:100%;height:1px;background-color:rgba(0, 0, 0, 0.8);-webkit-transition:-webkit-transform 250ms;transition:-webkit-transform 250ms;transition:transform 250ms;transition:transform 250ms, -webkit-transform 250ms}.MR-input-wrapper-WC label{width:50%;display:inline-block;font-size:1.2rem;font-weight:600;margin-bottom:0.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:rgba(0, 0, 0, 0.8);-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out}.MR-input-wrapper-WC.isFocus::after{-webkit-animation:launch 0.2s ease-in-out;animation:launch 0.2s ease-in-out;-webkit-transform:translateX(-50%) scaleX(1);transform:translateX(-50%) scaleX(1);background-color:#42c19a}.MR-input-wrapper-WC.isError::after{background-color:#EF5067}.MR-input-wrapper-WC.isInvalid::after{background-color:#f5bd64}.MR-input-WC{border:none;outline:none;background:none;font-size:1.2rem;width:50%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}p{-webkit-animation:error 0.2s ease-in-out;animation:error 0.2s ease-in-out;color:#EF5067;font-size:0.8rem;-webkit-margin-before:0em;margin-block-start:0em;-webkit-margin-after:0em;margin-block-end:0em;margin-bottom:2rem}p.invalid{color:#f5bd64}::-webkit-input-placeholder{color:rgba(0, 0, 0, 0.3)}::-moz-placeholder{color:rgba(0, 0, 0, 0.3)}:-ms-input-placeholder{color:rgba(0, 0, 0, 0.3)}::-ms-input-placeholder{color:rgba(0, 0, 0, 0.3)}::placeholder{color:rgba(0, 0, 0, 0.3)}:-webkit-autofill{-webkit-box-shadow:0 0 0 30px #f3f3f3 inset !important}@-webkit-keyframes launch{0%{width:100%;opacity:1;background-color:rgba(0, 0, 0, 0.6)}50%{width:70%;opacity:0.4;background-color:#42c19a}100%{width:100%;opacity:1;background-color:#42c19a}}@keyframes launch{0%{width:100%;opacity:1;background-color:rgba(0, 0, 0, 0.6)}50%{width:70%;opacity:0.4;background-color:#42c19a}100%{width:100%;opacity:1;background-color:#42c19a}}@-webkit-keyframes error{from{margin-left:-10px;opacity:0}to{margin-left:0;opacity:1}}@keyframes error{from{margin-left:-10px;opacity:0}to{margin-left:0;opacity:1}}";

class MrSimpleInput {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isActive = false;
        this.isDisable = false;
        this.isError = { status: false, message: "", priority: false };
        this.type = "text";
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleError = this.handleError.bind(this);
        this.inputChange = index.createEvent(this, "inputChange", 7);
    }
    handleError(newValue) {
        if (newValue.status) {
            if (this.isActive)
                this.handleFocus();
            else
                this.handleBlur();
        }
    }
    handleFocus() {
        this.isActive = true;
        if (this.textInput.value.length && !this.isError.status) {
            this.labelInput.style.color = "#42c19a";
        }
        else {
            this.labelInput.style.color = "rgba(0,0,0,0.8)";
        }
    }
    handleBlur() {
        this.isActive = false;
        if (this.textInput.value.length && !this.isError.status) {
            this.labelInput.style.color = "#42c19a";
        }
        else if (this.textInput.value.length && this.isError.status) {
            this.isError.priority = true;
        }
        else {
            this.labelInput.style.color = "rgba(0,0,0,0.8)";
        }
    }
    handleChange(event) {
        this.value = event.target.value;
        this.inputChange.emit({ name: event.target.name, value: this.value });
    }
    render() {
        return (index.h(index.Host, { class: "MR-input-global-wrapper-WC" }, index.h("div", { class: `MR-input-wrapper-WC ${this.isActive && !this.isError.status ? "isFocus" : ""}
          ${this.isError.status && this.isError.priority ?
                "isError" :
                this.isError.status && !this.isError.priority && !this.isActive ? "isError" : this.isError.status && this.isError.priority ? "isInvalid" : ""}` }, index.h("label", { ref: (el) => this.labelInput = el }, this.name), index.h("input", { ref: (el) => this.textInput = el, onFocus: () => this.isActive = true, onBlur: this.handleBlur, onInput: (event) => this.handleChange(event), class: `MR-input-WC ${this.isError ? "error" : ""}`, placeholder: this.placeholder, name: this.name, type: this.type, value: this.value })), this.isError.message.length && this.isError.status ?
            index.h("p", { class: this.isError.priority ? "invalid" : "" }, this.isError.message) : null));
    }
    static get watchers() { return {
        "isError": ["handleError"]
    }; }
}
MrSimpleInput.style = mrSimpleInputCss;

exports.mr_card = MrCard;
exports.mr_simple_input = MrSimpleInput;
