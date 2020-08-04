'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e89bd670.js');

const mobenButtonCss = ":host{display:block}button{width:10vw;border-radius:50px;background:linear-gradient(145deg, #cacaca, #f0f0f0);-webkit-box-shadow:16px 16px 31px #cacaca, -16px -16px 31px #f6f6f6;box-shadow:16px 16px 31px #cacaca, -16px -16px 31px #f6f6f6;margin-left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border:solid 5px rgb(68, 67, 67);-webkit-transition:0.2s ease-out;transition:0.2s ease-out;color:rgb(68, 67, 67);font-size:1.5vw;font-weight:900;background-color:transparent;font-family:\"Helvitica Neue\", sans-serif;padding:10px 10px;outline:none}button:hover{background-color:rgb(68, 67, 67);border:solid 5px white;color:white}";

class MobenButton {
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
}
MobenButton.style = mobenButtonCss;

exports.moben_button = MobenButton;
