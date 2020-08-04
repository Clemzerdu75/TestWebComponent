import { r as registerInstance, h } from './index-a6c9c68c.js';
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
        enumerable: false,
        configurable: true
    });
    return MobenList;
}());
MobenList.style = mobenListCss;
export { MobenList as moben_list };
