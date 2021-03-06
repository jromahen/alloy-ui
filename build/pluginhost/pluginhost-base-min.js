/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("pluginhost-base",function(C){var A=C.Lang;function B(){this._plugins={};}B.prototype={plug:function(G,D){var E,H,F;if(A.isArray(G)){for(E=0,H=G.length;E<H;E++){this.plug(G[E]);}}else{if(G&&!A.isFunction(G)){D=G.cfg;G=G.fn;}if(G&&G.NS){F=G.NS;D=D||{};D.host=this;if(this.hasPlugin(F)){this[F].setAttrs(D);}else{this[F]=new G(D);this._plugins[F]=G;}}}return this;},unplug:function(F){var E=F,D=this._plugins;if(F){if(A.isFunction(F)){E=F.NS;if(E&&(!D[E]||D[E]!==F)){E=null;}}if(E){if(this[E]){this[E].destroy();delete this[E];}if(D[E]){delete D[E];}}}else{for(E in this._plugins){if(this._plugins.hasOwnProperty(E)){this.unplug(E);}}}return this;},hasPlugin:function(D){return(this._plugins[D]&&this[D]);},_initPlugins:function(D){this._plugins=this._plugins||{};if(this._initConfigPlugins){this._initConfigPlugins(D);}},_destroyPlugins:function(){this.unplug();}};C.namespace("Plugin").Host=B;},"3.4.0",{requires:["yui-base"]});