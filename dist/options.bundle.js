!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([,function(e,t){var r,n=document.getElementById("buttonDiv");function o(e){var t=e.target.parentElement.querySelector(".current");t&&t!==e.target&&t.classList.remove("current");var r=e.target.dataset.color;e.target.classList.add("current"),chrome.storage.sync.set({color:r})}r=["#3aa757","#e8453c","#f9bb2d","#4688f1"],chrome.storage.sync.get("color",(function(e){for(var t=e.color,c=0,u=r;c<u.length;c++){var a=u[c],l=document.createElement("button");l.dataset.color=a,l.style.backgroundColor=a,a===t&&l.classList.add("current"),l.addEventListener("click",o),n.appendChild(l)}}))}]);
//# sourceMappingURL=options.bundle.js.map