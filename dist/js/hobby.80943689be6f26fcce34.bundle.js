"use strict";(self.webpackChunkwebpack_hw=self.webpackChunkwebpack_hw||[]).push([[813],{705:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var A=0;A<this.length;A++){var i=this[A][0];null!=i&&(o[i]=!0)}for(var a=0;a<n.length;a++){var s=[].concat(n[a]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},880:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,o=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,o,A=[],i=!0,a=!1;try{for(e=e.call(n);!(i=(t=e.next()).done)&&(A.push(t.value),!r||A.length!==r);i=!0);}catch(n){a=!0,o=n}finally{try{i||null==e.return||e.return()}finally{if(a)throw o}}return A}}(e,t)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),A=o[1],i=o[3];if(!i)return A;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(s," */"),p=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[A].concat(p).concat([c]).join("\n")}return[A].join("\n")}},36:(n,r,e)=>{var t=e(379),o=e.n(t),A=e(795),i=e.n(A),a=e(569),s=e.n(a),c=e(565),p=e.n(c),l=e(216),d=e.n(l),C=e(589),u=e.n(C),m=e(240),h={};h.styleTagTransform=u(),h.setAttributes=p(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),o()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=e(293),b={};b.styleTagTransform=u(),b.setAttributes=p(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=d(),o()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;var g=e(897),x={};x.styleTagTransform=u(),x.setAttributes=p(),x.insert=s().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=d(),o()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals},171:(n,r,e)=>{e.d(r,{Z:()=>a});var t=e(880),o=e.n(t),A=e(705),i=e.n(A)()(o());i.push([n.id,".footer{display:flex;flex-direction:column;align-items:center}.footer__title{padding-bottom:20px;font-size:2.5rem}.footer__rights,.footer__description{margin-top:20px;text-align:center;font-size:1.2rem}.footer__link{margin-top:20px;background-color:#000;color:#fff;padding:10px 30px;border-radius:20px;text-decoration:none;font-size:1.2rem}@media screen and (min-width: 1000px){.footer__title{font-size:4rem}}.social{width:100%;display:flex;justify-content:space-between;margin-top:20px}.social__svg{width:30px}","",{version:3,sources:["webpack://./src/components/footer/footer.scss"],names:[],mappings:"AAOA,QACI,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,eACI,mBAAA,CACA,gBAAA,CAGJ,qCACI,eAAA,CACA,iBAAA,CACA,gBAAA,CAGJ,cACI,eAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CACA,kBAAA,CACA,oBAAA,CACA,gBAAA,CAGJ,sCACI,eACI,cAAA,CAAA,CAKZ,QACI,UAAA,CACA,YAAA,CACA,6BAAA,CACA,eAAA,CACA,aACI,UAAA",sourcesContent:["@mixin basic-hover {\r\n    color: #000;\r\n    text-decoration: underline;\r\n}\r\n  \r\n$font-size-4rem: 4rem;\r\n\r\n.footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    &__title {\r\n        padding-bottom: 20px;\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    &__rights, &__description {\r\n        margin-top: 20px;\r\n        text-align: center;\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    &__link {\r\n        margin-top: 20px;\r\n        background-color: #000;\r\n        color: #fff;\r\n        padding: 10px 30px;\r\n        border-radius: 20px;\r\n        text-decoration: none;\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    @media screen and (min-width: 1000px) {\r\n        &__title {\r\n            font-size: 4rem;\r\n        }\r\n    } \r\n}\r\n\r\n.social {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 20px;\r\n    &__svg {\r\n        width: 30px;\r\n    }\r\n}\r\n\r\n"],sourceRoot:""}]);const a=i},293:(n,r,e)=>{e.d(r,{Z:()=>a});var t=e(880),o=e.n(t),A=e(705),i=e.n(A)()(o());i.push([n.id,".header{background-color:#f6f6f6;position:relative}.nav{display:flex;justify-content:flex-end}.menu{list-style:none;position:absolute;top:50px;width:100%;height:100vh;z-index:9999;background-color:#fff}.menu__item{padding:15px;font-size:1.5rem}.menu__link{text-decoration:none;color:gray}.menu__link:hover{color:#000;text-decoration:underline}.hidden{display:none}.icon{margin:20px}.nav-icon-1{width:30px;height:30px;position:relative;transition:.1s;margin:10px 20px 10px 10px;cursor:pointer;display:inline-block}.nav-icon-1 span{width:5px;height:5px;background-color:#000;display:block;border-radius:50%;position:absolute}.nav-icon-1:hover span{transform:scale(1.2);transition:350ms cubic-bezier(0.8, 0.5, 0.2, 1.4)}.nav-icon-1 span:nth-child(1){left:0;top:0}.nav-icon-1 span:nth-child(2){left:12px;top:0}.nav-icon-1 span:nth-child(3){right:0;top:0}.nav-icon-1 span:nth-child(4){left:0;top:12px}.nav-icon-1 span:nth-child(5){position:absolute;left:12px;top:12px}.nav-icon-1 span:nth-child(6){right:0px;top:12px}.nav-icon-1 span:nth-child(7){left:0px;bottom:0px}.nav-icon-1 span:nth-child(8){position:absolute;left:12px;bottom:0px}.nav-icon-1 span:nth-child(9){right:0px;bottom:0px}.nav-icon-1.open{transform:rotate(180deg);cursor:pointer;transition:.2s cubic-bezier(0.8, 0.5, 0.2, 1.4)}.nav-icon-1.open span{border-radius:50%;transition-delay:200ms;transition:.5s cubic-bezier(0.8, 0.5, 0.2, 1.4)}.nav-icon-1.open span:nth-child(2){left:6px;top:6px}.nav-icon-1.open span:nth-child(4){left:6px;top:18px}.nav-icon-1.open span:nth-child(6){right:6px;top:6px}.nav-icon-1.open span:nth-child(8){left:18px;bottom:6px}@media screen and (min-width: 1000px){.icon{display:none}.hidden{display:block}.nav{width:1000px;margin:0 auto}.menu{position:static;top:0;height:50px;background-color:#f6f6f6;display:flex;justify-content:space-around}}","",{version:3,sources:["webpack://./src/components/header/header.scss"],names:[],mappings:"AAQA,QACI,wBAJM,CAKN,iBAAA,CAGJ,KACI,YAAA,CACA,wBAAA,CAGJ,MACI,eAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,YAAA,CACA,YAAA,CACA,qBAAA,CACA,YACE,YAAA,CACA,gBAAA,CAEF,YACE,oBAAA,CACA,UA1BO,CA2BP,kBAhCJ,UAAA,CACA,yBAAA,CAqCF,QACE,YAAA,CAKF,MACI,WAAA,CAGJ,YACI,UAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,0BAAA,CACA,cAAA,CACA,oBAAA,CAEF,iBACE,SAAA,CACA,UAAA,CACA,qBAAA,CACA,aAAA,CACA,iBAAA,CACA,iBAAA,CAGF,uBACE,oBAAA,CACA,iDAAA,CAEF,8BACE,MAAA,CACA,KAAA,CAEF,8BACE,SAAA,CACA,KAAA,CAEF,8BACE,OAAA,CACA,KAAA,CAEF,8BACE,MAAA,CACA,QAAA,CAEF,8BACE,iBAAA,CACA,SAAA,CACA,QAAA,CAEF,8BACE,SAAA,CACA,QAAA,CAEF,8BACE,QAAA,CACA,UAAA,CAEF,8BACE,iBAAA,CACA,SAAA,CACA,UAAA,CAEF,8BACE,SAAA,CACA,UAAA,CAEF,iBACE,wBAAA,CACA,cAAA,CACA,+CAAA,CAEF,sBACE,iBAAA,CACA,sBAAA,CACA,+CAAA,CAEF,mCACE,QAAA,CACA,OAAA,CAEF,mCACE,QAAA,CACA,QAAA,CAEF,mCACE,SAAA,CACA,OAAA,CAEF,mCACE,SAAA,CACA,UAAA,CAGF,sCACE,MACE,YAAA,CAGF,QACE,aAAA,CAGF,KACE,YAAA,CACA,aAAA,CAGF,MACE,eAAA,CACA,KAAA,CACA,WAAA,CACA,wBAAA,CACA,YAAA,CACA,4BAAA,CAAA",sourcesContent:["@mixin basic-hover {\r\n  color: #000;\r\n  text-decoration: underline;\r\n}\r\n\r\n$bg-grey: #f6f6f6;\r\n$color-grey: grey;\r\n\r\n.header {\r\n    background-color: $bg-grey;\r\n    position: relative;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.menu {\r\n    list-style: none;\r\n    position: absolute;\r\n    top: 50px;\r\n    width: 100%;\r\n    height: 100vh;\r\n    z-index: 9999;\r\n    background-color: #fff;\r\n    &__item {\r\n      padding: 15px;\r\n      font-size: 1.5rem;\r\n    }\r\n    &__link {\r\n      text-decoration: none;\r\n      color: $color-grey;\r\n      &:hover {\r\n        @include basic-hover();\r\n      }\r\n    }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* burger icon */\r\n\r\n.icon {\r\n    margin: 20px;\r\n}\r\n\r\n.nav-icon-1{\r\n    width: 30px;\r\n    height: 30px;\r\n    position: relative;\r\n    transition: .1s;\r\n    margin: 10px 20px 10px 10px;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n  }\r\n  .nav-icon-1 span{\r\n    width: 5px;\r\n    height: 5px;\r\n    background-color: #000;\r\n    display: block;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n  \r\n  }\r\n  .nav-icon-1:hover span{\r\n    transform: scale(1.2);\r\n    transition: 350ms cubic-bezier(.8, .5, .2, 1.4);\r\n  }\r\n  .nav-icon-1 span:nth-child(1){\r\n    left: 0;\r\n    top: 0;\r\n  }\r\n  .nav-icon-1 span:nth-child(2){\r\n    left: 12px;\r\n    top: 0;\r\n  }\r\n  .nav-icon-1 span:nth-child(3){\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  .nav-icon-1 span:nth-child(4){\r\n    left: 0;\r\n    top: 12px;\r\n  }\r\n  .nav-icon-1 span:nth-child(5){\r\n    position: absolute;\r\n    left: 12px;\r\n    top: 12px;\r\n  }\r\n  .nav-icon-1 span:nth-child(6){\r\n    right: 0px;\r\n    top: 12px;\r\n  }\r\n  .nav-icon-1 span:nth-child(7){\r\n    left: 0px;\r\n    bottom: 0px;\r\n  }\r\n  .nav-icon-1 span:nth-child(8){\r\n    position: absolute;\r\n    left: 12px;\r\n    bottom: 0px;\r\n  }\r\n  .nav-icon-1 span:nth-child(9){\r\n    right: 0px;\r\n    bottom: 0px;\r\n  }\r\n  .nav-icon-1.open{\r\n    transform: rotate(180deg);\r\n    cursor: pointer;\r\n    transition: .2s cubic-bezier(.8, .5, .2, 1.4);\r\n  }\r\n  .nav-icon-1.open span{\r\n    border-radius: 50%;\r\n    transition-delay: 200ms;\r\n    transition: .5s cubic-bezier(.8, .5, .2, 1.4);\r\n  }\r\n  .nav-icon-1.open span:nth-child(2) {\r\n    left: 6px;\r\n    top: 6px;\r\n  }\r\n  .nav-icon-1.open span:nth-child(4) {\r\n    left: 6px;\r\n    top: 18px;\r\n  }\r\n  .nav-icon-1.open span:nth-child(6) {\r\n    right: 6px;\r\n    top: 6px;\r\n  }\r\n  .nav-icon-1.open span:nth-child(8) {\r\n    left: 18px;\r\n    bottom: 6px;\r\n  }\r\n\r\n  @media screen and (min-width: 1000px) {\r\n    .icon {\r\n      display: none;\r\n    }\r\n\r\n    .hidden {\r\n      display: block;\r\n    }\r\n\r\n    .nav {\r\n      width: 1000px;\r\n      margin: 0 auto;\r\n    }\r\n\r\n    .menu {\r\n      position: static;\r\n      top: 0;\r\n      height: 50px;\r\n      background-color: #f6f6f6;\r\n      display: flex;\r\n      justify-content: space-around;\r\n    }\r\n} "],sourceRoot:""}]);const a=i},897:(n,r,e)=>{e.d(r,{Z:()=>a});var t=e(880),o=e.n(t),A=e(705),i=e.n(A)()(o());i.push([n.id,".hobbies{display:flex;flex-direction:column;justify-content:center;align-items:center;border-top:3px solid gray;border-bottom:3px solid gray}@media screen and (min-width: 1000px){.hobbies{flex-direction:row;justify-content:space-around}}.hobby{width:250px;padding:30px 0}.hobby_title{font-size:2rem;text-align:center}.hobby_description{margin-top:20px;font-size:1.5rem;text-align:center}@media screen and (min-width: 1000px){.hobby{width:500px;padding:30px 0}}.focused{background-color:#f6f6f6}","",{version:3,sources:["webpack://./src/components/hobbies/hobbies.scss"],names:[],mappings:"AAAA,SACI,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,yBAAA,CACA,4BAAA,CAEA,sCACI,SACI,kBAAA,CACA,4BAAA,CAAA,CAKZ,OACI,WAAA,CACA,cAAA,CAEA,aACI,cAAA,CACA,iBAAA,CAGJ,mBACI,eAAA,CACA,gBAAA,CACA,iBAAA,CAGJ,sCACI,OACI,WAAA,CACA,cAAA,CAAA,CAKZ,SACI,wBAAA",sourcesContent:[".hobbies {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-top: 3px solid grey;\r\n    border-bottom: 3px solid grey;\r\n\r\n    @media screen and (min-width: 1000px) {\r\n        & {\r\n            flex-direction: row;\r\n            justify-content: space-around;\r\n        }\r\n    }\r\n}\r\n\r\n.hobby {\r\n    width: 250px;\r\n    padding: 30px 0;\r\n\r\n    &_title {\r\n        font-size: 2rem;\r\n        text-align: center;\r\n    }\r\n\r\n    &_description {\r\n        margin-top: 20px;\r\n        font-size: 1.5rem;\r\n        text-align: center;\r\n    }\r\n\r\n    @media screen and (min-width: 1000px) {\r\n        & {\r\n            width: 500px;\r\n            padding: 30px 0;\r\n        }\r\n    }\r\n}\r\n\r\n.focused {\r\n    background-color: #f6f6f6;\r\n}\r\n"],sourceRoot:""}]);const a=i},362:(n,r,e)=>{e.d(r,{Z:()=>a});var t=e(880),o=e.n(t),A=e(705),i=e.n(A)()(o());i.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const a=i},226:(n,r,e)=>{e.d(r,{Z:()=>a});var t=e(880),o=e.n(t),A=e(705),i=e.n(A)()(o());i.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const a=i},79:(n,r,e)=>{e.d(r,{Z:()=>p});var t=e(880),o=e.n(t),A=e(705),i=e.n(A),a=e(226),s=e(362),c=i()(o());c.i(a.Z),c.i(s.Z),c.push([n.id,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}","",{version:3,sources:["webpack://./src/styles/normalize.scss"],names:[],mappings:"AAGA,2EAAA,CAUC,KACC,gBAAA,CACA,6BAAA,CAUF,KACE,QAAA,CAOF,KACE,aAAA,CAQF,GACE,aAAA,CACA,cAAA,CAWF,GACE,sBAAA,CACA,QAAA,CACA,gBAAA,CAQF,IACE,+BAAA,CACA,aAAA,CAUF,EACE,4BAAA,CAQF,YACE,kBAAA,CACA,yBAAA,CACA,gCAAA,CAOF,SAEE,kBAAA,CAQF,cAGE,+BAAA,CACA,aAAA,CAOF,MACE,aAAA,CAQF,QAEE,aAAA,CACA,aAAA,CACA,iBAAA,CACA,uBAAA,CAGF,IACE,cAAA,CAGF,IACE,UAAA,CAUF,IACE,iBAAA,CAWF,sCAKE,mBAAA,CACA,cAAA,CACA,gBAAA,CACA,QAAA,CAQF,aAEE,gBAAA,CAQF,cAEE,mBAAA,CAOF,gDAIE,yBAAA,CAOF,wHAIE,iBAAA,CACA,SAAA,CAOF,4GAIE,6BAAA,CAOF,SACE,0BAAA,CAUF,OACE,qBAAA,CACA,aAAA,CACA,aAAA,CACA,cAAA,CACA,SAAA,CACA,kBAAA,CAOF,SACE,uBAAA,CAOF,SACE,aAAA,CAQF,6BAEE,qBAAA,CACA,SAAA,CAOF,kFAEE,WAAA,CAQF,cACE,4BAAA,CACA,mBAAA,CAOF,yCACE,uBAAA,CAQF,6BACE,yBAAA,CACA,YAAA,CAUF,QACE,aAAA,CAOF,QACE,iBAAA,CAUF,SACE,YAAA,CAOF,SACE,YAAA",sourcesContent:['@import url(\'./__variables.scss\');\r\n@import url(\'./__mixins.scss\');\r\n\r\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type="button"],\r\n[type="reset"],\r\n[type="submit"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type="button"]::-moz-focus-inner,\r\n[type="reset"]::-moz-focus-inner,\r\n[type="submit"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type="button"]:-moz-focusring,\r\n[type="reset"]:-moz-focusring,\r\n[type="submit"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type="checkbox"],\r\n[type="radio"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type="number"]::-webkit-inner-spin-button,\r\n[type="number"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type="search"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type="search"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}'],sourceRoot:""}]);const p=c},240:(n,r,e)=>{e.d(r,{Z:()=>C});var t=e(880),o=e.n(t),A=e(705),i=e.n(A),a=e(79),s=e(226),c=e(293),p=e(897),l=e(171),d=i()(o());d.i(a.Z),d.i(s.Z),d.i(c.Z),d.i(p.Z),d.i(l.Z),d.push([n.id,"@media screen and (min-width: 1000px){.wrapper{width:1000px;margin:0 auto}}","",{version:3,sources:["webpack://./src/styles/style2.scss"],names:[],mappings:"AAMA,sCACI,SACI,YAAA,CACA,aAAA,CAAA",sourcesContent:["@import url('./normalize.scss');\r\n@import url('./__variables.scss');\r\n@import url('../components/header/header.scss');\r\n@import url('../components/hobbies/hobbies.scss');\r\n@import url('../components/footer/footer.scss');\r\n\r\n@media screen and (min-width: 1000px) {\r\n    .wrapper {\r\n        width: 1000px;\r\n        margin: 0 auto;\r\n    }\r\n} "],sourceRoot:""}]);const C=d},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var A={},i=[],a=0;a<n.length;a++){var s=n[a],c=t.base?s[0]+t.base:s[0],p=A[c]||0,l="".concat(c," ").concat(p);A[c]=p+1;var d=e(l),C={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(r[d].references++,r[d].updater(C)):r.push({identifier:l,updater:o(C,t),references:1}),i.push(l)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var A=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=e(A[i]);r[a].references--}for(var s=t(n,o),c=0;c<A.length;c++){var p=e(A[c]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}A=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t=e.css,o=e.media,A=e.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),A&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),r.styleTagTransform(t,n)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},n=>{n(n.s=36)}]);