(self.webpackChunkwebpack_hw=self.webpackChunkwebpack_hw||[]).push([[826],{705:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var A={};if(t)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(A[o]=!0)}for(var s=0;s<n.length;s++){var a=[].concat(n[s]);t&&A[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),r.push(a))}},r}},880:n=>{"use strict";function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,A=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,A,i=[],o=!0,s=!1;try{for(e=e.call(n);!(o=(t=e.next()).done)&&(i.push(t.value),!r||i.length!==r);o=!0);}catch(n){s=!0,A=n}finally{try{o||null==e.return||e.return()}finally{if(s)throw A}}return i}}(e,t)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=A[1],o=A[3];if(!o)return i;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),c="/*# ".concat(a," */"),l=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[i].concat(l).concat([c]).join("\n")}return[i].join("\n")}},191:()=>{const n=document.querySelector(".icon"),r=document.querySelector(".menu");n.addEventListener("click",(()=>{n.classList.toggle("open"),r.classList.toggle("hidden")}))},891:()=>{fetch("./story/skills.json").then((n=>n.json())).then((n=>{setTimeout((()=>{const r=document.querySelector(".skills");n.skills.forEach((n=>{r.insertAdjacentHTML("beforeend",`<div class="skills__item">\n              <h3>${n.nameSkill}</h3>\n              <h3> Level of knowledge: ${n.rangSkiil}</h3>\n          </div>`)})),document.querySelector(".lds-spinner").style.display="none"}),2e3)}))},923:(n,r,e)=>{"use strict";var t=e(379),A=e.n(t),i=e(795),o=e.n(i),s=e(569),a=e.n(s),c=e(565),l=e.n(c),d=e(216),p=e.n(d),C=e(589),m=e.n(C),u=e(279),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),A()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,e(191),e(891)},171:(n,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e(880),A=e.n(t),i=e(705),o=e.n(i)()(A());o.push([n.id,".footer{display:flex;flex-direction:column;align-items:center}.footer__title{padding-bottom:20px;font-size:2.5rem}.footer__rights,.footer__description{margin-top:20px;text-align:center;font-size:1.2rem}.footer__link{margin-top:20px;background-color:#000;color:#fff;padding:10px 30px;border-radius:20px;text-decoration:none;font-size:1.2rem}@media screen and (min-width: 1000px){.footer__title{font-size:4rem}}.social{width:100%;display:flex;justify-content:space-between;margin-top:20px}.social__svg{width:30px}","",{version:3,sources:["webpack://./src/components/footer/footer.scss"],names:[],mappings:"AAOA,QACI,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,eACI,mBAAA,CACA,gBAAA,CAGJ,qCACI,eAAA,CACA,iBAAA,CACA,gBAAA,CAGJ,cACI,eAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CACA,kBAAA,CACA,oBAAA,CACA,gBAAA,CAGJ,sCACI,eACI,cAAA,CAAA,CAKZ,QACI,UAAA,CACA,YAAA,CACA,6BAAA,CACA,eAAA,CACA,aACI,UAAA",sourcesContent:["@mixin basic-hover {\r\n    color: #000;\r\n    text-decoration: underline;\r\n}\r\n  \r\n$font-size-4rem: 4rem;\r\n\r\n.footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    &__title {\r\n        padding-bottom: 20px;\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    &__rights, &__description {\r\n        margin-top: 20px;\r\n        text-align: center;\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    &__link {\r\n        margin-top: 20px;\r\n        background-color: #000;\r\n        color: #fff;\r\n        padding: 10px 30px;\r\n        border-radius: 20px;\r\n        text-decoration: none;\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    @media screen and (min-width: 1000px) {\r\n        &__title {\r\n            font-size: 4rem;\r\n        }\r\n    } \r\n}\r\n\r\n.social {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 20px;\r\n    &__svg {\r\n        width: 30px;\r\n    }\r\n}\r\n\r\n"],sourceRoot:""}]);const s=o},293:(n,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e(880),A=e.n(t),i=e(705),o=e.n(i)()(A());o.push([n.id,".header{background-color:#f6f6f6;position:relative}.nav{display:flex;justify-content:flex-end}.menu{list-style:none;position:absolute;top:50px;width:100%;height:100vh;z-index:9999;background-color:#fff}.menu__item{padding:15px;font-size:1.5rem}.menu__link{text-decoration:none;color:gray}.menu__link:hover{color:#000;text-decoration:underline}.hidden{display:none}.icon{margin:20px}.nav-icon-1{width:30px;height:30px;position:relative;transition:.1s;margin:10px 20px 10px 10px;cursor:pointer;display:inline-block}.nav-icon-1 span{width:5px;height:5px;background-color:#000;display:block;border-radius:50%;position:absolute}.nav-icon-1:hover span{transform:scale(1.2);transition:350ms cubic-bezier(0.8, 0.5, 0.2, 1.4)}.nav-icon-1 span:nth-child(1){left:0;top:0}.nav-icon-1 span:nth-child(2){left:12px;top:0}.nav-icon-1 span:nth-child(3){right:0;top:0}.nav-icon-1 span:nth-child(4){left:0;top:12px}.nav-icon-1 span:nth-child(5){position:absolute;left:12px;top:12px}.nav-icon-1 span:nth-child(6){right:0px;top:12px}.nav-icon-1 span:nth-child(7){left:0px;bottom:0px}.nav-icon-1 span:nth-child(8){position:absolute;left:12px;bottom:0px}.nav-icon-1 span:nth-child(9){right:0px;bottom:0px}.nav-icon-1.open{transform:rotate(180deg);cursor:pointer;transition:.2s cubic-bezier(0.8, 0.5, 0.2, 1.4)}.nav-icon-1.open span{border-radius:50%;transition-delay:200ms;transition:.5s cubic-bezier(0.8, 0.5, 0.2, 1.4)}.nav-icon-1.open span:nth-child(2){left:6px;top:6px}.nav-icon-1.open span:nth-child(4){left:6px;top:18px}.nav-icon-1.open span:nth-child(6){right:6px;top:6px}.nav-icon-1.open span:nth-child(8){left:18px;bottom:6px}@media screen and (min-width: 1000px){.icon{display:none}.hidden{display:block}.nav{width:1000px;margin:0 auto}.menu{position:static;top:0;height:50px;background-color:#f6f6f6;display:flex;justify-content:space-around}}","",{version:3,sources:["webpack://./src/components/header/header.scss"],names:[],mappings:"AAQA,QACI,wBAJM,CAKN,iBAAA,CAGJ,KACI,YAAA,CACA,wBAAA,CAGJ,MACI,eAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,YAAA,CACA,YAAA,CACA,qBAAA,CACA,YACE,YAAA,CACA,gBAAA,CAEF,YACE,oBAAA,CACA,UA1BO,CA2BP,kBAhCJ,UAAA,CACA,yBAAA,CAqCF,QACE,YAAA,CAKF,MACI,WAAA,CAGJ,YACI,UAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,0BAAA,CACA,cAAA,CACA,oBAAA,CAEF,iBACE,SAAA,CACA,UAAA,CACA,qBAAA,CACA,aAAA,CACA,iBAAA,CACA,iBAAA,CAGF,uBACE,oBAAA,CACA,iDAAA,CAEF,8BACE,MAAA,CACA,KAAA,CAEF,8BACE,SAAA,CACA,KAAA,CAEF,8BACE,OAAA,CACA,KAAA,CAEF,8BACE,MAAA,CACA,QAAA,CAEF,8BACE,iBAAA,CACA,SAAA,CACA,QAAA,CAEF,8BACE,SAAA,CACA,QAAA,CAEF,8BACE,QAAA,CACA,UAAA,CAEF,8BACE,iBAAA,CACA,SAAA,CACA,UAAA,CAEF,8BACE,SAAA,CACA,UAAA,CAEF,iBACE,wBAAA,CACA,cAAA,CACA,+CAAA,CAEF,sBACE,iBAAA,CACA,sBAAA,CACA,+CAAA,CAEF,mCACE,QAAA,CACA,OAAA,CAEF,mCACE,QAAA,CACA,QAAA,CAEF,mCACE,SAAA,CACA,OAAA,CAEF,mCACE,SAAA,CACA,UAAA,CAGF,sCACE,MACE,YAAA,CAGF,QACE,aAAA,CAGF,KACE,YAAA,CACA,aAAA,CAGF,MACE,eAAA,CACA,KAAA,CACA,WAAA,CACA,wBAAA,CACA,YAAA,CACA,4BAAA,CAAA",sourcesContent:["@mixin basic-hover {\r\n  color: #000;\r\n  text-decoration: underline;\r\n}\r\n\r\n$bg-grey: #f6f6f6;\r\n$color-grey: grey;\r\n\r\n.header {\r\n    background-color: $bg-grey;\r\n    position: relative;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.menu {\r\n    list-style: none;\r\n    position: absolute;\r\n    top: 50px;\r\n    width: 100%;\r\n    height: 100vh;\r\n    z-index: 9999;\r\n    background-color: #fff;\r\n    &__item {\r\n      padding: 15px;\r\n      font-size: 1.5rem;\r\n    }\r\n    &__link {\r\n      text-decoration: none;\r\n      color: $color-grey;\r\n      &:hover {\r\n        @include basic-hover();\r\n      }\r\n    }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* burger icon */\r\n\r\n.icon {\r\n    margin: 20px;\r\n}\r\n\r\n.nav-icon-1{\r\n    width: 30px;\r\n    height: 30px;\r\n    position: relative;\r\n    transition: .1s;\r\n    margin: 10px 20px 10px 10px;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n  }\r\n  .nav-icon-1 span{\r\n    width: 5px;\r\n    height: 5px;\r\n    background-color: #000;\r\n    display: block;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n  \r\n  }\r\n  .nav-icon-1:hover span{\r\n    transform: scale(1.2);\r\n    transition: 350ms cubic-bezier(.8, .5, .2, 1.4);\r\n  }\r\n  .nav-icon-1 span:nth-child(1){\r\n    left: 0;\r\n    top: 0;\r\n  }\r\n  .nav-icon-1 span:nth-child(2){\r\n    left: 12px;\r\n    top: 0;\r\n  }\r\n  .nav-icon-1 span:nth-child(3){\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  .nav-icon-1 span:nth-child(4){\r\n    left: 0;\r\n    top: 12px;\r\n  }\r\n  .nav-icon-1 span:nth-child(5){\r\n    position: absolute;\r\n    left: 12px;\r\n    top: 12px;\r\n  }\r\n  .nav-icon-1 span:nth-child(6){\r\n    right: 0px;\r\n    top: 12px;\r\n  }\r\n  .nav-icon-1 span:nth-child(7){\r\n    left: 0px;\r\n    bottom: 0px;\r\n  }\r\n  .nav-icon-1 span:nth-child(8){\r\n    position: absolute;\r\n    left: 12px;\r\n    bottom: 0px;\r\n  }\r\n  .nav-icon-1 span:nth-child(9){\r\n    right: 0px;\r\n    bottom: 0px;\r\n  }\r\n  .nav-icon-1.open{\r\n    transform: rotate(180deg);\r\n    cursor: pointer;\r\n    transition: .2s cubic-bezier(.8, .5, .2, 1.4);\r\n  }\r\n  .nav-icon-1.open span{\r\n    border-radius: 50%;\r\n    transition-delay: 200ms;\r\n    transition: .5s cubic-bezier(.8, .5, .2, 1.4);\r\n  }\r\n  .nav-icon-1.open span:nth-child(2) {\r\n    left: 6px;\r\n    top: 6px;\r\n  }\r\n  .nav-icon-1.open span:nth-child(4) {\r\n    left: 6px;\r\n    top: 18px;\r\n  }\r\n  .nav-icon-1.open span:nth-child(6) {\r\n    right: 6px;\r\n    top: 6px;\r\n  }\r\n  .nav-icon-1.open span:nth-child(8) {\r\n    left: 18px;\r\n    bottom: 6px;\r\n  }\r\n\r\n  @media screen and (min-width: 1000px) {\r\n    .icon {\r\n      display: none;\r\n    }\r\n\r\n    .hidden {\r\n      display: block;\r\n    }\r\n\r\n    .nav {\r\n      width: 1000px;\r\n      margin: 0 auto;\r\n    }\r\n\r\n    .menu {\r\n      position: static;\r\n      top: 0;\r\n      height: 50px;\r\n      background-color: #f6f6f6;\r\n      display: flex;\r\n      justify-content: space-around;\r\n    }\r\n} "],sourceRoot:""}]);const s=o},853:(n,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e(880),A=e.n(t),i=e(705),o=e.n(i)()(A());o.push([n.id,".main{display:flex;flex-direction:column;justify-content:center;align-items:center}.main__title{text-align:center;font-size:3rem;padding-bottom:30px}.main__position,.main__personal-info{font-size:1.5rem;padding:10px 0}.main__picture{margin-top:20px;height:250px;border:3px solid gray;border-radius:5px}@media screen and (min-width: 1000px){.main__picture{height:450px}}","",{version:3,sources:["webpack://./src/components/myself/myself.scss"],names:[],mappings:"AAAA,MACI,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CAEA,aACI,iBAAA,CACA,cAAA,CACA,mBAAA,CAGJ,qCAEI,gBAAA,CACA,cAAA,CAGJ,eACI,eAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CAGJ,sCACI,eACI,YAAA,CAAA",sourcesContent:[".main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    &__title {\r\n        text-align: center;\r\n        font-size: 3rem;\r\n        padding-bottom: 30px;\r\n    }\r\n\r\n    &__position,\r\n    &__personal-info {\r\n        font-size: 1.5rem;\r\n        padding: 10px 0;\r\n    }\r\n\r\n    &__picture {\r\n        margin-top: 20px;\r\n        height: 250px;\r\n        border: 3px solid grey;\r\n        border-radius: 5px;\r\n    }\r\n\r\n    @media screen and (min-width: 1000px) {\r\n        &__picture {\r\n            height: 450px;\r\n        }\r\n    } \r\n}\r\n\r\n"],sourceRoot:""}]);const s=o},807:(n,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e(880),A=e.n(t),i=e(705),o=e.n(i)()(A());o.push([n.id,'.skills{margin:30px 0;display:flex;flex-direction:column;align-items:center}.skills__title{font-size:1.5rem;text-align:center;margin-top:50px}.skills__item{width:200px;height:200px;margin-top:15px;border:3px solid gray;border-radius:10px;display:flex;flex-direction:column;justify-content:space-around;align-items:center;background-color:silver}@media screen and (min-width: 1000px){.skills{flex-direction:row;justify-content:space-around;flex-wrap:wrap}.skills__title{font-size:4rem}}.lds-spinner{color:official;display:inline-block;position:relative;width:80px;height:80px}.lds-spinner div{transform-origin:40px 40px;animation:lds-spinner 1.2s linear infinite}.lds-spinner div:after{content:" ";display:block;position:absolute;top:3px;left:37px;width:6px;height:18px;border-radius:20%;background:#000}.lds-spinner div:nth-child(1){transform:rotate(0deg);animation-delay:-1.1s}.lds-spinner div:nth-child(2){transform:rotate(30deg);animation-delay:-1s}.lds-spinner div:nth-child(3){transform:rotate(60deg);animation-delay:-0.9s}.lds-spinner div:nth-child(4){transform:rotate(90deg);animation-delay:-0.8s}.lds-spinner div:nth-child(5){transform:rotate(120deg);animation-delay:-0.7s}.lds-spinner div:nth-child(6){transform:rotate(150deg);animation-delay:-0.6s}.lds-spinner div:nth-child(7){transform:rotate(180deg);animation-delay:-0.5s}.lds-spinner div:nth-child(8){transform:rotate(210deg);animation-delay:-0.4s}.lds-spinner div:nth-child(9){transform:rotate(240deg);animation-delay:-0.3s}.lds-spinner div:nth-child(10){transform:rotate(270deg);animation-delay:-0.2s}.lds-spinner div:nth-child(11){transform:rotate(300deg);animation-delay:-0.1s}.lds-spinner div:nth-child(12){transform:rotate(330deg);animation-delay:0s}@keyframes lds-spinner{0%{opacity:1}100%{opacity:0}}',"",{version:3,sources:["webpack://./src/components/skills/skills.scss"],names:[],mappings:"AAAA,QACI,aAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,eACE,gBAAA,CACA,iBAAA,CACA,eAAA,CAGF,cACE,WAAA,CACA,YAAA,CACA,eAAA,CACA,qBAAA,CACA,kBAAA,CACA,YAAA,CACA,qBAAA,CACA,4BAAA,CACA,kBAAA,CACA,uBAAA,CAGF,sCACE,QACI,kBAAA,CACA,4BAAA,CACA,cAAA,CAGJ,eACI,cAAA,CAAA,CASV,aACI,cAAA,CACA,oBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CAEF,iBACE,0BAAA,CACA,0CAAA,CAEF,uBACE,WAAA,CACA,aAAA,CACA,iBAAA,CACA,OAAA,CACA,SAAA,CACA,SAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CAEF,8BACE,sBAAA,CACA,qBAAA,CAEF,8BACE,uBAAA,CACA,mBAAA,CAEF,8BACE,uBAAA,CACA,qBAAA,CAEF,8BACE,uBAAA,CACA,qBAAA,CAEF,8BACE,wBAAA,CACA,qBAAA,CAEF,8BACE,wBAAA,CACA,qBAAA,CAEF,8BACE,wBAAA,CACA,qBAAA,CAEF,8BACE,wBAAA,CACA,qBAAA,CAEF,8BACE,wBAAA,CACA,qBAAA,CAEF,+BACE,wBAAA,CACA,qBAAA,CAEF,+BACE,wBAAA,CACA,qBAAA,CAEF,+BACE,wBAAA,CACA,kBAAA,CAEF,uBACE,GACE,SAAA,CAEF,KACE,SAAA,CAAA",sourcesContent:['.skills {\r\n    margin: 30px 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    &__title {\r\n      font-size: 1.5rem;\r\n      text-align: center;\r\n      margin-top: 50px;\r\n    }\r\n\r\n    &__item {\r\n      width: 200px;\r\n      height: 200px;\r\n      margin-top: 15px;\r\n      border: 3px solid grey;\r\n      border-radius: 10px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-around;\r\n      align-items: center;\r\n      background-color: rgb(192, 192, 192);\r\n    }\r\n\r\n    @media screen and (min-width: 1000px) {\r\n      & {\r\n          flex-direction: row;\r\n          justify-content: space-around;\r\n          flex-wrap: wrap;\r\n      }\r\n  \r\n      &__title {\r\n          font-size: 4rem;\r\n      }\r\n  } \r\n}\r\n\r\n\r\n\r\n/* loaders */\r\n\r\n.lds-spinner {\r\n    color: official;\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .lds-spinner div {\r\n    transform-origin: 40px 40px;\r\n    animation: lds-spinner 1.2s linear infinite;\r\n  }\r\n  .lds-spinner div:after {\r\n    content: " ";\r\n    display: block;\r\n    position: absolute;\r\n    top: 3px;\r\n    left: 37px;\r\n    width: 6px;\r\n    height: 18px;\r\n    border-radius: 20%;\r\n    background: #000;\r\n  }\r\n  .lds-spinner div:nth-child(1) {\r\n    transform: rotate(0deg);\r\n    animation-delay: -1.1s;\r\n  }\r\n  .lds-spinner div:nth-child(2) {\r\n    transform: rotate(30deg);\r\n    animation-delay: -1s;\r\n  }\r\n  .lds-spinner div:nth-child(3) {\r\n    transform: rotate(60deg);\r\n    animation-delay: -0.9s;\r\n  }\r\n  .lds-spinner div:nth-child(4) {\r\n    transform: rotate(90deg);\r\n    animation-delay: -0.8s;\r\n  }\r\n  .lds-spinner div:nth-child(5) {\r\n    transform: rotate(120deg);\r\n    animation-delay: -0.7s;\r\n  }\r\n  .lds-spinner div:nth-child(6) {\r\n    transform: rotate(150deg);\r\n    animation-delay: -0.6s;\r\n  }\r\n  .lds-spinner div:nth-child(7) {\r\n    transform: rotate(180deg);\r\n    animation-delay: -0.5s;\r\n  }\r\n  .lds-spinner div:nth-child(8) {\r\n    transform: rotate(210deg);\r\n    animation-delay: -0.4s;\r\n  }\r\n  .lds-spinner div:nth-child(9) {\r\n    transform: rotate(240deg);\r\n    animation-delay: -0.3s;\r\n  }\r\n  .lds-spinner div:nth-child(10) {\r\n    transform: rotate(270deg);\r\n    animation-delay: -0.2s;\r\n  }\r\n  .lds-spinner div:nth-child(11) {\r\n    transform: rotate(300deg);\r\n    animation-delay: -0.1s;\r\n  }\r\n  .lds-spinner div:nth-child(12) {\r\n    transform: rotate(330deg);\r\n    animation-delay: 0s;\r\n  }\r\n  @keyframes lds-spinner {\r\n    0% {\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n  '],sourceRoot:""}]);const s=o},362:(n,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e(880),A=e.n(t),i=e(705),o=e.n(i)()(A());o.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const s=o},226:(n,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e(880),A=e.n(t),i=e(705),o=e.n(i)()(A());o.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const s=o},79:(n,r,e)=>{"use strict";e.d(r,{Z:()=>l});var t=e(880),A=e.n(t),i=e(705),o=e.n(i),s=e(226),a=e(362),c=o()(A());c.i(s.Z),c.i(a.Z),c.push([n.id,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}","",{version:3,sources:["webpack://./src/styles/normalize.scss"],names:[],mappings:"AAGA,2EAAA,CAUC,KACC,gBAAA,CACA,6BAAA,CAUF,KACE,QAAA,CAOF,KACE,aAAA,CAQF,GACE,aAAA,CACA,cAAA,CAWF,GACE,sBAAA,CACA,QAAA,CACA,gBAAA,CAQF,IACE,+BAAA,CACA,aAAA,CAUF,EACE,4BAAA,CAQF,YACE,kBAAA,CACA,yBAAA,CACA,gCAAA,CAOF,SAEE,kBAAA,CAQF,cAGE,+BAAA,CACA,aAAA,CAOF,MACE,aAAA,CAQF,QAEE,aAAA,CACA,aAAA,CACA,iBAAA,CACA,uBAAA,CAGF,IACE,cAAA,CAGF,IACE,UAAA,CAUF,IACE,iBAAA,CAWF,sCAKE,mBAAA,CACA,cAAA,CACA,gBAAA,CACA,QAAA,CAQF,aAEE,gBAAA,CAQF,cAEE,mBAAA,CAOF,gDAIE,yBAAA,CAOF,wHAIE,iBAAA,CACA,SAAA,CAOF,4GAIE,6BAAA,CAOF,SACE,0BAAA,CAUF,OACE,qBAAA,CACA,aAAA,CACA,aAAA,CACA,cAAA,CACA,SAAA,CACA,kBAAA,CAOF,SACE,uBAAA,CAOF,SACE,aAAA,CAQF,6BAEE,qBAAA,CACA,SAAA,CAOF,kFAEE,WAAA,CAQF,cACE,4BAAA,CACA,mBAAA,CAOF,yCACE,uBAAA,CAQF,6BACE,yBAAA,CACA,YAAA,CAUF,QACE,aAAA,CAOF,QACE,iBAAA,CAUF,SACE,YAAA,CAOF,SACE,YAAA",sourcesContent:['@import url(\'./__variables.scss\');\r\n@import url(\'./__mixins.scss\');\r\n\r\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type="button"],\r\n[type="reset"],\r\n[type="submit"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type="button"]::-moz-focus-inner,\r\n[type="reset"]::-moz-focus-inner,\r\n[type="submit"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type="button"]:-moz-focusring,\r\n[type="reset"]:-moz-focusring,\r\n[type="submit"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type="checkbox"],\r\n[type="radio"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type="number"]::-webkit-inner-spin-button,\r\n[type="number"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type="search"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type="search"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}'],sourceRoot:""}]);const l=c},279:(n,r,e)=>{"use strict";e.d(r,{Z:()=>m});var t=e(880),A=e.n(t),i=e(705),o=e.n(i),s=e(79),a=e(226),c=e(293),l=e(853),d=e(807),p=e(171),C=o()(A());C.i(s.Z),C.i(a.Z),C.i(c.Z),C.i(l.Z),C.i(d.Z),C.i(p.Z),C.push([n.id,".wrapper{padding:50px 25px}@media screen and (min-width: 1000px){.wrapper{width:1000px;margin:0 auto}}","",{version:3,sources:["webpack://./src/styles/style.scss"],names:[],mappings:"AAOA,SACI,iBAAA,CAGJ,sCACI,SACI,YAAA,CACA,aAAA,CAAA",sourcesContent:["@import url('./normalize.scss');\r\n@import url('./__variables.scss');\r\n@import url('../components/header/header.scss');\r\n@import url('../components/myself/myself.scss');\r\n@import url('../components/skills/skills.scss');\r\n@import url('../components/footer/footer.scss');\r\n\r\n.wrapper {\r\n    padding: 50px 25px;\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n    .wrapper {\r\n        width: 1000px;\r\n        margin: 0 auto;\r\n    }\r\n} "],sourceRoot:""}]);const m=C},379:n=>{"use strict";var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},o=[],s=0;s<n.length;s++){var a=n[s],c=t.base?a[0]+t.base:a[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var p=e(d),C={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(r[p].references++,r[p].updater(C)):r.push({identifier:d,updater:A(C,t),references:1}),o.push(d)}return o}function A(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e.update(n=r)}else e.remove()}}n.exports=function(n,A){var i=t(n=n||[],A=A||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var s=e(i[o]);r[s].references--}for(var a=t(n,A),c=0;c<i.length;c++){var l=e(i[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=a}}},569:n=>{"use strict";var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},565:(n,r,e)=>{"use strict";n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{"use strict";n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t=e.css,A=e.media,i=e.sourceMap;A?n.setAttribute("media",A):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{"use strict";n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},n=>{n(n.s=923)}]);