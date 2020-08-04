import { Component, h, getAssetPath, Event } from "@stencil/core";
export class MrProfilButton {
    handleClick(name) {
        this.buttonToggle.emit(name);
    }
    render() {
        return (h("div", { class: "Wrapper" },
            h("div", { class: "MainButtonWrapper" },
                h("h2", null, "CF")),
            h("div", { class: "OtherButtonWrapper" },
                h("mr-little-button", { class: "Profil", onClick: () => this.handleClick("Profil") },
                    h("img", { src: getAssetPath(`./assets/user.svg`), alt: "Profil" })),
                h("mr-little-button", { class: "Help", onClick: () => this.handleClick("Help") },
                    h("img", { src: getAssetPath(`./assets/help.svg`), alt: "Help" })),
                h("mr-little-button", { class: "LogOut", onClick: () => this.handleClick("LogOut") },
                    h("img", { src: getAssetPath(`./assets/log-out.svg`), alt: "logOut" })))));
    }
    static get is() { return "mr-profil-button"; }
    static get originalStyleUrls() { return {
        "$": ["mr-profil-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["mr-profil-button.css"]
    }; }
    static get assetsDirs() { return ["assets"]; }
    static get events() { return [{
            "method": "buttonToggle",
            "name": "buttonToggle",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
