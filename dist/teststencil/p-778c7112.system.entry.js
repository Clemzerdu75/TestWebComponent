System.register(["./p-ec5f3b4f.system.js"],(function(t){"use strict";var e,r,i;return{setters:[function(t){e=t.r;r=t.h;i=t.c}],execute:function(){var n=":host{display:block;width:35px;height:35px}.Wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border-radius:50%;background:linear-gradient(145deg, #dedada, #ffffff);-webkit-box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;}.Wrapper:hover{-webkit-box-shadow:2px 2px 15px rgba(0, 0, 0, 0.075);box-shadow:2px 2px 15px rgba(0, 0, 0, 0.075);-webkit-transform:scale(1.02);transform:scale(1.02)}.Wrapper:active{-webkit-box-shadow:1px 1px 5px rgba(0, 0, 0, 0.15);box-shadow:1px 1px 5px rgba(0, 0, 0, 0.15);-webkit-transform:scale(0.9) !important;transform:scale(0.9) !important;-webkit-transition:0.1s ease-in-out;transition:0.1s ease-in-out}::slotted(img){width:60%}";var o=function(){function t(t){e(this,t)}t.prototype.handleResize=function(){this.wrapper.style.border="solid "+this.wrapper.offsetWidth*.1+"px #f3f3f3"};t.prototype.componentDidLoad=function(){this.wrapper.style.border="solid "+this.wrapper.offsetWidth*.1+"px #f3f3f3"};t.prototype.render=function(){var t=this;return r("div",{class:"Wrapper",ref:function(e){return t.wrapper=e}},r("slot",null))};return t}();t("mr_little_button",o);o.style=n;var a=":host{display:block;width:150px;height:150px;border:solid 1px blue}h2{color:white;font-weight:700;font-size:30px}.Wrapper{position:relative;width:150px;height:150px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;}.Wrapper .MainButtonWrapper{z-index:2;width:60px;height:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;border:solid 7px #f3f3f3;background:linear-gradient(145deg, #3db18e, #91ddc6);-webkit-box-shadow:5px 5px 7px #cfcfcf, -5px -5px 7px #ffffff;box-shadow:5px 5px 7px #cfcfcf, -5px -5px 7px #ffffff;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s;cursor:pointer}.Wrapper .OtherButtonWrapper{z-index:1;position:absolute;width:100%;height:100%;-webkit-animation:enter 0.2s ease-in-out;animation:enter 0.2s ease-in-out;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out;}.Wrapper .OtherButtonWrapper .MixinButton,.Wrapper .OtherButtonWrapper .LogOut,.Wrapper .OtherButtonWrapper .Help,.Wrapper .OtherButtonWrapper .Profil{position:absolute;right:15px;top:54px;cursor:pointer}.Wrapper .OtherButtonWrapper .Profil{-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s}.Wrapper .OtherButtonWrapper .Help{-webkit-transition:-webkit-transform 0.3s ease-in-out;transition:-webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s}.Wrapper .OtherButtonWrapper .LogOut{-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s}.Wrapper:hover .MainButtonWrapper{-webkit-box-shadow:5px 5px 10px #c5c5c5;box-shadow:5px 5px 10px #c5c5c5;-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transition-delay:0s !important;transition-delay:0s !important}.Wrapper:hover .OtherButtonWrapper{opacity:1}.Wrapper:hover .OtherButtonWrapper .Profil{-webkit-transform:translate(-55px, -45px);transform:translate(-55px, -45px)}.Wrapper:hover .OtherButtonWrapper .Help{-webkit-transform:translate(-73px, 0px);transform:translate(-73px, 0px)}.Wrapper:hover .OtherButtonWrapper .LogOut{-webkit-transform:translate(-55px, 45px);transform:translate(-55px, 45px)}@-webkit-keyframes enter{0%{opacity:0}90%{opacity:0}100%{opacity:1}}@keyframes enter{0%{opacity:0}90%{opacity:0}100%{opacity:1}}";var s=function(){function t(t){e(this,t);this.buttonToggle=i(this,"buttonToggle",7)}t.prototype.handleClick=function(t){this.buttonToggle.emit(t)};t.prototype.render=function(){var t=this;return r("div",{class:"Wrapper"},r("div",{class:"MainButtonWrapper"},r("h2",null,"CF")),r("div",{class:"OtherButtonWrapper"},r("mr-little-button",{class:"Profil",onClick:function(){return t.handleClick("Profil")}},r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#42c19A","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-user"},r("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r("circle",{cx:"12",cy:"7",r:"4"}))),r("mr-little-button",{class:"Help",onClick:function(){return t.handleClick("Help")}},r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#42c19a","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-help-circle"},r("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))),r("mr-little-button",{class:"LogOut",onClick:function(){return t.handleClick("LogOut")}},r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#EC4E65","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-log-out"},r("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),r("polyline",{points:"16 17 21 12 16 7"}),r("line",{x1:"21",y1:"12",x2:"9",y2:"12"})))))};Object.defineProperty(t,"assetsDirs",{get:function(){return["assets"]},enumerable:false,configurable:true});return t}();t("mr_profil_button",s);s.style=a}}}));