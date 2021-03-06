/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("dd-plugin",function(c){var a=function(e){if(c.Widget&&e.host instanceof c.Widget){e.node=e.host.get("boundingBox");e.widget=e.host;}else{e.node=e.host;e.widget=false;}a.superclass.constructor.call(this,e);},b="drag:drag",d="drag:end";a.NAME="dd-plugin";a.NS="dd";c.extend(a,c.DD.Drag,{_widget:undefined,_stoppedPosition:undefined,_usesWidgetPosition:function(f){var e=false;if(f){e=(f.hasImpl&&f.hasImpl(c.WidgetPosition))?true:false;}return e;},initializer:function(e){this._widget=e.widget;if(this._usesWidgetPosition(this._widget)){this.on(b,this._setWidgetCoords);this.on(d,this._updateStopPosition);}},_setWidgetCoords:function(i){var h=this._stoppedPosition||i.target.nodeXY,f=i.target.realXY,g=[f[0]-h[0],f[1]-h[0]];if(g[0]!==0&&g[1]!==0){this._widget.set("xy",f);}else{if(g[0]===0){this._widget.set("y",f[1]);}else{if(g[1]===0){this._widget.set("x",f[0]);}}}},updateStopPosition:function(f){this._stoppedPosition=f.target.realXY;}});c.namespace("Plugin");c.Plugin.Drag=a;},"3.4.0",{requires:["dd-drag"],skinnable:false,optional:["dd-constrain","dd-proxy"]});