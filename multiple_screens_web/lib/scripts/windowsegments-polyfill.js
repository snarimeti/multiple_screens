var e=function(){try{var e=function(){if(!t)return t=!0,Promise.resolve(Promise.resolve(!1)).then(function(e){t=e,window[n].dispatchEvent(new Event("change"))})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},n="__foldables__",t=!1;function i(e,n){var t;return function(){var i=arguments,o=this;clearTimeout(t),t=setTimeout(function(){return e.apply(o,i)},n)}}var o=function(){var t=this;if(void 0!==window[n])return window[n];var o=document.createDocumentFragment();this.addEventListener=o.addEventListener.bind(o),this.removeEventListener=o.removeEventListener.bind(o),this.dispatchEvent=function(e){if("change"===e.type){var n="on"+e.type;return"function"==typeof t[n]&&t[n](e),o.dispatchEvent(e)}},window.addEventListener("message",function(e){"update"===e.data.action&&Object.assign(t,e.data.value)}),window.addEventListener("resize",function(){return i(e(),200)})},r={spanning:{configurable:!0},foldSize:{configurable:!0},browserShellSize:{configurable:!0}};r.spanning.get=function(){return sessionStorage.getItem(n+"-spanning")||"none"},r.spanning.set=function(t){if(!["none","single-fold-horizontal","single-fold-vertical"].includes(t))throw new TypeError(t);sessionStorage.setItem(n+"-spanning",t),e()},r.foldSize.get=function(){return+sessionStorage.getItem(n+"-fold-size")||0},r.foldSize.set=function(t){if(!(Number(t)>=0))throw new TypeError(t);sessionStorage.setItem(n+"-fold-size",t),e()},r.browserShellSize.get=function(){return+sessionStorage.getItem(n+"-browser-shell-size")||0},r.browserShellSize.set=function(t){if(!(Number(t)>=0))throw new TypeError(t);sessionStorage.setItem(n+"-browser-shell-size",t),e()},o.prototype.getSegments=function(){if("none"===this.spanning)return[{left:0,top:0,width:window.innerWidth,height:window.innerHeight}];if("single-fold-horizontal"===this.spanning){var e=(window.innerHeight-this.browserShellSize)/2,n=window.innerWidth;return[{top:0,left:0,width:n,height:e-this.foldSize/2},{top:e-this.foldSize/2,height:this.foldSize,left:0,width:n},{top:e+this.foldSize/2,left:0,width:n,height:window.innerHeight}]}if("single-fold-vertical"===this.spanning){var t=window.innerWidth/2-this.foldSize/2,i=window.innerHeight;return[{top:0,left:0,width:t,height:i},{top:0,height:i,left:t,width:this.foldSize},{top:0,left:window.innerWidth/2+this.foldSize/2,width:t,height:i}]}},Object.defineProperties(o.prototype,r),window[n]=new o,window.getWindowSegments=function(){var e=window[n].getSegments();return[e[0],e[2]]};export{i as debounce,o as FoldablesFeature};
//# sourceMappingURL=windowsegments-polyfill.js.map
