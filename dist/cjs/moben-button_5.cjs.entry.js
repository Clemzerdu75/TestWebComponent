'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0ae6b6ef.js');

const mobenButtonCss = ":host{display:block}button{margin-top:50px;width:10vw;border-radius:50px;background:linear-gradient(145deg, #cacaca, #f0f0f0);-webkit-box-shadow:16px 16px 31px #cacaca, \n              -16px -16px 31px #f6f6f6;box-shadow:16px 16px 31px #cacaca, \n              -16px -16px 31px #f6f6f6;margin-left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border:solid 5px rgb(68, 67, 67);-webkit-transition:.2s ease-out;transition:.2s ease-out;color:rgb(68, 67, 67);font-size:1.5vw;font-weight:900;background-color:transparent;font-family:'Helvitica Neue', sans-serif;padding:10px 10px;outline:none}button:hover{background-color:rgb(68, 67, 67);border:solid 5px white;color:white}";

const MobenButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.status = false;
        this.statusHandler = () => {
            this.status = !this.status;
            this.bloublou.emit(this.status);
        };
        this.bloublou = index.createEvent(this, "bloublou", 7);
    }
    render() {
        return (index.h("button", { onClick: this.statusHandler }, "Button"));
    }
};
MobenButton.style = mobenButtonCss;

const mobenCardCss = ":host{display:block}.Wrapper{-webkit-box-shadow:20px 20px 60px #cccccc, \n  -20px -20px 60px #f4f4f4;box-shadow:20px 20px 60px #cccccc, \n  -20px -20px 60px #f4f4f4;background-color:#f4f4f4;border-radius:10px;min-width:200px;max-width:300px;width:30vw;height:30vw;min-height:200px;max-height:300px;display:-ms-flexbox;display:flex;margin:5vw;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-webkit-transition:.2s ease-out;transition:.2s ease-out}.Wrapper:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}";

const MobenCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "Wrapper" }, index.h("slot", null)));
    }
};
MobenCard.style = mobenCardCss;

const mobenFieldCss = ":host{display:block}input{width:30vw;margin:2vw;height:4vw;border:none;border-radius:1vw;border:solid 5px rgb(68, 67, 67);background:#e0e0e0;-webkit-box-shadow:inset 5px 5px 20px #bebebe, \n  inset -5px -5px 20px #ffffff;box-shadow:inset 5px 5px 20px #bebebe, \n  inset -5px -5px 20px #ffffff;padding:10px 50px;color:rgb(68, 67, 67);font-family:'Helvitica Neue', sans-serif;font-weight:bold;font-size:1.5vw}";

const MobenInput = class {
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
                value: this.inputValue
            });
        };
        this.inputChange = index.createEvent(this, "inputChange", 7);
    }
    render() {
        return (index.h("input", { type: this.type, name: this.name, value: this.inputValue, placeholder: this.placeholder, onChange: this.inputHandler }));
    }
};
MobenInput.style = mobenFieldCss;

const mobenListCss = ":host{display:block}.Wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100vw}h1{font-family:'Helvetica Neue', sans-serif;font-size:4vw;color:rgba(0,0,0,.8);margin:0 auto;margin-left:1vw}.Image-Wrapper{width:95%;height:50%;margin:2.5%;background:rgba(0,0,0, .4)}";

const MobenList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.name = "";
    }
    componentWillLoad() {
        this.parseMyArrayProp(this.name);
    }
    parseMyArrayProp(newValue) {
        if (newValue)
            this.arrayData = JSON.parse(newValue);
    }
    render() {
        return (index.h("div", { class: "Wrapper" }, this.arrayData.map(el => (index.h("moben-card", null, index.h("h1", null, el.name), index.h("div", { class: "Image-Wrapper" }), index.h("h3", null, el.value))))));
    }
    static get watchers() { return {
        "name": ["parseMyArrayProp"]
    }; }
};
MobenList.style = mobenListCss;

const myComponentCss = ":host{display:block}h1{font-family:'Helvetica Neue', sans-serif;font-size:8vw;color:rgba(0,0,0,.8);margin:0 auto;text-align:center}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return index.h("h1", null, "Web Component");
    }
};
MyComponent.style = myComponentCss;

exports.moben_button = MobenButton;
exports.moben_card = MobenCard;
exports.moben_field = MobenInput;
exports.moben_list = MobenList;
exports.my_component = MyComponent;
