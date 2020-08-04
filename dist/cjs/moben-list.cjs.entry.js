'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e89bd670.js');

const mobenListCss = ":host{display:block}.Wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100vw}h1{font-family:'Helvetica Neue', sans-serif;font-size:4vw;color:rgba(0,0,0,.8);margin:0 auto;margin-left:1vw}.Image-Wrapper{width:95%;height:50%;margin:2.5%;background:rgba(0,0,0, .4)}";

class MobenList {
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
}
MobenList.style = mobenListCss;

exports.moben_list = MobenList;
