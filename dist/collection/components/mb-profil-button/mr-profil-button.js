import { Component, h, Event } from "@stencil/core";
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
                    h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#42c19A", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-user" },
                        h("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                        h("circle", { cx: "12", cy: "7", r: "4" }))),
                h("mr-little-button", { class: "Help", onClick: () => this.handleClick("Help") },
                    h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#42c19a", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-help-circle" },
                        h("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
                        h("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }))),
                h("mr-little-button", { class: "LogOut", onClick: () => this.handleClick("LogOut") },
                    h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#EC4E65", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-log-out" },
                        h("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
                        h("polyline", { points: "16 17 21 12 16 7" }),
                        h("line", { x1: "21", y1: "12", x2: "9", y2: "12" }))))));
    }
    static get is() { return "mr-profil-button"; }
    static get encapsulation() { return "shadow"; }
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
