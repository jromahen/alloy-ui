/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("view",function(b){function a(){a.superclass.constructor.apply(this,arguments);}b.View=b.extend(a,b.Base,{container:"<div/>",events:{},template:"",initializer:function(c){c||(c={});this.container=this.create(c.container||this.container);c.model&&(this.model=c.model);c.template&&(this.template=c.template);this.events=c.events?b.merge(this.events,c.events):this.events;this.attachEvents(this.events);},destructor:function(){this.container&&this.container.remove(true);},attachEvents:function(g){var d=this.container,i=b.Object.owns,h,e,f,c;for(c in g){if(!i(g,c)){continue;}e=g[c];for(f in e){if(!i(e,f)){continue;}h=e[f];if(typeof h==="string"){h=this[h];}d.delegate(f,h,c,this);}}},create:function(c){return typeof c==="string"?b.Node.create(c):b.one(c);},remove:function(){this.container&&this.container.remove();return this;},render:function(){return this;}},{NAME:"view"});},"3.4.0",{requires:["base-build","node-event-delegate"]});