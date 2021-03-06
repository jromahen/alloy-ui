/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("json-parse",function(b){function l(e){return(b.config.win||this||{})[e];}var j=l("JSON"),k=l("eval"),m=(Object.prototype.toString.call(j)==="[object JSON]"&&j),f=!!m,p=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,n=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,d=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,g=/(?:^|:|,)(?:\s*\[)+/g,q=/[^\],:{}\s]/,o=function(e){return"\\u"+("0000"+(+(e.charCodeAt(0))).toString(16)).slice(-4);},c=function(s,e){var r=function(y,w){var u,t,x=y[w];if(x&&typeof x==="object"){for(u in x){if(x.hasOwnProperty(u)){t=r(x,u);if(t===undefined){delete x[u];}else{x[u]=t;}}}}return e.call(y,w,x);};return typeof e==="function"?r({"":s},""):s;},h=function(r,e){r=r.replace(p,o);if(!q.test(r.replace(n,"@").replace(d,"]").replace(g,""))){return c(k("("+r+")"),e);}throw new SyntaxError("JSON.parse");};b.namespace("JSON").parse=function(r,e){if(typeof r!=="string"){r+="";}return m&&b.JSON.useNativeParse?m.parse(r,e):h(r,e);};function a(r,e){return r==="ok"?true:e;}if(m){try{f=(m.parse('{"ok":false}',a)).ok;}catch(i){f=false;}}b.JSON.useNativeParse=f;},"3.4.0");