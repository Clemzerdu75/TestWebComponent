import { r as registerInstance, c as createEvent, h } from './index-c9ff436a.js';

const mobenFieldCss = ":host{display:block}input{width:30vw;margin:2vw;height:4vw;outline:none;border-radius:1vw;border:solid 5px white;background:#e0e0e0;box-shadow:5px 5px 8px #cccecf, -5px -5px 8px #ffffff, inset 5px 5px 8px #cccecf, inset -5px -5px 8px #ffffff;padding:10px 50px;color:rgb(68, 67, 67);font-family:\"Helvitica Neue\", sans-serif;font-weight:bold;font-size:1.5vw}";

class MobenInput {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputValue = "";
        this.type = "text";
        this.name = "Name";
        this.placeholder = "Type your text";
        this.inputHandler = (event) => {
            this.inputValue = event.target.value;
            this.inputChange.emit({
                name: this.name,
                value: this.inputValue,
            });
        };
        this.inputChange = createEvent(this, "inputChange", 7);
    }
    render() {
        return (h("input", { type: this.type, name: this.name, value: this.inputValue, placeholder: this.placeholder, onChange: this.inputHandler }));
    }
}
MobenInput.style = mobenFieldCss;

export { MobenInput as moben_field };
