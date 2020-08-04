import { r as registerInstance, c as createEvent, h, g as getAssetPath } from './index-3ceb11f8.js';

const mrProfilButtonCss = ":host{display:block}h2{color:white;font-weight:700;font-size:30px}.Wrapper{position:relative;width:150px;height:150px;margin-top:-15px;padding-right:25px;display:flex;align-items:center;justify-content:flex-end}.MainButtonWrapper{z-index:2;width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:solid 7px #f3f3f3;background:linear-gradient(145deg, #3db18e, #91ddc6);box-shadow:5px 5px 7px #cfcfcf, -5px -5px 7px #ffffff;transition:0.4s ease-in-out;transition-delay:0.2s;cursor:pointer}.OtherButtonWrapper{z-index:1;position:absolute;width:100%;height:100%;transition:0.4s ease-in-out}.OtherButtonWrapper .MixinButton,.OtherButtonWrapper .LogOut,.OtherButtonWrapper .Help,.OtherButtonWrapper .Profil{position:absolute;right:15px;top:55px;cursor:pointer}.OtherButtonWrapper .Profil{transition:transform 0.2s ease-in-out;transition-delay:0.2s}.OtherButtonWrapper .Help{transition:transform 0.3s ease-in-out;transition-delay:0.2s}.OtherButtonWrapper .LogOut{transition:transform 0.4s ease-in-out;transition-delay:0.2s}.Wrapper:hover .MainButtonWrapper{box-shadow:5px 5px 10px #c5c5c5;transform:scale(1.05);transition-delay:0s !important}.Wrapper:hover .OtherButtonWrapper{opacity:1}.Wrapper:hover .OtherButtonWrapper .Profil{transform:translate(-47px, -45px)}.Wrapper:hover .OtherButtonWrapper .Help{transform:translate(-65px, 0px)}.Wrapper:hover .OtherButtonWrapper .LogOut{transform:translate(-45px, 45px)}";

class MrProfilButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonToggle = createEvent(this, "buttonToggle", 7);
    }
    handleClick(name) {
        this.buttonToggle.emit(name);
    }
    render() {
        return (h("div", { class: "Wrapper" }, h("div", { class: "MainButtonWrapper" }, h("h2", null, "CF")), h("div", { class: "OtherButtonWrapper" }, h("mr-little-button", { class: "Profil", onClick: () => this.handleClick("Profil") }, h("img", { src: getAssetPath(`./assets/user.svg`), alt: "Profil" })), h("mr-little-button", { class: "Help", onClick: () => this.handleClick("Help") }, h("img", { src: getAssetPath(`./assets/help.svg`), alt: "Help" })), h("mr-little-button", { class: "LogOut", onClick: () => this.handleClick("LogOut") }, h("img", { src: getAssetPath(`./assets/log-out.svg`), alt: "logOut" })))));
    }
    static get assetsDirs() { return ["assets"]; }
}
MrProfilButton.style = mrProfilButtonCss;

export { MrProfilButton as mr_profil_button };
