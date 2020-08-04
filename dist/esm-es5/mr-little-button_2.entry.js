import { r as registerInstance, h, c as createEvent, g as getAssetPath } from './index-e6727c95.js';
var mrLittleButtonCss = ":host{display:block;width:35px;height:35px}.Wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border-radius:50%;border:solid 4px #f3f3f3;background:linear-gradient(145deg, #dedada, #ffffff);-webkit-box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15);box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15);-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out}.Wrapper:active{-webkit-box-shadow:1px 1px 2.5px rgba(0, 0, 0, 0.05);box-shadow:1px 1px 2.5px rgba(0, 0, 0, 0.05);-webkit-transform:scale(0.9) !important;transform:scale(0.9) !important;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}.Wrapper:hover{-webkit-box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);-webkit-transform:scale(1.05);transform:scale(1.05)}::slotted(img){width:60%}";
var MrLittleButton = /** @class */ (function () {
    function MrLittleButton(hostRef) {
        registerInstance(this, hostRef);
    }
    MrLittleButton.prototype.render = function () {
        return (h("div", { class: "Wrapper" }, h("slot", null)));
    };
    return MrLittleButton;
}());
MrLittleButton.style = mrLittleButtonCss;
var mrProfilButtonCss = ":host{display:block}h2{color:white;font-weight:700;font-size:30px}.Wrapper{position:relative;width:150px;height:150px;margin-top:-15px;padding-right:25px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.MainButtonWrapper{z-index:2;width:60px;height:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;border:solid 7px #f3f3f3;background:linear-gradient(145deg, #3db18e, #91ddc6);-webkit-box-shadow:5px 5px 7px #cfcfcf, -5px -5px 7px #ffffff;box-shadow:5px 5px 7px #cfcfcf, -5px -5px 7px #ffffff;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s;cursor:pointer}.OtherButtonWrapper{z-index:1;position:absolute;width:100%;height:100%;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out}.OtherButtonWrapper .MixinButton,.OtherButtonWrapper .LogOut,.OtherButtonWrapper .Help,.OtherButtonWrapper .Profil{position:absolute;right:15px;top:55px;cursor:pointer}.OtherButtonWrapper .Profil{-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s}.OtherButtonWrapper .Help{-webkit-transition:-webkit-transform 0.3s ease-in-out;transition:-webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s}.OtherButtonWrapper .LogOut{-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s}.Wrapper:hover .MainButtonWrapper{-webkit-box-shadow:5px 5px 10px #c5c5c5;box-shadow:5px 5px 10px #c5c5c5;-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transition-delay:0s !important;transition-delay:0s !important}.Wrapper:hover .OtherButtonWrapper{opacity:1}.Wrapper:hover .OtherButtonWrapper .Profil{-webkit-transform:translate(-55px, -45px);transform:translate(-55px, -45px)}.Wrapper:hover .OtherButtonWrapper .Help{-webkit-transform:translate(-73px, 0px);transform:translate(-73px, 0px)}.Wrapper:hover .OtherButtonWrapper .LogOut{-webkit-transform:translate(-55px, 45px);transform:translate(-55px, 45px)}";
var MrProfilButton = /** @class */ (function () {
    function MrProfilButton(hostRef) {
        registerInstance(this, hostRef);
        this.buttonToggle = createEvent(this, "buttonToggle", 7);
    }
    MrProfilButton.prototype.handleClick = function (name) {
        this.buttonToggle.emit(name);
    };
    MrProfilButton.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "Wrapper" }, h("div", { class: "MainButtonWrapper" }, h("h2", null, "CF")), h("div", { class: "OtherButtonWrapper" }, h("mr-little-button", { class: "Profil", onClick: function () { return _this.handleClick("Profil"); } }, h("img", { src: getAssetPath("./assets/user.svg"), alt: "Profil" })), h("mr-little-button", { class: "Help", onClick: function () { return _this.handleClick("Help"); } }, h("img", { src: getAssetPath("./assets/help.svg"), alt: "Help" })), h("mr-little-button", { class: "LogOut", onClick: function () { return _this.handleClick("LogOut"); } }, h("img", { src: getAssetPath("./assets/log-out.svg"), alt: "logOut" })))));
    };
    Object.defineProperty(MrProfilButton, "assetsDirs", {
        get: function () { return ["assets"]; },
        enumerable: false,
        configurable: true
    });
    return MrProfilButton;
}());
MrProfilButton.style = mrProfilButtonCss;
export { MrLittleButton as mr_little_button, MrProfilButton as mr_profil_button };
