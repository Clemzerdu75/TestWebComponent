'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e89bd670.js');

const mobenFieldCss = ":host{display:block}input{width:30vw;margin:2vw;height:4vw;outline:none;border-radius:1vw;border:solid 5px white;background:#e0e0e0;-webkit-box-shadow:5px 5px 8px #cccecf, -5px -5px 8px #ffffff, inset 5px 5px 8px #cccecf, inset -5px -5px 8px #ffffff;box-shadow:5px 5px 8px #cccecf, -5px -5px 8px #ffffff, inset 5px 5px 8px #cccecf, inset -5px -5px 8px #ffffff;padding:10px 50px;color:rgb(68, 67, 67);font-family:\"Helvitica Neue\", sans-serif;font-weight:bold;font-size:1.5vw}";

class MobenInput {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.inputChange = index.createEvent(this, "inputChange", 7);
    }
    render() {
        return (index.h("input", { type: this.type, name: this.name, value: this.inputValue, placeholder: this.placeholder, onChange: this.inputHandler }));
    }
}
MobenInput.style = mobenFieldCss;

exports.moben_field = MobenInput;
