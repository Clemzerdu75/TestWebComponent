import { r as registerInstance, c as createEvent, h } from './index-a6c9c68c.js';
var mobenButtonCss = ":host{display:block}button{width:10vw;border-radius:50px;background:linear-gradient(145deg, #cacaca, #f0f0f0);-webkit-box-shadow:16px 16px 31px #cacaca, -16px -16px 31px #f6f6f6;box-shadow:16px 16px 31px #cacaca, -16px -16px 31px #f6f6f6;margin-left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border:solid 5px rgb(68, 67, 67);-webkit-transition:0.2s ease-out;transition:0.2s ease-out;color:rgb(68, 67, 67);font-size:1.5vw;font-weight:900;background-color:transparent;font-family:\"Helvitica Neue\", sans-serif;padding:10px 10px;outline:none}button:hover{background-color:rgb(68, 67, 67);border:solid 5px white;color:white}";
var MobenButton = /** @class */ (function () {
    function MobenButton(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.status = false;
        this.statusHandler = function () {
            _this.status = !_this.status;
            _this.bloublou.emit(_this.status);
        };
        this.bloublou = createEvent(this, "bloublou", 7);
    }
    MobenButton.prototype.render = function () {
        return (h("button", { onClick: this.statusHandler }, "Button"));
    };
    return MobenButton;
}());
MobenButton.style = mobenButtonCss;
export { MobenButton as moben_button };
