(function(e){function t(t){for(var i,o,c=t[0],l=t[1],d=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),r={id:"nav"};function a(e,t){var n=Object(i["t"])("router-view");return Object(i["o"])(),Object(i["d"])("div",r,[Object(i["f"])(n)])}n("a1f3");var o=n("6b0d"),c=n.n(o);const l={},d=c()(l,[["render",a]]);var s=d,u=n("6c02"),f={class:"home"},p={class:"f_1",id:"f_1"},g=Object(i["e"])("div",{class:"overlay"},null,-1),h={class:"text"},v=["data-text"],b={class:"shadow"};function m(e,t,n,r,a,o){return Object(i["o"])(),Object(i["d"])("div",f,[Object(i["e"])("div",p,[g,Object(i["e"])("div",h,[(Object(i["o"])(!0),Object(i["d"])(i["a"],null,Object(i["s"])(o.c_1,(function(e,t){return Object(i["o"])(),Object(i["d"])("div",{class:"wrapper",key:t},[Object(i["e"])("div",{id:"L",class:"letter glitch","data-text":e},Object(i["v"])(e),9,v),Object(i["e"])("div",b,Object(i["v"])(e),1)])})),128))])])])}n("ac1f"),n("1276"),n("159b"),n("b64b"),n("a15b");(function(e,t){function n(e,n){var i=null,r=null,a=null;if("string"===typeof e&&(i=t.getElementById(e.split("#")[1])),i){r=i.id,"absolute"!==i.style.position&&(i.style.position="relative"),i.style.overflow="hidden";var o=["","-moz-","-o-animation-","-webkit-","-ms-"],c={animate:!0,patternWidth:100,patternHeight:100,grainOpacity:.1,grainDensity:1,grainWidth:1,grainHeight:1,grainChaos:.5,grainSpeed:20};Object.keys(n).forEach((function(e){c[e]=n[e]}));var l=function(){var e=t.createElement("canvas"),n=e.getContext("2d");e.width=c.patternWidth,e.height=c.patternHeight;for(var i=0;i<c.patternWidth;i+=c.grainDensity)for(var r=0;r<c.patternHeight;r+=c.grainDensity){var a=256*Math.random()|0;n.fillStyle="rgba("+[a,a,a,c.grainOpacity].join()+")",n.fillRect(i,r,c.grainWidth,c.grainHeight)}return e.toDataURL("image/png")},d=l(),s="",u=["0%:-10%,10%","10%:-25%,0%","20%:-30%,10%","30%:-30%,30%","40%::-20%,20%","50%:-15%,10%","60%:-20%,20%","70%:-5%,20%","80%:-25%,5%","90%:-30%,25%","100%:-10%,10%"],f=o.length;while(f--){s+="@"+o[f]+"keyframes grained{";for(var p=0;p<u.length;p++){var g=u[p].split(":");s+=g[0]+"{",s+=o[f]+"transform:translate("+g[1]+");",s+="}"}s+="}"}var h=t.getElementById("grained-animation");h&&h.parentElement.removeChild(h);var v=t.createElement("style");v.type="text/css",v.id="grained-animation",v.innerHTML=s,t.body.appendChild(v);var b=t.getElementById("grained-animation-"+r);b&&b.parentElement.removeChild(b),v=t.createElement("style"),v.type="text/css",v.id="grained-animation-"+r,t.body.appendChild(v);var m="background-image: url("+d+");";if(m+='position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;',f=o.length,c.animate)while(f--)m+=o[f]+"animation-name:grained;",m+=o[f]+"animation-iteration-count: infinite;",m+=o[f]+"animation-duration: "+c.grainChaos+"s;",m+=o[f]+"animation-timing-function: steps("+c.grainSpeed+", end);";a="#"+r+"::before",y(v.sheet,a,m)}else console.error("Grained: cannot find the element with id "+e);function y(e,t,n,i){var r="";r=t.length?t+"{"+n+"}":n,"insertRule"in e?e.insertRule(r,i):"addRule"in e&&e.addRule(t,n,i)}}e.grained=n})(window,document);grained;var y={name:"Home",components:{},data:function(){return{c:"改变就是好事"}},created:function(){},mounted:function(){grained("#f_1",{animate:!0,patternWidth:500,patternHeight:500,grainOpacity:.11,grainDensity:1.3,grainWidth:1,grainHeight:1})},computed:{c_1:function(){var e=[];for(var t in this.c)e.push(this.c[t]);return e}}};n("f734");const O=c()(y,[["render",m]]);var j=O,w=[{path:"/",name:"Home",component:j}],x=Object(u["a"])({history:Object(u["b"])(),routes:w}),_=x,H=n("5502"),E=Object(H["a"])({state:{},mutations:{},actions:{},modules:{}});Object(i["c"])(s).use(E).use(_).mount("#app")},"5e05":function(e,t,n){},"71cd":function(e,t,n){},a1f3:function(e,t,n){"use strict";n("71cd")},f734:function(e,t,n){"use strict";n("5e05")}});
//# sourceMappingURL=app.f6e49977.js.map