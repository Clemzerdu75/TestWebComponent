System.register(["./p-262d7fe9.system.js"],(function(t){"use strict";var e,o,r;return{setters:[function(t){e=t.r;o=t.h;r=t.H}],execute:function(){var i=":host{display:block;width:35px;height:35px;background:transparent}.LittleButtonWrapperWC{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:35px;height:35px;border-radius:50%;background:linear-gradient(145deg, #e9e6e6, #ffffff);-webkit-box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;cursor:pointer;}.LittleButtonWrapperWC:hover{-webkit-box-shadow:2px 2px 15px rgba(0, 0, 0, 0.075);box-shadow:2px 2px 15px rgba(0, 0, 0, 0.075);-webkit-transform:scale(1.02);transform:scale(1.02)}.LittleButtonWrapperWC:active{-webkit-box-shadow:1px 1px 5px rgba(0, 0, 0, 0.15);box-shadow:1px 1px 5px rgba(0, 0, 0, 0.15);-webkit-transform:scale(0.93);transform:scale(0.93);-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}.LittleButtonWrapperWC.anchor{-webkit-box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff}.LittleButtonWrapperWC.anchor:hover{-webkit-box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;box-shadow:2px 2px 5px rgba(0, 0, 0, 0.15), -2px -2px 5px #ffffff;-webkit-transform:scale(1.01);transform:scale(1.01)}.LittleButtonWrapperWC.anchor:active{-webkit-transform:scale(0.98);transform:scale(0.98);-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}::slotted(img){width:60%}";var n=function(){function t(t){e(this,t);this.anchor=false}t.prototype.handleResize=function(){this.wrapper.style.border="solid "+this.wrapper.offsetWidth*.1+"px #f5f5f5"};t.prototype.componentDidLoad=function(){this.wrapper.style.border="solid "+this.wrapper.offsetWidth*.1+"px #f5f5f5"};t.prototype.render=function(){var t=this;return o(r,{class:"LittleButtonWrapperWC "+(this.anchor?"anchor":""),ref:function(e){return t.wrapper=e}},o("slot",null))};return t}();t("mr_little_button",n);n.style=i;var s=':host{display:block}.MrToolTipWrapperWC{position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;}.MrToolTipWrapperWC .ToolTip{position:absolute;display:block;opacity:0;z-index:-1;min-width:85px;max-width:300px;text-align:center;font-size:0.8rem;padding:5px 20px;background:rgba(0, 0, 0, 0.2);color:white;-webkit-transition:0.2 ease-in-out;transition:0.2 ease-in-out}.MrToolTipWrapperWC:hover .ToolTip{opacity:1;z-index:1000}.MrToolTipWrapperWC:hover .ToolTip:hover{display:none}.ToolTip::after{content:" ";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent black transparent}';var p=function(){function t(t){e(this,t);this.position="bottom"}t.prototype.componentDidRender=function(){switch(this.position){case"bottom":this.content.style.bottom="-"+(this.content.offsetHeight/this.wrapper.offsetHeight*this.wrapper.offsetHeight+30)+"px";break;case"left":this.content.style.left="-"+(this.content.offsetWidth/this.wrapper.offsetWidth*this.wrapper.offsetWidth+20)+"px";break;case"top":this.content.style.top="-"+(this.content.offsetHeight/this.wrapper.offsetHeight*this.wrapper.offsetHeight+35)+"px";break;case"right":this.content.style.right="-"+(this.content.offsetWidth/this.wrapper.offsetWidth*this.wrapper.offsetWidth+20)+"px";break}};t.prototype.render=function(){var t=this;return o(r,{ref:function(e){return t.wrapper=e},class:"MrToolTipWrapperWC"},o("slot",null),o("p",{ref:function(e){return t.content=e},class:"ToolTip"},this.text," (",o("strong",null,this.shortcut),")"))};return t}();t("mr_tooltip",p);p.style=s}}}));