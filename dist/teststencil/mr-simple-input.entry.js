import { r as registerInstance, c as createEvent, h, H as Host } from './index-72d4129f.js';

const mrSimpleInputCss = ":host{display:block}.MR-input-global-wrapper-WC{height:2rem}.MR-input-wrapper-WC{position:relative;display:flex;align-items:center;justify-content:center;width:30vw;height:2rem}.MR-input-wrapper-WC::after{content:\"\";position:absolute;left:50%;bottom:0;transform:translateX(-50%) scaleX(1);transform-origin:50% 50%;width:100%;height:1px;background-color:rgba(0, 0, 0, 0.8);transition:transform 250ms}.MR-input-wrapper-WC label{width:50%;display:inline-block;font-size:1.2rem;font-weight:600;margin-bottom:0.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:0.4s ease-in-out}.MR-input-wrapper-WC.isFocus::after{animation:launch 0.2s ease-in-out;transform:translateX(-50%) scaleX(1);background-color:#42c19a}.MR-input-wrapper-WC.isError::after{background-color:#EF5067}.MR-input-wrapper-WC.isError label{color:#EF5067 !important}.MR-input-WC{border:none;outline:none;background:none;font-size:1.2rem;width:50%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}p{animation:error 0.2s ease-in-out;color:#EF5067;font-size:0.8rem;margin-block-start:0em;margin-block-end:0em}::placeholder{color:rgba(0, 0, 0, 0.3)}:-webkit-autofill{-webkit-box-shadow:0 0 0 30px #f3f3f3 inset !important}@keyframes launch{0%{width:100%;opacity:1;background-color:rgba(0, 0, 0, 0.8)}50%{width:70%;opacity:0.4;background-color:#42c19a}100%{width:100%;opacity:1;background-color:#42c19a}}@keyframes error{from{margin-left:-10px;opacity:0}to{margin-left:0;opacity:1}}";

class MrSimpleInput {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isActive = false;
        this.isDisable = false;
        this.isError = { status: false, message: "Ce champs ne peut pas contenir de nombres" };
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleError = this.handleError.bind(this);
        this.inputChange = createEvent(this, "inputChange", 7);
    }
    handleError(newValue) {
        if (newValue.status) {
            if (this.isActive)
                this.handleFocus();
            else
                this.handleBlur();
        }
        else {
        }
    }
    handleFocus() {
        this.isActive = true;
    }
    handleBlur() {
        this.isActive = false;
        if (this.textInput.value.length && !this.isError.status) {
            document.getElementsByTagName("label")[0].style.color = "#42c19a";
        }
        else {
            document.getElementsByTagName("label")[0].style.color = "rgba(0,0,0,0.8)";
        }
    }
    handleChange(event) {
        this.value = event.target.value;
        this.inputChange.emit({ name: event.target.name, value: this.value });
    }
    render() {
        return (h(Host, { class: "test" }, h("div", { class: `MR-input-wrapper-WC ${this.isActive && !this.isError.status ? "isFocus" : ""} ${this.isError.status ? "isError" : ""}` }, h("label", null, "Entreprise"), h("input", { ref: (el) => this.textInput = el, onFocus: () => this.isActive = true, onBlur: this.handleBlur, onInput: (event) => this.handleChange(event), value: this.value, class: `MR-input-WC ${this.isError ? "error" : ""}`, placeholder: "Moben&Rooster", name: "bloublou" })), this.isError.message.length && this.isError.status ?
            h("p", null, this.isError.message) : null));
    }
    static get watchers() { return {
        "isError": ["handleError"]
    }; }
}
MrSimpleInput.style = mrSimpleInputCss;

export { MrSimpleInput as mr_simple_input };
