import { r as registerInstance, c as createEvent, h } from './index-d30830d6.js';
var mobenButtonCss = ":host{display:block}button{margin-top:50px;width:10vw;border-radius:50px;background:linear-gradient(145deg, #cacaca, #f0f0f0);-webkit-box-shadow:16px 16px 31px #cacaca, \n              -16px -16px 31px #f6f6f6;box-shadow:16px 16px 31px #cacaca, \n              -16px -16px 31px #f6f6f6;margin-left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border:solid 5px rgb(68, 67, 67);-webkit-transition:.2s ease-out;transition:.2s ease-out;color:rgb(68, 67, 67);font-size:1.5vw;font-weight:900;background-color:transparent;font-family:'Helvitica Neue', sans-serif;padding:10px 10px;outline:none}button:hover{background-color:rgb(68, 67, 67);border:solid 5px white;color:white}";
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
var mobenCardCss = ":host{display:block}.Wrapper{-webkit-box-shadow:20px 20px 60px #cccccc, \n  -20px -20px 60px #f4f4f4;box-shadow:20px 20px 60px #cccccc, \n  -20px -20px 60px #f4f4f4;background-color:#f4f4f4;border-radius:10px;min-width:200px;max-width:300px;width:30vw;height:30vw;min-height:200px;max-height:300px;display:-ms-flexbox;display:flex;margin:5vw;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-webkit-transition:.2s ease-out;transition:.2s ease-out}.Wrapper:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}";
var MobenCard = /** @class */ (function () {
    function MobenCard(hostRef) {
        registerInstance(this, hostRef);
    }
    MobenCard.prototype.render = function () {
        return (h("div", { class: "Wrapper" }, h("slot", null)));
    };
    return MobenCard;
}());
MobenCard.style = mobenCardCss;
var mobenFieldCss = ":host{display:block}input{width:30vw;margin:2vw;height:4vw;border:none;border-radius:1vw;border:solid 5px rgb(68, 67, 67);background:#e0e0e0;-webkit-box-shadow:inset 5px 5px 20px #bebebe, \n  inset -5px -5px 20px #ffffff;box-shadow:inset 5px 5px 20px #bebebe, \n  inset -5px -5px 20px #ffffff;padding:10px 50px;color:rgb(68, 67, 67);font-family:'Helvitica Neue', sans-serif;font-weight:bold;font-size:1.5vw}";
var MobenInput = /** @class */ (function () {
    function MobenInput(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.inputValue = "";
        this.type = "text";
        this.name = "Name";
        this.placeholder = "Type your text";
        this.inputHandler = function (event) {
            _this.inputValue = event.target.value;
            _this.inputChange.emit({
                name: _this.name,
                value: _this.inputValue
            });
        };
        this.inputChange = createEvent(this, "inputChange", 7);
    }
    MobenInput.prototype.render = function () {
        return (h("input", { type: this.type, name: this.name, value: this.inputValue, placeholder: this.placeholder, onChange: this.inputHandler }));
    };
    return MobenInput;
}());
MobenInput.style = mobenFieldCss;
var mobenListCss = ":host{display:block}.Wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100vw}h1{font-family:'Helvetica Neue', sans-serif;font-size:4vw;color:rgba(0,0,0,.8);margin:0 auto;margin-left:1vw}.Image-Wrapper{width:95%;height:50%;margin:2.5%;background:rgba(0,0,0, .4)}";
var MobenList = /** @class */ (function () {
    function MobenList(hostRef) {
        registerInstance(this, hostRef);
        this.name = "";
    }
    MobenList.prototype.componentWillLoad = function () {
        this.parseMyArrayProp(this.name);
    };
    MobenList.prototype.parseMyArrayProp = function (newValue) {
        if (newValue)
            this.arrayData = JSON.parse(newValue);
    };
    MobenList.prototype.render = function () {
        return (h("div", { class: "Wrapper" }, this.arrayData.map(function (el) { return (h("moben-card", null, h("h1", null, el.name), h("div", { class: "Image-Wrapper" }), h("h3", null, el.value))); })));
    };
    Object.defineProperty(MobenList, "watchers", {
        get: function () {
            return {
                "name": ["parseMyArrayProp"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MobenList;
}());
MobenList.style = mobenListCss;
var myComponentCss = ":host{display:block}h1{font-family:'Helvetica Neue', sans-serif;font-size:8vw;color:rgba(0,0,0,.8);margin:0 auto;text-align:center}";
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.render = function () {
        return h("h1", null, "Web Component");
    };
    return MyComponent;
}());
MyComponent.style = myComponentCss;
export { MobenButton as moben_button, MobenCard as moben_card, MobenInput as moben_field, MobenList as moben_list, MyComponent as my_component };
