import{r as t,c as e,h as i}from"./p-9cd44316.js";class s{constructor(i){t(this,i),this._value=0,this.valueChange=e(this,"valueChange",7)}set value(t){this._value=t,this.valueElement.innerText=""+this._value,this.valueChange.emit(this._value)}get value(){return this._value}static get observedAttributes(){return["value"]}componentDidLoad(){this.incrementButton.addEventListener("click",()=>this.value++),this.decrementButton.addEventListener("click",()=>this.value--)}render(){return i("div",null,i("button",{ref:t=>this.decrementButton=t,"aria-label":"decrement"},"-"),i("p",{ref:t=>this.valueElement=t},"0"),i("button",{"aria-label":"increment",ref:t=>this.incrementButton=t},"+"))}}s.style="button,p{display:inline-block}";export{s as x_counter}