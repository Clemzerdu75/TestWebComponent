import{r as t,c as e,h as r}from"./p-04f0fb52.js";class a{constructor(r){t(this,r),this.buttonToggle=e(this,"buttonToggle",7)}handleClick(t){this.buttonToggle.emit(t)}render(){return r("div",{class:"Wrapper"},r("div",{class:"MainButtonWrapper"},r("h2",null,"CF")),r("div",{class:"OtherButtonWrapper"},r("mr-tooltip",{text:"Profil Page",shortcut:"P",class:"Profil",position:"left"},r("mr-little-button",{onClick:()=>this.handleClick("Profil")},r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#42c19A","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-user"},r("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r("circle",{cx:"12",cy:"7",r:"4"})))),r("mr-tooltip",{text:"Help Page",shortcut:"H",class:"Help",position:"left"},r("mr-little-button",{onClick:()=>this.handleClick("Help")},r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#42c19a","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-help-circle"},r("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})))),r("mr-tooltip",{text:"Log Out",shortcut:"Q",class:"LogOut",position:"left"},r("mr-little-button",{onClick:()=>this.handleClick("LogOut")},r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#EC4E65","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-log-out"},r("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),r("polyline",{points:"16 17 21 12 16 7"}),r("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))))))}static get assetsDirs(){return["assets"]}}a.style=":host{display:block;width:150px;height:150px}h2{color:white;font-weight:700;font-size:30px}.Wrapper{position:relative;width:150px;height:150px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;}.Wrapper .MainButtonWrapper{z-index:2;width:60px;height:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;border:solid 7px #f5f5f5;background:linear-gradient(145deg, #3db18e, #91ddc6);-webkit-box-shadow:5px 5px 7px #cfcfcf, -5px -5px 7px #ffffff;box-shadow:5px 5px 7px #cfcfcf, -5px -5px 7px #ffffff;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s;cursor:pointer}.Wrapper .OtherButtonWrapper{z-index:1;position:absolute;width:100%;height:100%;-webkit-animation:enter 0.2s ease-in-out;animation:enter 0.2s ease-in-out;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out;}.Wrapper .OtherButtonWrapper .MixinButton,.Wrapper .OtherButtonWrapper .LogOut,.Wrapper .OtherButtonWrapper .Help,.Wrapper .OtherButtonWrapper .Profil{position:absolute;right:15px;top:54px;cursor:pointer}.Wrapper .OtherButtonWrapper .Profil{-webkit-transition:-webkit-transform 0.2s ease-in-out;transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s;z-index:3}.Wrapper .OtherButtonWrapper .Help{-webkit-transition:-webkit-transform 0.3s ease-in-out;transition:-webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s;z-index:2}.Wrapper .OtherButtonWrapper .LogOut{-webkit-transition:-webkit-transform 0.4s ease-in-out;transition:-webkit-transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out;transition:transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;-webkit-transition-delay:0.2s;transition-delay:0.2s;z-index:1}.Wrapper:hover .MainButtonWrapper{-webkit-box-shadow:5px 5px 10px #c5c5c5;box-shadow:5px 5px 10px #c5c5c5;-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transition-delay:0s !important;transition-delay:0s !important}.Wrapper:hover .OtherButtonWrapper{opacity:1}.Wrapper:hover .OtherButtonWrapper .Profil{-webkit-transform:translate(-55px, -45px);transform:translate(-55px, -45px)}.Wrapper:hover .OtherButtonWrapper .Profil.active{-webkit-transform:translate(-55px, -45px) scale(0.93);transform:translate(-55px, -45px) scale(0.93)}.Wrapper:hover .OtherButtonWrapper .Help{-webkit-transform:translate(-73px, 0px);transform:translate(-73px, 0px)}.Wrapper:hover .OtherButtonWrapper .Help.active{-webkit-transform:translate(-73px, 0px) scale(0.93);transform:translate(-73px, 0px) scale(0.93)}.Wrapper:hover .OtherButtonWrapper .LogOut{-webkit-transform:translate(-55px, 45px);transform:translate(-55px, 45px)}.Wrapper:hover .OtherButtonWrapper .LogOut.active{-webkit-transform:translate(-55px, 45px) scale(0.93);transform:translate(-55px, 45px) scale(0.93)}@-webkit-keyframes enter{0%{opacity:0}90%{opacity:0}100%{opacity:1}}@keyframes enter{0%{opacity:0}90%{opacity:0}100%{opacity:1}}";export{a as mr_profil_button}