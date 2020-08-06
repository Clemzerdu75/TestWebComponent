'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b03c9d64.js');

const mrLittleButtonCss = ":host{display:block;width:35px;height:35px}.Wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border-radius:50%;background:linear-gradient(145deg, #e9e6e6, #ffffff);-webkit-box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;}.Wrapper:hover{-webkit-box-shadow:2px 2px 15px rgba(0, 0, 0, 0.075);box-shadow:2px 2px 15px rgba(0, 0, 0, 0.075);-webkit-transform:scale(1.02);transform:scale(1.02)}.Wrapper:active{-webkit-box-shadow:1px 1px 5px rgba(0, 0, 0, 0.15);box-shadow:1px 1px 5px rgba(0, 0, 0, 0.15);-webkit-transform:scale(0.93) !important;transform:scale(0.93) !important;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}.Wrapper.anchor{-webkit-box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff}.Wrapper.anchor:hover{-webkit-box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;-webkit-transform:scale(1.01);transform:scale(1.01)}.Wrapper.anchor:active{-webkit-transform:scale(0.98) !important;transform:scale(0.98) !important;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}::slotted(img){width:60%}";

/*

This component is a simple one. It's just a fully responsive and adaptive button.
There is a lifecycle method and resize event handler to get the proper size of the border

*/
class MrLittleButton {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.anchor = false;
    }
    /* Resize handler */
    handleResize() {
        this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f5f5f5`;
    }
    /* Set the border size when the component is mounted */
    componentDidLoad() {
        this.wrapper.style.border = `solid ${this.wrapper.offsetWidth * 0.1}px #f5f5f5`;
    }
    render() {
        return (index.h("div", { class: `Wrapper ${this.anchor ? "anchor" : ""}`, ref: (el) => (this.wrapper = el) }, index.h("slot", null)));
    }
}
MrLittleButton.style = mrLittleButtonCss;

const mrProfilButtonCss = ":host{display:block;width:150px;height:150px}h2{color:white;font-weight:700;font-size:30px}.Wrapper{position:relative;width:150px;height:150px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;}.Wrapper .MainButtonWrapper{z-index:2;width:60px;height:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;border:solid 7px #f5f5f5;background:linear-gradient(145deg, #3db18e, #91ddc6);-webkit-box-shadow:5px 5px 7px #cfcfcf, -5px -5px 7px #ffffff;box-shadow:5px 5px 7px #cfcfcf, -5px -5px 7px #ffffff;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s;cursor:pointer}.Wrapper .OtherButtonWrapper{z-index:1;position:absolute;width:100%;height:100%;-webkit-animation:enter 0.2s ease-in-out;animation:enter 0.2s ease-in-out;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out;}.Wrapper .OtherButtonWrapper .MixinButton,.Wrapper .OtherButtonWrapper .LogOut,.Wrapper .OtherButtonWrapper .Help,.Wrapper .OtherButtonWrapper .Profil{position:absolute;right:15px;top:54px;cursor:pointer}.Wrapper .OtherButtonWrapper .Profil{-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s}.Wrapper .OtherButtonWrapper .Help{-webkit-transition:-webkit-transform 0.3s ease-in-out;transition:-webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s}.Wrapper .OtherButtonWrapper .LogOut{-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s}.Wrapper:hover .MainButtonWrapper{-webkit-box-shadow:5px 5px 10px #c5c5c5;box-shadow:5px 5px 10px #c5c5c5;-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transition-delay:0s !important;transition-delay:0s !important}.Wrapper:hover .OtherButtonWrapper{opacity:1}.Wrapper:hover .OtherButtonWrapper .Profil{-webkit-transform:translate(-55px, -45px);transform:translate(-55px, -45px)}.Wrapper:hover .OtherButtonWrapper .Help{-webkit-transform:translate(-73px, 0px);transform:translate(-73px, 0px)}.Wrapper:hover .OtherButtonWrapper .LogOut{-webkit-transform:translate(-55px, 45px);transform:translate(-55px, 45px)}@-webkit-keyframes enter{0%{opacity:0}90%{opacity:0}100%{opacity:1}}@keyframes enter{0%{opacity:0}90%{opacity:0}100%{opacity:1}}";

/*

This component is first of all a link component, which drive users to certain part of the website:
There are 4 links inside you can access by the "buttonToggle" event.
The 4 links can be found and seperated by the event.detail value:
  - Link to profil Page has the value "Profil"
  - Link to help has the value "Help"
  - Link to log out has the value "LogOut"

*/
class MrProfilButton {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonToggle = index.createEvent(this, "buttonToggle", 7);
    }
    handleClick(name) {
        /* The name property is set in the button onClick to differenciate the different links */
        this.buttonToggle.emit(name);
    }
    render() {
        return (index.h("div", { class: "Wrapper" }, index.h("div", { class: "MainButtonWrapper" }, index.h("h2", null, "CF")), index.h("div", { class: "OtherButtonWrapper" }, index.h("mr-little-button", { class: "Profil", onClick: () => this.handleClick("Profil") }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#42c19A", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-user" }, index.h("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), index.h("circle", { cx: "12", cy: "7", r: "4" }))), index.h("mr-little-button", { class: "Help", onClick: () => this.handleClick("Help") }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#42c19a", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-help-circle" }, index.h("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), index.h("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }))), index.h("mr-little-button", { class: "LogOut", onClick: () => this.handleClick("LogOut") }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#EC4E65", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-log-out" }, index.h("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }), index.h("polyline", { points: "16 17 21 12 16 7" }), index.h("line", { x1: "21", y1: "12", x2: "9", y2: "12" }))))));
    }
    static get assetsDirs() { return ["assets"]; }
}
MrProfilButton.style = mrProfilButtonCss;

exports.mr_little_button = MrLittleButton;
exports.mr_profil_button = MrProfilButton;
