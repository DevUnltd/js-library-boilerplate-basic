/*!
 * 
 *   @hodgef/js-library-boilerplate-basic v1.6.481
 *   https://github.com/hodgef/js-library-boilerplate-basic
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MyLibrary=t():e.MyLibrary=t()}(self,(()=>(()=>{"use strict";const e={d:(t,r)=>{if(Array.isArray(r))for(var o=0;o<r.length;){var n=r[o++],i=r[o++];e.o(t,n)?0===i&&o++:0===i?Object.defineProperty(t,n,{enumerable:!0,value:r[o++]}):Object.defineProperty(t,n,{enumerable:!0,get:i})}else for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};let t={};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,i(o.key),o)}}function n(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:t+""}e.r(t);const l=n((function e(){var t,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,o=function(){console.log("Library method fired")},(r=i(r="myMethod"))in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,console.log("Library constructor loaded")}));return e.d(t,["default",0,l]),t})()));
//# sourceMappingURL=index.js.map