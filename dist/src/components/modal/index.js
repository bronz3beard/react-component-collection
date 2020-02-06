!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"));else if("function"==typeof define&&define.amd)define(["react","prop-types"],t);else{var n="object"==typeof exports?t(require("react"),require("prop-types")):t(e.react,e["prop-types"]);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=f(r),i=n(2),a=f(i),s=f(n(3));function f(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.children,n=e.showModal,i=e.handleModal,a=e.backGroundStyle,f=e.hideBodyOverflowY;return(0,r.useEffect)((function(){document.body.style.overflowY=n&&f?"hidden":"auto"}),[f,n]),o.default.createElement(r.Fragment,null,n&&o.default.createElement("div",{className:s.default.modalOverlay,style:a||null},o.default.createElement("div",{className:s.default.modalBody,onClick:i},t)))};l.propTypes={children:a.default.oneOfType([a.default.instanceOf(i.element),a.default.node]),handleModal:a.default.func,showModal:a.default.bool,backGroundStyle:a.default.objectOf({background:a.default.string,backgroundSize:a.default.string,backgroundPosition:a.default.string,backgroundRepeat:a.default.string,backgroundAttachment:a.default.string}),hideBodyOverflowY:a.default.bool},l.defaultProps={children:null,handleModal:null,showModal:!1,backGroundStyle:null,hideBodyOverflowY:!0},t.default=l},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(5)(!1)).push([e.i,"._2EidFdgDlvzKCipUyn-UTM {\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  color: white;\n  z-index: 9001;\n  position: fixed;\n  padding-right: 15px;\n  /* Avoid width reflow */\n  background-color: black;\n  animation: _1CDW9QrsCFDdacH-hXlsGz 2s ease; }\n  ._2EidFdgDlvzKCipUyn-UTM ._3-rmC7hnSNOEysVfbQcc_v {\n    height: 100%;\n    display: flex;\n    z-index: 10;\n    font-size: 100%;\n    cursor: pointer;\n    min-height: 100%;\n    align-content: center;\n    justify-content: center;\n    vertical-align: baseline; }\n    ._2EidFdgDlvzKCipUyn-UTM ._3-rmC7hnSNOEysVfbQcc_v ._2yaUVWof0C3jQgDH3A46Su {\n      float: right;\n      font-size: 40px;\n      cursor: pointer;\n      padding: 20px;\n      border-radius: 5px; }\n\n@keyframes _1CDW9QrsCFDdacH-hXlsGz {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n@-moz-keyframes _1CDW9QrsCFDdacH-hXlsGz {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes _1CDW9QrsCFDdacH-hXlsGz {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n@-ms-keyframes _1CDW9QrsCFDdacH-hXlsGz {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Opera < 12.1 */\n@-o-keyframes _1CDW9QrsCFDdacH-hXlsGz {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n",""]),t.locals={modalOverlay:"_2EidFdgDlvzKCipUyn-UTM",fadein:"_1CDW9QrsCFDdacH-hXlsGz",modalBody:"_3-rmC7hnSNOEysVfbQcc_v",close:"_2yaUVWof0C3jQgDH3A46Su"}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){return document.querySelector(e)},f=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,u=0,c=[],d=n(7);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function y(e,t){var n=f(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=f(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function b(e){var t=document.createElement("style");return e.attrs.type="text/css",m(t,e.attrs),y(e,t),t}function m(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function g(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=l||(l=b(t)),r=C.bind(null,n,a,!1),o=C.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",m(t,e.attrs),y(e,t),t}(t),r=j.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=O.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&p(h(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete i[s.id]}}}};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function C(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function O(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function j(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}])}));