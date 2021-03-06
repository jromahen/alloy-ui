/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("datatype-date-math",function(b){var a=b.Lang;b.mix(b.namespace("DataType.Date"),{isValidDate:function(c){if(a.isDate(c)&&(isFinite(c))&&(c!="Invalid Date")&&!isNaN(c)){return true;}else{return false;}},addMonths:function(f,c){var e=f.getFullYear();var g=f.getMonth()+c;e=Math.floor(e+g/12);g=(g%12+12)%12;var d=new Date(f.getTime());d.setYear(e);d.setMonth(g);return d;},addYears:function(f,e){var d=f.getFullYear()+e;var c=new Date(f.getTime());c.setYear(d);return c;},daysInMonth:function(e){if(!this.isValidDate(e)){return 0;}var d=e.getMonth();var f=[31,28,31,30,31,30,31,31,30,31,30,31];if(d!=1){return f[d];}else{var c=e.getFullYear();if(c%400===0){return 29;}else{if(c%100===0){return 28;}else{if(c%4===0){return 29;}else{return 28;}}}}}});},"3.4.0");