(function(e){function t(t){for(var i,c,a=t[0],o=t[1],l=t[2],u=0,m=[];u<a.length;u++)c=a[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&m.push(n[c][0]),n[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},n={app:0},r=[];function c(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ee582dbc"}[e]+".js"}function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.e=function(e){var t=[],s=n[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise((function(t,i){s=n[e]=[t,i]}));t.push(s[2]=i);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.src=c(e);var l=new Error;r=function(t){o.onerror=o.onload=null,clearTimeout(u);var s=n[e];if(0!==s){if(s){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,s[1](l)}n[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],c=(s("5c0b"),s("2877")),a={},o=Object(c["a"])(a,n,r,!1,null,null,null),l=o.exports,u=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"game"},[s("div",{staticClass:"info-bar"},[e.welcome?e._e():s("div",{staticClass:"time"},[e._v(" "+e._s("0:"+e.timeCounter)+" ")]),s("div",{staticClass:"brand",style:e.brandStyleObject},[e._v(" Countly Kitchen ")]),e.welcome?e._e():s("div",{staticClass:"score"},[e._v(" "+e._s(e.score)+"$ ")])]),e.gameFinished||e.welcome?e._e():s("div",{staticClass:"game-area"},[s("div",{staticClass:"up-side"}),s("div",{staticClass:"down-side"},[s("div",{staticClass:"left-side"},[s("div",{staticClass:"item",on:{click:function(t){return e.selectItem("🧅")}}},[e._v("🧅")]),s("div",{staticClass:"item",on:{click:function(t){return e.selectItem("🍅")}}},[e._v("🍅")]),s("div",{staticClass:"item",on:{click:function(t){return e.selectItem("🥔")}}},[e._v("🥔")]),s("div",{staticClass:"item",on:{click:function(t){return e.selectItem("🥕")}}},[e._v("🥕")])]),s("div",{staticClass:"mid-side"},[s("div",{staticClass:"customer"},[s("div",{staticClass:"message"},[e._v(" "+e._s("ready"===e.itemPhase?"wow, thanks!":"Hello, can I get a "+e.recipes[e.randomIndex].name+" "+e.recipes[e.randomIndex].icon+"please?")+" ")]),s("div",{staticClass:"people",style:e.personStyleObject}),s("div",{staticClass:"recipe"},[s("div",{staticClass:"recipe-title"},[e._v("Recipe for "+e._s(e.recipes[e.randomIndex].name))]),s("div",{staticClass:"items"},e._l(e.recipes[e.randomIndex].items,(function(t){return s("div",{key:t.name,staticClass:"item"},[e._v(" "+e._s(t)+" "+e._s(-1!==e.plate.indexOf(t)?"✅":"")+" ")])})),0)])]),s("div",{staticClass:"table"},[s("div",{staticClass:"cut",on:{mouseleave:function(t){return e.cancelProcess()},mousedown:function(t){return e.process("cut")},mouseup:function(t){return e.cancelProcess()}}},[s("div",{staticClass:"table-overlay",style:e.cutProgressStyleObject}),s("div",{staticClass:"item"},[e._v(" "+e._s("cut"===e.itemPhase?e.currentItem:"")+" ")]),s("div",{staticClass:"knife"},[e._v(" 🔪 ")])]),s("div",{staticClass:"plate"},[s("div",{staticClass:"item"},[e._v(" "+e._s("ready"===e.itemPhase?e.recipes[e.randomIndex].icon:"")+" ")]),s("div",{staticClass:"plate-background"},[e._v("🍽")])]),s("div",{staticClass:"cook",on:{mouseleave:function(t){return e.cancelProcess()},mousedown:function(t){return e.process("cook")},mouseup:function(t){return e.cancelProcess()}}},[s("div",{staticClass:"table-overlay",style:e.cookProgressStyleObject}),s("div",{staticClass:"item"},[e._v(" "+e._s("cook"===e.itemPhase?e.currentItem:"")+" ")]),s("div",{staticClass:"cook-background"},[e._v("🥘")])])])]),s("div",{staticClass:"right-side"},[s("div",{staticClass:"item",on:{click:function(t){return e.selectItem("🥖")}}},[e._v("🥖")]),s("div",{staticClass:"item",on:{click:function(t){return e.selectItem("🥩")}}},[e._v("🥩")]),s("div",{staticClass:"item",on:{click:function(t){return e.selectItem("🥬")}}},[e._v("🥬")]),s("div",{staticClass:"item",on:{click:function(t){return e.selectItem("🧀")}}},[e._v("🧀")])])])]),e.gameFinished?s("div",{staticClass:"finished-screen"},[e._m(0),s("div",{staticClass:"finish-screen-item"},[e._v(" Your score "),s("br"),s("h3",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.score))])]),s("div",{staticClass:"finish-screen-time"},[s("button",{staticClass:"restart-game-button",on:{click:function(t){return e.newGame()}}},[e._v("Play Again")])])]):e._e(),e.welcome?s("div",{staticClass:"finished-screen"},[e._m(1),e._m(2),s("div",{staticClass:"finish-screen-time"},[s("button",{staticClass:"restart-game-button",on:{click:function(t){return e.startGame()}}},[e._v("Start Game")])])]):e._e()])])},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"finish-screen-item"},[s("h1",[e._v("Game Over")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"finish-screen-item",staticStyle:{"text-align":"center"}},[s("h1",[e._v("Welcome")]),s("h4",[e._v("How to play?")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"finish-screen-item instructions"},[s("div",{staticClass:"step"},[s("span",[e._v("Step 1:")]),s("span",{staticClass:"icon"},[e._v("🍅")]),s("br"),e._v(" Click on an item for recipe ")]),s("div",{staticClass:"step"},[s("span",[e._v("Step 2:")]),s("span",{staticClass:"icon"},[e._v("🔪")]),s("br"),e._v(" Press and hold to knife icon ")]),s("div",{staticClass:"step"},[s("span",[e._v("Step 3:")]),s("span",{staticClass:"icon"},[e._v("🥘")]),s("br"),e._v(" Press and hold to pan icon ")]),s("div",{staticClass:"step"},[s("span",[e._v("Step 4:")]),s("span",{staticClass:"icon"},[e._v("⌛️")]),s("br"),e._v(" Complete an order and earn time ")])])}],v={name:"Home",data:function(){return{welcome:!0,randomIndex:0,personIndex:0,currentItem:"",itemPhase:"",timeCounter:59,timesOut:!1,timerActive:!1,gameFinished:!1,score:0,recipes:[{name:"Hamburger",icon:"🍔",items:["🥖","🥬","🥩","🧀"],price:10},{name:"Soup",icon:"🍜",items:["🧅","🍅","🥔","🥕"],price:3}],plate:[],cutProgressStyleObject:{width:"0px"},cookProgressStyleObject:{width:"0px"},personStyleObject:{"background-position":"-160px"},brandStyleObject:{width:"900px"},cutProgress:0,cutCompleted:!1,cookProgress:0,cookCompleted:!1,processInterval:null,timerInterval:null}},methods:{selectItem:function(e){-1===this.recipes[this.randomIndex].items.indexOf(e)||-1!==this.plate.indexOf(e)||(this.currentItem=e,this.itemPhase="cut")},process:function(e){var t=this;this.processInterval=setInterval((function(){e===t.itemPhase&&(t[e+"Progress"]<3?t[e+"Progress"]++:(t[e+"Completed"]=!0,t[e+"Progress"]++,t[e+"Progress"]=0,"cut"===e?t.itemPhase="cook":"cook"===e&&-1===t.plate.indexOf(t.currentItem)&&(t.plate.push(t.currentItem),t.itemPhase="")))}),500)},cancelProcess:function(){clearInterval(this.processInterval),this.cookProgress=0,this.cookCompleted=!1,this.cutProgress=0,this.cutCompleted=!1},startTimer:function(e){var t=this;this.timerActive=!0,this.gameFinished=!1,e&&(this.timeCounter=59,this.timesOut=!1),this.timerInterval=setInterval((function(){t.timeCounter--,0===t.timeCounter&&(t.timesOut=!0,t.timerActive=!1,clearInterval(t.timerInterval))}),1e3)},newGame:function(){this.randomIndex=Math.floor(2*Math.random()),this.personIndex=Math.floor(58*Math.random()),this.startTimer(1),this.score=0,this.timeCounter=59,this.currentItem=this.recipes[this.randomIndex],this.plate=[],this.itemPhase=""},startGame:function(){this.welcome=!1,this.newGame()}},watch:{personIndex:function(e){this.personStyleObject={"background-position":"-"+80*e+"px"}},timesOut:function(e){e&&(this.gameFinished=!0)},cutProgress:function(e){this.cutProgressStyleObject={width:"calc(calc(calc(500px / 3) / 3) * "+e+")"}},cookProgress:function(e){this.cookProgressStyleObject={width:"calc(calc(calc(500px / 3) / 3) * "+e+")"}},plate:function(e){var t=this;4===e.length&&(this.itemPhase="ready",setTimeout((function(){t.itemPhase="",t.score+=t.recipes[t.randomIndex].price,t.timeCounter+=20,t.randomIndex=Math.floor(2*Math.random()),t.personIndex=Math.floor(58*Math.random()),t.currentItem=t.recipes[t.randomIndex],t.plate=[]}),1500))},welcome:function(e){this.brandStyleObject=e?{width:"900px"}:{width:"560px"}}}},p=v,h=(s("7c52"),Object(c["a"])(p,d,m,!1,null,"40a42cfa",null)),f=h.exports;i["a"].use(u["a"]);var C=[{path:"/",name:"Home",component:f},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],_=new u["a"]({mode:"history",base:"/",routes:C}),b=_;i["a"].config.productionTip=!1,new i["a"]({router:b,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"7c52":function(e,t,s){"use strict";s("cba2")},"9c0c":function(e,t,s){},cba2:function(e,t,s){}});
//# sourceMappingURL=app.6c6e1a4d.js.map