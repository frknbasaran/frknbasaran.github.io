(function(t){function e(e){for(var i,a,c=e[0],o=e[1],l=e[2],u=0,m=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&m.push(n[a][0]),n[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,a=1;a<s.length;a++){var o=s[a];0!==n[o]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=s[0]))}return t}var i={},n={app:0},r=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ee582dbc"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise((function(e,i){s=n[t]=[e,i]}));e.push(s[2]=i);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=a(t);var l=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(u);var s=n[t];if(0!==s){if(s){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,s[1](l)}n[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(s,i,function(e){return t[e]}.bind(null,i));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],a=(s("5c0b"),s("2877")),c={},o=Object(a["a"])(c,n,r,!1,null,null,null),l=o.exports,u=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"game"},[s("div",{staticClass:"info-bar"},[s("div",{staticClass:"time"},[t._v(" "+t._s("0:"+t.timeCounter)+" ")]),s("div",{staticClass:"brand"},[t._v(" Countly Kitchen ")]),s("div",{staticClass:"score"},[t._v(" "+t._s(t.score)+"$ ")])]),t.gameFinished||t.welcome?t._e():s("div",{staticClass:"game-area"},[s("div",{staticClass:"up-side"}),s("div",{staticClass:"down-side"},[s("div",{staticClass:"left-side"},[s("div",{staticClass:"item",on:{click:function(e){return t.selectItem("🧅")}}},[t._v("🧅")]),s("div",{staticClass:"item",on:{click:function(e){return t.selectItem("🍅")}}},[t._v("🍅")]),s("div",{staticClass:"item",on:{click:function(e){return t.selectItem("🥔")}}},[t._v("🥔")]),s("div",{staticClass:"item",on:{click:function(e){return t.selectItem("🥕")}}},[t._v("🥕")])]),s("div",{staticClass:"mid-side"},[s("div",{staticClass:"customer"},[s("div",{staticClass:"message"},[t._v(" "+t._s("ready"===t.itemPhase?"wow, thanks!":"Hello, can I get a "+t.recipes[t.randomIndex].name+" "+t.recipes[t.randomIndex].icon+"please?")+" ")]),s("div",{staticClass:"people",style:t.personStyleObject}),s("div",{staticClass:"recipe"},[s("div",{staticClass:"recipe-title"},[t._v("Recipe for "+t._s(t.recipes[t.randomIndex].name))]),s("div",{staticClass:"items"},t._l(t.recipes[t.randomIndex].items,(function(e){return s("div",{key:e.name,staticClass:"item"},[t._v(" "+t._s(e)+" "+t._s(-1!==t.plate.indexOf(e)?"✅":"")+" ")])})),0)])]),s("div",{staticClass:"table"},[s("div",{staticClass:"cut",on:{mouseleave:function(e){return t.cancelProcess()},mousedown:function(e){return t.process("cut")},mouseup:function(e){return t.cancelProcess()}}},[s("div",{staticClass:"table-overlay",style:t.cutProgressStyleObject}),s("div",{staticClass:"item"},[t._v(" "+t._s("cut"===t.itemPhase?t.currentItem:"")+" ")]),s("div",{staticClass:"knife"},[t._v(" 🔪 ")])]),s("div",{staticClass:"plate"},[s("div",{staticClass:"item"},[t._v(" "+t._s("ready"===t.itemPhase?t.recipes[t.randomIndex].icon:"")+" ")]),s("div",{staticClass:"plate-background"},[t._v("🍽")])]),s("div",{staticClass:"cook",on:{mouseleave:function(e){return t.cancelProcess()},mousedown:function(e){return t.process("cook")},mouseup:function(e){return t.cancelProcess()}}},[s("div",{staticClass:"table-overlay",style:t.cookProgressStyleObject}),s("div",{staticClass:"item"},[t._v(" "+t._s("cook"===t.itemPhase?t.currentItem:"")+" ")]),s("div",{staticClass:"cook-background"},[t._v("🥘")])])])]),s("div",{staticClass:"right-side"},[s("div",{staticClass:"item",on:{click:function(e){return t.selectItem("🥖")}}},[t._v("🥖")]),s("div",{staticClass:"item",on:{click:function(e){return t.selectItem("🥩")}}},[t._v("🥩")]),s("div",{staticClass:"item",on:{click:function(e){return t.selectItem("🥬")}}},[t._v("🥬")]),s("div",{staticClass:"item",on:{click:function(e){return t.selectItem("🧀")}}},[t._v("🧀")])])])]),t.gameFinished?s("div",{staticClass:"finished-screen"},[t._m(0),s("div",{staticClass:"finish-screen-item"},[t._v(" Your score "),s("br"),s("h3",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.score))])]),s("div",{staticClass:"finish-screen-time"},[s("button",{staticClass:"restart-game-button",on:{click:function(e){return t.newGame()}}},[t._v("Play Again")])])]):t._e(),t.welcome?s("div",{staticClass:"finished-screen"},[t._m(1),t._m(2),s("div",{staticClass:"finish-screen-time"},[s("button",{staticClass:"restart-game-button",on:{click:function(e){return t.startGame()}}},[t._v("Start Game")])])]):t._e()])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"finish-screen-item"},[s("h1",[t._v("Game Over")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"finish-screen-item",staticStyle:{"text-align":"center"}},[s("h1",[t._v("Welcome")]),s("h4",[t._v("How to play?")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"finish-screen-item instructions"},[s("div",{staticClass:"step"},[s("span",[t._v("Step 1:")]),s("span",{staticClass:"icon"},[t._v("🍅")]),s("br"),t._v(" Click on an item for recipe ")]),s("div",{staticClass:"step"},[s("span",[t._v("Step 2:")]),s("span",{staticClass:"icon"},[t._v("🔪")]),s("br"),t._v(" Press and hold to knife icon ")]),s("div",{staticClass:"step"},[s("span",[t._v("Step 3:")]),s("span",{staticClass:"icon"},[t._v("🥘")]),s("br"),t._v(" Press and hold to pan icon ")]),s("div",{staticClass:"step"},[s("span",[t._v("Step 4:")]),s("span",{staticClass:"icon"},[t._v("⌛️")]),s("br"),t._v(" Complete an order and earn time ")])])}],v={name:"Home",data:function(){return{welcome:!0,randomIndex:0,personIndex:0,currentItem:"",itemPhase:"",timeCounter:59,timesOut:!1,timerActive:!1,gameFinished:!1,score:0,recipes:[{name:"Hamburger",icon:"🍔",items:["🥖","🥬","🥩","🧀"],price:10},{name:"Soup",icon:"🍜",items:["🧅","🍅","🥔","🥕"],price:3}],plate:[],cutProgressStyleObject:{width:"0px"},cookProgressStyleObject:{width:"0px"},personStyleObject:{"background-position":"-160px"},cutProgress:0,cutCompleted:!1,cookProgress:0,cookCompleted:!1,processInterval:null,timerInterval:null}},methods:{selectItem:function(t){-1===this.recipes[this.randomIndex].items.indexOf(t)||-1!==this.plate.indexOf(t)||(this.currentItem=t,this.itemPhase="cut")},process:function(t){if(t===this.itemPhase){var e=this;this.processInterval=setInterval((function(){e[t+"Progress"]<3?e[t+"Progress"]++:(e[t+"Completed"]=!0,e[t+"Progress"]++,e[t+"Progress"]=0,"cut"===t?e.itemPhase="cook":"cook"===t&&-1===e.plate.indexOf(e.currentItem)&&(e.plate.push(e.currentItem),e.itemPhase=""))}),500)}},cancelProcess:function(){clearInterval(this.processInterval),this.cookProgress=0,this.cookCompleted=!1,this.cutProgress=0,this.cutCompleted=!1},startTimer:function(t){var e=this;this.timerActive=!0,this.gameFinished=!1,t&&(this.timeCounter=59,this.timesOut=!1),this.timerInterval=setInterval((function(){e.timeCounter--,0===e.timeCounter&&(e.timesOut=!0,e.timerActive=!1,clearInterval(e.timerInterval))}),1e3)},newGame:function(){this.randomIndex=Math.floor(2*Math.random()),this.personIndex=Math.floor(58*Math.random()),this.startTimer(1),this.score=0,this.timeCounter=59,this.currentItem=this.recipes[this.randomIndex],this.plate=[],this.itemPhase=""},startGame:function(){this.welcome=!1,this.newGame()}},watch:{personIndex:function(t){this.personStyleObject={"background-position":"-"+80*t+"px"}},timesOut:function(t){t&&(this.gameFinished=!0)},cutProgress:function(t){this.cutProgressStyleObject={width:"calc(calc(calc(500px / 3) / 3) * "+t+")"}},cookProgress:function(t){this.cookProgressStyleObject={width:"calc(calc(calc(500px / 3) / 3) * "+t+")"}},plate:function(t){var e=this;4===t.length&&(this.itemPhase="ready",setTimeout((function(){e.itemPhase="",e.score+=e.recipes[e.randomIndex].price,e.timeCounter+=20,e.randomIndex=Math.floor(2*Math.random()),e.personIndex=Math.floor(58*Math.random()),e.currentItem=e.recipes[e.randomIndex],e.plate=[]}),1500))}}},p=v,f=(s("c3d7"),Object(a["a"])(p,d,m,!1,null,"33751f6e",null)),h=f.exports;i["a"].use(u["a"]);var C=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],_=new u["a"]({mode:"history",base:"/",routes:C}),b=_;i["a"].config.productionTip=!1,new i["a"]({router:b,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"9c0c":function(t,e,s){},ab2d:function(t,e,s){},c3d7:function(t,e,s){"use strict";s("ab2d")}});
//# sourceMappingURL=app.d806ea97.js.map