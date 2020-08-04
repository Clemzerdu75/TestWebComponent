import { r as registerInstance, h } from './index-c9ff436a.js';

const myComponentCss = ":host{display:block}h1{font-family:'Helvetica Neue', sans-serif;font-size:8vw;color:rgba(0,0,0,.8);margin:0 auto;text-align:center}";

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("h1", null, "Web Component");
    }
}
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
