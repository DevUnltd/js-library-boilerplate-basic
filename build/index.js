/*!
 * 
 *   @hodgef/js-library-boilerplate-basic v1.6.35
 *   https://github.com/hodgef/js-library-boilerplate-basic
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.MyLibrary=o():e.MyLibrary=o()}(self,(function(){return(()=>{"use strict";var e={d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};function t(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}e.r(o),e.d(o,{default:()=>n});const n=r((function e(){var o,t,r;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){console.log("Library method fired")},(t="myMethod")in(o=this)?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,console.log("Library constructor loaded")}));return o})()}));
//# sourceMappingURL=index.js.map