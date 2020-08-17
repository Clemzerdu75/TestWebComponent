import { r as registerInstance, c as createEvent, h } from './index-d277bb3f.js';

const mrProfilButtonCss = ":host{display:block;width:150px;height:150px}h2{color:white;font-weight:700;font-size:30px}.Wrapper{position:relative;width:150px;height:150px;display:flex;align-items:center;justify-content:flex-end;}.Wrapper .MainButtonWrapper{z-index:2;width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:solid 7px #f5f5f5;background:linear-gradient(145deg, #3db18e, #91ddc6);box-shadow:5px 5px 7px #cfcfcf, -5px -5px 7px #ffffff;transition:0.4s ease-in-out;transition-delay:0.2s;cursor:pointer}.Wrapper .OtherButtonWrapper{z-index:1;position:absolute;width:100%;height:100%;animation:enter 0.2s ease-in-out;transition:0.4s ease-in-out;}.Wrapper .OtherButtonWrapper .MixinButton,.Wrapper .OtherButtonWrapper .LogOut,.Wrapper .OtherButtonWrapper .Help,.Wrapper .OtherButtonWrapper .Profil{position:absolute;right:15px;top:54px;cursor:pointer}.Wrapper .OtherButtonWrapper .Profil{transition:transform 0.2s ease-in-out;transition-delay:0.2s;z-index:3}.Wrapper .OtherButtonWrapper .Help{transition:transform 0.3s ease-in-out;transition-delay:0.2s;z-index:2}.Wrapper .OtherButtonWrapper .LogOut{transition:transform 0.4s ease-in-out;transition-delay:0.2s;z-index:1}.Wrapper:hover .MainButtonWrapper{box-shadow:5px 5px 10px #c5c5c5;transform:scale(1.05);transition-delay:0s !important}.Wrapper:hover .OtherButtonWrapper{opacity:1}.Wrapper:hover .OtherButtonWrapper .Profil{transform:translate(-55px, -45px)}.Wrapper:hover .OtherButtonWrapper .Profil.active{transform:translate(-55px, -45px) scale(0.93)}.Wrapper:hover .OtherButtonWrapper .Help{transform:translate(-73px, 0px)}.Wrapper:hover .OtherButtonWrapper .Help.active{transform:translate(-73px, 0px) scale(0.93)}.Wrapper:hover .OtherButtonWrapper .LogOut{transform:translate(-55px, 45px)}.Wrapper:hover .OtherButtonWrapper .LogOut.active{transform:translate(-55px, 45px) scale(0.93)}@keyframes enter{0%{opacity:0}90%{opacity:0}100%{opacity:1}}";

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
        registerInstance(this, hostRef);
        this.buttonToggle = createEvent(this, "buttonToggle", 7);
    }
    handleClick(name) {
        /* The name property is set in the button onClick to differenciate the different links */
        this.buttonToggle.emit(name);
    }
    render() {
        return (h("div", { class: "Wrapper" }, h("div", { class: "MainButtonWrapper" }, h("h2", null, "CF")), h("div", { class: "OtherButtonWrapper" }, h("mr-tooltip", { text: "Profil Page", shortcut: "P", class: "Profil", position: "left" }, h("mr-little-button", { onClick: () => this.handleClick("Profil") }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#42c19A", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-user" }, h("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), h("circle", { cx: "12", cy: "7", r: "4" })))), h("mr-tooltip", { text: "Help Page", shortcut: "H", class: "Help", position: "left" }, h("mr-little-button", { onClick: () => this.handleClick("Help") }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#42c19a", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-help-circle" }, h("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), h("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })))), h("mr-tooltip", { text: "Log Out", shortcut: "Q", class: "LogOut", position: "left" }, h("mr-little-button", { onClick: () => this.handleClick("LogOut") }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#EC4E65", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-log-out" }, h("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }), h("polyline", { points: "16 17 21 12 16 7" }), h("line", { x1: "21", y1: "12", x2: "9", y2: "12" })))))));
    }
    static get assetsDirs() { return ["assets"]; }
}
MrProfilButton.style = mrProfilButtonCss;

export { MrProfilButton as mr_profil_button };
