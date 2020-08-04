import { r as registerInstance, h } from './index-a6c9c68c.js';
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
export { MyComponent as my_component };
