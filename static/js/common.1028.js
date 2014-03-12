(function(){(function(){var e=0;var t=["ms","moz","webkit","o"];for(var n=0;n<t.length&&!window.requestAnimationFrame;++n){window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(t,n){var r=(new Date).getTime();var i=Math.max(0,16-(r-e));var s=window.setTimeout(function(){t(r+i)},i);e=r+i;return s};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(e){clearTimeout(e)}})();(function(e){"use strict";e.Shorthand={UI:{},helpers:{},Data:{}}})(window);(function(e,t){function H(e){var t=e.length,n=w.type(e);if(w.isWindow(e)){return false}if(e.nodeType===1&&t){return true}return n==="array"||n!=="function"&&(t===0||typeof t==="number"&&t>0&&t-1 in e)}function j(e){var t=B[e]={};w.each(e.match(S)||[],function(e,n){t[n]=true});return t}function q(e,n,r,i){if(!w.acceptData(e)){return}var s,o,u=w.expando,a=e.nodeType,f=a?w.cache:e,l=a?e[u]:e[u]&&u;if((!l||!f[l]||!i&&!f[l].data)&&r===t&&typeof n==="string"){return}if(!l){if(a){l=e[u]=c.pop()||w.guid++}else{l=u}}if(!f[l]){f[l]=a?{}:{toJSON:w.noop}}if(typeof n==="object"||typeof n==="function"){if(i){f[l]=w.extend(f[l],n)}else{f[l].data=w.extend(f[l].data,n)}}o=f[l];if(!i){if(!o.data){o.data={}}o=o.data}if(r!==t){o[w.camelCase(n)]=r}if(typeof n==="string"){s=o[n];if(s==null){s=o[w.camelCase(n)]}}else{s=o}return s}function R(e,t,n){if(!w.acceptData(e)){return}var r,i,s=e.nodeType,o=s?w.cache:e,u=s?e[w.expando]:w.expando;if(!o[u]){return}if(t){r=n?o[u]:o[u].data;if(r){if(!w.isArray(t)){if(t in r){t=[t]}else{t=w.camelCase(t);if(t in r){t=[t]}else{t=t.split(" ")}}}else{t=t.concat(w.map(t,w.camelCase))}i=t.length;while(i--){delete r[t[i]]}if(n?!z(r):!w.isEmptyObject(r)){return}}}if(!n){delete o[u].data;if(!z(o[u])){return}}if(s){w.cleanData([e],true)}else if(w.support.deleteExpando||o!=o.window){delete o[u]}else{o[u]=null}}function U(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(I,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r==="string"){try{r=r==="true"?true:r==="false"?false:r==="null"?null:+r+""===r?+r:F.test(r)?w.parseJSON(r):r}catch(s){}w.data(e,n,r)}else{r=t}}return r}function z(e){var t;for(t in e){if(t==="data"&&w.isEmptyObject(e[t])){continue}if(t!=="toJSON"){return false}}return true}function it(){return true}function st(){return false}function ot(){try{return o.activeElement}catch(e){}}function ct(e,t){do{e=e[t]}while(e&&e.nodeType!==1);return e}function ht(e,t,n){if(w.isFunction(t)){return w.grep(e,function(e,r){return!!t.call(e,r,e)!==n})}if(t.nodeType){return w.grep(e,function(e){return e===t!==n})}if(typeof t==="string"){if(ut.test(t)){return w.filter(t,e,n)}t=w.filter(t,e)}return w.grep(e,function(e){return w.inArray(e,t)>=0!==n})}function pt(e){var t=dt.split("|"),n=e.createDocumentFragment();if(n.createElement){while(t.length){n.createElement(t.pop())}}return n}function Mt(e,t){return w.nodeName(e,"table")&&w.nodeName(t.nodeType===1?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function _t(e){e.type=(w.find.attr(e,"type")!==null)+"/"+e.type;return e}function Dt(e){var t=Ct.exec(e.type);if(t){e.type=t[1]}else{e.removeAttribute("type")}return e}function Pt(e,t){var n,r=0;for(;(n=e[r])!=null;r++){w._data(n,"globalEval",!t||w._data(t[r],"globalEval"))}}function Ht(e,t){if(t.nodeType!==1||!w.hasData(e)){return}var n,r,i,s=w._data(e),o=w._data(t,s),u=s.events;if(u){delete o.handle;o.events={};for(n in u){for(r=0,i=u[n].length;r<i;r++){w.event.add(t,n,u[n][r])}}}if(o.data){o.data=w.extend({},o.data)}}function Bt(e,t){var n,r,i;if(t.nodeType!==1){return}n=t.nodeName.toLowerCase();if(!w.support.noCloneEvent&&t[w.expando]){i=w._data(t);for(r in i.events){w.removeEvent(t,r,i.handle)}t.removeAttribute(w.expando)}if(n==="script"&&t.text!==e.text){_t(t).text=e.text;Dt(t)}else if(n==="object"){if(t.parentNode){t.outerHTML=e.outerHTML}if(w.support.html5Clone&&e.innerHTML&&!w.trim(t.innerHTML)){t.innerHTML=e.innerHTML}}else if(n==="input"&&xt.test(e.type)){t.defaultChecked=t.checked=e.checked;if(t.value!==e.value){t.value=e.value}}else if(n==="option"){t.defaultSelected=t.selected=e.defaultSelected}else if(n==="input"||n==="textarea"){t.defaultValue=e.defaultValue}}function jt(e,n){var r,s,o=0,u=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!u){for(u=[],r=e.childNodes||e;(s=r[o])!=null;o++){if(!n||w.nodeName(s,n)){u.push(s)}else{w.merge(u,jt(s,n))}}}return n===t||n&&w.nodeName(e,n)?w.merge([e],u):u}function Ft(e){if(xt.test(e.type)){e.defaultChecked=e.checked}}function tn(e,t){if(t in e){return t}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--){t=en[i]+n;if(t in e){return t}}return r}function nn(e,t){e=t||e;return w.css(e,"display")==="none"||!w.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,s=[],o=0,u=e.length;for(;o<u;o++){r=e[o];if(!r.style){continue}s[o]=w._data(r,"olddisplay");n=r.style.display;if(t){if(!s[o]&&n==="none"){r.style.display=""}if(r.style.display===""&&nn(r)){s[o]=w._data(r,"olddisplay",an(r.nodeName))}}else{if(!s[o]){i=nn(r);if(n&&n!=="none"||!i){w._data(r,"olddisplay",i?n:w.css(r,"display"))}}}}for(o=0;o<u;o++){r=e[o];if(!r.style){continue}if(!t||r.style.display==="none"||r.style.display===""){r.style.display=t?s[o]||"":"none"}}return e}function sn(e,t,n){var r=$t.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function on(e,t,n,r,i){var s=n===(r?"border":"content")?4:t==="width"?1:0,o=0;for(;s<4;s+=2){if(n==="margin"){o+=w.css(e,n+Zt[s],true,i)}if(r){if(n==="content"){o-=w.css(e,"padding"+Zt[s],true,i)}if(n!=="margin"){o-=w.css(e,"border"+Zt[s]+"Width",true,i)}}else{o+=w.css(e,"padding"+Zt[s],true,i);if(n!=="padding"){o+=w.css(e,"border"+Zt[s]+"Width",true,i)}}}return o}function un(e,t,n){var r=true,i=t==="width"?e.offsetWidth:e.offsetHeight,s=qt(e),o=w.support.boxSizing&&w.css(e,"boxSizing",false,s)==="border-box";if(i<=0||i==null){i=Rt(e,t,s);if(i<0||i==null){i=e.style[t]}if(Jt.test(i)){return i}r=o&&(w.support.boxSizingReliable||i===e.style[t]);i=parseFloat(i)||0}return i+on(e,t,n||(o?"border":"content"),r,s)+"px"}function an(e){var t=o,n=Qt[e];if(!n){n=fn(e,t);if(n==="none"||!n){It=(It||w("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement);t=(It[0].contentWindow||It[0].contentDocument).document;t.write("<!doctype html><html><body>");t.close();n=fn(e,t);It.detach()}Qt[e]=n}return n}function fn(e,t){var n=w(t.createElement(e)).appendTo(t.body),r=w.css(n[0],"display");n.remove();return r}function vn(e,t,n,r){var i;if(w.isArray(t)){w.each(t,function(t,i){if(n||cn.test(e)){r(e,i)}else{vn(e+"["+(typeof i==="object"?t:"")+"]",i,n,r)}})}else if(!n&&w.type(t)==="object"){for(i in t){vn(e+"["+i+"]",t[i],n,r)}}else{r(e,t)}}function _n(e){return function(t,n){if(typeof t!=="string"){n=t;t="*"}var r,i=0,s=t.toLowerCase().match(S)||[];if(w.isFunction(n)){while(r=s[i++]){if(r[0]==="+"){r=r.slice(1)||"*";(e[r]=e[r]||[]).unshift(n)}else{(e[r]=e[r]||[]).push(n)}}}}}function Dn(e,t,n,r){function o(u){var a;i[u]=true;w.each(e[u]||[],function(e,u){var f=u(t,n,r);if(typeof f==="string"&&!s&&!i[f]){t.dataTypes.unshift(f);o(f);return false}else if(s){return!(a=f)}});return a}var i={},s=e===An;return o(t.dataTypes[0])||!i["*"]&&o("*")}function Pn(e,n){var r,i,s=w.ajaxSettings.flatOptions||{};for(i in n){if(n[i]!==t){(s[i]?e:r||(r={}))[i]=n[i]}}if(r){w.extend(true,e,r)}return e}function Hn(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes;while(f[0]==="*"){f.shift();if(s===t){s=e.mimeType||n.getResponseHeader("Content-Type")}}if(s){for(u in a){if(a[u]&&a[u].test(s)){f.unshift(u);break}}}if(f[0]in r){o=f[0]}else{for(u in r){if(!f[0]||e.converters[u+" "+f[0]]){o=u;break}if(!i){i=u}}o=o||i}if(o){if(o!==f[0]){f.unshift(o)}return r[o]}}function Bn(e,t,n,r){var i,s,o,u,a,f={},l=e.dataTypes.slice();if(l[1]){for(o in e.converters){f[o.toLowerCase()]=e.converters[o]}}s=l.shift();while(s){if(e.responseFields[s]){n[e.responseFields[s]]=t}if(!a&&r&&e.dataFilter){t=e.dataFilter(t,e.dataType)}a=s;s=l.shift();if(s){if(s==="*"){s=a}else if(a!=="*"&&a!==s){o=f[a+" "+s]||f["* "+s];if(!o){for(i in f){u=i.split(" ");if(u[1]===s){o=f[a+" "+u[0]]||f["* "+u[0]];if(o){if(o===true){o=f[i]}else if(f[i]!==true){s=u[0];l.unshift(u[1])}break}}}}if(o!==true){if(o&&e["throws"]){t=o(t)}else{try{t=o(t)}catch(c){return{state:"parsererror",error:o?c:"No conversion from "+a+" to "+s}}}}}}}return{state:"success",data:t}}function zn(){try{return new e.XMLHttpRequest}catch(t){}}function Wn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function Yn(){setTimeout(function(){Xn=t});return Xn=w.now()}function Zn(e,t,n){var r,i=(Gn[t]||[]).concat(Gn["*"]),s=0,o=i.length;for(;s<o;s++){if(r=i[s].call(n,t,e)){return r}}}function er(e,t,n){var r,i,s=0,o=Qn.length,u=w.Deferred().always(function(){delete a.elem}),a=function(){if(i){return false}var t=Xn||Yn(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,s=1-r,o=0,a=f.tweens.length;for(;o<a;o++){f.tweens[o].run(s)}u.notifyWith(e,[f,s,n]);if(s<1&&a){return n}else{u.resolveWith(e,[f]);return false}},f=u.promise({elem:e,props:w.extend({},t),opts:w.extend(true,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Yn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);f.tweens.push(r);return r},stop:function(t){var n=0,r=t?f.tweens.length:0;if(i){return this}i=true;for(;n<r;n++){f.tweens[n].run(1)}if(t){u.resolveWith(e,[f,t])}else{u.rejectWith(e,[f,t])}return this}}),l=f.props;tr(l,f.opts.specialEasing);for(;s<o;s++){r=Qn[s].call(f,e,l,f.opts);if(r){return r}}w.map(l,Zn,f);if(w.isFunction(f.opts.start)){f.opts.start.call(e,f)}w.fx.timer(w.extend(a,{elem:e,anim:f,queue:f.opts.queue}));return f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function tr(e,t){var n,r,i,s,o;for(n in e){r=w.camelCase(n);i=t[r];s=e[n];if(w.isArray(s)){i=s[1];s=e[n]=s[0]}if(n!==r){e[r]=s;delete e[n]}o=w.cssHooks[r];if(o&&"expand"in o){s=o.expand(s);delete e[r];for(n in s){if(!(n in e)){e[n]=s[n];t[n]=i}}}else{t[r]=i}}}function nr(e,t,n){var r,i,s,o,u,a,f=this,l={},c=e.style,h=e.nodeType&&nn(e),p=w._data(e,"fxshow");if(!n.queue){u=w._queueHooks(e,"fx");if(u.unqueued==null){u.unqueued=0;a=u.empty.fire;u.empty.fire=function(){if(!u.unqueued){a()}}}u.unqueued++;f.always(function(){f.always(function(){u.unqueued--;if(!w.queue(e,"fx").length){u.empty.fire()}})})}if(e.nodeType===1&&("height"in t||"width"in t)){n.overflow=[c.overflow,c.overflowX,c.overflowY];if(w.css(e,"display")==="inline"&&w.css(e,"float")==="none"){if(!w.support.inlineBlockNeedsLayout||an(e.nodeName)==="inline"){c.display="inline-block"}else{c.zoom=1}}}if(n.overflow){c.overflow="hidden";if(!w.support.shrinkWrapBlocks){f.always(function(){c.overflow=n.overflow[0];c.overflowX=n.overflow[1];c.overflowY=n.overflow[2]})}}for(r in t){i=t[r];if($n.exec(i)){delete t[r];s=s||i==="toggle";if(i===(h?"hide":"show")){continue}l[r]=p&&p[r]||w.style(e,r)}}if(!w.isEmptyObject(l)){if(p){if("hidden"in p){h=p.hidden}}else{p=w._data(e,"fxshow",{})}if(s){p.hidden=!h}if(h){w(e).show()}else{f.done(function(){w(e).hide()})}f.done(function(){var t;w._removeData(e,"fxshow");for(t in l){w.style(e,t,l[t])}});for(r in l){o=Zn(h?p[r]:0,r,f);if(!(r in p)){p[r]=o.start;if(h){o.end=o.start;o.start=r==="width"||r==="height"?1:0}}}}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}function ir(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t){n=Zt[i];r["margin"+n]=r["padding"+n]=e}if(t){r.opacity=r.width=e}return r}function sr(e){return w.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false}var n,r,i=typeof t,s=e.location,o=e.document,u=o.documentElement,a=e.jQuery,f=e.$,l={},c=[],h="1.10.2",p=c.concat,d=c.push,v=c.slice,m=c.indexOf,g=l.toString,y=l.hasOwnProperty,b=h.trim,w=function(e,t){return new w.fn.init(e,t,r)},E=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,S=/\S+/g,x=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,N=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,C=/^[\],:{}\s]*$/,k=/(?:^|:|,)(?:\s*\[)+/g,L=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,O=/^-ms-/,M=/-([\da-z])/gi,_=function(e,t){return t.toUpperCase()},D=function(e){if(o.addEventListener||e.type==="load"||o.readyState==="complete"){P();w.ready()}},P=function(){if(o.addEventListener){o.removeEventListener("DOMContentLoaded",D,false);e.removeEventListener("load",D,false)}else{o.detachEvent("onreadystatechange",D);e.detachEvent("onload",D)}};w.fn=w.prototype={jquery:h,constructor:w,init:function(e,n,r){var i,s;if(!e){return this}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){i=[null,e,null]}else{i=T.exec(e)}if(i&&(i[1]||!n)){if(i[1]){n=n instanceof w?n[0]:n;w.merge(this,w.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,true));if(N.test(i[1])&&w.isPlainObject(n)){for(i in n){if(w.isFunction(this[i])){this[i](n[i])}else{this.attr(i,n[i])}}}return this}else{s=o.getElementById(i[2]);if(s&&s.parentNode){if(s.id!==i[2]){return r.find(e)}this.length=1;this[0]=s}this.context=o;this.selector=e;return this}}else if(!n||n.jquery){return(n||r).find(e)}else{return this.constructor(n).find(e)}}else if(e.nodeType){this.context=this[0]=e;this.length=1;return this}else if(w.isFunction(e)){return r.ready(e)}if(e.selector!==t){this.selector=e.selector;this.context=e.context}return w.makeArray(e,this)},selector:"",length:0,toArray:function(){return v.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);t.prevObject=this;t.context=this.context;return t},each:function(e,t){return w.each(this,e,t)},ready:function(e){w.ready.promise().done(e);return this},slice:function(){return this.pushStack(v.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice};w.fn.init.prototype=w.fn;w.extend=w.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=false;if(typeof u==="boolean"){l=u;u=arguments[1]||{};a=2}if(typeof u!=="object"&&!w.isFunction(u)){u={}}if(f===a){u=this;--a}for(;a<f;a++){if((s=arguments[a])!=null){for(i in s){e=u[i];r=s[i];if(u===r){continue}if(l&&r&&(w.isPlainObject(r)||(n=w.isArray(r)))){if(n){n=false;o=e&&w.isArray(e)?e:[]}else{o=e&&w.isPlainObject(e)?e:{}}u[i]=w.extend(l,o,r)}else if(r!==t){u[i]=r}}}}return u};w.extend({expando:"jQuery"+(h+Math.random()).replace(/\D/g,""),noConflict:function(t){if(e.$===w){e.$=f}if(t&&e.jQuery===w){e.jQuery=a}return w},isReady:false,readyWait:1,holdReady:function(e){if(e){w.readyWait++}else{w.ready(true)}},ready:function(e){if(e===true?--w.readyWait:w.isReady){return}if(!o.body){return setTimeout(w.ready)}w.isReady=true;if(e!==true&&--w.readyWait>0){return}n.resolveWith(o,[w]);if(w.fn.trigger){w(o).trigger("ready").off("ready")}},isFunction:function(e){return w.type(e)==="function"},isArray:Array.isArray||function(e){return w.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){if(e==null){return String(e)}return typeof e==="object"||typeof e==="function"?l[g.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||w.type(e)!=="object"||e.nodeType||w.isWindow(e)){return false}try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf")){return false}}catch(r){return false}if(w.support.ownLast){for(n in e){return y.call(e,n)}}for(n in e){}return n===t||y.call(e,n)},isEmptyObject:function(e){var t;for(t in e){return false}return true},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||typeof e!=="string"){return null}if(typeof t==="boolean"){n=t;t=false}t=t||o;var r=N.exec(e),i=!n&&[];if(r){return[t.createElement(r[1])]}r=w.buildFragment([e],t,i);if(i){w(i).remove()}return w.merge([],r.childNodes)},parseJSON:function(t){if(e.JSON&&e.JSON.parse){return e.JSON.parse(t)}if(t===null){return t}if(typeof t==="string"){t=w.trim(t);if(t){if(C.test(t.replace(L,"@").replace(A,"]").replace(k,""))){return(new Function("return "+t))()}}}w.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!=="string"){return null}try{if(e.DOMParser){i=new DOMParser;r=i.parseFromString(n,"text/xml")}else{r=new ActiveXObject("Microsoft.XMLDOM");r.async="false";r.loadXML(n)}}catch(s){r=t}if(!r||!r.documentElement||r.getElementsByTagName("parsererror").length){w.error("Invalid XML: "+n)}return r},noop:function(){},globalEval:function(t){if(t&&w.trim(t)){(e.execScript||function(t){e["eval"].call(e,t)})(t)}},camelCase:function(e){return e.replace(O,"ms-").replace(M,_)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,s=e.length,o=H(e);if(n){if(o){for(;i<s;i++){r=t.apply(e[i],n);if(r===false){break}}}else{for(i in e){r=t.apply(e[i],n);if(r===false){break}}}}else{if(o){for(;i<s;i++){r=t.call(e[i],i,e[i]);if(r===false){break}}}else{for(i in e){r=t.call(e[i],i,e[i]);if(r===false){break}}}}return e},trim:b&&!b.call("﻿ ")?function(e){return e==null?"":b.call(e)}:function(e){return e==null?"":(e+"").replace(x,"")},makeArray:function(e,t){var n=t||[];if(e!=null){if(H(Object(e))){w.merge(n,typeof e==="string"?[e]:e)}else{d.call(n,e)}}return n},inArray:function(e,t,n){var r;if(t){if(m){return m.call(t,e,n)}r=t.length;n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++){if(n in t&&t[n]===e){return n}}}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r==="number"){for(;s<r;s++){e[i++]=n[s]}}else{while(n[s]!==t){e[i++]=n[s++]}}e.length=i;return e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++){r=!!t(e[s],s);if(n!==r){i.push(e[s])}}return i},map:function(e,t,n){var r,i=0,s=e.length,o=H(e),u=[];if(o){for(;i<s;i++){r=t(e[i],i,n);if(r!=null){u[u.length]=r}}}else{for(i in e){r=t(e[i],i,n);if(r!=null){u[u.length]=r}}}return p.apply([],u)},guid:1,proxy:function(e,n){var r,i,s;if(typeof n==="string"){s=e[n];n=e;e=s}if(!w.isFunction(e)){return t}r=v.call(arguments,2);i=function(){return e.apply(n||this,r.concat(v.call(arguments)))};i.guid=e.guid=e.guid||w.guid++;return i},access:function(e,n,r,i,s,o,u){var a=0,f=e.length,l=r==null;if(w.type(r)==="object"){s=true;for(a in r){w.access(e,n,a,r[a],true,o,u)}}else if(i!==t){s=true;if(!w.isFunction(i)){u=true}if(l){if(u){n.call(e,i);n=null}else{l=n;n=function(e,t,n){return l.call(w(e),n)}}}if(n){for(;a<f;a++){n(e[a],r,u?i:i.call(e[a],a,n(e[a],r)))}}}return s?e:l?n.call(e):f?n(e[0],r):o},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,s,o={};for(s in t){o[s]=e.style[s];e.style[s]=t[s]}i=n.apply(e,r||[]);for(s in t){e.style[s]=o[s]}return i}});w.ready.promise=function(t){if(!n){n=w.Deferred();if(o.readyState==="complete"){setTimeout(w.ready)}else if(o.addEventListener){o.addEventListener("DOMContentLoaded",D,false);e.addEventListener("load",D,false)}else{o.attachEvent("onreadystatechange",D);e.attachEvent("onload",D);var r=false;try{r=e.frameElement==null&&o.documentElement}catch(i){}if(r&&r.doScroll){(function s(){if(!w.isReady){try{r.doScroll("left")}catch(e){return setTimeout(s,50)}P();w.ready()}})()}}}return n.promise(t)};w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});r=w(o);(function(e,t){function ot(e,t,n,i){var s,o,u,a,f,l,p,m,g,w;if((t?t.ownerDocument||t:E)!==h){c(t)}t=t||h;n=n||[];if(!e||typeof e!=="string"){return n}if((a=t.nodeType)!==1&&a!==9){return[]}if(d&&!i){if(s=Z.exec(e)){if(u=s[1]){if(a===9){o=t.getElementById(u);if(o&&o.parentNode){if(o.id===u){n.push(o);return n}}else{return n}}else{if(t.ownerDocument&&(o=t.ownerDocument.getElementById(u))&&y(t,o)&&o.id===u){n.push(o);return n}}}else if(s[2]){H.apply(n,t.getElementsByTagName(e));return n}else if((u=s[3])&&r.getElementsByClassName&&t.getElementsByClassName){H.apply(n,t.getElementsByClassName(u));return n}}if(r.qsa&&(!v||!v.test(e))){m=p=b;g=t;w=a===9&&e;if(a===1&&t.nodeName.toLowerCase()!=="object"){l=mt(e);if(p=t.getAttribute("id")){m=p.replace(nt,"\\$&")}else{t.setAttribute("id",m)}m="[id='"+m+"'] ";f=l.length;while(f--){l[f]=m+gt(l[f])}g=$.test(e)&&t.parentNode||t;w=l.join(",")}if(w){try{H.apply(n,g.querySelectorAll(w));return n}catch(S){}finally{if(!p){t.removeAttribute("id")}}}}}return Nt(e.replace(W,"$1"),t,n,i)}function ut(){function t(n,r){if(e.push(n+=" ")>s.cacheLength){delete t[e.shift()]}return t[n]=r}var e=[];return t}function at(e){e[b]=true;return e}function ft(e){var t=h.createElement("div");try{return!!e(t)}catch(n){return false}finally{if(t.parentNode){t.parentNode.removeChild(t)}t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--){s.attrHandle[n[r]]=t}}function ct(e,t){var n=t&&e,r=n&&e.nodeType===1&&t.nodeType===1&&(~t.sourceIndex||O)-(~e.sourceIndex||O);if(r){return r}if(n){while(n=n.nextSibling){if(n===t){return-1}}}return e?1:-1}function ht(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function dt(e){return at(function(t){t=+t;return at(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--){if(n[i=s[o]]){n[i]=!(r[i]=n[i])}}})})}function vt(){}function mt(e,t){var n,r,i,o,u,a,f,l=N[e+" "];if(l){return t?0:l.slice(0)}u=e;a=[];f=s.preFilter;while(u){if(!n||(r=X.exec(u))){if(r){u=u.slice(r[0].length)||u}a.push(i=[])}n=false;if(r=V.exec(u)){n=r.shift();i.push({value:n,type:r[0].replace(W," ")});u=u.slice(n.length)}for(o in s.filter){if((r=G[o].exec(u))&&(!f[o]||(r=f[o](r)))){n=r.shift();i.push({value:n,type:o,matches:r});u=u.slice(n.length)}}if(!n){break}}return t?u.length:u?ot.error(e):N(e,a).slice(0)}function gt(e){var t=0,n=e.length,r="";for(;t<n;t++){r+=e[t].value}return r}function yt(e,t,n){var r=t.dir,s=n&&r==="parentNode",o=x++;return t.first?function(t,n,i){while(t=t[r]){if(t.nodeType===1||s){return e(t,n,i)}}}:function(t,n,u){var a,f,l,c=S+" "+o;if(u){while(t=t[r]){if(t.nodeType===1||s){if(e(t,n,u)){return true}}}}else{while(t=t[r]){if(t.nodeType===1||s){l=t[b]||(t[b]={});if((f=l[r])&&f[0]===c){if((a=f[1])===true||a===i){return a===true}}else{f=l[r]=[c];f[1]=e(t,n,u)||i;if(f[1]===true){return true}}}}}}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--){if(!e[i](t,n,r)){return false}}return true}:e[0]}function wt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++){if(s=e[u]){if(!n||n(s,r,i)){o.push(s);if(f){t.push(u)}}}}return o}function Et(e,t,n,r,i,s){if(r&&!r[b]){r=Et(r)}if(i&&!i[b]){i=Et(i,s)}return at(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||Tt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?wt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;if(n){n(m,g,u,a)}if(r){f=wt(g,p);r(f,[],u,a);l=f.length;while(l--){if(c=f[l]){g[p[l]]=!(m[p[l]]=c)}}}if(s){if(i||e){if(i){f=[];l=g.length;while(l--){if(c=g[l]){f.push(m[l]=c)}}i(null,g=[],f,a)}l=g.length;while(l--){if((c=g[l])&&(f=i?j.call(s,c):h[l])>-1){s[f]=!(o[f]=c)}}}}else{g=wt(g===o?g.splice(d,g.length):g);if(i){i(null,o,g,a)}else{H.apply(o,g)}}})}function St(e){var t,n,r,i=e.length,o=s.relative[e[0].type],u=o||s.relative[" "],a=o?1:0,l=yt(function(e){return e===t},u,true),c=yt(function(e){return j.call(t,e)>-1},u,true),h=[function(e,n,r){return!o&&(r||n!==f)||((t=n).nodeType?l(e,n,r):c(e,n,r))}];for(;a<i;a++){if(n=s.relative[e[a].type]){h=[yt(bt(h),n)]}else{n=s.filter[e[a].type].apply(null,e[a].matches);if(n[b]){r=++a;for(;r<i;r++){if(s.relative[e[r].type]){break}}return Et(a>1&&bt(h),a>1&&gt(e.slice(0,a-1).concat({value:e[a-2].type===" "?"*":""})).replace(W,"$1"),n,a<r&&St(e.slice(a,r)),r<i&&St(e=e.slice(r)),r<i&&gt(e))}h.push(n)}}return bt(h)}function xt(e,t){var n=0,r=t.length>0,o=e.length>0,u=function(u,a,l,c,p){var d,v,m,g=[],y=0,b="0",w=u&&[],E=p!=null,x=f,T=u||o&&s.find["TAG"]("*",p&&a.parentNode||a),N=S+=x==null?1:Math.random()||.1;if(E){f=a!==h&&a;i=n}for(;(d=T[b])!=null;b++){if(o&&d){v=0;while(m=e[v++]){if(m(d,a,l)){c.push(d);break}}if(E){S=N;i=++n}}if(r){if(d=!m&&d){y--}if(u){w.push(d)}}}y+=b;if(r&&b!==y){v=0;while(m=t[v++]){m(w,g,a,l)}if(u){if(y>0){while(b--){if(!(w[b]||g[b])){g[b]=D.call(c)}}}g=wt(g)}H.apply(c,g);if(E&&!u&&g.length>0&&y+t.length>1){ot.uniqueSort(c)}}if(E){S=N;f=x}return w};return r?at(u):u}function Tt(e,t,n){var r=0,i=t.length;for(;r<i;r++){ot(e,t[r],n)}return n}function Nt(e,t,n,i){var o,u,f,l,c,h=mt(e);if(!i){if(h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&r.getById&&t.nodeType===9&&d&&s.relative[u[1].type]){t=(s.find["ID"](f.matches[0].replace(rt,it),t)||[])[0];if(!t){return n}e=e.slice(u.shift().value.length)}o=G["needsContext"].test(e)?0:u.length;while(o--){f=u[o];if(s.relative[l=f.type]){break}if(c=s.find[l]){if(i=c(f.matches[0].replace(rt,it),$.test(u[0].type)&&t.parentNode||t)){u.splice(o,1);e=i.length&&gt(u);if(!e){H.apply(n,i);return n}break}}}}}a(e,h)(i,t,!d,n,$.test(e));return n}var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b="sizzle"+ -(new Date),E=e.document,S=0,x=0,T=ut(),N=ut(),C=ut(),k=false,L=function(e,t){if(e===t){k=true;return 0}return 0},A=typeof t,O=1<<31,M={}.hasOwnProperty,_=[],D=_.pop,P=_.push,H=_.push,B=_.slice,j=_.indexOf||function(e){var t=0,n=this.length;for(;t<n;t++){if(this[t]===e){return t}}return-1},F="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",I="[\\x20\\t\\r\\n\\f]",q="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",R=q.replace("w","w#"),U="\\["+I+"*("+q+")"+I+"*(?:([*^$|!~]?=)"+I+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+R+")|)|)"+I+"*\\]",z=":("+q+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+U.replace(3,8)+")*)|.*)\\)|)",W=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),X=new RegExp("^"+I+"*,"+I+"*"),V=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),$=new RegExp(I+"*[+~]"),J=new RegExp("="+I+"*([^\\]'\"]*)"+I+"*\\]","g"),K=new RegExp(z),Q=new RegExp("^"+R+"$"),G={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q.replace("w","w*")+")"),ATTR:new RegExp("^"+U),PSEUDO:new RegExp("^"+z),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+F+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=new RegExp("\\\\([\\da-f]{1,6}"+I+"?|("+I+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,r&1023|56320)};try{H.apply(_=B.call(E.childNodes),E.childNodes);_[E.childNodes.length].nodeType}catch(st){H={apply:_.length?function(e,t){P.apply(e,B.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]){}e.length=n-1}}}u=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":false};r=ot.support={};c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:E,n=t.defaultView;if(t===h||t.nodeType!==9||!t.documentElement){return h}h=t;p=t.documentElement;d=!u(t);if(n&&n.attachEvent&&n!==n.top){n.attachEvent("onbeforeunload",function(){c()})}r.attributes=ft(function(e){e.className="i";return!e.getAttribute("className")});r.getElementsByTagName=ft(function(e){e.appendChild(t.createComment(""));return!e.getElementsByTagName("*").length});r.getElementsByClassName=ft(function(e){e.innerHTML="<div class='a'></div><div class='a i'></div>";e.firstChild.className="i";return e.getElementsByClassName("i").length===2});r.getById=ft(function(e){p.appendChild(e).id=b;return!t.getElementsByName||!t.getElementsByName(b).length});if(r.getById){s.find["ID"]=function(e,t){if(typeof t.getElementById!==A&&d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}};s.filter["ID"]=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}}else{delete s.find["ID"];s.filter["ID"]=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}}s.find["TAG"]=r.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==A){return t.getElementsByTagName(e)}}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e);if(e==="*"){while(n=s[i++]){if(n.nodeType===1){r.push(n)}}return r}return s};s.find["CLASS"]=r.getElementsByClassName&&function(e,t){if(typeof t.getElementsByClassName!==A&&d){return t.getElementsByClassName(e)}};m=[];v=[];if(r.qsa=Y.test(t.querySelectorAll)){ft(function(e){e.innerHTML="<select><option selected=''></option></select>";if(!e.querySelectorAll("[selected]").length){v.push("\\["+I+"*(?:value|"+F+")")}if(!e.querySelectorAll(":checked").length){v.push(":checked")}});ft(function(e){var n=t.createElement("input");n.setAttribute("type","hidden");e.appendChild(n).setAttribute("t","");if(e.querySelectorAll("[t^='']").length){v.push("[*^$]="+I+"*(?:''|\"\")")}if(!e.querySelectorAll(":enabled").length){v.push(":enabled",":disabled")}e.querySelectorAll("*,:x");v.push(",.*:")})}if(r.matchesSelector=Y.test(g=p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector)){ft(function(e){r.disconnectedMatch=g.call(e,"div");g.call(e,"[s!='']:x");m.push("!=",z)})}v=v.length&&new RegExp(v.join("|"));m=m.length&&new RegExp(m.join("|"));y=Y.test(p.contains)||p.compareDocumentPosition?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&(n.contains?n.contains(r):e.compareDocumentPosition&&e.compareDocumentPosition(r)&16))}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return true}}}return false};L=p.compareDocumentPosition?function(e,n){if(e===n){k=true;return 0}var i=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n);if(i){if(i&1||!r.sortDetached&&n.compareDocumentPosition(e)===i){if(e===t||y(E,e)){return-1}if(n===t||y(E,n)){return 1}return l?j.call(l,e)-j.call(l,n):0}return i&4?-1:1}return e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,s=e.parentNode,o=n.parentNode,u=[e],a=[n];if(e===n){k=true;return 0}else if(!s||!o){return e===t?-1:n===t?1:s?-1:o?1:l?j.call(l,e)-j.call(l,n):0}else if(s===o){return ct(e,n)}r=e;while(r=r.parentNode){u.unshift(r)}r=n;while(r=r.parentNode){a.unshift(r)}while(u[i]===a[i]){i++}return i?ct(u[i],a[i]):u[i]===E?-1:a[i]===E?1:0};return t};ot.matches=function(e,t){return ot(e,null,null,t)};ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==h){c(e)}t=t.replace(J,"='$1']");if(r.matchesSelector&&d&&(!m||!m.test(t))&&(!v||!v.test(t))){try{var n=g.call(e,t);if(n||r.disconnectedMatch||e.document&&e.document.nodeType!==11){return n}}catch(i){}}return ot(t,h,null,[e]).length>0};ot.contains=function(e,t){if((e.ownerDocument||e)!==h){c(e)}return y(e,t)};ot.attr=function(e,n){if((e.ownerDocument||e)!==h){c(e)}var i=s.attrHandle[n.toLowerCase()],o=i&&M.call(s.attrHandle,n.toLowerCase())?i(e,n,!d):t;return o===t?r.attributes||!d?e.getAttribute(n):(o=e.getAttributeNode(n))&&o.specified?o.value:null:o};ot.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};ot.uniqueSort=function(e){var t,n=[],i=0,s=0;k=!r.detectDuplicates;l=!r.sortStable&&e.slice(0);e.sort(L);if(k){while(t=e[s++]){if(t===e[s]){i=n.push(s)}}while(i--){e.splice(n[i],1)}}return e};o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(!i){for(;t=e[r];r++){n+=o(t)}}else if(i===1||i===9||i===11){if(typeof e.textContent==="string"){return e.textContent}else{for(e=e.firstChild;e;e=e.nextSibling){n+=o(e)}}}else if(i===3||i===4){return e.nodeValue}return n};s=ot.selectors={cacheLength:50,createPseudo:at,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(rt,it);e[3]=(e[4]||e[5]||"").replace(rt,it);if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();if(e[1].slice(0,3)==="nth"){if(!e[3]){ot.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));e[5]=+(e[7]+e[8]||e[3]==="odd")}else if(e[3]){ot.error(e[0])}return e},PSEUDO:function(e){var n,r=!e[5]&&e[2];if(G["CHILD"].test(e[0])){return null}if(e[3]&&e[4]!==t){e[2]=e[4]}else if(r&&K.test(r)&&(n=mt(r,true))&&(n=r.indexOf(")",r.length-n)-r.length)){e[0]=e[0].slice(0,n);e[2]=r.slice(0,n)}return e.slice(0,3)}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return e==="*"?function(){return true}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&T(e,function(e){return t.test(typeof e.className==="string"&&e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);if(i==null){return t==="!="}if(!t){return true}i+="";return t==="="?i===n:t==="!="?i!==n:t==="^="?n&&i.indexOf(n)===0:t==="*="?n&&i.indexOf(n)>-1:t==="$="?n&&i.slice(-n.length)===n:t==="~="?(" "+i+" ").indexOf(n)>-1:t==="|="?i===n||i.slice(0,n.length+1)===n+"-":false}},CHILD:function(e,t,n,r,i){var s=e.slice(0,3)!=="nth",o=e.slice(-4)!=="last",u=t==="of-type";return r===1&&i===0?function(e){return!!e.parentNode}:function(t,n,a){var f,l,c,h,p,d,v=s!==o?"nextSibling":"previousSibling",m=t.parentNode,g=u&&t.nodeName.toLowerCase(),y=!a&&!u;if(m){if(s){while(v){c=t;while(c=c[v]){if(u?c.nodeName.toLowerCase()===g:c.nodeType===1){return false}}d=v=e==="only"&&!d&&"nextSibling"}return true}d=[o?m.firstChild:m.lastChild];if(o&&y){l=m[b]||(m[b]={});f=l[e]||[];p=f[0]===S&&f[1];h=f[0]===S&&f[2];c=p&&m.childNodes[p];while(c=++p&&c&&c[v]||(h=p=0)||d.pop()){if(c.nodeType===1&&++h&&c===t){l[e]=[S,p,h];break}}}else if(y&&(f=(t[b]||(t[b]={}))[e])&&f[0]===S){h=f[1]}else{while(c=++p&&c&&c[v]||(h=p=0)||d.pop()){if((u?c.nodeName.toLowerCase()===g:c.nodeType===1)&&++h){if(y){(c[b]||(c[b]={}))[e]=[S,h]}if(c===t){break}}}}h-=i;return h===r||h%r===0&&h/r>=0}}},PSEUDO:function(e,t){var n,r=s.pseudos[e]||s.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);if(r[b]){return r(t)}if(r.length>1){n=[e,e,"",t];return s.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,s=r(e,t),o=s.length;while(o--){i=j.call(e,s[o]);e[i]=!(n[i]=s[o])}}):function(e){return r(e,0,n)}}return r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(W,"$1"));return r[b]?at(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--){if(s=o[u]){e[u]=!(t[u]=s)}}}):function(e,i,s){t[0]=e;r(t,null,s,n);return!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){if(!Q.test(e||"")){ot.error("unsupported lang: "+e)}e=e.replace(rt,it).toLowerCase();return function(t){var n;do{if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){n=n.toLowerCase();return n===e||n.indexOf(e+"-")===0}}while((t=t.parentNode)&&t.nodeType===1);return false}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4){return false}}return true},parent:function(e){return!s.pseudos["empty"](e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t;return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()===e.type)},first:dt(function(){return[0]}),last:dt(function(e,t){return[t-1]}),eq:dt(function(e,t,n){return[n<0?n+t:n]}),even:dt(function(e,t){var n=0;for(;n<t;n+=2){e.push(n)}return e}),odd:dt(function(e,t){var n=1;for(;n<t;n+=2){e.push(n)}return e}),lt:dt(function(e,t,n){var r=n<0?n+t:n;for(;--r>=0;){e.push(r)}return e}),gt:dt(function(e,t,n){var r=n<0?n+t:n;for(;++r<t;){e.push(r)}return e})}};s.pseudos["nth"]=s.pseudos["eq"];for(n in{radio:true,checkbox:true,file:true,password:true,image:true}){s.pseudos[n]=ht(n)}for(n in{submit:true,reset:true}){s.pseudos[n]=pt(n)}vt.prototype=s.filters=s.pseudos;s.setFilters=new vt;a=ot.compile=function(e,t){var n,r=[],i=[],s=C[e+" "];if(!s){if(!t){t=mt(e)}n=t.length;while(n--){s=St(t[n]);if(s[b]){r.push(s)}else{i.push(s)}}s=C(e,xt(i,r))}return s};r.sortStable=b.split("").sort(L).join("")===b;r.detectDuplicates=k;c();r.sortDetached=ft(function(e){return e.compareDocumentPosition(h.createElement("div"))&1});if(!ft(function(e){e.innerHTML="<a href='#'></a>";return e.firstChild.getAttribute("href")==="#"})){lt("type|href|height|width",function(e,t,n){if(!n){return e.getAttribute(t,t.toLowerCase()==="type"?1:2)}})}if(!r.attributes||!ft(function(e){e.innerHTML="<input/>";e.firstChild.setAttribute("value","");return e.firstChild.getAttribute("value")===""})){lt("value",function(e,t,n){if(!n&&e.nodeName.toLowerCase()==="input"){return e.defaultValue}})}if(!ft(function(e){return e.getAttribute("disabled")==null})){lt(F,function(e,t,n){var r;if(!n){return(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===true?t.toLowerCase():null}})}w.find=ot;w.expr=ot.selectors;w.expr[":"]=w.expr.pseudos;w.unique=ot.uniqueSort;w.text=ot.getText;w.isXMLDoc=ot.isXML;w.contains=ot.contains})(e);var B={};w.Callbacks=function(e){e=typeof e==="string"?B[e]||j(e):w.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){r=e.memory&&t;i=true;o=u||0;u=0;s=a.length;n=true;for(;a&&o<s;o++){if(a[o].apply(t[0],t[1])===false&&e.stopOnFalse){r=false;break}}n=false;if(a){if(f){if(f.length){l(f.shift())}}else if(r){a=[]}else{c.disable()}}},c={add:function(){if(a){var t=a.length;(function i(t){w.each(t,function(t,n){var r=w.type(n);if(r==="function"){if(!e.unique||!c.has(n)){a.push(n)}}else if(n&&n.length&&r!=="string"){i(n)}})})(arguments);if(n){s=a.length}else if(r){u=t;l(r)}}return this},remove:function(){if(a){w.each(arguments,function(e,t){var r;while((r=w.inArray(t,a,r))>-1){a.splice(r,1);if(n){if(r<=s){s--}if(r<=o){o--}}}})}return this},has:function(e){return e?w.inArray(e,a)>-1:!!(a&&a.length)},empty:function(){a=[];s=0;return this},disable:function(){a=f=r=t;return this},disabled:function(){return!a},lock:function(){f=t;if(!r){c.disable()}return this},locked:function(){return!f},fireWith:function(e,t){if(a&&(!i||f)){t=t||[];t=[e,t.slice?t.slice():t];if(n){f.push(t)}else{l(t)}}return this},fire:function(){c.fireWith(this,arguments);return this},fired:function(){return!!i}};return c};w.extend({Deferred:function(e){var t=[["resolve","done",w.Callbacks("once memory"),"resolved"],["reject","fail",w.Callbacks("once memory"),"rejected"],["notify","progress",w.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){i.done(arguments).fail(arguments);return this},then:function(){var e=arguments;return w.Deferred(function(n){w.each(t,function(t,s){var o=s[0],u=w.isFunction(e[t])&&e[t];i[s[1]](function(){var e=u&&u.apply(this,arguments);if(e&&w.isFunction(e.promise)){e.promise().done(n.resolve).fail(n.reject).progress(n.notify)}else{n[o+"With"](this===r?n.promise():this,u?[e]:arguments)}})});e=null}).promise()},promise:function(e){return e!=null?w.extend(e,r):r}},i={};r.pipe=r.then;w.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add;if(u){o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock)}i[s[0]]=function(){i[s[0]+"With"](this===i?r:this,arguments);return this};i[s[0]+"With"]=o.fireWith});r.promise(i);if(e){e.call(i,i)}return i},when:function(e){var t=0,n=v.call(arguments),r=n.length,i=r!==1||e&&w.isFunction(e.promise)?r:0,s=i===1?e:w.Deferred(),o=function(e,t,n){return function(r){t[e]=this;n[e]=arguments.length>1?v.call(arguments):r;if(n===u){s.notifyWith(t,n)}else if(!--i){s.resolveWith(t,n)}}},u,a,f;if(r>1){u=new Array(r);a=new Array(r);f=new Array(r);for(;t<r;t++){if(n[t]&&w.isFunction(n[t].promise)){n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u))}else{--i}}}if(!i){s.resolveWith(f,n)}return s.promise()}});w.support=function(t){var n,r,s,u,a,f,l,c,h,p=o.createElement("div");p.setAttribute("className","t");p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";n=p.getElementsByTagName("*")||[];r=p.getElementsByTagName("a")[0];if(!r||!r.style||!n.length){return t}u=o.createElement("select");f=u.appendChild(o.createElement("option"));s=p.getElementsByTagName("input")[0];r.style.cssText="top:1px;float:left;opacity:.5";t.getSetAttribute=p.className!=="t";t.leadingWhitespace=p.firstChild.nodeType===3;t.tbody=!p.getElementsByTagName("tbody").length;t.htmlSerialize=!!p.getElementsByTagName("link").length;t.style=/top/.test(r.getAttribute("style"));t.hrefNormalized=r.getAttribute("href")==="/a";t.opacity=/^0.5/.test(r.style.opacity);t.cssFloat=!!r.style.cssFloat;t.checkOn=!!s.value;t.optSelected=f.selected;t.enctype=!!o.createElement("form").enctype;t.html5Clone=o.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";t.inlineBlockNeedsLayout=false;t.shrinkWrapBlocks=false;t.pixelPosition=false;t.deleteExpando=true;t.noCloneEvent=true;t.reliableMarginRight=true;t.boxSizingReliable=true;s.checked=true;t.noCloneChecked=s.cloneNode(true).checked;u.disabled=true;t.optDisabled=!f.disabled;try{delete p.test}catch(d){t.deleteExpando=false}s=o.createElement("input");s.setAttribute("value","");t.input=s.getAttribute("value")==="";s.value="t";s.setAttribute("type","radio");t.radioValue=s.value==="t";s.setAttribute("checked","t");s.setAttribute("name","t");a=o.createDocumentFragment();a.appendChild(s);t.appendChecked=s.checked;t.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;if(p.attachEvent){p.attachEvent("onclick",function(){t.noCloneEvent=false});p.cloneNode(true).click()}for(h in{submit:true,change:true,focusin:true}){p.setAttribute(l="on"+h,"t");t[h+"Bubbles"]=l in e||p.attributes[l].expando===false}p.style.backgroundClip="content-box";p.cloneNode(true).style.backgroundClip="";t.clearCloneStyle=p.style.backgroundClip==="content-box";for(h in w(t)){break}t.ownLast=h!=="0";w(function(){var n,r,s,u="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",a=o.getElementsByTagName("body")[0];if(!a){return}n=o.createElement("div");n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";a.appendChild(n).appendChild(p);p.innerHTML="<table><tr><td></td><td>t</td></tr></table>";s=p.getElementsByTagName("td");s[0].style.cssText="padding:0;margin:0;border:0;display:none";c=s[0].offsetHeight===0;s[0].style.display="";s[1].style.display="none";t.reliableHiddenOffsets=c&&s[0].offsetHeight===0;p.innerHTML="";p.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";w.swap(a,a.style.zoom!=null?{zoom:1}:{},function(){t.boxSizing=p.offsetWidth===4});if(e.getComputedStyle){t.pixelPosition=(e.getComputedStyle(p,null)||{}).top!=="1%";t.boxSizingReliable=(e.getComputedStyle(p,null)||{width:"4px"}).width==="4px";r=p.appendChild(o.createElement("div"));r.style.cssText=p.style.cssText=u;r.style.marginRight=r.style.width="0";p.style.width="1px";t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)}if(typeof p.style.zoom!==i){p.innerHTML="";p.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1";t.inlineBlockNeedsLayout=p.offsetWidth===3;p.style.display="block";p.innerHTML="<div></div>";p.firstChild.style.width="5px";t.shrinkWrapBlocks=p.offsetWidth!==3;if(t.inlineBlockNeedsLayout){a.style.zoom=1}}a.removeChild(n);n=p=s=r=null});n=u=a=f=r=s=null;return t}({});var F=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;w.extend({cache:{},noData:{applet:true,embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){e=e.nodeType?w.cache[e[w.expando]]:e[w.expando];return!!e&&!z(e)},data:function(e,t,n){return q(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return q(e,t,n,true)},_removeData:function(e,t){return R(e,t,true)},acceptData:function(e){if(e.nodeType&&e.nodeType!==1&&e.nodeType!==9){return false}var t=e.nodeName&&w.noData[e.nodeName.toLowerCase()];return!t||t!==true&&e.getAttribute("classid")===t}});w.fn.extend({data:function(e,n){var r,i,s=null,o=0,u=this[0];if(e===t){if(this.length){s=w.data(u);if(u.nodeType===1&&!w._data(u,"parsedAttrs")){r=u.attributes;for(;o<r.length;o++){i=r[o].name;if(i.indexOf("data-")===0){i=w.camelCase(i.slice(5));U(u,i,s[i])}}w._data(u,"parsedAttrs",true)}}return s}if(typeof e==="object"){return this.each(function(){w.data(this,e)})}return arguments.length>1?this.each(function(){w.data(this,e,n)}):u?U(u,e,w.data(u,e)):null},removeData:function(e){return this.each(function(){w.removeData(this,e)})}});w.extend({queue:function(e,t,n){var r;if(e){t=(t||"fx")+"queue";r=w._data(e,t);if(n){if(!r||w.isArray(n)){r=w._data(e,t,w.makeArray(n))}else{r.push(n)}}return r||[]}},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),s=w._queueHooks(e,t),o=function(){w.dequeue(e,t)};if(i==="inprogress"){i=n.shift();r--}if(i){if(t==="fx"){n.unshift("inprogress")}delete s.stop;i.call(e,o,s)}if(!r&&s){s.empty.fire()}},_queueHooks:function(e,t){var n=t+"queueHooks";return w._data(e,n)||w._data(e,n,{empty:w.Callbacks("once memory").add(function(){w._removeData(e,t+"queue");w._removeData(e,n)})})}});w.fn.extend({queue:function(e,n){var r=2;if(typeof e!=="string"){n=e;e="fx";r--}if(arguments.length<r){return w.queue(this[0],e)}return n===t?this:this.each(function(){var t=w.queue(this,e,n);w._queueHooks(this,e);if(e==="fx"&&t[0]!=="inprogress"){w.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},delay:function(e,t){e=w.fx?w.fx.speeds[e]||e:e;t=t||"fx";return this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=w.Deferred(),o=this,u=this.length,a=function(){if(!--i){s.resolveWith(o,[o])}};if(typeof e!=="string"){n=e;e=t}e=e||"fx";while(u--){r=w._data(o[u],e+"queueHooks");if(r&&r.empty){i++;r.empty.add(a)}}a();return s.promise(n)}});var W,X,V=/[\t\r\n\f]/g,$=/\r/g,J=/^(?:input|select|textarea|button|object)$/i,K=/^(?:a|area)$/i,Q=/^(?:checked|selected)$/i,G=w.support.getSetAttribute,Y=w.support.input;w.fn.extend({attr:function(e,t){return w.access(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})},prop:function(e,t){return w.access(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){e=w.propFix[e]||e;return this.each(function(){try{this[e]=t;delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=typeof e==="string"&&e;if(w.isFunction(e)){return this.each(function(t){w(this).addClass(e.call(this,t,this.className))})}if(a){t=(e||"").match(S)||[];for(;o<u;o++){n=this[o];r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(V," "):" ");if(r){s=0;while(i=t[s++]){if(r.indexOf(" "+i+" ")<0){r+=i+" "}}n.className=w.trim(r)}}}return this},removeClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=arguments.length===0||typeof e==="string"&&e;if(w.isFunction(e)){return this.each(function(t){w(this).removeClass(e.call(this,t,this.className))})}if(a){t=(e||"").match(S)||[];for(;o<u;o++){n=this[o];r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(V," "):"");if(r){s=0;while(i=t[s++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")}}n.className=e?w.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e;if(typeof t==="boolean"&&n==="string"){return t?this.addClass(e):this.removeClass(e)}if(w.isFunction(e)){return this.each(function(n){w(this).toggleClass(e.call(this,n,this.className,t),t)})}return this.each(function(){if(n==="string"){var t,r=0,s=w(this),o=e.match(S)||[];while(t=o[r++]){if(s.hasClass(t)){s.removeClass(t)}else{s.addClass(t)}}}else if(n===i||n==="boolean"){if(this.className){w._data(this,"__className__",this.className)}this.className=this.className||e===false?"":w._data(this,"__className__")||""}})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++){if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(V," ").indexOf(t)>=0){return true}}return false},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s){r=w.valHooks[s.type]||w.valHooks[s.nodeName.toLowerCase()];if(r&&"get"in r&&(n=r.get(s,"value"))!==t){return n}n=s.value;return typeof n==="string"?n.replace($,""):n==null?"":n}return}i=w.isFunction(e);return this.each(function(n){var s;if(this.nodeType!==1){return}if(i){s=e.call(this,n,w(this).val())}else{s=e}if(s==null){s=""}else if(typeof s==="number"){s+=""}else if(w.isArray(s)){s=w.map(s,function(e){return e==null?"":e+""})}r=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()];if(!r||!("set"in r)||r.set(this,s,"value")===t){this.value=s}})}});w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return t!=null?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(w.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!w.nodeName(n.parentNode,"optgroup"))){t=w(n).val();if(s){return t}o.push(t)}}return o},set:function(e,t){var n,r,i=e.options,s=w.makeArray(t),o=i.length;while(o--){r=i[o];if(r.selected=w.inArray(w(r).val(),s)>=0){n=true}}if(!n){e.selectedIndex=-1}return s}}},attr:function(e,n,r){var s,o,u=e.nodeType;if(!e||u===3||u===8||u===2){return}if(typeof e.getAttribute===i){return w.prop(e,n,r)}if(u!==1||!w.isXMLDoc(e)){n=n.toLowerCase();s=w.attrHooks[n]||(w.expr.match.bool.test(n)?X:W)}if(r!==t){if(r===null){w.removeAttr(e,n)}else if(s&&"set"in s&&(o=s.set(e,r,n))!==t){return o}else{e.setAttribute(n,r+"");return r}}else if(s&&"get"in s&&(o=s.get(e,n))!==null){return o}else{o=w.find.attr(e,n);return o==null?t:o}},removeAttr:function(e,t){var n,r,i=0,s=t&&t.match(S);if(s&&e.nodeType===1){while(n=s[i++]){r=w.propFix[n]||n;if(w.expr.match.bool.test(n)){if(Y&&G||!Q.test(n)){e[r]=false}else{e[w.camelCase("default-"+n)]=e[r]=false}}else{w.attr(e,n,"")}e.removeAttribute(G?n:r)}}},attrHooks:{type:{set:function(e,t){if(!w.support.radioValue&&t==="radio"&&w.nodeName(e,"input")){var n=e.value;e.setAttribute("type",t);if(n){e.value=n}return t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2){return}o=u!==1||!w.isXMLDoc(e);if(o){n=w.propFix[n]||n;s=w.propHooks[n]}if(r!==t){return s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r}else{return s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]}},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):J.test(e.nodeName)||K.test(e.nodeName)&&e.href?0:-1}}}});X={set:function(e,t,n){if(t===false){w.removeAttr(e,n)}else if(Y&&G||!Q.test(n)){e.setAttribute(!G&&w.propFix[n]||n,n)}else{e[w.camelCase("default-"+n)]=e[n]=true}return n}};w.each(w.expr.match.bool.source.match(/\w+/g),function(e,n){var r=w.expr.attrHandle[n]||w.find.attr;w.expr.attrHandle[n]=Y&&G||!Q.test(n)?function(e,n,i){var s=w.expr.attrHandle[n],o=i?t:(w.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;w.expr.attrHandle[n]=s;return o}:function(e,n,r){return r?t:e[w.camelCase("default-"+n)]?n.toLowerCase():null}});if(!Y||!G){w.attrHooks.value={set:function(e,t,n){if(w.nodeName(e,"input")){e.defaultValue=t}else{return W&&W.set(e,t,n)}}}}if(!G){W={set:function(e,n,r){var i=e.getAttributeNode(r);if(!i){e.setAttributeNode(i=e.ownerDocument.createAttribute(r))}i.value=n+="";return r==="value"||n===e.getAttribute(r)?n:t}};w.expr.attrHandle.id=w.expr.attrHandle.name=w.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.value!==""?i.value:null};w.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:W.set};w.attrHooks.contenteditable={set:function(e,t,n){W.set(e,t===""?false:t,n)}};w.each(["width","height"],function(e,t){w.attrHooks[t]={set:function(e,n){if(n===""){e.setAttribute(t,"auto");return n}}}})}if(!w.support.hrefNormalized){w.each(["href","src"],function(e,t){w.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})}if(!w.support.style){w.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}}if(!w.support.optSelected){w.propHooks.selected={get:function(e){var t=e.parentNode;if(t){t.selectedIndex;if(t.parentNode){t.parentNode.selectedIndex}}return null}}}w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});if(!w.support.enctype){w.propFix.enctype="encoding"}w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(w.isArray(t)){return e.checked=w.inArray(w(e).val(),t)>=0}}};if(!w.support.checkOn){w.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value}}});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;w.event={global:{},add:function(e,n,r,s,o){var u,a,f,l,c,h,p,d,v,m,g,y=w._data(e);if(!y){return}if(r.handler){l=r;r=l.handler;o=l.selector}if(!r.guid){r.guid=w.guid++}if(!(a=y.events)){a=y.events={}}if(!(h=y.handle)){h=y.handle=function(e){return typeof w!==i&&(!e||w.event.triggered!==e.type)?w.event.dispatch.apply(h.elem,arguments):t};h.elem=e}n=(n||"").match(S)||[""];f=n.length;while(f--){u=rt.exec(n[f])||[];v=g=u[1];m=(u[2]||"").split(".").sort();if(!v){continue}c=w.event.special[v]||{};v=(o?c.delegateType:c.bindType)||v;c=w.event.special[v]||{};p=w.extend({type:v,origType:g,data:s,handler:r,guid:r.guid,selector:o,needsContext:o&&w.expr.match.needsContext.test(o),namespace:m.join(".")},l);if(!(d=a[v])){d=a[v]=[];d.delegateCount=0;if(!c.setup||c.setup.call(e,s,m,h)===false){if(e.addEventListener){e.addEventListener(v,h,false)}else if(e.attachEvent){e.attachEvent("on"+v,h)}}}if(c.add){c.add.call(e,p);if(!p.handler.guid){p.handler.guid=r.guid}}if(o){d.splice(d.delegateCount++,0,p)}else{d.push(p)}w.event.global[v]=true}e=null},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,v,m=w.hasData(e)&&w._data(e);if(!m||!(l=m.events)){return}t=(t||"").match(S)||[""];f=t.length;while(f--){u=rt.exec(t[f])||[];p=v=u[1];d=(u[2]||"").split(".").sort();if(!p){for(p in l){w.event.remove(e,p+t[f],n,r,true)}continue}c=w.event.special[p]||{};p=(r?c.delegateType:c.bindType)||p;h=l[p]||[];u=u[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)");a=s=h.length;while(s--){o=h[s];if((i||v===o.origType)&&(!n||n.guid===o.guid)&&(!u||u.test(o.namespace))&&(!r||r===o.selector||r==="**"&&o.selector)){h.splice(s,1);if(o.selector){h.delegateCount--}if(c.remove){c.remove.call(e,o)}}}if(a&&!h.length){if(!c.teardown||c.teardown.call(e,d,m.handle)===false){w.removeEvent(e,p,m.handle)}delete l[p]}}if(w.isEmptyObject(l)){delete m.handle;w._removeData(e,"events")}},trigger:function(n,r,i,s){var u,a,f,l,c,h,p,d=[i||o],v=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];f=h=i=i||o;if(i.nodeType===3||i.nodeType===8){return}if(nt.test(v+w.event.triggered)){return}if(v.indexOf(".")>=0){m=v.split(".");v=m.shift();m.sort()}a=v.indexOf(":")<0&&"on"+v;n=n[w.expando]?n:new w.Event(v,typeof n==="object"&&n);n.isTrigger=s?2:3;n.namespace=m.join(".");n.namespace_re=n.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;n.result=t;if(!n.target){n.target=i}r=r==null?[n]:w.makeArray(r,[n]);c=w.event.special[v]||{};if(!s&&c.trigger&&c.trigger.apply(i,r)===false){return}if(!s&&!c.noBubble&&!w.isWindow(i)){l=c.delegateType||v;if(!nt.test(l+v)){f=f.parentNode}for(;f;f=f.parentNode){d.push(f);h=f}if(h===(i.ownerDocument||o)){d.push(h.defaultView||h.parentWindow||e)}}p=0;while((f=d[p++])&&!n.isPropagationStopped()){n.type=p>1?l:c.bindType||v;u=(w._data(f,"events")||{})[n.type]&&w._data(f,"handle");if(u){u.apply(f,r)}u=a&&f[a];if(u&&w.acceptData(f)&&u.apply&&u.apply(f,r)===false){n.preventDefault()}}n.type=v;if(!s&&!n.isDefaultPrevented()){if((!c._default||c._default.apply(d.pop(),r)===false)&&w.acceptData(i)){if(a&&i[v]&&!w.isWindow(i)){h=i[a];if(h){i[a]=null}w.event.triggered=v;try{i[v]()}catch(g){}w.event.triggered=t;if(h){i[a]=h}}}}return n.result},dispatch:function(e){e=w.event.fix(e);var n,r,i,s,o,u=[],a=v.call(arguments),f=(w._data(this,"events")||{})[e.type]||[],l=w.event.special[e.type]||{};a[0]=e;e.delegateTarget=this;if(l.preDispatch&&l.preDispatch.call(this,e)===false){return}u=w.event.handlers.call(this,e,f);n=0;while((s=u[n++])&&!e.isPropagationStopped()){e.currentTarget=s.elem;o=0;while((i=s.handlers[o++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(i.namespace)){e.handleObj=i;e.data=i.data;r=((w.event.special[i.origType]||{}).handle||i.handler).apply(s.elem,a);if(r!==t){if((e.result=r)===false){e.preventDefault();e.stopPropagation()}}}}}if(l.postDispatch){l.postDispatch.call(this,e)}return e.result},handlers:function(e,n){var r,i,s,o,u=[],a=n.delegateCount,f=e.target;if(a&&f.nodeType&&(!e.button||e.type!=="click")){for(;f!=this;f=f.parentNode||this){if(f.nodeType===1&&(f.disabled!==true||e.type!=="click")){s=[];for(o=0;o<a;o++){i=n[o];r=i.selector+" ";if(s[r]===t){s[r]=i.needsContext?w(r,this).index(f)>=0:w.find(r,this,null,[f]).length}if(s[r]){s.push(i)}}if(s.length){u.push({elem:f,handlers:s})}}}}if(a<n.length){u.push({elem:this,handlers:n.slice(a)})}return u},fix:function(e){if(e[w.expando]){return e}var t,n,r,i=e.type,s=e,u=this.fixHooks[i];if(!u){this.fixHooks[i]=u=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}}r=u.props?this.props.concat(u.props):this.props;e=new w.Event(s);t=r.length;while(t--){n=r[t];e[n]=s[n]}if(!e.target){e.target=s.srcElement||o}if(e.target.nodeType===3){e.target=e.target.parentNode}e.metaKey=!!e.metaKey;return u.filter?u.filter(e,s):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){if(e.which==null){e.which=t.charCode!=null?t.charCode:t.keyCode}return e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,s,u=n.button,a=n.fromElement;if(e.pageX==null&&n.clientX!=null){i=e.target.ownerDocument||o;s=i.documentElement;r=i.body;e.pageX=n.clientX+(s&&s.scrollLeft||r&&r.scrollLeft||0)-(s&&s.clientLeft||r&&r.clientLeft||0);e.pageY=n.clientY+(s&&s.scrollTop||r&&r.scrollTop||0)-(s&&s.clientTop||r&&r.clientTop||0)}if(!e.relatedTarget&&a){e.relatedTarget=a===e.target?n.toElement:a}if(!e.which&&u!==t){e.which=u&1?1:u&2?3:u&4?2:0}return e}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==ot()&&this.focus){try{this.focus();return false}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===ot()&&this.blur){this.blur();return false}},delegateType:"focusout"},click:{trigger:function(){if(w.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false}},_default:function(e){return w.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){if(e.result!==t){e.originalEvent.returnValue=e.result}}}},simulate:function(e,t,n,r){var i=w.extend(new w.Event,n,{type:e,isSimulated:true,originalEvent:{}});if(r){w.event.trigger(i,null,t)}else{w.event.dispatch.call(t,i)}if(i.isDefaultPrevented()){n.preventDefault()}}};w.removeEvent=o.removeEventListener?function(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}}:function(e,t,n){var r="on"+t;if(e.detachEvent){if(typeof e[r]===i){e[r]=null}e.detachEvent(r,n)}};w.Event=function(e,t){if(!(this instanceof w.Event)){return new w.Event(e,t)}if(e&&e.type){this.originalEvent=e;this.type=e.type;this.isDefaultPrevented=e.defaultPrevented||e.returnValue===false||e.getPreventDefault&&e.getPreventDefault()?it:st}else{this.type=e}if(t){w.extend(this,t)}this.timeStamp=e&&e.timeStamp||w.now();this[w.expando]=true};w.Event.prototype={isDefaultPrevented:st,isPropagationStopped:st,isImmediatePropagationStopped:st,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it;if(!e){return}if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it;if(!e){return}if(e.stopPropagation){e.stopPropagation()}e.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it;this.stopPropagation()}};w.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj;if(!i||i!==r&&!w.contains(r,i)){e.type=s.origType;n=s.handler.apply(this,arguments);e.type=t}return n}}});if(!w.support.submitBubbles){w.event.special.submit={setup:function(){if(w.nodeName(this,"form")){return false}w.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=w.nodeName(n,"input")||w.nodeName(n,"button")?n.form:t;if(r&&!w._data(r,"submitBubbles")){w.event.add(r,"submit._submit",function(e){e._submit_bubble=true});w._data(r,"submitBubbles",true)}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;if(this.parentNode&&!e.isTrigger){w.event.simulate("submit",this.parentNode,e,true)}}},teardown:function(){if(w.nodeName(this,"form")){return false}w.event.remove(this,"._submit")}}}if(!w.support.changeBubbles){w.event.special.change={setup:function(){if(Z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){w.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true}});w.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false}w.event.simulate("change",this,e,true)})}return false}w.event.add(this,"beforeactivate._change",function(e){var t=e.target;if(Z.test(t.nodeName)&&!w._data(t,"changeBubbles")){w.event.add(t,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){w.event.simulate("change",this.parentNode,e,true)}});w._data(t,"changeBubbles",true)}})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox"){return e.handleObj.handler.apply(this,arguments)}},teardown:function(){w.event.remove(this,"._change");return!Z.test(this.nodeName)}}}if(!w.support.focusinBubbles){w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){w.event.simulate(t,e.target,w.event.fix(e),true)};w.event.special[t]={setup:function(){if(n++===0){o.addEventListener(e,r,true)}},teardown:function(){if(--n===0){o.removeEventListener(e,r,true)}}}})}w.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e==="object"){if(typeof n!=="string"){r=r||n;n=t}for(o in e){this.on(o,n,r,e[o],s)}return this}if(r==null&&i==null){i=n;r=n=t}else if(i==null){if(typeof n==="string"){i=r;r=t}else{i=r;r=n;n=t}}if(i===false){i=st}else if(!i){return this}if(s===1){u=i;i=function(e){w().off(e);return u.apply(this,arguments)};i.guid=u.guid||(u.guid=w.guid++)}return this.each(function(){w.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj){i=e.handleObj;w(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler);return this}if(typeof e==="object"){for(s in e){this.off(s,n,e[s])}return this}if(n===false||typeof n==="function"){r=n;n=t}if(r===false){r=st}return this.each(function(){w.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n){return w.event.trigger(e,t,n,true)}}});var ut=/^.[^:#\[\.,]*$/,at=/^(?:parents|prev(?:Until|All))/,ft=w.expr.match.needsContext,lt={children:true,contents:true,next:true,prev:true};w.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if(typeof e!=="string"){return this.pushStack(w(e).filter(function(){for(t=0;t<i;t++){if(w.contains(r[t],this)){return true}}}))}for(t=0;t<i;t++){w.find(e,r[t],n)}n=this.pushStack(i>1?w.unique(n):n);n.selector=this.selector?this.selector+" "+e:e;return n},has:function(e){var t,n=w(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++){if(w.contains(this,n[t])){return true}}})},not:function(e){return this.pushStack(ht(this,e||[],true))},filter:function(e){return this.pushStack(ht(this,e||[],false))},is:function(e){return!!ht(this,typeof e==="string"&&ft.test(e)?w(e):e||[],false).length},closest:function(e,t){var n,r=0,i=this.length,s=[],o=ft.test(e)||typeof e!=="string"?w(e,t||this.context):0;for(;r<i;r++){for(n=this[r];n&&n!==t;n=n.parentNode){if(n.nodeType<11&&(o?o.index(n)>-1:n.nodeType===1&&w.find.matchesSelector(n,e))){n=s.push(n);break}}}return this.pushStack(s.length>1?w.unique(s):s)},index:function(e){if(!e){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1}if(typeof e==="string"){return w.inArray(this[0],w(e))}return w.inArray(e.jquery?e[0]:e,this)},add:function(e,t){var n=typeof e==="string"?w(e,t):w.makeArray(e&&e.nodeType?[e]:e),r=w.merge(this.get(),n);return this.pushStack(w.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});w.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return w.dir(e,"parentNode")},parentsUntil:function(e,t,n){return w.dir(e,"parentNode",n)},next:function(e){return ct(e,"nextSibling")},prev:function(e){return ct(e,"previousSibling")},nextAll:function(e){return w.dir(e,"nextSibling")},prevAll:function(e){return w.dir(e,"previousSibling")},nextUntil:function(e,t,n){return w.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return w.dir(e,"previousSibling",n)},siblings:function(e){return w.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return w.sibling(e.firstChild)},contents:function(e){return w.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:w.merge([],e.childNodes)}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);if(e.slice(-5)!=="Until"){r=n}if(r&&typeof r==="string"){i=w.filter(r,i)}if(this.length>1){if(!lt[e]){i=w.unique(i)}if(at.test(e)){i=i.reverse()}}return this.pushStack(i)}});w.extend({filter:function(e,t,n){var r=t[0];if(n){e=":not("+e+")"}return t.length===1&&r.nodeType===1?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return e.nodeType===1}))},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!w(s).is(r))){if(s.nodeType===1){i.push(s)}s=s[n]}return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling){if(e.nodeType===1&&e!==t){n.push(e)}}return n}});var dt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",vt=/ jQuery\d+="(?:null|\d+)"/g,mt=new RegExp("<(?:"+dt+")[\\s/>]","i"),gt=/^\s+/,yt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,wt=/<tbody/i,Et=/<|&#?\w+;/,St=/<(?:script|style|link)/i,xt=/^(?:checkbox|radio)$/i,Tt=/checked\s*(?:[^=]|=\s*.checked.)/i,Nt=/^$|\/(?:java|ecma)script/i,Ct=/^true\/(.*)/,kt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Lt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:w.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},At=pt(o),Ot=At.appendChild(o.createElement("div"));Lt.optgroup=Lt.option;Lt.tbody=Lt.tfoot=Lt.colgroup=Lt.caption=Lt.thead;Lt.th=Lt.td;w.fn.extend({text:function(e){return w.access(this,function(e){return e===t?w.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=Mt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=Mt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)}})},after:function(){return this.domManip(arguments,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)}})},remove:function(e,t){var n,r=e?w.filter(e,this):this,i=0;for(;(n=r[i])!=null;i++){if(!t&&n.nodeType===1){w.cleanData(jt(n))}if(n.parentNode){if(t&&w.contains(n.ownerDocument,n)){Pt(jt(n,"script"))}n.parentNode.removeChild(n)}}return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){if(e.nodeType===1){w.cleanData(jt(e,false))}while(e.firstChild){e.removeChild(e.firstChild)}if(e.options&&w.nodeName(e,"select")){e.options.length=0}}return this},clone:function(e,t){e=e==null?false:e;t=t==null?e:t;return this.map(function(){return w.clone(this,e,t)})},html:function(e){return w.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t){return n.nodeType===1?n.innerHTML.replace(vt,""):t}if(typeof e==="string"&&!St.test(e)&&(w.support.htmlSerialize||!mt.test(e))&&(w.support.leadingWhitespace||!gt.test(e))&&!Lt[(bt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(yt,"<$1></$2>");try{for(;r<i;r++){n=this[r]||{};if(n.nodeType===1){w.cleanData(jt(n,false));n.innerHTML=e}}n=0}catch(s){}}if(n){this.empty().append(e)}},null,e,arguments.length)},replaceWith:function(){var e=w.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;this.domManip(arguments,function(n){var r=e[t++],i=e[t++];if(i){if(r&&r.parentNode!==i){r=this.nextSibling}w(this).remove();i.insertBefore(n,r)}},true);return t?this:this.remove()},detach:function(e){return this.remove(e,true)},domManip:function(e,t,n){e=p.apply([],e);var r,i,s,o,u,a,f=0,l=this.length,c=this,h=l-1,d=e[0],v=w.isFunction(d);if(v||!(l<=1||typeof d!=="string"||w.support.checkClone||!Tt.test(d))){return this.each(function(r){var i=c.eq(r);if(v){e[0]=d.call(this,r,i.html())}i.domManip(e,t,n)})}if(l){a=w.buildFragment(e,this[0].ownerDocument,false,!n&&this);r=a.firstChild;if(a.childNodes.length===1){a=r}if(r){o=w.map(jt(a,"script"),_t);s=o.length;for(;f<l;f++){i=a;if(f!==h){i=w.clone(i,true,true);if(s){w.merge(o,jt(i,"script"))}}t.call(this[f],i,f)}if(s){u=o[o.length-1].ownerDocument;w.map(o,Dt);for(f=0;f<s;f++){i=o[f];if(Nt.test(i.type||"")&&!w._data(i,"globalEval")&&w.contains(u,i)){if(i.src){w._evalUrl(i.src)}else{w.globalEval((i.text||i.textContent||i.innerHTML||"").replace(kt,""))}}}}a=r=null}}return this}});w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){var n,r=0,i=[],s=w(e),o=s.length-1;for(;r<=o;r++){n=r===o?this:this.clone(true);w(s[r])[t](n);d.apply(i,n.get())}return this.pushStack(i)}});w.extend({clone:function(e,t,n){var r,i,s,o,u,a=w.contains(e.ownerDocument,e);if(w.support.html5Clone||w.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")){s=e.cloneNode(true)}else{Ot.innerHTML=e.outerHTML;Ot.removeChild(s=Ot.firstChild)}if((!w.support.noCloneEvent||!w.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!w.isXMLDoc(e)){r=jt(s);u=jt(e);for(o=0;(i=u[o])!=null;++o){if(r[o]){Bt(i,r[o])}}}if(t){if(n){u=u||jt(e);r=r||jt(s);for(o=0;(i=u[o])!=null;o++){Ht(i,r[o])}}else{Ht(e,s)}}r=jt(s,"script");if(r.length>0){Pt(r,!a&&jt(e,"script"))}r=u=i=null;return s},buildFragment:function(e,t,n,r){var i,s,o,u,a,f,l,c=e.length,h=pt(t),p=[],d=0;for(;d<c;d++){s=e[d];if(s||s===0){if(w.type(s)==="object"){w.merge(p,s.nodeType?[s]:s)}else if(!Et.test(s)){p.push(t.createTextNode(s))}else{u=u||h.appendChild(t.createElement("div"));a=(bt.exec(s)||["",""])[1].toLowerCase();l=Lt[a]||Lt._default;u.innerHTML=l[1]+s.replace(yt,"<$1></$2>")+l[2];i=l[0];while(i--){u=u.lastChild}if(!w.support.leadingWhitespace&&gt.test(s)){p.push(t.createTextNode(gt.exec(s)[0]))}if(!w.support.tbody){s=a==="table"&&!wt.test(s)?u.firstChild:l[1]==="<table>"&&!wt.test(s)?u:0;i=s&&s.childNodes.length;while(i--){if(w.nodeName(f=s.childNodes[i],"tbody")&&!f.childNodes.length){s.removeChild(f)}}}w.merge(p,u.childNodes);u.textContent="";while(u.firstChild){u.removeChild(u.firstChild)}u=h.lastChild}}}if(u){h.removeChild(u)}if(!w.support.appendChecked){w.grep(jt(p,"input"),Ft)}d=0;while(s=p[d++]){if(r&&w.inArray(s,r)!==-1){continue}o=w.contains(s.ownerDocument,s);u=jt(h.appendChild(s),"script");if(o){Pt(u)}if(n){i=0;while(s=u[i++]){if(Nt.test(s.type||"")){n.push(s)}}}}u=null;return h},cleanData:function(e,t){var n,r,s,o,u=0,a=w.expando,f=w.cache,l=w.support.deleteExpando,h=w.event.special;for(;(n=e[u])!=null;u++){if(t||w.acceptData(n)){s=n[a];o=s&&f[s];if(o){if(o.events){for(r in o.events){if(h[r]){w.event.remove(n,r)}else{w.removeEvent(n,r,o.handle)}}}if(f[s]){delete f[s];if(l){delete n[a]}else if(typeof n.removeAttribute!==i){n.removeAttribute(a)}else{n[a]=null}c.push(s)}}}}},_evalUrl:function(e){return w.ajax({url:e,type:"GET",dataType:"script",async:false,global:false,"throws":true})}});w.fn.extend({wrapAll:function(e){if(w.isFunction(e)){return this.each(function(t){w(this).wrapAll(e.call(this,t))})}if(this[0]){var t=w(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){t.insertBefore(this[0])}t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1){e=e.firstChild}return e}).append(this)}return this},wrapInner:function(e){if(w.isFunction(e)){return this.each(function(t){w(this).wrapInner(e.call(this,t))})}return this.each(function(){var t=w(this),n=t.contents();if(n.length){n.wrapAll(e)}else{t.append(e)}})},wrap:function(e){var t=w.isFunction(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){if(!w.nodeName(this,"body")){w(this).replaceWith(this.childNodes)}}).end()}});var It,qt,Rt,Ut=/alpha\([^)]*\)/i,zt=/opacity\s*=\s*([^)]*)/,Wt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Vt=/^margin/,$t=new RegExp("^("+E+")(.*)$","i"),Jt=new RegExp("^("+E+")(?!px)[a-z%]+$","i"),Kt=new RegExp("^([+-])=("+E+")","i"),Qt={BODY:"block"},Gt={position:"absolute",visibility:"hidden",display:"block"},Yt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];w.fn.extend({css:function(e,n){return w.access(this,function(e,n,r){var i,s,o={},u=0;if(w.isArray(n)){s=qt(e);i=n.length;for(;u<i;u++){o[n[u]]=w.css(e,n[u],false,s)}return o}return r!==t?w.style(e,n,r):w.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,true)},hide:function(){return rn(this)},toggle:function(e){if(typeof e==="boolean"){return e?this.show():this.hide()}return this.each(function(){if(nn(this)){w(this).show()}else{w(this).hide()}})}});w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Rt(e,"opacity");return n===""?"1":n}}}},cssNumber:{columnCount:true,fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":w.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style){return}var s,o,u,a=w.camelCase(n),f=e.style;n=w.cssProps[a]||(w.cssProps[a]=tn(f,a));u=w.cssHooks[n]||w.cssHooks[a];if(r!==t){o=typeof r;if(o==="string"&&(s=Kt.exec(r))){r=(s[1]+1)*s[2]+parseFloat(w.css(e,n));o="number"}if(r==null||o==="number"&&isNaN(r)){return}if(o==="number"&&!w.cssNumber[a]){r+="px"}if(!w.support.clearCloneStyle&&r===""&&n.indexOf("background")===0){f[n]="inherit"}if(!u||!("set"in u)||(r=u.set(e,r,i))!==t){try{f[n]=r}catch(l){}}}else{if(u&&"get"in u&&(s=u.get(e,false,i))!==t){return s}return f[n]}},css:function(e,n,r,i){var s,o,u,a=w.camelCase(n);n=w.cssProps[a]||(w.cssProps[a]=tn(e.style,a));u=w.cssHooks[n]||w.cssHooks[a];if(u&&"get"in u){o=u.get(e,true,r)}if(o===t){o=Rt(e,n,i)}if(o==="normal"&&n in Yt){o=Yt[n]}if(r===""||r){s=parseFloat(o);return r===true||w.isNumeric(s)?s||0:o}return o}});if(e.getComputedStyle){qt=function(t){return e.getComputedStyle(t,null)};Rt=function(e,n,r){var i,s,o,u=r||qt(e),a=u?u.getPropertyValue(n)||u[n]:t,f=e.style;if(u){if(a===""&&!w.contains(e.ownerDocument,e)){a=w.style(e,n)}if(Jt.test(a)&&Vt.test(n)){i=f.width;s=f.minWidth;o=f.maxWidth;f.minWidth=f.maxWidth=f.width=a;a=u.width;f.width=i;f.minWidth=s;f.maxWidth=o}}return a}}else if(o.documentElement.currentStyle){qt=function(e){return e.currentStyle};Rt=function(e,n,r){var i,s,o,u=r||qt(e),a=u?u[n]:t,f=e.style;if(a==null&&f&&f[n]){a=f[n]}if(Jt.test(a)&&!Wt.test(n)){i=f.left;s=e.runtimeStyle;o=s&&s.left;if(o){s.left=e.currentStyle.left}f.left=n==="fontSize"?"1em":a;a=f.pixelLeft+"px";f.left=i;if(o){s.left=o}}return a===""?"auto":a}}w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n){return e.offsetWidth===0&&Xt.test(w.css(e,"display"))?w.swap(e,Gt,function(){return un(e,t,r)}):un(e,t,r)}},set:function(e,n,r){var i=r&&qt(e);return sn(e,n,r?on(e,t,r,w.support.boxSizing&&w.css(e,"boxSizing",false,i)==="border-box",i):0)}}});if(!w.support.opacity){w.cssHooks.opacity={get:function(e,t){return zt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=w.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if((t>=1||t==="")&&w.trim(s.replace(Ut,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(t===""||r&&!r.filter){return}}n.filter=Ut.test(s)?s.replace(Ut,i):s+" "+i}}}w(function(){if(!w.support.reliableMarginRight){w.cssHooks.marginRight={get:function(e,t){if(t){return w.swap(e,{display:"inline-block"},Rt,[e,"marginRight"])}}}}if(!w.support.pixelPosition&&w.fn.position){w.each(["top","left"],function(e,t){w.cssHooks[t]={get:function(e,n){if(n){n=Rt(e,t);return Jt.test(n)?w(e).position()[t]+"px":n}}}})}});if(w.expr&&w.expr.filters){w.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!w.support.reliableHiddenOffsets&&(e.style&&e.style.display||w.css(e,"display"))==="none"};w.expr.filters.visible=function(e){return!w.expr.filters.hidden(e)}}w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){var r=0,i={},s=typeof n==="string"?n.split(" "):[n];for(;r<4;r++){i[e+Zt[r]+t]=s[r]||s[r-2]||s[0]}return i}};if(!Vt.test(e)){w.cssHooks[e+t].set=sn}});var ln=/%20/g,cn=/\[\]$/,hn=/\r?\n/g,pn=/^(?:submit|button|image|reset|file)$/i,dn=/^(?:input|select|textarea|keygen)/i;w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&dn.test(this.nodeName)&&!pn.test(e)&&(this.checked||!xt.test(e))}).map(function(e,t){var n=w(this).val();return n==null?null:w.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(hn,"\r\n")}}):{name:t.name,value:n.replace(hn,"\r\n")}}).get()}});w.param=function(e,n){var r,i=[],s=function(e,t){t=w.isFunction(t)?t():t==null?"":t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t){n=w.ajaxSettings&&w.ajaxSettings.traditional}if(w.isArray(e)||e.jquery&&!w.isPlainObject(e)){w.each(e,function(){s(this.name,this.value)})}else{for(r in e){vn(r,e[r],n,s)}}return i.join("&").replace(ln,"+")};w.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,gn,yn=w.now(),bn=/\?/,wn=/#.*$/,En=/([?&])_=[^&]*/,Sn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,xn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Tn=/^(?:GET|HEAD)$/,Nn=/^\/\//,Cn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,kn=w.fn.load,Ln={},An={},On="*/".concat("*");try{gn=s.href}catch(Mn){gn=o.createElement("a");gn.href="";gn=gn.href}mn=Cn.exec(gn.toLowerCase())||[];w.fn.load=function(e,n,r){if(typeof e!=="string"&&kn){return kn.apply(this,arguments)}var i,s,o,u=this,a=e.indexOf(" ");if(a>=0){i=e.slice(a,e.length);e=e.slice(0,a)}if(w.isFunction(n)){r=n;n=t}else if(n&&typeof n==="object"){o="POST"}if(u.length>0){w.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){s=arguments;u.html(i?w("<div>").append(w.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){u.each(r,s||[e.responseText,t,e])})}return this};w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}});w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:gn,type:"GET",isLocal:xn.test(mn[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":On,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":w.parseJSON,"text xml":w.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(e,t){return t?Pn(Pn(e,w.ajaxSettings),t):Pn(w.ajaxSettings,e)},ajaxPrefilter:_n(Ln),ajaxTransport:_n(An),ajax:function(e,n){function N(e,n,r,i){var l,g,y,E,S,T=n;if(b===2){return}b=2;if(u){clearTimeout(u)}f=t;o=i||"";x.readyState=e>0?4:0;l=e>=200&&e<300||e===304;if(r){E=Hn(c,x,r)}E=Bn(c,E,x,l);if(l){if(c.ifModified){S=x.getResponseHeader("Last-Modified");if(S){w.lastModified[s]=S}S=x.getResponseHeader("etag");if(S){w.etag[s]=S}}if(e===204||c.type==="HEAD"){T="nocontent"}else if(e===304){T="notmodified"}else{T=E.state;g=E.data;y=E.error;l=!y}}else{y=T;if(e||!T){T="error";if(e<0){e=0}}}x.status=e;x.statusText=(n||T)+"";if(l){d.resolveWith(h,[g,T,x])}else{d.rejectWith(h,[x,T,y])}x.statusCode(m);m=t;if(a){p.trigger(l?"ajaxSuccess":"ajaxError",[x,c,l?g:y])}v.fireWith(h,[x,T]);if(a){p.trigger("ajaxComplete",[x,c]);if(!--w.active){w.event.trigger("ajaxStop")}}}if(typeof e==="object"){n=e;e=t}n=n||{};var r,i,s,o,u,a,f,l,c=w.ajaxSetup({},n),h=c.context||c,p=c.context&&(h.nodeType||h.jquery)?w(h):w.event,d=w.Deferred(),v=w.Callbacks("once memory"),m=c.statusCode||{},g={},y={},b=0,E="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(b===2){if(!l){l={};while(t=Sn.exec(o)){l[t[1].toLowerCase()]=t[2]}}t=l[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return b===2?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();if(!b){e=y[n]=y[n]||e;g[e]=t}return this},overrideMimeType:function(e){if(!b){c.mimeType=e}return this},statusCode:function(e){var t;if(e){if(b<2){for(t in e){m[t]=[m[t],e[t]]}}else{x.always(e[x.status])}}return this},abort:function(e){var t=e||E;if(f){f.abort(t)}N(0,t);return this}};d.promise(x).complete=v.add;x.success=x.done;x.error=x.fail;c.url=((e||c.url||gn)+"").replace(wn,"").replace(Nn,mn[1]+"//");c.type=n.method||n.type||c.method||c.type;c.dataTypes=w.trim(c.dataType||"*").toLowerCase().match(S)||[""];if(c.crossDomain==null){r=Cn.exec(c.url.toLowerCase());c.crossDomain=!!(r&&(r[1]!==mn[1]||r[2]!==mn[2]||(r[3]||(r[1]==="http:"?"80":"443"))!==(mn[3]||(mn[1]==="http:"?"80":"443"))))}if(c.data&&c.processData&&typeof c.data!=="string"){c.data=w.param(c.data,c.traditional)}Dn(Ln,c,n,x);if(b===2){return x}a=c.global;if(a&&w.active++===0){w.event.trigger("ajaxStart")}c.type=c.type.toUpperCase();c.hasContent=!Tn.test(c.type);s=c.url;if(!c.hasContent){if(c.data){s=c.url+=(bn.test(s)?"&":"?")+c.data;delete c.data}if(c.cache===false){c.url=En.test(s)?s.replace(En,"$1_="+yn++):s+(bn.test(s)?"&":"?")+"_="+yn++}}if(c.ifModified){if(w.lastModified[s]){x.setRequestHeader("If-Modified-Since",w.lastModified[s])}if(w.etag[s]){x.setRequestHeader("If-None-Match",w.etag[s])}}if(c.data&&c.hasContent&&c.contentType!==false||n.contentType){x.setRequestHeader("Content-Type",c.contentType)}x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+On+"; q=0.01":""):c.accepts["*"]);for(i in c.headers){x.setRequestHeader(i,c.headers[i])}if(c.beforeSend&&(c.beforeSend.call(h,x,c)===false||b===2)){return x.abort()}E="abort";for(i in{success:1,error:1,complete:1}){x[i](c[i])}f=Dn(An,c,n,x);if(!f){N(-1,"No Transport")}else{x.readyState=1;if(a){p.trigger("ajaxSend",[x,c])}if(c.async&&c.timeout>0){u=setTimeout(function(){x.abort("timeout")},c.timeout)}try{b=1;f.send(g,N)}catch(T){if(b<2){N(-1,T)}else{throw T}}}return x},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,n){return w.get(e,t,n,"script")}});w.each(["get","post"],function(e,n){w[n]=function(e,r,i,s){if(w.isFunction(r)){s=s||i;i=r;r=t}return w.ajax({url:e,type:n,dataType:s,data:r,success:i})}});w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){w.globalEval(e);return e}}});w.ajaxPrefilter("script",function(e){if(e.cache===t){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false}});w.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||w("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script");n.async=true;if(e.scriptCharset){n.charset=e.scriptCharset}n.src=e.url;n.onload=n.onreadystatechange=function(e,t){if(t||!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null;if(n.parentNode){n.parentNode.removeChild(n)}n=null;if(!t){i(200,"success")}}};r.insertBefore(n,r.firstChild)},abort:function(){if(n){n.onload(t,true)}}}}});var jn=[],Fn=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=jn.pop()||w.expando+"_"+yn++;this[e]=true;return e}});w.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.jsonp!==false&&(Fn.test(n.url)?"url":typeof n.data==="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Fn.test(n.data)&&"data");if(a||n.dataTypes[0]==="jsonp"){s=n.jsonpCallback=w.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback;if(a){n[a]=n[a].replace(Fn,"$1"+s)}else if(n.jsonp!==false){n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+s}n.converters["script json"]=function(){if(!u){w.error(s+" was not called")}return u[0]};n.dataTypes[0]="json";o=e[s];e[s]=function(){u=arguments};i.always(function(){e[s]=o;if(n[s]){n.jsonpCallback=r.jsonpCallback;jn.push(s)}if(u&&w.isFunction(o)){o(u[0])}u=o=t});return"script"}});var In,qn,Rn=0,Un=e.ActiveXObject&&function(){var e;for(e in In){In[e](t,true)}};w.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&zn()||Wn()}:zn;qn=w.ajaxSettings.xhr();w.support.cors=!!qn&&"withCredentials"in qn;qn=w.support.ajax=!!qn;if(qn){w.ajaxTransport(function(n){if(!n.crossDomain||w.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();if(n.username){a.open(n.type,n.url,n.async,n.username,n.password)}else{a.open(n.type,n.url,n.async)}if(n.xhrFields){for(u in n.xhrFields){a[u]=n.xhrFields[u]}}if(n.mimeType&&a.overrideMimeType){a.overrideMimeType(n.mimeType)}if(!n.crossDomain&&!i["X-Requested-With"]){i["X-Requested-With"]="XMLHttpRequest"}try{for(u in i){a.setRequestHeader(u,i[u])}}catch(f){}a.send(n.hasContent&&n.data||null);r=function(e,i){var u,f,l,c;try{if(r&&(i||a.readyState===4)){r=t;if(o){a.onreadystatechange=w.noop;if(Un){delete In[o]}}if(i){if(a.readyState!==4){a.abort()}}else{c={};u=a.status;f=a.getAllResponseHeaders();if(typeof a.responseText==="string"){c.text=a.responseText}try{l=a.statusText}catch(h){l=""}if(!u&&n.isLocal&&!n.crossDomain){u=c.text?200:404}else if(u===1223){u=204}}}}catch(p){if(!i){s(-1,p)}}if(c){s(u,l,c,f)}};if(!n.async){r()}else if(a.readyState===4){setTimeout(r)}else{o=++Rn;if(Un){if(!In){In={};w(e).unload(Un)}In[o]=r}a.onreadystatechange=r}},abort:function(){if(r){r(t,true)}}}}})}var Xn,Vn,$n=/^(?:toggle|show|hide)$/,Jn=new RegExp("^(?:([+-])=|)("+E+")([a-z%]*)$","i"),Kn=/queueHooks$/,Qn=[nr],Gn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Jn.exec(t),s=i&&i[3]||(w.cssNumber[e]?"":"px"),o=(w.cssNumber[e]||s!=="px"&&+r)&&Jn.exec(w.css(n.elem,e)),u=1,a=20;if(o&&o[3]!==s){s=s||o[3];i=i||[];o=+r||1;do{u=u||".5";o=o/u;w.style(n.elem,e,o+s)}while(u!==(u=n.cur()/r)&&u!==1&&--a)}if(i){o=n.start=+o||+r||0;n.unit=s;n.end=i[1]?o+(i[1]+1)*i[2]:+i[2]}return n}]};w.Animation=w.extend(er,{tweener:function(e,t){if(w.isFunction(e)){t=e;e=["*"]}else{e=e.split(" ")}var n,r=0,i=e.length;for(;r<i;r++){n=e[r];Gn[n]=Gn[n]||[];Gn[n].unshift(t)}},prefilter:function(e,t){if(t){Qn.unshift(e)}else{Qn.push(e)}}});w.Tween=rr;rr.prototype={constructor:rr,init:function(e,t,n,r,i,s){this.elem=e;this.prop=n;this.easing=i||"swing";this.options=t;this.start=this.now=this.cur();this.end=r;this.unit=s||(w.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];if(this.options.duration){this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration)}else{this.pos=t=e}this.now=(this.end-this.start)*t+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(n&&n.set){n.set(this)}else{rr.propHooks._default.set(this)}return this}};rr.prototype.init.prototype=rr.prototype;rr.propHooks={_default:{get:function(e){var t;if(e.elem[e.prop]!=null&&(!e.elem.style||e.elem.style[e.prop]==null)){return e.elem[e.prop]}t=w.css(e.elem,e.prop,"");return!t||t==="auto"?0:t},set:function(e){if(w.fx.step[e.prop]){w.fx.step[e.prop](e)}else if(e.elem.style&&(e.elem.style[w.cssProps[e.prop]]!=null||w.cssHooks[e.prop])){w.style(e.elem,e.prop,e.now+e.unit)}else{e.elem[e.prop]=e.now}}}};rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now}}};w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return e==null||typeof e==="boolean"?n.apply(this,arguments):this.animate(ir(t,true),e,r,i)}});w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),s=w.speed(t,n,r),o=function(){var t=er(this,w.extend({},e),s);if(i||w._data(this,"finish")){t.stop(true)}};o.finish=o;return i||s.queue===false?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop;t(r)};if(typeof e!=="string"){r=n;n=e;e=t}if(n&&e!==false){this.queue(e||"fx",[])}return this.each(function(){var t=true,n=e!=null&&e+"queueHooks",s=w.timers,o=w._data(this);if(n){if(o[n]&&o[n].stop){i(o[n])}}else{for(n in o){if(o[n]&&o[n].stop&&Kn.test(n)){i(o[n])}}}for(n=s.length;n--;){if(s[n].elem===this&&(e==null||s[n].queue===e)){s[n].anim.stop(r);t=false;s.splice(n,1)}}if(t||!r){w.dequeue(this,e)}})},finish:function(e){if(e!==false){e=e||"fx"}return this.each(function(){var t,n=w._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=w.timers,o=r?r.length:0;n.finish=true;w.queue(this,e,[]);if(i&&i.stop){i.stop.call(this,true)}for(t=s.length;t--;){if(s[t].elem===this&&s[t].queue===e){s[t].anim.stop(true);s.splice(t,1)}}for(t=0;t<o;t++){if(r[t]&&r[t].finish){r[t].finish.call(this)}}delete n.finish})}});w.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}});w.speed=function(e,t,n){var r=e&&typeof e==="object"?w.extend({},e):{complete:n||!n&&t||w.isFunction(e)&&e,duration:e,easing:n&&t||t&&!w.isFunction(t)&&t};r.duration=w.fx.off?0:typeof r.duration==="number"?r.duration:r.duration in w.fx.speeds?w.fx.speeds[r.duration]:w.fx.speeds._default;if(r.queue==null||r.queue===true){r.queue="fx"}r.old=r.complete;r.complete=function(){if(w.isFunction(r.old)){r.old.call(this)}if(r.queue){w.dequeue(this,r.queue)}};return r};w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}};w.timers=[];w.fx=rr.prototype.init;w.fx.tick=function(){var e,n=w.timers,r=0;Xn=w.now();for(;r<n.length;r++){e=n[r];if(!e()&&n[r]===e){n.splice(r--,1)}}if(!n.length){w.fx.stop()}Xn=t};w.fx.timer=function(e){if(e()&&w.timers.push(e)){w.fx.start()}};w.fx.interval=13;w.fx.start=function(){if(!Vn){Vn=setInterval(w.fx.tick,w.fx.interval)}};w.fx.stop=function(){clearInterval(Vn);Vn=null};w.fx.speeds={slow:600,fast:200,_default:400};w.fx.step={};if(w.expr&&w.expr.filters){w.expr.filters.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length}}w.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){w.offset.setOffset(this,e,t)})}var n,r,s={top:0,left:0},o=this[0],u=o&&o.ownerDocument;if(!u){return}n=u.documentElement;if(!w.contains(n,o)){return s}if(typeof o.getBoundingClientRect!==i){s=o.getBoundingClientRect()}r=sr(u);return{top:s.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:s.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}};w.offset={setOffset:function(e,t,n){var r=w.css(e,"position");if(r==="static"){e.style.position="relative"}var i=w(e),s=i.offset(),o=w.css(e,"top"),u=w.css(e,"left"),a=(r==="absolute"||r==="fixed")&&w.inArray("auto",[o,u])>-1,f={},l={},c,h;if(a){l=i.position();c=l.top;h=l.left}else{c=parseFloat(o)||0;h=parseFloat(u)||0}if(w.isFunction(t)){t=t.call(e,n,s)}if(t.top!=null){f.top=t.top-s.top+c}if(t.left!=null){f.left=t.left-s.left+h}if("using"in t){t.using.call(e,f)}else{i.css(f)}}};w.fn.extend({position:function(){if(!this[0]){return}var e,t,n={top:0,left:0},r=this[0];if(w.css(r,"position")==="fixed"){t=r.getBoundingClientRect()}else{e=this.offsetParent();t=this.offset();if(!w.nodeName(e[0],"html")){n=e.offset()}n.top+=w.css(e[0],"borderTopWidth",true);n.left+=w.css(e[0],"borderLeftWidth",true)}return{top:t.top-n.top-w.css(r,"marginTop",true),left:t.left-n.left-w.css(r,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||u;while(e&&!w.nodeName(e,"html")&&w.css(e,"position")==="static"){e=e.offsetParent}return e||u})}});w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);w.fn[e]=function(i){return w.access(this,function(e,i,s){var o=sr(e);if(s===t){return o?n in o?o[n]:o.document.documentElement[i]:e[i]}if(o){o.scrollTo(!r?s:w(o).scrollLeft(),r?s:w(o).scrollTop())}else{e[i]=s}},e,i,arguments.length,null)}});w.each({Height:"height",Width:"width"},function(e,n){w.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){w.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!=="boolean"),u=r||(i===true||s===true?"margin":"border");return w.access(this,function(n,r,i){var s;if(w.isWindow(n)){return n.document.documentElement["client"+e]}if(n.nodeType===9){s=n.documentElement;return Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])}return i===t?w.css(n,r,u):w.style(n,r,i,u)},n,o?i:t,o,null)}})});w.fn.size=function(){return this.length};w.fn.andSelf=w.fn.addBack;if(typeof module==="object"&&module&&typeof module.exports==="object"){module.exports=w}else{e.jQuery=e.$=w;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return w})}}})(window);(function(){function x(e,t,n){var r=(n||0)-1,i=e?e.length:0;while(++r<i){if(e[r]===t){return r}}return-1}function T(e,t){var n=e.criteria,r=t.criteria,i=-1,s=n.length;while(++i<s){var o=n[i],u=r[i];if(o!==u){if(o>u||typeof o=="undefined"){return 1}if(o<u||typeof u=="undefined"){return-1}}}return e.index-t.index}function N(e){return"\\"+g[e]}function C(e,t,n){t||(t=0);if(typeof n=="undefined"){n=e?e.length:0}var r=-1,i=n-t||0,s=Array(i<0?0:i);while(++r<i){s[r]=e[t+r]}return s}function X(e){return e instanceof X?e:new V(e)}function V(e,t){this.__chain__=!!t;this.__wrapped__=e}function J(e){function i(){if(n){var e=C(n);H.apply(e,arguments)}if(this instanceof i){var s=K(t.prototype),o=t.apply(s,e||arguments);return _t(o)?o:s}return t.apply(r,e||arguments)}var t=e[0],n=e[2],r=e[4];return i}function K(e,t){return _t(e)?j(e):{}}function Q(e,t,n){if(typeof e!="function"){return Vn}if(typeof t=="undefined"||!("prototype"in e)){return e}switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,s){return e.call(t,n,r,i,s)}}return Dn(e,t)}function G(e){function h(){var e=u?s:this;if(r){var p=C(r);H.apply(p,arguments)}if(i||f){p||(p=C(arguments));if(i){H.apply(p,i)}if(f&&p.length<o){n|=16&~32;return G([t,l?n:n&~3,p,null,s,o])}}p||(p=arguments);if(a){t=e[c]}if(this instanceof h){e=K(t.prototype);var d=t.apply(e,p);return _t(d)?d:e}return t.apply(e,p)}var t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5];var u=n&1,a=n&2,f=n&4,l=n&8,c=t;return h}function Y(e,t){var n=-1,r=ot(),i=e?e.length:0,s=[];while(++n<i){var o=e[n];if(r(t,o)<0){s.push(o)}}return s}function Z(e,t,n,r){var i=(r||0)-1,s=e?e.length:0,o=[];while(++i<s){var u=e[i];if(u&&typeof u=="object"&&typeof u.length=="number"&&(lt(u)||ft(u))){if(!t){u=Z(u,t,n)}var a=-1,f=u.length,l=o.length;o.length+=f;while(++a<f){o[l++]=u[a]}}else if(!n){o.push(u)}}return o}function et(e,t,r,i){if(e===t){return e!==0||1/e==1/t}var s=typeof e,o=typeof t;if(e===e&&!(e&&m[s])&&!(t&&m[o])){return false}if(e==null||t==null){return e===t}var u=O.call(e),c=O.call(t);if(u!=c){return false}switch(u){case f:case l:return+e==+t;case h:return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case d:case v:return e==String(t)}var g=u==a;if(!g){var y=e instanceof X,b=t instanceof X;if(y||b){return et(y?e.__wrapped__:e,b?t.__wrapped__:t,r,i)}if(u!=p){return false}var w=e.constructor,E=t.constructor;if(w!=E&&!(Mt(w)&&w instanceof w&&Mt(E)&&E instanceof E)&&"constructor"in e&&"constructor"in t){return false}}r||(r=[]);i||(i=[]);var S=r.length;while(S--){if(r[S]==e){return i[S]==t}}var x=true,T=0;r.push(e);i.push(t);if(g){T=t.length;x=T==e.length;if(x){while(T--){if(!(x=et(e[T],t[T],r,i))){break}}}}else{wt(t,function(t,s,o){if(P.call(o,s)){T++;return!(x=P.call(e,s)&&et(e[s],t,r,i))&&n}});if(x){wt(e,function(e,t,r){if(P.call(r,t)){return!(x=--T>-1)&&n}})}}r.pop();i.pop();return x}function tt(e,t){return e+D(W()*(t-e+1))}function nt(e,t,n){var r=-1,i=ot(),s=e?e.length:0,o=[],u=n?[]:o;while(++r<s){var a=e[r],f=n?n(a,r,e):a;if(t?!r||u[u.length-1]!==f:i(u,f)<0){if(n){u.push(f)}o.push(a)}}return o}function rt(e){return function(t,n,r){var i={};n=Wn(n,r,3);var s=-1,o=t?t.length:0;if(typeof o=="number"){while(++s<o){var u=t[s];e(i,u,n(u,s,t),t)}}else{Et(t,function(t,r,s){e(i,t,n(t,r,s),s)})}return i}}function it(e,t,n,r,i,s){var o=t&1,u=t&2,a=t&4,f=t&8,l=t&16,c=t&32;if(!u&&!Mt(e)){throw new TypeError}if(l&&!n.length){t&=~16;l=n=false}if(c&&!r.length){t&=~32;c=r=false}var h=t==1||t===17?J:G;return h([e,t,n,r,i,s])}function st(e){return pt[e]}function ot(){var e=(e=X.indexOf)===bn?x:e;return e}function ut(e){return typeof e=="function"&&M.test(e)}function at(e){return dt[e]}function ft(e){return e&&typeof e=="object"&&typeof e.length=="number"&&O.call(e)==u||false}function gt(e){if(!e){return e}for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(r){for(var i in r){e[i]=r[i]}}}return e}function yt(e){return _t(e)?lt(e)?C(e):gt({},e):e}function bt(e){if(!e){return e}for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(r){for(var i in r){if(typeof e[i]=="undefined"){e[i]=r[i]}}}}return e}function St(e){var t=[];wt(e,function(e,n){if(Mt(e)){t.push(n)}});return t.sort()}function xt(e,t){return e?P.call(e,t):false}function Tt(e){var t=-1,n=ht(e),r=n.length,i={};while(++t<r){var s=n[t];i[e[s]]=s}return i}function Nt(e){return e===true||e===false||e&&typeof e=="object"&&O.call(e)==f||false}function Ct(e){return e&&typeof e=="object"&&O.call(e)==l||false}function kt(e){return e&&e.nodeType===1||false}function Lt(e){if(!e){return true}if(lt(e)||jt(e)){return!e.length}for(var t in e){if(P.call(e,t)){return false}}return true}function At(e,t){return et(e,t)}function Ot(e){return I(e)&&!q(parseFloat(e))}function Mt(e){return typeof e=="function"}function _t(e){return!!(e&&m[typeof e])}function Dt(e){return Ht(e)&&e!=+e}function Pt(e){return e===null}function Ht(e){return typeof e=="number"||e&&typeof e=="object"&&O.call(e)==h||false}function Bt(e){return e&&m[typeof e]&&O.call(e)==d||false}function jt(e){return typeof e=="string"||e&&typeof e=="object"&&O.call(e)==v||false}function Ft(e){return typeof e=="undefined"}function It(e){var t=[];wt(e,function(e,n){t.push(n)});t=Y(t,Z(arguments,true,false,1));var n=-1,r=t.length,i={};while(++n<r){var s=t[n];i[s]=e[s]}return i}function qt(e){var t=-1,n=ht(e),r=n.length,i=Array(r);while(++t<r){var s=n[t];i[t]=[s,e[s]]}return i}function Rt(e){var t=-1,n=Z(arguments,true,false,1),r=n.length,i={};while(++t<r){var s=n[t];if(s in e){i[s]=e[s]}}return i}function Ut(e){var t=-1,n=ht(e),r=n.length,i=Array(r);while(++t<r){i[t]=e[n[t]]}return i}function zt(e,t){var r=ot(),i=e?e.length:0,s=false;if(i&&typeof i=="number"){s=r(e,t)>-1}else{Et(e,function(e){return(s=e===t)&&n})}return s}function Xt(e,t,r){var i=true;t=Wn(t,r,3);var s=-1,o=e?e.length:0;if(typeof o=="number"){while(++s<o){if(!(i=!!t(e[s],s,e))){break}}}else{Et(e,function(e,r,s){return!(i=!!t(e,r,s))&&n})}return i}function Vt(e,t,n){var r=[];t=Wn(t,n,3);var i=-1,s=e?e.length:0;if(typeof s=="number"){while(++i<s){var o=e[i];if(t(o,i,e)){r.push(o)}}}else{Et(e,function(e,n,i){if(t(e,n,i)){r.push(e)}})}return r}function $t(e,t,r){t=Wn(t,r,3);var i=-1,s=e?e.length:0;if(typeof s=="number"){while(++i<s){var o=e[i];if(t(o,i,e)){return o}}}else{var u;Et(e,function(e,r,i){if(t(e,r,i)){u=e;return n}});return u}}function Jt(e,t){return dn(e,t,true)}function Kt(e,t,r){var i=-1,s=e?e.length:0;t=t&&typeof r=="undefined"?t:Q(t,r,3);if(typeof s=="number"){while(++i<s){if(t(e[i],i,e)===n){break}}}else{Et(e,t)}}function Qt(e,t){var r=e?e.length:0;if(typeof r=="number"){while(r--){if(t(e[r],r,e)===false){break}}}else{var i=ht(e);r=i.length;Et(e,function(e,s,o){s=i?i[--r]:--r;return t(o[s],s,o)===false&&n})}}function Zt(e,t){var n=C(arguments,2),r=-1,i=typeof t=="function",s=e?e.length:0,o=Array(typeof s=="number"?s:0);Kt(e,function(e){o[++r]=(i?t:e[t]).apply(e,n)});return o}function en(e,t,n){var r=-1,i=e?e.length:0;t=Wn(t,n,3);if(typeof i=="number"){var s=Array(i);while(++r<i){s[r]=t(e[r],r,e)}}else{s=[];Et(e,function(e,n,i){s[++r]=t(e,n,i)})}return s}function tn(e,t,n){var r=-Infinity,i=r;if(typeof t!="function"&&n&&n[t]===e){t=null}var s=-1,o=e?e.length:0;if(t==null&&typeof o=="number"){while(++s<o){var u=e[s];if(u>i){i=u}}}else{t=Wn(t,n,3);Kt(e,function(e,n,s){var o=t(e,n,s);if(o>r){r=o;i=e}})}return i}function nn(e,t,n){var r=Infinity,i=r;if(typeof t!="function"&&n&&n[t]===e){t=null}var s=-1,o=e?e.length:0;if(t==null&&typeof o=="number"){while(++s<o){var u=e[s];if(u<i){i=u}}}else{t=Wn(t,n,3);Kt(e,function(e,n,s){var o=t(e,n,s);if(o<r){r=o;i=e}})}return i}function sn(e,t,n,r){if(!e)return n;var i=arguments.length<3;t=Wn(t,r,4);var s=-1,o=e.length;if(typeof o=="number"){if(i){n=e[++s]}while(++s<o){n=t(n,e[s],s,e)}}else{Et(e,function(e,r,s){n=i?(i=false,e):t(n,e,r,s)})}return n}function on(e,t,n,r){var i=arguments.length<3;t=Wn(t,r,4);Qt(e,function(e,r,s){n=i?(i=false,e):t(n,e,r,s)});return n}function un(e,t,n){t=Wn(t,n,3);return Vt(e,function(e,n,r){return!t(e,n,r)})}function an(t,n,r){if(t&&typeof t.length!="number"){t=Ut(t)}if(n==null||r){return t?t[tt(0,t.length-1)]:e}var i=fn(t);i.length=z(U(0,n),i.length);return i}function fn(e){var t=-1,n=e?e.length:0,r=Array(typeof n=="number"?n:0);Kt(e,function(e){var n=tt(0,++t);r[t]=r[n];r[n]=e});return r}function ln(e){var t=e?e.length:0;return typeof t=="number"?t:ht(e).length}function cn(e,t,r){var i;t=Wn(t,r,3);var s=-1,o=e?e.length:0;if(typeof o=="number"){while(++s<o){if(i=t(e[s],s,e)){break}}}else{Et(e,function(e,r,s){return(i=t(e,r,s))&&n})}return!!i}function hn(e,t,n){var r=-1,i=e?e.length:0,s=Array(typeof i=="number"?i:0);t=Wn(t,n,3);Kt(e,function(e,n,i){s[++r]={criteria:[t(e,n,i)],index:r,value:e}});i=s.length;s.sort(T);while(i--){s[i]=s[i].value}return s}function pn(e){if(lt(e)){return C(e)}if(e&&typeof e.length=="number"){return en(e)}return Ut(e)}function dn(t,n,r){return r&&Lt(n)?e:(r?$t:Vt)(t,n)}function vn(e){var t=-1,n=e?e.length:0,r=[];while(++t<n){var i=e[t];if(i){r.push(i)}}return r}function mn(e){return Y(e,Z(arguments,true,true,1))}function gn(t,n,r){var i=0,s=t?t.length:0;if(typeof n!="number"&&n!=null){var o=-1;n=Wn(n,r,3);while(++o<s&&n(t[o],o,t)){i++}}else{i=n;if(i==null||r){return t?t[0]:e}}return C(t,0,z(U(0,i),s))}function yn(e,t){return Z(e,t)}function bn(e,t,n){if(typeof n=="number"){var r=e?e.length:0;n=n<0?U(0,r+n):n||0}else if(n){var i=Cn(e,t);return e[i]===t?i:-1}return x(e,t,n)}function wn(e,t,n){var r=0,i=e?e.length:0;if(typeof t!="number"&&t!=null){var s=i;t=Wn(t,n,3);while(s--&&t(e[s],s,e)){r++}}else{r=t==null||n?1:t||r}return C(e,0,z(U(0,i-r),i))}function En(){var e=[],t=-1,n=arguments.length;while(++t<n){var r=arguments[t];if(lt(r)||ft(r)){e.push(r)}}var i=e[0],s=-1,o=ot(),u=i?i.length:0,a=[];e:while(++s<u){r=i[s];if(o(a,r)<0){var t=n;while(--t){if(o(e[t],r)<0){continue e}}a.push(r)}}return a}function Sn(t,n,r){var i=0,s=t?t.length:0;if(typeof n!="number"&&n!=null){var o=s;n=Wn(n,r,3);while(o--&&n(t[o],o,t)){i++}}else{i=n;if(i==null||r){return t?t[s-1]:e}}return C(t,U(0,s-i))}function xn(e,t,n){var r=e?e.length:0;if(typeof n=="number"){r=(n<0?U(0,r+n):z(n,r-1))+1}while(r--){if(e[r]===t){return r}}return-1}function Tn(e,t,n){e=+e||0;n=+n||1;if(t==null){t=e;e=0}var r=-1,i=U(0,_((t-e)/n)),s=Array(i);while(++r<i){s[r]=e;e+=n}return s}function Nn(e,t,n){if(typeof t!="number"&&t!=null){var r=0,i=-1,s=e?e.length:0;t=Wn(t,n,3);while(++i<s&&t(e[i],i,e)){r++}}else{r=t==null||n?1:U(0,t)}return C(e,r)}function Cn(e,t,n,r){var i=0,s=e?e.length:i;n=n?Wn(n,r,1):Vn;t=n(t);while(i<s){var o=i+s>>>1;n(e[o])<t?i=o+1:s=o}return i}function kn(){return nt(Z(arguments,true,true))}function Ln(e,t,n,r){if(typeof t!="boolean"&&t!=null){r=n;n=typeof t!="function"&&r&&r[t]===e?null:t;t=false}if(n!=null){n=Wn(n,r,3)}return nt(e,t,n)}function An(e){return Y(e,C(arguments,1))}function On(){var e=-1,t=tn(rn(arguments,"length")),n=Array(t<0?0:t);while(++e<t){n[e]=rn(arguments,e)}return n}function Mn(e,t){var n=-1,r=e?e.length:0,i={};if(!t&&r&&!lt(e[0])){t=[]}while(++n<r){var s=e[n];if(t){i[s]=t[n]}else if(s){i[s[0]]=s[1]}}return i}function _n(e,t){if(!Mt(t)){throw new TypeError}return function(){if(--e<1){return t.apply(this,arguments)}}}function Dn(e,t){return arguments.length>2?it(e,17,C(arguments,2),null,t):it(e,1,null,null,t)}function Pn(e){var t=arguments.length>1?Z(arguments,true,false,1):St(e),n=-1,r=t.length;while(++n<r){var i=t[n];e[i]=it(e[i],1,null,null,e)}return e}function Hn(){var e=arguments,t=e.length;while(t--){if(!Mt(e[t])){throw new TypeError}}return function(){var t=arguments,n=e.length;while(n--){t=[e[n].apply(this,t)]}return t[0]}}function Bn(t,n,r){var i,s,o,u,a,f,l,c=0,h=false,p=true;if(!Mt(t)){throw new TypeError}n=U(0,n)||0;if(r===true){var d=true;p=false}else if(_t(r)){d=r.leading;h="maxWait"in r&&(U(n,r.maxWait)||0);p="trailing"in r?r.trailing:p}var v=function(){var r=n-(Qn()-u);if(r<=0){if(s){clearTimeout(s)}var h=l;s=f=l=e;if(h){c=Qn();o=t.apply(a,i);if(!f&&!s){i=a=null}}}else{f=setTimeout(v,r)}};var m=function(){if(f){clearTimeout(f)}s=f=l=e;if(p||h!==n){c=Qn();o=t.apply(a,i);if(!f&&!s){i=a=null}}};return function(){i=arguments;u=Qn();a=this;l=p&&(f||!d);if(h===false){var e=d&&!f}else{if(!s&&!d){c=u}var r=h-(u-c),g=r<=0;if(g){if(s){s=clearTimeout(s)}c=u;o=t.apply(a,i)}else if(!s){s=setTimeout(m,r)}}if(g&&f){f=clearTimeout(f)}else if(!f&&n!==h){f=setTimeout(v,n)}if(e){g=true;o=t.apply(a,i)}if(g&&!f&&!s){i=a=null}return o}}function jn(t){if(!Mt(t)){throw new TypeError}var n=C(arguments,1);return setTimeout(function(){t.apply(e,n)},1)}function Fn(t,n){if(!Mt(t)){throw new TypeError}var r=C(arguments,2);return setTimeout(function(){t.apply(e,r)},n)}function In(e,t){var n={};return function(){var i=t?t.apply(this,arguments):r+arguments[0];return P.call(n,i)?n[i]:n[i]=e.apply(this,arguments)}}function qn(e){var t,n;if(!Mt(e)){throw new TypeError}return function(){if(t){return n}t=true;n=e.apply(this,arguments);e=null;return n}}function Rn(e){return it(e,16,C(arguments,1))}function Un(e,t,n){var r=true,i=true;if(!Mt(e)){throw new TypeError}if(n===false){r=false}else if(_t(n)){r="leading"in n?n.leading:r;i="trailing"in n?n.trailing:i}n={};n.leading=r;n.maxWait=t;n.trailing=i;return Bn(e,t,n)}function zn(e,t){return it(t,16,[e])}function Wn(e,t,n){var r=typeof e;if(e==null||r=="function"){return Q(e,t,n)}if(r!="object"){return Gn(e)}var i=ht(e);return function(t){var n=i.length,r=false;while(n--){if(!(r=t[i[n]]===e[i[n]])){break}}return r}}function Xn(e){return e==null?"":String(e).replace(mt,st)}function Vn(e){return e}function $n(e){Kt(St(e),function(t){var n=X[t]=e[t];X.prototype[t]=function(){var e=[this.__wrapped__];H.apply(e,arguments);var t=n.apply(X,e);return this.__chain__?new V(t,true):t}})}function Jn(){y._=A;return this}function Kn(){}function Gn(e){return function(t){return t[e]}}function Yn(e,t){if(e==null&&t==null){t=1}e=+e||0;if(t==null){t=e;e=0}else{t=+t||0}return e+D(W()*(t-e+1))}function Zn(e,t){if(e){var n=e[t];return Mt(n)?e[t]():n}}function er(e,t,n){var r=X,i=r.templateSettings;e=String(e||"");n=bt({},n,i);var u=0,a="__p += '",f=n.variable;var l=RegExp((n.escape||s).source+"|"+(n.interpolate||s).source+"|"+(n.evaluate||s).source+"|$","g");e.replace(l,function(t,n,r,i,s){a+=e.slice(u,s).replace(o,N);if(n){a+="' +\n_.escape("+n+") +\n'"}if(i){a+="';\n"+i+";\n__p += '"}if(r){a+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"}u=s+t.length;return t});a+="';\n";if(!f){f="obj";a="with ("+f+" || {}) {\n"+a+"\n}\n"}a="function("+f+") {\n"+"var __t, __p = '', __j = Array.prototype.join;\n"+"function print() { __p += __j.call(arguments, '') }\n"+a+"return __p\n}";try{var c=Function("_","return "+a)(r)}catch(h){h.source=a;throw h}if(t){return c(t)}c.source=a;return c}function tr(e,t,n){e=(e=+e)>-1?e:0;var r=-1,i=Array(e);t=Q(t,n,1);while(++r<e){i[r]=t(r)}return i}function nr(e){return e==null?"":String(e).replace(vt,at)}function rr(e){var n=++t+"";return e?e+n:n}function ir(e){e=new V(e);e.__chain__=true;return e}function sr(e,t){t(e);return e}function or(){this.__chain__=true;return this}function ur(){return this.__wrapped__}var e;var t=0;var n={};var r=+(new Date)+"";var i=/<%=([\s\S]+?)%>/g;var s=/($^)/;var o=/['\n\r\t\u2028\u2029\\]/g;var u="[object Arguments]",a="[object Array]",f="[object Boolean]",l="[object Date]",c="[object Function]",h="[object Number]",p="[object Object]",d="[object RegExp]",v="[object String]";var m={"boolean":false,"function":true,object:true,number:false,string:false,"undefined":false};var g={"\\":"\\","'":"'","\n":"n","\r":"r"," ":"t","\u2028":"u2028","\u2029":"u2029"};var y=m[typeof window]&&window||this;var b=m[typeof exports]&&exports&&!exports.nodeType&&exports;var w=m[typeof module]&&module&&!module.nodeType&&module;var E=w&&w.exports===b&&b;var S=m[typeof global]&&global;if(S&&(S.global===S||S.window===S)){y=S}var k=[];var L=Object.prototype;var A=y._;var O=L.toString;var M=RegExp("^"+String(O).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");var _=Math.ceil,D=Math.floor,P=L.hasOwnProperty,H=k.push,B=L.propertyIsEnumerable;var j=ut(j=Object.create)&&j,F=ut(F=Array.isArray)&&F,I=y.isFinite,q=y.isNaN,R=ut(R=Object.keys)&&R,U=Math.max,z=Math.min,W=Math.random;V.prototype=X.prototype;var $={};(function(){var e={0:1,length:1};$.spliceObjects=(k.splice.call(e,0,1),!e[0])})(1);X.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:i,variable:""};if(!j){K=function(){function e(){}return function(t){if(_t(t)){e.prototype=t;var n=new e;e.prototype=null}return n||y.Object()}}()}if(!ft(arguments)){ft=function(e){return e&&typeof e=="object"&&typeof e.length=="number"&&P.call(e,"callee")&&!B.call(e,"callee")||false}}var lt=F||function(e){return e&&typeof e=="object"&&typeof e.length=="number"&&O.call(e)==a||false};var ct=function(e){var t,n=e,r=[];if(!n)return r;if(!m[typeof e])return r;for(t in n){if(P.call(n,t)){r.push(t)}}return r};var ht=!R?ct:function(e){if(!_t(e)){return[]}return R(e)};var pt={"&":"&","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"};var dt=Tt(pt);var vt=RegExp("("+ht(dt).join("|")+")","g"),mt=RegExp("["+ht(pt).join("")+"]","g");var wt=function(e,t){var r,i=e,s=i;if(!i)return s;if(!m[typeof i])return s;for(r in i){if(t(i[r],r,e)===n)return s}return s};var Et=function(e,t){var r,i=e,s=i;if(!i)return s;if(!m[typeof i])return s;for(r in i){if(P.call(i,r)){if(t(i[r],r,e)===n)return s}}return s};if(Mt(/x/)){Mt=function(e){return typeof e=="function"&&O.call(e)==c}}var Wt=rt(function(e,t,n){P.call(e,n)?e[n]++:e[n]=1});var Gt=rt(function(e,t,n){(P.call(e,n)?e[n]:e[n]=[]).push(t)});var Yt=rt(function(e,t,n){e[n]=t});var rn=en;var Qn=ut(Qn=Date.now)&&Qn||function(){return(new Date).getTime()};X.after=_n;X.bind=Dn;X.bindAll=Pn;X.chain=ir;X.compact=vn;X.compose=Hn;X.countBy=Wt;X.debounce=Bn;X.defaults=bt;X.defer=jn;X.delay=Fn;X.difference=mn;X.filter=Vt;X.flatten=yn;X.forEach=Kt;X.functions=St;X.groupBy=Gt;X.indexBy=Yt;X.initial=wn;X.intersection=En;X.invert=Tt;X.invoke=Zt;X.keys=ht;X.map=en;X.max=tn;X.memoize=In;X.min=nn;X.omit=It;X.once=qn;X.pairs=qt;X.partial=Rn;X.pick=Rt;X.pluck=rn;X.range=Tn;X.reject=un;X.rest=Nn;X.shuffle=fn;X.sortBy=hn;X.tap=sr;X.throttle=Un;X.times=tr;X.toArray=pn;X.union=kn;X.uniq=Ln;X.values=Ut;X.where=dn;X.without=An;X.wrap=zn;X.zip=On;X.collect=en;X.drop=Nn;X.each=Kt;X.extend=gt;X.methods=St;X.object=Mn;X.select=Vt;X.tail=Nn;X.unique=Ln;X.clone=yt;X.contains=zt;X.escape=Xn;X.every=Xt;X.find=$t;X.has=xt;X.identity=Vn;X.indexOf=bn;X.isArguments=ft;X.isArray=lt;X.isBoolean=Nt;X.isDate=Ct;X.isElement=kt;X.isEmpty=Lt;X.isEqual=At;X.isFinite=Ot;X.isFunction=Mt;X.isNaN=Dt;X.isNull=Pt;X.isNumber=Ht;X.isObject=_t;X.isRegExp=Bt;X.isString=jt;X.isUndefined=Ft;X.lastIndexOf=xn;X.mixin=$n;X.noConflict=Jn;X.random=Yn;X.reduce=sn;X.reduceRight=on;X.result=Zn;X.size=ln;X.some=cn;X.sortedIndex=Cn;X.template=er;X.unescape=nr;X.uniqueId=rr;X.all=Xt;X.any=cn;X.detect=$t;X.findWhere=Jt;X.foldl=sn;X.foldr=on;X.include=zt;X.inject=sn;X.first=gn;X.last=Sn;X.sample=an;X.take=gn;X.head=gn;$n(X);X.VERSION="2.4.1";X.prototype.chain=or;X.prototype.value=ur;Kt(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=k[e];X.prototype[e]=function(){var e=this.__wrapped__;t.apply(e,arguments);if(!$.spliceObjects&&e.length===0){delete e[0]}return this}});Kt(["concat","join","slice"],function(e){var t=k[e];X.prototype[e]=function(){var e=this.__wrapped__,n=t.apply(e,arguments);if(this.__chain__){n=new V(n);n.__chain__=true}return n}});if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){y._=X;define(function(){return X})}else if(b&&w){if(E){(w.exports=X)._=X}else{b._=X}}else{y._=X}}).call(this);(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e}else{e(jQuery)}})(function(e){function u(t){var n=t||window.event,o=r.call(arguments,1),u=0,f=0,l=0,c=0;t=e.event.fix(n);t.type="mousewheel";if("detail"in n){l=n.detail*-1}if("wheelDelta"in n){l=n.wheelDelta}if("wheelDeltaY"in n){l=n.wheelDeltaY}if("wheelDeltaX"in n){f=n.wheelDeltaX*-1}if("axis"in n&&n.axis===n.HORIZONTAL_AXIS){f=l*-1;l=0}u=l===0?f:l;if("deltaY"in n){l=n.deltaY*-1;u=l}if("deltaX"in n){f=n.deltaX;if(l===0){u=f*-1}}if(l===0&&f===0){return}c=Math.max(Math.abs(l),Math.abs(f));if(!s||c<s){s=c}u=Math[u>=1?"floor":"ceil"](u/s);f=Math[f>=1?"floor":"ceil"](f/s);l=Math[l>=1?"floor":"ceil"](l/s);t.deltaX=f;t.deltaY=l;t.deltaFactor=s;o.unshift(t,u,f,l);if(i){clearTimeout(i)}i=setTimeout(a,200);return(e.event.dispatch||e.event.handle).apply(this,o)}function a(){s=null}var t=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],n="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],r=Array.prototype.slice,i,s;if(e.event.fixHooks){for(var o=t.length;o;){e.event.fixHooks[t[--o]]=e.event.mouseHooks}}e.event.special.mousewheel={version:"3.1.6",setup:function(){if(this.addEventListener){for(var e=n.length;e;){this.addEventListener(n[--e],u,false)}}else{this.onmousewheel=u}},teardown:function(){if(this.removeEventListener){for(var e=n.length;e;){this.removeEventListener(n[--e],u,false)}}else{this.onmousewheel=null}}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});(function(e,t){"use strict";var n=["fixed","relative","absolute"];var r="mousewheel resize";var i=e(t);var s=function(n,r){_.bindAll(this,"handleScroll","onScroll");this.$el=e(n);this.el=this.$el[0];this.options=_.defaults(r||{},{watchOn:t});this.$watchOn=e(this.options.watchOn);this._prepareContainer();this.inViewport=false;this.callbacks={scrollin:e.Callbacks(),scrollout:e.Callbacks(),scroll:e.Callbacks()};this.listen()};s.prototype={_prepareContainer:function(){if(this.$watchOn[0]===t){return}var e=this.$watchOn.css("position");var r=_.contains(n,e);if(!r){this.$watchOn.css("position","relative")}},listen:function(){this.$watchOn.on("scroll",this.onScroll);i.on(r,this.onScroll)},destroy:function(){this.$watchOn.off("scroll",this.onScroll);i.off(r,this.onScroll);this.$el.data("scrollWatch",null)},on:function(e,t,n,r){if(_.isFunction(t)){r=n;n=t;t={}}t=_.extend({},this.options,t);n=_.bind(n,r||this.$el);if(t.delay){n=this._createDelayedCallback(e,n,t)}this.callbacks[e].add(n);this.$watchOn.scroll();return this},_createDelayedCallback:function(e,t,n){return function(){var e=arguments;_.delay(function(){t.apply(this,e)},n.delay)}},handleScroll:function(){var e=this.visibility;var t=this.isInViewport();var n=this.$watchOn.scrollTop();if(!this.lastOffset){this.direction=false}else{this.direction=n>this.lastOffset?"down":"up"}this.lastOffset=n;this.visibility=t;if(!this.inViewport&&t===1){this.inViewport=true;this.trigger("scrollin")}else if(this.inViewport&&t===0){this.inViewport=false;if(this.dfd){this.dfd.done(_.bind(this.trigger,this,"scrollout"))}else{this.trigger("scrollout")}}if(t!==e){this.trigger("scroll")}return this},onScroll:function(e){if(this.running){return}this.running=true;this.originalEvent=e;this.handleScroll();this.running=false},trigger:function(e){if(e!=="scroll"&&e===this.lastTriggered){return false}this.lastTriggered=e;this.callbacks[e].fire({direction:this.direction,visibility:this.visibility,originalEvent:e})},_getOffsetTop:function(){if(this.$watchOn[0]===t){return this.$el.offset().top}var e=this.el;var n=0;do{n+=e.offsetTop;e=e.offsetParent}while(e&&e!==this.$watchOn[0]);return n},isInViewport:function(){var e=this.$watchOn.scrollTop();var t=this.$watchOn.height();var n=e+t;var r=this._getOffsetTop();var i=this.$el.outerHeight();var s=r+i;var o=i>=t;if(o&&e>=r&&n<=s){return 1}if(!o&&r>e&&s<n){return 1}if(r>e&&r<n&&s>n){return(n-r)/i}if(s>e&&s<n){return(e-s)/i}return 0}};t.ScrollWatch=s;e.fn.scrollWatch=function(n){var r=e(this),i=r.data("scrollWatch");if(!i){r.data("scrollWatch",i=new t.ScrollWatch(this,n))}return i}})(jQuery,window);(function(e,t,n){function o(t,n){this.el=t;this.$el=e(t);var s={mode:this.$el.data("autoscale"),contentRatio:this.$el.data("autoscale-content-ratio")};this.options=e.extend({},i,n,s);if(this.options.parent){this.$parent=e(this.options.parent)}else{this.$parent=this.$el.parent()}this._defaults=i;this._name=r;this.initialize()}var r="autoscale";var i={mode:"fit",responsive:true};var s=e(t);o.prototype={initialize:function(){this.$el.addClass("autoscale autoscale-background-cover");this.$parent.addClass("autoscale-parent");this.refresh();this.refresh=e.proxy(this.refresh,this);if(this.options.responsive){this.raf=false;s.on("resize",e.proxy(this.onResize,this));s.on("resize",_.debounce(this.refresh,80))}},_getContentRatio:function(){if(this.options.contentRatio){return this.options.contentRatio}if(this.el.tagName==="VIDEO"){return this.el.videoWidth/this.el.videoHeight}if(this.el.tagName==="IMG"){return this.el.width/this.el.height}return this.$el.width()/this.$el.height()},_calculateCoverSize:function(e,t,n){var r=e/t;var i=0;var s=0;if(n<=r){s=e;i=s/n}else{i=t;s=i*n}return{width:s,height:i}},_calculateFitSize:function(e,t,n){var r=e/t;var i=0;var s=0;if(n>=r){s=e;i=s/n}else{i=t;s=i*n}return{width:s,height:i}},refresh:function(){if(!this.$el.is(":visible")){return}var e=this.$parent.width();var t=this.$parent.height();var n={width:0,height:0};if(this.options.mode==="cover"){n=this._calculateCoverSize(e,t,this._getContentRatio())}else if(this.options.mode==="fit"){n=this._calculateFitSize(e,t,this._getContentRatio())}this.$el.css({width:n.width+"px",height:n.height+"px",marginLeft:-n.width/2+"px",marginTop:-n.height/2+"px"});this.raf=false},onResize:function(){if(!this.raf){t.requestAnimationFrame(this.refresh)}this.raf=true}};e.fn[r]=function(n){return this.each(function(){if(!e.data(this,"plugin_"+r)){e.data(this,"plugin_"+r,new o(this,n))}else{e.data(this,"plugin_"+r).onResize()}})};var u=function(){e("[data-autoscale]").autoscale()};e(u);s.on("load",u)})(jQuery,window);(function(e,t,n,r){function u(t,n){this.$el=e(t);this.el=this.$el[0];this.options=e.extend({},s,n,this._getDataOptions());this._defaults=s;this._name=i;this.initialize()}var i="viewport-height";var s={property:"height",height:1};var o=e(t);u.prototype={initialize:function(){this.refresh=e.proxy(this.refresh,this);this.onRefresh=e.proxy(this.onResize,this);this.refresh();o.on("resize load orientation",this.onRefresh);e(this.onRefresh)},_getDataOptions:function(){var t={};var n=this.$el;e.each(s,function(e){var r=n.data(i+"-"+e);if(r){t[e]=r}});return t},refresh:function(){this.$el.css(this.options.property,this.getViewportHeight());this.$el.trigger("css:height");this.raf=false},getViewportHeight:function(){var e=n.documentElement.clientHeight||t.screen.availHeight||o.height();var r=n.documentElement.clientWidth||t.screen.availWidth||o.height();var i=e>r?r/.6:r*.6;if(e>i){i=e}return i},onResize:function(){if(this.raf){t.requestAnimationFrame(this.refresh)}this.raf=true}};e.fn.viewportHeight=function(t){return this.each(function(){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new u(this,t))}})};e(function(){e("[data-viewport-height]").viewportHeight()})})(jQuery,window,document);(function(e,t,n,r){"use strict";function u(t,n){this.el=t;this.$el=e(t);n=n||{};var r=n.container||this.$el.data("sticky-element-container");this.$container=r?this.$el.closest(r):this.$el.parent();this.$stateElement=n.stateElement;this.options=e.extend({},n);this._name=i;this.initialize()}var i="sticky";var s=e(t);var o=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame;t.requestAnimationFrame=o;u.prototype={initialize:function(){if(this.$stateElement){this.$stateElement.data("sticky-enabled",true)}this.$el.addClass("sticky-element sticky-top");this.onResize=e.proxy(this.onResize,this);this.listen()},listen:function(){s.on("resize",this.onResize);this.$container.scrollWatch({watchOn:this.options.watchOn}).on("scroll",this.onScroll,this)},destroy:function(){s.off("resize",this.onResize);this.$container.scrollWatch().destroy();this.$el.removeClass("sticky-element sticky-top sticky-centered sticky-bottom")},refresh:function(){this.$container.scrollWatch().handleScroll();this.raf=false},onScroll:function(e){if(this.$stateElement&&this.$stateElement.data("sticky-enabled")===false){this.unstick();return}e=e||{};var t=Math.abs(e.visibility);var n=e.visibility>0;var r=!n;if(t===1){this.stick()}else if(t===0){var i=e.direction==="up"?"top":"bottom";this.unstick(i)}else if(n){this.unstick("top")}else if(r){var s=this.$el.outerHeight()/this.$container.height();if(e.direction==="down"&&t<=s){this.unstick("bottom")}else if(e.direction==="up"&&t>=s){this.stick()}}},unstick:function(e){this.$el.removeClass("sticky-bottom sticky-centered sticky-top");if(e){this.$el.addClass("sticky-"+e)}},stick:function(){this.$el.removeClass("sticky-top sticky-bottom").addClass("sticky-centered")},onResize:function(){if(!this.raf){t.requestAnimationFrame(e.proxy(this.refresh,this))}this.raf=true}};e.fn[i]=function(n){return this.each(function(){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new u(this,n))}e.data(this,"plugin_"+i).onResize()})};s.on("load",function(){e("[data-sticky-element]").sticky()})})(jQuery,window,document);(function(){function m(){return function(){}}function p(e){return function(){return this[e]}}function s(e){return function(){return e}}function u(e,t,n){if("string"===typeof e){0===e.indexOf("#")&&(e=e.slice(1));if(u.xa[e])return u.xa[e];e=u.w(e)}if(!e||!e.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return e.player||new u.s(e,t,n)}function D(e){e.u("vjs-lock-showing")}function E(e,t,n,r){if(n!==b)return e.a.style[t]=-1!==(""+n).indexOf("%")||-1!==(""+n).indexOf("px")?n:"auto"===n?"":n+"px",r||e.j("resize"),e;if(!e.a)return 0;n=e.a.style[t];r=n.indexOf("px");return-1!==r?parseInt(n.slice(0,r),10):parseInt(e.a["offset"+u.$(t)],10)}function F(e,t){var n,r,i,s;n=e.a;r=u.ad(n);s=i=n.offsetWidth;n=e.handle;if(e.g.Cd)return s=r.top,r=t.changedTouches?t.changedTouches[0].pageY:t.pageY,n&&(n=n.w().offsetHeight,s+=n/2,i-=n),Math.max(0,Math.min(1,(s-r+i)/i));i=r.left;r=t.changedTouches?t.changedTouches[0].pageX:t.pageX;n&&(n=n.w().offsetWidth,i+=n/2,s-=n);return Math.max(0,Math.min(1,(r-i)/s))}function ca(e,t){e.Z(t);t.d("click",u.bind(e,function(){D(this)}))}function H(e){e.pa=f;e.wa.n("vjs-lock-showing");e.a.setAttribute("aria-pressed",f);e.I&&0<e.I.length&&e.I[0].w().focus()}function G(e){e.pa=l;D(e.wa);e.a.setAttribute("aria-pressed",l)}function da(e){var t={sources:[],tracks:[]};u.k.B(t,u.xb(e));if(e.hasChildNodes()){var n,r,i,s;e=e.childNodes;i=0;for(s=e.length;i<s;i++)n=e[i],r=n.nodeName.toLowerCase(),"source"===r?t.sources.push(u.xb(n)):"track"===r&&t.tracks.push(u.xb(n))}return t}function I(e,t,n){e.h?(e.aa=l,e.h.D(),e.Eb&&(e.Eb=l,clearInterval(e.Ra)),e.Fb&&J(e),e.h=l):"Html5"!==t&&e.M&&(u.l.jc(e.M),e.M=h);e.ia=t;e.aa=l;var r=u.k.B({source:n,parentEl:e.a},e.g[t.toLowerCase()]);n&&(n.src==e.v.src&&0<e.v.currentTime&&(r.startTime=e.v.currentTime),e.v.src=n.src);e.h=new window.videojs[t](e,r);e.h.L(function(){this.b.Ua();if(!this.m.progressEvents){var e=this.b;e.Eb=f;e.Ra=setInterval(u.bind(e,function(){this.v.lb<this.buffered().end(0)?this.j("progress"):1==this.Ja()&&(clearInterval(this.Ra),this.j("progress"))}),500);e.h.U("progress",function(){this.m.progressEvents=f;var e=this.b;e.Eb=l;clearInterval(e.Ra)})}this.m.timeupdateEvents||(e=this.b,e.Fb=f,e.d("play",e.Cc),e.d("pause",e.za),e.h.U("timeupdate",function(){this.m.timeupdateEvents=f;J(this.b)}))})}function J(e){e.Fb=l;e.za();e.o("play",e.Cc);e.o("pause",e.za)}function L(e,t,n){if(e.h&&!e.h.aa)e.h.L(function(){this[t](n)});else try{e.h[t](n)}catch(r){throw u.log(r),r}}function K(e,t){if(e.h&&e.h.aa)try{return e.h[t]()}catch(n){throw e.h[t]===b?u.log("Video.js: "+t+" method not defined for "+e.ia+" playback technology.",n):"TypeError"==n.name?(u.log("Video.js: "+t+" unavailable on "+e.ia+" playback technology element.",n),e.h.aa=l):u.log(n),n}}function M(e){e.cd=l;u.o(document,"keydown",e.lc);document.documentElement.style.overflow=e.Yc;u.u(document.body,"vjs-full-window");e.j("exitFullWindow")}function ea(){var e=u.media.Va[i];return function(){throw Error('The "'+e+"\" method is not available on the playback technology's API")}}function fa(){var e=R[T],t=e.charAt(0).toUpperCase()+e.slice(1);Q["set"+t]=function(t){return this.a.vjs_setProperty(e,t)}}function U(e){Q[e]=function(){return this.a.vjs_getProperty(e)}}function V(e){e.Aa=e.Aa||[];return e.Aa}function W(e,t,n){for(var r=e.Aa,i=0,s=r.length,o,u;i<s;i++)o=r[i],o.id()===t?(o.show(),u=o):n&&o.J()==n&&0<o.mode()&&o.disable();(t=u?u.J():n?n:l)&&e.j(t+"trackchange")}function X(e){0===e.ha&&e.load();0===e.ga&&(e.b.d("timeupdate",u.bind(e,e.update,e.Q)),e.b.d("ended",u.bind(e,e.reset,e.Q)),("captions"===e.A||"subtitles"===e.A)&&e.b.V.textTrackDisplay.Z(e))}function Y(e){var t=e.split(":");e=0;var n,r,i;3==t.length?(n=t[0],r=t[1],t=t[2]):(n=0,r=t[0],t=t[1]);t=t.split(/\s+/);t=t.splice(0,1)[0];t=t.split(/\.|,/);i=parseFloat(t[1]);t=t[0];e+=3600*parseFloat(n);e+=60*parseFloat(r);e+=parseFloat(t);i&&(e+=i/1e3);return e}function $(e,t){var n=e.split("."),r=ga;!(n[0]in r)&&r.execScript&&r.execScript("var "+n[0]);for(var i;n.length&&(i=n.shift());)!n.length&&t!==b?r[i]=t:r=r[i]?r[i]:r[i]={}}var b=void 0,f=!0,h=null,l=!1;var t;document.createElement("video");document.createElement("audio");document.createElement("track");var v=u;window.Td=window.Ud=u;u.Tb="4.3";u.Fc="https:"==document.location.protocol?"https://":"http://";u.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{}},notSupportedMessage:'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'};"GENERATED_CDN_VSN"!==u.Tb&&(v.options.flash.swf=u.Fc+"vjs.zencdn.net/"+u.Tb+"/video-js.swf");u.xa={};u.la=u.CoreObject=m();u.la.extend=function(e){var t,n;e=e||{};t=e.init||e.i||this.prototype.init||this.prototype.i||m();n=function(){t.apply(this,arguments)};n.prototype=u.k.create(this.prototype);n.prototype.constructor=n;n.extend=u.la.extend;n.create=u.la.create;for(var r in e)e.hasOwnProperty(r)&&(n.prototype[r]=e[r]);return n};u.la.create=function(){var e=u.k.create(this.prototype);this.apply(e,arguments);return e};u.d=function(e,t,n){var r=u.getData(e);r.z||(r.z={});r.z[t]||(r.z[t]=[]);n.t||(n.t=u.t++);r.z[t].push(n);r.W||(r.disabled=l,r.W=function(t){if(!r.disabled){t=u.kc(t);var n=r.z[t.type];if(n)for(var n=n.slice(0),i=0,s=n.length;i<s&&!t.pc();i++)n[i].call(e,t)}});1==r.z[t].length&&(document.addEventListener?e.addEventListener(t,r.W,l):document.attachEvent&&e.attachEvent("on"+t,r.W))};u.o=function(e,t,n){if(u.oc(e)){var r=u.getData(e);if(r.z)if(t){var i=r.z[t];if(i){if(n){if(n.t)for(r=0;r<i.length;r++)i[r].t===n.t&&i.splice(r--,1)}else r.z[t]=[];u.gc(e,t)}}else for(i in r.z)t=i,r.z[t]=[],u.gc(e,t)}};u.gc=function(e,t){var n=u.getData(e);0===n.z[t].length&&(delete n.z[t],document.removeEventListener?e.removeEventListener(t,n.W,l):document.detachEvent&&e.detachEvent("on"+t,n.W));u.Bb(n.z)&&(delete n.z,delete n.W,delete n.disabled);u.Bb(n)&&u.vc(e)};u.kc=function(e){function t(){return f}function n(){return l}if(!e||!e.Cb){var r=e||window.event;e={};for(var i in r)"layerX"!==i&&"layerY"!==i&&(e[i]=r[i]);e.target||(e.target=e.srcElement||document);e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement;e.preventDefault=function(){r.preventDefault&&r.preventDefault();e.returnValue=l;e.Ab=t};e.Ab=n;e.stopPropagation=function(){r.stopPropagation&&r.stopPropagation();e.cancelBubble=f;e.Cb=t};e.Cb=n;e.stopImmediatePropagation=function(){r.stopImmediatePropagation&&r.stopImmediatePropagation();e.pc=t;e.stopPropagation()};e.pc=n;if(e.clientX!=h){i=document.documentElement;var s=document.body;e.pageX=e.clientX+(i&&i.scrollLeft||s&&s.scrollLeft||0)-(i&&i.clientLeft||s&&s.clientLeft||0);e.pageY=e.clientY+(i&&i.scrollTop||s&&s.scrollTop||0)-(i&&i.clientTop||s&&s.clientTop||0)}e.which=e.charCode||e.keyCode;e.button!=h&&(e.button=e.button&1?0:e.button&4?1:e.button&2?2:0)}return e};u.j=function(e,t){var n=u.oc(e)?u.getData(e):{},r=e.parentNode||e.ownerDocument;"string"===typeof t&&(t={type:t,target:e});t=u.kc(t);n.W&&n.W.call(e,t);if(r&&!t.Cb()&&t.bubbles!==l)u.j(r,t);else if(!r&&!t.Ab()&&(n=u.getData(t.target),t.target[t.type])){n.disabled=f;if("function"===typeof t.target[t.type])t.target[t.type]();n.disabled=l}return!t.Ab()};u.U=function(e,t,n){function r(){u.o(e,t,r);n.apply(this,arguments)}r.t=n.t=n.t||u.t++;u.d(e,t,r)};var w=Object.prototype.hasOwnProperty;u.e=function(e,t){var n,r;n=document.createElement(e||"div");for(r in t)w.call(t,r)&&(-1!==r.indexOf("aria-")||"role"==r?n.setAttribute(r,t[r]):n[r]=t[r]);return n};u.$=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};u.k={};u.k.create=Object.create||function(e){function t(){}t.prototype=e;return new t};u.k.ua=function(e,t,n){for(var r in e)w.call(e,r)&&t.call(n||this,r,e[r])};u.k.B=function(e,t){if(!t)return e;for(var n in t)w.call(t,n)&&(e[n]=t[n]);return e};u.k.ic=function(e,t){var n,r,i;e=u.k.copy(e);for(n in t)w.call(t,n)&&(r=e[n],i=t[n],e[n]=u.k.qc(r)&&u.k.qc(i)?u.k.ic(r,i):t[n]);return e};u.k.copy=function(e){return u.k.B({},e)};u.k.qc=function(e){return!!e&&"object"===typeof e&&"[object Object]"===e.toString()&&e.constructor===Object};u.bind=function(e,t,n){function r(){return t.apply(e,arguments)}t.t||(t.t=u.t++);r.t=n?n+"_"+t.t:t.t;return r};u.ra={};u.t=1;u.expando="vdata"+(new Date).getTime();u.getData=function(e){var t=e[u.expando];t||(t=e[u.expando]=u.t++,u.ra[t]={});return u.ra[t]};u.oc=function(e){e=e[u.expando];return!(!e||u.Bb(u.ra[e]))};u.vc=function(e){var t=e[u.expando];if(t){delete u.ra[t];try{delete e[u.expando]}catch(n){e.removeAttribute?e.removeAttribute(u.expando):e[u.expando]=h}}};u.Bb=function(e){for(var t in e)if(e[t]!==h)return l;return f};u.n=function(e,t){-1==(" "+e.className+" ").indexOf(" "+t+" ")&&(e.className=""===e.className?t:e.className+" "+t)};u.u=function(e,t){var n,r;if(-1!=e.className.indexOf(t)){n=e.className.split(" ");for(r=n.length-1;0<=r;r--)n[r]===t&&n.splice(r,1);e.className=n.join(" ")}};u.na=u.e("video");u.F=navigator.userAgent;u.Mc=/iPhone/i.test(u.F);u.Lc=/iPad/i.test(u.F);u.Nc=/iPod/i.test(u.F);u.Kc=u.Mc||u.Lc||u.Nc;var aa=u,x;var y=u.F.match(/OS (\d+)_/i);x=y&&y[1]?y[1]:b;aa.Fd=x;u.Ic=/Android/i.test(u.F);var ba=u,z;var A=u.F.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),B,C;A?(B=A[1]&&parseFloat(A[1]),C=A[2]&&parseFloat(A[2]),z=B&&C?parseFloat(A[1]+"."+A[2]):B?B:h):z=h;ba.Gc=z;u.Oc=u.Ic&&/webkit/i.test(u.F)&&2.3>u.Gc;u.Jc=/Firefox/i.test(u.F);u.Gd=/Chrome/i.test(u.F);u.ac=!!("ontouchstart"in window||window.Hc&&document instanceof window.Hc);u.xb=function(e){var t,n,r,i;t={};if(e&&e.attributes&&0<e.attributes.length){n=e.attributes;for(var s=n.length-1;0<=s;s--){r=n[s].name;i=n[s].value;if("boolean"===typeof e[r]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+r+","))i=i!==h?f:l;t[r]=i}}return t};u.Kd=function(e,t){var n="";document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,"").getPropertyValue(t):e.currentStyle&&(n=e["client"+t.substr(0,1).toUpperCase()+t.substr(1)]+"px");return n};u.zb=function(e,t){t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e)};u.Pb={};u.w=function(e){0===e.indexOf("#")&&(e=e.slice(1));return document.getElementById(e)};u.La=function(e,t){t=t||e;var n=Math.floor(e%60),r=Math.floor(e/60%60),i=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);if(isNaN(e)||Infinity===e)i=r=n="-";i=0<i||0<o?i+":":"";return i+(((i||10<=s)&&10>r?"0"+r:r)+":")+(10>n?"0"+n:n)};u.Tc=function(){document.body.focus();document.onselectstart=s(l)};u.Bd=function(){document.onselectstart=s(f)};u.trim=function(e){return(e+"").replace(/^\s+|\s+$/g,"")};u.round=function(e,t){t||(t=0);return Math.round(e*Math.pow(10,t))/Math.pow(10,t)};u.tb=function(e,t){return{length:1,start:function(){return e},end:function(){return t}}};u.get=function(e,t,n){var r,i;"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(n){}throw Error("This browser does not support XMLHttpRequest.")});i=new XMLHttpRequest;try{i.open("GET",e)}catch(s){n(s)}r=0===e.indexOf("file:")||0===window.location.href.indexOf("file:")&&-1===e.indexOf("http");i.onreadystatechange=function(){4===i.readyState&&(200===i.status||r&&0===i.status?t(i.responseText):n&&n())};try{i.send()}catch(o){n&&n(o)}};u.td=function(e){try{var t=window.localStorage||l;t&&(t.volume=e)}catch(n){22==n.code||1014==n.code?u.log("LocalStorage Full (VideoJS)",n):18==n.code?u.log("LocalStorage not allowed (VideoJS)",n):u.log("LocalStorage Error (VideoJS)",n)}};u.mc=function(e){e.match(/^https?:\/\//)||(e=u.e("div",{innerHTML:'<a href="'+e+'">x</a>'}).firstChild.href);return e};u.log=function(){u.log.history=u.log.history||[];u.log.history.push(arguments);window.console&&window.console.log(Array.prototype.slice.call(arguments))};u.ad=function(e){var t,n;e.getBoundingClientRect&&e.parentNode&&(t=e.getBoundingClientRect());if(!t)return{left:0,top:0};e=document.documentElement;n=document.body;return{left:t.left+(window.pageXOffset||n.scrollLeft)-(e.clientLeft||n.clientLeft||0),top:t.top+(window.pageYOffset||n.scrollTop)-(e.clientTop||n.clientTop||0)}};u.c=u.la.extend({i:function(e,t,n){this.b=e;this.g=u.k.copy(this.g);t=this.options(t);this.Q=t.id||(t.el&&t.el.id?t.el.id:e.id()+"_component_"+u.t++);this.gd=t.name||h;this.a=t.el||this.e();this.G=[];this.qb={};this.V={};if((e=this.g)&&e.children){var r=this;u.k.ua(e.children,function(e,t){t!==l&&!t.loadEvent&&(r[e]=r.Z(e,t))})}this.L(n)}});t=u.c.prototype;t.D=function(){this.j("dispose");if(this.G)for(var e=this.G.length-1;0<=e;e--)this.G[e].D&&this.G[e].D();this.V=this.qb=this.G=h;this.o();this.a.parentNode&&this.a.parentNode.removeChild(this.a);u.vc(this.a);this.a=h};t.b=f;t.K=p("b");t.options=function(e){return e===b?this.g:this.g=u.k.ic(this.g,e)};t.e=function(e,t){return u.e(e,t)};t.w=p("a");t.id=p("Q");t.name=p("gd");t.children=p("G");t.Z=function(e,t){var n,r;"string"===typeof e?(r=e,t=t||{},n=t.componentClass||u.$(r),t.name=r,n=new window.videojs[n](this.b||this,t)):n=e;this.G.push(n);"function"===typeof n.id&&(this.qb[n.id()]=n);(r=r||n.name&&n.name())&&(this.V[r]=n);"function"===typeof n.el&&n.el()&&(this.sa||this.a).appendChild(n.el());return n};t.removeChild=function(e){"string"===typeof e&&(e=this.V[e]);if(e&&this.G){for(var t=l,n=this.G.length-1;0<=n;n--)if(this.G[n]===e){t=f;this.G.splice(n,1);break}t&&(this.qb[e.id]=h,this.V[e.name]=h,(t=e.w())&&t.parentNode===(this.sa||this.a)&&(this.sa||this.a).removeChild(e.w()))}};t.T=s("");t.d=function(e,t){u.d(this.a,e,u.bind(this,t));return this};t.o=function(e,t){u.o(this.a,e,t);return this};t.U=function(e,t){u.U(this.a,e,u.bind(this,t));return this};t.j=function(e,t){u.j(this.a,e,t);return this};t.L=function(e){e&&(this.aa?e.call(this):(this.Sa===b&&(this.Sa=[]),this.Sa.push(e)));return this};t.Ua=function(){this.aa=f;var e=this.Sa;if(e&&0<e.length){for(var t=0,n=e.length;t<n;t++)e[t].call(this);this.Sa=[];this.j("ready")}};t.n=function(e){u.n(this.a,e);return this};t.u=function(e){u.u(this.a,e);return this};t.show=function(){this.a.style.display="block";return this};t.C=function(){this.a.style.display="none";return this};t.disable=function(){this.C();this.show=m()};t.width=function(e,t){return E(this,"width",e,t)};t.height=function(e,t){return E(this,"height",e,t)};t.Xc=function(e,t){return this.width(e,f).height(t)};u.q=u.c.extend({i:function(e,t){u.c.call(this,e,t);var n=l;this.d("touchstart",function(e){e.preventDefault();n=f});this.d("touchmove",function(){n=l});var r=this;this.d("touchend",function(e){n&&r.p(e);e.preventDefault()});this.d("click",this.p);this.d("focus",this.Oa);this.d("blur",this.Na)}});t=u.q.prototype;t.e=function(e,t){t=u.k.B({className:this.T(),innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+(this.qa||"Need Text")+"</span></div>",qd:"button","aria-live":"polite",tabIndex:0},t);return u.c.prototype.e.call(this,e,t)};t.T=function(){return"vjs-control "+u.c.prototype.T.call(this)};t.p=m();t.Oa=function(){u.d(document,"keyup",u.bind(this,this.ba))};t.ba=function(e){if(32==e.which||13==e.which)e.preventDefault(),this.p()};t.Na=function(){u.o(document,"keyup",u.bind(this,this.ba))};u.O=u.c.extend({i:function(e,t){u.c.call(this,e,t);this.Sc=this.V[this.g.barName];this.handle=this.V[this.g.handleName];e.d(this.tc,u.bind(this,this.update));this.d("mousedown",this.Pa);this.d("touchstart",this.Pa);this.d("focus",this.Oa);this.d("blur",this.Na);this.d("click",this.p);this.b.d("controlsvisible",u.bind(this,this.update));e.L(u.bind(this,this.update));this.P={}}});t=u.O.prototype;t.e=function(e,t){t=t||{};t.className+=" vjs-slider";t=u.k.B({qd:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},t);return u.c.prototype.e.call(this,e,t)};t.Pa=function(e){e.preventDefault();u.Tc();this.P.move=u.bind(this,this.Hb);this.P.end=u.bind(this,this.Ib);u.d(document,"mousemove",this.P.move);u.d(document,"mouseup",this.P.end);u.d(document,"touchmove",this.P.move);u.d(document,"touchend",this.P.end);this.Hb(e)};t.Ib=function(){u.Bd();u.o(document,"mousemove",this.P.move,l);u.o(document,"mouseup",this.P.end,l);u.o(document,"touchmove",this.P.move,l);u.o(document,"touchend",this.P.end,l);this.update()};t.update=function(){if(this.a){var e,t=this.yb(),n=this.handle,r=this.Sc;isNaN(t)&&(t=0);e=t;if(n){e=this.a.offsetWidth;var i=n.w().offsetWidth;e=i?i/e:0;t*=1-e;e=t+e/2;n.w().style.left=u.round(100*t,2)+"%"}r.w().style.width=u.round(100*e,2)+"%"}};t.Oa=function(){u.d(document,"keyup",u.bind(this,this.ba))};t.ba=function(e){37==e.which?(e.preventDefault(),this.yc()):39==e.which&&(e.preventDefault(),this.zc())};t.Na=function(){u.o(document,"keyup",u.bind(this,this.ba))};t.p=function(e){e.stopImmediatePropagation();e.preventDefault()};u.ea=u.c.extend();u.ea.prototype.defaultValue=0;u.ea.prototype.e=function(e,t){t=t||{};t.className+=" vjs-slider-handle";t=u.k.B({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},t);return u.c.prototype.e.call(this,"div",t)};u.ma=u.c.extend();u.ma.prototype.e=function(){var e=this.options().Vc||"ul";this.sa=u.e(e,{className:"vjs-menu-content"});e=u.c.prototype.e.call(this,"div",{append:this.sa,className:"vjs-menu"});e.appendChild(this.sa);u.d(e,"click",function(e){e.preventDefault();e.stopImmediatePropagation()});return e};u.N=u.q.extend({i:function(e,t){u.q.call(this,e,t);this.selected(t.selected)}});u.N.prototype.e=function(e,t){return u.q.prototype.e.call(this,"li",u.k.B({className:"vjs-menu-item",innerHTML:this.g.label},t))};u.N.prototype.p=function(){this.selected(f)};u.N.prototype.selected=function(e){e?(this.n("vjs-selected"),this.a.setAttribute("aria-selected",f)):(this.u("vjs-selected"),this.a.setAttribute("aria-selected",l))};u.R=u.q.extend({i:function(e,t){u.q.call(this,e,t);this.wa=this.Ka();this.Z(this.wa);this.I&&0===this.I.length&&this.C();this.d("keyup",this.ba);this.a.setAttribute("aria-haspopup",f);this.a.setAttribute("role","button")}});t=u.R.prototype;t.pa=l;t.Ka=function(){var e=new u.ma(this.b);this.options().title&&e.w().appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.$(this.A),zd:-1}));if(this.I=this.createItems())for(var t=0;t<this.I.length;t++)ca(e,this.I[t]);return e};t.ta=m();t.T=function(){return this.className+" vjs-menu-button "+u.q.prototype.T.call(this)};t.Oa=m();t.Na=m();t.p=function(){this.U("mouseout",u.bind(this,function(){D(this.wa);this.a.blur()}));this.pa?G(this):H(this)};t.ba=function(e){e.preventDefault();32==e.which||13==e.which?this.pa?G(this):H(this):27==e.which&&this.pa&&G(this)};u.s=u.c.extend({i:function(e,t,n){this.M=e;t=u.k.B(da(e),t);this.v={};this.uc=t.poster;this.sb=t.controls;e.controls=l;u.c.call(this,this,t,n);this.controls()?this.n("vjs-controls-enabled"):this.n("vjs-controls-disabled");this.U("play",function(e){u.j(this.a,{type:"firstplay",target:this.a})||(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())});this.d("ended",this.hd);this.d("play",this.Kb);this.d("firstplay",this.jd);this.d("pause",this.Jb);this.d("progress",this.ld);this.d("durationchange",this.sc);this.d("error",this.Gb);this.d("fullscreenchange",this.kd);u.xa[this.Q]=this;t.plugins&&u.k.ua(t.plugins,function(e,t){this[e](t)},this);var r,i,s,o;r=this.Mb;e=function(){r();clearInterval(i);i=setInterval(u.bind(this,r),250)};t=function(){r();clearInterval(i)};this.d("mousedown",e);this.d("mousemove",r);this.d("mouseup",t);this.d("keydown",r);this.d("keyup",r);this.d("touchstart",e);this.d("touchmove",r);this.d("touchend",t);this.d("touchcancel",t);s=setInterval(u.bind(this,function(){this.ka&&(this.ka=l,this.ja(f),clearTimeout(o),o=setTimeout(u.bind(this,function(){this.ka||this.ja(l)}),2e3))}),250);this.d("dispose",function(){clearInterval(s);clearTimeout(o)})}});t=u.s.prototype;t.g=u.options;t.D=function(){this.j("dispose");this.o("dispose");u.xa[this.Q]=h;this.M&&this.M.player&&(this.M.player=h);this.a&&this.a.player&&(this.a.player=h);clearInterval(this.Ra);this.za();this.h&&this.h.D();u.c.prototype.D.call(this)};t.e=function(){var e=this.a=u.c.prototype.e.call(this,"div"),t=this.M;t.removeAttribute("width");t.removeAttribute("height");if(t.hasChildNodes()){var n,r,i,s,o;n=t.childNodes;r=n.length;for(o=[];r--;)i=n[r],s=i.nodeName.toLowerCase(),"track"===s&&o.push(i);for(n=0;n<o.length;n++)t.removeChild(o[n])}t.id=t.id||"vjs_video_"+u.t++;e.id=t.id;e.className=t.className;t.id+="_html5_api";t.className="vjs-tech";t.player=e.player=this;this.n("vjs-paused");this.width(this.g.width,f);this.height(this.g.height,f);t.parentNode&&t.parentNode.insertBefore(e,t);u.zb(t,e);return e};t.Cc=function(){this.hc&&this.za();this.hc=setInterval(u.bind(this,function(){this.j("timeupdate")}),250)};t.za=function(){clearInterval(this.hc)};t.Kb=function(){u.u(this.a,"vjs-paused");u.n(this.a,"vjs-playing")};t.jd=function(){this.g.starttime&&this.currentTime(this.g.starttime);this.n("vjs-has-started")};t.Jb=function(){u.u(this.a,"vjs-playing");u.n(this.a,"vjs-paused")};t.ld=function(){1==this.Ja()&&this.j("loadedalldata")};t.hd=function(){this.g.loop&&(this.currentTime(0),this.play())};t.sc=function(){this.duration(K(this,"duration"))};t.kd=function(){this.H?this.n("vjs-fullscreen"):this.u("vjs-fullscreen")};t.Gb=function(e){u.log("Video Error",e)};t.play=function(){L(this,"play");return this};t.pause=function(){L(this,"pause");return this};t.paused=function(){return K(this,"paused")===l?l:f};t.currentTime=function(e){return e!==b?(this.v.rc=e,L(this,"setCurrentTime",e),this.Fb&&this.j("timeupdate"),this):this.v.currentTime=K(this,"currentTime")||0};t.duration=function(e){if(e!==b)return this.v.duration=parseFloat(e),this;this.v.duration===b&&this.sc();return this.v.duration};t.buffered=function(){var e=K(this,"buffered"),t=e.length-1,n=this.v.lb=this.v.lb||0;e&&0<=t&&e.end(t)!==n&&(n=e.end(t),this.v.lb=n);return u.tb(0,n)};t.Ja=function(){return this.duration()?this.buffered().end(0)/this.duration():0};t.volume=function(e){if(e!==b)return e=Math.max(0,Math.min(1,parseFloat(e))),this.v.volume=e,L(this,"setVolume",e),u.td(e),this;e=parseFloat(K(this,"volume"));return isNaN(e)?1:e};t.muted=function(e){return e!==b?(L(this,"setMuted",e),this):K(this,"muted")||l};t.Ta=function(){return K(this,"supportsFullScreen")||l};t.ya=function(){var e=u.Pb.ya;this.H=f;e?(u.d(document,e.vb,u.bind(this,function(t){this.H=document[e.H];this.H===l&&u.o(document,e.vb,arguments.callee);this.j("fullscreenchange")})),this.a[e.wc]()):this.h.Ta()?L(this,"enterFullScreen"):(this.cd=f,this.Yc=document.documentElement.style.overflow,u.d(document,"keydown",u.bind(this,this.lc)),document.documentElement.style.overflow="hidden",u.n(document.body,"vjs-full-window"),this.j("enterFullWindow"),this.j("fullscreenchange"));return this};t.ob=function(){var e=u.Pb.ya;this.H=l;if(e)document[e.nb]();else this.h.Ta()?L(this,"exitFullScreen"):(M(this),this.j("fullscreenchange"));return this};t.lc=function(e){27===e.keyCode&&(this.H===f?this.ob():M(this))};t.src=function(e){if(e instanceof Array){var t;e:{t=e;for(var n=0,r=this.g.techOrder;n<r.length;n++){var i=u.$(r[n]),s=window.videojs[i];if(s.isSupported())for(var o=0,a=t;o<a.length;o++){var f=a[o];if(s.canPlaySource(f)){t={source:f,h:i};break e}}}t=l}t?(e=t.source,t=t.h,t==this.ia?this.src(e):I(this,t,e)):this.a.appendChild(u.e("p",{innerHTML:this.options().notSupportedMessage}))}else e instanceof Object?window.videojs[this.ia].canPlaySource(e)?this.src(e.src):this.src([e]):(this.v.src=e,this.aa?(L(this,"src",e),"auto"==this.g.preload&&this.load(),this.g.autoplay&&this.play()):this.L(function(){this.src(e)}));return this};t.load=function(){L(this,"load");return this};t.currentSrc=function(){return K(this,"currentSrc")||this.v.src||""};t.Qa=function(e){return e!==b?(L(this,"setPreload",e),this.g.preload=e,this):K(this,"preload")};t.autoplay=function(e){return e!==b?(L(this,"setAutoplay",e),this.g.autoplay=e,this):K(this,"autoplay")};t.loop=function(e){return e!==b?(L(this,"setLoop",e),this.g.loop=e,this):K(this,"loop")};t.poster=function(e){return e!==b?(this.uc=e,this):this.uc};t.controls=function(e){return e!==b?(e=!!e,this.sb!==e&&((this.sb=e)?(this.u("vjs-controls-disabled"),this.n("vjs-controls-enabled"),this.j("controlsenabled")):(this.u("vjs-controls-enabled"),this.n("vjs-controls-disabled"),this.j("controlsdisabled"))),this):this.sb};u.s.prototype.Sb;t=u.s.prototype;t.Rb=function(e){return e!==b?(e=!!e,this.Sb!==e&&((this.Sb=e)?(this.n("vjs-using-native-controls"),this.j("usingnativecontrols")):(this.u("vjs-using-native-controls"),this.j("usingcustomcontrols"))),this):this.Sb};t.error=function(){return K(this,"error")};t.seeking=function(){return K(this,"seeking")};t.ka=f;t.Mb=function(){this.ka=f};t.Qb=f;t.ja=function(e){return e!==b?(e=!!e,e!==this.Qb&&((this.Qb=e)?(this.ka=f,this.u("vjs-user-inactive"),this.n("vjs-user-active"),this.j("useractive")):(this.ka=l,this.h.U("mousemove",function(e){e.stopPropagation();e.preventDefault()}),this.u("vjs-user-active"),this.n("vjs-user-inactive"),this.j("userinactive"))),this):this.Qb};var N,O,P;P=document.createElement("div");O={};P.Hd!==b?(O.wc="requestFullscreen",O.nb="exitFullscreen",O.vb="fullscreenchange",O.H="fullScreen"):(document.mozCancelFullScreen?(N="moz",O.H=N+"FullScreen"):(N="webkit",O.H=N+"IsFullScreen"),P[N+"RequestFullScreen"]&&(O.wc=N+"RequestFullScreen",O.nb=N+"CancelFullScreen"),O.vb=N+"fullscreenchange");document[O.nb]&&(u.Pb.ya=O);u.Fa=u.c.extend();u.Fa.prototype.g={Md:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{}}};u.Fa.prototype.e=function(){return u.e("div",{className:"vjs-control-bar"})};u.Yb=u.q.extend({i:function(e,t){u.q.call(this,e,t);e.d("play",u.bind(this,this.Kb));e.d("pause",u.bind(this,this.Jb))}});t=u.Yb.prototype;t.qa="Play";t.T=function(){return"vjs-play-control "+u.q.prototype.T.call(this)};t.p=function(){this.b.paused()?this.b.play():this.b.pause()};t.Kb=function(){u.u(this.a,"vjs-paused");u.n(this.a,"vjs-playing");this.a.children[0].children[0].innerHTML="Pause"};t.Jb=function(){u.u(this.a,"vjs-playing");u.n(this.a,"vjs-paused");this.a.children[0].children[0].innerHTML="Play"};u.Ya=u.c.extend({i:function(e,t){u.c.call(this,e,t);e.d("timeupdate",u.bind(this,this.Ca))}});u.Ya.prototype.e=function(){var e=u.c.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});e.appendChild(u.e("div").appendChild(this.content));return e};u.Ya.prototype.Ca=function(){var e=this.b.Nb?this.b.v.currentTime:this.b.currentTime();this.content.innerHTML='<span class="vjs-control-text">Current Time </span>'+u.La(e,this.b.duration())};u.Za=u.c.extend({i:function(e,t){u.c.call(this,e,t);e.d("timeupdate",u.bind(this,this.Ca))}});u.Za.prototype.e=function(){var e=u.c.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',"aria-live":"off"});e.appendChild(u.e("div").appendChild(this.content));return e};u.Za.prototype.Ca=function(){var e=this.b.duration();e&&(this.content.innerHTML='<span class="vjs-control-text">Duration Time </span>'+u.La(e))};u.cc=u.c.extend({i:function(e,t){u.c.call(this,e,t)}});u.cc.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};u.fb=u.c.extend({i:function(e,t){u.c.call(this,e,t);e.d("timeupdate",u.bind(this,this.Ca))}});u.fb.prototype.e=function(){var e=u.c.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',"aria-live":"off"});e.appendChild(u.e("div").appendChild(this.content));return e};u.fb.prototype.Ca=function(){this.b.duration()&&(this.content.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+u.La(this.b.duration()-this.b.currentTime()))};u.Ga=u.q.extend({i:function(e,t){u.q.call(this,e,t)}});u.Ga.prototype.qa="Fullscreen";u.Ga.prototype.T=function(){return"vjs-fullscreen-control "+u.q.prototype.T.call(this)};u.Ga.prototype.p=function(){this.b.H?(this.b.ob(),this.a.children[0].children[0].innerHTML="Fullscreen"):(this.b.ya(),this.a.children[0].children[0].innerHTML="Non-Fullscreen")};u.eb=u.c.extend({i:function(e,t){u.c.call(this,e,t)}});u.eb.prototype.g={children:{seekBar:{}}};u.eb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};u.Zb=u.O.extend({i:function(e,t){u.O.call(this,e,t);e.d("timeupdate",u.bind(this,this.Ba));e.L(u.bind(this,this.Ba))}});t=u.Zb.prototype;t.g={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};t.tc="timeupdate";t.e=function(){return u.O.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};t.Ba=function(){var e=this.b.Nb?this.b.v.currentTime:this.b.currentTime();this.a.setAttribute("aria-valuenow",u.round(100*this.yb(),2));this.a.setAttribute("aria-valuetext",u.La(e,this.b.duration()))};t.yb=function(){var e;"Flash"===this.b.ia&&this.b.seeking()?(e=this.b.v,e=e.rc?e.rc:this.b.currentTime()):e=this.b.currentTime();return e/this.b.duration()};t.Pa=function(e){u.O.prototype.Pa.call(this,e);this.b.Nb=f;this.Dd=!this.b.paused();this.b.pause()};t.Hb=function(e){e=F(this,e)*this.b.duration();e==this.b.duration()&&(e-=.1);this.b.currentTime(e)};t.Ib=function(e){u.O.prototype.Ib.call(this,e);this.b.Nb=l;this.Dd&&this.b.play()};t.zc=function(){this.b.currentTime(this.b.currentTime()+5)};t.yc=function(){this.b.currentTime(this.b.currentTime()-5)};u.ab=u.c.extend({i:function(e,t){u.c.call(this,e,t);e.d("progress",u.bind(this,this.update))}});u.ab.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'})};u.ab.prototype.update=function(){this.a.style&&(this.a.style.width=u.round(100*this.b.Ja(),2)+"%")};u.Xb=u.c.extend({i:function(e,t){u.c.call(this,e,t)}});u.Xb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'})};u.gb=u.ea.extend();u.gb.prototype.defaultValue="00:00";u.gb.prototype.e=function(){return u.ea.prototype.e.call(this,"div",{className:"vjs-seek-handle"})};u.ib=u.c.extend({i:function(e,t){u.c.call(this,e,t);e.h&&e.h.m&&e.h.m.volumeControl===l&&this.n("vjs-hidden");e.d("loadstart",u.bind(this,function(){e.h.m&&e.h.m.volumeControl===l?this.n("vjs-hidden"):this.u("vjs-hidden")}))}});u.ib.prototype.g={children:{volumeBar:{}}};u.ib.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};u.hb=u.O.extend({i:function(e,t){u.O.call(this,e,t);e.d("volumechange",u.bind(this,this.Ba));e.L(u.bind(this,this.Ba));setTimeout(u.bind(this,this.update),0)}});t=u.hb.prototype;t.Ba=function(){this.a.setAttribute("aria-valuenow",u.round(100*this.b.volume(),2));this.a.setAttribute("aria-valuetext",u.round(100*this.b.volume(),2)+"%")};t.g={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};t.tc="volumechange";t.e=function(){return u.O.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};t.Hb=function(e){this.b.muted()&&this.b.muted(l);this.b.volume(F(this,e))};t.yb=function(){return this.b.muted()?0:this.b.volume()};t.zc=function(){this.b.volume(this.b.volume()+.1)};t.yc=function(){this.b.volume(this.b.volume()-.1)};u.dc=u.c.extend({i:function(e,t){u.c.call(this,e,t)}});u.dc.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};u.jb=u.ea.extend();u.jb.prototype.defaultValue="00:00";u.jb.prototype.e=function(){return u.ea.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};u.da=u.q.extend({i:function(e,t){u.q.call(this,e,t);e.d("volumechange",u.bind(this,this.update));e.h&&e.h.m&&e.h.m.volumeControl===l&&this.n("vjs-hidden");e.d("loadstart",u.bind(this,function(){e.h.m&&e.h.m.volumeControl===l?this.n("vjs-hidden"):this.u("vjs-hidden")}))}});u.da.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.da.prototype.p=function(){this.b.muted(this.b.muted()?l:f)};u.da.prototype.update=function(){var e=this.b.volume(),t=3;0===e||this.b.muted()?t=0:.33>e?t=1:.67>e&&(t=2);this.b.muted()?"Unmute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Unmute"):"Mute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Mute");for(e=0;4>e;e++)u.u(this.a,"vjs-vol-"+e);u.n(this.a,"vjs-vol-"+t)};u.oa=u.R.extend({i:function(e,t){u.R.call(this,e,t);e.d("volumechange",u.bind(this,this.update));e.h&&e.h.m&&e.h.m.Dc===l&&this.n("vjs-hidden");e.d("loadstart",u.bind(this,function(){e.h.m&&e.h.m.Dc===l?this.n("vjs-hidden"):this.u("vjs-hidden")}));this.n("vjs-menu-button")}});u.oa.prototype.Ka=function(){var e=new u.ma(this.b,{Vc:"div"}),t=new u.hb(this.b,u.k.B({Cd:f},this.g.Vd));e.Z(t);return e};u.oa.prototype.p=function(){u.da.prototype.p.call(this);u.R.prototype.p.call(this)};u.oa.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.oa.prototype.update=u.da.prototype.update;u.cb=u.q.extend({i:function(e,t){u.q.call(this,e,t);(!e.poster()||!e.controls())&&this.C();e.d("play",u.bind(this,this.C))}});u.cb.prototype.e=function(){var e=u.e("div",{className:"vjs-poster",tabIndex:-1}),t=this.b.poster();t&&("backgroundSize"in e.style?e.style.backgroundImage='url("'+t+'")':e.appendChild(u.e("img",{src:t})));return e};u.cb.prototype.p=function(){this.K().controls()&&this.b.play()};u.Wb=u.c.extend({i:function(e,t){u.c.call(this,e,t);e.d("canplay",u.bind(this,this.C));e.d("canplaythrough",u.bind(this,this.C));e.d("playing",u.bind(this,this.C));e.d("seeked",u.bind(this,this.C));e.d("seeking",u.bind(this,this.show));e.d("seeked",u.bind(this,this.C));e.d("error",u.bind(this,this.show));e.d("waiting",u.bind(this,this.show))}});u.Wb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};u.Wa=u.q.extend();u.Wa.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};u.Wa.prototype.p=function(){this.b.play()};u.r=u.c.extend({i:function(e,t,n){u.c.call(this,e,t,n);var r,i;i=this;r=this.K();e=function(){if(r.controls()&&!r.Rb()){var e,t;i.d("mousedown",i.p);i.d("touchstart",function(e){e.preventDefault();e.stopPropagation();t=this.b.ja()});e=function(e){e.stopPropagation();t&&this.b.Mb()};i.d("touchmove",e);i.d("touchleave",e);i.d("touchcancel",e);i.d("touchend",e);var n,s,o;n=0;i.d("touchstart",function(){n=(new Date).getTime();o=f});e=function(){o=l};i.d("touchmove",e);i.d("touchleave",e);i.d("touchcancel",e);i.d("touchend",function(){o===f&&(s=(new Date).getTime()-n,250>s&&this.j("tap"))});i.d("tap",i.md)}};t=u.bind(i,i.pd);this.L(e);r.d("controlsenabled",e);r.d("controlsdisabled",t)}});u.r.prototype.pd=function(){this.o("tap");this.o("touchstart");this.o("touchmove");this.o("touchleave");this.o("touchcancel");this.o("touchend");this.o("click");this.o("mousedown")};u.r.prototype.p=function(e){0===e.button&&this.K().controls()&&(this.K().paused()?this.K().play():this.K().pause())};u.r.prototype.md=function(){this.K().ja(!this.K().ja())};u.r.prototype.m={volumeControl:f,fullscreenResize:l,progressEvents:l,timeupdateEvents:l};u.media={};u.media.Va="play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");for(var i=u.media.Va.length-1;0<=i;i--)u.r.prototype[u.media.Va[i]]=ea();u.l=u.r.extend({i:function(e,t,n){this.m.volumeControl=u.l.Uc();this.m.movingMediaElementInDOM=!u.Kc;this.m.fullscreenResize=f;u.r.call(this,e,t,n);(t=t.source)&&this.a.currentSrc===t.src&&0<this.a.networkState?e.j("loadstart"):t&&(this.a.src=t.src);if(u.ac&&e.options().nativeControlsForTouch!==l){var r,i,s,o;r=this;i=this.K();t=i.controls();r.a.controls=!!t;s=function(){r.a.controls=f};o=function(){r.a.controls=l};i.d("controlsenabled",s);i.d("controlsdisabled",o);t=function(){i.o("controlsenabled",s);i.o("controlsdisabled",o)};r.d("dispose",t);i.d("usingcustomcontrols",t);i.Rb(f)}e.L(function(){this.M&&this.g.autoplay&&this.paused()&&(delete this.M.poster,this.play())});for(e=u.l.$a.length-1;0<=e;e--)u.d(this.a,u.l.$a[e],u.bind(this.b,this.$c));this.Ua()}});t=u.l.prototype;t.D=function(){u.r.prototype.D.call(this)};t.e=function(){var e=this.b,t=e.M,n;if(!t||this.m.movingMediaElementInDOM===l)t?(n=t.cloneNode(l),u.l.jc(t),t=n,e.M=h):t=u.e("video",{id:e.id()+"_html5_api",className:"vjs-tech"}),t.player=e,u.zb(t,e.w());n=["autoplay","preload","loop","muted"];for(var r=n.length-1;0<=r;r--){var i=n[r];e.g[i]!==h&&(t[i]=e.g[i])}return t};t.$c=function(e){this.j(e);e.stopPropagation()};t.play=function(){this.a.play()};t.pause=function(){this.a.pause()};t.paused=function(){return this.a.paused};t.currentTime=function(){return this.a.currentTime};t.sd=function(e){try{this.a.currentTime=e}catch(t){u.log(t,"Video is not ready. (Video.js)")}};t.duration=function(){return this.a.duration||0};t.buffered=function(){return this.a.buffered};t.volume=function(){return this.a.volume};t.xd=function(e){this.a.volume=e};t.muted=function(){return this.a.muted};t.vd=function(e){this.a.muted=e};t.width=function(){return this.a.offsetWidth};t.height=function(){return this.a.offsetHeight};t.Ta=function(){return"function"==typeof this.a.webkitEnterFullScreen&&(/Android/.test(u.F)||!/Chrome|Mac OS X 10.5/.test(u.F))?f:l};t.src=function(e){this.a.src=e};t.load=function(){this.a.load()};t.currentSrc=function(){return this.a.currentSrc};t.Qa=function(){return this.a.Qa};t.wd=function(e){this.a.Qa=e};t.autoplay=function(){return this.a.autoplay};t.rd=function(e){this.a.autoplay=e};t.controls=function(){return this.a.controls};t.loop=function(){return this.a.loop};t.ud=function(e){this.a.loop=e};t.error=function(){return this.a.error};t.seeking=function(){return this.a.seeking};u.l.isSupported=function(){return!!u.na.canPlayType};u.l.mb=function(e){try{return!!u.na.canPlayType(e.type)}catch(t){return""}};u.l.Uc=function(){var e=u.na.volume;u.na.volume=e/2+.1;return e!==u.na.volume};u.l.$a="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");u.l.jc=function(e){if(e){e.player=h;for(e.parentNode&&e.parentNode.removeChild(e);e.hasChildNodes();)e.removeChild(e.firstChild);e.removeAttribute("src");"function"===typeof e.load&&e.load()}};u.Oc&&(document.createElement("video").constructor.prototype.canPlayType=function(e){return e&&-1!=e.toLowerCase().indexOf("video/mp4")?"maybe":""});u.f=u.r.extend({i:function(e,t,n){u.r.call(this,e,t,n);var r=t.source;n=t.parentEl;var i=this.a=u.e("div",{id:e.id()+"_temp_flash"}),s=e.id()+"_flash_api";e=e.g;var o=u.k.B({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:e.autoplay,preload:e.Qa,loop:e.loop,muted:e.muted},t.flashVars),a=u.k.B({wmode:"opaque",bgcolor:"#000000"},t.params),l=u.k.B({id:s,name:s,"class":"vjs-tech"},t.attributes);r&&(r.type&&u.f.ed(r.type)?(e=u.f.Ac(r.src),o.rtmpConnection=encodeURIComponent(e.rb),o.rtmpStream=encodeURIComponent(e.Ob)):o.src=encodeURIComponent(u.mc(r.src)));u.zb(i,n);t.startTime&&this.L(function(){this.load();this.play();this.currentTime(t.startTime)});if(t.iFrameMode===f&&!u.Jc){var c=u.e("iframe",{id:s+"_iframe",name:s+"_iframe",className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});o.readyFunction="ready";o.eventProxyFunction="events";o.errorEventProxyFunction="errors";u.d(c,"load",u.bind(this,function(){var e,n=c.contentWindow;e=c.contentDocument?c.contentDocument:c.contentWindow.document;e.write(u.f.nc(t.swf,o,a,l));n.player=this.b;n.ready=u.bind(this.b,function(t){var n=this.h;n.a=e.getElementById(t);u.f.pb(n)});n.events=u.bind(this.b,function(e,t){this&&"flash"===this.ia&&this.j(t)});n.errors=u.bind(this.b,function(e,t){u.log("Flash Error",t)})}));i.parentNode.replaceChild(c,i)}else u.f.Zc(t.swf,i,o,a,l)}});t=u.f.prototype;t.D=function(){u.r.prototype.D.call(this)};t.play=function(){this.a.vjs_play()};t.pause=function(){this.a.vjs_pause()};t.src=function(e){u.f.dd(e)?(e=u.f.Ac(e),this.Qd(e.rb),this.Rd(e.Ob)):(e=u.mc(e),this.a.vjs_src(e));if(this.b.autoplay()){var t=this;setTimeout(function(){t.play()},0)}};t.currentSrc=function(){var e=this.a.vjs_getProperty("currentSrc");if(e==h){var t=this.Od(),n=this.Pd();t&&n&&(e=u.f.yd(t,n))}return e};t.load=function(){this.a.vjs_load()};t.poster=function(){this.a.vjs_getProperty("poster")};t.buffered=function(){return u.tb(0,this.a.vjs_getProperty("buffered"))};t.Ta=s(l);var Q=u.f.prototype,R="rtmpConnection rtmpStream preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),S="error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");var T;for(T=0;T<R.length;T++)U(R[T]),fa();for(T=0;T<S.length;T++)U(S[T]);u.f.isSupported=function(){return 10<=u.f.version()[0]};u.f.mb=function(e){if(!e.type)return"";e=e.type.replace(/;.*/,"").toLowerCase();if(e in u.f.bd||e in u.f.Bc)return"maybe"};u.f.bd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};u.f.Bc={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};u.f.onReady=function(e){e=u.w(e);var t=e.player||e.parentNode.player,n=t.h;e.player=t;n.a=e;u.f.pb(n)};u.f.pb=function(e){e.w().vjs_getProperty?e.Ua():setTimeout(function(){u.f.pb(e)},50)};u.f.onEvent=function(e,t){u.w(e).player.j(t)};u.f.onError=function(e,t){u.w(e).player.j("error");u.log("Flash Error",t,e)};u.f.version=function(){var e="0,0,0";try{e=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(t){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(e=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(n){}}return e.split(",")};u.f.Zc=function(e,t,n,r,i){e=u.f.nc(e,n,r,i);e=u.e("div",{innerHTML:e}).childNodes[0];n=t.parentNode;t.parentNode.replaceChild(e,t);var s=n.childNodes[0];setTimeout(function(){s.style.display="block"},1e3)};u.f.nc=function(e,t,n,r){var i="",s="",o="";t&&u.k.ua(t,function(e,t){i+=e+"="+t+"&"});n=u.k.B({movie:e,flashvars:i,allowScriptAccess:"always",allowNetworking:"all"},n);u.k.ua(n,function(e,t){s+='<param name="'+e+'" value="'+t+'" />'});r=u.k.B({data:e,width:"100%",height:"100%"},r);u.k.ua(r,function(e,t){o+=e+'="'+t+'" '});return'<object type="application/x-shockwave-flash"'+o+">"+s+"</object>"};u.f.yd=function(e,t){return e+"&"+t};u.f.Ac=function(e){var t={rb:"",Ob:""};if(!e)return t;var n=e.indexOf("&"),r;-1!==n?r=n+1:(n=r=e.lastIndexOf("/")+1,0===n&&(n=r=e.length));t.rb=e.substring(0,n);t.Ob=e.substring(r,e.length);return t};u.f.ed=function(e){return e in u.f.Bc};u.f.Qc=/^rtmp[set]?:\/\//i;u.f.dd=function(e){return u.f.Qc.test(e)};u.Pc=u.c.extend({i:function(e,t,n){u.c.call(this,e,t,n);if(!e.g.sources||0===e.g.sources.length){t=0;for(n=e.g.techOrder;t<n.length;t++){var r=u.$(n[t]),i=window.videojs[r];if(i&&i.isSupported()){I(e,r);break}}}else e.src(e.g.sources)}});u.X=u.c.extend({i:function(e,t){u.c.call(this,e,t);this.Q=t.id||"vjs_"+t.kind+"_"+t.language+"_"+u.t++;this.xc=t.src;this.Wc=t["default"]||t.dflt;this.Ad=t.title;this.Ld=t.srclang;this.fd=t.label;this.fa=[];this.ec=[];this.ga=this.ha=0;this.b.d("fullscreenchange",u.bind(this,this.Rc))}});t=u.X.prototype;t.J=p("A");t.src=p("xc");t.ub=p("Wc");t.title=p("Ad");t.label=p("fd");t.readyState=p("ha");t.mode=p("ga");t.Rc=function(){this.a.style.fontSize=this.b.H?140*(screen.width/this.b.width())+"%":""};t.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-"+this.A+" vjs-text-track"})};t.show=function(){X(this);this.ga=2;u.c.prototype.show.call(this)};t.C=function(){X(this);this.ga=1;u.c.prototype.C.call(this)};t.disable=function(){2==this.ga&&this.C();this.b.o("timeupdate",u.bind(this,this.update,this.Q));this.b.o("ended",u.bind(this,this.reset,this.Q));this.reset();this.b.V.textTrackDisplay.removeChild(this);this.ga=0};t.load=function(){0===this.ha&&(this.ha=1,u.get(this.xc,u.bind(this,this.nd),u.bind(this,this.Gb)))};t.Gb=function(e){this.error=e;this.ha=3;this.j("error")};t.nd=function(e){var t,n;e=e.split("\n");for(var r="",i=1,s=e.length;i<s;i++)if(r=u.trim(e[i])){-1==r.indexOf("-->")?(t=r,r=u.trim(e[++i])):t=this.fa.length;t={id:t,index:this.fa.length};n=r.split(" --> ");t.startTime=Y(n[0]);t.va=Y(n[1]);for(n=[];e[++i]&&(r=u.trim(e[i]));)n.push(r);t.text=n.join("<br/>");this.fa.push(t)}this.ha=2;this.j("loaded")};t.update=function(){if(0<this.fa.length){var e=this.b.currentTime();if(this.Lb===b||e<this.Lb||this.Ma<=e){var t=this.fa,n=this.b.duration(),r=0,i=l,s=[],o,u,a,c;e>=this.Ma||this.Ma===b?c=this.wb!==b?this.wb:0:(i=f,c=this.Db!==b?this.Db:t.length-1);for(;;){a=t[c];if(a.va<=e)r=Math.max(r,a.va),a.Ia&&(a.Ia=l);else if(e<a.startTime){if(n=Math.min(n,a.startTime),a.Ia&&(a.Ia=l),!i)break}else i?(s.splice(0,0,a),u===b&&(u=c),o=c):(s.push(a),o===b&&(o=c),u=c),n=Math.min(n,a.va),r=Math.max(r,a.startTime),a.Ia=f;if(i)if(0===c)break;else c--;else if(c===t.length-1)break;else c++}this.ec=s;this.Ma=n;this.Lb=r;this.wb=o;this.Db=u;e=this.ec;t="";n=0;for(r=e.length;n<r;n++)t+='<span class="vjs-tt-cue">'+e[n].text+"</span>";this.a.innerHTML=t;this.j("cuechange")}}};t.reset=function(){this.Ma=0;this.Lb=this.b.duration();this.Db=this.wb=0};u.Ub=u.X.extend();u.Ub.prototype.A="captions";u.$b=u.X.extend();u.$b.prototype.A="subtitles";u.Vb=u.X.extend();u.Vb.prototype.A="chapters";u.bc=u.c.extend({i:function(e,t,n){u.c.call(this,e,t,n);if(e.g.tracks&&0<e.g.tracks.length){t=this.b;e=e.g.tracks;var r;for(n=0;n<e.length;n++){r=e[n];var i=t,s=r.kind,o=r.label,a=r.language,f=r;r=i.Aa=i.Aa||[];f=f||{};f.kind=s;f.label=o;f.language=a;s=u.$(s||"subtitles");i=new window.videojs[s+"Track"](i,f);r.push(i)}}}});u.bc.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};u.Y=u.N.extend({i:function(e,t){var n=this.ca=t.track;t.label=n.label();t.selected=n.ub();u.N.call(this,e,t);this.b.d(n.J()+"trackchange",u.bind(this,this.update))}});u.Y.prototype.p=function(){u.N.prototype.p.call(this);W(this.b,this.ca.Q,this.ca.J())};u.Y.prototype.update=function(){this.selected(2==this.ca.mode())};u.bb=u.Y.extend({i:function(e,t){t.track={J:function(){return t.kind},K:e,label:function(){return t.kind+" off"},ub:s(l),mode:s(l)};u.Y.call(this,e,t);this.selected(f)}});u.bb.prototype.p=function(){u.Y.prototype.p.call(this);W(this.b,this.ca.Q,this.ca.J())};u.bb.prototype.update=function(){for(var e=V(this.b),t=0,n=e.length,r,i=f;t<n;t++)r=e[t],r.J()==this.ca.J()&&2==r.mode()&&(i=l);this.selected(i)};u.S=u.R.extend({i:function(e,t){u.R.call(this,e,t);1>=this.I.length&&this.C()}});u.S.prototype.ta=function(){var e=[],t;e.push(new u.bb(this.b,{kind:this.A}));for(var n=0;n<V(this.b).length;n++)t=V(this.b)[n],t.J()===this.A&&e.push(new u.Y(this.b,{track:t}));return e};u.Da=u.S.extend({i:function(e,t,n){u.S.call(this,e,t,n);this.a.setAttribute("aria-label","Captions Menu")}});u.Da.prototype.A="captions";u.Da.prototype.qa="Captions";u.Da.prototype.className="vjs-captions-button";u.Ha=u.S.extend({i:function(e,t,n){u.S.call(this,e,t,n);this.a.setAttribute("aria-label","Subtitles Menu")}});u.Ha.prototype.A="subtitles";u.Ha.prototype.qa="Subtitles";u.Ha.prototype.className="vjs-subtitles-button";u.Ea=u.S.extend({i:function(e,t,n){u.S.call(this,e,t,n);this.a.setAttribute("aria-label","Chapters Menu")}});t=u.Ea.prototype;t.A="chapters";t.qa="Chapters";t.className="vjs-chapters-button";t.ta=function(){for(var e=[],t,n=0;n<V(this.b).length;n++)t=V(this.b)[n],t.J()===this.A&&e.push(new u.Y(this.b,{track:t}));return e};t.Ka=function(){for(var e=V(this.b),t=0,n=e.length,r,i,s=this.I=[];t<n;t++)if(r=e[t],r.J()==this.A&&r.ub()){if(2>r.readyState()){this.Id=r;r.d("loaded",u.bind(this,this.Ka));return}i=r;break}e=this.wa=new u.ma(this.b);e.a.appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.$(this.A),zd:-1}));if(i){r=i.fa;for(var o,t=0,n=r.length;t<n;t++)o=r[t],o=new u.Xa(this.b,{track:i,cue:o}),s.push(o),e.Z(o)}0<this.I.length&&this.show();return e};u.Xa=u.N.extend({i:function(e,t){var n=this.ca=t.track,r=this.cue=t.cue,i=e.currentTime();t.label=r.text;t.selected=r.startTime<=i&&i<r.va;u.N.call(this,e,t);n.d("cuechange",u.bind(this,this.update))}});u.Xa.prototype.p=function(){u.N.prototype.p.call(this);this.b.currentTime(this.cue.startTime);this.update(this.cue.startTime)};u.Xa.prototype.update=function(){var e=this.cue,t=this.b.currentTime();this.selected(e.startTime<=t&&t<e.va)};u.k.B(u.Fa.prototype.g.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)u.JSON=window.JSON;else{u.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;u.JSON.parse=function(a,c){function d(e,t){var n,r,i=e[t];if(i&&"object"===typeof i)for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=d(i,n),r!==b?i[n]=r:delete i[n]);return c.call(e,t,i)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")}}u.fc=function(){var e,t,n=document.getElementsByTagName("video");if(n&&0<n.length)for(var r=0,i=n.length;r<i;r++)if((t=n[r])&&t.getAttribute)t.player===b&&(e=t.getAttribute("data-setup"),e!==h&&(e=u.JSON.parse(e||"{}"),v(t,e)));else{u.kb();break}else u.Ec||u.kb()};u.kb=function(){setTimeout(u.fc,1)};"complete"===document.readyState?u.Ec=f:u.U(window,"load",function(){u.Ec=f});u.kb();u.od=function(e,t){u.s.prototype[e]=t};var ga=this;ga.Ed=f;$("videojs",u);$("_V_",u);$("videojs.options",u.options);$("videojs.players",u.xa);$("videojs.TOUCH_ENABLED",u.ac);$("videojs.cache",u.ra);$("videojs.Component",u.c);u.c.prototype.player=u.c.prototype.K;u.c.prototype.dispose=u.c.prototype.D;u.c.prototype.createEl=u.c.prototype.e;u.c.prototype.el=u.c.prototype.w;u.c.prototype.addChild=u.c.prototype.Z;u.c.prototype.children=u.c.prototype.children;u.c.prototype.on=u.c.prototype.d;u.c.prototype.off=u.c.prototype.o;u.c.prototype.one=u.c.prototype.U;u.c.prototype.trigger=u.c.prototype.j;u.c.prototype.triggerReady=u.c.prototype.Ua;u.c.prototype.show=u.c.prototype.show;u.c.prototype.hide=u.c.prototype.C;u.c.prototype.width=u.c.prototype.width;u.c.prototype.height=u.c.prototype.height;u.c.prototype.dimensions=u.c.prototype.Xc;u.c.prototype.ready=u.c.prototype.L;u.c.prototype.addClass=u.c.prototype.n;u.c.prototype.removeClass=u.c.prototype.u;$("videojs.Player",u.s);u.s.prototype.dispose=u.s.prototype.D;u.s.prototype.requestFullScreen=u.s.prototype.ya;u.s.prototype.cancelFullScreen=u.s.prototype.ob;u.s.prototype.bufferedPercent=u.s.prototype.Ja;u.s.prototype.usingNativeControls=u.s.prototype.Rb;u.s.prototype.reportUserActivity=u.s.prototype.Mb;u.s.prototype.userActive=u.s.prototype.ja;$("videojs.MediaLoader",u.Pc);$("videojs.TextTrackDisplay",u.bc);$("videojs.ControlBar",u.Fa);$("videojs.Button",u.q);$("videojs.PlayToggle",u.Yb);$("videojs.FullscreenToggle",u.Ga);$("videojs.BigPlayButton",u.Wa);$("videojs.LoadingSpinner",u.Wb);$("videojs.CurrentTimeDisplay",u.Ya);$("videojs.DurationDisplay",u.Za);$("videojs.TimeDivider",u.cc);$("videojs.RemainingTimeDisplay",u.fb);$("videojs.Slider",u.O);$("videojs.ProgressControl",u.eb);$("videojs.SeekBar",u.Zb);$("videojs.LoadProgressBar",u.ab);$("videojs.PlayProgressBar",u.Xb);$("videojs.SeekHandle",u.gb);$("videojs.VolumeControl",u.ib);$("videojs.VolumeBar",u.hb);$("videojs.VolumeLevel",u.dc);$("videojs.VolumeMenuButton",u.oa);$("videojs.VolumeHandle",u.jb);$("videojs.MuteToggle",u.da);$("videojs.PosterImage",u.cb);$("videojs.Menu",u.ma);$("videojs.MenuItem",u.N);$("videojs.MenuButton",u.R);u.R.prototype.createItems=u.R.prototype.ta;u.S.prototype.createItems=u.S.prototype.ta;u.Ea.prototype.createItems=u.Ea.prototype.ta;$("videojs.SubtitlesButton",u.Ha);$("videojs.CaptionsButton",u.Da);$("videojs.ChaptersButton",u.Ea);$("videojs.MediaTechController",u.r);u.r.prototype.features=u.r.prototype.m;u.r.prototype.m.volumeControl=u.r.prototype.m.Dc;u.r.prototype.m.fullscreenResize=u.r.prototype.m.Jd;u.r.prototype.m.progressEvents=u.r.prototype.m.Nd;u.r.prototype.m.timeupdateEvents=u.r.prototype.m.Sd;$("videojs.Html5",u.l);u.l.Events=u.l.$a;u.l.isSupported=u.l.isSupported;u.l.canPlaySource=u.l.mb;u.l.prototype.setCurrentTime=u.l.prototype.sd;u.l.prototype.setVolume=u.l.prototype.xd;u.l.prototype.setMuted=u.l.prototype.vd;u.l.prototype.setPreload=u.l.prototype.wd;u.l.prototype.setAutoplay=u.l.prototype.rd;u.l.prototype.setLoop=u.l.prototype.ud;$("videojs.Flash",u.f);u.f.isSupported=u.f.isSupported;u.f.canPlaySource=u.f.mb;u.f.onReady=u.f.onReady;$("videojs.TextTrack",u.X);u.X.prototype.label=u.X.prototype.label;$("videojs.CaptionsTrack",u.Ub);$("videojs.SubtitlesTrack",u.$b);$("videojs.ChaptersTrack",u.Vb);$("videojs.autoSetup",u.fc);$("videojs.plugin",u.od);$("videojs.createTimeRange",u.tb)})();(function(){var e=this;var t=e.Backbone;var n=[];var r=n.push;var i=n.slice;var s=n.splice;var o;if(typeof exports!=="undefined"){o=exports}else{o=e.Backbone={}}o.VERSION="1.0.0";var u=e._;if(!u&&typeof require!=="undefined")u=require("underscore");o.$=e.jQuery||e.Zepto||e.ender||e.$;o.noConflict=function(){e.Backbone=t;return this};o.emulateHTTP=false;o.emulateJSON=false;var a=o.Events={on:function(e,t,n){if(!l(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var r=this._events[e]||(this._events[e]=[]);r.push({callback:t,context:n,ctx:n||this});return this},once:function(e,t,n){if(!l(this,"once",e,[t,n])||!t)return this;var r=this;var i=u.once(function(){r.off(e,i);t.apply(this,arguments)});i._callback=t;return this.on(e,i,n)},off:function(e,t,n){var r,i,s,o,a,f,c,h;if(!this._events||!l(this,"off",e,[t,n]))return this;if(!e&&!t&&!n){this._events={};return this}o=e?[e]:u.keys(this._events);for(a=0,f=o.length;a<f;a++){e=o[a];if(s=this._events[e]){this._events[e]=r=[];if(t||n){for(c=0,h=s.length;c<h;c++){i=s[c];if(t&&t!==i.callback&&t!==i.callback._callback||n&&n!==i.context){r.push(i)}}}if(!r.length)delete this._events[e]}}return this},trigger:function(e){if(!this._events)return this;var t=i.call(arguments,1);if(!l(this,"trigger",e,t))return this;var n=this._events[e];var r=this._events.all;if(n)c(n,t);if(r)c(r,arguments);return this},stopListening:function(e,t,n){var r=this._listeners;if(!r)return this;var i=!t&&!n;if(typeof t==="object")n=this;if(e)(r={})[e._listenerId]=e;for(var s in r){r[s].off(t,n,this);if(i)delete this._listeners[s]}return this}};var f=/\s+/;var l=function(e,t,n,r){if(!n)return true;if(typeof n==="object"){for(var i in n){e[t].apply(e,[i,n[i]].concat(r))}return false}if(f.test(n)){var s=n.split(f);for(var o=0,u=s.length;o<u;o++){e[t].apply(e,[s[o]].concat(r))}return false}return true};var c=function(e,t){var n,r=-1,i=e.length,s=t[0],o=t[1],u=t[2];switch(t.length){case 0:while(++r<i)(n=e[r]).callback.call(n.ctx);return;case 1:while(++r<i)(n=e[r]).callback.call(n.ctx,s);return;case 2:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o);return;case 3:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o,u);return;default:while(++r<i)(n=e[r]).callback.apply(n.ctx,t)}};var h={listenTo:"on",listenToOnce:"once"};u.each(h,function(e,t){a[t]=function(t,n,r){var i=this._listeners||(this._listeners={});var s=t._listenerId||(t._listenerId=u.uniqueId("l"));i[s]=t;if(typeof n==="object")r=this;t[e](n,r,this);return this}});a.bind=a.on;a.unbind=a.off;u.extend(o,a);var p=o.Model=function(e,t){var n;var r=e||{};t||(t={});this.cid=u.uniqueId("c");this.attributes={};u.extend(this,u.pick(t,d));if(t.parse)r=this.parse(r,t)||{};if(n=u.result(this,"defaults")){r=u.defaults({},r,n)}this.set(r,t);this.changed={};this.initialize.apply(this,arguments)};var d=["url","urlRoot","collection"];u.extend(p.prototype,a,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return u.clone(this.attributes)},sync:function(){return o.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return u.escape(this.get(e))},has:function(e){return this.get(e)!=null},set:function(e,t,n){var r,i,s,o,a,f,l,c;if(e==null)return this;if(typeof e==="object"){i=e;n=t}else{(i={})[e]=t}n||(n={});if(!this._validate(i,n))return false;s=n.unset;a=n.silent;o=[];f=this._changing;this._changing=true;if(!f){this._previousAttributes=u.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in i)this.id=i[this.idAttribute];for(r in i){t=i[r];if(!u.isEqual(c[r],t))o.push(r);if(!u.isEqual(l[r],t)){this.changed[r]=t}else{delete this.changed[r]}s?delete c[r]:c[r]=t}if(!a){if(o.length)this._pending=true;for(var h=0,p=o.length;h<p;h++){this.trigger("change:"+o[h],this,c[o[h]],n)}}if(f)return this;if(!a){while(this._pending){this._pending=false;this.trigger("change",this,n)}}this._pending=false;this._changing=false;return this},unset:function(e,t){return this.set(e,void 0,u.extend({},t,{unset:true}))},clear:function(e){var t={};for(var n in this.attributes)t[n]=void 0;return this.set(t,u.extend({},e,{unset:true}))},hasChanged:function(e){if(e==null)return!u.isEmpty(this.changed);return u.has(this.changed,e)},changedAttributes:function(e){if(!e)return this.hasChanged()?u.clone(this.changed):false;var t,n=false;var r=this._changing?this._previousAttributes:this.attributes;for(var i in e){if(u.isEqual(r[i],t=e[i]))continue;(n||(n={}))[i]=t}return n},previous:function(e){if(e==null||!this._previousAttributes)return null;return this._previousAttributes[e]},previousAttributes:function(){return u.clone(this._previousAttributes)},fetch:function(e){e=e?u.clone(e):{};if(e.parse===void 0)e.parse=true;var t=this;var n=e.success;e.success=function(r){if(!t.set(t.parse(r,e),e))return false;if(n)n(t,r,e);t.trigger("sync",t,r,e)};j(this,e);return this.sync("read",this,e)},save:function(e,t,n){var r,i,s,o=this.attributes;if(e==null||typeof e==="object"){r=e;n=t}else{(r={})[e]=t}if(r&&(!n||!n.wait)&&!this.set(r,n))return false;n=u.extend({validate:true},n);if(!this._validate(r,n))return false;if(r&&n.wait){this.attributes=u.extend({},o,r)}if(n.parse===void 0)n.parse=true;var a=this;var f=n.success;n.success=function(e){a.attributes=o;var t=a.parse(e,n);if(n.wait)t=u.extend(r||{},t);if(u.isObject(t)&&!a.set(t,n)){return false}if(f)f(a,e,n);a.trigger("sync",a,e,n)};j(this,n);i=this.isNew()?"create":n.patch?"patch":"update";if(i==="patch")n.attrs=r;s=this.sync(i,this,n);if(r&&n.wait)this.attributes=o;return s},destroy:function(e){e=e?u.clone(e):{};var t=this;var n=e.success;var r=function(){t.trigger("destroy",t,t.collection,e)};e.success=function(i){if(e.wait||t.isNew())r();if(n)n(t,i,e);if(!t.isNew())t.trigger("sync",t,i,e)};if(this.isNew()){e.success();return false}j(this,e);var i=this.sync("delete",this,e);if(!e.wait)r();return i},url:function(){var e=u.result(this,"urlRoot")||u.result(this.collection,"url")||B();if(this.isNew())return e;return e+(e.charAt(e.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(e){return this._validate({},u.extend(e||{},{validate:true}))},_validate:function(e,t){if(!t.validate||!this.validate)return true;e=u.extend({},this.attributes,e);var n=this.validationError=this.validate(e,t)||null;if(!n)return true;this.trigger("invalid",this,n,u.extend(t||{},{validationError:n}));return false}});var v=["keys","values","pairs","invert","pick","omit"];u.each(v,function(e){p.prototype[e]=function(){var t=i.call(arguments);t.unshift(this.attributes);return u[e].apply(u,t)}});var m=o.Collection=function(e,t){t||(t={});if(t.url)this.url=t.url;if(t.model)this.model=t.model;if(t.comparator!==void 0)this.comparator=t.comparator;this._reset();this.initialize.apply(this,arguments);if(e)this.reset(e,u.extend({silent:true},t))};var g={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};u.extend(m.prototype,a,{model:p,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return o.sync.apply(this,arguments)},add:function(e,t){return this.set(e,u.defaults(t||{},y))},remove:function(e,t){e=u.isArray(e)?e.slice():[e];t||(t={});var n,r,i,s;for(n=0,r=e.length;n<r;n++){s=this.get(e[n]);if(!s)continue;delete this._byId[s.id];delete this._byId[s.cid];i=this.indexOf(s);this.models.splice(i,1);this.length--;if(!t.silent){t.index=i;s.trigger("remove",s,this,t)}this._removeReference(s)}return this},set:function(e,t){t=u.defaults(t||{},g);if(t.parse)e=this.parse(e,t);if(!u.isArray(e))e=e?[e]:[];var n,i,o,a,f,l;var c=t.at;var h=this.comparator&&c==null&&t.sort!==false;var p=u.isString(this.comparator)?this.comparator:null;var d=[],v=[],m={};for(n=0,i=e.length;n<i;n++){if(!(o=this._prepareModel(e[n],t)))continue;if(f=this.get(o)){if(t.remove)m[f.cid]=true;if(t.merge){f.set(o.attributes,t);if(h&&!l&&f.hasChanged(p))l=true}}else if(t.add){d.push(o);o.on("all",this._onModelEvent,this);this._byId[o.cid]=o;if(o.id!=null)this._byId[o.id]=o}}if(t.remove){for(n=0,i=this.length;n<i;++n){if(!m[(o=this.models[n]).cid])v.push(o)}if(v.length)this.remove(v,t)}if(d.length){if(h)l=true;this.length+=d.length;if(c!=null){s.apply(this.models,[c,0].concat(d))}else{r.apply(this.models,d)}}if(l)this.sort({silent:true});if(t.silent)return this;for(n=0,i=d.length;n<i;n++){(o=d[n]).trigger("add",o,this,t)}if(l)this.trigger("sort",this,t);return this},reset:function(e,t){t||(t={});for(var n=0,r=this.models.length;n<r;n++){this._removeReference(this.models[n])}t.previousModels=this.models;this._reset();this.add(e,u.extend({silent:true},t));if(!t.silent)this.trigger("reset",this,t);return this},push:function(e,t){e=this._prepareModel(e,t);this.add(e,u.extend({at:this.length},t));return e},pop:function(e){var t=this.at(this.length-1);this.remove(t,e);return t},unshift:function(e,t){e=this._prepareModel(e,t);this.add(e,u.extend({at:0},t));return e},shift:function(e){var t=this.at(0);this.remove(t,e);return t},slice:function(e,t){return this.models.slice(e,t)},get:function(e){if(e==null)return void 0;return this._byId[e.id!=null?e.id:e.cid||e]},at:function(e){return this.models[e]},where:function(e,t){if(u.isEmpty(e))return t?void 0:[];return this[t?"find":"filter"](function(t){for(var n in e){if(e[n]!==t.get(n))return false}return true})},findWhere:function(e){return this.where(e,true)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");e||(e={});if(u.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(u.bind(this.comparator,this))}if(!e.silent)this.trigger("sort",this,e);return this},sortedIndex:function(e,t,n){t||(t=this.comparator);var r=u.isFunction(t)?t:function(e){return e.get(t)};return u.sortedIndex(this.models,e,r,n)},pluck:function(e){return u.invoke(this.models,"get",e)},fetch:function(e){e=e?u.clone(e):{};if(e.parse===void 0)e.parse=true;var t=e.success;var n=this;e.success=function(r){var i=e.reset?"reset":"set";n[i](r,e);if(t)t(n,r,e);n.trigger("sync",n,r,e)};j(this,e);return this.sync("read",this,e)},create:function(e,t){t=t?u.clone(t):{};if(!(e=this._prepareModel(e,t)))return false;if(!t.wait)this.add(e,t);var n=this;var r=t.success;t.success=function(i){if(t.wait)n.add(e,t);if(r)r(e,i,t)};e.save(null,t);return e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(e,t){if(e instanceof p){if(!e.collection)e.collection=this;return e}t||(t={});t.collection=this;var n=new this.model(e,t);if(!n._validate(e,t)){this.trigger("invalid",this,e,t);return false}return n},_removeReference:function(e){if(this===e.collection)delete e.collection;e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){if((e==="add"||e==="remove")&&n!==this)return;if(e==="destroy")this.remove(t,r);if(t&&e==="change:"+t.idAttribute){delete this._byId[t.previous(t.idAttribute)];if(t.id!=null)this._byId[t.id]=t}this.trigger.apply(this,arguments)}});var b=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];u.each(b,function(e){m.prototype[e]=function(){var t=i.call(arguments);t.unshift(this.models);return u[e].apply(u,t)}});var w=["groupBy","countBy","sortBy"];u.each(w,function(e){m.prototype[e]=function(t,n){var r=u.isFunction(t)?t:function(e){return e.get(t)};return u[e](this.models,r,n)}});var E=o.View=function(e){this.cid=u.uniqueId("view");this._configure(e||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var S=/^(\S+)\s*(.*)$/;var x=["model","collection","el","id","attributes","className","tagName","events"];u.extend(E.prototype,a,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(e,t){if(this.$el)this.undelegateEvents();this.$el=e instanceof o.$?e:o.$(e);this.el=this.$el[0];if(t!==false)this.delegateEvents();return this},delegateEvents:function(e){if(!(e||(e=u.result(this,"events"))))return this;this.undelegateEvents();for(var t in e){var n=e[t];if(!u.isFunction(n))n=this[e[t]];if(!n)continue;var r=t.match(S);var i=r[1],s=r[2];n=u.bind(n,this);i+=".delegateEvents"+this.cid;if(s===""){this.$el.on(i,n)}else{this.$el.on(i,s,n)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(e){if(this.options)e=u.extend({},u.result(this,"options"),e);u.extend(this,u.pick(e,x));this.options=e},_ensureElement:function(){if(!this.el){var e=u.extend({},u.result(this,"attributes"));if(this.id)e.id=u.result(this,"id");if(this.className)e["class"]=u.result(this,"className");var t=o.$("<"+u.result(this,"tagName")+">").attr(e);this.setElement(t,false)}else{this.setElement(u.result(this,"el"),false)}}});o.sync=function(e,t,n){var r=T[e];u.defaults(n||(n={}),{emulateHTTP:o.emulateHTTP,emulateJSON:o.emulateJSON});var i={type:r,dataType:"json"};if(!n.url){i.url=u.result(t,"url")||B()}if(n.data==null&&t&&(e==="create"||e==="update"||e==="patch")){i.contentType="application/json";i.data=JSON.stringify(n.attrs||t.toJSON(n))}if(n.emulateJSON){i.contentType="application/x-www-form-urlencoded";i.data=i.data?{model:i.data}:{}}if(n.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){i.type="POST";if(n.emulateJSON)i.data._method=r;var s=n.beforeSend;n.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",r);if(s)return s.apply(this,arguments)}}if(i.type!=="GET"&&!n.emulateJSON){i.processData=false}if(i.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){i.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var a=n.xhr=o.ajax(u.extend(i,n));t.trigger("request",t,a,n);return a};var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};o.ajax=function(){return o.$.ajax.apply(o.$,arguments)};var N=o.Router=function(e){e||(e={});if(e.routes)this.routes=e.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var C=/\((.*?)\)/g;var k=/(\(\?)?:\w+/g;var L=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;u.extend(N.prototype,a,{initialize:function(){},route:function(e,t,n){if(!u.isRegExp(e))e=this._routeToRegExp(e);if(u.isFunction(t)){n=t;t=""}if(!n)n=this[t];var r=this;o.history.route(e,function(i){var s=r._extractParameters(e,i);n&&n.apply(r,s);r.trigger.apply(r,["route:"+t].concat(s));r.trigger("route",t,s);o.history.trigger("route",r,t,s)});return this},navigate:function(e,t){o.history.navigate(e,t);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=u.result(this,"routes");var e,t=u.keys(this.routes);while((e=t.pop())!=null){this.route(e,this.routes[e])}},_routeToRegExp:function(e){e=e.replace(A,"\\$&").replace(C,"(?:$1)?").replace(k,function(e,t){return t?e:"([^/]+)"}).replace(L,"(.*?)");return new RegExp("^"+e+"$")},_extractParameters:function(e,t){var n=e.exec(t).slice(1);return u.map(n,function(e){return e?decodeURIComponent(e):null})}});var O=o.History=function(){this.handlers=[];u.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var M=/^[#\/]|\s+$/g;var _=/^\/+|\/+$/g;var D=/msie [\w.]+/;var P=/\/$/;O.started=false;u.extend(O.prototype,a,{interval:50,getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},getFragment:function(e,t){if(e==null){if(this._hasPushState||!this._wantsHashChange||t){e=this.location.pathname;var n=this.root.replace(P,"");if(!e.indexOf(n))e=e.substr(n.length)}else{e=this.getHash()}}return e.replace(M,"")},start:function(e){if(O.started)throw new Error("Backbone.history has already been started");O.started=true;this.options=u.extend({},{root:"/"},this.options,e);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var t=this.getFragment();var n=document.documentMode;var r=D.exec(navigator.userAgent.toLowerCase())&&(!n||n<=7);this.root=("/"+this.root+"/").replace(_,"/");if(r&&this._wantsHashChange){this.iframe=o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(t)}if(this._hasPushState){o.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){o.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=t;var i=this.location;var s=i.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!s){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&s&&i.hash){this.fragment=this.getHash().replace(M,"");this.history.replaceState({},document.title,this.root+this.fragment+i.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){o.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);O.started=false},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();if(t===this.fragment&&this.iframe){t=this.getFragment(this.getHash(this.iframe))}if(t===this.fragment)return false;if(this.iframe)this.navigate(t);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(e){var t=this.fragment=this.getFragment(e);var n=u.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}});return n},navigate:function(e,t){if(!O.started)return false;if(!t||t===true)t={trigger:t};e=this.getFragment(e||"");if(this.fragment===e)return;this.fragment=e;var n=this.root+e;if(this._hasPushState){this.history[t.replace?"replaceState":"pushState"]({},document.title,n)}else if(this._wantsHashChange){this._updateHash(this.location,e,t.replace);if(this.iframe&&e!==this.getFragment(this.getHash(this.iframe))){if(!t.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,e,t.replace)}}else{return this.location.assign(n)}if(t.trigger)this.loadUrl(e)},_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"");e.replace(r+"#"+t)}else{e.hash="#"+t}}});o.history=new O;var H=function(e,t){var n=this;var r;if(e&&u.has(e,"constructor")){r=e.constructor}else{r=function(){return n.apply(this,arguments)}}u.extend(r,n,t);var i=function(){this.constructor=r};i.prototype=n.prototype;r.prototype=new i;if(e)u.extend(r.prototype,e);r.__super__=n.prototype;return r};p.extend=m.extend=N.extend=E.extend=O.extend=H;var B=function(){throw new Error('A "url" property or function must be specified')};var j=function(e,t){var n=t.error;t.error=function(r){if(n)n(e,r,t);e.trigger("error",e,r,t)}}}).call(this);Backbone.Wreqr=function(e,t,n){"use strict";var r={};r.Handlers=function(e,t){"use strict";var n=function(e){this.options=e;this._wreqrHandlers={};if(t.isFunction(this.initialize)){this.initialize(e)}};n.extend=e.Model.extend;t.extend(n.prototype,e.Events,{setHandlers:function(e){t.each(e,function(e,n){var r=null;if(t.isObject(e)&&!t.isFunction(e)){r=e.context;e=e.callback}this.setHandler(n,e,r)},this)},setHandler:function(e,t,n){var r={callback:t,context:n};this._wreqrHandlers[e]=r;this.trigger("handler:add",e,t,n)},hasHandler:function(e){return!!this._wreqrHandlers[e]},getHandler:function(e){var t=this._wreqrHandlers[e];if(!t){throw new Error("Handler not found for '"+e+"'")}return function(){var e=Array.prototype.slice.apply(arguments);return t.callback.apply(t.context,e)}},removeHandler:function(e){delete this._wreqrHandlers[e]},removeAllHandlers:function(){this._wreqrHandlers={}}});return n}(e,n);r.CommandStorage=function(){"use strict";var t=function(e){this.options=e;this._commands={};if(n.isFunction(this.initialize)){this.initialize(e)}};n.extend(t.prototype,e.Events,{getCommands:function(e){var t=this._commands[e];if(!t){t={command:e,instances:[]};this._commands[e]=t}return t},addCommand:function(e,t){var n=this.getCommands(e);n.instances.push(t)},clearCommands:function(e){var t=this.getCommands(e);t.instances=[]}});return t}();r.Commands=function(e){"use strict";return e.Handlers.extend({storageType:e.CommandStorage,constructor:function(t){this.options=t||{};this._initializeStorage(this.options);this.on("handler:add",this._executeCommands,this);var n=Array.prototype.slice.call(arguments);e.Handlers.prototype.constructor.apply(this,n)},execute:function(e,t){e=arguments[0];t=Array.prototype.slice.call(arguments,1);if(this.hasHandler(e)){this.getHandler(e).apply(this,t)}else{this.storage.addCommand(e,t)}},_executeCommands:function(e,t,r){var i=this.storage.getCommands(e);n.each(i.instances,function(e){t.apply(r,e)});this.storage.clearCommands(e)},_initializeStorage:function(e){var t;var r=e.storageType||this.storageType;if(n.isFunction(r)){t=new r}else{t=r}this.storage=t}})}(r);r.RequestResponse=function(e){"use strict";return e.Handlers.extend({request:function(){var e=arguments[0];var t=Array.prototype.slice.call(arguments,1);return this.getHandler(e).apply(this,t)}})}(r);r.EventAggregator=function(e,t){"use strict";var n=function(){};n.extend=e.Model.extend;t.extend(n.prototype,e.Events);return n}(e,n);return r}(Backbone,Backbone.Marionette,_);(function(e,t,n){var r=e["jQuery"]||e["Zepto"]||e["ender"]||e["elo"];if(typeof module!="undefined"&&module["exports"]){module["exports"]=n(r)}else{e[t]=n(r)}})(this,"Response",function(e){function V(e){throw new TypeError(e?i+"."+e:i)}function $(e){return typeof e=="number"&&e===e}function J(e){return typeof e=="string"?G(e.split(" ")):g(e)?G(e):[]}function K(e,t,n){if(null==e){return e}var r=0,i=e.length;while(r<i){t.call(n||e[r],e[r],r++,e)}return e}function Q(e,t,n){var r=[],i=e.length,s=0,o;t=t||"";n=n||"";while(s<i){o=e[s++];null==o||r.push(t+o+n)}return r}function G(e,t,n){var r,i=0,s=0,o,u=[],a,f=typeof t=="function";if(!e){return u}n=(a=true===n)?null:n;for(r=e.length;s<r;s++){o=e[s];a===!(f?t.call(n,o,s,e):t?typeof o===t:o)&&(u[i++]=o)}return u}function Y(e,t){var n,r;if(!e||!t){return e}if(typeof t!="function"&&$(r=t.length)){for(n=0;n<r;n++){void 0===t[n]||(e[n]=t[n])}e.length>n||(e.length=n)}else{for(n in t){p.call(t,n)&&void 0!==t[n]&&(e[n]=t[n])}}return e}function Z(e,t,n){if(null==e){return e}if(typeof e=="object"&&!e.nodeType&&$(e.length)){K(e,t,n)}else{t.call(n||e,e)}return e}function et(e){return function(t,n){var r=e();t=r>=(t||0);return n?t&&r<=n:t}}function tt(e){var t=u.devicePixelRatio;if(null==e){return t||(tt(2)?2:tt(1.5)?1.5:tt(1)?1:0)}if(!isFinite(e)){return false}if(t&&t>0){return t>=e}e="only all and (min--moz-device-pixel-ratio:"+e+")";if(z(e).matches){return true}return!!z(e.replace("-moz-","")).matches}function nt(e){return e.replace(F,"$1").replace(j,function(e,t){return t.toUpperCase()})}function rt(e){return"data-"+(e?e.replace(F,"$1").replace(B,"$1-$2").toLowerCase():e)}function it(e){var t;return!e||typeof e!="string"?e:"true"===e?true:"false"===e?false:"undefined"===e?t:"null"===e?null:(t=parseFloat(e))===+t?t:e}function st(e){return!e?false:e.nodeType===1?e:e[0]&&e[0].nodeType===1?e[0]:false}function ot(e,t){var n=arguments.length,r=st(this),i={},s=false,o;if(n){if(g(e)){s=true;e=e[0]}if(typeof e==="string"){e=rt(e);if(1===n){i=r.getAttribute(e);return s?it(i):i}if(this===r||2>(o=this.length||1)){r.setAttribute(e,t)}else{while(o--){if(o in this){ot.apply(this[o],arguments)}}}}else if(e instanceof Object){for(o in e){e.hasOwnProperty(o)&&ot.call(this,o,e[o])}}return this}if(r.dataset&&DOMStringMap){return r.dataset}K(r.attributes,function(e){if(e&&(o=String(e.name).match(F))){i[nt(o[1])]=e.value}});return i}function ut(e){if(this&&typeof e==="string"){e=J(e);Z(this,function(t){K(e,function(e){if(e){t.removeAttribute(rt(e))}})})}return this}function at(e,t,n){return ot.apply(e,d.call(arguments,1))}function ft(e,t){return ut.call(e,t)}function lt(e){var t,n=[],r=0,i=e.length;while(r<i){(t=e[r++])&&n.push("["+rt(t.replace(H,"").replace(".","\\."))+"]")}return n.join()}function ct(t){return e(lt(J(t)))}function ht(){return window.pageXOffset||f.scrollLeft}function pt(){return window.pageYOffset||f.scrollTop}function dt(e,t){var n=e.getBoundingClientRect?e.getBoundingClientRect():{};t=typeof t=="number"?t||0:0;return{top:(n.top||0)-t,left:(n.left||0)-t,bottom:(n.bottom||0)+t,right:(n.right||0)+t}}function vt(e,t){var n=dt(st(e),t);return!!n&&n.right>=0&&n.left<=W()}function mt(e,t){var n=dt(st(e),t);return!!n&&n.bottom>=0&&n.top<=X()}function gt(e,t){var n=dt(st(e),t);return!!n&&n.bottom>=0&&n.top<=X()&&n.right>=0&&n.left<=W()}function yt(e){var t={img:1,input:1,source:3,embed:3,track:3,iframe:5,audio:5,video:5,script:5},n=t[e.nodeName.toLowerCase()]||-1;return 4>n?n:null!=e.getAttribute("src")?5:-5}function bt(e,t,r){var i;if(!e||null==t){V("store")}r=typeof r=="string"&&r;Z(e,function(e){if(r){i=e.getAttribute(r)}else if(0<yt(e)){i=e.getAttribute("src")}else{i=e.innerHTML}null==i?ft(e,t):at(e,t,i)});return n}function wt(e,t){var n=[];e&&t&&K(J(t),function(t,r){n.push(at(e,t))},e);return n}function Et(e,t){if(typeof e=="string"&&typeof t=="function"){T[e]=t;N[e]=1}return n}function St(e){c.on("resize",e);return n}function xt(e,t){var r,i,s=R.crossover;if(typeof e=="function"){r=t;t=e;e=r}i=e?""+e+s:s;c.on(i,t);return n}function Tt(e){Z(e,function(e){l(e);St(e)});return n}function Nt(e){Z(e,function(e){typeof e=="object"||V("create @args");var t=I(w).configure(e),n,r=t.verge,i=t.breakpoints,s=q("scroll"),o=q("resize");if(!i.length){return}n=i[0]||i[1]||false;l(function(){function u(){t.reset();K(t.$e,function(e,n){t[n].decideValue().updateDOM()}).trigger(e)}function a(){K(t.$e,function(e,n){if(gt(t[n].$e,r)){t[n].updateDOM()}})}var e=R.allLoaded,i=!!t.lazy;K(t.target().$e,function(e,n){t[n]=I(t).prepareData(e);if(!i||gt(t[n].$e,r)){t[n].updateDOM()}});if(t.dynamic&&(t.custom||n<O)){St(u,o)}if(!i){return}c.on(s,a);t.$e.one(e,function(){c.off(s,a)})})});return n}function Ct(e){if(r[i]===n){r[i]=s}if(typeof e=="function"){e.call(r,n)}return n}function kt(e,t,r){K(["inX","inY","inViewport"],function(i){(r||!t[i])&&(t[i]=function(t,r){return e(G(this,function(e){return!!e&&!r===n[i](e,t)}))})})}function Lt(e,t){if(typeof e=="function"&&e.fn){if(t||void 0===e.fn.dataset){e.fn.dataset=ot}if(t||void 0===e.fn.deletes){e.fn.deletes=ut}kt(e,e.fn,t)}return n}function At(t,n){t=arguments.length?t:e;return Lt(t,n)}if(typeof e!="function"){try{console.log("Response was unable to run due to missing dependency.")}catch(t){}}var n,r=this,i="Response",s=r[i],o="init"+i,u=window,a=document,f=a.documentElement,l=e.domReady||e,c=e(u),h=u.screen,p={}.hasOwnProperty,d=[].slice,v=[].concat,m=[].map,g=Array.isArray||function(e){return e instanceof Array},y=m?function(e,t,n){return m.call(e,t,n)}:function(e,t,n){var r,i=e.length,s=[];for(r=0;r<i;r++){r in e&&(s[r]=t.call(n,e[r],r,e))}return s},b={width:[0,320,481,641,961,1025,1281],height:[0,481],ratio:[1,1.5,2]},w,E,S,x={},T={},N={},C={all:[]},k=1,L=h.width,A=h.height,O=L>A?L:A,M=L+A-O,_=function(){return L},D=function(){return A},P=/[^a-z0-9_\-\.]/gi,H=/^[\W\s]+|[\W\s]+$|/g,B=/([a-z])([A-Z])/g,j=/-(.)/g,F=/^data-(.+)$/,I=Object.create||function(e){function t(){}t.prototype=e;return new t},q=function(e,t){t=t||i;return e.replace(H,"")+"."+t.replace(H,"")},R={allLoaded:q("allLoaded"),crossover:q("crossover")},U=u.matchMedia||u.msMatchMedia,z=U||function(){return{}},W=function(e,t,n){var r=t["clientWidth"],i=e["innerWidth"];return n&&r<i&&true===n("(min-width:"+i+"px)")["matches"]?function(){return e["innerWidth"]}:function(){return t["clientWidth"]}}(u,f,U),X=function(e,t,n){var r=t["clientHeight"],i=e["innerHeight"];return n&&r<i&&true===n("(min-height:"+i+"px)")["matches"]?function(){return e["innerHeight"]}:function(){return t["clientHeight"]}}(u,f,U);E=et(W);S=et(X);x.band=et(_);x.wave=et(D);w=function(){function r(e){return typeof e=="string"?e.toLowerCase().replace(P,""):""}var t=R.crossover,n=Math.min;return{$e:0,mode:0,breakpoints:null,prefix:null,prop:"width",keys:[],dynamic:null,custom:0,values:[],fn:0,verge:null,newValue:0,currValue:1,aka:null,lazy:null,i:0,uid:null,reset:function(){var e=this.breakpoints,n=e.length,r=0;while(!r&&n--){this.fn(e[n])&&(r=n)}if(r!==this.i){c.trigger(t).trigger(this.prop+t);this.i=r||0}return this},configure:function(e){Y(this,e);var t,i,s,o,u=true,a,f=this.prop;this.uid=k++;this.verge=isFinite(this.verge)?this.verge:n(O,500);this.fn=T[f]||V("create @fn");if(typeof this.dynamic!="boolean"){this.dynamic=!!("device"!==f.substring(0,6))}this.custom=N[f];i=this.prefix?G(y(J(this.prefix),r)):["min-"+f+"-"];s=1<i.length?i.slice(1):0;this.prefix=i[0];a=this.breakpoints;if(g(a)){K(a,function(e){if(!e&&e!==0){throw"invalid breakpoint"}u=u&&isFinite(e)});a=u?a.sort(function(e,t){return e-t}):a;a.length||V("create @breakpoints")}else{a=b[f]||b[f.split("-").pop()]||V("create @prop")}this.breakpoints=u?G(a,function(e){return e<=O}):a;this.keys=Q(this.breakpoints,this.prefix);this.aka=null;if(s){o=[];t=s.length;while(t--){o.push(Q(this.breakpoints,s[t]))}this.aka=o;this.keys=v.apply(this.keys,o)}C.all=C.all.concat(C[this.uid]=this.keys);return this},target:function(){this.$e=e(lt(C[this.uid]));bt(this.$e,o);this.keys.push(o);return this},decideValue:function(){var e=null,t=this.breakpoints,n=t.length,r=n;while(e==null&&r--){this.fn(t[r])&&(e=this.values[r])}this.newValue=typeof e==="string"?e:this.values[n];return this},prepareData:function(t){this.$e=e(t);this.mode=yt(t);this.values=wt(this.$e,this.keys);if(this.aka){var n=this.aka.length;while(n--){this.values=Y(this.values,wt(this.$e,this.aka[n]))}}return this.decideValue()},updateDOM:function(){if(this.currValue===this.newValue){return this}this.currValue=this.newValue;if(0<this.mode){this.$e[0].setAttribute("src",this.newValue)}else if(null==this.newValue){this.$e.empty&&this.$e.empty()}else{if(this.$e.html){this.$e.html(this.newValue)}else{this.$e.empty&&this.$e.empty();this.$e[0].innerHTML=this.newValue}}return this}}}();T["width"]=E;T["height"]=S;T["device-width"]=x.band;T["device-height"]=x.wave;T["device-pixel-ratio"]=tt;n={deviceMin:function(){return M},deviceMax:function(){return O},noConflict:Ct,chain:At,bridge:Lt,create:Nt,addTest:Et,datatize:rt,camelize:nt,render:it,store:bt,access:wt,target:ct,object:I,crossover:xt,action:Tt,resize:St,ready:l,affix:Q,sift:G,dpr:tt,deletes:ft,scrollX:ht,scrollY:pt,deviceW:_,deviceH:D,device:x,inX:vt,inY:mt,route:Z,merge:Y,media:z,wave:S,band:E,map:y,each:K,inViewport:gt,dataset:at,viewportH:X,viewportW:W};l(function(){var t,n=at(a.body,"responsejs");if(n){t=!!u.JSON&&JSON.parse;if(t){n=t(n)}else if(e.parseJSON){n=e.parseJSON(n)}n&&n.create&&Nt(n.create)}f.className=f.className.replace(/(^|\s)(no-)?responsejs(\s|$)/,"$1$3")+" responsejs "});return n});(function(){"use strict";var e=window.SectionScrollmation={};e.ImageScrollmation=Backbone.View.extend({initialize:function(e){this.ui={container:e.container||$(this.$el.data("scrollmation-container")),window:$(window)};this.isBackground=e.isBackground;this.appVent=new Backbone.Wreqr.RequestResponse;_.bindAll(this);this.$el.addClass("scrollmation");if(this.$el.find("[data-scrollmation-slides]").length===0){this.$el.wrapInner('<div class="scrollmation-slides" data-scrollmation-slides></div>')}this.ui.slidesContainer=this.$el.find("[data-scrollmation-slides]");this.ui.slidesContainer.sticky({container:this.ui.container,watchOn:window});this._prepareSlides();this.listen();this.running=false;if(this.isTabletDevice()){this.$el.addClass("tablet-only");this.$(".scrollmation-slides").addClass("hiding");this.$("div[data-only-for-tablet]").removeClass("hiding")}},isTabletDevice:function(){return/iPad/i.test(navigator.userAgent||navigator.vendor||window.opera)||/Android/i.test(navigator.userAgent||navigator.vendor||window.opera)&&!/Mobile/i.test(navigator.userAgent||navigator.vendor||window.opera)},listen:function(){this.listenTo(this.appVent,"scrollmation:slide:activate",this._toggleActivation);this.ui.window.on("resize scroll mousewheel",this.tick)},destroy:function(){this.ui.window.off("resize scroll mousewheel",this.tick);Backbone.View.prototype.destroy.apply(this,arguments)},_toggleActivation:function(e){if($.inArray(e,this.slides)!==-1){$.each(this.slides,function(t,n){if(n){if(e===n){n.activate()}else{n.deactivate()}}})}},tick:function(){if(!this.running){window.requestAnimationFrame(this._refresh)}this.running=true},_refresh:function(){this.ui.slidesContainer.height(window.innerHeight);var e=this.scrollPercentage=this.getScrollPercentage();var t=this.getSlideAtPercentage(e);if(t&&t!==this.activeSlide){this.appVent.trigger("scrollmation:slide:activate",t);this.activeSlide=t}this.running=false},getScrollPercentage:function(){var e=this.ui.window.scrollTop();var t=this.ui.window.height();var n=this.ui.container.innerHeight();var r=e-this.ui.container.offset().top;var i=r/Math.max(1,n-t);i=Math.max(0,i);i=Math.min(1,i);return i},getSlideAtPercentage:function(e){var t=1/this.slides.length;return _.find(this.slides,function(n,r){var i=(r+1)*t;return i>=e},this)},_prepareSlides:function(){this.prepareSlides();this.ui.window.resize()},prepareSlides:function(){this.slides=this.$("[data-scrollmation-slide]").map(this._makeSlide).get()},render:function(){this._refresh()},getContentRatio:function(){return this.$el.data("scrollmation-content-ratio")},_makeSlide:function(t,n){return new e.ImageSlide({el:n,isBackground:this.isBackground})}});e.ImageSlide=Backbone.View.extend({className:"scrollmation-slide",activeClass:"active",hasAutoscaled:false,initialize:function(e){this.$el.addClass(this.className);_.bindAll(this)},activate:function(){if(this.options.isBackground&&!this.hasAutoscaled){this._autoscale()}this.$el.addClass(this.activeClass)},deactivate:function(){this.$el.removeClass(this.activeClass)},_autoscale:function(){this.$el.autoscale({mode:"cover"});$(window).resize()}});$("[data-scrollmation]").each(function(){var t=$(this);new e.ImageScrollmation({el:t,isBackground:t.data("scrollmation")==="background"})})})();(function(e,t){"use strict";t.helpers.transitionEnd=function(){var e=document.createElement("bootstrap");var t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};var n;for(n in t){if(e.style[n]!==undefined){return t[n]}}}()})($,Shorthand);(function(){"use strict";$(function(){var e=false;var t=$(window);var n=function(){if(Modernizr.mq("only all")&&t.width()>1e3){var n=$(".scrollmation-two-column:not(.hide) .secondary-column").width();$(".story .scrollmation-two-column .secondary-column .scrollmation-slides").each(function(){$(this).css("width",n!==0?n:"")})}e=false};var r=function(){if(!e){window.requestAnimationFrame(n)}e=true};t.on("load",r);t.on("resize",r)})})();(function(e,t,n){"use strict";var r=function(t){return t.test(navigator.userAgent||navigator.vendor||e.opera)};var i=e.Device={isAndroid:function(){return r(/Android/i)},isBlackBerry:function(){return r(/BlackBerry/i)},isiOS:function(){return r(/iP(hone|od|ad)/i)},isOpera:function(){return r(/Opera M(obi|ini)/i)},isWindows:function(){return r(/IEMobile/i)},isMobile:function(){return i.isAndroid()||i.isBlackBerry()||i.isiOS()||i.isOpera()||i.isWindows()}}})(window,$);(function(e,t,n){"use strict";e(function(){if(t.isMobile()){e("#story-body .section-text-over-image").css("background-attachment","scroll")}else{e("video").show()}})})($,window.Device)}).call(this)
// (function () {
//     (function () {
//         var lastTime = 0;
//         var vendors = ["ms", "moz", "webkit", "o"];
//         for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
//             window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
//             window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"]
//         }
//         if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
//             var currTime = (new Date).getTime();
//             var timeToCall = Math.max(0, 16 - (currTime - lastTime));
//             var id = window.setTimeout(function () {
//                 callback(currTime + timeToCall)
//             }, timeToCall);
//             lastTime = currTime + timeToCall;
//             return id
//         };
//         if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
//             clearTimeout(id)
//         }
//     })();
//     (function (window) {
//         "use strict";
//         window.Shorthand = {
//             UI: {},
//             helpers: {},
//             Data: {}
//         }
//     })(window);
//     (function (window, undefined) {
//         var readyList, rootjQuery, core_strundefined = typeof undefined,
//             location = window.location,
//             document = window.document,
//             docElem = document.documentElement,
//             _jQuery = window.jQuery,
//             _$ = window.$,
//             class2type = {}, core_deletedIds = [],
//             core_version = "1.10.2",
//             core_concat = core_deletedIds.concat,
//             core_push = core_deletedIds.push,
//             core_slice = core_deletedIds.slice,
//             core_indexOf = core_deletedIds.indexOf,
//             core_toString = class2type.toString,
//             core_hasOwn = class2type.hasOwnProperty,
//             core_trim = core_version.trim,
//             jQuery = function (selector, context) {
//                 return new jQuery.fn.init(selector, context, rootjQuery)
//             }, core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
//             core_rnotwhite = /\S+/g,
//             rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
//             rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
//             rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
//             rvalidchars = /^[\],:{}\s]*$/,
//             rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
//             rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
//             rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
//             rmsPrefix = /^-ms-/,
//             rdashAlpha = /-([\da-z])/gi,
//             fcamelCase = function (all, letter) {
//                 return letter.toUpperCase()
//             }, completed = function (event) {
//                 if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
//                     detach();
//                     jQuery.ready()
//                 }
//             }, detach = function () {
//                 if (document.addEventListener) {
//                     document.removeEventListener("DOMContentLoaded", completed, false);
//                     window.removeEventListener("load", completed, false)
//                 } else {
//                     document.detachEvent("onreadystatechange", completed);
//                     window.detachEvent("onload", completed)
//                 }
//             };
//         jQuery.fn = jQuery.prototype = {
//             jquery: core_version,
//             constructor: jQuery,
//             init: function (selector, context, rootjQuery) {
//                 var match, elem;
//                 if (!selector) {
//                     return this
//                 }
//                 if (typeof selector === "string") {
//                     if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
//                         match = [null, selector, null]
//                     } else {
//                         match = rquickExpr.exec(selector)
//                     } if (match && (match[1] || !context)) {
//                         if (match[1]) {
//                             context = context instanceof jQuery ? context[0] : context;
//                             jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
//                             if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
//                                 for (match in context) {
//                                     if (jQuery.isFunction(this[match])) {
//                                         this[match](context[match])
//                                     } else {
//                                         this.attr(match, context[match])
//                                     }
//                                 }
//                             }
//                             return this
//                         } else {
//                             elem = document.getElementById(match[2]);
//                             if (elem && elem.parentNode) {
//                                 if (elem.id !== match[2]) {
//                                     return rootjQuery.find(selector)
//                                 }
//                                 this.length = 1;
//                                 this[0] = elem
//                             }
//                             this.context = document;
//                             this.selector = selector;
//                             return this
//                         }
//                     } else if (!context || context.jquery) {
//                         return (context || rootjQuery).find(selector)
//                     } else {
//                         return this.constructor(context).find(selector)
//                     }
//                 } else if (selector.nodeType) {
//                     this.context = this[0] = selector;
//                     this.length = 1;
//                     return this
//                 } else if (jQuery.isFunction(selector)) {
//                     return rootjQuery.ready(selector)
//                 }
//                 if (selector.selector !== undefined) {
//                     this.selector = selector.selector;
//                     this.context = selector.context
//                 }
//                 return jQuery.makeArray(selector, this)
//             },
//             selector: "",
//             length: 0,
//             toArray: function () {
//                 return core_slice.call(this)
//             },
//             get: function (num) {
//                 return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num]
//             },
//             pushStack: function (elems) {
//                 var ret = jQuery.merge(this.constructor(), elems);
//                 ret.prevObject = this;
//                 ret.context = this.context;
//                 return ret
//             },
//             each: function (callback, args) {
//                 return jQuery.each(this, callback, args)
//             },
//             ready: function (fn) {
//                 jQuery.ready.promise().done(fn);
//                 return this
//             },
//             slice: function () {
//                 return this.pushStack(core_slice.apply(this, arguments))
//             },
//             first: function () {
//                 return this.eq(0)
//             },
//             last: function () {
//                 return this.eq(-1)
//             },
//             eq: function (i) {
//                 var len = this.length,
//                     j = +i + (i < 0 ? len : 0);
//                 return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
//             },
//             map: function (callback) {
//                 return this.pushStack(jQuery.map(this, function (elem, i) {
//                     return callback.call(elem, i, elem)
//                 }))
//             },
//             end: function () {
//                 return this.prevObject || this.constructor(null)
//             },
//             push: core_push,
//             sort: [].sort,
//             splice: [].splice
//         };
//         jQuery.fn.init.prototype = jQuery.fn;
//         jQuery.extend = jQuery.fn.extend = function () {
//             var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1,
//                 length = arguments.length,
//                 deep = false;
//             if (typeof target === "boolean") {
//                 deep = target;
//                 target = arguments[1] || {};
//                 i = 2
//             }
//             if (typeof target !== "object" && !jQuery.isFunction(target)) {
//                 target = {}
//             }
//             if (length === i) {
//                 target = this;
//                 --i
//             }
//             for (; i < length; i++) {
//                 if ((options = arguments[i]) != null) {
//                     for (name in options) {
//                         src = target[name];
//                         copy = options[name];
//                         if (target === copy) {
//                             continue
//                         }
//                         if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
//                             if (copyIsArray) {
//                                 copyIsArray = false;
//                                 clone = src && jQuery.isArray(src) ? src : []
//                             } else {
//                                 clone = src && jQuery.isPlainObject(src) ? src : {}
//                             }
//                             target[name] = jQuery.extend(deep, clone, copy)
//                         } else if (copy !== undefined) {
//                             target[name] = copy
//                         }
//                     }
//                 }
//             }
//             return target
//         };
//         jQuery.extend({
//             expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
//             noConflict: function (deep) {
//                 if (window.$ === jQuery) {
//                     window.$ = _$
//                 }
//                 if (deep && window.jQuery === jQuery) {
//                     window.jQuery = _jQuery
//                 }
//                 return jQuery
//             },
//             isReady: false,
//             readyWait: 1,
//             holdReady: function (hold) {
//                 if (hold) {
//                     jQuery.readyWait++
//                 } else {
//                     jQuery.ready(true)
//                 }
//             },
//             ready: function (wait) {
//                 if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
//                     return
//                 }
//                 if (!document.body) {
//                     return setTimeout(jQuery.ready)
//                 }
//                 jQuery.isReady = true;
//                 if (wait !== true && --jQuery.readyWait > 0) {
//                     return
//                 }
//                 readyList.resolveWith(document, [jQuery]);
//                 if (jQuery.fn.trigger) {
//                     jQuery(document).trigger("ready").off("ready")
//                 }
//             },
//             isFunction: function (obj) {
//                 return jQuery.type(obj) === "function"
//             },
//             isArray: Array.isArray || function (obj) {
//                 return jQuery.type(obj) === "array"
//             },
//             isWindow: function (obj) {
//                 return obj != null && obj == obj.window
//             },
//             isNumeric: function (obj) {
//                 return !isNaN(parseFloat(obj)) && isFinite(obj)
//             },
//             type: function (obj) {
//                 if (obj == null) {
//                     return String(obj)
//                 }
//                 return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj
//             },
//             isPlainObject: function (obj) {
//                 var key;
//                 if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
//                     return false
//                 }
//                 try {
//                     if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
//                         return false
//                     }
//                 } catch (e) {
//                     return false
//                 }
//                 if (jQuery.support.ownLast) {
//                     for (key in obj) {
//                         return core_hasOwn.call(obj, key)
//                     }
//                 }
//                 for (key in obj) {}
//                 return key === undefined || core_hasOwn.call(obj, key)
//             },
//             isEmptyObject: function (obj) {
//                 var name;
//                 for (name in obj) {
//                     return false
//                 }
//                 return true
//             },
//             error: function (msg) {
//                 throw new Error(msg)
//             },
//             parseHTML: function (data, context, keepScripts) {
//                 if (!data || typeof data !== "string") {
//                     return null
//                 }
//                 if (typeof context === "boolean") {
//                     keepScripts = context;
//                     context = false
//                 }
//                 context = context || document;
//                 var parsed = rsingleTag.exec(data),
//                     scripts = !keepScripts && [];
//                 if (parsed) {
//                     return [context.createElement(parsed[1])]
//                 }
//                 parsed = jQuery.buildFragment([data], context, scripts);
//                 if (scripts) {
//                     jQuery(scripts).remove()
//                 }
//                 return jQuery.merge([], parsed.childNodes)
//             },
//             parseJSON: function (data) {
//                 if (window.JSON && window.JSON.parse) {
//                     return window.JSON.parse(data)
//                 }
//                 if (data === null) {
//                     return data
//                 }
//                 if (typeof data === "string") {
//                     data = jQuery.trim(data);
//                     if (data) {
//                         if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
//                             return new Function("return " + data)()
//                         }
//                     }
//                 }
//                 jQuery.error("Invalid JSON: " + data)
//             },
//             parseXML: function (data) {
//                 var xml, tmp;
//                 if (!data || typeof data !== "string") {
//                     return null
//                 }
//                 try {
//                     if (window.DOMParser) {
//                         tmp = new DOMParser;
//                         xml = tmp.parseFromString(data, "text/xml")
//                     } else {
//                         xml = new ActiveXObject("Microsoft.XMLDOM");
//                         xml.async = "false";
//                         xml.loadXML(data)
//                     }
//                 } catch (e) {
//                     xml = undefined
//                 }
//                 if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
//                     jQuery.error("Invalid XML: " + data)
//                 }
//                 return xml
//             },
//             noop: function () {},
//             globalEval: function (data) {
//                 if (data && jQuery.trim(data)) {
//                     (window.execScript || function (data) {
//                         window["eval"].call(window, data)
//                     })(data)
//                 }
//             },
//             camelCase: function (string) {
//                 return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
//             },
//             nodeName: function (elem, name) {
//                 return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
//             },
//             each: function (obj, callback, args) {
//                 var value, i = 0,
//                     length = obj.length,
//                     isArray = isArraylike(obj);
//                 if (args) {
//                     if (isArray) {
//                         for (; i < length; i++) {
//                             value = callback.apply(obj[i], args);
//                             if (value === false) {
//                                 break
//                             }
//                         }
//                     } else {
//                         for (i in obj) {
//                             value = callback.apply(obj[i], args);
//                             if (value === false) {
//                                 break
//                             }
//                         }
//                     }
//                 } else {
//                     if (isArray) {
//                         for (; i < length; i++) {
//                             value = callback.call(obj[i], i, obj[i]);
//                             if (value === false) {
//                                 break
//                             }
//                         }
//                     } else {
//                         for (i in obj) {
//                             value = callback.call(obj[i], i, obj[i]);
//                             if (value === false) {
//                                 break
//                             }
//                         }
//                     }
//                 }
//                 return obj
//             },
//             trim: core_trim && !core_trim.call("﻿ ") ? function (text) {
//                 return text == null ? "" : core_trim.call(text)
//             } : function (text) {
//                 return text == null ? "" : (text + "").replace(rtrim, "")
//             },
//             makeArray: function (arr, results) {
//                 var ret = results || [];
//                 if (arr != null) {
//                     if (isArraylike(Object(arr))) {
//                         jQuery.merge(ret, typeof arr === "string" ? [arr] : arr)
//                     } else {
//                         core_push.call(ret, arr)
//                     }
//                 }
//                 return ret
//             },
//             inArray: function (elem, arr, i) {
//                 var len;
//                 if (arr) {
//                     if (core_indexOf) {
//                         return core_indexOf.call(arr, elem, i)
//                     }
//                     len = arr.length;
//                     i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
//                     for (; i < len; i++) {
//                         if (i in arr && arr[i] === elem) {
//                             return i
//                         }
//                     }
//                 }
//                 return -1
//             },
//             merge: function (first, second) {
//                 var l = second.length,
//                     i = first.length,
//                     j = 0;
//                 if (typeof l === "number") {
//                     for (; j < l; j++) {
//                         first[i++] = second[j]
//                     }
//                 } else {
//                     while (second[j] !== undefined) {
//                         first[i++] = second[j++]
//                     }
//                 }
//                 first.length = i;
//                 return first
//             },
//             grep: function (elems, callback, inv) {
//                 var retVal, ret = [],
//                     i = 0,
//                     length = elems.length;
//                 inv = !! inv;
//                 for (; i < length; i++) {
//                     retVal = !! callback(elems[i], i);
//                     if (inv !== retVal) {
//                         ret.push(elems[i])
//                     }
//                 }
//                 return ret
//             },
//             map: function (elems, callback, arg) {
//                 var value, i = 0,
//                     length = elems.length,
//                     isArray = isArraylike(elems),
//                     ret = [];
//                 if (isArray) {
//                     for (; i < length; i++) {
//                         value = callback(elems[i], i, arg);
//                         if (value != null) {
//                             ret[ret.length] = value
//                         }
//                     }
//                 } else {
//                     for (i in elems) {
//                         value = callback(elems[i], i, arg);
//                         if (value != null) {
//                             ret[ret.length] = value
//                         }
//                     }
//                 }
//                 return core_concat.apply([], ret)
//             },
//             guid: 1,
//             proxy: function (fn, context) {
//                 var args, proxy, tmp;
//                 if (typeof context === "string") {
//                     tmp = fn[context];
//                     context = fn;
//                     fn = tmp
//                 }
//                 if (!jQuery.isFunction(fn)) {
//                     return undefined
//                 }
//                 args = core_slice.call(arguments, 2);
//                 proxy = function () {
//                     return fn.apply(context || this, args.concat(core_slice.call(arguments)))
//                 };
//                 proxy.guid = fn.guid = fn.guid || jQuery.guid++;
//                 return proxy
//             },
//             access: function (elems, fn, key, value, chainable, emptyGet, raw) {
//                 var i = 0,
//                     length = elems.length,
//                     bulk = key == null;
//                 if (jQuery.type(key) === "object") {
//                     chainable = true;
//                     for (i in key) {
//                         jQuery.access(elems, fn, i, key[i], true, emptyGet, raw)
//                     }
//                 } else if (value !== undefined) {
//                     chainable = true;
//                     if (!jQuery.isFunction(value)) {
//                         raw = true
//                     }
//                     if (bulk) {
//                         if (raw) {
//                             fn.call(elems, value);
//                             fn = null
//                         } else {
//                             bulk = fn;
//                             fn = function (elem, key, value) {
//                                 return bulk.call(jQuery(elem), value)
//                             }
//                         }
//                     }
//                     if (fn) {
//                         for (; i < length; i++) {
//                             fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)))
//                         }
//                     }
//                 }
//                 return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet
//             },
//             now: function () {
//                 return (new Date).getTime()
//             },
//             swap: function (elem, options, callback, args) {
//                 var ret, name, old = {};
//                 for (name in options) {
//                     old[name] = elem.style[name];
//                     elem.style[name] = options[name]
//                 }
//                 ret = callback.apply(elem, args || []);
//                 for (name in options) {
//                     elem.style[name] = old[name]
//                 }
//                 return ret
//             }
//         });
//         jQuery.ready.promise = function (obj) {
//             if (!readyList) {
//                 readyList = jQuery.Deferred();
//                 if (document.readyState === "complete") {
//                     setTimeout(jQuery.ready)
//                 } else if (document.addEventListener) {
//                     document.addEventListener("DOMContentLoaded", completed, false);
//                     window.addEventListener("load", completed, false)
//                 } else {
//                     document.attachEvent("onreadystatechange", completed);
//                     window.attachEvent("onload", completed);
//                     var top = false;
//                     try {
//                         top = window.frameElement == null && document.documentElement
//                     } catch (e) {}
//                     if (top && top.doScroll) {
//                         (function doScrollCheck() {
//                             if (!jQuery.isReady) {
//                                 try {
//                                     top.doScroll("left")
//                                 } catch (e) {
//                                     return setTimeout(doScrollCheck, 50)
//                                 }
//                                 detach();
//                                 jQuery.ready()
//                             }
//                         })()
//                     }
//                 }
//             }
//             return readyList.promise(obj)
//         };
//         jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
//             class2type["[object " + name + "]"] = name.toLowerCase()
//         });

//         function isArraylike(obj) {
//             var length = obj.length,
//                 type = jQuery.type(obj);
//             if (jQuery.isWindow(obj)) {
//                 return false
//             }
//             if (obj.nodeType === 1 && length) {
//                 return true
//             }
//             return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj)
//         }
//         rootjQuery = jQuery(document);
//         (function (window, undefined) {
//             var i, support, cachedruns, Expr, getText, isXML, compile, outermostContext, sortInput, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + -new Date,
//                 preferredDoc = window.document,
//                 dirruns = 0,
//                 done = 0,
//                 classCache = createCache(),
//                 tokenCache = createCache(),
//                 compilerCache = createCache(),
//                 hasDuplicate = false,
//                 sortOrder = function (a, b) {
//                     if (a === b) {
//                         hasDuplicate = true;
//                         return 0
//                     }
//                     return 0
//                 }, strundefined = typeof undefined,
//                 MAX_NEGATIVE = 1 << 31,
//                 hasOwn = {}.hasOwnProperty,
//                 arr = [],
//                 pop = arr.pop,
//                 push_native = arr.push,
//                 push = arr.push,
//                 slice = arr.slice,
//                 indexOf = arr.indexOf || function (elem) {
//                     var i = 0,
//                         len = this.length;
//                     for (; i < len; i++) {
//                         if (this[i] === elem) {
//                             return i
//                         }
//                     }
//                     return -1
//                 }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
//                 whitespace = "[\\x20\\t\\r\\n\\f]",
//                 characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
//                 identifier = characterEncoding.replace("w", "w#"),
//                 attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
//                 pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)",
//                 rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
//                 rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
//                 rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
//                 rsibling = new RegExp(whitespace + "*[+~]"),
//                 rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"),
//                 rpseudo = new RegExp(pseudos),
//                 ridentifier = new RegExp("^" + identifier + "$"),
//                 matchExpr = {
//                     ID: new RegExp("^#(" + characterEncoding + ")"),
//                     CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
//                     TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
//                     ATTR: new RegExp("^" + attributes),
//                     PSEUDO: new RegExp("^" + pseudos),
//                     CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
//                     bool: new RegExp("^(?:" + booleans + ")$", "i"),
//                     needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
//                 }, rnative = /^[^{]+\{\s*\[native \w/,
//                 rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
//                 rinputs = /^(?:input|select|textarea|button)$/i,
//                 rheader = /^h\d$/i,
//                 rescape = /'|\\/g,
//                 runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
//                 funescape = function (_, escaped, escapedWhitespace) {
//                     var high = "0x" + escaped - 65536;
//                     return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
//                 };
//             try {
//                 push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
//                 arr[preferredDoc.childNodes.length].nodeType
//             } catch (e) {
//                 push = {
//                     apply: arr.length ? function (target, els) {
//                         push_native.apply(target, slice.call(els))
//                     } : function (target, els) {
//                         var j = target.length,
//                             i = 0;
//                         while (target[j++] = els[i++]) {}
//                         target.length = j - 1
//                     }
//                 }
//             }

//             function Sizzle(selector, context, results, seed) {
//                 var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
//                 if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
//                     setDocument(context)
//                 }
//                 context = context || document;
//                 results = results || [];
//                 if (!selector || typeof selector !== "string") {
//                     return results
//                 }
//                 if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
//                     return []
//                 }
//                 if (documentIsHTML && !seed) {
//                     if (match = rquickExpr.exec(selector)) {
//                         if (m = match[1]) {
//                             if (nodeType === 9) {
//                                 elem = context.getElementById(m);
//                                 if (elem && elem.parentNode) {
//                                     if (elem.id === m) {
//                                         results.push(elem);
//                                         return results
//                                     }
//                                 } else {
//                                     return results
//                                 }
//                             } else {
//                                 if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
//                                     results.push(elem);
//                                     return results
//                                 }
//                             }
//                         } else if (match[2]) {
//                             push.apply(results, context.getElementsByTagName(selector));
//                             return results
//                         } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
//                             push.apply(results, context.getElementsByClassName(m));
//                             return results
//                         }
//                     }
//                     if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
//                         nid = old = expando;
//                         newContext = context;
//                         newSelector = nodeType === 9 && selector;
//                         if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
//                             groups = tokenize(selector);
//                             if (old = context.getAttribute("id")) {
//                                 nid = old.replace(rescape, "\\$&")
//                             } else {
//                                 context.setAttribute("id", nid)
//                             }
//                             nid = "[id='" + nid + "'] ";
//                             i = groups.length;
//                             while (i--) {
//                                 groups[i] = nid + toSelector(groups[i])
//                             }
//                             newContext = rsibling.test(selector) && context.parentNode || context;
//                             newSelector = groups.join(",")
//                         }
//                         if (newSelector) {
//                             try {
//                                 push.apply(results, newContext.querySelectorAll(newSelector));
//                                 return results
//                             } catch (qsaError) {} finally {
//                                 if (!old) {
//                                     context.removeAttribute("id")
//                                 }
//                             }
//                         }
//                     }
//                 }
//                 return select(selector.replace(rtrim, "$1"), context, results, seed)
//             }

//             function createCache() {
//                 var keys = [];

//                 function cache(key, value) {
//                     if (keys.push(key += " ") > Expr.cacheLength) {
//                         delete cache[keys.shift()]
//                     }
//                     return cache[key] = value
//                 }
//                 return cache
//             }

//             function markFunction(fn) {
//                 fn[expando] = true;
//                 return fn
//             }

//             function assert(fn) {
//                 var div = document.createElement("div");
//                 try {
//                     return !!fn(div)
//                 } catch (e) {
//                     return false
//                 } finally {
//                     if (div.parentNode) {
//                         div.parentNode.removeChild(div)
//                     }
//                     div = null
//                 }
//             }

//             function addHandle(attrs, handler) {
//                 var arr = attrs.split("|"),
//                     i = attrs.length;
//                 while (i--) {
//                     Expr.attrHandle[arr[i]] = handler
//                 }
//             }

//             function siblingCheck(a, b) {
//                 var cur = b && a,
//                     diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
//                 if (diff) {
//                     return diff
//                 }
//                 if (cur) {
//                     while (cur = cur.nextSibling) {
//                         if (cur === b) {
//                             return -1
//                         }
//                     }
//                 }
//                 return a ? 1 : -1
//             }

//             function createInputPseudo(type) {
//                 return function (elem) {
//                     var name = elem.nodeName.toLowerCase();
//                     return name === "input" && elem.type === type
//                 }
//             }

//             function createButtonPseudo(type) {
//                 return function (elem) {
//                     var name = elem.nodeName.toLowerCase();
//                     return (name === "input" || name === "button") && elem.type === type
//                 }
//             }

//             function createPositionalPseudo(fn) {
//                 return markFunction(function (argument) {
//                     argument = +argument;
//                     return markFunction(function (seed, matches) {
//                         var j, matchIndexes = fn([], seed.length, argument),
//                             i = matchIndexes.length;
//                         while (i--) {
//                             if (seed[j = matchIndexes[i]]) {
//                                 seed[j] = !(matches[j] = seed[j])
//                             }
//                         }
//                     })
//                 })
//             }
//             isXML = Sizzle.isXML = function (elem) {
//                 var documentElement = elem && (elem.ownerDocument || elem).documentElement;
//                 return documentElement ? documentElement.nodeName !== "HTML" : false
//             };
//             support = Sizzle.support = {};
//             setDocument = Sizzle.setDocument = function (node) {
//                 var doc = node ? node.ownerDocument || node : preferredDoc,
//                     parent = doc.defaultView;
//                 if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
//                     return document
//                 }
//                 document = doc;
//                 docElem = doc.documentElement;
//                 documentIsHTML = !isXML(doc);
//                 if (parent && parent.attachEvent && parent !== parent.top) {
//                     parent.attachEvent("onbeforeunload", function () {
//                         setDocument()
//                     })
//                 }
//                 support.attributes = assert(function (div) {
//                     div.className = "i";
//                     return !div.getAttribute("className")
//                 });
//                 support.getElementsByTagName = assert(function (div) {
//                     div.appendChild(doc.createComment(""));
//                     return !div.getElementsByTagName("*").length
//                 });
//                 support.getElementsByClassName = assert(function (div) {
//                     div.innerHTML = "<div class='a'></div><div class='a i'></div>";
//                     div.firstChild.className = "i";
//                     return div.getElementsByClassName("i").length === 2
//                 });
//                 support.getById = assert(function (div) {
//                     docElem.appendChild(div).id = expando;
//                     return !doc.getElementsByName || !doc.getElementsByName(expando).length
//                 });
//                 if (support.getById) {
//                     Expr.find["ID"] = function (id, context) {
//                         if (typeof context.getElementById !== strundefined && documentIsHTML) {
//                             var m = context.getElementById(id);
//                             return m && m.parentNode ? [m] : []
//                         }
//                     };
//                     Expr.filter["ID"] = function (id) {
//                         var attrId = id.replace(runescape, funescape);
//                         return function (elem) {
//                             return elem.getAttribute("id") === attrId
//                         }
//                     }
//                 } else {
//                     delete Expr.find["ID"];
//                     Expr.filter["ID"] = function (id) {
//                         var attrId = id.replace(runescape, funescape);
//                         return function (elem) {
//                             var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
//                             return node && node.value === attrId
//                         }
//                     }
//                 }
//                 Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
//                     if (typeof context.getElementsByTagName !== strundefined) {
//                         return context.getElementsByTagName(tag)
//                     }
//                 } : function (tag, context) {
//                     var elem, tmp = [],
//                         i = 0,
//                         results = context.getElementsByTagName(tag);
//                     if (tag === "*") {
//                         while (elem = results[i++]) {
//                             if (elem.nodeType === 1) {
//                                 tmp.push(elem)
//                             }
//                         }
//                         return tmp
//                     }
//                     return results
//                 };
//                 Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
//                     if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
//                         return context.getElementsByClassName(className)
//                     }
//                 };
//                 rbuggyMatches = [];
//                 rbuggyQSA = [];
//                 if (support.qsa = rnative.test(doc.querySelectorAll)) {
//                     assert(function (div) {
//                         div.innerHTML = "<select><option selected=''></option></select>";
//                         if (!div.querySelectorAll("[selected]").length) {
//                             rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")")
//                         }
//                         if (!div.querySelectorAll(":checked").length) {
//                             rbuggyQSA.push(":checked")
//                         }
//                     });
//                     assert(function (div) {
//                         var input = doc.createElement("input");
//                         input.setAttribute("type", "hidden");
//                         div.appendChild(input).setAttribute("t", "");
//                         if (div.querySelectorAll("[t^='']").length) {
//                             rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")")
//                         }
//                         if (!div.querySelectorAll(":enabled").length) {
//                             rbuggyQSA.push(":enabled", ":disabled")
//                         }
//                         div.querySelectorAll("*,:x");
//                         rbuggyQSA.push(",.*:")
//                     })
//                 }
//                 if (support.matchesSelector = rnative.test(matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
//                     assert(function (div) {
//                         support.disconnectedMatch = matches.call(div, "div");
//                         matches.call(div, "[s!='']:x");
//                         rbuggyMatches.push("!=", pseudos)
//                     })
//                 }
//                 rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
//                 rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
//                 contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ? function (a, b) {
//                     var adown = a.nodeType === 9 ? a.documentElement : a,
//                         bup = b && b.parentNode;
//                     return a === bup || !! (bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16))
//                 } : function (a, b) {
//                     if (b) {
//                         while (b = b.parentNode) {
//                             if (b === a) {
//                                 return true
//                             }
//                         }
//                     }
//                     return false
//                 };
//                 sortOrder = docElem.compareDocumentPosition ? function (a, b) {
//                     if (a === b) {
//                         hasDuplicate = true;
//                         return 0
//                     }
//                     var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
//                     if (compare) {
//                         if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
//                             if (a === doc || contains(preferredDoc, a)) {
//                                 return -1
//                             }
//                             if (b === doc || contains(preferredDoc, b)) {
//                                 return 1
//                             }
//                             return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0
//                         }
//                         return compare & 4 ? -1 : 1
//                     }
//                     return a.compareDocumentPosition ? -1 : 1
//                 } : function (a, b) {
//                     var cur, i = 0,
//                         aup = a.parentNode,
//                         bup = b.parentNode,
//                         ap = [a],
//                         bp = [b];
//                     if (a === b) {
//                         hasDuplicate = true;
//                         return 0
//                     } else if (!aup || !bup) {
//                         return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0
//                     } else if (aup === bup) {
//                         return siblingCheck(a, b)
//                     }
//                     cur = a;
//                     while (cur = cur.parentNode) {
//                         ap.unshift(cur)
//                     }
//                     cur = b;
//                     while (cur = cur.parentNode) {
//                         bp.unshift(cur)
//                     }
//                     while (ap[i] === bp[i]) {
//                         i++
//                     }
//                     return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
//                 };
//                 return doc
//             };
//             Sizzle.matches = function (expr, elements) {
//                 return Sizzle(expr, null, null, elements)
//             };
//             Sizzle.matchesSelector = function (elem, expr) {
//                 if ((elem.ownerDocument || elem) !== document) {
//                     setDocument(elem)
//                 }
//                 expr = expr.replace(rattributeQuotes, "='$1']");
//                 if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
//                     try {
//                         var ret = matches.call(elem, expr);
//                         if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
//                             return ret
//                         }
//                     } catch (e) {}
//                 }
//                 return Sizzle(expr, document, null, [elem]).length > 0
//             };
//             Sizzle.contains = function (context, elem) {
//                 if ((context.ownerDocument || context) !== document) {
//                     setDocument(context)
//                 }
//                 return contains(context, elem)
//             };
//             Sizzle.attr = function (elem, name) {
//                 if ((elem.ownerDocument || elem) !== document) {
//                     setDocument(elem)
//                 }
//                 var fn = Expr.attrHandle[name.toLowerCase()],
//                     val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
//                 return val === undefined ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null : val
//             };
//             Sizzle.error = function (msg) {
//                 throw new Error("Syntax error, unrecognized expression: " + msg)
//             };
//             Sizzle.uniqueSort = function (results) {
//                 var elem, duplicates = [],
//                     j = 0,
//                     i = 0;
//                 hasDuplicate = !support.detectDuplicates;
//                 sortInput = !support.sortStable && results.slice(0);
//                 results.sort(sortOrder);
//                 if (hasDuplicate) {
//                     while (elem = results[i++]) {
//                         if (elem === results[i]) {
//                             j = duplicates.push(i)
//                         }
//                     }
//                     while (j--) {
//                         results.splice(duplicates[j], 1)
//                     }
//                 }
//                 return results
//             };
//             getText = Sizzle.getText = function (elem) {
//                 var node, ret = "",
//                     i = 0,
//                     nodeType = elem.nodeType;
//                 if (!nodeType) {
//                     for (; node = elem[i]; i++) {
//                         ret += getText(node)
//                     }
//                 } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
//                     if (typeof elem.textContent === "string") {
//                         return elem.textContent
//                     } else {
//                         for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
//                             ret += getText(elem)
//                         }
//                     }
//                 } else if (nodeType === 3 || nodeType === 4) {
//                     return elem.nodeValue
//                 }
//                 return ret
//             };
//             Expr = Sizzle.selectors = {
//                 cacheLength: 50,
//                 createPseudo: markFunction,
//                 match: matchExpr,
//                 attrHandle: {},
//                 find: {},
//                 relative: {
//                     ">": {
//                         dir: "parentNode",
//                         first: true
//                     },
//                     " ": {
//                         dir: "parentNode"
//                     },
//                     "+": {
//                         dir: "previousSibling",
//                         first: true
//                     },
//                     "~": {
//                         dir: "previousSibling"
//                     }
//                 },
//                 preFilter: {
//                     ATTR: function (match) {
//                         match[1] = match[1].replace(runescape, funescape);
//                         match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
//                         if (match[2] === "~=") {
//                             match[3] = " " + match[3] + " "
//                         }
//                         return match.slice(0, 4)
//                     },
//                     CHILD: function (match) {
//                         match[1] = match[1].toLowerCase();
//                         if (match[1].slice(0, 3) === "nth") {
//                             if (!match[3]) {
//                                 Sizzle.error(match[0])
//                             }
//                             match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
//                             match[5] = +(match[7] + match[8] || match[3] === "odd")
//                         } else if (match[3]) {
//                             Sizzle.error(match[0])
//                         }
//                         return match
//                     },
//                     PSEUDO: function (match) {
//                         var excess, unquoted = !match[5] && match[2];
//                         if (matchExpr["CHILD"].test(match[0])) {
//                             return null
//                         }
//                         if (match[3] && match[4] !== undefined) {
//                             match[2] = match[4]
//                         } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
//                             match[0] = match[0].slice(0, excess);
//                             match[2] = unquoted.slice(0, excess)
//                         }
//                         return match.slice(0, 3)
//                     }
//                 },
//                 filter: {
//                     TAG: function (nodeNameSelector) {
//                         var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
//                         return nodeNameSelector === "*" ? function () {
//                             return true
//                         } : function (elem) {
//                             return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
//                         }
//                     },
//                     CLASS: function (className) {
//                         var pattern = classCache[className + " "];
//                         return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
//                             return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "")
//                         })
//                     },
//                     ATTR: function (name, operator, check) {
//                         return function (elem) {
//                             var result = Sizzle.attr(elem, name);
//                             if (result == null) {
//                                 return operator === "!="
//                             }
//                             if (!operator) {
//                                 return true
//                             }
//                             result += "";
//                             return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false
//                         }
//                     },
//                     CHILD: function (type, what, argument, first, last) {
//                         var simple = type.slice(0, 3) !== "nth",
//                             forward = type.slice(-4) !== "last",
//                             ofType = what === "of-type";
//                         return first === 1 && last === 0 ? function (elem) {
//                             return !!elem.parentNode
//                         } : function (elem, context, xml) {
//                             var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
//                                 parent = elem.parentNode,
//                                 name = ofType && elem.nodeName.toLowerCase(),
//                                 useCache = !xml && !ofType;
//                             if (parent) {
//                                 if (simple) {
//                                     while (dir) {
//                                         node = elem;
//                                         while (node = node[dir]) {
//                                             if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
//                                                 return false
//                                             }
//                                         }
//                                         start = dir = type === "only" && !start && "nextSibling"
//                                     }
//                                     return true
//                                 }
//                                 start = [forward ? parent.firstChild : parent.lastChild];
//                                 if (forward && useCache) {
//                                     outerCache = parent[expando] || (parent[expando] = {});
//                                     cache = outerCache[type] || [];
//                                     nodeIndex = cache[0] === dirruns && cache[1];
//                                     diff = cache[0] === dirruns && cache[2];
//                                     node = nodeIndex && parent.childNodes[nodeIndex];
//                                     while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
//                                         if (node.nodeType === 1 && ++diff && node === elem) {
//                                             outerCache[type] = [dirruns, nodeIndex, diff];
//                                             break
//                                         }
//                                     }
//                                 } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
//                                     diff = cache[1]
//                                 } else {
//                                     while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
//                                         if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
//                                             if (useCache) {
//                                                 (node[expando] || (node[expando] = {}))[type] = [dirruns, diff]
//                                             }
//                                             if (node === elem) {
//                                                 break
//                                             }
//                                         }
//                                     }
//                                 }
//                                 diff -= last;
//                                 return diff === first || diff % first === 0 && diff / first >= 0
//                             }
//                         }
//                     },
//                     PSEUDO: function (pseudo, argument) {
//                         var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
//                         if (fn[expando]) {
//                             return fn(argument)
//                         }
//                         if (fn.length > 1) {
//                             args = [pseudo, pseudo, "", argument];
//                             return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
//                                 var idx, matched = fn(seed, argument),
//                                     i = matched.length;
//                                 while (i--) {
//                                     idx = indexOf.call(seed, matched[i]);
//                                     seed[idx] = !(matches[idx] = matched[i])
//                                 }
//                             }) : function (elem) {
//                                 return fn(elem, 0, args)
//                             }
//                         }
//                         return fn
//                     }
//                 },
//                 pseudos: {
//                     not: markFunction(function (selector) {
//                         var input = [],
//                             results = [],
//                             matcher = compile(selector.replace(rtrim, "$1"));
//                         return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
//                             var elem, unmatched = matcher(seed, null, xml, []),
//                                 i = seed.length;
//                             while (i--) {
//                                 if (elem = unmatched[i]) {
//                                     seed[i] = !(matches[i] = elem)
//                                 }
//                             }
//                         }) : function (elem, context, xml) {
//                             input[0] = elem;
//                             matcher(input, null, xml, results);
//                             return !results.pop()
//                         }
//                     }),
//                     has: markFunction(function (selector) {
//                         return function (elem) {
//                             return Sizzle(selector, elem).length > 0
//                         }
//                     }),
//                     contains: markFunction(function (text) {
//                         return function (elem) {
//                             return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
//                         }
//                     }),
//                     lang: markFunction(function (lang) {
//                         if (!ridentifier.test(lang || "")) {
//                             Sizzle.error("unsupported lang: " + lang)
//                         }
//                         lang = lang.replace(runescape, funescape).toLowerCase();
//                         return function (elem) {
//                             var elemLang;
//                             do {
//                                 if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
//                                     elemLang = elemLang.toLowerCase();
//                                     return elemLang === lang || elemLang.indexOf(lang + "-") === 0
//                                 }
//                             } while ((elem = elem.parentNode) && elem.nodeType === 1);
//                             return false
//                         }
//                     }),
//                     target: function (elem) {
//                         var hash = window.location && window.location.hash;
//                         return hash && hash.slice(1) === elem.id
//                     },
//                     root: function (elem) {
//                         return elem === docElem
//                     },
//                     focus: function (elem) {
//                         return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !! (elem.type || elem.href || ~elem.tabIndex)
//                     },
//                     enabled: function (elem) {
//                         return elem.disabled === false
//                     },
//                     disabled: function (elem) {
//                         return elem.disabled === true
//                     },
//                     checked: function (elem) {
//                         var nodeName = elem.nodeName.toLowerCase();
//                         return nodeName === "input" && !! elem.checked || nodeName === "option" && !! elem.selected
//                     },
//                     selected: function (elem) {
//                         if (elem.parentNode) {
//                             elem.parentNode.selectedIndex
//                         }
//                         return elem.selected === true
//                     },
//                     empty: function (elem) {
//                         for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
//                             if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
//                                 return false
//                             }
//                         }
//                         return true
//                     },
//                     parent: function (elem) {
//                         return !Expr.pseudos["empty"](elem)
//                     },
//                     header: function (elem) {
//                         return rheader.test(elem.nodeName)
//                     },
//                     input: function (elem) {
//                         return rinputs.test(elem.nodeName)
//                     },
//                     button: function (elem) {
//                         var name = elem.nodeName.toLowerCase();
//                         return name === "input" && elem.type === "button" || name === "button"
//                     },
//                     text: function (elem) {
//                         var attr;
//                         return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type)
//                     },
//                     first: createPositionalPseudo(function () {
//                         return [0]
//                     }),
//                     last: createPositionalPseudo(function (matchIndexes, length) {
//                         return [length - 1]
//                     }),
//                     eq: createPositionalPseudo(function (matchIndexes, length, argument) {
//                         return [argument < 0 ? argument + length : argument]
//                     }),
//                     even: createPositionalPseudo(function (matchIndexes, length) {
//                         var i = 0;
//                         for (; i < length; i += 2) {
//                             matchIndexes.push(i)
//                         }
//                         return matchIndexes
//                     }),
//                     odd: createPositionalPseudo(function (matchIndexes, length) {
//                         var i = 1;
//                         for (; i < length; i += 2) {
//                             matchIndexes.push(i)
//                         }
//                         return matchIndexes
//                     }),
//                     lt: createPositionalPseudo(function (matchIndexes, length, argument) {
//                         var i = argument < 0 ? argument + length : argument;
//                         for (; --i >= 0;) {
//                             matchIndexes.push(i)
//                         }
//                         return matchIndexes
//                     }),
//                     gt: createPositionalPseudo(function (matchIndexes, length, argument) {
//                         var i = argument < 0 ? argument + length : argument;
//                         for (; ++i < length;) {
//                             matchIndexes.push(i)
//                         }
//                         return matchIndexes
//                     })
//                 }
//             };
//             Expr.pseudos["nth"] = Expr.pseudos["eq"];
//             for (i in {
//                 radio: true,
//                 checkbox: true,
//                 file: true,
//                 password: true,
//                 image: true
//             }) {
//                 Expr.pseudos[i] = createInputPseudo(i)
//             }
//             for (i in {
//                 submit: true,
//                 reset: true
//             }) {
//                 Expr.pseudos[i] = createButtonPseudo(i)
//             }

//             function setFilters() {}
//             setFilters.prototype = Expr.filters = Expr.pseudos;
//             Expr.setFilters = new setFilters;

//             function tokenize(selector, parseOnly) {
//                 var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
//                 if (cached) {
//                     return parseOnly ? 0 : cached.slice(0)
//                 }
//                 soFar = selector;
//                 groups = [];
//                 preFilters = Expr.preFilter;
//                 while (soFar) {
//                     if (!matched || (match = rcomma.exec(soFar))) {
//                         if (match) {
//                             soFar = soFar.slice(match[0].length) || soFar
//                         }
//                         groups.push(tokens = [])
//                     }
//                     matched = false;
//                     if (match = rcombinators.exec(soFar)) {
//                         matched = match.shift();
//                         tokens.push({
//                             value: matched,
//                             type: match[0].replace(rtrim, " ")
//                         });
//                         soFar = soFar.slice(matched.length)
//                     }
//                     for (type in Expr.filter) {
//                         if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
//                             matched = match.shift();
//                             tokens.push({
//                                 value: matched,
//                                 type: type,
//                                 matches: match
//                             });
//                             soFar = soFar.slice(matched.length)
//                         }
//                     }
//                     if (!matched) {
//                         break
//                     }
//                 }
//                 return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
//             }

//             function toSelector(tokens) {
//                 var i = 0,
//                     len = tokens.length,
//                     selector = "";
//                 for (; i < len; i++) {
//                     selector += tokens[i].value
//                 }
//                 return selector
//             }

//             function addCombinator(matcher, combinator, base) {
//                 var dir = combinator.dir,
//                     checkNonElements = base && dir === "parentNode",
//                     doneName = done++;
//                 return combinator.first ? function (elem, context, xml) {
//                     while (elem = elem[dir]) {
//                         if (elem.nodeType === 1 || checkNonElements) {
//                             return matcher(elem, context, xml)
//                         }
//                     }
//                 } : function (elem, context, xml) {
//                     var data, cache, outerCache, dirkey = dirruns + " " + doneName;
//                     if (xml) {
//                         while (elem = elem[dir]) {
//                             if (elem.nodeType === 1 || checkNonElements) {
//                                 if (matcher(elem, context, xml)) {
//                                     return true
//                                 }
//                             }
//                         }
//                     } else {
//                         while (elem = elem[dir]) {
//                             if (elem.nodeType === 1 || checkNonElements) {
//                                 outerCache = elem[expando] || (elem[expando] = {});
//                                 if ((cache = outerCache[dir]) && cache[0] === dirkey) {
//                                     if ((data = cache[1]) === true || data === cachedruns) {
//                                         return data === true
//                                     }
//                                 } else {
//                                     cache = outerCache[dir] = [dirkey];
//                                     cache[1] = matcher(elem, context, xml) || cachedruns;
//                                     if (cache[1] === true) {
//                                         return true
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }

//             function elementMatcher(matchers) {
//                 return matchers.length > 1 ? function (elem, context, xml) {
//                     var i = matchers.length;
//                     while (i--) {
//                         if (!matchers[i](elem, context, xml)) {
//                             return false
//                         }
//                     }
//                     return true
//                 } : matchers[0]
//             }

//             function condense(unmatched, map, filter, context, xml) {
//                 var elem, newUnmatched = [],
//                     i = 0,
//                     len = unmatched.length,
//                     mapped = map != null;
//                 for (; i < len; i++) {
//                     if (elem = unmatched[i]) {
//                         if (!filter || filter(elem, context, xml)) {
//                             newUnmatched.push(elem);
//                             if (mapped) {
//                                 map.push(i)
//                             }
//                         }
//                     }
//                 }
//                 return newUnmatched
//             }

//             function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
//                 if (postFilter && !postFilter[expando]) {
//                     postFilter = setMatcher(postFilter)
//                 }
//                 if (postFinder && !postFinder[expando]) {
//                     postFinder = setMatcher(postFinder, postSelector)
//                 }
//                 return markFunction(function (seed, results, context, xml) {
//                     var temp, i, elem, preMap = [],
//                         postMap = [],
//                         preexisting = results.length,
//                         elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
//                         matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
//                         matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
//                     if (matcher) {
//                         matcher(matcherIn, matcherOut, context, xml)
//                     }
//                     if (postFilter) {
//                         temp = condense(matcherOut, postMap);
//                         postFilter(temp, [], context, xml);
//                         i = temp.length;
//                         while (i--) {
//                             if (elem = temp[i]) {
//                                 matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
//                             }
//                         }
//                     }
//                     if (seed) {
//                         if (postFinder || preFilter) {
//                             if (postFinder) {
//                                 temp = [];
//                                 i = matcherOut.length;
//                                 while (i--) {
//                                     if (elem = matcherOut[i]) {
//                                         temp.push(matcherIn[i] = elem)
//                                     }
//                                 }
//                                 postFinder(null, matcherOut = [], temp, xml)
//                             }
//                             i = matcherOut.length;
//                             while (i--) {
//                                 if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
//                                     seed[temp] = !(results[temp] = elem)
//                                 }
//                             }
//                         }
//                     } else {
//                         matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
//                         if (postFinder) {
//                             postFinder(null, results, matcherOut, xml)
//                         } else {
//                             push.apply(results, matcherOut)
//                         }
//                     }
//                 })
//             }

//             function matcherFromTokens(tokens) {
//                 var checkContext, matcher, j, len = tokens.length,
//                     leadingRelative = Expr.relative[tokens[0].type],
//                     implicitRelative = leadingRelative || Expr.relative[" "],
//                     i = leadingRelative ? 1 : 0,
//                     matchContext = addCombinator(function (elem) {
//                         return elem === checkContext
//                     }, implicitRelative, true),
//                     matchAnyContext = addCombinator(function (elem) {
//                         return indexOf.call(checkContext, elem) > -1
//                     }, implicitRelative, true),
//                     matchers = [
//                         function (elem, context, xml) {
//                             return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml))
//                         }
//                     ];
//                 for (; i < len; i++) {
//                     if (matcher = Expr.relative[tokens[i].type]) {
//                         matchers = [addCombinator(elementMatcher(matchers), matcher)]
//                     } else {
//                         matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
//                         if (matcher[expando]) {
//                             j = ++i;
//                             for (; j < len; j++) {
//                                 if (Expr.relative[tokens[j].type]) {
//                                     break
//                                 }
//                             }
//                             return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
//                                 value: tokens[i - 2].type === " " ? "*" : ""
//                             })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
//                         }
//                         matchers.push(matcher)
//                     }
//                 }
//                 return elementMatcher(matchers)
//             }

//             function matcherFromGroupMatchers(elementMatchers, setMatchers) {
//                 var matcherCachedRuns = 0,
//                     bySet = setMatchers.length > 0,
//                     byElement = elementMatchers.length > 0,
//                     superMatcher = function (seed, context, xml, results, expandContext) {
//                         var elem, j, matcher, setMatched = [],
//                             matchedCount = 0,
//                             i = "0",
//                             unmatched = seed && [],
//                             outermost = expandContext != null,
//                             contextBackup = outermostContext,
//                             elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),
//                             dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1;
//                         if (outermost) {
//                             outermostContext = context !== document && context;
//                             cachedruns = matcherCachedRuns
//                         }
//                         for (;
//                             (elem = elems[i]) != null; i++) {
//                             if (byElement && elem) {
//                                 j = 0;
//                                 while (matcher = elementMatchers[j++]) {
//                                     if (matcher(elem, context, xml)) {
//                                         results.push(elem);
//                                         break
//                                     }
//                                 }
//                                 if (outermost) {
//                                     dirruns = dirrunsUnique;
//                                     cachedruns = ++matcherCachedRuns
//                                 }
//                             }
//                             if (bySet) {
//                                 if (elem = !matcher && elem) {
//                                     matchedCount--
//                                 }
//                                 if (seed) {
//                                     unmatched.push(elem)
//                                 }
//                             }
//                         }
//                         matchedCount += i;
//                         if (bySet && i !== matchedCount) {
//                             j = 0;
//                             while (matcher = setMatchers[j++]) {
//                                 matcher(unmatched, setMatched, context, xml)
//                             }
//                             if (seed) {
//                                 if (matchedCount > 0) {
//                                     while (i--) {
//                                         if (!(unmatched[i] || setMatched[i])) {
//                                             setMatched[i] = pop.call(results)
//                                         }
//                                     }
//                                 }
//                                 setMatched = condense(setMatched)
//                             }
//                             push.apply(results, setMatched);
//                             if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
//                                 Sizzle.uniqueSort(results)
//                             }
//                         }
//                         if (outermost) {
//                             dirruns = dirrunsUnique;
//                             outermostContext = contextBackup
//                         }
//                         return unmatched
//                     };
//                 return bySet ? markFunction(superMatcher) : superMatcher
//             }
//             compile = Sizzle.compile = function (selector, group) {
//                 var i, setMatchers = [],
//                     elementMatchers = [],
//                     cached = compilerCache[selector + " "];
//                 if (!cached) {
//                     if (!group) {
//                         group = tokenize(selector)
//                     }
//                     i = group.length;
//                     while (i--) {
//                         cached = matcherFromTokens(group[i]);
//                         if (cached[expando]) {
//                             setMatchers.push(cached)
//                         } else {
//                             elementMatchers.push(cached)
//                         }
//                     }
//                     cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers))
//                 }
//                 return cached
//             };

//             function multipleContexts(selector, contexts, results) {
//                 var i = 0,
//                     len = contexts.length;
//                 for (; i < len; i++) {
//                     Sizzle(selector, contexts[i], results)
//                 }
//                 return results
//             }

//             function select(selector, context, results, seed) {
//                 var i, tokens, token, type, find, match = tokenize(selector);
//                 if (!seed) {
//                     if (match.length === 1) {
//                         tokens = match[0] = match[0].slice(0);
//                         if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
//                             context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
//                             if (!context) {
//                                 return results
//                             }
//                             selector = selector.slice(tokens.shift().value.length)
//                         }
//                         i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
//                         while (i--) {
//                             token = tokens[i];
//                             if (Expr.relative[type = token.type]) {
//                                 break
//                             }
//                             if (find = Expr.find[type]) {
//                                 if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {
//                                     tokens.splice(i, 1);
//                                     selector = seed.length && toSelector(tokens);
//                                     if (!selector) {
//                                         push.apply(results, seed);
//                                         return results
//                                     }
//                                     break
//                                 }
//                             }
//                         }
//                     }
//                 }
//                 compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector));
//                 return results
//             }
//             support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
//             support.detectDuplicates = hasDuplicate;
//             setDocument();
//             support.sortDetached = assert(function (div1) {
//                 return div1.compareDocumentPosition(document.createElement("div")) & 1
//             });
//             if (!assert(function (div) {
//                 div.innerHTML = "<a href='#'></a>";
//                 return div.firstChild.getAttribute("href") === "#"
//             })) {
//                 addHandle("type|href|height|width", function (elem, name, isXML) {
//                     if (!isXML) {
//                         return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2)
//                     }
//                 })
//             }
//             if (!support.attributes || !assert(function (div) {
//                 div.innerHTML = "<input/>";
//                 div.firstChild.setAttribute("value", "");
//                 return div.firstChild.getAttribute("value") === ""
//             })) {
//                 addHandle("value", function (elem, name, isXML) {
//                     if (!isXML && elem.nodeName.toLowerCase() === "input") {
//                         return elem.defaultValue
//                     }
//                 })
//             }
//             if (!assert(function (div) {
//                 return div.getAttribute("disabled") == null
//             })) {
//                 addHandle(booleans, function (elem, name, isXML) {
//                     var val;
//                     if (!isXML) {
//                         return (val = elem.getAttributeNode(name)) && val.specified ? val.value : elem[name] === true ? name.toLowerCase() : null
//                     }
//                 })
//             }
//             jQuery.find = Sizzle;
//             jQuery.expr = Sizzle.selectors;
//             jQuery.expr[":"] = jQuery.expr.pseudos;
//             jQuery.unique = Sizzle.uniqueSort;
//             jQuery.text = Sizzle.getText;
//             jQuery.isXMLDoc = Sizzle.isXML;
//             jQuery.contains = Sizzle.contains
//         })(window);
//         var optionsCache = {};

//         function createOptions(options) {
//             var object = optionsCache[options] = {};
//             jQuery.each(options.match(core_rnotwhite) || [], function (_, flag) {
//                 object[flag] = true
//             });
//             return object
//         }
//         jQuery.Callbacks = function (options) {
//             options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
//             var firing, memory, fired, firingLength, firingIndex, firingStart, list = [],
//                 stack = !options.once && [],
//                 fire = function (data) {
//                     memory = options.memory && data;
//                     fired = true;
//                     firingIndex = firingStart || 0;
//                     firingStart = 0;
//                     firingLength = list.length;
//                     firing = true;
//                     for (; list && firingIndex < firingLength; firingIndex++) {
//                         if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
//                             memory = false;
//                             break
//                         }
//                     }
//                     firing = false;
//                     if (list) {
//                         if (stack) {
//                             if (stack.length) {
//                                 fire(stack.shift())
//                             }
//                         } else if (memory) {
//                             list = []
//                         } else {
//                             self.disable()
//                         }
//                     }
//                 }, self = {
//                     add: function () {
//                         if (list) {
//                             var start = list.length;
//                             (function add(args) {
//                                 jQuery.each(args, function (_, arg) {
//                                     var type = jQuery.type(arg);
//                                     if (type === "function") {
//                                         if (!options.unique || !self.has(arg)) {
//                                             list.push(arg)
//                                         }
//                                     } else if (arg && arg.length && type !== "string") {
//                                         add(arg)
//                                     }
//                                 })
//                             })(arguments);
//                             if (firing) {
//                                 firingLength = list.length
//                             } else if (memory) {
//                                 firingStart = start;
//                                 fire(memory)
//                             }
//                         }
//                         return this
//                     },
//                     remove: function () {
//                         if (list) {
//                             jQuery.each(arguments, function (_, arg) {
//                                 var index;
//                                 while ((index = jQuery.inArray(arg, list, index)) > -1) {
//                                     list.splice(index, 1);
//                                     if (firing) {
//                                         if (index <= firingLength) {
//                                             firingLength--
//                                         }
//                                         if (index <= firingIndex) {
//                                             firingIndex--
//                                         }
//                                     }
//                                 }
//                             })
//                         }
//                         return this
//                     },
//                     has: function (fn) {
//                         return fn ? jQuery.inArray(fn, list) > -1 : !! (list && list.length)
//                     },
//                     empty: function () {
//                         list = [];
//                         firingLength = 0;
//                         return this
//                     },
//                     disable: function () {
//                         list = stack = memory = undefined;
//                         return this
//                     },
//                     disabled: function () {
//                         return !list
//                     },
//                     lock: function () {
//                         stack = undefined;
//                         if (!memory) {
//                             self.disable()
//                         }
//                         return this
//                     },
//                     locked: function () {
//                         return !stack
//                     },
//                     fireWith: function (context, args) {
//                         if (list && (!fired || stack)) {
//                             args = args || [];
//                             args = [context, args.slice ? args.slice() : args];
//                             if (firing) {
//                                 stack.push(args)
//                             } else {
//                                 fire(args)
//                             }
//                         }
//                         return this
//                     },
//                     fire: function () {
//                         self.fireWith(this, arguments);
//                         return this
//                     },
//                     fired: function () {
//                         return !!fired
//                     }
//                 };
//             return self
//         };
//         jQuery.extend({
//             Deferred: function (func) {
//                 var tuples = [
//                     ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
//                     ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
//                     ["notify", "progress", jQuery.Callbacks("memory")]
//                 ],
//                     state = "pending",
//                     promise = {
//                         state: function () {
//                             return state
//                         },
//                         always: function () {
//                             deferred.done(arguments).fail(arguments);
//                             return this
//                         },
//                         then: function () {
//                             var fns = arguments;
//                             return jQuery.Deferred(function (newDefer) {
//                                 jQuery.each(tuples, function (i, tuple) {
//                                     var action = tuple[0],
//                                         fn = jQuery.isFunction(fns[i]) && fns[i];
//                                     deferred[tuple[1]](function () {
//                                         var returned = fn && fn.apply(this, arguments);
//                                         if (returned && jQuery.isFunction(returned.promise)) {
//                                             returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)
//                                         } else {
//                                             newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments)
//                                         }
//                                     })
//                                 });
//                                 fns = null
//                             }).promise()
//                         },
//                         promise: function (obj) {
//                             return obj != null ? jQuery.extend(obj, promise) : promise
//                         }
//                     }, deferred = {};
//                 promise.pipe = promise.then;
//                 jQuery.each(tuples, function (i, tuple) {
//                     var list = tuple[2],
//                         stateString = tuple[3];
//                     promise[tuple[1]] = list.add;
//                     if (stateString) {
//                         list.add(function () {
//                             state = stateString
//                         }, tuples[i ^ 1][2].disable, tuples[2][2].lock)
//                     }
//                     deferred[tuple[0]] = function () {
//                         deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
//                         return this
//                     };
//                     deferred[tuple[0] + "With"] = list.fireWith
//                 });
//                 promise.promise(deferred);
//                 if (func) {
//                     func.call(deferred, deferred)
//                 }
//                 return deferred
//             },
//             when: function (subordinate) {
//                 var i = 0,
//                     resolveValues = core_slice.call(arguments),
//                     length = resolveValues.length,
//                     remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
//                     deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
//                     updateFunc = function (i, contexts, values) {
//                         return function (value) {
//                             contexts[i] = this;
//                             values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
//                             if (values === progressValues) {
//                                 deferred.notifyWith(contexts, values)
//                             } else if (!--remaining) {
//                                 deferred.resolveWith(contexts, values)
//                             }
//                         }
//                     }, progressValues, progressContexts, resolveContexts;
//                 if (length > 1) {
//                     progressValues = new Array(length);
//                     progressContexts = new Array(length);
//                     resolveContexts = new Array(length);
//                     for (; i < length; i++) {
//                         if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
//                             resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues))
//                         } else {
//                             --remaining
//                         }
//                     }
//                 }
//                 if (!remaining) {
//                     deferred.resolveWith(resolveContexts, resolveValues)
//                 }
//                 return deferred.promise()
//             }
//         });
//         jQuery.support = function (support) {
//             var all, a, input, select, fragment, opt, eventName, isSupported, i, div = document.createElement("div");
//             div.setAttribute("className", "t");
//             div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
//             all = div.getElementsByTagName("*") || [];
//             a = div.getElementsByTagName("a")[0];
//             if (!a || !a.style || !all.length) {
//                 return support
//             }
//             select = document.createElement("select");
//             opt = select.appendChild(document.createElement("option"));
//             input = div.getElementsByTagName("input")[0];
//             a.style.cssText = "top:1px;float:left;opacity:.5";
//             support.getSetAttribute = div.className !== "t";
//             support.leadingWhitespace = div.firstChild.nodeType === 3;
//             support.tbody = !div.getElementsByTagName("tbody").length;
//             support.htmlSerialize = !! div.getElementsByTagName("link").length;
//             support.style = /top/.test(a.getAttribute("style"));
//             support.hrefNormalized = a.getAttribute("href") === "/a";
//             support.opacity = /^0.5/.test(a.style.opacity);
//             support.cssFloat = !! a.style.cssFloat;
//             support.checkOn = !! input.value;
//             support.optSelected = opt.selected;
//             support.enctype = !! document.createElement("form").enctype;
//             support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
//             support.inlineBlockNeedsLayout = false;
//             support.shrinkWrapBlocks = false;
//             support.pixelPosition = false;
//             support.deleteExpando = true;
//             support.noCloneEvent = true;
//             support.reliableMarginRight = true;
//             support.boxSizingReliable = true;
//             input.checked = true;
//             support.noCloneChecked = input.cloneNode(true).checked;
//             select.disabled = true;
//             support.optDisabled = !opt.disabled;
//             try {
//                 delete div.test
//             } catch (e) {
//                 support.deleteExpando = false
//             }
//             input = document.createElement("input");
//             input.setAttribute("value", "");
//             support.input = input.getAttribute("value") === "";
//             input.value = "t";
//             input.setAttribute("type", "radio");
//             support.radioValue = input.value === "t";
//             input.setAttribute("checked", "t");
//             input.setAttribute("name", "t");
//             fragment = document.createDocumentFragment();
//             fragment.appendChild(input);
//             support.appendChecked = input.checked;
//             support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
//             if (div.attachEvent) {
//                 div.attachEvent("onclick", function () {
//                     support.noCloneEvent = false
//                 });
//                 div.cloneNode(true).click()
//             }
//             for (i in {
//                 submit: true,
//                 change: true,
//                 focusin: true
//             }) {
//                 div.setAttribute(eventName = "on" + i, "t");
//                 support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false
//             }
//             div.style.backgroundClip = "content-box";
//             div.cloneNode(true).style.backgroundClip = "";
//             support.clearCloneStyle = div.style.backgroundClip === "content-box";
//             for (i in jQuery(support)) {
//                 break
//             }
//             support.ownLast = i !== "0";
//             jQuery(function () {
//                 var container, marginDiv, tds, divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
//                     body = document.getElementsByTagName("body")[0];
//                 if (!body) {
//                     return
//                 }
//                 container = document.createElement("div");
//                 container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
//                 body.appendChild(container).appendChild(div);
//                 div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
//                 tds = div.getElementsByTagName("td");
//                 tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
//                 isSupported = tds[0].offsetHeight === 0;
//                 tds[0].style.display = "";
//                 tds[1].style.display = "none";
//                 support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
//                 div.innerHTML = "";
//                 div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
//                 jQuery.swap(body, body.style.zoom != null ? {
//                     zoom: 1
//                 } : {}, function () {
//                     support.boxSizing = div.offsetWidth === 4
//                 });
//                 if (window.getComputedStyle) {
//                     support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
//                     support.boxSizingReliable = (window.getComputedStyle(div, null) || {
//                         width: "4px"
//                     }).width === "4px";
//                     marginDiv = div.appendChild(document.createElement("div"));
//                     marginDiv.style.cssText = div.style.cssText = divReset;
//                     marginDiv.style.marginRight = marginDiv.style.width = "0";
//                     div.style.width = "1px";
//                     support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight)
//                 }
//                 if (typeof div.style.zoom !== core_strundefined) {
//                     div.innerHTML = "";
//                     div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
//                     support.inlineBlockNeedsLayout = div.offsetWidth === 3;
//                     div.style.display = "block";
//                     div.innerHTML = "<div></div>";
//                     div.firstChild.style.width = "5px";
//                     support.shrinkWrapBlocks = div.offsetWidth !== 3;
//                     if (support.inlineBlockNeedsLayout) {
//                         body.style.zoom = 1
//                     }
//                 }
//                 body.removeChild(container);
//                 container = div = tds = marginDiv = null
//             });
//             all = select = fragment = opt = a = input = null;
//             return support
//         }({});
//         var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
//             rmultiDash = /([A-Z])/g;

//         function internalData(elem, name, data, pvt) {
//             if (!jQuery.acceptData(elem)) {
//                 return
//             }
//             var ret, thisCache, internalKey = jQuery.expando,
//                 isNode = elem.nodeType,
//                 cache = isNode ? jQuery.cache : elem,
//                 id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
//             if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
//                 return
//             }
//             if (!id) {
//                 if (isNode) {
//                     id = elem[internalKey] = core_deletedIds.pop() || jQuery.guid++
//                 } else {
//                     id = internalKey
//                 }
//             }
//             if (!cache[id]) {
//                 cache[id] = isNode ? {} : {
//                     toJSON: jQuery.noop
//                 }
//             }
//             if (typeof name === "object" || typeof name === "function") {
//                 if (pvt) {
//                     cache[id] = jQuery.extend(cache[id], name)
//                 } else {
//                     cache[id].data = jQuery.extend(cache[id].data, name)
//                 }
//             }
//             thisCache = cache[id];
//             if (!pvt) {
//                 if (!thisCache.data) {
//                     thisCache.data = {}
//                 }
//                 thisCache = thisCache.data
//             }
//             if (data !== undefined) {
//                 thisCache[jQuery.camelCase(name)] = data
//             }
//             if (typeof name === "string") {
//                 ret = thisCache[name];
//                 if (ret == null) {
//                     ret = thisCache[jQuery.camelCase(name)]
//                 }
//             } else {
//                 ret = thisCache
//             }
//             return ret
//         }

//         function internalRemoveData(elem, name, pvt) {
//             if (!jQuery.acceptData(elem)) {
//                 return
//             }
//             var thisCache, i, isNode = elem.nodeType,
//                 cache = isNode ? jQuery.cache : elem,
//                 id = isNode ? elem[jQuery.expando] : jQuery.expando;
//             if (!cache[id]) {
//                 return
//             }
//             if (name) {
//                 thisCache = pvt ? cache[id] : cache[id].data;
//                 if (thisCache) {
//                     if (!jQuery.isArray(name)) {
//                         if (name in thisCache) {
//                             name = [name]
//                         } else {
//                             name = jQuery.camelCase(name);
//                             if (name in thisCache) {
//                                 name = [name]
//                             } else {
//                                 name = name.split(" ")
//                             }
//                         }
//                     } else {
//                         name = name.concat(jQuery.map(name, jQuery.camelCase))
//                     }
//                     i = name.length;
//                     while (i--) {
//                         delete thisCache[name[i]]
//                     }
//                     if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
//                         return
//                     }
//                 }
//             }
//             if (!pvt) {
//                 delete cache[id].data;
//                 if (!isEmptyDataObject(cache[id])) {
//                     return
//                 }
//             }
//             if (isNode) {
//                 jQuery.cleanData([elem], true)
//             } else if (jQuery.support.deleteExpando || cache != cache.window) {
//                 delete cache[id]
//             } else {
//                 cache[id] = null
//             }
//         }
//         jQuery.extend({
//             cache: {},
//             noData: {
//                 applet: true,
//                 embed: true,
//                 object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
//             },
//             hasData: function (elem) {
//                 elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
//                 return !!elem && !isEmptyDataObject(elem)
//             },
//             data: function (elem, name, data) {
//                 return internalData(elem, name, data)
//             },
//             removeData: function (elem, name) {
//                 return internalRemoveData(elem, name)
//             },
//             _data: function (elem, name, data) {
//                 return internalData(elem, name, data, true)
//             },
//             _removeData: function (elem, name) {
//                 return internalRemoveData(elem, name, true)
//             },
//             acceptData: function (elem) {
//                 if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
//                     return false
//                 }
//                 var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
//                 return !noData || noData !== true && elem.getAttribute("classid") === noData
//             }
//         });
//         jQuery.fn.extend({
//             data: function (key, value) {
//                 var attrs, name, data = null,
//                     i = 0,
//                     elem = this[0];
//                 if (key === undefined) {
//                     if (this.length) {
//                         data = jQuery.data(elem);
//                         if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
//                             attrs = elem.attributes;
//                             for (; i < attrs.length; i++) {
//                                 name = attrs[i].name;
//                                 if (name.indexOf("data-") === 0) {
//                                     name = jQuery.camelCase(name.slice(5));
//                                     dataAttr(elem, name, data[name])
//                                 }
//                             }
//                             jQuery._data(elem, "parsedAttrs", true)
//                         }
//                     }
//                     return data
//                 }
//                 if (typeof key === "object") {
//                     return this.each(function () {
//                         jQuery.data(this, key)
//                     })
//                 }
//                 return arguments.length > 1 ? this.each(function () {
//                     jQuery.data(this, key, value)
//                 }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null
//             },
//             removeData: function (key) {
//                 return this.each(function () {
//                     jQuery.removeData(this, key)
//                 })
//             }
//         });

//         function dataAttr(elem, key, data) {
//             if (data === undefined && elem.nodeType === 1) {
//                 var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
//                 data = elem.getAttribute(name);
//                 if (typeof data === "string") {
//                     try {
//                         data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data
//                     } catch (e) {}
//                     jQuery.data(elem, key, data)
//                 } else {
//                     data = undefined
//                 }
//             }
//             return data
//         }

//         function isEmptyDataObject(obj) {
//             var name;
//             for (name in obj) {
//                 if (name === "data" && jQuery.isEmptyObject(obj[name])) {
//                     continue
//                 }
//                 if (name !== "toJSON") {
//                     return false
//                 }
//             }
//             return true
//         }
//         jQuery.extend({
//             queue: function (elem, type, data) {
//                 var queue;
//                 if (elem) {
//                     type = (type || "fx") + "queue";
//                     queue = jQuery._data(elem, type);
//                     if (data) {
//                         if (!queue || jQuery.isArray(data)) {
//                             queue = jQuery._data(elem, type, jQuery.makeArray(data))
//                         } else {
//                             queue.push(data)
//                         }
//                     }
//                     return queue || []
//                 }
//             },
//             dequeue: function (elem, type) {
//                 type = type || "fx";
//                 var queue = jQuery.queue(elem, type),
//                     startLength = queue.length,
//                     fn = queue.shift(),
//                     hooks = jQuery._queueHooks(elem, type),
//                     next = function () {
//                         jQuery.dequeue(elem, type)
//                     };
//                 if (fn === "inprogress") {
//                     fn = queue.shift();
//                     startLength--
//                 }
//                 if (fn) {
//                     if (type === "fx") {
//                         queue.unshift("inprogress")
//                     }
//                     delete hooks.stop;
//                     fn.call(elem, next, hooks)
//                 }
//                 if (!startLength && hooks) {
//                     hooks.empty.fire()
//                 }
//             },
//             _queueHooks: function (elem, type) {
//                 var key = type + "queueHooks";
//                 return jQuery._data(elem, key) || jQuery._data(elem, key, {
//                     empty: jQuery.Callbacks("once memory").add(function () {
//                         jQuery._removeData(elem, type + "queue");
//                         jQuery._removeData(elem, key)
//                     })
//                 })
//             }
//         });
//         jQuery.fn.extend({
//             queue: function (type, data) {
//                 var setter = 2;
//                 if (typeof type !== "string") {
//                     data = type;
//                     type = "fx";
//                     setter--
//                 }
//                 if (arguments.length < setter) {
//                     return jQuery.queue(this[0], type)
//                 }
//                 return data === undefined ? this : this.each(function () {
//                     var queue = jQuery.queue(this, type, data);
//                     jQuery._queueHooks(this, type);
//                     if (type === "fx" && queue[0] !== "inprogress") {
//                         jQuery.dequeue(this, type)
//                     }
//                 })
//             },
//             dequeue: function (type) {
//                 return this.each(function () {
//                     jQuery.dequeue(this, type)
//                 })
//             },
//             delay: function (time, type) {
//                 time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
//                 type = type || "fx";
//                 return this.queue(type, function (next, hooks) {
//                     var timeout = setTimeout(next, time);
//                     hooks.stop = function () {
//                         clearTimeout(timeout)
//                     }
//                 })
//             },
//             clearQueue: function (type) {
//                 return this.queue(type || "fx", [])
//             },
//             promise: function (type, obj) {
//                 var tmp, count = 1,
//                     defer = jQuery.Deferred(),
//                     elements = this,
//                     i = this.length,
//                     resolve = function () {
//                         if (!--count) {
//                             defer.resolveWith(elements, [elements])
//                         }
//                     };
//                 if (typeof type !== "string") {
//                     obj = type;
//                     type = undefined
//                 }
//                 type = type || "fx";
//                 while (i--) {
//                     tmp = jQuery._data(elements[i], type + "queueHooks");
//                     if (tmp && tmp.empty) {
//                         count++;
//                         tmp.empty.add(resolve)
//                     }
//                 }
//                 resolve();
//                 return defer.promise(obj)
//             }
//         });
//         var nodeHook, boolHook, rclass = /[\t\r\n\f]/g,
//             rreturn = /\r/g,
//             rfocusable = /^(?:input|select|textarea|button|object)$/i,
//             rclickable = /^(?:a|area)$/i,
//             ruseDefault = /^(?:checked|selected)$/i,
//             getSetAttribute = jQuery.support.getSetAttribute,
//             getSetInput = jQuery.support.input;
//         jQuery.fn.extend({
//             attr: function (name, value) {
//                 return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1)
//             },
//             removeAttr: function (name) {
//                 return this.each(function () {
//                     jQuery.removeAttr(this, name)
//                 })
//             },
//             prop: function (name, value) {
//                 return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1)
//             },
//             removeProp: function (name) {
//                 name = jQuery.propFix[name] || name;
//                 return this.each(function () {
//                     try {
//                         this[name] = undefined;
//                         delete this[name]
//                     } catch (e) {}
//                 })
//             },
//             addClass: function (value) {
//                 var classes, elem, cur, clazz, j, i = 0,
//                     len = this.length,
//                     proceed = typeof value === "string" && value;
//                 if (jQuery.isFunction(value)) {
//                     return this.each(function (j) {
//                         jQuery(this).addClass(value.call(this, j, this.className))
//                     })
//                 }
//                 if (proceed) {
//                     classes = (value || "").match(core_rnotwhite) || [];
//                     for (; i < len; i++) {
//                         elem = this[i];
//                         cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
//                         if (cur) {
//                             j = 0;
//                             while (clazz = classes[j++]) {
//                                 if (cur.indexOf(" " + clazz + " ") < 0) {
//                                     cur += clazz + " "
//                                 }
//                             }
//                             elem.className = jQuery.trim(cur)
//                         }
//                     }
//                 }
//                 return this
//             },
//             removeClass: function (value) {
//                 var classes, elem, cur, clazz, j, i = 0,
//                     len = this.length,
//                     proceed = arguments.length === 0 || typeof value === "string" && value;
//                 if (jQuery.isFunction(value)) {
//                     return this.each(function (j) {
//                         jQuery(this).removeClass(value.call(this, j, this.className))
//                     })
//                 }
//                 if (proceed) {
//                     classes = (value || "").match(core_rnotwhite) || [];
//                     for (; i < len; i++) {
//                         elem = this[i];
//                         cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
//                         if (cur) {
//                             j = 0;
//                             while (clazz = classes[j++]) {
//                                 while (cur.indexOf(" " + clazz + " ") >= 0) {
//                                     cur = cur.replace(" " + clazz + " ", " ")
//                                 }
//                             }
//                             elem.className = value ? jQuery.trim(cur) : ""
//                         }
//                     }
//                 }
//                 return this
//             },
//             toggleClass: function (value, stateVal) {
//                 var type = typeof value;
//                 if (typeof stateVal === "boolean" && type === "string") {
//                     return stateVal ? this.addClass(value) : this.removeClass(value)
//                 }
//                 if (jQuery.isFunction(value)) {
//                     return this.each(function (i) {
//                         jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal)
//                     })
//                 }
//                 return this.each(function () {
//                     if (type === "string") {
//                         var className, i = 0,
//                             self = jQuery(this),
//                             classNames = value.match(core_rnotwhite) || [];
//                         while (className = classNames[i++]) {
//                             if (self.hasClass(className)) {
//                                 self.removeClass(className)
//                             } else {
//                                 self.addClass(className)
//                             }
//                         }
//                     } else if (type === core_strundefined || type === "boolean") {
//                         if (this.className) {
//                             jQuery._data(this, "__className__", this.className)
//                         }
//                         this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || ""
//                     }
//                 })
//             },
//             hasClass: function (selector) {
//                 var className = " " + selector + " ",
//                     i = 0,
//                     l = this.length;
//                 for (; i < l; i++) {
//                     if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
//                         return true
//                     }
//                 }
//                 return false
//             },
//             val: function (value) {
//                 var ret, hooks, isFunction, elem = this[0];
//                 if (!arguments.length) {
//                     if (elem) {
//                         hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
//                         if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
//                             return ret
//                         }
//                         ret = elem.value;
//                         return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret
//                     }
//                     return
//                 }
//                 isFunction = jQuery.isFunction(value);
//                 return this.each(function (i) {
//                     var val;
//                     if (this.nodeType !== 1) {
//                         return
//                     }
//                     if (isFunction) {
//                         val = value.call(this, i, jQuery(this).val())
//                     } else {
//                         val = value
//                     } if (val == null) {
//                         val = ""
//                     } else if (typeof val === "number") {
//                         val += ""
//                     } else if (jQuery.isArray(val)) {
//                         val = jQuery.map(val, function (value) {
//                             return value == null ? "" : value + ""
//                         })
//                     }
//                     hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
//                     if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
//                         this.value = val
//                     }
//                 })
//             }
//         });
//         jQuery.extend({
//             valHooks: {
//                 option: {
//                     get: function (elem) {
//                         var val = jQuery.find.attr(elem, "value");
//                         return val != null ? val : elem.text
//                     }
//                 },
//                 select: {
//                     get: function (elem) {
//                         var value, option, options = elem.options,
//                             index = elem.selectedIndex,
//                             one = elem.type === "select-one" || index < 0,
//                             values = one ? null : [],
//                             max = one ? index + 1 : options.length,
//                             i = index < 0 ? max : one ? index : 0;
//                         for (; i < max; i++) {
//                             option = options[i];
//                             if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
//                                 value = jQuery(option).val();
//                                 if (one) {
//                                     return value
//                                 }
//                                 values.push(value)
//                             }
//                         }
//                         return values
//                     },
//                     set: function (elem, value) {
//                         var optionSet, option, options = elem.options,
//                             values = jQuery.makeArray(value),
//                             i = options.length;
//                         while (i--) {
//                             option = options[i];
//                             if (option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0) {
//                                 optionSet = true
//                             }
//                         }
//                         if (!optionSet) {
//                             elem.selectedIndex = -1
//                         }
//                         return values
//                     }
//                 }
//             },
//             attr: function (elem, name, value) {
//                 var hooks, ret, nType = elem.nodeType;
//                 if (!elem || nType === 3 || nType === 8 || nType === 2) {
//                     return
//                 }
//                 if (typeof elem.getAttribute === core_strundefined) {
//                     return jQuery.prop(elem, name, value)
//                 }
//                 if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
//                     name = name.toLowerCase();
//                     hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)
//                 }
//                 if (value !== undefined) {
//                     if (value === null) {
//                         jQuery.removeAttr(elem, name)
//                     } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
//                         return ret
//                     } else {
//                         elem.setAttribute(name, value + "");
//                         return value
//                     }
//                 } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
//                     return ret
//                 } else {
//                     ret = jQuery.find.attr(elem, name);
//                     return ret == null ? undefined : ret
//                 }
//             },
//             removeAttr: function (elem, value) {
//                 var name, propName, i = 0,
//                     attrNames = value && value.match(core_rnotwhite);
//                 if (attrNames && elem.nodeType === 1) {
//                     while (name = attrNames[i++]) {
//                         propName = jQuery.propFix[name] || name;
//                         if (jQuery.expr.match.bool.test(name)) {
//                             if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
//                                 elem[propName] = false
//                             } else {
//                                 elem[jQuery.camelCase("default-" + name)] = elem[propName] = false
//                             }
//                         } else {
//                             jQuery.attr(elem, name, "")
//                         }
//                         elem.removeAttribute(getSetAttribute ? name : propName)
//                     }
//                 }
//             },
//             attrHooks: {
//                 type: {
//                     set: function (elem, value) {
//                         if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
//                             var val = elem.value;
//                             elem.setAttribute("type", value);
//                             if (val) {
//                                 elem.value = val
//                             }
//                             return value
//                         }
//                     }
//                 }
//             },
//             propFix: {
//                 "for": "htmlFor",
//                 "class": "className"
//             },
//             prop: function (elem, name, value) {
//                 var ret, hooks, notxml, nType = elem.nodeType;
//                 if (!elem || nType === 3 || nType === 8 || nType === 2) {
//                     return
//                 }
//                 notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
//                 if (notxml) {
//                     name = jQuery.propFix[name] || name;
//                     hooks = jQuery.propHooks[name]
//                 }
//                 if (value !== undefined) {
//                     return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value
//                 } else {
//                     return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name]
//                 }
//             },
//             propHooks: {
//                 tabIndex: {
//                     get: function (elem) {
//                         var tabindex = jQuery.find.attr(elem, "tabindex");
//                         return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
//                     }
//                 }
//             }
//         });
//         boolHook = {
//             set: function (elem, value, name) {
//                 if (value === false) {
//                     jQuery.removeAttr(elem, name)
//                 } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
//                     elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name)
//                 } else {
//                     elem[jQuery.camelCase("default-" + name)] = elem[name] = true
//                 }
//                 return name
//             }
//         };
//         jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
//             var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
//             jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function (elem, name, isXML) {
//                 var fn = jQuery.expr.attrHandle[name],
//                     ret = isXML ? undefined : (jQuery.expr.attrHandle[name] = undefined) != getter(elem, name, isXML) ? name.toLowerCase() : null;
//                 jQuery.expr.attrHandle[name] = fn;
//                 return ret
//             } : function (elem, name, isXML) {
//                 return isXML ? undefined : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null
//             }
//         });
//         if (!getSetInput || !getSetAttribute) {
//             jQuery.attrHooks.value = {
//                 set: function (elem, value, name) {
//                     if (jQuery.nodeName(elem, "input")) {
//                         elem.defaultValue = value
//                     } else {
//                         return nodeHook && nodeHook.set(elem, value, name)
//                     }
//                 }
//             }
//         }
//         if (!getSetAttribute) {
//             nodeHook = {
//                 set: function (elem, value, name) {
//                     var ret = elem.getAttributeNode(name);
//                     if (!ret) {
//                         elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name))
//                     }
//                     ret.value = value += "";
//                     return name === "value" || value === elem.getAttribute(name) ? value : undefined
//                 }
//             };
//             jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords = function (elem, name, isXML) {
//                 var ret;
//                 return isXML ? undefined : (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null
//             };
//             jQuery.valHooks.button = {
//                 get: function (elem, name) {
//                     var ret = elem.getAttributeNode(name);
//                     return ret && ret.specified ? ret.value : undefined
//                 },
//                 set: nodeHook.set
//             };
//             jQuery.attrHooks.contenteditable = {
//                 set: function (elem, value, name) {
//                     nodeHook.set(elem, value === "" ? false : value, name)
//                 }
//             };
//             jQuery.each(["width", "height"], function (i, name) {
//                 jQuery.attrHooks[name] = {
//                     set: function (elem, value) {
//                         if (value === "") {
//                             elem.setAttribute(name, "auto");
//                             return value
//                         }
//                     }
//                 }
//             })
//         }
//         if (!jQuery.support.hrefNormalized) {
//             jQuery.each(["href", "src"], function (i, name) {
//                 jQuery.propHooks[name] = {
//                     get: function (elem) {
//                         return elem.getAttribute(name, 4)
//                     }
//                 }
//             })
//         }
//         if (!jQuery.support.style) {
//             jQuery.attrHooks.style = {
//                 get: function (elem) {
//                     return elem.style.cssText || undefined
//                 },
//                 set: function (elem, value) {
//                     return elem.style.cssText = value + ""
//                 }
//             }
//         }
//         if (!jQuery.support.optSelected) {
//             jQuery.propHooks.selected = {
//                 get: function (elem) {
//                     var parent = elem.parentNode;
//                     if (parent) {
//                         parent.selectedIndex;
//                         if (parent.parentNode) {
//                             parent.parentNode.selectedIndex
//                         }
//                     }
//                     return null
//                 }
//             }
//         }
//         jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
//             jQuery.propFix[this.toLowerCase()] = this
//         });
//         if (!jQuery.support.enctype) {
//             jQuery.propFix.enctype = "encoding"
//         }
//         jQuery.each(["radio", "checkbox"], function () {
//             jQuery.valHooks[this] = {
//                 set: function (elem, value) {
//                     if (jQuery.isArray(value)) {
//                         return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0
//                     }
//                 }
//             };
//             if (!jQuery.support.checkOn) {
//                 jQuery.valHooks[this].get = function (elem) {
//                     return elem.getAttribute("value") === null ? "on" : elem.value
//                 }
//             }
//         });
//         var rformElems = /^(?:input|select|textarea)$/i,
//             rkeyEvent = /^key/,
//             rmouseEvent = /^(?:mouse|contextmenu)|click/,
//             rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
//             rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

//         function returnTrue() {
//             return true
//         }

//         function returnFalse() {
//             return false
//         }

//         function safeActiveElement() {
//             try {
//                 return document.activeElement
//             } catch (err) {}
//         }
//         jQuery.event = {
//             global: {},
//             add: function (elem, types, handler, data, selector) {
//                 var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
//                 if (!elemData) {
//                     return
//                 }
//                 if (handler.handler) {
//                     handleObjIn = handler;
//                     handler = handleObjIn.handler;
//                     selector = handleObjIn.selector
//                 }
//                 if (!handler.guid) {
//                     handler.guid = jQuery.guid++
//                 }
//                 if (!(events = elemData.events)) {
//                     events = elemData.events = {}
//                 }
//                 if (!(eventHandle = elemData.handle)) {
//                     eventHandle = elemData.handle = function (e) {
//                         return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined
//                     };
//                     eventHandle.elem = elem
//                 }
//                 types = (types || "").match(core_rnotwhite) || [""];
//                 t = types.length;
//                 while (t--) {
//                     tmp = rtypenamespace.exec(types[t]) || [];
//                     type = origType = tmp[1];
//                     namespaces = (tmp[2] || "").split(".").sort();
//                     if (!type) {
//                         continue
//                     }
//                     special = jQuery.event.special[type] || {};
//                     type = (selector ? special.delegateType : special.bindType) || type;
//                     special = jQuery.event.special[type] || {};
//                     handleObj = jQuery.extend({
//                         type: type,
//                         origType: origType,
//                         data: data,
//                         handler: handler,
//                         guid: handler.guid,
//                         selector: selector,
//                         needsContext: selector && jQuery.expr.match.needsContext.test(selector),
//                         namespace: namespaces.join(".")
//                     }, handleObjIn);
//                     if (!(handlers = events[type])) {
//                         handlers = events[type] = [];
//                         handlers.delegateCount = 0;
//                         if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
//                             if (elem.addEventListener) {
//                                 elem.addEventListener(type, eventHandle, false)
//                             } else if (elem.attachEvent) {
//                                 elem.attachEvent("on" + type, eventHandle)
//                             }
//                         }
//                     }
//                     if (special.add) {
//                         special.add.call(elem, handleObj);
//                         if (!handleObj.handler.guid) {
//                             handleObj.handler.guid = handler.guid
//                         }
//                     }
//                     if (selector) {
//                         handlers.splice(handlers.delegateCount++, 0, handleObj)
//                     } else {
//                         handlers.push(handleObj)
//                     }
//                     jQuery.event.global[type] = true
//                 }
//                 elem = null
//             },
//             remove: function (elem, types, handler, selector, mappedTypes) {
//                 var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
//                 if (!elemData || !(events = elemData.events)) {
//                     return
//                 }
//                 types = (types || "").match(core_rnotwhite) || [""];
//                 t = types.length;
//                 while (t--) {
//                     tmp = rtypenamespace.exec(types[t]) || [];
//                     type = origType = tmp[1];
//                     namespaces = (tmp[2] || "").split(".").sort();
//                     if (!type) {
//                         for (type in events) {
//                             jQuery.event.remove(elem, type + types[t], handler, selector, true)
//                         }
//                         continue
//                     }
//                     special = jQuery.event.special[type] || {};
//                     type = (selector ? special.delegateType : special.bindType) || type;
//                     handlers = events[type] || [];
//                     tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
//                     origCount = j = handlers.length;
//                     while (j--) {
//                         handleObj = handlers[j];
//                         if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
//                             handlers.splice(j, 1);
//                             if (handleObj.selector) {
//                                 handlers.delegateCount--
//                             }
//                             if (special.remove) {
//                                 special.remove.call(elem, handleObj)
//                             }
//                         }
//                     }
//                     if (origCount && !handlers.length) {
//                         if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
//                             jQuery.removeEvent(elem, type, elemData.handle)
//                         }
//                         delete events[type]
//                     }
//                 }
//                 if (jQuery.isEmptyObject(events)) {
//                     delete elemData.handle;
//                     jQuery._removeData(elem, "events")
//                 }
//             },
//             trigger: function (event, data, elem, onlyHandlers) {
//                 var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document],
//                     type = core_hasOwn.call(event, "type") ? event.type : event,
//                     namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
//                 cur = tmp = elem = elem || document;
//                 if (elem.nodeType === 3 || elem.nodeType === 8) {
//                     return
//                 }
//                 if (rfocusMorph.test(type + jQuery.event.triggered)) {
//                     return
//                 }
//                 if (type.indexOf(".") >= 0) {
//                     namespaces = type.split(".");
//                     type = namespaces.shift();
//                     namespaces.sort()
//                 }
//                 ontype = type.indexOf(":") < 0 && "on" + type;
//                 event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
//                 event.isTrigger = onlyHandlers ? 2 : 3;
//                 event.namespace = namespaces.join(".");
//                 event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
//                 event.result = undefined;
//                 if (!event.target) {
//                     event.target = elem
//                 }
//                 data = data == null ? [event] : jQuery.makeArray(data, [event]);
//                 special = jQuery.event.special[type] || {};
//                 if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
//                     return
//                 }
//                 if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
//                     bubbleType = special.delegateType || type;
//                     if (!rfocusMorph.test(bubbleType + type)) {
//                         cur = cur.parentNode
//                     }
//                     for (; cur; cur = cur.parentNode) {
//                         eventPath.push(cur);
//                         tmp = cur
//                     }
//                     if (tmp === (elem.ownerDocument || document)) {
//                         eventPath.push(tmp.defaultView || tmp.parentWindow || window)
//                     }
//                 }
//                 i = 0;
//                 while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
//                     event.type = i > 1 ? bubbleType : special.bindType || type;
//                     handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
//                     if (handle) {
//                         handle.apply(cur, data)
//                     }
//                     handle = ontype && cur[ontype];
//                     if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
//                         event.preventDefault()
//                     }
//                 }
//                 event.type = type;
//                 if (!onlyHandlers && !event.isDefaultPrevented()) {
//                     if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
//                         if (ontype && elem[type] && !jQuery.isWindow(elem)) {
//                             tmp = elem[ontype];
//                             if (tmp) {
//                                 elem[ontype] = null
//                             }
//                             jQuery.event.triggered = type;
//                             try {
//                                 elem[type]()
//                             } catch (e) {}
//                             jQuery.event.triggered = undefined;
//                             if (tmp) {
//                                 elem[ontype] = tmp
//                             }
//                         }
//                     }
//                 }
//                 return event.result
//             },
//             dispatch: function (event) {
//                 event = jQuery.event.fix(event);
//                 var i, ret, handleObj, matched, j, handlerQueue = [],
//                     args = core_slice.call(arguments),
//                     handlers = (jQuery._data(this, "events") || {})[event.type] || [],
//                     special = jQuery.event.special[event.type] || {};
//                 args[0] = event;
//                 event.delegateTarget = this;
//                 if (special.preDispatch && special.preDispatch.call(this, event) === false) {
//                     return
//                 }
//                 handlerQueue = jQuery.event.handlers.call(this, event, handlers);
//                 i = 0;
//                 while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
//                     event.currentTarget = matched.elem;
//                     j = 0;
//                     while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
//                         if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
//                             event.handleObj = handleObj;
//                             event.data = handleObj.data;
//                             ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
//                             if (ret !== undefined) {
//                                 if ((event.result = ret) === false) {
//                                     event.preventDefault();
//                                     event.stopPropagation()
//                                 }
//                             }
//                         }
//                     }
//                 }
//                 if (special.postDispatch) {
//                     special.postDispatch.call(this, event)
//                 }
//                 return event.result
//             },
//             handlers: function (event, handlers) {
//                 var sel, handleObj, matches, i, handlerQueue = [],
//                     delegateCount = handlers.delegateCount,
//                     cur = event.target;
//                 if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
//                     for (; cur != this; cur = cur.parentNode || this) {
//                         if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
//                             matches = [];
//                             for (i = 0; i < delegateCount; i++) {
//                                 handleObj = handlers[i];
//                                 sel = handleObj.selector + " ";
//                                 if (matches[sel] === undefined) {
//                                     matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length
//                                 }
//                                 if (matches[sel]) {
//                                     matches.push(handleObj)
//                                 }
//                             }
//                             if (matches.length) {
//                                 handlerQueue.push({
//                                     elem: cur,
//                                     handlers: matches
//                                 })
//                             }
//                         }
//                     }
//                 }
//                 if (delegateCount < handlers.length) {
//                     handlerQueue.push({
//                         elem: this,
//                         handlers: handlers.slice(delegateCount)
//                     })
//                 }
//                 return handlerQueue
//             },
//             fix: function (event) {
//                 if (event[jQuery.expando]) {
//                     return event
//                 }
//                 var i, prop, copy, type = event.type,
//                     originalEvent = event,
//                     fixHook = this.fixHooks[type];
//                 if (!fixHook) {
//                     this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}
//                 }
//                 copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
//                 event = new jQuery.Event(originalEvent);
//                 i = copy.length;
//                 while (i--) {
//                     prop = copy[i];
//                     event[prop] = originalEvent[prop]
//                 }
//                 if (!event.target) {
//                     event.target = originalEvent.srcElement || document
//                 }
//                 if (event.target.nodeType === 3) {
//                     event.target = event.target.parentNode
//                 }
//                 event.metaKey = !! event.metaKey;
//                 return fixHook.filter ? fixHook.filter(event, originalEvent) : event
//             },
//             props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
//             fixHooks: {},
//             keyHooks: {
//                 props: "char charCode key keyCode".split(" "),
//                 filter: function (event, original) {
//                     if (event.which == null) {
//                         event.which = original.charCode != null ? original.charCode : original.keyCode
//                     }
//                     return event
//                 }
//             },
//             mouseHooks: {
//                 props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
//                 filter: function (event, original) {
//                     var body, eventDoc, doc, button = original.button,
//                         fromElement = original.fromElement;
//                     if (event.pageX == null && original.clientX != null) {
//                         eventDoc = event.target.ownerDocument || document;
//                         doc = eventDoc.documentElement;
//                         body = eventDoc.body;
//                         event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
//                         event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
//                     }
//                     if (!event.relatedTarget && fromElement) {
//                         event.relatedTarget = fromElement === event.target ? original.toElement : fromElement
//                     }
//                     if (!event.which && button !== undefined) {
//                         event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0
//                     }
//                     return event
//                 }
//             },
//             special: {
//                 load: {
//                     noBubble: true
//                 },
//                 focus: {
//                     trigger: function () {
//                         if (this !== safeActiveElement() && this.focus) {
//                             try {
//                                 this.focus();
//                                 return false
//                             } catch (e) {}
//                         }
//                     },
//                     delegateType: "focusin"
//                 },
//                 blur: {
//                     trigger: function () {
//                         if (this === safeActiveElement() && this.blur) {
//                             this.blur();
//                             return false
//                         }
//                     },
//                     delegateType: "focusout"
//                 },
//                 click: {
//                     trigger: function () {
//                         if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
//                             this.click();
//                             return false
//                         }
//                     },
//                     _default: function (event) {
//                         return jQuery.nodeName(event.target, "a")
//                     }
//                 },
//                 beforeunload: {
//                     postDispatch: function (event) {
//                         if (event.result !== undefined) {
//                             event.originalEvent.returnValue = event.result
//                         }
//                     }
//                 }
//             },
//             simulate: function (type, elem, event, bubble) {
//                 var e = jQuery.extend(new jQuery.Event, event, {
//                     type: type,
//                     isSimulated: true,
//                     originalEvent: {}
//                 });
//                 if (bubble) {
//                     jQuery.event.trigger(e, null, elem)
//                 } else {
//                     jQuery.event.dispatch.call(elem, e)
//                 } if (e.isDefaultPrevented()) {
//                     event.preventDefault()
//                 }
//             }
//         };
//         jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
//             if (elem.removeEventListener) {
//                 elem.removeEventListener(type, handle, false)
//             }
//         } : function (elem, type, handle) {
//             var name = "on" + type;
//             if (elem.detachEvent) {
//                 if (typeof elem[name] === core_strundefined) {
//                     elem[name] = null
//                 }
//                 elem.detachEvent(name, handle)
//             }
//         };
//         jQuery.Event = function (src, props) {
//             if (!(this instanceof jQuery.Event)) {
//                 return new jQuery.Event(src, props)
//             }
//             if (src && src.type) {
//                 this.originalEvent = src;
//                 this.type = src.type;
//                 this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse
//             } else {
//                 this.type = src
//             } if (props) {
//                 jQuery.extend(this, props)
//             }
//             this.timeStamp = src && src.timeStamp || jQuery.now();
//             this[jQuery.expando] = true
//         };
//         jQuery.Event.prototype = {
//             isDefaultPrevented: returnFalse,
//             isPropagationStopped: returnFalse,
//             isImmediatePropagationStopped: returnFalse,
//             preventDefault: function () {
//                 var e = this.originalEvent;
//                 this.isDefaultPrevented = returnTrue;
//                 if (!e) {
//                     return
//                 }
//                 if (e.preventDefault) {
//                     e.preventDefault()
//                 } else {
//                     e.returnValue = false
//                 }
//             },
//             stopPropagation: function () {
//                 var e = this.originalEvent;
//                 this.isPropagationStopped = returnTrue;
//                 if (!e) {
//                     return
//                 }
//                 if (e.stopPropagation) {
//                     e.stopPropagation()
//                 }
//                 e.cancelBubble = true
//             },
//             stopImmediatePropagation: function () {
//                 this.isImmediatePropagationStopped = returnTrue;
//                 this.stopPropagation()
//             }
//         };
//         jQuery.each({
//             mouseenter: "mouseover",
//             mouseleave: "mouseout"
//         }, function (orig, fix) {
//             jQuery.event.special[orig] = {
//                 delegateType: fix,
//                 bindType: fix,
//                 handle: function (event) {
//                     var ret, target = this,
//                         related = event.relatedTarget,
//                         handleObj = event.handleObj;
//                     if (!related || related !== target && !jQuery.contains(target, related)) {
//                         event.type = handleObj.origType;
//                         ret = handleObj.handler.apply(this, arguments);
//                         event.type = fix
//                     }
//                     return ret
//                 }
//             }
//         });
//         if (!jQuery.support.submitBubbles) {
//             jQuery.event.special.submit = {
//                 setup: function () {
//                     if (jQuery.nodeName(this, "form")) {
//                         return false
//                     }
//                     jQuery.event.add(this, "click._submit keypress._submit", function (e) {
//                         var elem = e.target,
//                             form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
//                         if (form && !jQuery._data(form, "submitBubbles")) {
//                             jQuery.event.add(form, "submit._submit", function (event) {
//                                 event._submit_bubble = true
//                             });
//                             jQuery._data(form, "submitBubbles", true)
//                         }
//                     })
//                 },
//                 postDispatch: function (event) {
//                     if (event._submit_bubble) {
//                         delete event._submit_bubble;
//                         if (this.parentNode && !event.isTrigger) {
//                             jQuery.event.simulate("submit", this.parentNode, event, true)
//                         }
//                     }
//                 },
//                 teardown: function () {
//                     if (jQuery.nodeName(this, "form")) {
//                         return false
//                     }
//                     jQuery.event.remove(this, "._submit")
//                 }
//             }
//         }
//         if (!jQuery.support.changeBubbles) {
//             jQuery.event.special.change = {
//                 setup: function () {
//                     if (rformElems.test(this.nodeName)) {
//                         if (this.type === "checkbox" || this.type === "radio") {
//                             jQuery.event.add(this, "propertychange._change", function (event) {
//                                 if (event.originalEvent.propertyName === "checked") {
//                                     this._just_changed = true
//                                 }
//                             });
//                             jQuery.event.add(this, "click._change", function (event) {
//                                 if (this._just_changed && !event.isTrigger) {
//                                     this._just_changed = false
//                                 }
//                                 jQuery.event.simulate("change", this, event, true)
//                             })
//                         }
//                         return false
//                     }
//                     jQuery.event.add(this, "beforeactivate._change", function (e) {
//                         var elem = e.target;
//                         if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
//                             jQuery.event.add(elem, "change._change", function (event) {
//                                 if (this.parentNode && !event.isSimulated && !event.isTrigger) {
//                                     jQuery.event.simulate("change", this.parentNode, event, true)
//                                 }
//                             });
//                             jQuery._data(elem, "changeBubbles", true)
//                         }
//                     })
//                 },
//                 handle: function (event) {
//                     var elem = event.target;
//                     if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
//                         return event.handleObj.handler.apply(this, arguments)
//                     }
//                 },
//                 teardown: function () {
//                     jQuery.event.remove(this, "._change");
//                     return !rformElems.test(this.nodeName)
//                 }
//             }
//         }
//         if (!jQuery.support.focusinBubbles) {
//             jQuery.each({
//                 focus: "focusin",
//                 blur: "focusout"
//             }, function (orig, fix) {
//                 var attaches = 0,
//                     handler = function (event) {
//                         jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true)
//                     };
//                 jQuery.event.special[fix] = {
//                     setup: function () {
//                         if (attaches++ === 0) {
//                             document.addEventListener(orig, handler, true)
//                         }
//                     },
//                     teardown: function () {
//                         if (--attaches === 0) {
//                             document.removeEventListener(orig, handler, true)
//                         }
//                     }
//                 }
//             })
//         }
//         jQuery.fn.extend({
//             on: function (types, selector, data, fn, one) {
//                 var type, origFn;
//                 if (typeof types === "object") {
//                     if (typeof selector !== "string") {
//                         data = data || selector;
//                         selector = undefined
//                     }
//                     for (type in types) {
//                         this.on(type, selector, data, types[type], one)
//                     }
//                     return this
//                 }
//                 if (data == null && fn == null) {
//                     fn = selector;
//                     data = selector = undefined
//                 } else if (fn == null) {
//                     if (typeof selector === "string") {
//                         fn = data;
//                         data = undefined
//                     } else {
//                         fn = data;
//                         data = selector;
//                         selector = undefined
//                     }
//                 }
//                 if (fn === false) {
//                     fn = returnFalse
//                 } else if (!fn) {
//                     return this
//                 }
//                 if (one === 1) {
//                     origFn = fn;
//                     fn = function (event) {
//                         jQuery().off(event);
//                         return origFn.apply(this, arguments)
//                     };
//                     fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
//                 }
//                 return this.each(function () {
//                     jQuery.event.add(this, types, fn, data, selector)
//                 })
//             },
//             one: function (types, selector, data, fn) {
//                 return this.on(types, selector, data, fn, 1)
//             },
//             off: function (types, selector, fn) {
//                 var handleObj, type;
//                 if (types && types.preventDefault && types.handleObj) {
//                     handleObj = types.handleObj;
//                     jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
//                     return this
//                 }
//                 if (typeof types === "object") {
//                     for (type in types) {
//                         this.off(type, selector, types[type])
//                     }
//                     return this
//                 }
//                 if (selector === false || typeof selector === "function") {
//                     fn = selector;
//                     selector = undefined
//                 }
//                 if (fn === false) {
//                     fn = returnFalse
//                 }
//                 return this.each(function () {
//                     jQuery.event.remove(this, types, fn, selector)
//                 })
//             },
//             trigger: function (type, data) {
//                 return this.each(function () {
//                     jQuery.event.trigger(type, data, this)
//                 })
//             },
//             triggerHandler: function (type, data) {
//                 var elem = this[0];
//                 if (elem) {
//                     return jQuery.event.trigger(type, data, elem, true)
//                 }
//             }
//         });
//         var isSimple = /^.[^:#\[\.,]*$/,
//             rparentsprev = /^(?:parents|prev(?:Until|All))/,
//             rneedsContext = jQuery.expr.match.needsContext,
//             guaranteedUnique = {
//                 children: true,
//                 contents: true,
//                 next: true,
//                 prev: true
//             };
//         jQuery.fn.extend({
//             find: function (selector) {
//                 var i, ret = [],
//                     self = this,
//                     len = self.length;
//                 if (typeof selector !== "string") {
//                     return this.pushStack(jQuery(selector).filter(function () {
//                         for (i = 0; i < len; i++) {
//                             if (jQuery.contains(self[i], this)) {
//                                 return true
//                             }
//                         }
//                     }))
//                 }
//                 for (i = 0; i < len; i++) {
//                     jQuery.find(selector, self[i], ret)
//                 }
//                 ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
//                 ret.selector = this.selector ? this.selector + " " + selector : selector;
//                 return ret
//             },
//             has: function (target) {
//                 var i, targets = jQuery(target, this),
//                     len = targets.length;
//                 return this.filter(function () {
//                     for (i = 0; i < len; i++) {
//                         if (jQuery.contains(this, targets[i])) {
//                             return true
//                         }
//                     }
//                 })
//             },
//             not: function (selector) {
//                 return this.pushStack(winnow(this, selector || [], true))
//             },
//             filter: function (selector) {
//                 return this.pushStack(winnow(this, selector || [], false))
//             },
//             is: function (selector) {
//                 return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length
//             },
//             closest: function (selectors, context) {
//                 var cur, i = 0,
//                     l = this.length,
//                     ret = [],
//                     pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
//                 for (; i < l; i++) {
//                     for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
//                         if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
//                             cur = ret.push(cur);
//                             break
//                         }
//                     }
//                 }
//                 return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret)
//             },
//             index: function (elem) {
//                 if (!elem) {
//                     return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
//                 }
//                 if (typeof elem === "string") {
//                     return jQuery.inArray(this[0], jQuery(elem))
//                 }
//                 return jQuery.inArray(elem.jquery ? elem[0] : elem, this)
//             },
//             add: function (selector, context) {
//                 var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
//                     all = jQuery.merge(this.get(), set);
//                 return this.pushStack(jQuery.unique(all))
//             },
//             addBack: function (selector) {
//                 return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector))
//             }
//         });

//         function sibling(cur, dir) {
//             do {
//                 cur = cur[dir]
//             } while (cur && cur.nodeType !== 1);
//             return cur
//         }
//         jQuery.each({
//             parent: function (elem) {
//                 var parent = elem.parentNode;
//                 return parent && parent.nodeType !== 11 ? parent : null
//             },
//             parents: function (elem) {
//                 return jQuery.dir(elem, "parentNode")
//             },
//             parentsUntil: function (elem, i, until) {
//                 return jQuery.dir(elem, "parentNode", until)
//             },
//             next: function (elem) {
//                 return sibling(elem, "nextSibling")
//             },
//             prev: function (elem) {
//                 return sibling(elem, "previousSibling")
//             },
//             nextAll: function (elem) {
//                 return jQuery.dir(elem, "nextSibling")
//             },
//             prevAll: function (elem) {
//                 return jQuery.dir(elem, "previousSibling")
//             },
//             nextUntil: function (elem, i, until) {
//                 return jQuery.dir(elem, "nextSibling", until)
//             },
//             prevUntil: function (elem, i, until) {
//                 return jQuery.dir(elem, "previousSibling", until)
//             },
//             siblings: function (elem) {
//                 return jQuery.sibling((elem.parentNode || {}).firstChild, elem)
//             },
//             children: function (elem) {
//                 return jQuery.sibling(elem.firstChild)
//             },
//             contents: function (elem) {
//                 return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes)
//             }
//         }, function (name, fn) {
//             jQuery.fn[name] = function (until, selector) {
//                 var ret = jQuery.map(this, fn, until);
//                 if (name.slice(-5) !== "Until") {
//                     selector = until
//                 }
//                 if (selector && typeof selector === "string") {
//                     ret = jQuery.filter(selector, ret)
//                 }
//                 if (this.length > 1) {
//                     if (!guaranteedUnique[name]) {
//                         ret = jQuery.unique(ret)
//                     }
//                     if (rparentsprev.test(name)) {
//                         ret = ret.reverse()
//                     }
//                 }
//                 return this.pushStack(ret)
//             }
//         });
//         jQuery.extend({
//             filter: function (expr, elems, not) {
//                 var elem = elems[0];
//                 if (not) {
//                     expr = ":not(" + expr + ")"
//                 }
//                 return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
//                     return elem.nodeType === 1
//                 }))
//             },
//             dir: function (elem, dir, until) {
//                 var matched = [],
//                     cur = elem[dir];
//                 while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
//                     if (cur.nodeType === 1) {
//                         matched.push(cur)
//                     }
//                     cur = cur[dir]
//                 }
//                 return matched
//             },
//             sibling: function (n, elem) {
//                 var r = [];
//                 for (; n; n = n.nextSibling) {
//                     if (n.nodeType === 1 && n !== elem) {
//                         r.push(n)
//                     }
//                 }
//                 return r
//             }
//         });

//         function winnow(elements, qualifier, not) {
//             if (jQuery.isFunction(qualifier)) {
//                 return jQuery.grep(elements, function (elem, i) {
//                     return !!qualifier.call(elem, i, elem) !== not
//                 })
//             }
//             if (qualifier.nodeType) {
//                 return jQuery.grep(elements, function (elem) {
//                     return elem === qualifier !== not
//                 })
//             }
//             if (typeof qualifier === "string") {
//                 if (isSimple.test(qualifier)) {
//                     return jQuery.filter(qualifier, elements, not)
//                 }
//                 qualifier = jQuery.filter(qualifier, elements)
//             }
//             return jQuery.grep(elements, function (elem) {
//                 return jQuery.inArray(elem, qualifier) >= 0 !== not
//             })
//         }

//         function createSafeFragment(document) {
//             var list = nodeNames.split("|"),
//                 safeFrag = document.createDocumentFragment();
//             if (safeFrag.createElement) {
//                 while (list.length) {
//                     safeFrag.createElement(list.pop())
//                 }
//             }
//             return safeFrag
//         }
//         var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
//             rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
//             rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
//             rleadingWhitespace = /^\s+/,
//             rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
//             rtagName = /<([\w:]+)/,
//             rtbody = /<tbody/i,
//             rhtml = /<|&#?\w+;/,
//             rnoInnerhtml = /<(?:script|style|link)/i,
//             manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
//             rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
//             rscriptType = /^$|\/(?:java|ecma)script/i,
//             rscriptTypeMasked = /^true\/(.*)/,
//             rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
//             wrapMap = {
//                 option: [1, "<select multiple='multiple'>", "</select>"],
//                 legend: [1, "<fieldset>", "</fieldset>"],
//                 area: [1, "<map>", "</map>"],
//                 param: [1, "<object>", "</object>"],
//                 thead: [1, "<table>", "</table>"],
//                 tr: [2, "<table><tbody>", "</tbody></table>"],
//                 col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
//                 td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
//                 _default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
//             }, safeFragment = createSafeFragment(document),
//             fragmentDiv = safeFragment.appendChild(document.createElement("div"));
//         wrapMap.optgroup = wrapMap.option;
//         wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
//         wrapMap.th = wrapMap.td;
//         jQuery.fn.extend({
//             text: function (value) {
//                 return jQuery.access(this, function (value) {
//                     return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value))
//                 }, null, value, arguments.length)
//             },
//             append: function () {
//                 return this.domManip(arguments, function (elem) {
//                     if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
//                         var target = manipulationTarget(this, elem);
//                         target.appendChild(elem)
//                     }
//                 })
//             },
//             prepend: function () {
//                 return this.domManip(arguments, function (elem) {
//                     if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
//                         var target = manipulationTarget(this, elem);
//                         target.insertBefore(elem, target.firstChild)
//                     }
//                 })
//             },
//             before: function () {
//                 return this.domManip(arguments, function (elem) {
//                     if (this.parentNode) {
//                         this.parentNode.insertBefore(elem, this)
//                     }
//                 })
//             },
//             after: function () {
//                 return this.domManip(arguments, function (elem) {
//                     if (this.parentNode) {
//                         this.parentNode.insertBefore(elem, this.nextSibling)
//                     }
//                 })
//             },
//             remove: function (selector, keepData) {
//                 var elem, elems = selector ? jQuery.filter(selector, this) : this,
//                     i = 0;
//                 for (;
//                     (elem = elems[i]) != null; i++) {
//                     if (!keepData && elem.nodeType === 1) {
//                         jQuery.cleanData(getAll(elem))
//                     }
//                     if (elem.parentNode) {
//                         if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
//                             setGlobalEval(getAll(elem, "script"))
//                         }
//                         elem.parentNode.removeChild(elem)
//                     }
//                 }
//                 return this
//             },
//             empty: function () {
//                 var elem, i = 0;
//                 for (;
//                     (elem = this[i]) != null; i++) {
//                     if (elem.nodeType === 1) {
//                         jQuery.cleanData(getAll(elem, false))
//                     }
//                     while (elem.firstChild) {
//                         elem.removeChild(elem.firstChild)
//                     }
//                     if (elem.options && jQuery.nodeName(elem, "select")) {
//                         elem.options.length = 0
//                     }
//                 }
//                 return this
//             },
//             clone: function (dataAndEvents, deepDataAndEvents) {
//                 dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
//                 deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
//                 return this.map(function () {
//                     return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
//                 })
//             },
//             html: function (value) {
//                 return jQuery.access(this, function (value) {
//                     var elem = this[0] || {}, i = 0,
//                         l = this.length;
//                     if (value === undefined) {
//                         return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined
//                     }
//                     if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
//                         value = value.replace(rxhtmlTag, "<$1></$2>");
//                         try {
//                             for (; i < l; i++) {
//                                 elem = this[i] || {};
//                                 if (elem.nodeType === 1) {
//                                     jQuery.cleanData(getAll(elem, false));
//                                     elem.innerHTML = value
//                                 }
//                             }
//                             elem = 0
//                         } catch (e) {}
//                     }
//                     if (elem) {
//                         this.empty().append(value)
//                     }
//                 }, null, value, arguments.length)
//             },
//             replaceWith: function () {
//                 var args = jQuery.map(this, function (elem) {
//                     return [elem.nextSibling, elem.parentNode]
//                 }),
//                     i = 0;
//                 this.domManip(arguments, function (elem) {
//                     var next = args[i++],
//                         parent = args[i++];
//                     if (parent) {
//                         if (next && next.parentNode !== parent) {
//                             next = this.nextSibling
//                         }
//                         jQuery(this).remove();
//                         parent.insertBefore(elem, next)
//                     }
//                 }, true);
//                 return i ? this : this.remove()
//             },
//             detach: function (selector) {
//                 return this.remove(selector, true)
//             },
//             domManip: function (args, callback, allowIntersection) {
//                 args = core_concat.apply([], args);
//                 var first, node, hasScripts, scripts, doc, fragment, i = 0,
//                     l = this.length,
//                     set = this,
//                     iNoClone = l - 1,
//                     value = args[0],
//                     isFunction = jQuery.isFunction(value);
//                 if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
//                     return this.each(function (index) {
//                         var self = set.eq(index);
//                         if (isFunction) {
//                             args[0] = value.call(this, index, self.html())
//                         }
//                         self.domManip(args, callback, allowIntersection)
//                     })
//                 }
//                 if (l) {
//                     fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
//                     first = fragment.firstChild;
//                     if (fragment.childNodes.length === 1) {
//                         fragment = first
//                     }
//                     if (first) {
//                         scripts = jQuery.map(getAll(fragment, "script"), disableScript);
//                         hasScripts = scripts.length;
//                         for (; i < l; i++) {
//                             node = fragment;
//                             if (i !== iNoClone) {
//                                 node = jQuery.clone(node, true, true);
//                                 if (hasScripts) {
//                                     jQuery.merge(scripts, getAll(node, "script"))
//                                 }
//                             }
//                             callback.call(this[i], node, i)
//                         }
//                         if (hasScripts) {
//                             doc = scripts[scripts.length - 1].ownerDocument;
//                             jQuery.map(scripts, restoreScript);
//                             for (i = 0; i < hasScripts; i++) {
//                                 node = scripts[i];
//                                 if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
//                                     if (node.src) {
//                                         jQuery._evalUrl(node.src)
//                                     } else {
//                                         jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""))
//                                     }
//                                 }
//                             }
//                         }
//                         fragment = first = null
//                     }
//                 }
//                 return this
//             }
//         });

//         function manipulationTarget(elem, content) {
//             return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
//         }

//         function disableScript(elem) {
//             elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
//             return elem
//         }

//         function restoreScript(elem) {
//             var match = rscriptTypeMasked.exec(elem.type);
//             if (match) {
//                 elem.type = match[1]
//             } else {
//                 elem.removeAttribute("type")
//             }
//             return elem
//         }

//         function setGlobalEval(elems, refElements) {
//             var elem, i = 0;
//             for (;
//                 (elem = elems[i]) != null; i++) {
//                 jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"))
//             }
//         }

//         function cloneCopyEvent(src, dest) {
//             if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
//                 return
//             }
//             var type, i, l, oldData = jQuery._data(src),
//                 curData = jQuery._data(dest, oldData),
//                 events = oldData.events;
//             if (events) {
//                 delete curData.handle;
//                 curData.events = {};
//                 for (type in events) {
//                     for (i = 0, l = events[type].length; i < l; i++) {
//                         jQuery.event.add(dest, type, events[type][i])
//                     }
//                 }
//             }
//             if (curData.data) {
//                 curData.data = jQuery.extend({}, curData.data)
//             }
//         }

//         function fixCloneNodeIssues(src, dest) {
//             var nodeName, e, data;
//             if (dest.nodeType !== 1) {
//                 return
//             }
//             nodeName = dest.nodeName.toLowerCase();
//             if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
//                 data = jQuery._data(dest);
//                 for (e in data.events) {
//                     jQuery.removeEvent(dest, e, data.handle)
//                 }
//                 dest.removeAttribute(jQuery.expando)
//             }
//             if (nodeName === "script" && dest.text !== src.text) {
//                 disableScript(dest).text = src.text;
//                 restoreScript(dest)
//             } else if (nodeName === "object") {
//                 if (dest.parentNode) {
//                     dest.outerHTML = src.outerHTML
//                 }
//                 if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
//                     dest.innerHTML = src.innerHTML
//                 }
//             } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
//                 dest.defaultChecked = dest.checked = src.checked;
//                 if (dest.value !== src.value) {
//                     dest.value = src.value
//                 }
//             } else if (nodeName === "option") {
//                 dest.defaultSelected = dest.selected = src.defaultSelected
//             } else if (nodeName === "input" || nodeName === "textarea") {
//                 dest.defaultValue = src.defaultValue
//             }
//         }
//         jQuery.each({
//             appendTo: "append",
//             prependTo: "prepend",
//             insertBefore: "before",
//             insertAfter: "after",
//             replaceAll: "replaceWith"
//         }, function (name, original) {
//             jQuery.fn[name] = function (selector) {
//                 var elems, i = 0,
//                     ret = [],
//                     insert = jQuery(selector),
//                     last = insert.length - 1;
//                 for (; i <= last; i++) {
//                     elems = i === last ? this : this.clone(true);
//                     jQuery(insert[i])[original](elems);
//                     core_push.apply(ret, elems.get())
//                 }
//                 return this.pushStack(ret)
//             }
//         });

//         function getAll(context, tag) {
//             var elems, elem, i = 0,
//                 found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;
//             if (!found) {
//                 for (found = [], elems = context.childNodes || context;
//                     (elem = elems[i]) != null; i++) {
//                     if (!tag || jQuery.nodeName(elem, tag)) {
//                         found.push(elem)
//                     } else {
//                         jQuery.merge(found, getAll(elem, tag))
//                     }
//                 }
//             }
//             return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found
//         }

//         function fixDefaultChecked(elem) {
//             if (manipulation_rcheckableType.test(elem.type)) {
//                 elem.defaultChecked = elem.checked
//             }
//         }
//         jQuery.extend({
//             clone: function (elem, dataAndEvents, deepDataAndEvents) {
//                 var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
//                 if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
//                     clone = elem.cloneNode(true)
//                 } else {
//                     fragmentDiv.innerHTML = elem.outerHTML;
//                     fragmentDiv.removeChild(clone = fragmentDiv.firstChild)
//                 } if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
//                     destElements = getAll(clone);
//                     srcElements = getAll(elem);
//                     for (i = 0;
//                         (node = srcElements[i]) != null; ++i) {
//                         if (destElements[i]) {
//                             fixCloneNodeIssues(node, destElements[i])
//                         }
//                     }
//                 }
//                 if (dataAndEvents) {
//                     if (deepDataAndEvents) {
//                         srcElements = srcElements || getAll(elem);
//                         destElements = destElements || getAll(clone);
//                         for (i = 0;
//                             (node = srcElements[i]) != null; i++) {
//                             cloneCopyEvent(node, destElements[i])
//                         }
//                     } else {
//                         cloneCopyEvent(elem, clone)
//                     }
//                 }
//                 destElements = getAll(clone, "script");
//                 if (destElements.length > 0) {
//                     setGlobalEval(destElements, !inPage && getAll(elem, "script"))
//                 }
//                 destElements = srcElements = node = null;
//                 return clone
//             },
//             buildFragment: function (elems, context, scripts, selection) {
//                 var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length,
//                     safe = createSafeFragment(context),
//                     nodes = [],
//                     i = 0;
//                 for (; i < l; i++) {
//                     elem = elems[i];
//                     if (elem || elem === 0) {
//                         if (jQuery.type(elem) === "object") {
//                             jQuery.merge(nodes, elem.nodeType ? [elem] : elem)
//                         } else if (!rhtml.test(elem)) {
//                             nodes.push(context.createTextNode(elem))
//                         } else {
//                             tmp = tmp || safe.appendChild(context.createElement("div"));
//                             tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
//                             wrap = wrapMap[tag] || wrapMap._default;
//                             tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
//                             j = wrap[0];
//                             while (j--) {
//                                 tmp = tmp.lastChild
//                             }
//                             if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
//                                 nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]))
//                             }
//                             if (!jQuery.support.tbody) {
//                                 elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
//                                 j = elem && elem.childNodes.length;
//                                 while (j--) {
//                                     if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
//                                         elem.removeChild(tbody)
//                                     }
//                                 }
//                             }
//                             jQuery.merge(nodes, tmp.childNodes);
//                             tmp.textContent = "";
//                             while (tmp.firstChild) {
//                                 tmp.removeChild(tmp.firstChild)
//                             }
//                             tmp = safe.lastChild
//                         }
//                     }
//                 }
//                 if (tmp) {
//                     safe.removeChild(tmp)
//                 }
//                 if (!jQuery.support.appendChecked) {
//                     jQuery.grep(getAll(nodes, "input"), fixDefaultChecked)
//                 }
//                 i = 0;
//                 while (elem = nodes[i++]) {
//                     if (selection && jQuery.inArray(elem, selection) !== -1) {
//                         continue
//                     }
//                     contains = jQuery.contains(elem.ownerDocument, elem);
//                     tmp = getAll(safe.appendChild(elem), "script");
//                     if (contains) {
//                         setGlobalEval(tmp)
//                     }
//                     if (scripts) {
//                         j = 0;
//                         while (elem = tmp[j++]) {
//                             if (rscriptType.test(elem.type || "")) {
//                                 scripts.push(elem)
//                             }
//                         }
//                     }
//                 }
//                 tmp = null;
//                 return safe
//             },
//             cleanData: function (elems, acceptData) {
//                 var elem, type, id, data, i = 0,
//                     internalKey = jQuery.expando,
//                     cache = jQuery.cache,
//                     deleteExpando = jQuery.support.deleteExpando,
//                     special = jQuery.event.special;
//                 for (;
//                     (elem = elems[i]) != null; i++) {
//                     if (acceptData || jQuery.acceptData(elem)) {
//                         id = elem[internalKey];
//                         data = id && cache[id];
//                         if (data) {
//                             if (data.events) {
//                                 for (type in data.events) {
//                                     if (special[type]) {
//                                         jQuery.event.remove(elem, type)
//                                     } else {
//                                         jQuery.removeEvent(elem, type, data.handle)
//                                     }
//                                 }
//                             }
//                             if (cache[id]) {
//                                 delete cache[id];
//                                 if (deleteExpando) {
//                                     delete elem[internalKey]
//                                 } else if (typeof elem.removeAttribute !== core_strundefined) {
//                                     elem.removeAttribute(internalKey)
//                                 } else {
//                                     elem[internalKey] = null
//                                 }
//                                 core_deletedIds.push(id)
//                             }
//                         }
//                     }
//                 }
//             },
//             _evalUrl: function (url) {
//                 return jQuery.ajax({
//                     url: url,
//                     type: "GET",
//                     dataType: "script",
//                     async: false,
//                     global: false,
//                     "throws": true
//                 })
//             }
//         });
//         jQuery.fn.extend({
//             wrapAll: function (html) {
//                 if (jQuery.isFunction(html)) {
//                     return this.each(function (i) {
//                         jQuery(this).wrapAll(html.call(this, i))
//                     })
//                 }
//                 if (this[0]) {
//                     var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
//                     if (this[0].parentNode) {
//                         wrap.insertBefore(this[0])
//                     }
//                     wrap.map(function () {
//                         var elem = this;
//                         while (elem.firstChild && elem.firstChild.nodeType === 1) {
//                             elem = elem.firstChild
//                         }
//                         return elem
//                     }).append(this)
//                 }
//                 return this
//             },
//             wrapInner: function (html) {
//                 if (jQuery.isFunction(html)) {
//                     return this.each(function (i) {
//                         jQuery(this).wrapInner(html.call(this, i))
//                     })
//                 }
//                 return this.each(function () {
//                     var self = jQuery(this),
//                         contents = self.contents();
//                     if (contents.length) {
//                         contents.wrapAll(html)
//                     } else {
//                         self.append(html)
//                     }
//                 })
//             },
//             wrap: function (html) {
//                 var isFunction = jQuery.isFunction(html);
//                 return this.each(function (i) {
//                     jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
//                 })
//             },
//             unwrap: function () {
//                 return this.parent().each(function () {
//                     if (!jQuery.nodeName(this, "body")) {
//                         jQuery(this).replaceWith(this.childNodes)
//                     }
//                 }).end()
//             }
//         });
//         var iframe, getStyles, curCSS, ralpha = /alpha\([^)]*\)/i,
//             ropacity = /opacity\s*=\s*([^)]*)/,
//             rposition = /^(top|right|bottom|left)$/,
//             rdisplayswap = /^(none|table(?!-c[ea]).+)/,
//             rmargin = /^margin/,
//             rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
//             rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
//             rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"),
//             elemdisplay = {
//                 BODY: "block"
//             }, cssShow = {
//                 position: "absolute",
//                 visibility: "hidden",
//                 display: "block"
//             }, cssNormalTransform = {
//                 letterSpacing: 0,
//                 fontWeight: 400
//             }, cssExpand = ["Top", "Right", "Bottom", "Left"],
//             cssPrefixes = ["Webkit", "O", "Moz", "ms"];

//         function vendorPropName(style, name) {
//             if (name in style) {
//                 return name
//             }
//             var capName = name.charAt(0).toUpperCase() + name.slice(1),
//                 origName = name,
//                 i = cssPrefixes.length;
//             while (i--) {
//                 name = cssPrefixes[i] + capName;
//                 if (name in style) {
//                     return name
//                 }
//             }
//             return origName
//         }

//         function isHidden(elem, el) {
//             elem = el || elem;
//             return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem)
//         }

//         function showHide(elements, show) {
//             var display, elem, hidden, values = [],
//                 index = 0,
//                 length = elements.length;
//             for (; index < length; index++) {
//                 elem = elements[index];
//                 if (!elem.style) {
//                     continue
//                 }
//                 values[index] = jQuery._data(elem, "olddisplay");
//                 display = elem.style.display;
//                 if (show) {
//                     if (!values[index] && display === "none") {
//                         elem.style.display = ""
//                     }
//                     if (elem.style.display === "" && isHidden(elem)) {
//                         values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName))
//                     }
//                 } else {
//                     if (!values[index]) {
//                         hidden = isHidden(elem);
//                         if (display && display !== "none" || !hidden) {
//                             jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))
//                         }
//                     }
//                 }
//             }
//             for (index = 0; index < length; index++) {
//                 elem = elements[index];
//                 if (!elem.style) {
//                     continue
//                 }
//                 if (!show || elem.style.display === "none" || elem.style.display === "") {
//                     elem.style.display = show ? values[index] || "" : "none"
//                 }
//             }
//             return elements
//         }
//         jQuery.fn.extend({
//             css: function (name, value) {
//                 return jQuery.access(this, function (elem, name, value) {
//                     var len, styles, map = {}, i = 0;
//                     if (jQuery.isArray(name)) {
//                         styles = getStyles(elem);
//                         len = name.length;
//                         for (; i < len; i++) {
//                             map[name[i]] = jQuery.css(elem, name[i], false, styles)
//                         }
//                         return map
//                     }
//                     return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
//                 }, name, value, arguments.length > 1)
//             },
//             show: function () {
//                 return showHide(this, true)
//             },
//             hide: function () {
//                 return showHide(this)
//             },
//             toggle: function (state) {
//                 if (typeof state === "boolean") {
//                     return state ? this.show() : this.hide()
//                 }
//                 return this.each(function () {
//                     if (isHidden(this)) {
//                         jQuery(this).show()
//                     } else {
//                         jQuery(this).hide()
//                     }
//                 })
//             }
//         });
//         jQuery.extend({
//             cssHooks: {
//                 opacity: {
//                     get: function (elem, computed) {
//                         if (computed) {
//                             var ret = curCSS(elem, "opacity");
//                             return ret === "" ? "1" : ret
//                         }
//                     }
//                 }
//             },
//             cssNumber: {
//                 columnCount: true,
//                 fillOpacity: true,
//                 fontWeight: true,
//                 lineHeight: true,
//                 opacity: true,
//                 order: true,
//                 orphans: true,
//                 widows: true,
//                 zIndex: true,
//                 zoom: true
//             },
//             cssProps: {
//                 "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
//             },
//             style: function (elem, name, value, extra) {
//                 if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
//                     return
//                 }
//                 var ret, type, hooks, origName = jQuery.camelCase(name),
//                     style = elem.style;
//                 name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
//                 hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
//                 if (value !== undefined) {
//                     type = typeof value;
//                     if (type === "string" && (ret = rrelNum.exec(value))) {
//                         value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
//                         type = "number"
//                     }
//                     if (value == null || type === "number" && isNaN(value)) {
//                         return
//                     }
//                     if (type === "number" && !jQuery.cssNumber[origName]) {
//                         value += "px"
//                     }
//                     if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
//                         style[name] = "inherit"
//                     }
//                     if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
//                         try {
//                             style[name] = value
//                         } catch (e) {}
//                     }
//                 } else {
//                     if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
//                         return ret
//                     }
//                     return style[name]
//                 }
//             },
//             css: function (elem, name, extra, styles) {
//                 var num, val, hooks, origName = jQuery.camelCase(name);
//                 name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
//                 hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
//                 if (hooks && "get" in hooks) {
//                     val = hooks.get(elem, true, extra)
//                 }
//                 if (val === undefined) {
//                     val = curCSS(elem, name, styles)
//                 }
//                 if (val === "normal" && name in cssNormalTransform) {
//                     val = cssNormalTransform[name]
//                 }
//                 if (extra === "" || extra) {
//                     num = parseFloat(val);
//                     return extra === true || jQuery.isNumeric(num) ? num || 0 : val
//                 }
//                 return val
//             }
//         });
//         if (window.getComputedStyle) {
//             getStyles = function (elem) {
//                 return window.getComputedStyle(elem, null)
//             };
//             curCSS = function (elem, name, _computed) {
//                 var width, minWidth, maxWidth, computed = _computed || getStyles(elem),
//                     ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined,
//                     style = elem.style;
//                 if (computed) {
//                     if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
//                         ret = jQuery.style(elem, name)
//                     }
//                     if (rnumnonpx.test(ret) && rmargin.test(name)) {
//                         width = style.width;
//                         minWidth = style.minWidth;
//                         maxWidth = style.maxWidth;
//                         style.minWidth = style.maxWidth = style.width = ret;
//                         ret = computed.width;
//                         style.width = width;
//                         style.minWidth = minWidth;
//                         style.maxWidth = maxWidth
//                     }
//                 }
//                 return ret
//             }
//         } else if (document.documentElement.currentStyle) {
//             getStyles = function (elem) {
//                 return elem.currentStyle
//             };
//             curCSS = function (elem, name, _computed) {
//                 var left, rs, rsLeft, computed = _computed || getStyles(elem),
//                     ret = computed ? computed[name] : undefined,
//                     style = elem.style;
//                 if (ret == null && style && style[name]) {
//                     ret = style[name]
//                 }
//                 if (rnumnonpx.test(ret) && !rposition.test(name)) {
//                     left = style.left;
//                     rs = elem.runtimeStyle;
//                     rsLeft = rs && rs.left;
//                     if (rsLeft) {
//                         rs.left = elem.currentStyle.left
//                     }
//                     style.left = name === "fontSize" ? "1em" : ret;
//                     ret = style.pixelLeft + "px";
//                     style.left = left;
//                     if (rsLeft) {
//                         rs.left = rsLeft
//                     }
//                 }
//                 return ret === "" ? "auto" : ret
//             }
//         }

//         function setPositiveNumber(elem, value, subtract) {
//             var matches = rnumsplit.exec(value);
//             return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value
//         }

//         function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
//             var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
//                 val = 0;
//             for (; i < 4; i += 2) {
//                 if (extra === "margin") {
//                     val += jQuery.css(elem, extra + cssExpand[i], true, styles)
//                 }
//                 if (isBorderBox) {
//                     if (extra === "content") {
//                         val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles)
//                     }
//                     if (extra !== "margin") {
//                         val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
//                     }
//                 } else {
//                     val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
//                     if (extra !== "padding") {
//                         val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
//                     }
//                 }
//             }
//             return val
//         }

//         function getWidthOrHeight(elem, name, extra) {
//             var valueIsBorderBox = true,
//                 val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
//                 styles = getStyles(elem),
//                 isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
//             if (val <= 0 || val == null) {
//                 val = curCSS(elem, name, styles);
//                 if (val < 0 || val == null) {
//                     val = elem.style[name]
//                 }
//                 if (rnumnonpx.test(val)) {
//                     return val
//                 }
//                 valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
//                 val = parseFloat(val) || 0
//             }
//             return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
//         }

//         function css_defaultDisplay(nodeName) {
//             var doc = document,
//                 display = elemdisplay[nodeName];
//             if (!display) {
//                 display = actualDisplay(nodeName, doc);
//                 if (display === "none" || !display) {
//                     iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);
//                     doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
//                     doc.write("<!doctype html><html><body>");
//                     doc.close();
//                     display = actualDisplay(nodeName, doc);
//                     iframe.detach()
//                 }
//                 elemdisplay[nodeName] = display
//             }
//             return display
//         }

//         function actualDisplay(name, doc) {
//             var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
//                 display = jQuery.css(elem[0], "display");
//             elem.remove();
//             return display
//         }
//         jQuery.each(["height", "width"], function (i, name) {
//             jQuery.cssHooks[name] = {
//                 get: function (elem, computed, extra) {
//                     if (computed) {
//                         return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function () {
//                             return getWidthOrHeight(elem, name, extra)
//                         }) : getWidthOrHeight(elem, name, extra)
//                     }
//                 },
//                 set: function (elem, value, extra) {
//                     var styles = extra && getStyles(elem);
//                     return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0)
//                 }
//             }
//         });
//         if (!jQuery.support.opacity) {
//             jQuery.cssHooks.opacity = {
//                 get: function (elem, computed) {
//                     return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : ""
//                 },
//                 set: function (elem, value) {
//                     var style = elem.style,
//                         currentStyle = elem.currentStyle,
//                         opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
//                         filter = currentStyle && currentStyle.filter || style.filter || "";
//                     style.zoom = 1;
//                     if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
//                         style.removeAttribute("filter");
//                         if (value === "" || currentStyle && !currentStyle.filter) {
//                             return
//                         }
//                     }
//                     style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity
//                 }
//             }
//         }
//         jQuery(function () {
//             if (!jQuery.support.reliableMarginRight) {
//                 jQuery.cssHooks.marginRight = {
//                     get: function (elem, computed) {
//                         if (computed) {
//                             return jQuery.swap(elem, {
//                                 display: "inline-block"
//                             }, curCSS, [elem, "marginRight"])
//                         }
//                     }
//                 }
//             }
//             if (!jQuery.support.pixelPosition && jQuery.fn.position) {
//                 jQuery.each(["top", "left"], function (i, prop) {
//                     jQuery.cssHooks[prop] = {
//                         get: function (elem, computed) {
//                             if (computed) {
//                                 computed = curCSS(elem, prop);
//                                 return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
//                             }
//                         }
//                     }
//                 })
//             }
//         });
//         if (jQuery.expr && jQuery.expr.filters) {
//             jQuery.expr.filters.hidden = function (elem) {
//                 return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none"
//             };
//             jQuery.expr.filters.visible = function (elem) {
//                 return !jQuery.expr.filters.hidden(elem)
//             }
//         }
//         jQuery.each({
//             margin: "",
//             padding: "",
//             border: "Width"
//         }, function (prefix, suffix) {
//             jQuery.cssHooks[prefix + suffix] = {
//                 expand: function (value) {
//                     var i = 0,
//                         expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
//                     for (; i < 4; i++) {
//                         expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]
//                     }
//                     return expanded
//                 }
//             };
//             if (!rmargin.test(prefix)) {
//                 jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
//             }
//         });
//         var r20 = /%20/g,
//             rbracket = /\[\]$/,
//             rCRLF = /\r?\n/g,
//             rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
//             rsubmittable = /^(?:input|select|textarea|keygen)/i;
//         jQuery.fn.extend({
//             serialize: function () {
//                 return jQuery.param(this.serializeArray())
//             },
//             serializeArray: function () {
//                 return this.map(function () {
//                     var elements = jQuery.prop(this, "elements");
//                     return elements ? jQuery.makeArray(elements) : this
//                 }).filter(function () {
//                     var type = this.type;
//                     return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type))
//                 }).map(function (i, elem) {
//                     var val = jQuery(this).val();
//                     return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
//                         return {
//                             name: elem.name,
//                             value: val.replace(rCRLF, "\r\n")
//                         }
//                     }) : {
//                         name: elem.name,
//                         value: val.replace(rCRLF, "\r\n")
//                     }
//                 }).get()
//             }
//         });
//         jQuery.param = function (a, traditional) {
//             var prefix, s = [],
//                 add = function (key, value) {
//                     value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
//                     s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
//                 };
//             if (traditional === undefined) {
//                 traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional
//             }
//             if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
//                 jQuery.each(a, function () {
//                     add(this.name, this.value)
//                 })
//             } else {
//                 for (prefix in a) {
//                     buildParams(prefix, a[prefix], traditional, add)
//                 }
//             }
//             return s.join("&").replace(r20, "+")
//         };

//         function buildParams(prefix, obj, traditional, add) {
//             var name;
//             if (jQuery.isArray(obj)) {
//                 jQuery.each(obj, function (i, v) {
//                     if (traditional || rbracket.test(prefix)) {
//                         add(prefix, v)
//                     } else {
//                         buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add)
//                     }
//                 })
//             } else if (!traditional && jQuery.type(obj) === "object") {
//                 for (name in obj) {
//                     buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
//                 }
//             } else {
//                 add(prefix, obj)
//             }
//         }
//         jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
//             jQuery.fn[name] = function (data, fn) {
//                 return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
//             }
//         });
//         jQuery.fn.extend({
//             hover: function (fnOver, fnOut) {
//                 return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
//             },
//             bind: function (types, data, fn) {
//                 return this.on(types, null, data, fn)
//             },
//             unbind: function (types, fn) {
//                 return this.off(types, null, fn)
//             },
//             delegate: function (selector, types, data, fn) {
//                 return this.on(types, selector, data, fn)
//             },
//             undelegate: function (selector, types, fn) {
//                 return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn)
//             }
//         });
//         var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(),
//             ajax_rquery = /\?/,
//             rhash = /#.*$/,
//             rts = /([?&])_=[^&]*/,
//             rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
//             rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
//             rnoContent = /^(?:GET|HEAD)$/,
//             rprotocol = /^\/\//,
//             rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
//             _load = jQuery.fn.load,
//             prefilters = {}, transports = {}, allTypes = "*/".concat("*");
//         try {
//             ajaxLocation = location.href
//         } catch (e) {
//             ajaxLocation = document.createElement("a");
//             ajaxLocation.href = "";
//             ajaxLocation = ajaxLocation.href
//         }
//         ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

//         function addToPrefiltersOrTransports(structure) {
//             return function (dataTypeExpression, func) {
//                 if (typeof dataTypeExpression !== "string") {
//                     func = dataTypeExpression;
//                     dataTypeExpression = "*"
//                 }
//                 var dataType, i = 0,
//                     dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
//                 if (jQuery.isFunction(func)) {
//                     while (dataType = dataTypes[i++]) {
//                         if (dataType[0] === "+") {
//                             dataType = dataType.slice(1) || "*";
//                             (structure[dataType] = structure[dataType] || []).unshift(func)
//                         } else {
//                             (structure[dataType] = structure[dataType] || []).push(func)
//                         }
//                     }
//                 }
//             }
//         }

//         function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
//             var inspected = {}, seekingTransport = structure === transports;

//             function inspect(dataType) {
//                 var selected;
//                 inspected[dataType] = true;
//                 jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
//                     var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
//                     if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
//                         options.dataTypes.unshift(dataTypeOrTransport);
//                         inspect(dataTypeOrTransport);
//                         return false
//                     } else if (seekingTransport) {
//                         return !(selected = dataTypeOrTransport)
//                     }
//                 });
//                 return selected
//             }
//             return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
//         }

//         function ajaxExtend(target, src) {
//             var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
//             for (key in src) {
//                 if (src[key] !== undefined) {
//                     (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]
//                 }
//             }
//             if (deep) {
//                 jQuery.extend(true, target, deep)
//             }
//             return target
//         }
//         jQuery.fn.load = function (url, params, callback) {
//             if (typeof url !== "string" && _load) {
//                 return _load.apply(this, arguments)
//             }
//             var selector, response, type, self = this,
//                 off = url.indexOf(" ");
//             if (off >= 0) {
//                 selector = url.slice(off, url.length);
//                 url = url.slice(0, off)
//             }
//             if (jQuery.isFunction(params)) {
//                 callback = params;
//                 params = undefined
//             } else if (params && typeof params === "object") {
//                 type = "POST"
//             }
//             if (self.length > 0) {
//                 jQuery.ajax({
//                     url: url,
//                     type: type,
//                     dataType: "html",
//                     data: params
//                 }).done(function (responseText) {
//                     response = arguments;
//                     self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
//                 }).complete(callback && function (jqXHR, status) {
//                     self.each(callback, response || [jqXHR.responseText, status, jqXHR])
//                 })
//             }
//             return this
//         };
//         jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
//             jQuery.fn[type] = function (fn) {
//                 return this.on(type, fn)
//             }
//         });
//         jQuery.extend({
//             active: 0,
//             lastModified: {},
//             etag: {},
//             ajaxSettings: {
//                 url: ajaxLocation,
//                 type: "GET",
//                 isLocal: rlocalProtocol.test(ajaxLocParts[1]),
//                 global: true,
//                 processData: true,
//                 async: true,
//                 contentType: "application/x-www-form-urlencoded; charset=UTF-8",
//                 accepts: {
//                     "*": allTypes,
//                     text: "text/plain",
//                     html: "text/html",
//                     xml: "application/xml, text/xml",
//                     json: "application/json, text/javascript"
//                 },
//                 contents: {
//                     xml: /xml/,
//                     html: /html/,
//                     json: /json/
//                 },
//                 responseFields: {
//                     xml: "responseXML",
//                     text: "responseText",
//                     json: "responseJSON"
//                 },
//                 converters: {
//                     "* text": String,
//                     "text html": true,
//                     "text json": jQuery.parseJSON,
//                     "text xml": jQuery.parseXML
//                 },
//                 flatOptions: {
//                     url: true,
//                     context: true
//                 }
//             },
//             ajaxSetup: function (target, settings) {
//                 return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
//             },
//             ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
//             ajaxTransport: addToPrefiltersOrTransports(transports),
//             ajax: function (url, options) {
//                 if (typeof url === "object") {
//                     options = url;
//                     url = undefined
//                 }
//                 options = options || {};
//                 var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options),
//                     callbackContext = s.context || s,
//                     globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
//                     deferred = jQuery.Deferred(),
//                     completeDeferred = jQuery.Callbacks("once memory"),
//                     statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0,
//                     strAbort = "canceled",
//                     jqXHR = {
//                         readyState: 0,
//                         getResponseHeader: function (key) {
//                             var match;
//                             if (state === 2) {
//                                 if (!responseHeaders) {
//                                     responseHeaders = {};
//                                     while (match = rheaders.exec(responseHeadersString)) {
//                                         responseHeaders[match[1].toLowerCase()] = match[2]
//                                     }
//                                 }
//                                 match = responseHeaders[key.toLowerCase()]
//                             }
//                             return match == null ? null : match
//                         },
//                         getAllResponseHeaders: function () {
//                             return state === 2 ? responseHeadersString : null
//                         },
//                         setRequestHeader: function (name, value) {
//                             var lname = name.toLowerCase();
//                             if (!state) {
//                                 name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
//                                 requestHeaders[name] = value
//                             }
//                             return this
//                         },
//                         overrideMimeType: function (type) {
//                             if (!state) {
//                                 s.mimeType = type
//                             }
//                             return this
//                         },
//                         statusCode: function (map) {
//                             var code;
//                             if (map) {
//                                 if (state < 2) {
//                                     for (code in map) {
//                                         statusCode[code] = [statusCode[code], map[code]]
//                                     }
//                                 } else {
//                                     jqXHR.always(map[jqXHR.status])
//                                 }
//                             }
//                             return this
//                         },
//                         abort: function (statusText) {
//                             var finalText = statusText || strAbort;
//                             if (transport) {
//                                 transport.abort(finalText)
//                             }
//                             done(0, finalText);
//                             return this
//                         }
//                     };
//                 deferred.promise(jqXHR).complete = completeDeferred.add;
//                 jqXHR.success = jqXHR.done;
//                 jqXHR.error = jqXHR.fail;
//                 s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
//                 s.type = options.method || options.type || s.method || s.type;
//                 s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];
//                 if (s.crossDomain == null) {
//                     parts = rurl.exec(s.url.toLowerCase());
//                     s.crossDomain = !! (parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))))
//                 }
//                 if (s.data && s.processData && typeof s.data !== "string") {
//                     s.data = jQuery.param(s.data, s.traditional)
//                 }
//                 inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
//                 if (state === 2) {
//                     return jqXHR
//                 }
//                 fireGlobals = s.global;
//                 if (fireGlobals && jQuery.active++ === 0) {
//                     jQuery.event.trigger("ajaxStart")
//                 }
//                 s.type = s.type.toUpperCase();
//                 s.hasContent = !rnoContent.test(s.type);
//                 cacheURL = s.url;
//                 if (!s.hasContent) {
//                     if (s.data) {
//                         cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data;
//                         delete s.data
//                     }
//                     if (s.cache === false) {
//                         s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++
//                     }
//                 }
//                 if (s.ifModified) {
//                     if (jQuery.lastModified[cacheURL]) {
//                         jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL])
//                     }
//                     if (jQuery.etag[cacheURL]) {
//                         jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])
//                     }
//                 }
//                 if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
//                     jqXHR.setRequestHeader("Content-Type", s.contentType)
//                 }
//                 jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
//                 for (i in s.headers) {
//                     jqXHR.setRequestHeader(i, s.headers[i])
//                 }
//                 if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
//                     return jqXHR.abort()
//                 }
//                 strAbort = "abort";
//                 for (i in {
//                     success: 1,
//                     error: 1,
//                     complete: 1
//                 }) {
//                     jqXHR[i](s[i])
//                 }
//                 transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
//                 if (!transport) {
//                     done(-1, "No Transport")
//                 } else {
//                     jqXHR.readyState = 1;
//                     if (fireGlobals) {
//                         globalEventContext.trigger("ajaxSend", [jqXHR, s])
//                     }
//                     if (s.async && s.timeout > 0) {
//                         timeoutTimer = setTimeout(function () {
//                             jqXHR.abort("timeout")
//                         }, s.timeout)
//                     }
//                     try {
//                         state = 1;
//                         transport.send(requestHeaders, done)
//                     } catch (e) {
//                         if (state < 2) {
//                             done(-1, e)
//                         } else {
//                             throw e
//                         }
//                     }
//                 }

//                 function done(status, nativeStatusText, responses, headers) {
//                     var isSuccess, success, error, response, modified, statusText = nativeStatusText;
//                     if (state === 2) {
//                         return
//                     }
//                     state = 2;
//                     if (timeoutTimer) {
//                         clearTimeout(timeoutTimer)
//                     }
//                     transport = undefined;
//                     responseHeadersString = headers || "";
//                     jqXHR.readyState = status > 0 ? 4 : 0;
//                     isSuccess = status >= 200 && status < 300 || status === 304;
//                     if (responses) {
//                         response = ajaxHandleResponses(s, jqXHR, responses)
//                     }
//                     response = ajaxConvert(s, response, jqXHR, isSuccess);
//                     if (isSuccess) {
//                         if (s.ifModified) {
//                             modified = jqXHR.getResponseHeader("Last-Modified");
//                             if (modified) {
//                                 jQuery.lastModified[cacheURL] = modified
//                             }
//                             modified = jqXHR.getResponseHeader("etag");
//                             if (modified) {
//                                 jQuery.etag[cacheURL] = modified
//                             }
//                         }
//                         if (status === 204 || s.type === "HEAD") {
//                             statusText = "nocontent"
//                         } else if (status === 304) {
//                             statusText = "notmodified"
//                         } else {
//                             statusText = response.state;
//                             success = response.data;
//                             error = response.error;
//                             isSuccess = !error
//                         }
//                     } else {
//                         error = statusText;
//                         if (status || !statusText) {
//                             statusText = "error";
//                             if (status < 0) {
//                                 status = 0
//                             }
//                         }
//                     }
//                     jqXHR.status = status;
//                     jqXHR.statusText = (nativeStatusText || statusText) + "";
//                     if (isSuccess) {
//                         deferred.resolveWith(callbackContext, [success, statusText, jqXHR])
//                     } else {
//                         deferred.rejectWith(callbackContext, [jqXHR, statusText, error])
//                     }
//                     jqXHR.statusCode(statusCode);
//                     statusCode = undefined;
//                     if (fireGlobals) {
//                         globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error])
//                     }
//                     completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
//                     if (fireGlobals) {
//                         globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
//                         if (!--jQuery.active) {
//                             jQuery.event.trigger("ajaxStop")
//                         }
//                     }
//                 }
//                 return jqXHR
//             },
//             getJSON: function (url, data, callback) {
//                 return jQuery.get(url, data, callback, "json")
//             },
//             getScript: function (url, callback) {
//                 return jQuery.get(url, undefined, callback, "script")
//             }
//         });
//         jQuery.each(["get", "post"], function (i, method) {
//             jQuery[method] = function (url, data, callback, type) {
//                 if (jQuery.isFunction(data)) {
//                     type = type || callback;
//                     callback = data;
//                     data = undefined
//                 }
//                 return jQuery.ajax({
//                     url: url,
//                     type: method,
//                     dataType: type,
//                     data: data,
//                     success: callback
//                 })
//             }
//         });

//         function ajaxHandleResponses(s, jqXHR, responses) {
//             var firstDataType, ct, finalDataType, type, contents = s.contents,
//                 dataTypes = s.dataTypes;
//             while (dataTypes[0] === "*") {
//                 dataTypes.shift();
//                 if (ct === undefined) {
//                     ct = s.mimeType || jqXHR.getResponseHeader("Content-Type")
//                 }
//             }
//             if (ct) {
//                 for (type in contents) {
//                     if (contents[type] && contents[type].test(ct)) {
//                         dataTypes.unshift(type);
//                         break
//                     }
//                 }
//             }
//             if (dataTypes[0] in responses) {
//                 finalDataType = dataTypes[0]
//             } else {
//                 for (type in responses) {
//                     if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
//                         finalDataType = type;
//                         break
//                     }
//                     if (!firstDataType) {
//                         firstDataType = type
//                     }
//                 }
//                 finalDataType = finalDataType || firstDataType
//             } if (finalDataType) {
//                 if (finalDataType !== dataTypes[0]) {
//                     dataTypes.unshift(finalDataType)
//                 }
//                 return responses[finalDataType]
//             }
//         }

//         function ajaxConvert(s, response, jqXHR, isSuccess) {
//             var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
//             if (dataTypes[1]) {
//                 for (conv in s.converters) {
//                     converters[conv.toLowerCase()] = s.converters[conv]
//                 }
//             }
//             current = dataTypes.shift();
//             while (current) {
//                 if (s.responseFields[current]) {
//                     jqXHR[s.responseFields[current]] = response
//                 }
//                 if (!prev && isSuccess && s.dataFilter) {
//                     response = s.dataFilter(response, s.dataType)
//                 }
//                 prev = current;
//                 current = dataTypes.shift();
//                 if (current) {
//                     if (current === "*") {
//                         current = prev
//                     } else if (prev !== "*" && prev !== current) {
//                         conv = converters[prev + " " + current] || converters["* " + current];
//                         if (!conv) {
//                             for (conv2 in converters) {
//                                 tmp = conv2.split(" ");
//                                 if (tmp[1] === current) {
//                                     conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
//                                     if (conv) {
//                                         if (conv === true) {
//                                             conv = converters[conv2]
//                                         } else if (converters[conv2] !== true) {
//                                             current = tmp[0];
//                                             dataTypes.unshift(tmp[1])
//                                         }
//                                         break
//                                     }
//                                 }
//                             }
//                         }
//                         if (conv !== true) {
//                             if (conv && s["throws"]) {
//                                 response = conv(response)
//                             } else {
//                                 try {
//                                     response = conv(response)
//                                 } catch (e) {
//                                     return {
//                                         state: "parsererror",
//                                         error: conv ? e : "No conversion from " + prev + " to " + current
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//             return {
//                 state: "success",
//                 data: response
//             }
//         }
//         jQuery.ajaxSetup({
//             accepts: {
//                 script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
//             },
//             contents: {
//                 script: /(?:java|ecma)script/
//             },
//             converters: {
//                 "text script": function (text) {
//                     jQuery.globalEval(text);
//                     return text
//                 }
//             }
//         });
//         jQuery.ajaxPrefilter("script", function (s) {
//             if (s.cache === undefined) {
//                 s.cache = false
//             }
//             if (s.crossDomain) {
//                 s.type = "GET";
//                 s.global = false
//             }
//         });
//         jQuery.ajaxTransport("script", function (s) {
//             if (s.crossDomain) {
//                 var script, head = document.head || jQuery("head")[0] || document.documentElement;
//                 return {
//                     send: function (_, callback) {
//                         script = document.createElement("script");
//                         script.async = true;
//                         if (s.scriptCharset) {
//                             script.charset = s.scriptCharset
//                         }
//                         script.src = s.url;
//                         script.onload = script.onreadystatechange = function (_, isAbort) {
//                             if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
//                                 script.onload = script.onreadystatechange = null;
//                                 if (script.parentNode) {
//                                     script.parentNode.removeChild(script)
//                                 }
//                                 script = null;
//                                 if (!isAbort) {
//                                     callback(200, "success")
//                                 }
//                             }
//                         };
//                         head.insertBefore(script, head.firstChild)
//                     },
//                     abort: function () {
//                         if (script) {
//                             script.onload(undefined, true)
//                         }
//                     }
//                 }
//             }
//         });
//         var oldCallbacks = [],
//             rjsonp = /(=)\?(?=&|$)|\?\?/;
//         jQuery.ajaxSetup({
//             jsonp: "callback",
//             jsonpCallback: function () {
//                 var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
//                 this[callback] = true;
//                 return callback
//             }
//         });
//         jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
//             var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
//             if (jsonProp || s.dataTypes[0] === "jsonp") {
//                 callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
//                 if (jsonProp) {
//                     s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName)
//                 } else if (s.jsonp !== false) {
//                     s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName
//                 }
//                 s.converters["script json"] = function () {
//                     if (!responseContainer) {
//                         jQuery.error(callbackName + " was not called")
//                     }
//                     return responseContainer[0]
//                 };
//                 s.dataTypes[0] = "json";
//                 overwritten = window[callbackName];
//                 window[callbackName] = function () {
//                     responseContainer = arguments
//                 };
//                 jqXHR.always(function () {
//                     window[callbackName] = overwritten;
//                     if (s[callbackName]) {
//                         s.jsonpCallback = originalSettings.jsonpCallback;
//                         oldCallbacks.push(callbackName)
//                     }
//                     if (responseContainer && jQuery.isFunction(overwritten)) {
//                         overwritten(responseContainer[0])
//                     }
//                     responseContainer = overwritten = undefined
//                 });
//                 return "script"
//             }
//         });
//         var xhrCallbacks, xhrSupported, xhrId = 0,
//             xhrOnUnloadAbort = window.ActiveXObject && function () {
//                 var key;
//                 for (key in xhrCallbacks) {
//                     xhrCallbacks[key](undefined, true)
//                 }
//             };

//         function createStandardXHR() {
//             try {
//                 return new window.XMLHttpRequest
//             } catch (e) {}
//         }

//         function createActiveXHR() {
//             try {
//                 return new window.ActiveXObject("Microsoft.XMLHTTP")
//             } catch (e) {}
//         }
//         jQuery.ajaxSettings.xhr = window.ActiveXObject ? function () {
//             return !this.isLocal && createStandardXHR() || createActiveXHR()
//         } : createStandardXHR;
//         xhrSupported = jQuery.ajaxSettings.xhr();
//         jQuery.support.cors = !! xhrSupported && "withCredentials" in xhrSupported;
//         xhrSupported = jQuery.support.ajax = !! xhrSupported;
//         if (xhrSupported) {
//             jQuery.ajaxTransport(function (s) {
//                 if (!s.crossDomain || jQuery.support.cors) {
//                     var callback;
//                     return {
//                         send: function (headers, complete) {
//                             var handle, i, xhr = s.xhr();
//                             if (s.username) {
//                                 xhr.open(s.type, s.url, s.async, s.username, s.password)
//                             } else {
//                                 xhr.open(s.type, s.url, s.async)
//                             } if (s.xhrFields) {
//                                 for (i in s.xhrFields) {
//                                     xhr[i] = s.xhrFields[i]
//                                 }
//                             }
//                             if (s.mimeType && xhr.overrideMimeType) {
//                                 xhr.overrideMimeType(s.mimeType)
//                             }
//                             if (!s.crossDomain && !headers["X-Requested-With"]) {
//                                 headers["X-Requested-With"] = "XMLHttpRequest"
//                             }
//                             try {
//                                 for (i in headers) {
//                                     xhr.setRequestHeader(i, headers[i])
//                                 }
//                             } catch (err) {}
//                             xhr.send(s.hasContent && s.data || null);
//                             callback = function (_, isAbort) {
//                                 var status, responseHeaders, statusText, responses;
//                                 try {
//                                     if (callback && (isAbort || xhr.readyState === 4)) {
//                                         callback = undefined;
//                                         if (handle) {
//                                             xhr.onreadystatechange = jQuery.noop;
//                                             if (xhrOnUnloadAbort) {
//                                                 delete xhrCallbacks[handle]
//                                             }
//                                         }
//                                         if (isAbort) {
//                                             if (xhr.readyState !== 4) {
//                                                 xhr.abort()
//                                             }
//                                         } else {
//                                             responses = {};
//                                             status = xhr.status;
//                                             responseHeaders = xhr.getAllResponseHeaders();
//                                             if (typeof xhr.responseText === "string") {
//                                                 responses.text = xhr.responseText
//                                             }
//                                             try {
//                                                 statusText = xhr.statusText
//                                             } catch (e) {
//                                                 statusText = ""
//                                             }
//                                             if (!status && s.isLocal && !s.crossDomain) {
//                                                 status = responses.text ? 200 : 404
//                                             } else if (status === 1223) {
//                                                 status = 204
//                                             }
//                                         }
//                                     }
//                                 } catch (firefoxAccessException) {
//                                     if (!isAbort) {
//                                         complete(-1, firefoxAccessException)
//                                     }
//                                 }
//                                 if (responses) {
//                                     complete(status, statusText, responses, responseHeaders)
//                                 }
//                             };
//                             if (!s.async) {
//                                 callback()
//                             } else if (xhr.readyState === 4) {
//                                 setTimeout(callback)
//                             } else {
//                                 handle = ++xhrId;
//                                 if (xhrOnUnloadAbort) {
//                                     if (!xhrCallbacks) {
//                                         xhrCallbacks = {};
//                                         jQuery(window).unload(xhrOnUnloadAbort)
//                                     }
//                                     xhrCallbacks[handle] = callback
//                                 }
//                                 xhr.onreadystatechange = callback
//                             }
//                         },
//                         abort: function () {
//                             if (callback) {
//                                 callback(undefined, true)
//                             }
//                         }
//                     }
//                 }
//             })
//         }
//         var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
//             rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
//             rrun = /queueHooks$/,
//             animationPrefilters = [defaultPrefilter],
//             tweeners = {
//                 "*": [
//                     function (prop, value) {
//                         var tween = this.createTween(prop, value),
//                             target = tween.cur(),
//                             parts = rfxnum.exec(value),
//                             unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
//                             start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
//                             scale = 1,
//                             maxIterations = 20;
//                         if (start && start[3] !== unit) {
//                             unit = unit || start[3];
//                             parts = parts || [];
//                             start = +target || 1;
//                             do {
//                                 scale = scale || ".5";
//                                 start = start / scale;
//                                 jQuery.style(tween.elem, prop, start + unit)
//                             } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations)
//                         }
//                         if (parts) {
//                             start = tween.start = +start || +target || 0;
//                             tween.unit = unit;
//                             tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]
//                         }
//                         return tween
//                     }
//                 ]
//             };

//         function createFxNow() {
//             setTimeout(function () {
//                 fxNow = undefined
//             });
//             return fxNow = jQuery.now()
//         }

//         function createTween(value, prop, animation) {
//             var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]),
//                 index = 0,
//                 length = collection.length;
//             for (; index < length; index++) {
//                 if (tween = collection[index].call(animation, prop, value)) {
//                     return tween
//                 }
//             }
//         }

//         function Animation(elem, properties, options) {
//             var result, stopped, index = 0,
//                 length = animationPrefilters.length,
//                 deferred = jQuery.Deferred().always(function () {
//                     delete tick.elem
//                 }),
//                 tick = function () {
//                     if (stopped) {
//                         return false
//                     }
//                     var currentTime = fxNow || createFxNow(),
//                         remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
//                         temp = remaining / animation.duration || 0,
//                         percent = 1 - temp,
//                         index = 0,
//                         length = animation.tweens.length;
//                     for (; index < length; index++) {
//                         animation.tweens[index].run(percent)
//                     }
//                     deferred.notifyWith(elem, [animation, percent, remaining]);
//                     if (percent < 1 && length) {
//                         return remaining
//                     } else {
//                         deferred.resolveWith(elem, [animation]);
//                         return false
//                     }
//                 }, animation = deferred.promise({
//                     elem: elem,
//                     props: jQuery.extend({}, properties),
//                     opts: jQuery.extend(true, {
//                         specialEasing: {}
//                     }, options),
//                     originalProperties: properties,
//                     originalOptions: options,
//                     startTime: fxNow || createFxNow(),
//                     duration: options.duration,
//                     tweens: [],
//                     createTween: function (prop, end) {
//                         var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
//                         animation.tweens.push(tween);
//                         return tween
//                     },
//                     stop: function (gotoEnd) {
//                         var index = 0,
//                             length = gotoEnd ? animation.tweens.length : 0;
//                         if (stopped) {
//                             return this
//                         }
//                         stopped = true;
//                         for (; index < length; index++) {
//                             animation.tweens[index].run(1)
//                         }
//                         if (gotoEnd) {
//                             deferred.resolveWith(elem, [animation, gotoEnd])
//                         } else {
//                             deferred.rejectWith(elem, [animation, gotoEnd])
//                         }
//                         return this
//                     }
//                 }),
//                 props = animation.props;
//             propFilter(props, animation.opts.specialEasing);
//             for (; index < length; index++) {
//                 result = animationPrefilters[index].call(animation, elem, props, animation.opts);
//                 if (result) {
//                     return result
//                 }
//             }
//             jQuery.map(props, createTween, animation);
//             if (jQuery.isFunction(animation.opts.start)) {
//                 animation.opts.start.call(elem, animation)
//             }
//             jQuery.fx.timer(jQuery.extend(tick, {
//                 elem: elem,
//                 anim: animation,
//                 queue: animation.opts.queue
//             }));
//             return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
//         }

//         function propFilter(props, specialEasing) {
//             var index, name, easing, value, hooks;
//             for (index in props) {
//                 name = jQuery.camelCase(index);
//                 easing = specialEasing[name];
//                 value = props[index];
//                 if (jQuery.isArray(value)) {
//                     easing = value[1];
//                     value = props[index] = value[0]
//                 }
//                 if (index !== name) {
//                     props[name] = value;
//                     delete props[index]
//                 }
//                 hooks = jQuery.cssHooks[name];
//                 if (hooks && "expand" in hooks) {
//                     value = hooks.expand(value);
//                     delete props[name];
//                     for (index in value) {
//                         if (!(index in props)) {
//                             props[index] = value[index];
//                             specialEasing[index] = easing
//                         }
//                     }
//                 } else {
//                     specialEasing[name] = easing
//                 }
//             }
//         }
//         jQuery.Animation = jQuery.extend(Animation, {
//             tweener: function (props, callback) {
//                 if (jQuery.isFunction(props)) {
//                     callback = props;
//                     props = ["*"]
//                 } else {
//                     props = props.split(" ")
//                 }
//                 var prop, index = 0,
//                     length = props.length;
//                 for (; index < length; index++) {
//                     prop = props[index];
//                     tweeners[prop] = tweeners[prop] || [];
//                     tweeners[prop].unshift(callback)
//                 }
//             },
//             prefilter: function (callback, prepend) {
//                 if (prepend) {
//                     animationPrefilters.unshift(callback)
//                 } else {
//                     animationPrefilters.push(callback)
//                 }
//             }
//         });

//         function defaultPrefilter(elem, props, opts) {
//             var prop, value, toggle, tween, hooks, oldfire, anim = this,
//                 orig = {}, style = elem.style,
//                 hidden = elem.nodeType && isHidden(elem),
//                 dataShow = jQuery._data(elem, "fxshow");
//             if (!opts.queue) {
//                 hooks = jQuery._queueHooks(elem, "fx");
//                 if (hooks.unqueued == null) {
//                     hooks.unqueued = 0;
//                     oldfire = hooks.empty.fire;
//                     hooks.empty.fire = function () {
//                         if (!hooks.unqueued) {
//                             oldfire()
//                         }
//                     }
//                 }
//                 hooks.unqueued++;
//                 anim.always(function () {
//                     anim.always(function () {
//                         hooks.unqueued--;
//                         if (!jQuery.queue(elem, "fx").length) {
//                             hooks.empty.fire()
//                         }
//                     })
//                 })
//             }
//             if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
//                 opts.overflow = [style.overflow, style.overflowX, style.overflowY];
//                 if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
//                     if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
//                         style.display = "inline-block"
//                     } else {
//                         style.zoom = 1
//                     }
//                 }
//             }
//             if (opts.overflow) {
//                 style.overflow = "hidden";
//                 if (!jQuery.support.shrinkWrapBlocks) {
//                     anim.always(function () {
//                         style.overflow = opts.overflow[0];
//                         style.overflowX = opts.overflow[1];
//                         style.overflowY = opts.overflow[2]
//                     })
//                 }
//             }
//             for (prop in props) {
//                 value = props[prop];
//                 if (rfxtypes.exec(value)) {
//                     delete props[prop];
//                     toggle = toggle || value === "toggle";
//                     if (value === (hidden ? "hide" : "show")) {
//                         continue
//                     }
//                     orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
//                 }
//             }
//             if (!jQuery.isEmptyObject(orig)) {
//                 if (dataShow) {
//                     if ("hidden" in dataShow) {
//                         hidden = dataShow.hidden
//                     }
//                 } else {
//                     dataShow = jQuery._data(elem, "fxshow", {})
//                 } if (toggle) {
//                     dataShow.hidden = !hidden
//                 }
//                 if (hidden) {
//                     jQuery(elem).show()
//                 } else {
//                     anim.done(function () {
//                         jQuery(elem).hide()
//                     })
//                 }
//                 anim.done(function () {
//                     var prop;
//                     jQuery._removeData(elem, "fxshow");
//                     for (prop in orig) {
//                         jQuery.style(elem, prop, orig[prop])
//                     }
//                 });
//                 for (prop in orig) {
//                     tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
//                     if (!(prop in dataShow)) {
//                         dataShow[prop] = tween.start;
//                         if (hidden) {
//                             tween.end = tween.start;
//                             tween.start = prop === "width" || prop === "height" ? 1 : 0
//                         }
//                     }
//                 }
//             }
//         }

//         function Tween(elem, options, prop, end, easing) {
//             return new Tween.prototype.init(elem, options, prop, end, easing)
//         }
//         jQuery.Tween = Tween;
//         Tween.prototype = {
//             constructor: Tween,
//             init: function (elem, options, prop, end, easing, unit) {
//                 this.elem = elem;
//                 this.prop = prop;
//                 this.easing = easing || "swing";
//                 this.options = options;
//                 this.start = this.now = this.cur();
//                 this.end = end;
//                 this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
//             },
//             cur: function () {
//                 var hooks = Tween.propHooks[this.prop];
//                 return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
//             },
//             run: function (percent) {
//                 var eased, hooks = Tween.propHooks[this.prop];
//                 if (this.options.duration) {
//                     this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration)
//                 } else {
//                     this.pos = eased = percent
//                 }
//                 this.now = (this.end - this.start) * eased + this.start;
//                 if (this.options.step) {
//                     this.options.step.call(this.elem, this.now, this)
//                 }
//                 if (hooks && hooks.set) {
//                     hooks.set(this)
//                 } else {
//                     Tween.propHooks._default.set(this)
//                 }
//                 return this
//             }
//         };
//         Tween.prototype.init.prototype = Tween.prototype;
//         Tween.propHooks = {
//             _default: {
//                 get: function (tween) {
//                     var result;
//                     if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
//                         return tween.elem[tween.prop]
//                     }
//                     result = jQuery.css(tween.elem, tween.prop, "");
//                     return !result || result === "auto" ? 0 : result
//                 },
//                 set: function (tween) {
//                     if (jQuery.fx.step[tween.prop]) {
//                         jQuery.fx.step[tween.prop](tween)
//                     } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
//                         jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
//                     } else {
//                         tween.elem[tween.prop] = tween.now
//                     }
//                 }
//             }
//         };
//         Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
//             set: function (tween) {
//                 if (tween.elem.nodeType && tween.elem.parentNode) {
//                     tween.elem[tween.prop] = tween.now
//                 }
//             }
//         };
//         jQuery.each(["toggle", "show", "hide"], function (i, name) {
//             var cssFn = jQuery.fn[name];
//             jQuery.fn[name] = function (speed, easing, callback) {
//                 return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback)
//             }
//         });
//         jQuery.fn.extend({
//             fadeTo: function (speed, to, easing, callback) {
//                 return this.filter(isHidden).css("opacity", 0).show().end().animate({
//                     opacity: to
//                 }, speed, easing, callback)
//             },
//             animate: function (prop, speed, easing, callback) {
//                 var empty = jQuery.isEmptyObject(prop),
//                     optall = jQuery.speed(speed, easing, callback),
//                     doAnimation = function () {
//                         var anim = Animation(this, jQuery.extend({}, prop), optall);
//                         if (empty || jQuery._data(this, "finish")) {
//                             anim.stop(true)
//                         }
//                     };
//                 doAnimation.finish = doAnimation;
//                 return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
//             },
//             stop: function (type, clearQueue, gotoEnd) {
//                 var stopQueue = function (hooks) {
//                     var stop = hooks.stop;
//                     delete hooks.stop;
//                     stop(gotoEnd)
//                 };
//                 if (typeof type !== "string") {
//                     gotoEnd = clearQueue;
//                     clearQueue = type;
//                     type = undefined
//                 }
//                 if (clearQueue && type !== false) {
//                     this.queue(type || "fx", [])
//                 }
//                 return this.each(function () {
//                     var dequeue = true,
//                         index = type != null && type + "queueHooks",
//                         timers = jQuery.timers,
//                         data = jQuery._data(this);
//                     if (index) {
//                         if (data[index] && data[index].stop) {
//                             stopQueue(data[index])
//                         }
//                     } else {
//                         for (index in data) {
//                             if (data[index] && data[index].stop && rrun.test(index)) {
//                                 stopQueue(data[index])
//                             }
//                         }
//                     }
//                     for (index = timers.length; index--;) {
//                         if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
//                             timers[index].anim.stop(gotoEnd);
//                             dequeue = false;
//                             timers.splice(index, 1)
//                         }
//                     }
//                     if (dequeue || !gotoEnd) {
//                         jQuery.dequeue(this, type)
//                     }
//                 })
//             },
//             finish: function (type) {
//                 if (type !== false) {
//                     type = type || "fx"
//                 }
//                 return this.each(function () {
//                     var index, data = jQuery._data(this),
//                         queue = data[type + "queue"],
//                         hooks = data[type + "queueHooks"],
//                         timers = jQuery.timers,
//                         length = queue ? queue.length : 0;
//                     data.finish = true;
//                     jQuery.queue(this, type, []);
//                     if (hooks && hooks.stop) {
//                         hooks.stop.call(this, true)
//                     }
//                     for (index = timers.length; index--;) {
//                         if (timers[index].elem === this && timers[index].queue === type) {
//                             timers[index].anim.stop(true);
//                             timers.splice(index, 1)
//                         }
//                     }
//                     for (index = 0; index < length; index++) {
//                         if (queue[index] && queue[index].finish) {
//                             queue[index].finish.call(this)
//                         }
//                     }
//                     delete data.finish
//                 })
//             }
//         });

//         function genFx(type, includeWidth) {
//             var which, attrs = {
//                     height: type
//                 }, i = 0;
//             includeWidth = includeWidth ? 1 : 0;
//             for (; i < 4; i += 2 - includeWidth) {
//                 which = cssExpand[i];
//                 attrs["margin" + which] = attrs["padding" + which] = type
//             }
//             if (includeWidth) {
//                 attrs.opacity = attrs.width = type
//             }
//             return attrs
//         }
//         jQuery.each({
//             slideDown: genFx("show"),
//             slideUp: genFx("hide"),
//             slideToggle: genFx("toggle"),
//             fadeIn: {
//                 opacity: "show"
//             },
//             fadeOut: {
//                 opacity: "hide"
//             },
//             fadeToggle: {
//                 opacity: "toggle"
//             }
//         }, function (name, props) {
//             jQuery.fn[name] = function (speed, easing, callback) {
//                 return this.animate(props, speed, easing, callback)
//             }
//         });
//         jQuery.speed = function (speed, easing, fn) {
//             var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
//                 complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
//                 duration: speed,
//                 easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
//             };
//             opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
//             if (opt.queue == null || opt.queue === true) {
//                 opt.queue = "fx"
//             }
//             opt.old = opt.complete;
//             opt.complete = function () {
//                 if (jQuery.isFunction(opt.old)) {
//                     opt.old.call(this)
//                 }
//                 if (opt.queue) {
//                     jQuery.dequeue(this, opt.queue)
//                 }
//             };
//             return opt
//         };
//         jQuery.easing = {
//             linear: function (p) {
//                 return p
//             },
//             swing: function (p) {
//                 return .5 - Math.cos(p * Math.PI) / 2
//             }
//         };
//         jQuery.timers = [];
//         jQuery.fx = Tween.prototype.init;
//         jQuery.fx.tick = function () {
//             var timer, timers = jQuery.timers,
//                 i = 0;
//             fxNow = jQuery.now();
//             for (; i < timers.length; i++) {
//                 timer = timers[i];
//                 if (!timer() && timers[i] === timer) {
//                     timers.splice(i--, 1)
//                 }
//             }
//             if (!timers.length) {
//                 jQuery.fx.stop()
//             }
//             fxNow = undefined
//         };
//         jQuery.fx.timer = function (timer) {
//             if (timer() && jQuery.timers.push(timer)) {
//                 jQuery.fx.start()
//             }
//         };
//         jQuery.fx.interval = 13;
//         jQuery.fx.start = function () {
//             if (!timerId) {
//                 timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval)
//             }
//         };
//         jQuery.fx.stop = function () {
//             clearInterval(timerId);
//             timerId = null
//         };
//         jQuery.fx.speeds = {
//             slow: 600,
//             fast: 200,
//             _default: 400
//         };
//         jQuery.fx.step = {};
//         if (jQuery.expr && jQuery.expr.filters) {
//             jQuery.expr.filters.animated = function (elem) {
//                 return jQuery.grep(jQuery.timers, function (fn) {
//                     return elem === fn.elem
//                 }).length
//             }
//         }
//         jQuery.fn.offset = function (options) {
//             if (arguments.length) {
//                 return options === undefined ? this : this.each(function (i) {
//                     jQuery.offset.setOffset(this, options, i)
//                 })
//             }
//             var docElem, win, box = {
//                     top: 0,
//                     left: 0
//                 }, elem = this[0],
//                 doc = elem && elem.ownerDocument;
//             if (!doc) {
//                 return
//             }
//             docElem = doc.documentElement;
//             if (!jQuery.contains(docElem, elem)) {
//                 return box
//             }
//             if (typeof elem.getBoundingClientRect !== core_strundefined) {
//                 box = elem.getBoundingClientRect()
//             }
//             win = getWindow(doc);
//             return {
//                 top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
//                 left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
//             }
//         };
//         jQuery.offset = {
//             setOffset: function (elem, options, i) {
//                 var position = jQuery.css(elem, "position");
//                 if (position === "static") {
//                     elem.style.position = "relative"
//                 }
//                 var curElem = jQuery(elem),
//                     curOffset = curElem.offset(),
//                     curCSSTop = jQuery.css(elem, "top"),
//                     curCSSLeft = jQuery.css(elem, "left"),
//                     calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
//                     props = {}, curPosition = {}, curTop, curLeft;
//                 if (calculatePosition) {
//                     curPosition = curElem.position();
//                     curTop = curPosition.top;
//                     curLeft = curPosition.left
//                 } else {
//                     curTop = parseFloat(curCSSTop) || 0;
//                     curLeft = parseFloat(curCSSLeft) || 0
//                 } if (jQuery.isFunction(options)) {
//                     options = options.call(elem, i, curOffset)
//                 }
//                 if (options.top != null) {
//                     props.top = options.top - curOffset.top + curTop
//                 }
//                 if (options.left != null) {
//                     props.left = options.left - curOffset.left + curLeft
//                 }
//                 if ("using" in options) {
//                     options.using.call(elem, props)
//                 } else {
//                     curElem.css(props)
//                 }
//             }
//         };
//         jQuery.fn.extend({
//             position: function () {
//                 if (!this[0]) {
//                     return
//                 }
//                 var offsetParent, offset, parentOffset = {
//                         top: 0,
//                         left: 0
//                     }, elem = this[0];
//                 if (jQuery.css(elem, "position") === "fixed") {
//                     offset = elem.getBoundingClientRect()
//                 } else {
//                     offsetParent = this.offsetParent();
//                     offset = this.offset();
//                     if (!jQuery.nodeName(offsetParent[0], "html")) {
//                         parentOffset = offsetParent.offset()
//                     }
//                     parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
//                     parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true)
//                 }
//                 return {
//                     top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
//                     left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
//                 }
//             },
//             offsetParent: function () {
//                 return this.map(function () {
//                     var offsetParent = this.offsetParent || docElem;
//                     while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
//                         offsetParent = offsetParent.offsetParent
//                     }
//                     return offsetParent || docElem
//                 })
//             }
//         });
//         jQuery.each({
//             scrollLeft: "pageXOffset",
//             scrollTop: "pageYOffset"
//         }, function (method, prop) {
//             var top = /Y/.test(prop);
//             jQuery.fn[method] = function (val) {
//                 return jQuery.access(this, function (elem, method, val) {
//                     var win = getWindow(elem);
//                     if (val === undefined) {
//                         return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method]
//                     }
//                     if (win) {
//                         win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop())
//                     } else {
//                         elem[method] = val
//                     }
//                 }, method, val, arguments.length, null)
//             }
//         });

//         function getWindow(elem) {
//             return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false
//         }
//         jQuery.each({
//             Height: "height",
//             Width: "width"
//         }, function (name, type) {
//             jQuery.each({
//                 padding: "inner" + name,
//                 content: type,
//                 "": "outer" + name
//             }, function (defaultExtra, funcName) {
//                 jQuery.fn[funcName] = function (margin, value) {
//                     var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
//                         extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
//                     return jQuery.access(this, function (elem, type, value) {
//                         var doc;
//                         if (jQuery.isWindow(elem)) {
//                             return elem.document.documentElement["client" + name]
//                         }
//                         if (elem.nodeType === 9) {
//                             doc = elem.documentElement;
//                             return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])
//                         }
//                         return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
//                     }, type, chainable ? margin : undefined, chainable, null)
//                 }
//             })
//         });
//         jQuery.fn.size = function () {
//             return this.length
//         };
//         jQuery.fn.andSelf = jQuery.fn.addBack;
//         if (typeof module === "object" && module && typeof module.exports === "object") {
//             module.exports = jQuery
//         } else {
//             window.jQuery = window.$ = jQuery;
//             if (typeof define === "function" && define.amd) {
//                 define("jquery", [], function () {
//                     return jQuery
//                 })
//             }
//         }
//     })(window);
//     (function () {
//         var undefined;
//         var idCounter = 0;
//         var indicatorObject = {};
//         var keyPrefix = +new Date + "";
//         var reInterpolate = /<%=([\s\S]+?)%>/g;
//         var reNoMatch = /($^)/;
//         var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;
//         var argsClass = "[object Arguments]",
//             arrayClass = "[object Array]",
//             boolClass = "[object Boolean]",
//             dateClass = "[object Date]",
//             funcClass = "[object Function]",
//             numberClass = "[object Number]",
//             objectClass = "[object Object]",
//             regexpClass = "[object RegExp]",
//             stringClass = "[object String]";
//         var objectTypes = {
//             "boolean": false,
//             "function": true,
//             object: true,
//             number: false,
//             string: false,
//             undefined: false
//         };
//         var stringEscapes = {
//             "\\": "\\",
//             "'": "'",
//             "\n": "n",
//             "\r": "r",
//             "	": "t",
//             "\u2028": "u2028",
//             "\u2029": "u2029"
//         };
//         var root = objectTypes[typeof window] && window || this;
//         var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
//         var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
//         var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
//         var freeGlobal = objectTypes[typeof global] && global;
//         if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
//             root = freeGlobal
//         }

//         function baseIndexOf(array, value, fromIndex) {
//             var index = (fromIndex || 0) - 1,
//                 length = array ? array.length : 0;
//             while (++index < length) {
//                 if (array[index] === value) {
//                     return index
//                 }
//             }
//             return -1
//         }

//         function compareAscending(a, b) {
//             var ac = a.criteria,
//                 bc = b.criteria,
//                 index = -1,
//                 length = ac.length;
//             while (++index < length) {
//                 var value = ac[index],
//                     other = bc[index];
//                 if (value !== other) {
//                     if (value > other || typeof value == "undefined") {
//                         return 1
//                     }
//                     if (value < other || typeof other == "undefined") {
//                         return -1
//                     }
//                 }
//             }
//             return a.index - b.index
//         }

//         function escapeStringChar(match) {
//             return "\\" + stringEscapes[match]
//         }

//         function slice(array, start, end) {
//             start || (start = 0);
//             if (typeof end == "undefined") {
//                 end = array ? array.length : 0
//             }
//             var index = -1,
//                 length = end - start || 0,
//                 result = Array(length < 0 ? 0 : length);
//             while (++index < length) {
//                 result[index] = array[start + index]
//             }
//             return result
//         }
//         var arrayRef = [];
//         var objectProto = Object.prototype;
//         var oldDash = root._;
//         var toString = objectProto.toString;
//         var reNative = RegExp("^" + String(toString).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$");
//         var ceil = Math.ceil,
//             floor = Math.floor,
//             hasOwnProperty = objectProto.hasOwnProperty,
//             push = arrayRef.push,
//             propertyIsEnumerable = objectProto.propertyIsEnumerable;
//         var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
//             nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
//             nativeIsFinite = root.isFinite,
//             nativeIsNaN = root.isNaN,
//             nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys,
//             nativeMax = Math.max,
//             nativeMin = Math.min,
//             nativeRandom = Math.random;

//         function lodash(value) {
//             return value instanceof lodash ? value : new lodashWrapper(value)
//         }

//         function lodashWrapper(value, chainAll) {
//             this.__chain__ = !! chainAll;
//             this.__wrapped__ = value
//         }
//         lodashWrapper.prototype = lodash.prototype;
//         var support = {};
//         (function () {
//             var object = {
//                 0: 1,
//                 length: 1
//             };
//             support.spliceObjects = (arrayRef.splice.call(object, 0, 1), !object[0])
//         })(1);
//         lodash.templateSettings = {
//             escape: /<%-([\s\S]+?)%>/g,
//             evaluate: /<%([\s\S]+?)%>/g,
//             interpolate: reInterpolate,
//             variable: ""
//         };

//         function baseBind(bindData) {
//             var func = bindData[0],
//                 partialArgs = bindData[2],
//                 thisArg = bindData[4];

//             function bound() {
//                 if (partialArgs) {
//                     var args = slice(partialArgs);
//                     push.apply(args, arguments)
//                 }
//                 if (this instanceof bound) {
//                     var thisBinding = baseCreate(func.prototype),
//                         result = func.apply(thisBinding, args || arguments);
//                     return isObject(result) ? result : thisBinding
//                 }
//                 return func.apply(thisArg, args || arguments)
//             }
//             return bound
//         }

//         function baseCreate(prototype, properties) {
//             return isObject(prototype) ? nativeCreate(prototype) : {}
//         }
//         if (!nativeCreate) {
//             baseCreate = function () {
//                 function Object() {}
//                 return function (prototype) {
//                     if (isObject(prototype)) {
//                         Object.prototype = prototype;
//                         var result = new Object;
//                         Object.prototype = null
//                     }
//                     return result || root.Object()
//                 }
//             }()
//         }

//         function baseCreateCallback(func, thisArg, argCount) {
//             if (typeof func != "function") {
//                 return identity
//             }
//             if (typeof thisArg == "undefined" || !("prototype" in func)) {
//                 return func
//             }
//             switch (argCount) {
//             case 1:
//                 return function (value) {
//                     return func.call(thisArg, value)
//                 };
//             case 2:
//                 return function (a, b) {
//                     return func.call(thisArg, a, b)
//                 };
//             case 3:
//                 return function (value, index, collection) {
//                     return func.call(thisArg, value, index, collection)
//                 };
//             case 4:
//                 return function (accumulator, value, index, collection) {
//                     return func.call(thisArg, accumulator, value, index, collection)
//                 }
//             }
//             return bind(func, thisArg)
//         }

//         function baseCreateWrapper(bindData) {
//             var func = bindData[0],
//                 bitmask = bindData[1],
//                 partialArgs = bindData[2],
//                 partialRightArgs = bindData[3],
//                 thisArg = bindData[4],
//                 arity = bindData[5];
//             var isBind = bitmask & 1,
//                 isBindKey = bitmask & 2,
//                 isCurry = bitmask & 4,
//                 isCurryBound = bitmask & 8,
//                 key = func;

//             function bound() {
//                 var thisBinding = isBind ? thisArg : this;
//                 if (partialArgs) {
//                     var args = slice(partialArgs);
//                     push.apply(args, arguments)
//                 }
//                 if (partialRightArgs || isCurry) {
//                     args || (args = slice(arguments));
//                     if (partialRightArgs) {
//                         push.apply(args, partialRightArgs)
//                     }
//                     if (isCurry && args.length < arity) {
//                         bitmask |= 16 & ~32;
//                         return baseCreateWrapper([func, isCurryBound ? bitmask : bitmask & ~3, args, null, thisArg, arity])
//                     }
//                 }
//                 args || (args = arguments);
//                 if (isBindKey) {
//                     func = thisBinding[key]
//                 }
//                 if (this instanceof bound) {
//                     thisBinding = baseCreate(func.prototype);
//                     var result = func.apply(thisBinding, args);
//                     return isObject(result) ? result : thisBinding
//                 }
//                 return func.apply(thisBinding, args)
//             }
//             return bound
//         }

//         function baseDifference(array, values) {
//             var index = -1,
//                 indexOf = getIndexOf(),
//                 length = array ? array.length : 0,
//                 result = [];
//             while (++index < length) {
//                 var value = array[index];
//                 if (indexOf(values, value) < 0) {
//                     result.push(value)
//                 }
//             }
//             return result
//         }

//         function baseFlatten(array, isShallow, isStrict, fromIndex) {
//             var index = (fromIndex || 0) - 1,
//                 length = array ? array.length : 0,
//                 result = [];
//             while (++index < length) {
//                 var value = array[index];
//                 if (value && typeof value == "object" && typeof value.length == "number" && (isArray(value) || isArguments(value))) {
//                     if (!isShallow) {
//                         value = baseFlatten(value, isShallow, isStrict)
//                     }
//                     var valIndex = -1,
//                         valLength = value.length,
//                         resIndex = result.length;
//                     result.length += valLength;
//                     while (++valIndex < valLength) {
//                         result[resIndex++] = value[valIndex]
//                     }
//                 } else if (!isStrict) {
//                     result.push(value)
//                 }
//             }
//             return result
//         }

//         function baseIsEqual(a, b, stackA, stackB) {
//             if (a === b) {
//                 return a !== 0 || 1 / a == 1 / b
//             }
//             var type = typeof a,
//                 otherType = typeof b;
//             if (a === a && !(a && objectTypes[type]) && !(b && objectTypes[otherType])) {
//                 return false
//             }
//             if (a == null || b == null) {
//                 return a === b
//             }
//             var className = toString.call(a),
//                 otherClass = toString.call(b);
//             if (className != otherClass) {
//                 return false
//             }
//             switch (className) {
//             case boolClass:
//             case dateClass:
//                 return +a == +b;
//             case numberClass:
//                 return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
//             case regexpClass:
//             case stringClass:
//                 return a == String(b)
//             }
//             var isArr = className == arrayClass;
//             if (!isArr) {
//                 var aWrapped = a instanceof lodash,
//                     bWrapped = b instanceof lodash;
//                 if (aWrapped || bWrapped) {
//                     return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, stackA, stackB)
//                 }
//                 if (className != objectClass) {
//                     return false
//                 }
//                 var ctorA = a.constructor,
//                     ctorB = b.constructor;
//                 if (ctorA != ctorB && !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) && "constructor" in a && "constructor" in b) {
//                     return false
//                 }
//             }
//             stackA || (stackA = []);
//             stackB || (stackB = []);
//             var length = stackA.length;
//             while (length--) {
//                 if (stackA[length] == a) {
//                     return stackB[length] == b
//                 }
//             }
//             var result = true,
//                 size = 0;
//             stackA.push(a);
//             stackB.push(b);
//             if (isArr) {
//                 size = b.length;
//                 result = size == a.length;
//                 if (result) {
//                     while (size--) {
//                         if (!(result = baseIsEqual(a[size], b[size], stackA, stackB))) {
//                             break
//                         }
//                     }
//                 }
//             } else {
//                 forIn(b, function (value, key, b) {
//                     if (hasOwnProperty.call(b, key)) {
//                         size++;
//                         return !(result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, stackA, stackB)) && indicatorObject
//                     }
//                 });
//                 if (result) {
//                     forIn(a, function (value, key, a) {
//                         if (hasOwnProperty.call(a, key)) {
//                             return !(result = --size > -1) && indicatorObject
//                         }
//                     })
//                 }
//             }
//             stackA.pop();
//             stackB.pop();
//             return result
//         }

//         function baseRandom(min, max) {
//             return min + floor(nativeRandom() * (max - min + 1))
//         }

//         function baseUniq(array, isSorted, callback) {
//             var index = -1,
//                 indexOf = getIndexOf(),
//                 length = array ? array.length : 0,
//                 result = [],
//                 seen = callback ? [] : result;
//             while (++index < length) {
//                 var value = array[index],
//                     computed = callback ? callback(value, index, array) : value;
//                 if (isSorted ? !index || seen[seen.length - 1] !== computed : indexOf(seen, computed) < 0) {
//                     if (callback) {
//                         seen.push(computed)
//                     }
//                     result.push(value)
//                 }
//             }
//             return result
//         }

//         function createAggregator(setter) {
//             return function (collection, callback, thisArg) {
//                 var result = {};
//                 callback = createCallback(callback, thisArg, 3);
//                 var index = -1,
//                     length = collection ? collection.length : 0;
//                 if (typeof length == "number") {
//                     while (++index < length) {
//                         var value = collection[index];
//                         setter(result, value, callback(value, index, collection), collection)
//                     }
//                 } else {
//                     forOwn(collection, function (value, key, collection) {
//                         setter(result, value, callback(value, key, collection), collection)
//                     })
//                 }
//                 return result
//             }
//         }

//         function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
//             var isBind = bitmask & 1,
//                 isBindKey = bitmask & 2,
//                 isCurry = bitmask & 4,
//                 isCurryBound = bitmask & 8,
//                 isPartial = bitmask & 16,
//                 isPartialRight = bitmask & 32;
//             if (!isBindKey && !isFunction(func)) {
//                 throw new TypeError
//             }
//             if (isPartial && !partialArgs.length) {
//                 bitmask &= ~16;
//                 isPartial = partialArgs = false
//             }
//             if (isPartialRight && !partialRightArgs.length) {
//                 bitmask &= ~32;
//                 isPartialRight = partialRightArgs = false
//             }
//             var creater = bitmask == 1 || bitmask === 17 ? baseBind : baseCreateWrapper;
//             return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity])
//         }

//         function escapeHtmlChar(match) {
//             return htmlEscapes[match]
//         }

//         function getIndexOf() {
//             var result = (result = lodash.indexOf) === indexOf ? baseIndexOf : result;
//             return result
//         }

//         function isNative(value) {
//             return typeof value == "function" && reNative.test(value)
//         }

//         function unescapeHtmlChar(match) {
//             return htmlUnescapes[match]
//         }

//         function isArguments(value) {
//             return value && typeof value == "object" && typeof value.length == "number" && toString.call(value) == argsClass || false
//         }
//         if (!isArguments(arguments)) {
//             isArguments = function (value) {
//                 return value && typeof value == "object" && typeof value.length == "number" && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee") || false
//             }
//         }
//         var isArray = nativeIsArray || function (value) {
//                 return value && typeof value == "object" && typeof value.length == "number" && toString.call(value) == arrayClass || false
//             };
//         var shimKeys = function (object) {
//             var index, iterable = object,
//                 result = [];
//             if (!iterable) return result;
//             if (!objectTypes[typeof object]) return result;
//             for (index in iterable) {
//                 if (hasOwnProperty.call(iterable, index)) {
//                     result.push(index)
//                 }
//             }
//             return result
//         };
//         var keys = !nativeKeys ? shimKeys : function (object) {
//                 if (!isObject(object)) {
//                     return []
//                 }
//                 return nativeKeys(object)
//             };
//         var htmlEscapes = {
//             "&": "&amp;",
//             "<": "&lt;",
//             ">": "&gt;",
//             '"': "&quot;",
//             "'": "&#x27;"
//         };
//         var htmlUnescapes = invert(htmlEscapes);
//         var reEscapedHtml = RegExp("(" + keys(htmlUnescapes).join("|") + ")", "g"),
//             reUnescapedHtml = RegExp("[" + keys(htmlEscapes).join("") + "]", "g");

//         function assign(object) {
//             if (!object) {
//                 return object
//             }
//             for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
//                 var iterable = arguments[argsIndex];
//                 if (iterable) {
//                     for (var key in iterable) {
//                         object[key] = iterable[key]
//                     }
//                 }
//             }
//             return object
//         }

//         function clone(value) {
//             return isObject(value) ? isArray(value) ? slice(value) : assign({}, value) : value
//         }

//         function defaults(object) {
//             if (!object) {
//                 return object
//             }
//             for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
//                 var iterable = arguments[argsIndex];
//                 if (iterable) {
//                     for (var key in iterable) {
//                         if (typeof object[key] == "undefined") {
//                             object[key] = iterable[key]
//                         }
//                     }
//                 }
//             }
//             return object
//         }
//         var forIn = function (collection, callback) {
//             var index, iterable = collection,
//                 result = iterable;
//             if (!iterable) return result;
//             if (!objectTypes[typeof iterable]) return result;
//             for (index in iterable) {
//                 if (callback(iterable[index], index, collection) === indicatorObject) return result
//             }
//             return result
//         };
//         var forOwn = function (collection, callback) {
//             var index, iterable = collection,
//                 result = iterable;
//             if (!iterable) return result;
//             if (!objectTypes[typeof iterable]) return result;
//             for (index in iterable) {
//                 if (hasOwnProperty.call(iterable, index)) {
//                     if (callback(iterable[index], index, collection) === indicatorObject) return result
//                 }
//             }
//             return result
//         };

//         function functions(object) {
//             var result = [];
//             forIn(object, function (value, key) {
//                 if (isFunction(value)) {
//                     result.push(key)
//                 }
//             });
//             return result.sort()
//         }

//         function has(object, key) {
//             return object ? hasOwnProperty.call(object, key) : false
//         }

//         function invert(object) {
//             var index = -1,
//                 props = keys(object),
//                 length = props.length,
//                 result = {};
//             while (++index < length) {
//                 var key = props[index];
//                 result[object[key]] = key
//             }
//             return result
//         }

//         function isBoolean(value) {
//             return value === true || value === false || value && typeof value == "object" && toString.call(value) == boolClass || false
//         }

//         function isDate(value) {
//             return value && typeof value == "object" && toString.call(value) == dateClass || false
//         }

//         function isElement(value) {
//             return value && value.nodeType === 1 || false
//         }

//         function isEmpty(value) {
//             if (!value) {
//                 return true
//             }
//             if (isArray(value) || isString(value)) {
//                 return !value.length
//             }
//             for (var key in value) {
//                 if (hasOwnProperty.call(value, key)) {
//                     return false
//                 }
//             }
//             return true
//         }

//         function isEqual(a, b) {
//             return baseIsEqual(a, b)
//         }

//         function isFinite(value) {
//             return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value))
//         }

//         function isFunction(value) {
//             return typeof value == "function"
//         }
//         if (isFunction(/x/)) {
//             isFunction = function (value) {
//                 return typeof value == "function" && toString.call(value) == funcClass
//             }
//         }

//         function isObject(value) {
//             return !!(value && objectTypes[typeof value])
//         }

//         function isNaN(value) {
//             return isNumber(value) && value != +value
//         }

//         function isNull(value) {
//             return value === null
//         }

//         function isNumber(value) {
//             return typeof value == "number" || value && typeof value == "object" && toString.call(value) == numberClass || false
//         }

//         function isRegExp(value) {
//             return value && objectTypes[typeof value] && toString.call(value) == regexpClass || false
//         }

//         function isString(value) {
//             return typeof value == "string" || value && typeof value == "object" && toString.call(value) == stringClass || false
//         }

//         function isUndefined(value) {
//             return typeof value == "undefined"
//         }

//         function omit(object) {
//             var props = [];
//             forIn(object, function (value, key) {
//                 props.push(key)
//             });
//             props = baseDifference(props, baseFlatten(arguments, true, false, 1));
//             var index = -1,
//                 length = props.length,
//                 result = {};
//             while (++index < length) {
//                 var key = props[index];
//                 result[key] = object[key]
//             }
//             return result
//         }

//         function pairs(object) {
//             var index = -1,
//                 props = keys(object),
//                 length = props.length,
//                 result = Array(length);
//             while (++index < length) {
//                 var key = props[index];
//                 result[index] = [key, object[key]]
//             }
//             return result
//         }

//         function pick(object) {
//             var index = -1,
//                 props = baseFlatten(arguments, true, false, 1),
//                 length = props.length,
//                 result = {};
//             while (++index < length) {
//                 var key = props[index];
//                 if (key in object) {
//                     result[key] = object[key]
//                 }
//             }
//             return result
//         }

//         function values(object) {
//             var index = -1,
//                 props = keys(object),
//                 length = props.length,
//                 result = Array(length);
//             while (++index < length) {
//                 result[index] = object[props[index]]
//             }
//             return result
//         }

//         function contains(collection, target) {
//             var indexOf = getIndexOf(),
//                 length = collection ? collection.length : 0,
//                 result = false;
//             if (length && typeof length == "number") {
//                 result = indexOf(collection, target) > -1
//             } else {
//                 forOwn(collection, function (value) {
//                     return (result = value === target) && indicatorObject
//                 })
//             }
//             return result
//         }
//         var countBy = createAggregator(function (result, value, key) {
//             hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1
//         });

//         function every(collection, callback, thisArg) {
//             var result = true;
//             callback = createCallback(callback, thisArg, 3);
//             var index = -1,
//                 length = collection ? collection.length : 0;
//             if (typeof length == "number") {
//                 while (++index < length) {
//                     if (!(result = !! callback(collection[index], index, collection))) {
//                         break
//                     }
//                 }
//             } else {
//                 forOwn(collection, function (value, index, collection) {
//                     return !(result = !! callback(value, index, collection)) && indicatorObject
//                 })
//             }
//             return result
//         }

//         function filter(collection, callback, thisArg) {
//             var result = [];
//             callback = createCallback(callback, thisArg, 3);
//             var index = -1,
//                 length = collection ? collection.length : 0;
//             if (typeof length == "number") {
//                 while (++index < length) {
//                     var value = collection[index];
//                     if (callback(value, index, collection)) {
//                         result.push(value)
//                     }
//                 }
//             } else {
//                 forOwn(collection, function (value, index, collection) {
//                     if (callback(value, index, collection)) {
//                         result.push(value)
//                     }
//                 })
//             }
//             return result
//         }

//         function find(collection, callback, thisArg) {
//             callback = createCallback(callback, thisArg, 3);
//             var index = -1,
//                 length = collection ? collection.length : 0;
//             if (typeof length == "number") {
//                 while (++index < length) {
//                     var value = collection[index];
//                     if (callback(value, index, collection)) {
//                         return value
//                     }
//                 }
//             } else {
//                 var result;
//                 forOwn(collection, function (value, index, collection) {
//                     if (callback(value, index, collection)) {
//                         result = value;
//                         return indicatorObject
//                     }
//                 });
//                 return result
//             }
//         }

//         function findWhere(object, properties) {
//             return where(object, properties, true)
//         }

//         function forEach(collection, callback, thisArg) {
//             var index = -1,
//                 length = collection ? collection.length : 0;
//             callback = callback && typeof thisArg == "undefined" ? callback : baseCreateCallback(callback, thisArg, 3);
//             if (typeof length == "number") {
//                 while (++index < length) {
//                     if (callback(collection[index], index, collection) === indicatorObject) {
//                         break
//                     }
//                 }
//             } else {
//                 forOwn(collection, callback)
//             }
//         }

//         function forEachRight(collection, callback) {
//             var length = collection ? collection.length : 0;
//             if (typeof length == "number") {
//                 while (length--) {
//                     if (callback(collection[length], length, collection) === false) {
//                         break
//                     }
//                 }
//             } else {
//                 var props = keys(collection);
//                 length = props.length;
//                 forOwn(collection, function (value, key, collection) {
//                     key = props ? props[--length] : --length;
//                     return callback(collection[key], key, collection) === false && indicatorObject
//                 })
//             }
//         }
//         var groupBy = createAggregator(function (result, value, key) {
//             (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value)
//         });
//         var indexBy = createAggregator(function (result, value, key) {
//             result[key] = value
//         });

//         function invoke(collection, methodName) {
//             var args = slice(arguments, 2),
//                 index = -1,
//                 isFunc = typeof methodName == "function",
//                 length = collection ? collection.length : 0,
//                 result = Array(typeof length == "number" ? length : 0);
//             forEach(collection, function (value) {
//                 result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args)
//             });
//             return result
//         }

//         function map(collection, callback, thisArg) {
//             var index = -1,
//                 length = collection ? collection.length : 0;
//             callback = createCallback(callback, thisArg, 3);
//             if (typeof length == "number") {
//                 var result = Array(length);
//                 while (++index < length) {
//                     result[index] = callback(collection[index], index, collection)
//                 }
//             } else {
//                 result = [];
//                 forOwn(collection, function (value, key, collection) {
//                     result[++index] = callback(value, key, collection)
//                 })
//             }
//             return result
//         }

//         function max(collection, callback, thisArg) {
//             var computed = -Infinity,
//                 result = computed;
//             if (typeof callback != "function" && thisArg && thisArg[callback] === collection) {
//                 callback = null
//             }
//             var index = -1,
//                 length = collection ? collection.length : 0;
//             if (callback == null && typeof length == "number") {
//                 while (++index < length) {
//                     var value = collection[index];
//                     if (value > result) {
//                         result = value
//                     }
//                 }
//             } else {
//                 callback = createCallback(callback, thisArg, 3);
//                 forEach(collection, function (value, index, collection) {
//                     var current = callback(value, index, collection);
//                     if (current > computed) {
//                         computed = current;
//                         result = value
//                     }
//                 })
//             }
//             return result
//         }

//         function min(collection, callback, thisArg) {
//             var computed = Infinity,
//                 result = computed;
//             if (typeof callback != "function" && thisArg && thisArg[callback] === collection) {
//                 callback = null
//             }
//             var index = -1,
//                 length = collection ? collection.length : 0;
//             if (callback == null && typeof length == "number") {
//                 while (++index < length) {
//                     var value = collection[index];
//                     if (value < result) {
//                         result = value
//                     }
//                 }
//             } else {
//                 callback = createCallback(callback, thisArg, 3);
//                 forEach(collection, function (value, index, collection) {
//                     var current = callback(value, index, collection);
//                     if (current < computed) {
//                         computed = current;
//                         result = value
//                     }
//                 })
//             }
//             return result
//         }
//         var pluck = map;

//         function reduce(collection, callback, accumulator, thisArg) {
//             if (!collection) return accumulator;
//             var noaccum = arguments.length < 3;
//             callback = createCallback(callback, thisArg, 4);
//             var index = -1,
//                 length = collection.length;
//             if (typeof length == "number") {
//                 if (noaccum) {
//                     accumulator = collection[++index]
//                 }
//                 while (++index < length) {
//                     accumulator = callback(accumulator, collection[index], index, collection)
//                 }
//             } else {
//                 forOwn(collection, function (value, index, collection) {
//                     accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection)
//                 })
//             }
//             return accumulator
//         }

//         function reduceRight(collection, callback, accumulator, thisArg) {
//             var noaccum = arguments.length < 3;
//             callback = createCallback(callback, thisArg, 4);
//             forEachRight(collection, function (value, index, collection) {
//                 accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection)
//             });
//             return accumulator
//         }

//         function reject(collection, callback, thisArg) {
//             callback = createCallback(callback, thisArg, 3);
//             return filter(collection, function (value, index, collection) {
//                 return !callback(value, index, collection)
//             })
//         }

//         function sample(collection, n, guard) {
//             if (collection && typeof collection.length != "number") {
//                 collection = values(collection)
//             }
//             if (n == null || guard) {
//                 return collection ? collection[baseRandom(0, collection.length - 1)] : undefined
//             }
//             var result = shuffle(collection);
//             result.length = nativeMin(nativeMax(0, n), result.length);
//             return result
//         }

//         function shuffle(collection) {
//             var index = -1,
//                 length = collection ? collection.length : 0,
//                 result = Array(typeof length == "number" ? length : 0);
//             forEach(collection, function (value) {
//                 var rand = baseRandom(0, ++index);
//                 result[index] = result[rand];
//                 result[rand] = value
//             });
//             return result
//         }

//         function size(collection) {
//             var length = collection ? collection.length : 0;
//             return typeof length == "number" ? length : keys(collection).length
//         }

//         function some(collection, callback, thisArg) {
//             var result;
//             callback = createCallback(callback, thisArg, 3);
//             var index = -1,
//                 length = collection ? collection.length : 0;
//             if (typeof length == "number") {
//                 while (++index < length) {
//                     if (result = callback(collection[index], index, collection)) {
//                         break
//                     }
//                 }
//             } else {
//                 forOwn(collection, function (value, index, collection) {
//                     return (result = callback(value, index, collection)) && indicatorObject
//                 })
//             }
//             return !!result
//         }

//         function sortBy(collection, callback, thisArg) {
//             var index = -1,
//                 length = collection ? collection.length : 0,
//                 result = Array(typeof length == "number" ? length : 0);
//             callback = createCallback(callback, thisArg, 3);
//             forEach(collection, function (value, key, collection) {
//                 result[++index] = {
//                     criteria: [callback(value, key, collection)],
//                     index: index,
//                     value: value
//                 }
//             });
//             length = result.length;
//             result.sort(compareAscending);
//             while (length--) {
//                 result[length] = result[length].value
//             }
//             return result
//         }

//         function toArray(collection) {
//             if (isArray(collection)) {
//                 return slice(collection)
//             }
//             if (collection && typeof collection.length == "number") {
//                 return map(collection)
//             }
//             return values(collection)
//         }

//         function where(collection, properties, first) {
//             return first && isEmpty(properties) ? undefined : (first ? find : filter)(collection, properties)
//         }

//         function compact(array) {
//             var index = -1,
//                 length = array ? array.length : 0,
//                 result = [];
//             while (++index < length) {
//                 var value = array[index];
//                 if (value) {
//                     result.push(value)
//                 }
//             }
//             return result
//         }

//         function difference(array) {
//             return baseDifference(array, baseFlatten(arguments, true, true, 1))
//         }

//         function first(array, callback, thisArg) {
//             var n = 0,
//                 length = array ? array.length : 0;
//             if (typeof callback != "number" && callback != null) {
//                 var index = -1;
//                 callback = createCallback(callback, thisArg, 3);
//                 while (++index < length && callback(array[index], index, array)) {
//                     n++
//                 }
//             } else {
//                 n = callback;
//                 if (n == null || thisArg) {
//                     return array ? array[0] : undefined
//                 }
//             }
//             return slice(array, 0, nativeMin(nativeMax(0, n), length))
//         }

//         function flatten(array, isShallow) {
//             return baseFlatten(array, isShallow)
//         }

//         function indexOf(array, value, fromIndex) {
//             if (typeof fromIndex == "number") {
//                 var length = array ? array.length : 0;
//                 fromIndex = fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0
//             } else if (fromIndex) {
//                 var index = sortedIndex(array, value);
//                 return array[index] === value ? index : -1
//             }
//             return baseIndexOf(array, value, fromIndex)
//         }

//         function initial(array, callback, thisArg) {
//             var n = 0,
//                 length = array ? array.length : 0;
//             if (typeof callback != "number" && callback != null) {
//                 var index = length;
//                 callback = createCallback(callback, thisArg, 3);
//                 while (index-- && callback(array[index], index, array)) {
//                     n++
//                 }
//             } else {
//                 n = callback == null || thisArg ? 1 : callback || n
//             }
//             return slice(array, 0, nativeMin(nativeMax(0, length - n), length))
//         }

//         function intersection() {
//             var args = [],
//                 argsIndex = -1,
//                 argsLength = arguments.length;
//             while (++argsIndex < argsLength) {
//                 var value = arguments[argsIndex];
//                 if (isArray(value) || isArguments(value)) {
//                     args.push(value)
//                 }
//             }
//             var array = args[0],
//                 index = -1,
//                 indexOf = getIndexOf(),
//                 length = array ? array.length : 0,
//                 result = [];
//             outer: while (++index < length) {
//                 value = array[index];
//                 if (indexOf(result, value) < 0) {
//                     var argsIndex = argsLength;
//                     while (--argsIndex) {
//                         if (indexOf(args[argsIndex], value) < 0) {
//                             continue outer
//                         }
//                     }
//                     result.push(value)
//                 }
//             }
//             return result
//         }

//         function last(array, callback, thisArg) {
//             var n = 0,
//                 length = array ? array.length : 0;
//             if (typeof callback != "number" && callback != null) {
//                 var index = length;
//                 callback = createCallback(callback, thisArg, 3);
//                 while (index-- && callback(array[index], index, array)) {
//                     n++
//                 }
//             } else {
//                 n = callback;
//                 if (n == null || thisArg) {
//                     return array ? array[length - 1] : undefined
//                 }
//             }
//             return slice(array, nativeMax(0, length - n))
//         }

//         function lastIndexOf(array, value, fromIndex) {
//             var index = array ? array.length : 0;
//             if (typeof fromIndex == "number") {
//                 index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1
//             }
//             while (index--) {
//                 if (array[index] === value) {
//                     return index
//                 }
//             }
//             return -1
//         }

//         function range(start, end, step) {
//             start = +start || 0;
//             step = +step || 1;
//             if (end == null) {
//                 end = start;
//                 start = 0
//             }
//             var index = -1,
//                 length = nativeMax(0, ceil((end - start) / step)),
//                 result = Array(length);
//             while (++index < length) {
//                 result[index] = start;
//                 start += step
//             }
//             return result
//         }

//         function rest(array, callback, thisArg) {
//             if (typeof callback != "number" && callback != null) {
//                 var n = 0,
//                     index = -1,
//                     length = array ? array.length : 0;
//                 callback = createCallback(callback, thisArg, 3);
//                 while (++index < length && callback(array[index], index, array)) {
//                     n++
//                 }
//             } else {
//                 n = callback == null || thisArg ? 1 : nativeMax(0, callback)
//             }
//             return slice(array, n)
//         }

//         function sortedIndex(array, value, callback, thisArg) {
//             var low = 0,
//                 high = array ? array.length : low;
//             callback = callback ? createCallback(callback, thisArg, 1) : identity;
//             value = callback(value);
//             while (low < high) {
//                 var mid = low + high >>> 1;
//                 callback(array[mid]) < value ? low = mid + 1 : high = mid
//             }
//             return low
//         }

//         function union() {
//             return baseUniq(baseFlatten(arguments, true, true))
//         }

//         function uniq(array, isSorted, callback, thisArg) {
//             if (typeof isSorted != "boolean" && isSorted != null) {
//                 thisArg = callback;
//                 callback = typeof isSorted != "function" && thisArg && thisArg[isSorted] === array ? null : isSorted;
//                 isSorted = false
//             }
//             if (callback != null) {
//                 callback = createCallback(callback, thisArg, 3)
//             }
//             return baseUniq(array, isSorted, callback)
//         }

//         function without(array) {
//             return baseDifference(array, slice(arguments, 1))
//         }

//         function zip() {
//             var index = -1,
//                 length = max(pluck(arguments, "length")),
//                 result = Array(length < 0 ? 0 : length);
//             while (++index < length) {
//                 result[index] = pluck(arguments, index)
//             }
//             return result
//         }

//         function zipObject(keys, values) {
//             var index = -1,
//                 length = keys ? keys.length : 0,
//                 result = {};
//             if (!values && length && !isArray(keys[0])) {
//                 values = []
//             }
//             while (++index < length) {
//                 var key = keys[index];
//                 if (values) {
//                     result[key] = values[index]
//                 } else if (key) {
//                     result[key[0]] = key[1]
//                 }
//             }
//             return result
//         }

//         function after(n, func) {
//             if (!isFunction(func)) {
//                 throw new TypeError
//             }
//             return function () {
//                 if (--n < 1) {
//                     return func.apply(this, arguments)
//                 }
//             }
//         }

//         function bind(func, thisArg) {
//             return arguments.length > 2 ? createWrapper(func, 17, slice(arguments, 2), null, thisArg) : createWrapper(func, 1, null, null, thisArg)
//         }

//         function bindAll(object) {
//             var funcs = arguments.length > 1 ? baseFlatten(arguments, true, false, 1) : functions(object),
//                 index = -1,
//                 length = funcs.length;
//             while (++index < length) {
//                 var key = funcs[index];
//                 object[key] = createWrapper(object[key], 1, null, null, object)
//             }
//             return object
//         }

//         function compose() {
//             var funcs = arguments,
//                 length = funcs.length;
//             while (length--) {
//                 if (!isFunction(funcs[length])) {
//                     throw new TypeError
//                 }
//             }
//             return function () {
//                 var args = arguments,
//                     length = funcs.length;
//                 while (length--) {
//                     args = [funcs[length].apply(this, args)]
//                 }
//                 return args[0]
//             }
//         }

//         function debounce(func, wait, options) {
//             var args, maxTimeoutId, result, stamp, thisArg, timeoutId, trailingCall, lastCalled = 0,
//                 maxWait = false,
//                 trailing = true;
//             if (!isFunction(func)) {
//                 throw new TypeError
//             }
//             wait = nativeMax(0, wait) || 0;
//             if (options === true) {
//                 var leading = true;
//                 trailing = false
//             } else if (isObject(options)) {
//                 leading = options.leading;
//                 maxWait = "maxWait" in options && (nativeMax(wait, options.maxWait) || 0);
//                 trailing = "trailing" in options ? options.trailing : trailing
//             }
//             var delayed = function () {
//                 var remaining = wait - (now() - stamp);
//                 if (remaining <= 0) {
//                     if (maxTimeoutId) {
//                         clearTimeout(maxTimeoutId)
//                     }
//                     var isCalled = trailingCall;
//                     maxTimeoutId = timeoutId = trailingCall = undefined;
//                     if (isCalled) {
//                         lastCalled = now();
//                         result = func.apply(thisArg, args);
//                         if (!timeoutId && !maxTimeoutId) {
//                             args = thisArg = null
//                         }
//                     }
//                 } else {
//                     timeoutId = setTimeout(delayed, remaining)
//                 }
//             };
//             var maxDelayed = function () {
//                 if (timeoutId) {
//                     clearTimeout(timeoutId)
//                 }
//                 maxTimeoutId = timeoutId = trailingCall = undefined;
//                 if (trailing || maxWait !== wait) {
//                     lastCalled = now();
//                     result = func.apply(thisArg, args);
//                     if (!timeoutId && !maxTimeoutId) {
//                         args = thisArg = null
//                     }
//                 }
//             };
//             return function () {
//                 args = arguments;
//                 stamp = now();
//                 thisArg = this;
//                 trailingCall = trailing && (timeoutId || !leading);
//                 if (maxWait === false) {
//                     var leadingCall = leading && !timeoutId
//                 } else {
//                     if (!maxTimeoutId && !leading) {
//                         lastCalled = stamp
//                     }
//                     var remaining = maxWait - (stamp - lastCalled),
//                         isCalled = remaining <= 0;
//                     if (isCalled) {
//                         if (maxTimeoutId) {
//                             maxTimeoutId = clearTimeout(maxTimeoutId)
//                         }
//                         lastCalled = stamp;
//                         result = func.apply(thisArg, args)
//                     } else if (!maxTimeoutId) {
//                         maxTimeoutId = setTimeout(maxDelayed, remaining)
//                     }
//                 } if (isCalled && timeoutId) {
//                     timeoutId = clearTimeout(timeoutId)
//                 } else if (!timeoutId && wait !== maxWait) {
//                     timeoutId = setTimeout(delayed, wait)
//                 }
//                 if (leadingCall) {
//                     isCalled = true;
//                     result = func.apply(thisArg, args)
//                 }
//                 if (isCalled && !timeoutId && !maxTimeoutId) {
//                     args = thisArg = null
//                 }
//                 return result
//             }
//         }

//         function defer(func) {
//             if (!isFunction(func)) {
//                 throw new TypeError
//             }
//             var args = slice(arguments, 1);
//             return setTimeout(function () {
//                 func.apply(undefined, args)
//             }, 1)
//         }

//         function delay(func, wait) {
//             if (!isFunction(func)) {
//                 throw new TypeError
//             }
//             var args = slice(arguments, 2);
//             return setTimeout(function () {
//                 func.apply(undefined, args)
//             }, wait)
//         }

//         function memoize(func, resolver) {
//             var cache = {};
//             return function () {
//                 var key = resolver ? resolver.apply(this, arguments) : keyPrefix + arguments[0];
//                 return hasOwnProperty.call(cache, key) ? cache[key] : cache[key] = func.apply(this, arguments)
//             }
//         }

//         function once(func) {
//             var ran, result;
//             if (!isFunction(func)) {
//                 throw new TypeError
//             }
//             return function () {
//                 if (ran) {
//                     return result
//                 }
//                 ran = true;
//                 result = func.apply(this, arguments);
//                 func = null;
//                 return result
//             }
//         }

//         function partial(func) {
//             return createWrapper(func, 16, slice(arguments, 1))
//         }

//         function throttle(func, wait, options) {
//             var leading = true,
//                 trailing = true;
//             if (!isFunction(func)) {
//                 throw new TypeError
//             }
//             if (options === false) {
//                 leading = false
//             } else if (isObject(options)) {
//                 leading = "leading" in options ? options.leading : leading;
//                 trailing = "trailing" in options ? options.trailing : trailing
//             }
//             options = {};
//             options.leading = leading;
//             options.maxWait = wait;
//             options.trailing = trailing;
//             return debounce(func, wait, options)
//         }

//         function wrap(value, wrapper) {
//             return createWrapper(wrapper, 16, [value])
//         }

//         function createCallback(func, thisArg, argCount) {
//             var type = typeof func;
//             if (func == null || type == "function") {
//                 return baseCreateCallback(func, thisArg, argCount)
//             }
//             if (type != "object") {
//                 return property(func)
//             }
//             var props = keys(func);
//             return function (object) {
//                 var length = props.length,
//                     result = false;
//                 while (length--) {
//                     if (!(result = object[props[length]] === func[props[length]])) {
//                         break
//                     }
//                 }
//                 return result
//             }
//         }

//         function escape(string) {
//             return string == null ? "" : String(string).replace(reUnescapedHtml, escapeHtmlChar)
//         }

//         function identity(value) {
//             return value
//         }

//         function mixin(object) {
//             forEach(functions(object), function (methodName) {
//                 var func = lodash[methodName] = object[methodName];
//                 lodash.prototype[methodName] = function () {
//                     var args = [this.__wrapped__];
//                     push.apply(args, arguments);
//                     var result = func.apply(lodash, args);
//                     return this.__chain__ ? new lodashWrapper(result, true) : result
//                 }
//             })
//         }

//         function noConflict() {
//             root._ = oldDash;
//             return this
//         }

//         function noop() {}
//         var now = isNative(now = Date.now) && now || function () {
//                 return (new Date).getTime()
//             };

//         function property(key) {
//             return function (object) {
//                 return object[key]
//             }
//         }

//         function random(min, max) {
//             if (min == null && max == null) {
//                 max = 1
//             }
//             min = +min || 0;
//             if (max == null) {
//                 max = min;
//                 min = 0
//             } else {
//                 max = +max || 0
//             }
//             return min + floor(nativeRandom() * (max - min + 1))
//         }

//         function result(object, key) {
//             if (object) {
//                 var value = object[key];
//                 return isFunction(value) ? object[key]() : value
//             }
//         }

//         function template(text, data, options) {
//             var _ = lodash,
//                 settings = _.templateSettings;
//             text = String(text || "");
//             options = defaults({}, options, settings);
//             var index = 0,
//                 source = "__p += '",
//                 variable = options.variable;
//             var reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + (options.interpolate || reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
//             text.replace(reDelimiters, function (match, escapeValue, interpolateValue, evaluateValue, offset) {
//                 source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);
//                 if (escapeValue) {
//                     source += "' +\n_.escape(" + escapeValue + ") +\n'"
//                 }
//                 if (evaluateValue) {
//                     source += "';\n" + evaluateValue + ";\n__p += '"
//                 }
//                 if (interpolateValue) {
//                     source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'"
//                 }
//                 index = offset + match.length;
//                 return match
//             });
//             source += "';\n";
//             if (!variable) {
//                 variable = "obj";
//                 source = "with (" + variable + " || {}) {\n" + source + "\n}\n"
//             }
//             source = "function(" + variable + ") {\n" + "var __t, __p = '', __j = Array.prototype.join;\n" + "function print() { __p += __j.call(arguments, '') }\n" + source + "return __p\n}";
//             try {
//                 var result = Function("_", "return " + source)(_)
//             } catch (e) {
//                 e.source = source;
//                 throw e
//             }
//             if (data) {
//                 return result(data)
//             }
//             result.source = source;
//             return result
//         }

//         function times(n, callback, thisArg) {
//             n = (n = +n) > -1 ? n : 0;
//             var index = -1,
//                 result = Array(n);
//             callback = baseCreateCallback(callback, thisArg, 1);
//             while (++index < n) {
//                 result[index] = callback(index)
//             }
//             return result
//         }

//         function unescape(string) {
//             return string == null ? "" : String(string).replace(reEscapedHtml, unescapeHtmlChar)
//         }

//         function uniqueId(prefix) {
//             var id = ++idCounter + "";
//             return prefix ? prefix + id : id
//         }

//         function chain(value) {
//             value = new lodashWrapper(value);
//             value.__chain__ = true;
//             return value
//         }

//         function tap(value, interceptor) {
//             interceptor(value);
//             return value
//         }

//         function wrapperChain() {
//             this.__chain__ = true;
//             return this
//         }

//         function wrapperValueOf() {
//             return this.__wrapped__
//         }
//         lodash.after = after;
//         lodash.bind = bind;
//         lodash.bindAll = bindAll;
//         lodash.chain = chain;
//         lodash.compact = compact;
//         lodash.compose = compose;
//         lodash.countBy = countBy;
//         lodash.debounce = debounce;
//         lodash.defaults = defaults;
//         lodash.defer = defer;
//         lodash.delay = delay;
//         lodash.difference = difference;
//         lodash.filter = filter;
//         lodash.flatten = flatten;
//         lodash.forEach = forEach;
//         lodash.functions = functions;
//         lodash.groupBy = groupBy;
//         lodash.indexBy = indexBy;
//         lodash.initial = initial;
//         lodash.intersection = intersection;
//         lodash.invert = invert;
//         lodash.invoke = invoke;
//         lodash.keys = keys;
//         lodash.map = map;
//         lodash.max = max;
//         lodash.memoize = memoize;
//         lodash.min = min;
//         lodash.omit = omit;
//         lodash.once = once;
//         lodash.pairs = pairs;
//         lodash.partial = partial;
//         lodash.pick = pick;
//         lodash.pluck = pluck;
//         lodash.range = range;
//         lodash.reject = reject;
//         lodash.rest = rest;
//         lodash.shuffle = shuffle;
//         lodash.sortBy = sortBy;
//         lodash.tap = tap;
//         lodash.throttle = throttle;
//         lodash.times = times;
//         lodash.toArray = toArray;
//         lodash.union = union;
//         lodash.uniq = uniq;
//         lodash.values = values;
//         lodash.where = where;
//         lodash.without = without;
//         lodash.wrap = wrap;
//         lodash.zip = zip;
//         lodash.collect = map;
//         lodash.drop = rest;
//         lodash.each = forEach;
//         lodash.extend = assign;
//         lodash.methods = functions;
//         lodash.object = zipObject;
//         lodash.select = filter;
//         lodash.tail = rest;
//         lodash.unique = uniq;
//         lodash.clone = clone;
//         lodash.contains = contains;
//         lodash.escape = escape;
//         lodash.every = every;
//         lodash.find = find;
//         lodash.has = has;
//         lodash.identity = identity;
//         lodash.indexOf = indexOf;
//         lodash.isArguments = isArguments;
//         lodash.isArray = isArray;
//         lodash.isBoolean = isBoolean;
//         lodash.isDate = isDate;
//         lodash.isElement = isElement;
//         lodash.isEmpty = isEmpty;
//         lodash.isEqual = isEqual;
//         lodash.isFinite = isFinite;
//         lodash.isFunction = isFunction;
//         lodash.isNaN = isNaN;
//         lodash.isNull = isNull;
//         lodash.isNumber = isNumber;
//         lodash.isObject = isObject;
//         lodash.isRegExp = isRegExp;
//         lodash.isString = isString;
//         lodash.isUndefined = isUndefined;
//         lodash.lastIndexOf = lastIndexOf;
//         lodash.mixin = mixin;
//         lodash.noConflict = noConflict;
//         lodash.random = random;
//         lodash.reduce = reduce;
//         lodash.reduceRight = reduceRight;
//         lodash.result = result;
//         lodash.size = size;
//         lodash.some = some;
//         lodash.sortedIndex = sortedIndex;
//         lodash.template = template;
//         lodash.unescape = unescape;
//         lodash.uniqueId = uniqueId;
//         lodash.all = every;
//         lodash.any = some;
//         lodash.detect = find;
//         lodash.findWhere = findWhere;
//         lodash.foldl = reduce;
//         lodash.foldr = reduceRight;
//         lodash.include = contains;
//         lodash.inject = reduce;
//         lodash.first = first;
//         lodash.last = last;
//         lodash.sample = sample;
//         lodash.take = first;
//         lodash.head = first;
//         mixin(lodash);
//         lodash.VERSION = "2.4.1";
//         lodash.prototype.chain = wrapperChain;
//         lodash.prototype.value = wrapperValueOf;
//         forEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (methodName) {
//             var func = arrayRef[methodName];
//             lodash.prototype[methodName] = function () {
//                 var value = this.__wrapped__;
//                 func.apply(value, arguments);
//                 if (!support.spliceObjects && value.length === 0) {
//                     delete value[0]
//                 }
//                 return this
//             }
//         });
//         forEach(["concat", "join", "slice"], function (methodName) {
//             var func = arrayRef[methodName];
//             lodash.prototype[methodName] = function () {
//                 var value = this.__wrapped__,
//                     result = func.apply(value, arguments);
//                 if (this.__chain__) {
//                     result = new lodashWrapper(result);
//                     result.__chain__ = true
//                 }
//                 return result
//             }
//         });
//         if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
//             root._ = lodash;
//             define(function () {
//                 return lodash
//             })
//         } else if (freeExports && freeModule) {
//             if (moduleExports) {
//                 (freeModule.exports = lodash)._ = lodash
//             } else {
//                 freeExports._ = lodash
//             }
//         } else {
//             root._ = lodash
//         }
//     }).call(this);
//     (function (factory) {
//         if (typeof define === "function" && define.amd) {
//             define(["jquery"], factory)
//         } else if (typeof exports === "object") {
//             module.exports = factory
//         } else {
//             factory(jQuery)
//         }
//     })(function ($) {
//         var toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
//             toBind = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
//             slice = Array.prototype.slice,
//             nullLowestDeltaTimeout, lowestDelta;
//         if ($.event.fixHooks) {
//             for (var i = toFix.length; i;) {
//                 $.event.fixHooks[toFix[--i]] = $.event.mouseHooks
//             }
//         }
//         $.event.special.mousewheel = {
//             version: "3.1.6",
//             setup: function () {
//                 if (this.addEventListener) {
//                     for (var i = toBind.length; i;) {
//                         this.addEventListener(toBind[--i], handler, false)
//                     }
//                 } else {
//                     this.onmousewheel = handler
//                 }
//             },
//             teardown: function () {
//                 if (this.removeEventListener) {
//                     for (var i = toBind.length; i;) {
//                         this.removeEventListener(toBind[--i], handler, false)
//                     }
//                 } else {
//                     this.onmousewheel = null
//                 }
//             }
//         };
//         $.fn.extend({
//             mousewheel: function (fn) {
//                 return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel")
//             },
//             unmousewheel: function (fn) {
//                 return this.unbind("mousewheel", fn)
//             }
//         });

//         function handler(event) {
//             var orgEvent = event || window.event,
//                 args = slice.call(arguments, 1),
//                 delta = 0,
//                 deltaX = 0,
//                 deltaY = 0,
//                 absDelta = 0;
//             event = $.event.fix(orgEvent);
//             event.type = "mousewheel";
//             if ("detail" in orgEvent) {
//                 deltaY = orgEvent.detail * -1
//             }
//             if ("wheelDelta" in orgEvent) {
//                 deltaY = orgEvent.wheelDelta
//             }
//             if ("wheelDeltaY" in orgEvent) {
//                 deltaY = orgEvent.wheelDeltaY
//             }
//             if ("wheelDeltaX" in orgEvent) {
//                 deltaX = orgEvent.wheelDeltaX * -1
//             }
//             if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
//                 deltaX = deltaY * -1;
//                 deltaY = 0
//             }
//             delta = deltaY === 0 ? deltaX : deltaY;
//             if ("deltaY" in orgEvent) {
//                 deltaY = orgEvent.deltaY * -1;
//                 delta = deltaY
//             }
//             if ("deltaX" in orgEvent) {
//                 deltaX = orgEvent.deltaX;
//                 if (deltaY === 0) {
//                     delta = deltaX * -1
//                 }
//             }
//             if (deltaY === 0 && deltaX === 0) {
//                 return
//             }
//             absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
//             if (!lowestDelta || absDelta < lowestDelta) {
//                 lowestDelta = absDelta
//             }
//             delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
//             deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
//             deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);
//             event.deltaX = deltaX;
//             event.deltaY = deltaY;
//             event.deltaFactor = lowestDelta;
//             args.unshift(event, delta, deltaX, deltaY);
//             if (nullLowestDeltaTimeout) {
//                 clearTimeout(nullLowestDeltaTimeout)
//             }
//             nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
//             return ($.event.dispatch || $.event.handle).apply(this, args)
//         }

//         function nullLowestDelta() {
//             lowestDelta = null
//         }
//     });
//     (function ($, window) {
//         "use strict";
//         var POSITIONED = ["fixed", "relative", "absolute"];
//         var WINDOW_EVENTS = "mousewheel resize";
//         var $window = $(window);
//         var ScrollWatch = function (el, options) {
//             _.bindAll(this, "handleScroll", "onScroll");
//             this.$el = $(el);
//             this.el = this.$el[0];
//             this.options = _.defaults(options || {}, {
//                 watchOn: window
//             });
//             this.$watchOn = $(this.options.watchOn);
//             this._prepareContainer();
//             this.inViewport = false;
//             this.callbacks = {
//                 scrollin: $.Callbacks(),
//                 scrollout: $.Callbacks(),
//                 scroll: $.Callbacks()
//             };
//             this.listen()
//         };
//         ScrollWatch.prototype = {
//             _prepareContainer: function () {
//                 if (this.$watchOn[0] === window) {
//                     return
//                 }
//                 var positioning = this.$watchOn.css("position");
//                 var isPositioned = _.contains(POSITIONED, positioning);
//                 if (!isPositioned) {
//                     this.$watchOn.css("position", "relative")
//                 }
//             },
//             listen: function () {
//                 this.$watchOn.on("scroll", this.onScroll);
//                 $window.on(WINDOW_EVENTS, this.onScroll)
//             },
//             destroy: function () {
//                 this.$watchOn.off("scroll", this.onScroll);
//                 $window.off(WINDOW_EVENTS, this.onScroll);
//                 this.$el.data("scrollWatch", null)
//             },
//             on: function (event, options, callback, thisArg) {
//                 if (_.isFunction(options)) {
//                     thisArg = callback;
//                     callback = options;
//                     options = {}
//                 }
//                 options = _.extend({}, this.options, options);
//                 callback = _.bind(callback, thisArg || this.$el);
//                 if (options.delay) {
//                     callback = this._createDelayedCallback(event, callback, options)
//                 }
//                 this.callbacks[event].add(callback);
//                 this.$watchOn.scroll();
//                 return this
//             },
//             _createDelayedCallback: function (event, cb, options) {
//                 return function () {
//                     var args = arguments;
//                     _.delay(function () {
//                         cb.apply(this, args)
//                     }, options.delay)
//                 }
//             },
//             handleScroll: function () {
//                 var lastVisibility = this.visibility;
//                 var visibility = this.isInViewport();
//                 var currentOffset = this.$watchOn.scrollTop();
//                 if (!this.lastOffset) {
//                     this.direction = false
//                 } else {
//                     this.direction = currentOffset > this.lastOffset ? "down" : "up"
//                 }
//                 this.lastOffset = currentOffset;
//                 this.visibility = visibility;
//                 if (!this.inViewport && visibility === 1) {
//                     this.inViewport = true;
//                     this.trigger("scrollin")
//                 } else if (this.inViewport && visibility === 0) {
//                     this.inViewport = false;
//                     if (this.dfd) {
//                         this.dfd.done(_.bind(this.trigger, this, "scrollout"))
//                     } else {
//                         this.trigger("scrollout")
//                     }
//                 }
//                 if (visibility !== lastVisibility) {
//                     this.trigger("scroll")
//                 }
//                 return this
//             },
//             onScroll: function (event) {
//                 if (this.running) {
//                     return
//                 }
//                 this.running = true;
//                 this.originalEvent = event;
//                 this.handleScroll();
//                 this.running = false
//             },
//             trigger: function (event) {
//                 if (event !== "scroll" && event === this.lastTriggered) {
//                     return false
//                 }
//                 this.lastTriggered = event;
//                 this.callbacks[event].fire({
//                     direction: this.direction,
//                     visibility: this.visibility,
//                     originalEvent: event
//                 })
//             },
//             _getOffsetTop: function () {
//                 if (this.$watchOn[0] === window) {
//                     return this.$el.offset().top
//                 }
//                 var el = this.el;
//                 var offset = 0;
//                 do {
//                     offset += el.offsetTop;
//                     el = el.offsetParent
//                 } while (el && el !== this.$watchOn[0]);
//                 return offset
//             },
//             isInViewport: function () {
//                 var scrollTop = this.$watchOn.scrollTop();
//                 var containerHeight = this.$watchOn.height();
//                 var scrollBottom = scrollTop + containerHeight;
//                 var elTop = this._getOffsetTop();
//                 var elHeight = this.$el.outerHeight();
//                 var elBottom = elTop + elHeight;
//                 var elementIsBiggerThanContainer = elHeight >= containerHeight;
//                 if (elementIsBiggerThanContainer && scrollTop >= elTop && scrollBottom <= elBottom) {
//                     return 1
//                 }
//                 if (!elementIsBiggerThanContainer && elTop > scrollTop && elBottom < scrollBottom) {
//                     return 1
//                 }
//                 if (elTop > scrollTop && elTop < scrollBottom && elBottom > scrollBottom) {
//                     return (scrollBottom - elTop) / elHeight
//                 }
//                 if (elBottom > scrollTop && elBottom < scrollBottom) {
//                     return (scrollTop - elBottom) / elHeight
//                 }
//                 return 0
//             }
//         };
//         window.ScrollWatch = ScrollWatch;
//         $.fn.scrollWatch = function (options) {
//             var $this = $(this),
//                 data = $this.data("scrollWatch");
//             if (!data) {
//                 $this.data("scrollWatch", data = new window.ScrollWatch(this, options))
//             }
//             return data
//         }
//     })(jQuery, window);
//     (function ($, window, undefined) {
//         var pluginName = "autoscale";
//         var defaults = {
//             mode: "fit",
//             responsive: true
//         };
//         var $window = $(window);

//         function Autoscale(element, options) {
//             this.el = element;
//             this.$el = $(element);
//             var dataOptions = {
//                 mode: this.$el.data("autoscale"),
//                 contentRatio: this.$el.data("autoscale-content-ratio")
//             };
//             this.options = $.extend({}, defaults, options, dataOptions);
//             if (this.options.parent) {
//                 this.$parent = $(this.options.parent)
//             } else {
//                 this.$parent = this.$el.parent()
//             }
//             this._defaults = defaults;
//             this._name = pluginName;
//             this.initialize()
//         }
//         Autoscale.prototype = {
//             initialize: function () {
//                 this.$el.addClass("autoscale autoscale-background-cover");
//                 this.$parent.addClass("autoscale-parent");
//                 this.refresh();
//                 this.refresh = $.proxy(this.refresh, this);
//                 if (this.options.responsive) {
//                     this.raf = false;
//                     $window.on("resize", $.proxy(this.onResize, this));
//                     $window.on("resize", _.debounce(this.refresh, 80))
//                 }
//             },
//             _getContentRatio: function () {
//                 if (this.options.contentRatio) {
//                     return this.options.contentRatio
//                 }
//                 if (this.el.tagName === "VIDEO") {
//                     return this.el.videoWidth / this.el.videoHeight
//                 }
//                 if (this.el.tagName === "IMG") {
//                     return this.el.width / this.el.height
//                 }
//                 return this.$el.width() / this.$el.height()
//             },
//             _calculateCoverSize: function (containerWidth, containerHeight, contentRatio) {
//                 var containerRatio = containerWidth / containerHeight;
//                 var height = 0;
//                 var width = 0;
//                 if (contentRatio <= containerRatio) {
//                     width = containerWidth;
//                     height = width / contentRatio
//                 } else {
//                     height = containerHeight;
//                     width = height * contentRatio
//                 }
//                 return {
//                     width: width,
//                     height: height
//                 }
//             },
//             _calculateFitSize: function (containerWidth, containerHeight, contentRatio) {
//                 var containerRatio = containerWidth / containerHeight;
//                 var height = 0;
//                 var width = 0;
//                 if (contentRatio >= containerRatio) {
//                     width = containerWidth;
//                     height = width / contentRatio
//                 } else {
//                     height = containerHeight;
//                     width = height * contentRatio
//                 }
//                 return {
//                     width: width,
//                     height: height
//                 }
//             },
//             refresh: function () {
//                 if (!this.$el.is(":visible")) {
//                     return
//                 }
//                 var parentWidth = this.$parent.width();
//                 var parentHeight = this.$parent.height();
//                 var size = {
//                     width: 0,
//                     height: 0
//                 };
//                 if (this.options.mode === "cover") {
//                     size = this._calculateCoverSize(parentWidth, parentHeight, this._getContentRatio())
//                 } else if (this.options.mode === "fit") {
//                     size = this._calculateFitSize(parentWidth, parentHeight, this._getContentRatio())
//                 }
//                 this.$el.css({
//                     width: size.width + "px",
//                     height: size.height + "px",
//                     marginLeft: -size.width / 2 + "px",
//                     marginTop: -size.height / 2 + "px"
//                 });
//                 this.raf = false
//             },
//             onResize: function () {
//                 if (!this.raf) {
//                     window.requestAnimationFrame(this.refresh)
//                 }
//                 this.raf = true
//             }
//         };
//         $.fn[pluginName] = function autoscale(options) {
//             return this.each(function () {
//                 if (!$.data(this, "plugin_" + pluginName)) {
//                     $.data(this, "plugin_" + pluginName, new Autoscale(this, options))
//                 } else {
//                     $.data(this, "plugin_" + pluginName).onResize()
//                 }
//             })
//         };
//         var run = function () {
//             $("[data-autoscale]").autoscale()
//         };
//         $(run);
//         $window.on("load", run)
//     })(jQuery, window);
//     (function ($, window, document, undefined) {
//         var pluginName = "viewport-height";
//         var defaults = {
//             property: "height",
//             height: 1
//         };
//         var $window = $(window);

//         function ViewportHeight(el, options) {
//             this.$el = $(el);
//             this.el = this.$el[0];
//             this.options = $.extend({}, defaults, options, this._getDataOptions());
//             this._defaults = defaults;
//             this._name = pluginName;
//             this.initialize()
//         }
//         ViewportHeight.prototype = {
//             initialize: function () {
//                 this.refresh = $.proxy(this.refresh, this);
//                 this.onRefresh = $.proxy(this.onResize, this);
//                 this.refresh();
//                 $window.on("resize load orientation", this.onRefresh);
//                 $(this.onRefresh)
//             },
//             _getDataOptions: function () {
//                 var dataOptions = {};
//                 var $el = this.$el;
//                 $.each(defaults, function (key) {
//                     var dataOption = $el.data(pluginName + "-" + key);
//                     if (dataOption) {
//                         dataOptions[key] = dataOption
//                     }
//                 });
//                 return dataOptions
//             },
//             refresh: function () {
//                 this.$el.css(this.options.property, this.getViewportHeight());
//                 this.$el.trigger("css:height");
//                 this.raf = false
//             },
//             getViewportHeight: function () {
//             	var viewPortHeight = document.documentElement.clientHeight || window.screen.availHeight || $window.height();
//             	var viewPortWidth = document.documentElement.clientWidth || window.screen.availWidth || $window.height();
//                 var returnVal = (viewPortHeight > viewPortWidth) ? (viewPortWidth / 0.6) : (viewPortWidth * 0.6);
//                 if (viewPortHeight > returnVal) {
//                     returnVal = viewPortHeight;
//                 }
//                 return returnVal;
//             },
//             onResize: function () {
//                 if (this.raf) {
//                     window.requestAnimationFrame(this.refresh)
//                 }
//                 this.raf = true
//             }
//         };
//         $.fn.viewportHeight = function (options) {
//             return this.each(function () {
//                 if (!$.data(this, "plugin_" + pluginName)) {
//                     $.data(this, "plugin_" + pluginName, new ViewportHeight(this, options))
//                 }
//             })
//         };
//         $(function () {
//             $("[data-viewport-height]").viewportHeight()
//         })
//     })(jQuery, window, document);
//     (function ($, window, document, undefined) {
//         "use strict";
//         var pluginName = "sticky";
//         var $window = $(window);
//         var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//         window.requestAnimationFrame = requestAnimationFrame;

//         function Sticky(element, options) {
//             this.el = element;
//             this.$el = $(element);
//             options = options || {};
//             var container = options.container || this.$el.data("sticky-element-container");
//             this.$container = container ? this.$el.closest(container) : this.$el.parent();
//             this.$stateElement = options.stateElement;
//             this.options = $.extend({}, options);
//             this._name = pluginName;
//             this.initialize()
//         }
//         Sticky.prototype = {
//             initialize: function () {
//                 if (this.$stateElement) {
//                     this.$stateElement.data("sticky-enabled", true)
//                 }
//                 this.$el.addClass("sticky-element sticky-top");
//                 this.onResize = $.proxy(this.onResize, this);
//                 this.listen()
//             },
//             listen: function () {
//                 $window.on("resize", this.onResize);
//                 this.$container.scrollWatch({
//                     watchOn: this.options.watchOn
//                 }).on("scroll", this.onScroll, this)
//             },
//             destroy: function () {
//                 $window.off("resize", this.onResize);
//                 this.$container.scrollWatch().destroy();
//                 this.$el.removeClass("sticky-element sticky-top sticky-centered sticky-bottom")
//             },
//             refresh: function () {
//                 this.$container.scrollWatch().handleScroll();
//                 this.raf = false
//             },
//             onScroll: function (e) {
//                 if (this.$stateElement && this.$stateElement.data("sticky-enabled") === false) {
//                     this.unstick();
//                     return
//                 }
//                 e = e || {};
//                 var visibility = Math.abs(e.visibility);
//                 var isTop = e.visibility > 0;
//                 var isBottom = !isTop;
//                 if (visibility === 1) {
//                     this.stick()
//                 } else if (visibility === 0) {
//                     var stickTo = e.direction === "up" ? "top" : "bottom";
//                     this.unstick(stickTo)
//                 } else if (isTop) {
//                     this.unstick("top")
//                 } else if (isBottom) {
//                     var elPercent = this.$el.outerHeight() / this.$container.height();
//                     if (e.direction === "down" && visibility <= elPercent) {
//                         this.unstick("bottom")
//                     } else if (e.direction === "up" && visibility >= elPercent) {
//                         this.stick()
//                     }
//                 }
//             },
//             unstick: function (position) {
//                 this.$el.removeClass("sticky-bottom sticky-centered sticky-top");
//                 if (position) {
//                     this.$el.addClass("sticky-" + position)
//                 }
//             },
//             stick: function () {
//                 this.$el.removeClass("sticky-top sticky-bottom").addClass("sticky-centered")
//             },
//             onResize: function () {
//                 if (!this.raf) {
//                     window.requestAnimationFrame($.proxy(this.refresh, this))
//                 }
//                 this.raf = true
//             }
//         };
//         $.fn[pluginName] = function sticky(options) {
//             return this.each(function () {
//                 if (!$.data(this, "plugin_" + pluginName)) {
//                     $.data(this, "plugin_" + pluginName, new Sticky(this, options))
//                 }
//                 $.data(this, "plugin_" + pluginName).onResize()
//             })
//         };
//         $window.on("load", function () {
//             $("[data-sticky-element]").sticky()
//         })
//     })(jQuery, window, document);
//     (function () {
//         var b = void 0,
//             f = !0,
//             h = null,
//             l = !1;

//         function m() {
//             return function () {}
//         }

//         function p(a) {
//             return function () {
//                 return this[a]
//             }
//         }

//         function s(a) {
//             return function () {
//                 return a
//             }
//         }
//         var t;
//         document.createElement("video");
//         document.createElement("audio");
//         document.createElement("track");

//         function u(a, c, d) {
//             if ("string" === typeof a) {
//                 0 === a.indexOf("#") && (a = a.slice(1));
//                 if (u.xa[a]) return u.xa[a];
//                 a = u.w(a)
//             }
//             if (!a || !a.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
//             return a.player || new u.s(a, c, d)
//         }
//         var v = u;
//         window.Td = window.Ud = u;
//         u.Tb = "4.3";
//         u.Fc = "https:" == document.location.protocol ? "https://" : "http://";
//         u.options = {
//             techOrder: ["html5", "flash"],
//             html5: {},
//             flash: {},
//             width: 300,
//             height: 150,
//             defaultVolume: 0,
//             children: {
//                 mediaLoader: {},
//                 posterImage: {},
//                 textTrackDisplay: {},
//                 loadingSpinner: {},
//                 bigPlayButton: {},
//                 controlBar: {}
//             },
//             notSupportedMessage: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
//         };
//         "GENERATED_CDN_VSN" !== u.Tb && (v.options.flash.swf = u.Fc + "vjs.zencdn.net/" + u.Tb + "/video-js.swf");
//         u.xa = {};
//         u.la = u.CoreObject = m();
//         u.la.extend = function (a) {
//             var c, d;
//             a = a || {};
//             c = a.init || a.i || this.prototype.init || this.prototype.i || m();
//             d = function () {
//                 c.apply(this, arguments)
//             };
//             d.prototype = u.k.create(this.prototype);
//             d.prototype.constructor = d;
//             d.extend = u.la.extend;
//             d.create = u.la.create;
//             for (var e in a) a.hasOwnProperty(e) && (d.prototype[e] = a[e]);
//             return d
//         };
//         u.la.create = function () {
//             var a = u.k.create(this.prototype);
//             this.apply(a, arguments);
//             return a
//         };
//         u.d = function (a, c, d) {
//             var e = u.getData(a);
//             e.z || (e.z = {});
//             e.z[c] || (e.z[c] = []);
//             d.t || (d.t = u.t++);
//             e.z[c].push(d);
//             e.W || (e.disabled = l, e.W = function (c) {
//                 if (!e.disabled) {
//                     c = u.kc(c);
//                     var d = e.z[c.type];
//                     if (d)
//                         for (var d = d.slice(0), k = 0, q = d.length; k < q && !c.pc(); k++) d[k].call(a, c)
//                 }
//             });
//             1 == e.z[c].length && (document.addEventListener ? a.addEventListener(c, e.W, l) : document.attachEvent && a.attachEvent("on" + c, e.W))
//         };
//         u.o = function (a, c, d) {
//             if (u.oc(a)) {
//                 var e = u.getData(a);
//                 if (e.z)
//                     if (c) {
//                         var g = e.z[c];
//                         if (g) {
//                             if (d) {
//                                 if (d.t)
//                                     for (e = 0; e < g.length; e++) g[e].t === d.t && g.splice(e--, 1)
//                             } else e.z[c] = [];
//                             u.gc(a, c)
//                         }
//                     } else
//                         for (g in e.z) c = g, e.z[c] = [], u.gc(a, c)
//             }
//         };
//         u.gc = function (a, c) {
//             var d = u.getData(a);
//             0 === d.z[c].length && (delete d.z[c], document.removeEventListener ? a.removeEventListener(c, d.W, l) : document.detachEvent && a.detachEvent("on" + c, d.W));
//             u.Bb(d.z) && (delete d.z, delete d.W, delete d.disabled);
//             u.Bb(d) && u.vc(a)
//         };
//         u.kc = function (a) {
//             function c() {
//                 return f
//             }

//             function d() {
//                 return l
//             }
//             if (!a || !a.Cb) {
//                 var e = a || window.event;
//                 a = {};
//                 for (var g in e) "layerX" !== g && "layerY" !== g && (a[g] = e[g]);
//                 a.target || (a.target = a.srcElement || document);
//                 a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
//                 a.preventDefault = function () {
//                     e.preventDefault && e.preventDefault();
//                     a.returnValue = l;
//                     a.Ab = c
//                 };
//                 a.Ab = d;
//                 a.stopPropagation = function () {
//                     e.stopPropagation && e.stopPropagation();
//                     a.cancelBubble = f;
//                     a.Cb = c
//                 };
//                 a.Cb = d;
//                 a.stopImmediatePropagation = function () {
//                     e.stopImmediatePropagation && e.stopImmediatePropagation();
//                     a.pc = c;
//                     a.stopPropagation()
//                 };
//                 a.pc = d;
//                 if (a.clientX != h) {
//                     g = document.documentElement;
//                     var j = document.body;
//                     a.pageX = a.clientX + (g && g.scrollLeft || j && j.scrollLeft || 0) - (g && g.clientLeft || j && j.clientLeft || 0);
//                     a.pageY = a.clientY + (g && g.scrollTop || j && j.scrollTop || 0) - (g && g.clientTop || j && j.clientTop || 0)
//                 }
//                 a.which = a.charCode || a.keyCode;
//                 a.button != h && (a.button = a.button & 1 ? 0 : a.button & 4 ? 1 : a.button & 2 ? 2 : 0)
//             }
//             return a
//         };
//         u.j = function (a, c) {
//             var d = u.oc(a) ? u.getData(a) : {}, e = a.parentNode || a.ownerDocument;
//             "string" === typeof c && (c = {
//                 type: c,
//                 target: a
//             });
//             c = u.kc(c);
//             d.W && d.W.call(a, c);
//             if (e && !c.Cb() && c.bubbles !== l) u.j(e, c);
//             else if (!e && !c.Ab() && (d = u.getData(c.target), c.target[c.type])) {
//                 d.disabled = f;
//                 if ("function" === typeof c.target[c.type]) c.target[c.type]();
//                 d.disabled = l
//             }
//             return !c.Ab()
//         };
//         u.U = function (a, c, d) {
//             function e() {
//                 u.o(a, c, e);
//                 d.apply(this, arguments)
//             }
//             e.t = d.t = d.t || u.t++;
//             u.d(a, c, e)
//         };
//         var w = Object.prototype.hasOwnProperty;
//         u.e = function (a, c) {
//             var d, e;
//             d = document.createElement(a || "div");
//             for (e in c) w.call(c, e) && (-1 !== e.indexOf("aria-") || "role" == e ? d.setAttribute(e, c[e]) : d[e] = c[e]);
//             return d
//         };
//         u.$ = function (a) {
//             return a.charAt(0).toUpperCase() + a.slice(1)
//         };
//         u.k = {};
//         u.k.create = Object.create || function (a) {
//             function c() {}
//             c.prototype = a;
//             return new c
//         };
//         u.k.ua = function (a, c, d) {
//             for (var e in a) w.call(a, e) && c.call(d || this, e, a[e])
//         };
//         u.k.B = function (a, c) {
//             if (!c) return a;
//             for (var d in c) w.call(c, d) && (a[d] = c[d]);
//             return a
//         };
//         u.k.ic = function (a, c) {
//             var d, e, g;
//             a = u.k.copy(a);
//             for (d in c) w.call(c, d) && (e = a[d], g = c[d], a[d] = u.k.qc(e) && u.k.qc(g) ? u.k.ic(e, g) : c[d]);
//             return a
//         };
//         u.k.copy = function (a) {
//             return u.k.B({}, a)
//         };
//         u.k.qc = function (a) {
//             return !!a && "object" === typeof a && "[object Object]" === a.toString() && a.constructor === Object
//         };
//         u.bind = function (a, c, d) {
//             function e() {
//                 return c.apply(a, arguments)
//             }
//             c.t || (c.t = u.t++);
//             e.t = d ? d + "_" + c.t : c.t;
//             return e
//         };
//         u.ra = {};
//         u.t = 1;
//         u.expando = "vdata" + (new Date).getTime();
//         u.getData = function (a) {
//             var c = a[u.expando];
//             c || (c = a[u.expando] = u.t++, u.ra[c] = {});
//             return u.ra[c]
//         };
//         u.oc = function (a) {
//             a = a[u.expando];
//             return !(!a || u.Bb(u.ra[a]))
//         };
//         u.vc = function (a) {
//             var c = a[u.expando];
//             if (c) {
//                 delete u.ra[c];
//                 try {
//                     delete a[u.expando]
//                 } catch (d) {
//                     a.removeAttribute ? a.removeAttribute(u.expando) : a[u.expando] = h
//                 }
//             }
//         };
//         u.Bb = function (a) {
//             for (var c in a)
//                 if (a[c] !== h) return l;
//             return f
//         };
//         u.n = function (a, c) {
//             -1 == (" " + a.className + " ").indexOf(" " + c + " ") && (a.className = "" === a.className ? c : a.className + " " + c)
//         };
//         u.u = function (a, c) {
//             var d, e;
//             if (-1 != a.className.indexOf(c)) {
//                 d = a.className.split(" ");
//                 for (e = d.length - 1; 0 <= e; e--) d[e] === c && d.splice(e, 1);
//                 a.className = d.join(" ")
//             }
//         };
//         u.na = u.e("video");
//         u.F = navigator.userAgent;
//         u.Mc = /iPhone/i.test(u.F);
//         u.Lc = /iPad/i.test(u.F);
//         u.Nc = /iPod/i.test(u.F);
//         u.Kc = u.Mc || u.Lc || u.Nc;
//         var aa = u,
//             x;
//         var y = u.F.match(/OS (\d+)_/i);
//         x = y && y[1] ? y[1] : b;
//         aa.Fd = x;
//         u.Ic = /Android/i.test(u.F);
//         var ba = u,
//             z;
//         var A = u.F.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
//             B, C;
//         A ? (B = A[1] && parseFloat(A[1]), C = A[2] && parseFloat(A[2]), z = B && C ? parseFloat(A[1] + "." + A[2]) : B ? B : h) : z = h;
//         ba.Gc = z;
//         u.Oc = u.Ic && /webkit/i.test(u.F) && 2.3 > u.Gc;
//         u.Jc = /Firefox/i.test(u.F);
//         u.Gd = /Chrome/i.test(u.F);
//         u.ac = !! ("ontouchstart" in window || window.Hc && document instanceof window.Hc);
//         u.xb = function (a) {
//             var c, d, e, g;
//             c = {};
//             if (a && a.attributes && 0 < a.attributes.length) {
//                 d = a.attributes;
//                 for (var j = d.length - 1; 0 <= j; j--) {
//                     e = d[j].name;
//                     g = d[j].value;
//                     if ("boolean" === typeof a[e] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + e + ",")) g = g !== h ? f : l;
//                     c[e] = g
//                 }
//             }
//             return c
//         };
//         u.Kd = function (a, c) {
//             var d = "";
//             document.defaultView && document.defaultView.getComputedStyle ? d = document.defaultView.getComputedStyle(a, "").getPropertyValue(c) : a.currentStyle && (d = a["client" + c.substr(0, 1).toUpperCase() + c.substr(1)] + "px");
//             return d
//         };
//         u.zb = function (a, c) {
//             c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a)
//         };
//         u.Pb = {};
//         u.w = function (a) {
//             0 === a.indexOf("#") && (a = a.slice(1));
//             return document.getElementById(a)
//         };
//         u.La = function (a, c) {
//             c = c || a;
//             var d = Math.floor(a % 60),
//                 e = Math.floor(a / 60 % 60),
//                 g = Math.floor(a / 3600),
//                 j = Math.floor(c / 60 % 60),
//                 k = Math.floor(c / 3600);
//             if (isNaN(a) || Infinity === a) g = e = d = "-";
//             g = 0 < g || 0 < k ? g + ":" : "";
//             return g + (((g || 10 <= j) && 10 > e ? "0" + e : e) + ":") + (10 > d ? "0" + d : d)
//         };
//         u.Tc = function () {
//             document.body.focus();
//             document.onselectstart = s(l)
//         };
//         u.Bd = function () {
//             document.onselectstart = s(f)
//         };
//         u.trim = function (a) {
//             return (a + "").replace(/^\s+|\s+$/g, "")
//         };
//         u.round = function (a, c) {
//             c || (c = 0);
//             return Math.round(a * Math.pow(10, c)) / Math.pow(10, c)
//         };
//         u.tb = function (a, c) {
//             return {
//                 length: 1,
//                 start: function () {
//                     return a
//                 },
//                 end: function () {
//                     return c
//                 }
//             }
//         };
//         u.get = function (a, c, d) {
//             var e, g;
//             "undefined" === typeof XMLHttpRequest && (window.XMLHttpRequest = function () {
//                 try {
//                     return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
//                 } catch (a) {}
//                 try {
//                     return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
//                 } catch (c) {}
//                 try {
//                     return new window.ActiveXObject("Msxml2.XMLHTTP")
//                 } catch (d) {}
//                 throw Error("This browser does not support XMLHttpRequest.")
//             });
//             g = new XMLHttpRequest;
//             try {
//                 g.open("GET", a)
//             } catch (j) {
//                 d(j)
//             }
//             e = 0 === a.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === a.indexOf("http");
//             g.onreadystatechange = function () {
//                 4 === g.readyState && (200 === g.status || e && 0 === g.status ? c(g.responseText) : d && d())
//             };
//             try {
//                 g.send()
//             } catch (k) {
//                 d && d(k)
//             }
//         };
//         u.td = function (a) {
//             try {
//                 var c = window.localStorage || l;
//                 c && (c.volume = a)
//             } catch (d) {
//                 22 == d.code || 1014 == d.code ? u.log("LocalStorage Full (VideoJS)", d) : 18 == d.code ? u.log("LocalStorage not allowed (VideoJS)", d) : u.log("LocalStorage Error (VideoJS)", d)
//             }
//         };
//         u.mc = function (a) {
//             a.match(/^https?:\/\//) || (a = u.e("div", {
//                 innerHTML: '<a href="' + a + '">x</a>'
//             }).firstChild.href);
//             return a
//         };
//         u.log = function () {
//             u.log.history = u.log.history || [];
//             u.log.history.push(arguments);
//             window.console && window.console.log(Array.prototype.slice.call(arguments))
//         };
//         u.ad = function (a) {
//             var c, d;
//             a.getBoundingClientRect && a.parentNode && (c = a.getBoundingClientRect());
//             if (!c) return {
//                 left: 0,
//                 top: 0
//             };
//             a = document.documentElement;
//             d = document.body;
//             return {
//                 left: c.left + (window.pageXOffset || d.scrollLeft) - (a.clientLeft || d.clientLeft || 0),
//                 top: c.top + (window.pageYOffset || d.scrollTop) - (a.clientTop || d.clientTop || 0)
//             }
//         };
//         u.c = u.la.extend({
//             i: function (a, c, d) {
//                 this.b = a;
//                 this.g = u.k.copy(this.g);
//                 c = this.options(c);
//                 this.Q = c.id || (c.el && c.el.id ? c.el.id : a.id() + "_component_" + u.t++);
//                 this.gd = c.name || h;
//                 this.a = c.el || this.e();
//                 this.G = [];
//                 this.qb = {};
//                 this.V = {};
//                 if ((a = this.g) && a.children) {
//                     var e = this;
//                     u.k.ua(a.children, function (a, c) {
//                         c !== l && !c.loadEvent && (e[a] = e.Z(a, c))
//                     })
//                 }
//                 this.L(d)
//             }
//         });
//         t = u.c.prototype;
//         t.D = function () {
//             this.j("dispose");
//             if (this.G)
//                 for (var a = this.G.length - 1; 0 <= a; a--) this.G[a].D && this.G[a].D();
//             this.V = this.qb = this.G = h;
//             this.o();
//             this.a.parentNode && this.a.parentNode.removeChild(this.a);
//             u.vc(this.a);
//             this.a = h
//         };
//         t.b = f;
//         t.K = p("b");
//         t.options = function (a) {
//             return a === b ? this.g : this.g = u.k.ic(this.g, a)
//         };
//         t.e = function (a, c) {
//             return u.e(a, c)
//         };
//         t.w = p("a");
//         t.id = p("Q");
//         t.name = p("gd");
//         t.children = p("G");
//         t.Z = function (a, c) {
//             var d, e;
//             "string" === typeof a ? (e = a, c = c || {}, d = c.componentClass || u.$(e), c.name = e, d = new window.videojs[d](this.b || this, c)) : d = a;
//             this.G.push(d);
//             "function" === typeof d.id && (this.qb[d.id()] = d);
//             (e = e || d.name && d.name()) && (this.V[e] = d);
//             "function" === typeof d.el && d.el() && (this.sa || this.a).appendChild(d.el());
//             return d
//         };
//         t.removeChild = function (a) {
//             "string" === typeof a && (a = this.V[a]);
//             if (a && this.G) {
//                 for (var c = l, d = this.G.length - 1; 0 <= d; d--)
//                     if (this.G[d] === a) {
//                         c = f;
//                         this.G.splice(d, 1);
//                         break
//                     }
//                 c && (this.qb[a.id] = h, this.V[a.name] = h, (c = a.w()) && c.parentNode === (this.sa || this.a) && (this.sa || this.a).removeChild(a.w()))
//             }
//         };
//         t.T = s("");
//         t.d = function (a, c) {
//             u.d(this.a, a, u.bind(this, c));
//             return this
//         };
//         t.o = function (a, c) {
//             u.o(this.a, a, c);
//             return this
//         };
//         t.U = function (a, c) {
//             u.U(this.a, a, u.bind(this, c));
//             return this
//         };
//         t.j = function (a, c) {
//             u.j(this.a, a, c);
//             return this
//         };
//         t.L = function (a) {
//             a && (this.aa ? a.call(this) : (this.Sa === b && (this.Sa = []), this.Sa.push(a)));
//             return this
//         };
//         t.Ua = function () {
//             this.aa = f;
//             var a = this.Sa;
//             if (a && 0 < a.length) {
//                 for (var c = 0, d = a.length; c < d; c++) a[c].call(this);
//                 this.Sa = [];
//                 this.j("ready")
//             }
//         };
//         t.n = function (a) {
//             u.n(this.a, a);
//             return this
//         };
//         t.u = function (a) {
//             u.u(this.a, a);
//             return this
//         };
//         t.show = function () {
//             this.a.style.display = "block";
//             return this
//         };
//         t.C = function () {
//             this.a.style.display = "none";
//             return this
//         };

//         function D(a) {
//             a.u("vjs-lock-showing")
//         }
//         t.disable = function () {
//             this.C();
//             this.show = m()
//         };
//         t.width = function (a, c) {
//             return E(this, "width", a, c)
//         };
//         t.height = function (a, c) {
//             return E(this, "height", a, c)
//         };
//         t.Xc = function (a, c) {
//             return this.width(a, f).height(c)
//         };

//         function E(a, c, d, e) {
//             if (d !== b) return a.a.style[c] = -1 !== ("" + d).indexOf("%") || -1 !== ("" + d).indexOf("px") ? d : "auto" === d ? "" : d + "px", e || a.j("resize"), a;
//             if (!a.a) return 0;
//             d = a.a.style[c];
//             e = d.indexOf("px");
//             return -1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(a.a["offset" + u.$(c)], 10)
//         }
//         u.q = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c);
//                 var d = l;
//                 this.d("touchstart", function (a) {
//                     a.preventDefault();
//                     d = f
//                 });
//                 this.d("touchmove", function () {
//                     d = l
//                 });
//                 var e = this;
//                 this.d("touchend", function (a) {
//                     d && e.p(a);
//                     a.preventDefault()
//                 });
//                 this.d("click", this.p);
//                 this.d("focus", this.Oa);
//                 this.d("blur", this.Na)
//             }
//         });
//         t = u.q.prototype;
//         t.e = function (a, c) {
//             c = u.k.B({
//                 className: this.T(),
//                 innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.qa || "Need Text") + "</span></div>",
//                 qd: "button",
//                 "aria-live": "polite",
//                 tabIndex: 0
//             }, c);
//             return u.c.prototype.e.call(this, a, c)
//         };
//         t.T = function () {
//             return "vjs-control " + u.c.prototype.T.call(this)
//         };
//         t.p = m();
//         t.Oa = function () {
//             u.d(document, "keyup", u.bind(this, this.ba))
//         };
//         t.ba = function (a) {
//             if (32 == a.which || 13 == a.which) a.preventDefault(), this.p()
//         };
//         t.Na = function () {
//             u.o(document, "keyup", u.bind(this, this.ba))
//         };
//         u.O = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c);
//                 this.Sc = this.V[this.g.barName];
//                 this.handle = this.V[this.g.handleName];
//                 a.d(this.tc, u.bind(this, this.update));
//                 this.d("mousedown", this.Pa);
//                 this.d("touchstart", this.Pa);
//                 this.d("focus", this.Oa);
//                 this.d("blur", this.Na);
//                 this.d("click", this.p);
//                 this.b.d("controlsvisible", u.bind(this, this.update));
//                 a.L(u.bind(this, this.update));
//                 this.P = {}
//             }
//         });
//         t = u.O.prototype;
//         t.e = function (a, c) {
//             c = c || {};
//             c.className += " vjs-slider";
//             c = u.k.B({
//                 qd: "slider",
//                 "aria-valuenow": 0,
//                 "aria-valuemin": 0,
//                 "aria-valuemax": 100,
//                 tabIndex: 0
//             }, c);
//             return u.c.prototype.e.call(this, a, c)
//         };
//         t.Pa = function (a) {
//             a.preventDefault();
//             u.Tc();
//             this.P.move = u.bind(this, this.Hb);
//             this.P.end = u.bind(this, this.Ib);
//             u.d(document, "mousemove", this.P.move);
//             u.d(document, "mouseup", this.P.end);
//             u.d(document, "touchmove", this.P.move);
//             u.d(document, "touchend", this.P.end);
//             this.Hb(a)
//         };
//         t.Ib = function () {
//             u.Bd();
//             u.o(document, "mousemove", this.P.move, l);
//             u.o(document, "mouseup", this.P.end, l);
//             u.o(document, "touchmove", this.P.move, l);
//             u.o(document, "touchend", this.P.end, l);
//             this.update()
//         };
//         t.update = function () {
//             if (this.a) {
//                 var a, c = this.yb(),
//                     d = this.handle,
//                     e = this.Sc;
//                 isNaN(c) && (c = 0);
//                 a = c;
//                 if (d) {
//                     a = this.a.offsetWidth;
//                     var g = d.w().offsetWidth;
//                     a = g ? g / a : 0;
//                     c *= 1 - a;
//                     a = c + a / 2;
//                     d.w().style.left = u.round(100 * c, 2) + "%"
//                 }
//                 e.w().style.width = u.round(100 * a, 2) + "%"
//             }
//         };

//         function F(a, c) {
//             var d, e, g, j;
//             d = a.a;
//             e = u.ad(d);
//             j = g = d.offsetWidth;
//             d = a.handle;
//             if (a.g.Cd) return j = e.top, e = c.changedTouches ? c.changedTouches[0].pageY : c.pageY, d && (d = d.w().offsetHeight, j += d / 2, g -= d), Math.max(0, Math.min(1, (j - e + g) / g));
//             g = e.left;
//             e = c.changedTouches ? c.changedTouches[0].pageX : c.pageX;
//             d && (d = d.w().offsetWidth, g += d / 2, j -= d);
//             return Math.max(0, Math.min(1, (e - g) / j))
//         }
//         t.Oa = function () {
//             u.d(document, "keyup", u.bind(this, this.ba))
//         };
//         t.ba = function (a) {
//             37 == a.which ? (a.preventDefault(), this.yc()) : 39 == a.which && (a.preventDefault(), this.zc())
//         };
//         t.Na = function () {
//             u.o(document, "keyup", u.bind(this, this.ba))
//         };
//         t.p = function (a) {
//             a.stopImmediatePropagation();
//             a.preventDefault()
//         };
//         u.ea = u.c.extend();
//         u.ea.prototype.defaultValue = 0;
//         u.ea.prototype.e = function (a, c) {
//             c = c || {};
//             c.className += " vjs-slider-handle";
//             c = u.k.B({
//                 innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
//             }, c);
//             return u.c.prototype.e.call(this, "div", c)
//         };
//         u.ma = u.c.extend();

//         function ca(a, c) {
//             a.Z(c);
//             c.d("click", u.bind(a, function () {
//                 D(this)
//             }))
//         }
//         u.ma.prototype.e = function () {
//             var a = this.options().Vc || "ul";
//             this.sa = u.e(a, {
//                 className: "vjs-menu-content"
//             });
//             a = u.c.prototype.e.call(this, "div", {
//                 append: this.sa,
//                 className: "vjs-menu"
//             });
//             a.appendChild(this.sa);
//             u.d(a, "click", function (a) {
//                 a.preventDefault();
//                 a.stopImmediatePropagation()
//             });
//             return a
//         };
//         u.N = u.q.extend({
//             i: function (a, c) {
//                 u.q.call(this, a, c);
//                 this.selected(c.selected)
//             }
//         });
//         u.N.prototype.e = function (a, c) {
//             return u.q.prototype.e.call(this, "li", u.k.B({
//                 className: "vjs-menu-item",
//                 innerHTML: this.g.label
//             }, c))
//         };
//         u.N.prototype.p = function () {
//             this.selected(f)
//         };
//         u.N.prototype.selected = function (a) {
//             a ? (this.n("vjs-selected"), this.a.setAttribute("aria-selected", f)) : (this.u("vjs-selected"), this.a.setAttribute("aria-selected", l))
//         };
//         u.R = u.q.extend({
//             i: function (a, c) {
//                 u.q.call(this, a, c);
//                 this.wa = this.Ka();
//                 this.Z(this.wa);
//                 this.I && 0 === this.I.length && this.C();
//                 this.d("keyup", this.ba);
//                 this.a.setAttribute("aria-haspopup", f);
//                 this.a.setAttribute("role", "button")
//             }
//         });
//         t = u.R.prototype;
//         t.pa = l;
//         t.Ka = function () {
//             var a = new u.ma(this.b);
//             this.options().title && a.w().appendChild(u.e("li", {
//                 className: "vjs-menu-title",
//                 innerHTML: u.$(this.A),
//                 zd: -1
//             }));
//             if (this.I = this.createItems())
//                 for (var c = 0; c < this.I.length; c++) ca(a, this.I[c]);
//             return a
//         };
//         t.ta = m();
//         t.T = function () {
//             return this.className + " vjs-menu-button " + u.q.prototype.T.call(this)
//         };
//         t.Oa = m();
//         t.Na = m();
//         t.p = function () {
//             this.U("mouseout", u.bind(this, function () {
//                 D(this.wa);
//                 this.a.blur()
//             }));
//             this.pa ? G(this) : H(this)
//         };
//         t.ba = function (a) {
//             a.preventDefault();
//             32 == a.which || 13 == a.which ? this.pa ? G(this) : H(this) : 27 == a.which && this.pa && G(this)
//         };

//         function H(a) {
//             a.pa = f;
//             a.wa.n("vjs-lock-showing");
//             a.a.setAttribute("aria-pressed", f);
//             a.I && 0 < a.I.length && a.I[0].w().focus()
//         }

//         function G(a) {
//             a.pa = l;
//             D(a.wa);
//             a.a.setAttribute("aria-pressed", l)
//         }
//         u.s = u.c.extend({
//             i: function (a, c, d) {
//                 this.M = a;
//                 c = u.k.B(da(a), c);
//                 this.v = {};
//                 this.uc = c.poster;
//                 this.sb = c.controls;
//                 a.controls = l;
//                 u.c.call(this, this, c, d);
//                 this.controls() ? this.n("vjs-controls-enabled") : this.n("vjs-controls-disabled");
//                 this.U("play", function (a) {
//                     u.j(this.a, {
//                         type: "firstplay",
//                         target: this.a
//                     }) || (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation())
//                 });
//                 this.d("ended", this.hd);
//                 this.d("play", this.Kb);
//                 this.d("firstplay", this.jd);
//                 this.d("pause", this.Jb);
//                 this.d("progress", this.ld);
//                 this.d("durationchange", this.sc);
//                 this.d("error", this.Gb);
//                 this.d("fullscreenchange", this.kd);
//                 u.xa[this.Q] = this;
//                 c.plugins && u.k.ua(c.plugins, function (a, c) {
//                     this[a](c)
//                 }, this);
//                 var e, g, j, k;
//                 e = this.Mb;
//                 a = function () {
//                     e();
//                     clearInterval(g);
//                     g = setInterval(u.bind(this, e), 250)
//                 };
//                 c = function () {
//                     e();
//                     clearInterval(g)
//                 };
//                 this.d("mousedown", a);
//                 this.d("mousemove", e);
//                 this.d("mouseup", c);
//                 this.d("keydown", e);
//                 this.d("keyup", e);
//                 this.d("touchstart", a);
//                 this.d("touchmove", e);
//                 this.d("touchend", c);
//                 this.d("touchcancel", c);
//                 j = setInterval(u.bind(this, function () {
//                     this.ka && (this.ka = l, this.ja(f), clearTimeout(k), k = setTimeout(u.bind(this, function () {
//                         this.ka || this.ja(l)
//                     }), 2e3))
//                 }), 250);
//                 this.d("dispose", function () {
//                     clearInterval(j);
//                     clearTimeout(k)
//                 })
//             }
//         });
//         t = u.s.prototype;
//         t.g = u.options;
//         t.D = function () {
//             this.j("dispose");
//             this.o("dispose");
//             u.xa[this.Q] = h;
//             this.M && this.M.player && (this.M.player = h);
//             this.a && this.a.player && (this.a.player = h);
//             clearInterval(this.Ra);
//             this.za();
//             this.h && this.h.D();
//             u.c.prototype.D.call(this)
//         };

//         function da(a) {
//             var c = {
//                 sources: [],
//                 tracks: []
//             };
//             u.k.B(c, u.xb(a));
//             if (a.hasChildNodes()) {
//                 var d, e, g, j;
//                 a = a.childNodes;
//                 g = 0;
//                 for (j = a.length; g < j; g++) d = a[g], e = d.nodeName.toLowerCase(), "source" === e ? c.sources.push(u.xb(d)) : "track" === e && c.tracks.push(u.xb(d))
//             }
//             return c
//         }
//         t.e = function () {
//             var a = this.a = u.c.prototype.e.call(this, "div"),
//                 c = this.M;
//             c.removeAttribute("width");
//             c.removeAttribute("height");
//             if (c.hasChildNodes()) {
//                 var d, e, g, j, k;
//                 d = c.childNodes;
//                 e = d.length;
//                 for (k = []; e--;) g = d[e], j = g.nodeName.toLowerCase(), "track" === j && k.push(g);
//                 for (d = 0; d < k.length; d++) c.removeChild(k[d])
//             }
//             c.id = c.id || "vjs_video_" + u.t++;
//             a.id = c.id;
//             a.className = c.className;
//             c.id += "_html5_api";
//             c.className = "vjs-tech";
//             c.player = a.player = this;
//             this.n("vjs-paused");
//             this.width(this.g.width, f);
//             this.height(this.g.height, f);
//             c.parentNode && c.parentNode.insertBefore(a, c);
//             u.zb(c, a);
//             return a
//         };

//         function I(a, c, d) {
//             a.h ? (a.aa = l, a.h.D(), a.Eb && (a.Eb = l, clearInterval(a.Ra)), a.Fb && J(a), a.h = l) : "Html5" !== c && a.M && (u.l.jc(a.M), a.M = h);
//             a.ia = c;
//             a.aa = l;
//             var e = u.k.B({
//                 source: d,
//                 parentEl: a.a
//             }, a.g[c.toLowerCase()]);
//             d && (d.src == a.v.src && 0 < a.v.currentTime && (e.startTime = a.v.currentTime), a.v.src = d.src);
//             a.h = new window.videojs[c](a, e);
//             a.h.L(function () {
//                 this.b.Ua();
//                 if (!this.m.progressEvents) {
//                     var a = this.b;
//                     a.Eb = f;
//                     a.Ra = setInterval(u.bind(a, function () {
//                         this.v.lb < this.buffered().end(0) ? this.j("progress") : 1 == this.Ja() && (clearInterval(this.Ra), this.j("progress"))
//                     }), 500);
//                     a.h.U("progress", function () {
//                         this.m.progressEvents = f;
//                         var a = this.b;
//                         a.Eb = l;
//                         clearInterval(a.Ra)
//                     })
//                 }
//                 this.m.timeupdateEvents || (a = this.b, a.Fb = f, a.d("play", a.Cc), a.d("pause", a.za), a.h.U("timeupdate", function () {
//                     this.m.timeupdateEvents = f;
//                     J(this.b)
//                 }))
//             })
//         }

//         function J(a) {
//             a.Fb = l;
//             a.za();
//             a.o("play", a.Cc);
//             a.o("pause", a.za)
//         }
//         t.Cc = function () {
//             this.hc && this.za();
//             this.hc = setInterval(u.bind(this, function () {
//                 this.j("timeupdate")
//             }), 250)
//         };
//         t.za = function () {
//             clearInterval(this.hc)
//         };
//         t.Kb = function () {
//             u.u(this.a, "vjs-paused");
//             u.n(this.a, "vjs-playing")
//         };
//         t.jd = function () {
//             this.g.starttime && this.currentTime(this.g.starttime);
//             this.n("vjs-has-started")
//         };
//         t.Jb = function () {
//             u.u(this.a, "vjs-playing");
//             u.n(this.a, "vjs-paused")
//         };
//         t.ld = function () {
//             1 == this.Ja() && this.j("loadedalldata")
//         };
//         t.hd = function () {
//             this.g.loop && (this.currentTime(0), this.play())
//         };
//         t.sc = function () {
//             this.duration(K(this, "duration"))
//         };
//         t.kd = function () {
//             this.H ? this.n("vjs-fullscreen") : this.u("vjs-fullscreen")
//         };
//         t.Gb = function (a) {
//             u.log("Video Error", a)
//         };

//         function L(a, c, d) {
//             if (a.h && !a.h.aa) a.h.L(function () {
//                 this[c](d)
//             });
//             else try {
//                 a.h[c](d)
//             } catch (e) {
//                 throw u.log(e), e
//             }
//         }

//         function K(a, c) {
//             if (a.h && a.h.aa) try {
//                 return a.h[c]()
//             } catch (d) {
//                 throw a.h[c] === b ? u.log("Video.js: " + c + " method not defined for " + a.ia + " playback technology.", d) : "TypeError" == d.name ? (u.log("Video.js: " + c + " unavailable on " + a.ia + " playback technology element.", d), a.h.aa = l) : u.log(d), d
//             }
//         }
//         t.play = function () {
//             L(this, "play");
//             return this
//         };
//         t.pause = function () {
//             L(this, "pause");
//             return this
//         };
//         t.paused = function () {
//             return K(this, "paused") === l ? l : f
//         };
//         t.currentTime = function (a) {
//             return a !== b ? (this.v.rc = a, L(this, "setCurrentTime", a), this.Fb && this.j("timeupdate"), this) : this.v.currentTime = K(this, "currentTime") || 0
//         };
//         t.duration = function (a) {
//             if (a !== b) return this.v.duration = parseFloat(a), this;
//             this.v.duration === b && this.sc();
//             return this.v.duration
//         };
//         t.buffered = function () {
//             var a = K(this, "buffered"),
//                 c = a.length - 1,
//                 d = this.v.lb = this.v.lb || 0;
//             a && 0 <= c && a.end(c) !== d && (d = a.end(c), this.v.lb = d);
//             return u.tb(0, d)
//         };
//         t.Ja = function () {
//             return this.duration() ? this.buffered().end(0) / this.duration() : 0
//         };
//         t.volume = function (a) {
//             if (a !== b) return a = Math.max(0, Math.min(1, parseFloat(a))), this.v.volume = a, L(this, "setVolume", a), u.td(a), this;
//             a = parseFloat(K(this, "volume"));
//             return isNaN(a) ? 1 : a
//         };
//         t.muted = function (a) {
//             return a !== b ? (L(this, "setMuted", a), this) : K(this, "muted") || l
//         };
//         t.Ta = function () {
//             return K(this, "supportsFullScreen") || l
//         };
//         t.ya = function () {
//             var a = u.Pb.ya;
//             this.H = f;
//             a ? (u.d(document, a.vb, u.bind(this, function (c) {
//                 this.H = document[a.H];
//                 this.H === l && u.o(document, a.vb, arguments.callee);
//                 this.j("fullscreenchange")
//             })), this.a[a.wc]()) : this.h.Ta() ? L(this, "enterFullScreen") : (this.cd = f, this.Yc = document.documentElement.style.overflow, u.d(document, "keydown", u.bind(this, this.lc)), document.documentElement.style.overflow = "hidden", u.n(document.body, "vjs-full-window"), this.j("enterFullWindow"), this.j("fullscreenchange"));
//             return this
//         };
//         t.ob = function () {
//             var a = u.Pb.ya;
//             this.H = l;
//             if (a) document[a.nb]();
//             else this.h.Ta() ? L(this, "exitFullScreen") : (M(this), this.j("fullscreenchange"));
//             return this
//         };
//         t.lc = function (a) {
//             27 === a.keyCode && (this.H === f ? this.ob() : M(this))
//         };

//         function M(a) {
//             a.cd = l;
//             u.o(document, "keydown", a.lc);
//             document.documentElement.style.overflow = a.Yc;
//             u.u(document.body, "vjs-full-window");
//             a.j("exitFullWindow")
//         }
//         t.src = function (a) {
//             if (a instanceof Array) {
//                 var c;
//                 a: {
//                     c = a;
//                     for (var d = 0, e = this.g.techOrder; d < e.length; d++) {
//                         var g = u.$(e[d]),
//                             j = window.videojs[g];
//                         if (j.isSupported())
//                             for (var k = 0, q = c; k < q.length; k++) {
//                                 var n = q[k];
//                                 if (j.canPlaySource(n)) {
//                                     c = {
//                                         source: n,
//                                         h: g
//                                     };
//                                     break a
//                                 }
//                             }
//                     }
//                     c = l
//                 }
//                 c ? (a = c.source, c = c.h, c == this.ia ? this.src(a) : I(this, c, a)) : this.a.appendChild(u.e("p", {
//                     innerHTML: this.options().notSupportedMessage
//                 }))
//             } else a instanceof Object ? window.videojs[this.ia].canPlaySource(a) ? this.src(a.src) : this.src([a]) : (this.v.src = a, this.aa ? (L(this, "src", a), "auto" == this.g.preload && this.load(), this.g.autoplay && this.play()) : this.L(function () {
//                 this.src(a)
//             }));
//             return this
//         };
//         t.load = function () {
//             L(this, "load");
//             return this
//         };
//         t.currentSrc = function () {
//             return K(this, "currentSrc") || this.v.src || ""
//         };
//         t.Qa = function (a) {
//             return a !== b ? (L(this, "setPreload", a), this.g.preload = a, this) : K(this, "preload")
//         };
//         t.autoplay = function (a) {
//             return a !== b ? (L(this, "setAutoplay", a), this.g.autoplay = a, this) : K(this, "autoplay")
//         };
//         t.loop = function (a) {
//             return a !== b ? (L(this, "setLoop", a), this.g.loop = a, this) : K(this, "loop")
//         };
//         t.poster = function (a) {
//             return a !== b ? (this.uc = a, this) : this.uc
//         };
//         t.controls = function (a) {
//             return a !== b ? (a = !! a, this.sb !== a && ((this.sb = a) ? (this.u("vjs-controls-disabled"), this.n("vjs-controls-enabled"), this.j("controlsenabled")) : (this.u("vjs-controls-enabled"), this.n("vjs-controls-disabled"), this.j("controlsdisabled"))), this) : this.sb
//         };
//         u.s.prototype.Sb;
//         t = u.s.prototype;
//         t.Rb = function (a) {
//             return a !== b ? (a = !! a, this.Sb !== a && ((this.Sb = a) ? (this.n("vjs-using-native-controls"), this.j("usingnativecontrols")) : (this.u("vjs-using-native-controls"), this.j("usingcustomcontrols"))), this) : this.Sb
//         };
//         t.error = function () {
//             return K(this, "error")
//         };
//         t.seeking = function () {
//             return K(this, "seeking")
//         };
//         t.ka = f;
//         t.Mb = function () {
//             this.ka = f
//         };
//         t.Qb = f;
//         t.ja = function (a) {
//             return a !== b ? (a = !! a, a !== this.Qb && ((this.Qb = a) ? (this.ka = f, this.u("vjs-user-inactive"), this.n("vjs-user-active"), this.j("useractive")) : (this.ka = l, this.h.U("mousemove", function (a) {
//                 a.stopPropagation();
//                 a.preventDefault()
//             }), this.u("vjs-user-active"), this.n("vjs-user-inactive"), this.j("userinactive"))), this) : this.Qb
//         };
//         var N, O, P;
//         P = document.createElement("div");
//         O = {};
//         P.Hd !== b ? (O.wc = "requestFullscreen", O.nb = "exitFullscreen", O.vb = "fullscreenchange", O.H = "fullScreen") : (document.mozCancelFullScreen ? (N = "moz", O.H = N + "FullScreen") : (N = "webkit", O.H = N + "IsFullScreen"), P[N + "RequestFullScreen"] && (O.wc = N + "RequestFullScreen", O.nb = N + "CancelFullScreen"), O.vb = N + "fullscreenchange");
//         document[O.nb] && (u.Pb.ya = O);
//         u.Fa = u.c.extend();
//         u.Fa.prototype.g = {
//             Md: "play",
//             children: {
//                 playToggle: {},
//                 currentTimeDisplay: {},
//                 timeDivider: {},
//                 durationDisplay: {},
//                 remainingTimeDisplay: {},
//                 progressControl: {},
//                 fullscreenToggle: {},
//                 volumeControl: {},
//                 muteToggle: {}
//             }
//         };
//         u.Fa.prototype.e = function () {
//             return u.e("div", {
//                 className: "vjs-control-bar"
//             })
//         };
//         u.Yb = u.q.extend({
//             i: function (a, c) {
//                 u.q.call(this, a, c);
//                 a.d("play", u.bind(this, this.Kb));
//                 a.d("pause", u.bind(this, this.Jb))
//             }
//         });
//         t = u.Yb.prototype;
//         t.qa = "Play";
//         t.T = function () {
//             return "vjs-play-control " + u.q.prototype.T.call(this)
//         };
//         t.p = function () {
//             this.b.paused() ? this.b.play() : this.b.pause()
//         };
//         t.Kb = function () {
//             u.u(this.a, "vjs-paused");
//             u.n(this.a, "vjs-playing");
//             this.a.children[0].children[0].innerHTML = "Pause"
//         };
//         t.Jb = function () {
//             u.u(this.a, "vjs-playing");
//             u.n(this.a, "vjs-paused");
//             this.a.children[0].children[0].innerHTML = "Play"
//         };
//         u.Ya = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c);
//                 a.d("timeupdate", u.bind(this, this.Ca))
//             }
//         });
//         u.Ya.prototype.e = function () {
//             var a = u.c.prototype.e.call(this, "div", {
//                 className: "vjs-current-time vjs-time-controls vjs-control"
//             });
//             this.content = u.e("div", {
//                 className: "vjs-current-time-display",
//                 innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
//                 "aria-live": "off"
//             });
//             a.appendChild(u.e("div").appendChild(this.content));
//             return a
//         };
//         u.Ya.prototype.Ca = function () {
//             var a = this.b.Nb ? this.b.v.currentTime : this.b.currentTime();
//             this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.La(a, this.b.duration())
//         };
//         u.Za = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c);
//                 a.d("timeupdate", u.bind(this, this.Ca))
//             }
//         });
//         u.Za.prototype.e = function () {
//             var a = u.c.prototype.e.call(this, "div", {
//                 className: "vjs-duration vjs-time-controls vjs-control"
//             });
//             this.content = u.e("div", {
//                 className: "vjs-duration-display",
//                 innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
//                 "aria-live": "off"
//             });
//             a.appendChild(u.e("div").appendChild(this.content));
//             return a
//         };
//         u.Za.prototype.Ca = function () {
//             var a = this.b.duration();
//             a && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.La(a))
//         };
//         u.cc = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c)
//             }
//         });
//         u.cc.prototype.e = function () {
//             return u.c.prototype.e.call(this, "div", {
//                 className: "vjs-time-divider",
//                 innerHTML: "<div><span>/</span></div>"
//             })
//         };
//         u.fb = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c);
//                 a.d("timeupdate", u.bind(this, this.Ca))
//             }
//         });
//         u.fb.prototype.e = function () {
//             var a = u.c.prototype.e.call(this, "div", {
//                 className: "vjs-remaining-time vjs-time-controls vjs-control"
//             });
//             this.content = u.e("div", {
//                 className: "vjs-remaining-time-display",
//                 innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
//                 "aria-live": "off"
//             });
//             a.appendChild(u.e("div").appendChild(this.content));
//             return a
//         };
//         u.fb.prototype.Ca = function () {
//             this.b.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.La(this.b.duration() - this.b.currentTime()))
//         };
//         u.Ga = u.q.extend({
//             i: function (a, c) {
//                 u.q.call(this, a, c)
//             }
//         });
//         u.Ga.prototype.qa = "Fullscreen";
//         u.Ga.prototype.T = function () {
//             return "vjs-fullscreen-control " + u.q.prototype.T.call(this)
//         };
//         u.Ga.prototype.p = function () {
//             this.b.H ? (this.b.ob(), this.a.children[0].children[0].innerHTML = "Fullscreen") : (this.b.ya(), this.a.children[0].children[0].innerHTML = "Non-Fullscreen")
//         };
//         u.eb = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c)
//             }
//         });
//         u.eb.prototype.g = {
//             children: {
//                 seekBar: {}
//             }
//         };
//         u.eb.prototype.e = function () {
//             return u.c.prototype.e.call(this, "div", {
//                 className: "vjs-progress-control vjs-control"
//             })
//         };
//         u.Zb = u.O.extend({
//             i: function (a, c) {
//                 u.O.call(this, a, c);
//                 a.d("timeupdate", u.bind(this, this.Ba));
//                 a.L(u.bind(this, this.Ba))
//             }
//         });
//         t = u.Zb.prototype;
//         t.g = {
//             children: {
//                 loadProgressBar: {},
//                 playProgressBar: {},
//                 seekHandle: {}
//             },
//             barName: "playProgressBar",
//             handleName: "seekHandle"
//         };
//         t.tc = "timeupdate";
//         t.e = function () {
//             return u.O.prototype.e.call(this, "div", {
//                 className: "vjs-progress-holder",
//                 "aria-label": "video progress bar"
//             })
//         };
//         t.Ba = function () {
//             var a = this.b.Nb ? this.b.v.currentTime : this.b.currentTime();
//             this.a.setAttribute("aria-valuenow", u.round(100 * this.yb(), 2));
//             this.a.setAttribute("aria-valuetext", u.La(a, this.b.duration()))
//         };
//         t.yb = function () {
//             var a;
//             "Flash" === this.b.ia && this.b.seeking() ? (a = this.b.v, a = a.rc ? a.rc : this.b.currentTime()) : a = this.b.currentTime();
//             return a / this.b.duration()
//         };
//         t.Pa = function (a) {
//             u.O.prototype.Pa.call(this, a);
//             this.b.Nb = f;
//             this.Dd = !this.b.paused();
//             this.b.pause()
//         };
//         t.Hb = function (a) {
//             a = F(this, a) * this.b.duration();
//             a == this.b.duration() && (a -= .1);
//             this.b.currentTime(a)
//         };
//         t.Ib = function (a) {
//             u.O.prototype.Ib.call(this, a);
//             this.b.Nb = l;
//             this.Dd && this.b.play()
//         };
//         t.zc = function () {
//             this.b.currentTime(this.b.currentTime() + 5)
//         };
//         t.yc = function () {
//             this.b.currentTime(this.b.currentTime() - 5)
//         };
//         u.ab = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c);
//                 a.d("progress", u.bind(this, this.update))
//             }
//         });
//         u.ab.prototype.e = function () {
//             return u.c.prototype.e.call(this, "div", {
//                 className: "vjs-load-progress",
//                 innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
//             })
//         };
//         u.ab.prototype.update = function () {
//             this.a.style && (this.a.style.width = u.round(100 * this.b.Ja(), 2) + "%")
//         };
//         u.Xb = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c)
//             }
//         });
//         u.Xb.prototype.e = function () {
//             return u.c.prototype.e.call(this, "div", {
//                 className: "vjs-play-progress",
//                 innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
//             })
//         };
//         u.gb = u.ea.extend();
//         u.gb.prototype.defaultValue = "00:00";
//         u.gb.prototype.e = function () {
//             return u.ea.prototype.e.call(this, "div", {
//                 className: "vjs-seek-handle"
//             })
//         };
//         u.ib = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c);
//                 a.h && a.h.m && a.h.m.volumeControl === l && this.n("vjs-hidden");
//                 a.d("loadstart", u.bind(this, function () {
//                     a.h.m && a.h.m.volumeControl === l ? this.n("vjs-hidden") : this.u("vjs-hidden")
//                 }))
//             }
//         });
//         u.ib.prototype.g = {
//             children: {
//                 volumeBar: {}
//             }
//         };
//         u.ib.prototype.e = function () {
//             return u.c.prototype.e.call(this, "div", {
//                 className: "vjs-volume-control vjs-control"
//             })
//         };
//         u.hb = u.O.extend({
//             i: function (a, c) {
//                 u.O.call(this, a, c);
//                 a.d("volumechange", u.bind(this, this.Ba));
//                 a.L(u.bind(this, this.Ba));
//                 setTimeout(u.bind(this, this.update), 0)
//             }
//         });
//         t = u.hb.prototype;
//         t.Ba = function () {
//             this.a.setAttribute("aria-valuenow", u.round(100 * this.b.volume(), 2));
//             this.a.setAttribute("aria-valuetext", u.round(100 * this.b.volume(), 2) + "%")
//         };
//         t.g = {
//             children: {
//                 volumeLevel: {},
//                 volumeHandle: {}
//             },
//             barName: "volumeLevel",
//             handleName: "volumeHandle"
//         };
//         t.tc = "volumechange";
//         t.e = function () {
//             return u.O.prototype.e.call(this, "div", {
//                 className: "vjs-volume-bar",
//                 "aria-label": "volume level"
//             })
//         };
//         t.Hb = function (a) {
//             this.b.muted() && this.b.muted(l);
//             this.b.volume(F(this, a))
//         };
//         t.yb = function () {
//             return this.b.muted() ? 0 : this.b.volume()
//         };
//         t.zc = function () {
//             this.b.volume(this.b.volume() + .1)
//         };
//         t.yc = function () {
//             this.b.volume(this.b.volume() - .1)
//         };
//         u.dc = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c)
//             }
//         });
//         u.dc.prototype.e = function () {
//             return u.c.prototype.e.call(this, "div", {
//                 className: "vjs-volume-level",
//                 innerHTML: '<span class="vjs-control-text"></span>'
//             })
//         };
//         u.jb = u.ea.extend();
//         u.jb.prototype.defaultValue = "00:00";
//         u.jb.prototype.e = function () {
//             return u.ea.prototype.e.call(this, "div", {
//                 className: "vjs-volume-handle"
//             })
//         };
//         u.da = u.q.extend({
//             i: function (a, c) {
//                 u.q.call(this, a, c);
//                 a.d("volumechange", u.bind(this, this.update));
//                 a.h && a.h.m && a.h.m.volumeControl === l && this.n("vjs-hidden");
//                 a.d("loadstart", u.bind(this, function () {
//                     a.h.m && a.h.m.volumeControl === l ? this.n("vjs-hidden") : this.u("vjs-hidden")
//                 }))
//             }
//         });
//         u.da.prototype.e = function () {
//             return u.q.prototype.e.call(this, "div", {
//                 className: "vjs-mute-control vjs-control",
//                 innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
//             })
//         };
//         u.da.prototype.p = function () {
//             this.b.muted(this.b.muted() ? l : f)
//         };
//         u.da.prototype.update = function () {
//             var a = this.b.volume(),
//                 c = 3;
//             0 === a || this.b.muted() ? c = 0 : .33 > a ? c = 1 : .67 > a && (c = 2);
//             this.b.muted() ? "Unmute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Mute");
//             for (a = 0; 4 > a; a++) u.u(this.a, "vjs-vol-" + a);
//             u.n(this.a, "vjs-vol-" + c)
//         };
//         u.oa = u.R.extend({
//             i: function (a, c) {
//                 u.R.call(this, a, c);
//                 a.d("volumechange", u.bind(this, this.update));
//                 a.h && a.h.m && a.h.m.Dc === l && this.n("vjs-hidden");
//                 a.d("loadstart", u.bind(this, function () {
//                     a.h.m && a.h.m.Dc === l ? this.n("vjs-hidden") : this.u("vjs-hidden")
//                 }));
//                 this.n("vjs-menu-button")
//             }
//         });
//         u.oa.prototype.Ka = function () {
//             var a = new u.ma(this.b, {
//                 Vc: "div"
//             }),
//                 c = new u.hb(this.b, u.k.B({
//                     Cd: f
//                 }, this.g.Vd));
//             a.Z(c);
//             return a
//         };
//         u.oa.prototype.p = function () {
//             u.da.prototype.p.call(this);
//             u.R.prototype.p.call(this)
//         };
//         u.oa.prototype.e = function () {
//             return u.q.prototype.e.call(this, "div", {
//                 className: "vjs-volume-menu-button vjs-menu-button vjs-control",
//                 innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
//             })
//         };
//         u.oa.prototype.update = u.da.prototype.update;
//         u.cb = u.q.extend({
//             i: function (a, c) {
//                 u.q.call(this, a, c);
//                 (!a.poster() || !a.controls()) && this.C();
//                 a.d("play", u.bind(this, this.C))
//             }
//         });
//         u.cb.prototype.e = function () {
//             var a = u.e("div", {
//                 className: "vjs-poster",
//                 tabIndex: -1
//             }),
//                 c = this.b.poster();
//             c && ("backgroundSize" in a.style ? a.style.backgroundImage = 'url("' + c + '")' : a.appendChild(u.e("img", {
//                 src: c
//             })));
//             return a
//         };
//         u.cb.prototype.p = function () {
//             this.K().controls() && this.b.play()
//         };
//         u.Wb = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c);
//                 a.d("canplay", u.bind(this, this.C));
//                 a.d("canplaythrough", u.bind(this, this.C));
//                 a.d("playing", u.bind(this, this.C));
//                 a.d("seeked", u.bind(this, this.C));
//                 a.d("seeking", u.bind(this, this.show));
//                 a.d("seeked", u.bind(this, this.C));
//                 a.d("error", u.bind(this, this.show));
//                 a.d("waiting", u.bind(this, this.show))
//             }
//         });
//         u.Wb.prototype.e = function () {
//             return u.c.prototype.e.call(this, "div", {
//                 className: "vjs-loading-spinner"
//             })
//         };
//         u.Wa = u.q.extend();
//         u.Wa.prototype.e = function () {
//             return u.q.prototype.e.call(this, "div", {
//                 className: "vjs-big-play-button",
//                 innerHTML: '<span aria-hidden="true"></span>',
//                 "aria-label": "play video"
//             })
//         };
//         u.Wa.prototype.p = function () {
//             this.b.play()
//         };
//         u.r = u.c.extend({
//             i: function (a, c, d) {
//                 u.c.call(this, a, c, d);
//                 var e, g;
//                 g = this;
//                 e = this.K();
//                 a = function () {
//                     if (e.controls() && !e.Rb()) {
//                         var a, c;
//                         g.d("mousedown", g.p);
//                         g.d("touchstart", function (a) {
//                             a.preventDefault();
//                             a.stopPropagation();
//                             c = this.b.ja()
//                         });
//                         a = function (a) {
//                             a.stopPropagation();
//                             c && this.b.Mb()
//                         };
//                         g.d("touchmove", a);
//                         g.d("touchleave", a);
//                         g.d("touchcancel", a);
//                         g.d("touchend", a);
//                         var d, n, r;
//                         d = 0;
//                         g.d("touchstart", function () {
//                             d = (new Date).getTime();
//                             r = f
//                         });
//                         a = function () {
//                             r = l
//                         };
//                         g.d("touchmove", a);
//                         g.d("touchleave", a);
//                         g.d("touchcancel", a);
//                         g.d("touchend", function () {
//                             r === f && (n = (new Date).getTime() - d, 250 > n && this.j("tap"))
//                         });
//                         g.d("tap", g.md)
//                     }
//                 };
//                 c = u.bind(g, g.pd);
//                 this.L(a);
//                 e.d("controlsenabled", a);
//                 e.d("controlsdisabled", c)
//             }
//         });
//         u.r.prototype.pd = function () {
//             this.o("tap");
//             this.o("touchstart");
//             this.o("touchmove");
//             this.o("touchleave");
//             this.o("touchcancel");
//             this.o("touchend");
//             this.o("click");
//             this.o("mousedown")
//         };
//         u.r.prototype.p = function (a) {
//             0 === a.button && this.K().controls() && (this.K().paused() ? this.K().play() : this.K().pause())
//         };
//         u.r.prototype.md = function () {
//             this.K().ja(!this.K().ja())
//         };
//         u.r.prototype.m = {
//             volumeControl: f,
//             fullscreenResize: l,
//             progressEvents: l,
//             timeupdateEvents: l
//         };
//         u.media = {};
//         u.media.Va = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");

//         function ea() {
//             var a = u.media.Va[i];
//             return function () {
//                 throw Error('The "' + a + "\" method is not available on the playback technology's API")
//             }
//         }
//         for (var i = u.media.Va.length - 1; 0 <= i; i--) u.r.prototype[u.media.Va[i]] = ea();
//         u.l = u.r.extend({
//             i: function (a, c, d) {
//                 this.m.volumeControl = u.l.Uc();
//                 this.m.movingMediaElementInDOM = !u.Kc;
//                 this.m.fullscreenResize = f;
//                 u.r.call(this, a, c, d);
//                 (c = c.source) && this.a.currentSrc === c.src && 0 < this.a.networkState ? a.j("loadstart") : c && (this.a.src = c.src);
//                 if (u.ac && a.options().nativeControlsForTouch !== l) {
//                     var e, g, j, k;
//                     e = this;
//                     g = this.K();
//                     c = g.controls();
//                     e.a.controls = !! c;
//                     j = function () {
//                         e.a.controls = f
//                     };
//                     k = function () {
//                         e.a.controls = l
//                     };
//                     g.d("controlsenabled", j);
//                     g.d("controlsdisabled", k);
//                     c = function () {
//                         g.o("controlsenabled", j);
//                         g.o("controlsdisabled", k)
//                     };
//                     e.d("dispose", c);
//                     g.d("usingcustomcontrols", c);
//                     g.Rb(f)
//                 }
//                 a.L(function () {
//                     this.M && this.g.autoplay && this.paused() && (delete this.M.poster, this.play())
//                 });
//                 for (a = u.l.$a.length - 1; 0 <= a; a--) u.d(this.a, u.l.$a[a], u.bind(this.b, this.$c));
//                 this.Ua()
//             }
//         });
//         t = u.l.prototype;
//         t.D = function () {
//             u.r.prototype.D.call(this)
//         };
//         t.e = function () {
//             var a = this.b,
//                 c = a.M,
//                 d;
//             if (!c || this.m.movingMediaElementInDOM === l) c ? (d = c.cloneNode(l), u.l.jc(c), c = d, a.M = h) : c = u.e("video", {
//                 id: a.id() + "_html5_api",
//                 className: "vjs-tech"
//             }), c.player = a, u.zb(c, a.w());
//             d = ["autoplay", "preload", "loop", "muted"];
//             for (var e = d.length - 1; 0 <= e; e--) {
//                 var g = d[e];
//                 a.g[g] !== h && (c[g] = a.g[g])
//             }
//             return c
//         };
//         t.$c = function (a) {
//             this.j(a);
//             a.stopPropagation()
//         };
//         t.play = function () {
//             this.a.play()
//         };
//         t.pause = function () {
//             this.a.pause()
//         };
//         t.paused = function () {
//             return this.a.paused
//         };
//         t.currentTime = function () {
//             return this.a.currentTime
//         };
//         t.sd = function (a) {
//             try {
//                 this.a.currentTime = a
//             } catch (c) {
//                 u.log(c, "Video is not ready. (Video.js)")
//             }
//         };
//         t.duration = function () {
//             return this.a.duration || 0
//         };
//         t.buffered = function () {
//             return this.a.buffered
//         };
//         t.volume = function () {
//             return this.a.volume
//         };
//         t.xd = function (a) {
//             this.a.volume = a
//         };
//         t.muted = function () {
//             return this.a.muted
//         };
//         t.vd = function (a) {
//             this.a.muted = a
//         };
//         t.width = function () {
//             return this.a.offsetWidth
//         };
//         t.height = function () {
//             return this.a.offsetHeight
//         };
//         t.Ta = function () {
//             return "function" == typeof this.a.webkitEnterFullScreen && (/Android/.test(u.F) || !/Chrome|Mac OS X 10.5/.test(u.F)) ? f : l
//         };
//         t.src = function (a) {
//             this.a.src = a
//         };
//         t.load = function () {
//             this.a.load()
//         };
//         t.currentSrc = function () {
//             return this.a.currentSrc
//         };
//         t.Qa = function () {
//             return this.a.Qa
//         };
//         t.wd = function (a) {
//             this.a.Qa = a
//         };
//         t.autoplay = function () {
//             return this.a.autoplay
//         };
//         t.rd = function (a) {
//             this.a.autoplay = a
//         };
//         t.controls = function () {
//             return this.a.controls
//         };
//         t.loop = function () {
//             return this.a.loop
//         };
//         t.ud = function (a) {
//             this.a.loop = a
//         };
//         t.error = function () {
//             return this.a.error
//         };
//         t.seeking = function () {
//             return this.a.seeking
//         };
//         u.l.isSupported = function () {
//             return !!u.na.canPlayType
//         };
//         u.l.mb = function (a) {
//             try {
//                 return !!u.na.canPlayType(a.type)
//             } catch (c) {
//                 return ""
//             }
//         };
//         u.l.Uc = function () {
//             var a = u.na.volume;
//             u.na.volume = a / 2 + .1;
//             return a !== u.na.volume
//         };
//         u.l.$a = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
//         u.l.jc = function (a) {
//             if (a) {
//                 a.player = h;
//                 for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();) a.removeChild(a.firstChild);
//                 a.removeAttribute("src");
//                 "function" === typeof a.load && a.load()
//             }
//         };
//         u.Oc && (document.createElement("video").constructor.prototype.canPlayType = function (a) {
//             return a && -1 != a.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
//         });
//         u.f = u.r.extend({
//             i: function (a, c, d) {
//                 u.r.call(this, a, c, d);
//                 var e = c.source;
//                 d = c.parentEl;
//                 var g = this.a = u.e("div", {
//                     id: a.id() + "_temp_flash"
//                 }),
//                     j = a.id() + "_flash_api";
//                 a = a.g;
//                 var k = u.k.B({
//                     readyFunction: "videojs.Flash.onReady",
//                     eventProxyFunction: "videojs.Flash.onEvent",
//                     errorEventProxyFunction: "videojs.Flash.onError",
//                     autoplay: a.autoplay,
//                     preload: a.Qa,
//                     loop: a.loop,
//                     muted: a.muted
//                 }, c.flashVars),
//                     q = u.k.B({
//                         wmode: "opaque",
//                         bgcolor: "#000000"
//                     }, c.params),
//                     n = u.k.B({
//                         id: j,
//                         name: j,
//                         "class": "vjs-tech"
//                     }, c.attributes);
//                 e && (e.type && u.f.ed(e.type) ? (a = u.f.Ac(e.src), k.rtmpConnection = encodeURIComponent(a.rb), k.rtmpStream = encodeURIComponent(a.Ob)) : k.src = encodeURIComponent(u.mc(e.src)));
//                 u.zb(g, d);
//                 c.startTime && this.L(function () {
//                     this.load();
//                     this.play();
//                     this.currentTime(c.startTime)
//                 });
//                 if (c.iFrameMode === f && !u.Jc) {
//                     var r = u.e("iframe", {
//                         id: j + "_iframe",
//                         name: j + "_iframe",
//                         className: "vjs-tech",
//                         scrolling: "no",
//                         marginWidth: 0,
//                         marginHeight: 0,
//                         frameBorder: 0
//                     });
//                     k.readyFunction = "ready";
//                     k.eventProxyFunction = "events";
//                     k.errorEventProxyFunction = "errors";
//                     u.d(r, "load", u.bind(this, function () {
//                         var a, d = r.contentWindow;
//                         a = r.contentDocument ? r.contentDocument : r.contentWindow.document;
//                         a.write(u.f.nc(c.swf, k, q, n));
//                         d.player = this.b;
//                         d.ready = u.bind(this.b, function (c) {
//                             var d = this.h;
//                             d.a = a.getElementById(c);
//                             u.f.pb(d)
//                         });
//                         d.events = u.bind(this.b, function (a, c) {
//                             this && "flash" === this.ia && this.j(c)
//                         });
//                         d.errors = u.bind(this.b, function (a, c) {
//                             u.log("Flash Error", c)
//                         })
//                     }));
//                     g.parentNode.replaceChild(r, g)
//                 } else u.f.Zc(c.swf, g, k, q, n)
//             }
//         });
//         t = u.f.prototype;
//         t.D = function () {
//             u.r.prototype.D.call(this)
//         };
//         t.play = function () {
//             this.a.vjs_play()
//         };
//         t.pause = function () {
//             this.a.vjs_pause()
//         };
//         t.src = function (a) {
//             u.f.dd(a) ? (a = u.f.Ac(a), this.Qd(a.rb), this.Rd(a.Ob)) : (a = u.mc(a), this.a.vjs_src(a));
//             if (this.b.autoplay()) {
//                 var c = this;
//                 setTimeout(function () {
//                     c.play()
//                 }, 0)
//             }
//         };
//         t.currentSrc = function () {
//             var a = this.a.vjs_getProperty("currentSrc");
//             if (a == h) {
//                 var c = this.Od(),
//                     d = this.Pd();
//                 c && d && (a = u.f.yd(c, d))
//             }
//             return a
//         };
//         t.load = function () {
//             this.a.vjs_load()
//         };
//         t.poster = function () {
//             this.a.vjs_getProperty("poster")
//         };
//         t.buffered = function () {
//             return u.tb(0, this.a.vjs_getProperty("buffered"))
//         };
//         t.Ta = s(l);
//         var Q = u.f.prototype,
//             R = "rtmpConnection rtmpStream preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
//             S = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");

//         function fa() {
//             var a = R[T],
//                 c = a.charAt(0).toUpperCase() + a.slice(1);
//             Q["set" + c] = function (c) {
//                 return this.a.vjs_setProperty(a, c)
//             }
//         }

//         function U(a) {
//             Q[a] = function () {
//                 return this.a.vjs_getProperty(a)
//             }
//         }
//         var T;
//         for (T = 0; T < R.length; T++) U(R[T]), fa();
//         for (T = 0; T < S.length; T++) U(S[T]);
//         u.f.isSupported = function () {
//             return 10 <= u.f.version()[0]
//         };
//         u.f.mb = function (a) {
//             if (!a.type) return "";
//             a = a.type.replace(/;.*/, "").toLowerCase();
//             if (a in u.f.bd || a in u.f.Bc) return "maybe"
//         };
//         u.f.bd = {
//             "video/flv": "FLV",
//             "video/x-flv": "FLV",
//             "video/mp4": "MP4",
//             "video/m4v": "MP4"
//         };
//         u.f.Bc = {
//             "rtmp/mp4": "MP4",
//             "rtmp/flv": "FLV"
//         };
//         u.f.onReady = function (a) {
//             a = u.w(a);
//             var c = a.player || a.parentNode.player,
//                 d = c.h;
//             a.player = c;
//             d.a = a;
//             u.f.pb(d)
//         };
//         u.f.pb = function (a) {
//             a.w().vjs_getProperty ? a.Ua() : setTimeout(function () {
//                 u.f.pb(a)
//             }, 50)
//         };
//         u.f.onEvent = function (a, c) {
//             u.w(a).player.j(c)
//         };
//         u.f.onError = function (a, c) {
//             u.w(a).player.j("error");
//             u.log("Flash Error", c, a)
//         };
//         u.f.version = function () {
//             var a = "0,0,0";
//             try {
//                 a = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
//             } catch (c) {
//                 try {
//                     navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
//                 } catch (d) {}
//             }
//             return a.split(",")
//         };
//         u.f.Zc = function (a, c, d, e, g) {
//             a = u.f.nc(a, d, e, g);
//             a = u.e("div", {
//                 innerHTML: a
//             }).childNodes[0];
//             d = c.parentNode;
//             c.parentNode.replaceChild(a, c);
//             var j = d.childNodes[0];
//             setTimeout(function () {
//                 j.style.display = "block"
//             }, 1e3)
//         };
//         u.f.nc = function (a, c, d, e) {
//             var g = "",
//                 j = "",
//                 k = "";
//             c && u.k.ua(c, function (a, c) {
//                 g += a + "=" + c + "&amp;"
//             });
//             d = u.k.B({
//                 movie: a,
//                 flashvars: g,
//                 allowScriptAccess: "always",
//                 allowNetworking: "all"
//             }, d);
//             u.k.ua(d, function (a, c) {
//                 j += '<param name="' + a + '" value="' + c + '" />'
//             });
//             e = u.k.B({
//                 data: a,
//                 width: "100%",
//                 height: "100%"
//             }, e);
//             u.k.ua(e, function (a, c) {
//                 k += a + '="' + c + '" '
//             });
//             return '<object type="application/x-shockwave-flash"' + k + ">" + j + "</object>"
//         };
//         u.f.yd = function (a, c) {
//             return a + "&" + c
//         };
//         u.f.Ac = function (a) {
//             var c = {
//                 rb: "",
//                 Ob: ""
//             };
//             if (!a) return c;
//             var d = a.indexOf("&"),
//                 e; - 1 !== d ? e = d + 1 : (d = e = a.lastIndexOf("/") + 1, 0 === d && (d = e = a.length));
//             c.rb = a.substring(0, d);
//             c.Ob = a.substring(e, a.length);
//             return c
//         };
//         u.f.ed = function (a) {
//             return a in u.f.Bc
//         };
//         u.f.Qc = /^rtmp[set]?:\/\//i;
//         u.f.dd = function (a) {
//             return u.f.Qc.test(a)
//         };
//         u.Pc = u.c.extend({
//             i: function (a, c, d) {
//                 u.c.call(this, a, c, d);
//                 if (!a.g.sources || 0 === a.g.sources.length) {
//                     c = 0;
//                     for (d = a.g.techOrder; c < d.length; c++) {
//                         var e = u.$(d[c]),
//                             g = window.videojs[e];
//                         if (g && g.isSupported()) {
//                             I(a, e);
//                             break
//                         }
//                     }
//                 } else a.src(a.g.sources)
//             }
//         });

//         function V(a) {
//             a.Aa = a.Aa || [];
//             return a.Aa
//         }

//         function W(a, c, d) {
//             for (var e = a.Aa, g = 0, j = e.length, k, q; g < j; g++) k = e[g], k.id() === c ? (k.show(), q = k) : d && k.J() == d && 0 < k.mode() && k.disable();
//             (c = q ? q.J() : d ? d : l) && a.j(c + "trackchange")
//         }
//         u.X = u.c.extend({
//             i: function (a, c) {
//                 u.c.call(this, a, c);
//                 this.Q = c.id || "vjs_" + c.kind + "_" + c.language + "_" + u.t++;
//                 this.xc = c.src;
//                 this.Wc = c["default"] || c.dflt;
//                 this.Ad = c.title;
//                 this.Ld = c.srclang;
//                 this.fd = c.label;
//                 this.fa = [];
//                 this.ec = [];
//                 this.ga = this.ha = 0;
//                 this.b.d("fullscreenchange", u.bind(this, this.Rc))
//             }
//         });
//         t = u.X.prototype;
//         t.J = p("A");
//         t.src = p("xc");
//         t.ub = p("Wc");
//         t.title = p("Ad");
//         t.label = p("fd");
//         t.readyState = p("ha");
//         t.mode = p("ga");
//         t.Rc = function () {
//             this.a.style.fontSize = this.b.H ? 140 * (screen.width / this.b.width()) + "%" : ""
//         };
//         t.e = function () {
//             return u.c.prototype.e.call(this, "div", {
//                 className: "vjs-" + this.A + " vjs-text-track"
//             })
//         };
//         t.show = function () {
//             X(this);
//             this.ga = 2;
//             u.c.prototype.show.call(this)
//         };
//         t.C = function () {
//             X(this);
//             this.ga = 1;
//             u.c.prototype.C.call(this)
//         };
//         t.disable = function () {
//             2 == this.ga && this.C();
//             this.b.o("timeupdate", u.bind(this, this.update, this.Q));
//             this.b.o("ended", u.bind(this, this.reset, this.Q));
//             this.reset();
//             this.b.V.textTrackDisplay.removeChild(this);
//             this.ga = 0
//         };

//         function X(a) {
//             0 === a.ha && a.load();
//             0 === a.ga && (a.b.d("timeupdate", u.bind(a, a.update, a.Q)), a.b.d("ended", u.bind(a, a.reset, a.Q)), ("captions" === a.A || "subtitles" === a.A) && a.b.V.textTrackDisplay.Z(a))
//         }
//         t.load = function () {
//             0 === this.ha && (this.ha = 1, u.get(this.xc, u.bind(this, this.nd), u.bind(this, this.Gb)))
//         };
//         t.Gb = function (a) {
//             this.error = a;
//             this.ha = 3;
//             this.j("error")
//         };
//         t.nd = function (a) {
//             var c, d;
//             a = a.split("\n");
//             for (var e = "", g = 1, j = a.length; g < j; g++)
//                 if (e = u.trim(a[g])) {
//                     -1 == e.indexOf("-->") ? (c = e, e = u.trim(a[++g])) : c = this.fa.length;
//                     c = {
//                         id: c,
//                         index: this.fa.length
//                     };
//                     d = e.split(" --> ");
//                     c.startTime = Y(d[0]);
//                     c.va = Y(d[1]);
//                     for (d = []; a[++g] && (e = u.trim(a[g]));) d.push(e);
//                     c.text = d.join("<br/>");
//                     this.fa.push(c)
//                 }
//             this.ha = 2;
//             this.j("loaded")
//         };

//         function Y(a) {
//             var c = a.split(":");
//             a = 0;
//             var d, e, g;
//             3 == c.length ? (d = c[0], e = c[1], c = c[2]) : (d = 0, e = c[0], c = c[1]);
//             c = c.split(/\s+/);
//             c = c.splice(0, 1)[0];
//             c = c.split(/\.|,/);
//             g = parseFloat(c[1]);
//             c = c[0];
//             a += 3600 * parseFloat(d);
//             a += 60 * parseFloat(e);
//             a += parseFloat(c);
//             g && (a += g / 1e3);
//             return a
//         }
//         t.update = function () {
//             if (0 < this.fa.length) {
//                 var a = this.b.currentTime();
//                 if (this.Lb === b || a < this.Lb || this.Ma <= a) {
//                     var c = this.fa,
//                         d = this.b.duration(),
//                         e = 0,
//                         g = l,
//                         j = [],
//                         k, q, n, r;
//                     a >= this.Ma || this.Ma === b ? r = this.wb !== b ? this.wb : 0 : (g = f, r = this.Db !== b ? this.Db : c.length - 1);
//                     for (;;) {
//                         n = c[r];
//                         if (n.va <= a) e = Math.max(e, n.va), n.Ia && (n.Ia = l);
//                         else if (a < n.startTime) {
//                             if (d = Math.min(d, n.startTime), n.Ia && (n.Ia = l), !g) break
//                         } else g ? (j.splice(0, 0, n), q === b && (q = r), k = r) : (j.push(n), k === b && (k = r), q = r), d = Math.min(d, n.va), e = Math.max(e, n.startTime), n.Ia = f; if (g)
//                             if (0 === r) break;
//                             else r--;
//                             else if (r === c.length - 1) break;
//                         else r++
//                     }
//                     this.ec = j;
//                     this.Ma = d;
//                     this.Lb = e;
//                     this.wb = k;
//                     this.Db = q;
//                     a = this.ec;
//                     c = "";
//                     d = 0;
//                     for (e = a.length; d < e; d++) c += '<span class="vjs-tt-cue">' + a[d].text + "</span>";
//                     this.a.innerHTML = c;
//                     this.j("cuechange")
//                 }
//             }
//         };
//         t.reset = function () {
//             this.Ma = 0;
//             this.Lb = this.b.duration();
//             this.Db = this.wb = 0
//         };
//         u.Ub = u.X.extend();
//         u.Ub.prototype.A = "captions";
//         u.$b = u.X.extend();
//         u.$b.prototype.A = "subtitles";
//         u.Vb = u.X.extend();
//         u.Vb.prototype.A = "chapters";
//         u.bc = u.c.extend({
//             i: function (a, c, d) {
//                 u.c.call(this, a, c, d);
//                 if (a.g.tracks && 0 < a.g.tracks.length) {
//                     c = this.b;
//                     a = a.g.tracks;
//                     var e;
//                     for (d = 0; d < a.length; d++) {
//                         e = a[d];
//                         var g = c,
//                             j = e.kind,
//                             k = e.label,
//                             q = e.language,
//                             n = e;
//                         e = g.Aa = g.Aa || [];
//                         n = n || {};
//                         n.kind = j;
//                         n.label = k;
//                         n.language = q;
//                         j = u.$(j || "subtitles");
//                         g = new window.videojs[j + "Track"](g, n);
//                         e.push(g)
//                     }
//                 }
//             }
//         });
//         u.bc.prototype.e = function () {
//             return u.c.prototype.e.call(this, "div", {
//                 className: "vjs-text-track-display"
//             })
//         };
//         u.Y = u.N.extend({
//             i: function (a, c) {
//                 var d = this.ca = c.track;
//                 c.label = d.label();
//                 c.selected = d.ub();
//                 u.N.call(this, a, c);
//                 this.b.d(d.J() + "trackchange", u.bind(this, this.update))
//             }
//         });
//         u.Y.prototype.p = function () {
//             u.N.prototype.p.call(this);
//             W(this.b, this.ca.Q, this.ca.J())
//         };
//         u.Y.prototype.update = function () {
//             this.selected(2 == this.ca.mode())
//         };
//         u.bb = u.Y.extend({
//             i: function (a, c) {
//                 c.track = {
//                     J: function () {
//                         return c.kind
//                     },
//                     K: a,
//                     label: function () {
//                         return c.kind + " off"
//                     },
//                     ub: s(l),
//                     mode: s(l)
//                 };
//                 u.Y.call(this, a, c);
//                 this.selected(f)
//             }
//         });
//         u.bb.prototype.p = function () {
//             u.Y.prototype.p.call(this);
//             W(this.b, this.ca.Q, this.ca.J())
//         };
//         u.bb.prototype.update = function () {
//             for (var a = V(this.b), c = 0, d = a.length, e, g = f; c < d; c++) e = a[c], e.J() == this.ca.J() && 2 == e.mode() && (g = l);
//             this.selected(g)
//         };
//         u.S = u.R.extend({
//             i: function (a, c) {
//                 u.R.call(this, a, c);
//                 1 >= this.I.length && this.C()
//             }
//         });
//         u.S.prototype.ta = function () {
//             var a = [],
//                 c;
//             a.push(new u.bb(this.b, {
//                 kind: this.A
//             }));
//             for (var d = 0; d < V(this.b).length; d++) c = V(this.b)[d], c.J() === this.A && a.push(new u.Y(this.b, {
//                 track: c
//             }));
//             return a
//         };
//         u.Da = u.S.extend({
//             i: function (a, c, d) {
//                 u.S.call(this, a, c, d);
//                 this.a.setAttribute("aria-label", "Captions Menu")
//             }
//         });
//         u.Da.prototype.A = "captions";
//         u.Da.prototype.qa = "Captions";
//         u.Da.prototype.className = "vjs-captions-button";
//         u.Ha = u.S.extend({
//             i: function (a, c, d) {
//                 u.S.call(this, a, c, d);
//                 this.a.setAttribute("aria-label", "Subtitles Menu")
//             }
//         });
//         u.Ha.prototype.A = "subtitles";
//         u.Ha.prototype.qa = "Subtitles";
//         u.Ha.prototype.className = "vjs-subtitles-button";
//         u.Ea = u.S.extend({
//             i: function (a, c, d) {
//                 u.S.call(this, a, c, d);
//                 this.a.setAttribute("aria-label", "Chapters Menu")
//             }
//         });
//         t = u.Ea.prototype;
//         t.A = "chapters";
//         t.qa = "Chapters";
//         t.className = "vjs-chapters-button";
//         t.ta = function () {
//             for (var a = [], c, d = 0; d < V(this.b).length; d++) c = V(this.b)[d], c.J() === this.A && a.push(new u.Y(this.b, {
//                 track: c
//             }));
//             return a
//         };
//         t.Ka = function () {
//             for (var a = V(this.b), c = 0, d = a.length, e, g, j = this.I = []; c < d; c++)
//                 if (e = a[c], e.J() == this.A && e.ub()) {
//                     if (2 > e.readyState()) {
//                         this.Id = e;
//                         e.d("loaded", u.bind(this, this.Ka));
//                         return
//                     }
//                     g = e;
//                     break
//                 }
//             a = this.wa = new u.ma(this.b);
//             a.a.appendChild(u.e("li", {
//                 className: "vjs-menu-title",
//                 innerHTML: u.$(this.A),
//                 zd: -1
//             }));
//             if (g) {
//                 e = g.fa;
//                 for (var k, c = 0, d = e.length; c < d; c++) k = e[c], k = new u.Xa(this.b, {
//                     track: g,
//                     cue: k
//                 }), j.push(k), a.Z(k)
//             }
//             0 < this.I.length && this.show();
//             return a
//         };
//         u.Xa = u.N.extend({
//             i: function (a, c) {
//                 var d = this.ca = c.track,
//                     e = this.cue = c.cue,
//                     g = a.currentTime();
//                 c.label = e.text;
//                 c.selected = e.startTime <= g && g < e.va;
//                 u.N.call(this, a, c);
//                 d.d("cuechange", u.bind(this, this.update))
//             }
//         });
//         u.Xa.prototype.p = function () {
//             u.N.prototype.p.call(this);
//             this.b.currentTime(this.cue.startTime);
//             this.update(this.cue.startTime)
//         };
//         u.Xa.prototype.update = function () {
//             var a = this.cue,
//                 c = this.b.currentTime();
//             this.selected(a.startTime <= c && c < a.va)
//         };
//         u.k.B(u.Fa.prototype.g.children, {
//             subtitlesButton: {},
//             captionsButton: {},
//             chaptersButton: {}
//         });
//         if ("undefined" !== typeof window.JSON && "function" === window.JSON.parse) u.JSON = window.JSON;
//         else {
//             u.JSON = {};
//             var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
//             u.JSON.parse = function (a, c) {
//                 function d(a, e) {
//                     var k, q, n = a[e];
//                     if (n && "object" === typeof n)
//                         for (k in n) Object.prototype.hasOwnProperty.call(n, k) && (q = d(n, k), q !== b ? n[k] = q : delete n[k]);
//                     return c.call(a, e, n)
//                 }
//                 var e;
//                 a = String(a);
//                 Z.lastIndex = 0;
//                 Z.test(a) && (a = a.replace(Z, function (a) {
//                     return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
//                 }));
//                 if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof c ? d({
//                     "": e
//                 }, "") : e;
//                 throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
//             }
//         }
//         u.fc = function () {
//             var a, c, d = document.getElementsByTagName("video");
//             if (d && 0 < d.length)
//                 for (var e = 0, g = d.length; e < g; e++)
//                     if ((c = d[e]) && c.getAttribute) c.player === b && (a = c.getAttribute("data-setup"), a !== h && (a = u.JSON.parse(a || "{}"), v(c, a)));
//                     else {
//                         u.kb();
//                         break
//                     } else u.Ec || u.kb()
//         };
//         u.kb = function () {
//             setTimeout(u.fc, 1)
//         };
//         "complete" === document.readyState ? u.Ec = f : u.U(window, "load", function () {
//             u.Ec = f
//         });
//         u.kb();
//         u.od = function (a, c) {
//             u.s.prototype[a] = c
//         };
//         var ga = this;
//         ga.Ed = f;

//         function $(a, c) {
//             var d = a.split("."),
//                 e = ga;
//             !(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
//             for (var g; d.length && (g = d.shift());)!d.length && c !== b ? e[g] = c : e = e[g] ? e[g] : e[g] = {}
//         }
//         $("videojs", u);
//         $("_V_", u);
//         $("videojs.options", u.options);
//         $("videojs.players", u.xa);
//         $("videojs.TOUCH_ENABLED", u.ac);
//         $("videojs.cache", u.ra);
//         $("videojs.Component", u.c);
//         u.c.prototype.player = u.c.prototype.K;
//         u.c.prototype.dispose = u.c.prototype.D;
//         u.c.prototype.createEl = u.c.prototype.e;
//         u.c.prototype.el = u.c.prototype.w;
//         u.c.prototype.addChild = u.c.prototype.Z;
//         u.c.prototype.children = u.c.prototype.children;
//         u.c.prototype.on = u.c.prototype.d;
//         u.c.prototype.off = u.c.prototype.o;
//         u.c.prototype.one = u.c.prototype.U;
//         u.c.prototype.trigger = u.c.prototype.j;
//         u.c.prototype.triggerReady = u.c.prototype.Ua;
//         u.c.prototype.show = u.c.prototype.show;
//         u.c.prototype.hide = u.c.prototype.C;
//         u.c.prototype.width = u.c.prototype.width;
//         u.c.prototype.height = u.c.prototype.height;
//         u.c.prototype.dimensions = u.c.prototype.Xc;
//         u.c.prototype.ready = u.c.prototype.L;
//         u.c.prototype.addClass = u.c.prototype.n;
//         u.c.prototype.removeClass = u.c.prototype.u;
//         $("videojs.Player", u.s);
//         u.s.prototype.dispose = u.s.prototype.D;
//         u.s.prototype.requestFullScreen = u.s.prototype.ya;
//         u.s.prototype.cancelFullScreen = u.s.prototype.ob;
//         u.s.prototype.bufferedPercent = u.s.prototype.Ja;
//         u.s.prototype.usingNativeControls = u.s.prototype.Rb;
//         u.s.prototype.reportUserActivity = u.s.prototype.Mb;
//         u.s.prototype.userActive = u.s.prototype.ja;
//         $("videojs.MediaLoader", u.Pc);
//         $("videojs.TextTrackDisplay", u.bc);
//         $("videojs.ControlBar", u.Fa);
//         $("videojs.Button", u.q);
//         $("videojs.PlayToggle", u.Yb);
//         $("videojs.FullscreenToggle", u.Ga);
//         $("videojs.BigPlayButton", u.Wa);
//         $("videojs.LoadingSpinner", u.Wb);
//         $("videojs.CurrentTimeDisplay", u.Ya);
//         $("videojs.DurationDisplay", u.Za);
//         $("videojs.TimeDivider", u.cc);
//         $("videojs.RemainingTimeDisplay", u.fb);
//         $("videojs.Slider", u.O);
//         $("videojs.ProgressControl", u.eb);
//         $("videojs.SeekBar", u.Zb);
//         $("videojs.LoadProgressBar", u.ab);
//         $("videojs.PlayProgressBar", u.Xb);
//         $("videojs.SeekHandle", u.gb);
//         $("videojs.VolumeControl", u.ib);
//         $("videojs.VolumeBar", u.hb);
//         $("videojs.VolumeLevel", u.dc);
//         $("videojs.VolumeMenuButton", u.oa);
//         $("videojs.VolumeHandle", u.jb);
//         $("videojs.MuteToggle", u.da);
//         $("videojs.PosterImage", u.cb);
//         $("videojs.Menu", u.ma);
//         $("videojs.MenuItem", u.N);
//         $("videojs.MenuButton", u.R);
//         u.R.prototype.createItems = u.R.prototype.ta;
//         u.S.prototype.createItems = u.S.prototype.ta;
//         u.Ea.prototype.createItems = u.Ea.prototype.ta;
//         $("videojs.SubtitlesButton", u.Ha);
//         $("videojs.CaptionsButton", u.Da);
//         $("videojs.ChaptersButton", u.Ea);
//         $("videojs.MediaTechController", u.r);
//         u.r.prototype.features = u.r.prototype.m;
//         u.r.prototype.m.volumeControl = u.r.prototype.m.Dc;
//         u.r.prototype.m.fullscreenResize = u.r.prototype.m.Jd;
//         u.r.prototype.m.progressEvents = u.r.prototype.m.Nd;
//         u.r.prototype.m.timeupdateEvents = u.r.prototype.m.Sd;
//         $("videojs.Html5", u.l);
//         u.l.Events = u.l.$a;
//         u.l.isSupported = u.l.isSupported;
//         u.l.canPlaySource = u.l.mb;
//         u.l.prototype.setCurrentTime = u.l.prototype.sd;
//         u.l.prototype.setVolume = u.l.prototype.xd;
//         u.l.prototype.setMuted = u.l.prototype.vd;
//         u.l.prototype.setPreload = u.l.prototype.wd;
//         u.l.prototype.setAutoplay = u.l.prototype.rd;
//         u.l.prototype.setLoop = u.l.prototype.ud;
//         $("videojs.Flash", u.f);
//         u.f.isSupported = u.f.isSupported;
//         u.f.canPlaySource = u.f.mb;
//         u.f.onReady = u.f.onReady;
//         $("videojs.TextTrack", u.X);
//         u.X.prototype.label = u.X.prototype.label;
//         $("videojs.CaptionsTrack", u.Ub);
//         $("videojs.SubtitlesTrack", u.$b);
//         $("videojs.ChaptersTrack", u.Vb);
//         $("videojs.autoSetup", u.fc);
//         $("videojs.plugin", u.od);
//         $("videojs.createTimeRange", u.tb)
//     })();
//     (function () {
//         var root = this;
//         var previousBackbone = root.Backbone;
//         var array = [];
//         var push = array.push;
//         var slice = array.slice;
//         var splice = array.splice;
//         var Backbone;
//         if (typeof exports !== "undefined") {
//             Backbone = exports
//         } else {
//             Backbone = root.Backbone = {}
//         }
//         Backbone.VERSION = "1.0.0";
//         var _ = root._;
//         if (!_ && typeof require !== "undefined") _ = require("underscore");
//         Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$;
//         Backbone.noConflict = function () {
//             root.Backbone = previousBackbone;
//             return this
//         };
//         Backbone.emulateHTTP = false;
//         Backbone.emulateJSON = false;
//         var Events = Backbone.Events = {
//             on: function (name, callback, context) {
//                 if (!eventsApi(this, "on", name, [callback, context]) || !callback) return this;
//                 this._events || (this._events = {});
//                 var events = this._events[name] || (this._events[name] = []);
//                 events.push({
//                     callback: callback,
//                     context: context,
//                     ctx: context || this
//                 });
//                 return this
//             },
//             once: function (name, callback, context) {
//                 if (!eventsApi(this, "once", name, [callback, context]) || !callback) return this;
//                 var self = this;
//                 var once = _.once(function () {
//                     self.off(name, once);
//                     callback.apply(this, arguments)
//                 });
//                 once._callback = callback;
//                 return this.on(name, once, context)
//             },
//             off: function (name, callback, context) {
//                 var retain, ev, events, names, i, l, j, k;
//                 if (!this._events || !eventsApi(this, "off", name, [callback, context])) return this;
//                 if (!name && !callback && !context) {
//                     this._events = {};
//                     return this
//                 }
//                 names = name ? [name] : _.keys(this._events);
//                 for (i = 0, l = names.length; i < l; i++) {
//                     name = names[i];
//                     if (events = this._events[name]) {
//                         this._events[name] = retain = [];
//                         if (callback || context) {
//                             for (j = 0, k = events.length; j < k; j++) {
//                                 ev = events[j];
//                                 if (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) {
//                                     retain.push(ev)
//                                 }
//                             }
//                         }
//                         if (!retain.length) delete this._events[name]
//                     }
//                 }
//                 return this
//             },
//             trigger: function (name) {
//                 if (!this._events) return this;
//                 var args = slice.call(arguments, 1);
//                 if (!eventsApi(this, "trigger", name, args)) return this;
//                 var events = this._events[name];
//                 var allEvents = this._events.all;
//                 if (events) triggerEvents(events, args);
//                 if (allEvents) triggerEvents(allEvents, arguments);
//                 return this
//             },
//             stopListening: function (obj, name, callback) {
//                 var listeners = this._listeners;
//                 if (!listeners) return this;
//                 var deleteListener = !name && !callback;
//                 if (typeof name === "object") callback = this;
//                 if (obj)(listeners = {})[obj._listenerId] = obj;
//                 for (var id in listeners) {
//                     listeners[id].off(name, callback, this);
//                     if (deleteListener) delete this._listeners[id]
//                 }
//                 return this
//             }
//         };
//         var eventSplitter = /\s+/;
//         var eventsApi = function (obj, action, name, rest) {
//             if (!name) return true;
//             if (typeof name === "object") {
//                 for (var key in name) {
//                     obj[action].apply(obj, [key, name[key]].concat(rest))
//                 }
//                 return false
//             }
//             if (eventSplitter.test(name)) {
//                 var names = name.split(eventSplitter);
//                 for (var i = 0, l = names.length; i < l; i++) {
//                     obj[action].apply(obj, [names[i]].concat(rest))
//                 }
//                 return false
//             }
//             return true
//         };
//         var triggerEvents = function (events, args) {
//             var ev, i = -1,
//                 l = events.length,
//                 a1 = args[0],
//                 a2 = args[1],
//                 a3 = args[2];
//             switch (args.length) {
//             case 0:
//                 while (++i < l)(ev = events[i]).callback.call(ev.ctx);
//                 return;
//             case 1:
//                 while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1);
//                 return;
//             case 2:
//                 while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2);
//                 return;
//             case 3:
//                 while (++i < l)(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
//                 return;
//             default:
//                 while (++i < l)(ev = events[i]).callback.apply(ev.ctx, args)
//             }
//         };
//         var listenMethods = {
//             listenTo: "on",
//             listenToOnce: "once"
//         };
//         _.each(listenMethods, function (implementation, method) {
//             Events[method] = function (obj, name, callback) {
//                 var listeners = this._listeners || (this._listeners = {});
//                 var id = obj._listenerId || (obj._listenerId = _.uniqueId("l"));
//                 listeners[id] = obj;
//                 if (typeof name === "object") callback = this;
//                 obj[implementation](name, callback, this);
//                 return this
//             }
//         });
//         Events.bind = Events.on;
//         Events.unbind = Events.off;
//         _.extend(Backbone, Events);
//         var Model = Backbone.Model = function (attributes, options) {
//             var defaults;
//             var attrs = attributes || {};
//             options || (options = {});
//             this.cid = _.uniqueId("c");
//             this.attributes = {};
//             _.extend(this, _.pick(options, modelOptions));
//             if (options.parse) attrs = this.parse(attrs, options) || {};
//             if (defaults = _.result(this, "defaults")) {
//                 attrs = _.defaults({}, attrs, defaults)
//             }
//             this.set(attrs, options);
//             this.changed = {};
//             this.initialize.apply(this, arguments)
//         };
//         var modelOptions = ["url", "urlRoot", "collection"];
//         _.extend(Model.prototype, Events, {
//             changed: null,
//             validationError: null,
//             idAttribute: "id",
//             initialize: function () {},
//             toJSON: function (options) {
//                 return _.clone(this.attributes)
//             },
//             sync: function () {
//                 return Backbone.sync.apply(this, arguments)
//             },
//             get: function (attr) {
//                 return this.attributes[attr]
//             },
//             escape: function (attr) {
//                 return _.escape(this.get(attr))
//             },
//             has: function (attr) {
//                 return this.get(attr) != null
//             },
//             set: function (key, val, options) {
//                 var attr, attrs, unset, changes, silent, changing, prev, current;
//                 if (key == null) return this;
//                 if (typeof key === "object") {
//                     attrs = key;
//                     options = val
//                 } else {
//                     (attrs = {})[key] = val
//                 }
//                 options || (options = {});
//                 if (!this._validate(attrs, options)) return false;
//                 unset = options.unset;
//                 silent = options.silent;
//                 changes = [];
//                 changing = this._changing;
//                 this._changing = true;
//                 if (!changing) {
//                     this._previousAttributes = _.clone(this.attributes);
//                     this.changed = {}
//                 }
//                 current = this.attributes, prev = this._previousAttributes;
//                 if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];
//                 for (attr in attrs) {
//                     val = attrs[attr];
//                     if (!_.isEqual(current[attr], val)) changes.push(attr);
//                     if (!_.isEqual(prev[attr], val)) {
//                         this.changed[attr] = val
//                     } else {
//                         delete this.changed[attr]
//                     }
//                     unset ? delete current[attr] : current[attr] = val
//                 }
//                 if (!silent) {
//                     if (changes.length) this._pending = true;
//                     for (var i = 0, l = changes.length; i < l; i++) {
//                         this.trigger("change:" + changes[i], this, current[changes[i]], options)
//                     }
//                 }
//                 if (changing) return this;
//                 if (!silent) {
//                     while (this._pending) {
//                         this._pending = false;
//                         this.trigger("change", this, options)
//                     }
//                 }
//                 this._pending = false;
//                 this._changing = false;
//                 return this
//             },
//             unset: function (attr, options) {
//                 return this.set(attr, void 0, _.extend({}, options, {
//                     unset: true
//                 }))
//             },
//             clear: function (options) {
//                 var attrs = {};
//                 for (var key in this.attributes) attrs[key] = void 0;
//                 return this.set(attrs, _.extend({}, options, {
//                     unset: true
//                 }))
//             },
//             hasChanged: function (attr) {
//                 if (attr == null) return !_.isEmpty(this.changed);
//                 return _.has(this.changed, attr)
//             },
//             changedAttributes: function (diff) {
//                 if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
//                 var val, changed = false;
//                 var old = this._changing ? this._previousAttributes : this.attributes;
//                 for (var attr in diff) {
//                     if (_.isEqual(old[attr], val = diff[attr])) continue;
//                     (changed || (changed = {}))[attr] = val
//                 }
//                 return changed
//             },
//             previous: function (attr) {
//                 if (attr == null || !this._previousAttributes) return null;
//                 return this._previousAttributes[attr]
//             },
//             previousAttributes: function () {
//                 return _.clone(this._previousAttributes)
//             },
//             fetch: function (options) {
//                 options = options ? _.clone(options) : {};
//                 if (options.parse === void 0) options.parse = true;
//                 var model = this;
//                 var success = options.success;
//                 options.success = function (resp) {
//                     if (!model.set(model.parse(resp, options), options)) return false;
//                     if (success) success(model, resp, options);
//                     model.trigger("sync", model, resp, options)
//                 };
//                 wrapError(this, options);
//                 return this.sync("read", this, options)
//             },
//             save: function (key, val, options) {
//                 var attrs, method, xhr, attributes = this.attributes;
//                 if (key == null || typeof key === "object") {
//                     attrs = key;
//                     options = val
//                 } else {
//                     (attrs = {})[key] = val
//                 } if (attrs && (!options || !options.wait) && !this.set(attrs, options)) return false;
//                 options = _.extend({
//                     validate: true
//                 }, options);
//                 if (!this._validate(attrs, options)) return false;
//                 if (attrs && options.wait) {
//                     this.attributes = _.extend({}, attributes, attrs)
//                 }
//                 if (options.parse === void 0) options.parse = true;
//                 var model = this;
//                 var success = options.success;
//                 options.success = function (resp) {
//                     model.attributes = attributes;
//                     var serverAttrs = model.parse(resp, options);
//                     if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
//                     if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
//                         return false
//                     }
//                     if (success) success(model, resp, options);
//                     model.trigger("sync", model, resp, options)
//                 };
//                 wrapError(this, options);
//                 method = this.isNew() ? "create" : options.patch ? "patch" : "update";
//                 if (method === "patch") options.attrs = attrs;
//                 xhr = this.sync(method, this, options);
//                 if (attrs && options.wait) this.attributes = attributes;
//                 return xhr
//             },
//             destroy: function (options) {
//                 options = options ? _.clone(options) : {};
//                 var model = this;
//                 var success = options.success;
//                 var destroy = function () {
//                     model.trigger("destroy", model, model.collection, options)
//                 };
//                 options.success = function (resp) {
//                     if (options.wait || model.isNew()) destroy();
//                     if (success) success(model, resp, options);
//                     if (!model.isNew()) model.trigger("sync", model, resp, options)
//                 };
//                 if (this.isNew()) {
//                     options.success();
//                     return false
//                 }
//                 wrapError(this, options);
//                 var xhr = this.sync("delete", this, options);
//                 if (!options.wait) destroy();
//                 return xhr
//             },
//             url: function () {
//                 var base = _.result(this, "urlRoot") || _.result(this.collection, "url") || urlError();
//                 if (this.isNew()) return base;
//                 return base + (base.charAt(base.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
//             },
//             parse: function (resp, options) {
//                 return resp
//             },
//             clone: function () {
//                 return new this.constructor(this.attributes)
//             },
//             isNew: function () {
//                 return this.id == null
//             },
//             isValid: function (options) {
//                 return this._validate({}, _.extend(options || {}, {
//                     validate: true
//                 }))
//             },
//             _validate: function (attrs, options) {
//                 if (!options.validate || !this.validate) return true;
//                 attrs = _.extend({}, this.attributes, attrs);
//                 var error = this.validationError = this.validate(attrs, options) || null;
//                 if (!error) return true;
//                 this.trigger("invalid", this, error, _.extend(options || {}, {
//                     validationError: error
//                 }));
//                 return false
//             }
//         });
//         var modelMethods = ["keys", "values", "pairs", "invert", "pick", "omit"];
//         _.each(modelMethods, function (method) {
//             Model.prototype[method] = function () {
//                 var args = slice.call(arguments);
//                 args.unshift(this.attributes);
//                 return _[method].apply(_, args)
//             }
//         });
//         var Collection = Backbone.Collection = function (models, options) {
//             options || (options = {});
//             if (options.url) this.url = options.url;
//             if (options.model) this.model = options.model;
//             if (options.comparator !== void 0) this.comparator = options.comparator;
//             this._reset();
//             this.initialize.apply(this, arguments);
//             if (models) this.reset(models, _.extend({
//                 silent: true
//             }, options))
//         };
//         var setOptions = {
//             add: true,
//             remove: true,
//             merge: true
//         };
//         var addOptions = {
//             add: true,
//             merge: false,
//             remove: false
//         };
//         _.extend(Collection.prototype, Events, {
//             model: Model,
//             initialize: function () {},
//             toJSON: function (options) {
//                 return this.map(function (model) {
//                     return model.toJSON(options)
//                 })
//             },
//             sync: function () {
//                 return Backbone.sync.apply(this, arguments)
//             },
//             add: function (models, options) {
//                 return this.set(models, _.defaults(options || {}, addOptions))
//             },
//             remove: function (models, options) {
//                 models = _.isArray(models) ? models.slice() : [models];
//                 options || (options = {});
//                 var i, l, index, model;
//                 for (i = 0, l = models.length; i < l; i++) {
//                     model = this.get(models[i]);
//                     if (!model) continue;
//                     delete this._byId[model.id];
//                     delete this._byId[model.cid];
//                     index = this.indexOf(model);
//                     this.models.splice(index, 1);
//                     this.length--;
//                     if (!options.silent) {
//                         options.index = index;
//                         model.trigger("remove", model, this, options)
//                     }
//                     this._removeReference(model)
//                 }
//                 return this
//             },
//             set: function (models, options) {
//                 options = _.defaults(options || {}, setOptions);
//                 if (options.parse) models = this.parse(models, options);
//                 if (!_.isArray(models)) models = models ? [models] : [];
//                 var i, l, model, attrs, existing, sort;
//                 var at = options.at;
//                 var sortable = this.comparator && at == null && options.sort !== false;
//                 var sortAttr = _.isString(this.comparator) ? this.comparator : null;
//                 var toAdd = [],
//                     toRemove = [],
//                     modelMap = {};
//                 for (i = 0, l = models.length; i < l; i++) {
//                     if (!(model = this._prepareModel(models[i], options))) continue;
//                     if (existing = this.get(model)) {
//                         if (options.remove) modelMap[existing.cid] = true;
//                         if (options.merge) {
//                             existing.set(model.attributes, options);
//                             if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true
//                         }
//                     } else if (options.add) {
//                         toAdd.push(model);
//                         model.on("all", this._onModelEvent, this);
//                         this._byId[model.cid] = model;
//                         if (model.id != null) this._byId[model.id] = model
//                     }
//                 }
//                 if (options.remove) {
//                     for (i = 0, l = this.length; i < l; ++i) {
//                         if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model)
//                     }
//                     if (toRemove.length) this.remove(toRemove, options)
//                 }
//                 if (toAdd.length) {
//                     if (sortable) sort = true;
//                     this.length += toAdd.length;
//                     if (at != null) {
//                         splice.apply(this.models, [at, 0].concat(toAdd))
//                     } else {
//                         push.apply(this.models, toAdd)
//                     }
//                 }
//                 if (sort) this.sort({
//                     silent: true
//                 });
//                 if (options.silent) return this;
//                 for (i = 0, l = toAdd.length; i < l; i++) {
//                     (model = toAdd[i]).trigger("add", model, this, options)
//                 }
//                 if (sort) this.trigger("sort", this, options);
//                 return this
//             },
//             reset: function (models, options) {
//                 options || (options = {});
//                 for (var i = 0, l = this.models.length; i < l; i++) {
//                     this._removeReference(this.models[i])
//                 }
//                 options.previousModels = this.models;
//                 this._reset();
//                 this.add(models, _.extend({
//                     silent: true
//                 }, options));
//                 if (!options.silent) this.trigger("reset", this, options);
//                 return this
//             },
//             push: function (model, options) {
//                 model = this._prepareModel(model, options);
//                 this.add(model, _.extend({
//                     at: this.length
//                 }, options));
//                 return model
//             },
//             pop: function (options) {
//                 var model = this.at(this.length - 1);
//                 this.remove(model, options);
//                 return model
//             },
//             unshift: function (model, options) {
//                 model = this._prepareModel(model, options);
//                 this.add(model, _.extend({
//                     at: 0
//                 }, options));
//                 return model
//             },
//             shift: function (options) {
//                 var model = this.at(0);
//                 this.remove(model, options);
//                 return model
//             },
//             slice: function (begin, end) {
//                 return this.models.slice(begin, end)
//             },
//             get: function (obj) {
//                 if (obj == null) return void 0;
//                 return this._byId[obj.id != null ? obj.id : obj.cid || obj]
//             },
//             at: function (index) {
//                 return this.models[index]
//             },
//             where: function (attrs, first) {
//                 if (_.isEmpty(attrs)) return first ? void 0 : [];
//                 return this[first ? "find" : "filter"](function (model) {
//                     for (var key in attrs) {
//                         if (attrs[key] !== model.get(key)) return false
//                     }
//                     return true
//                 })
//             },
//             findWhere: function (attrs) {
//                 return this.where(attrs, true)
//             },
//             sort: function (options) {
//                 if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
//                 options || (options = {});
//                 if (_.isString(this.comparator) || this.comparator.length === 1) {
//                     this.models = this.sortBy(this.comparator, this)
//                 } else {
//                     this.models.sort(_.bind(this.comparator, this))
//                 } if (!options.silent) this.trigger("sort", this, options);
//                 return this
//             },
//             sortedIndex: function (model, value, context) {
//                 value || (value = this.comparator);
//                 var iterator = _.isFunction(value) ? value : function (model) {
//                         return model.get(value)
//                     };
//                 return _.sortedIndex(this.models, model, iterator, context)
//             },
//             pluck: function (attr) {
//                 return _.invoke(this.models, "get", attr)
//             },
//             fetch: function (options) {
//                 options = options ? _.clone(options) : {};
//                 if (options.parse === void 0) options.parse = true;
//                 var success = options.success;
//                 var collection = this;
//                 options.success = function (resp) {
//                     var method = options.reset ? "reset" : "set";
//                     collection[method](resp, options);
//                     if (success) success(collection, resp, options);
//                     collection.trigger("sync", collection, resp, options)
//                 };
//                 wrapError(this, options);
//                 return this.sync("read", this, options)
//             },
//             create: function (model, options) {
//                 options = options ? _.clone(options) : {};
//                 if (!(model = this._prepareModel(model, options))) return false;
//                 if (!options.wait) this.add(model, options);
//                 var collection = this;
//                 var success = options.success;
//                 options.success = function (resp) {
//                     if (options.wait) collection.add(model, options);
//                     if (success) success(model, resp, options)
//                 };
//                 model.save(null, options);
//                 return model
//             },
//             parse: function (resp, options) {
//                 return resp
//             },
//             clone: function () {
//                 return new this.constructor(this.models)
//             },
//             _reset: function () {
//                 this.length = 0;
//                 this.models = [];
//                 this._byId = {}
//             },
//             _prepareModel: function (attrs, options) {
//                 if (attrs instanceof Model) {
//                     if (!attrs.collection) attrs.collection = this;
//                     return attrs
//                 }
//                 options || (options = {});
//                 options.collection = this;
//                 var model = new this.model(attrs, options);
//                 if (!model._validate(attrs, options)) {
//                     this.trigger("invalid", this, attrs, options);
//                     return false
//                 }
//                 return model
//             },
//             _removeReference: function (model) {
//                 if (this === model.collection) delete model.collection;
//                 model.off("all", this._onModelEvent, this)
//             },
//             _onModelEvent: function (event, model, collection, options) {
//                 if ((event === "add" || event === "remove") && collection !== this) return;
//                 if (event === "destroy") this.remove(model, options);
//                 if (model && event === "change:" + model.idAttribute) {
//                     delete this._byId[model.previous(model.idAttribute)];
//                     if (model.id != null) this._byId[model.id] = model
//                 }
//                 this.trigger.apply(this, arguments)
//             }
//         });
//         var methods = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
//         _.each(methods, function (method) {
//             Collection.prototype[method] = function () {
//                 var args = slice.call(arguments);
//                 args.unshift(this.models);
//                 return _[method].apply(_, args)
//             }
//         });
//         var attributeMethods = ["groupBy", "countBy", "sortBy"];
//         _.each(attributeMethods, function (method) {
//             Collection.prototype[method] = function (value, context) {
//                 var iterator = _.isFunction(value) ? value : function (model) {
//                         return model.get(value)
//                     };
//                 return _[method](this.models, iterator, context)
//             }
//         });
//         var View = Backbone.View = function (options) {
//             this.cid = _.uniqueId("view");
//             this._configure(options || {});
//             this._ensureElement();
//             this.initialize.apply(this, arguments);
//             this.delegateEvents()
//         };
//         var delegateEventSplitter = /^(\S+)\s*(.*)$/;
//         var viewOptions = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
//         _.extend(View.prototype, Events, {
//             tagName: "div",
//             $: function (selector) {
//                 return this.$el.find(selector)
//             },
//             initialize: function () {},
//             render: function () {
//                 return this
//             },
//             remove: function () {
//                 this.$el.remove();
//                 this.stopListening();
//                 return this
//             },
//             setElement: function (element, delegate) {
//                 if (this.$el) this.undelegateEvents();
//                 this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
//                 this.el = this.$el[0];
//                 if (delegate !== false) this.delegateEvents();
//                 return this
//             },
//             delegateEvents: function (events) {
//                 if (!(events || (events = _.result(this, "events")))) return this;
//                 this.undelegateEvents();
//                 for (var key in events) {
//                     var method = events[key];
//                     if (!_.isFunction(method)) method = this[events[key]];
//                     if (!method) continue;
//                     var match = key.match(delegateEventSplitter);
//                     var eventName = match[1],
//                         selector = match[2];
//                     method = _.bind(method, this);
//                     eventName += ".delegateEvents" + this.cid;
//                     if (selector === "") {
//                         this.$el.on(eventName, method)
//                     } else {
//                         this.$el.on(eventName, selector, method)
//                     }
//                 }
//                 return this
//             },
//             undelegateEvents: function () {
//                 this.$el.off(".delegateEvents" + this.cid);
//                 return this
//             },
//             _configure: function (options) {
//                 if (this.options) options = _.extend({}, _.result(this, "options"), options);
//                 _.extend(this, _.pick(options, viewOptions));
//                 this.options = options
//             },
//             _ensureElement: function () {
//                 if (!this.el) {
//                     var attrs = _.extend({}, _.result(this, "attributes"));
//                     if (this.id) attrs.id = _.result(this, "id");
//                     if (this.className) attrs["class"] = _.result(this, "className");
//                     var $el = Backbone.$("<" + _.result(this, "tagName") + ">").attr(attrs);
//                     this.setElement($el, false)
//                 } else {
//                     this.setElement(_.result(this, "el"), false)
//                 }
//             }
//         });
//         Backbone.sync = function (method, model, options) {
//             var type = methodMap[method];
//             _.defaults(options || (options = {}), {
//                 emulateHTTP: Backbone.emulateHTTP,
//                 emulateJSON: Backbone.emulateJSON
//             });
//             var params = {
//                 type: type,
//                 dataType: "json"
//             };
//             if (!options.url) {
//                 params.url = _.result(model, "url") || urlError()
//             }
//             if (options.data == null && model && (method === "create" || method === "update" || method === "patch")) {
//                 params.contentType = "application/json";
//                 params.data = JSON.stringify(options.attrs || model.toJSON(options))
//             }
//             if (options.emulateJSON) {
//                 params.contentType = "application/x-www-form-urlencoded";
//                 params.data = params.data ? {
//                     model: params.data
//                 } : {}
//             }
//             if (options.emulateHTTP && (type === "PUT" || type === "DELETE" || type === "PATCH")) {
//                 params.type = "POST";
//                 if (options.emulateJSON) params.data._method = type;
//                 var beforeSend = options.beforeSend;
//                 options.beforeSend = function (xhr) {
//                     xhr.setRequestHeader("X-HTTP-Method-Override", type);
//                     if (beforeSend) return beforeSend.apply(this, arguments)
//                 }
//             }
//             if (params.type !== "GET" && !options.emulateJSON) {
//                 params.processData = false
//             }
//             if (params.type === "PATCH" && window.ActiveXObject && !(window.external && window.external.msActiveXFilteringEnabled)) {
//                 params.xhr = function () {
//                     return new ActiveXObject("Microsoft.XMLHTTP")
//                 }
//             }
//             var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
//             model.trigger("request", model, xhr, options);
//             return xhr
//         };
//         var methodMap = {
//             create: "POST",
//             update: "PUT",
//             patch: "PATCH",
//             "delete": "DELETE",
//             read: "GET"
//         };
//         Backbone.ajax = function () {
//             return Backbone.$.ajax.apply(Backbone.$, arguments)
//         };
//         var Router = Backbone.Router = function (options) {
//             options || (options = {});
//             if (options.routes) this.routes = options.routes;
//             this._bindRoutes();
//             this.initialize.apply(this, arguments)
//         };
//         var optionalParam = /\((.*?)\)/g;
//         var namedParam = /(\(\?)?:\w+/g;
//         var splatParam = /\*\w+/g;
//         var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
//         _.extend(Router.prototype, Events, {
//             initialize: function () {},
//             route: function (route, name, callback) {
//                 if (!_.isRegExp(route)) route = this._routeToRegExp(route);
//                 if (_.isFunction(name)) {
//                     callback = name;
//                     name = ""
//                 }
//                 if (!callback) callback = this[name];
//                 var router = this;
//                 Backbone.history.route(route, function (fragment) {
//                     var args = router._extractParameters(route, fragment);
//                     callback && callback.apply(router, args);
//                     router.trigger.apply(router, ["route:" + name].concat(args));
//                     router.trigger("route", name, args);
//                     Backbone.history.trigger("route", router, name, args)
//                 });
//                 return this
//             },
//             navigate: function (fragment, options) {
//                 Backbone.history.navigate(fragment, options);
//                 return this
//             },
//             _bindRoutes: function () {
//                 if (!this.routes) return;
//                 this.routes = _.result(this, "routes");
//                 var route, routes = _.keys(this.routes);
//                 while ((route = routes.pop()) != null) {
//                     this.route(route, this.routes[route])
//                 }
//             },
//             _routeToRegExp: function (route) {
//                 route = route.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, function (match, optional) {
//                     return optional ? match : "([^/]+)"
//                 }).replace(splatParam, "(.*?)");
//                 return new RegExp("^" + route + "$")
//             },
//             _extractParameters: function (route, fragment) {
//                 var params = route.exec(fragment).slice(1);
//                 return _.map(params, function (param) {
//                     return param ? decodeURIComponent(param) : null
//                 })
//             }
//         });
//         var History = Backbone.History = function () {
//             this.handlers = [];
//             _.bindAll(this, "checkUrl");
//             if (typeof window !== "undefined") {
//                 this.location = window.location;
//                 this.history = window.history
//             }
//         };
//         var routeStripper = /^[#\/]|\s+$/g;
//         var rootStripper = /^\/+|\/+$/g;
//         var isExplorer = /msie [\w.]+/;
//         var trailingSlash = /\/$/;
//         History.started = false;
//         _.extend(History.prototype, Events, {
//             interval: 50,
//             getHash: function (window) {
//                 var match = (window || this).location.href.match(/#(.*)$/);
//                 return match ? match[1] : ""
//             },
//             getFragment: function (fragment, forcePushState) {
//                 if (fragment == null) {
//                     if (this._hasPushState || !this._wantsHashChange || forcePushState) {
//                         fragment = this.location.pathname;
//                         var root = this.root.replace(trailingSlash, "");
//                         if (!fragment.indexOf(root)) fragment = fragment.substr(root.length)
//                     } else {
//                         fragment = this.getHash()
//                     }
//                 }
//                 return fragment.replace(routeStripper, "")
//             },
//             start: function (options) {
//                 if (History.started) throw new Error("Backbone.history has already been started");
//                 History.started = true;
//                 this.options = _.extend({}, {
//                     root: "/"
//                 }, this.options, options);
//                 this.root = this.options.root;
//                 this._wantsHashChange = this.options.hashChange !== false;
//                 this._wantsPushState = !! this.options.pushState;
//                 this._hasPushState = !! (this.options.pushState && this.history && this.history.pushState);
//                 var fragment = this.getFragment();
//                 var docMode = document.documentMode;
//                 var oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7);
//                 this.root = ("/" + this.root + "/").replace(rootStripper, "/");
//                 if (oldIE && this._wantsHashChange) {
//                     this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
//                     this.navigate(fragment)
//                 }
//                 if (this._hasPushState) {
//                     Backbone.$(window).on("popstate", this.checkUrl)
//                 } else if (this._wantsHashChange && "onhashchange" in window && !oldIE) {
//                     Backbone.$(window).on("hashchange", this.checkUrl)
//                 } else if (this._wantsHashChange) {
//                     this._checkUrlInterval = setInterval(this.checkUrl, this.interval)
//                 }
//                 this.fragment = fragment;
//                 var loc = this.location;
//                 var atRoot = loc.pathname.replace(/[^\/]$/, "$&/") === this.root;
//                 if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
//                     this.fragment = this.getFragment(null, true);
//                     this.location.replace(this.root + this.location.search + "#" + this.fragment);
//                     return true
//                 } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
//                     this.fragment = this.getHash().replace(routeStripper, "");
//                     this.history.replaceState({}, document.title, this.root + this.fragment + loc.search)
//                 }
//                 if (!this.options.silent) return this.loadUrl()
//             },
//             stop: function () {
//                 Backbone.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
//                 clearInterval(this._checkUrlInterval);
//                 History.started = false
//             },
//             route: function (route, callback) {
//                 this.handlers.unshift({
//                     route: route,
//                     callback: callback
//                 })
//             },
//             checkUrl: function (e) {
//                 var current = this.getFragment();
//                 if (current === this.fragment && this.iframe) {
//                     current = this.getFragment(this.getHash(this.iframe))
//                 }
//                 if (current === this.fragment) return false;
//                 if (this.iframe) this.navigate(current);
//                 this.loadUrl() || this.loadUrl(this.getHash())
//             },
//             loadUrl: function (fragmentOverride) {
//                 var fragment = this.fragment = this.getFragment(fragmentOverride);
//                 var matched = _.any(this.handlers, function (handler) {
//                     if (handler.route.test(fragment)) {
//                         handler.callback(fragment);
//                         return true
//                     }
//                 });
//                 return matched
//             },
//             navigate: function (fragment, options) {
//                 if (!History.started) return false;
//                 if (!options || options === true) options = {
//                     trigger: options
//                 };
//                 fragment = this.getFragment(fragment || "");
//                 if (this.fragment === fragment) return;
//                 this.fragment = fragment;
//                 var url = this.root + fragment;
//                 if (this._hasPushState) {
//                     this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url)
//                 } else if (this._wantsHashChange) {
//                     this._updateHash(this.location, fragment, options.replace);
//                     if (this.iframe && fragment !== this.getFragment(this.getHash(this.iframe))) {
//                         if (!options.replace) this.iframe.document.open().close();
//                         this._updateHash(this.iframe.location, fragment, options.replace)
//                     }
//                 } else {
//                     return this.location.assign(url)
//                 } if (options.trigger) this.loadUrl(fragment)
//             },
//             _updateHash: function (location, fragment, replace) {
//                 if (replace) {
//                     var href = location.href.replace(/(javascript:|#).*$/, "");
//                     location.replace(href + "#" + fragment)
//                 } else {
//                     location.hash = "#" + fragment
//                 }
//             }
//         });
//         Backbone.history = new History;
//         var extend = function (protoProps, staticProps) {
//             var parent = this;
//             var child;
//             if (protoProps && _.has(protoProps, "constructor")) {
//                 child = protoProps.constructor
//             } else {
//                 child = function () {
//                     return parent.apply(this, arguments)
//                 }
//             }
//             _.extend(child, parent, staticProps);
//             var Surrogate = function () {
//                 this.constructor = child
//             };
//             Surrogate.prototype = parent.prototype;
//             child.prototype = new Surrogate;
//             if (protoProps) _.extend(child.prototype, protoProps);
//             child.__super__ = parent.prototype;
//             return child
//         };
//         Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
//         var urlError = function () {
//             throw new Error('A "url" property or function must be specified')
//         };
//         var wrapError = function (model, options) {
//             var error = options.error;
//             options.error = function (resp) {
//                 if (error) error(model, resp, options);
//                 model.trigger("error", model, resp, options)
//             }
//         }
//     }).call(this);
//     Backbone.Wreqr = function (Backbone, Marionette, _) {
//         "use strict";
//         var Wreqr = {};
//         Wreqr.Handlers = function (Backbone, _) {
//             "use strict";
//             var Handlers = function (options) {
//                 this.options = options;
//                 this._wreqrHandlers = {};
//                 if (_.isFunction(this.initialize)) {
//                     this.initialize(options)
//                 }
//             };
//             Handlers.extend = Backbone.Model.extend;
//             _.extend(Handlers.prototype, Backbone.Events, {
//                 setHandlers: function (handlers) {
//                     _.each(handlers, function (handler, name) {
//                         var context = null;
//                         if (_.isObject(handler) && !_.isFunction(handler)) {
//                             context = handler.context;
//                             handler = handler.callback
//                         }
//                         this.setHandler(name, handler, context)
//                     }, this)
//                 },
//                 setHandler: function (name, handler, context) {
//                     var config = {
//                         callback: handler,
//                         context: context
//                     };
//                     this._wreqrHandlers[name] = config;
//                     this.trigger("handler:add", name, handler, context)
//                 },
//                 hasHandler: function (name) {
//                     return !!this._wreqrHandlers[name]
//                 },
//                 getHandler: function (name) {
//                     var config = this._wreqrHandlers[name];
//                     if (!config) {
//                         throw new Error("Handler not found for '" + name + "'")
//                     }
//                     return function () {
//                         var args = Array.prototype.slice.apply(arguments);
//                         return config.callback.apply(config.context, args)
//                     }
//                 },
//                 removeHandler: function (name) {
//                     delete this._wreqrHandlers[name]
//                 },
//                 removeAllHandlers: function () {
//                     this._wreqrHandlers = {}
//                 }
//             });
//             return Handlers
//         }(Backbone, _);
//         Wreqr.CommandStorage = function () {
//             "use strict";
//             var CommandStorage = function (options) {
//                 this.options = options;
//                 this._commands = {};
//                 if (_.isFunction(this.initialize)) {
//                     this.initialize(options)
//                 }
//             };
//             _.extend(CommandStorage.prototype, Backbone.Events, {
//                 getCommands: function (commandName) {
//                     var commands = this._commands[commandName];
//                     if (!commands) {
//                         commands = {
//                             command: commandName,
//                             instances: []
//                         };
//                         this._commands[commandName] = commands
//                     }
//                     return commands
//                 },
//                 addCommand: function (commandName, args) {
//                     var command = this.getCommands(commandName);
//                     command.instances.push(args)
//                 },
//                 clearCommands: function (commandName) {
//                     var command = this.getCommands(commandName);
//                     command.instances = []
//                 }
//             });
//             return CommandStorage
//         }();
//         Wreqr.Commands = function (Wreqr) {
//             "use strict";
//             return Wreqr.Handlers.extend({
//                 storageType: Wreqr.CommandStorage,
//                 constructor: function (options) {
//                     this.options = options || {};
//                     this._initializeStorage(this.options);
//                     this.on("handler:add", this._executeCommands, this);
//                     var args = Array.prototype.slice.call(arguments);
//                     Wreqr.Handlers.prototype.constructor.apply(this, args)
//                 },
//                 execute: function (name, args) {
//                     name = arguments[0];
//                     args = Array.prototype.slice.call(arguments, 1);
//                     if (this.hasHandler(name)) {
//                         this.getHandler(name).apply(this, args)
//                     } else {
//                         this.storage.addCommand(name, args)
//                     }
//                 },
//                 _executeCommands: function (name, handler, context) {
//                     var command = this.storage.getCommands(name);
//                     _.each(command.instances, function (args) {
//                         handler.apply(context, args)
//                     });
//                     this.storage.clearCommands(name)
//                 },
//                 _initializeStorage: function (options) {
//                     var storage;
//                     var StorageType = options.storageType || this.storageType;
//                     if (_.isFunction(StorageType)) {
//                         storage = new StorageType
//                     } else {
//                         storage = StorageType
//                     }
//                     this.storage = storage
//                 }
//             })
//         }(Wreqr);
//         Wreqr.RequestResponse = function (Wreqr) {
//             "use strict";
//             return Wreqr.Handlers.extend({
//                 request: function () {
//                     var name = arguments[0];
//                     var args = Array.prototype.slice.call(arguments, 1);
//                     return this.getHandler(name).apply(this, args)
//                 }
//             })
//         }(Wreqr);
//         Wreqr.EventAggregator = function (Backbone, _) {
//             "use strict";
//             var EA = function () {};
//             EA.extend = Backbone.Model.extend;
//             _.extend(EA.prototype, Backbone.Events);
//             return EA
//         }(Backbone, _);
//         return Wreqr
//     }(Backbone, Backbone.Marionette, _);
//     (function (root, name, factory) {
//         var dep = root["jQuery"] || root["Zepto"] || root["ender"] || root["elo"];
//         if (typeof module != "undefined" && module["exports"]) {
//             module["exports"] = factory(dep)
//         } else {
//             root[name] = factory(dep)
//         }
//     })(this, "Response", function ($) {
//         if (typeof $ != "function") {
//             try {
//                 console.log("Response was unable to run due to missing dependency.")
//             } catch (e) {}
//         }
//         var Response, root = this,
//             name = "Response",
//             old = root[name],
//             initContentKey = "init" + name,
//             win = window,
//             doc = document,
//             docElem = doc.documentElement,
//             ready = $.domReady || $,
//             $win = $(win),
//             screen = win.screen,
//             owns = {}.hasOwnProperty,
//             slice = [].slice,
//             concat = [].concat,
//             nativeMap = [].map,
//             isArray = Array.isArray || function (ukn) {
//                 return ukn instanceof Array
//             }, map = nativeMap ? function (ob, fn, scope) {
//                 return nativeMap.call(ob, fn, scope)
//             } : function (ob, fn, scope) {
//                 var i, l = ob.length,
//                     ret = [];
//                 for (i = 0; i < l; i++) {
//                     i in ob && (ret[i] = fn.call(scope, ob[i], i, ob))
//                 }
//                 return ret
//             }, defaultBreakpoints = {
//                 width: [0, 320, 481, 641, 961, 1025, 1281],
//                 height: [0, 481],
//                 ratio: [1, 1.5, 2]
//             }, Elemset, band, wave, device = {}, propTests = {}, isCustom = {}, sets = {
//                 all: []
//             }, suid = 1,
//             screenW = screen.width,
//             screenH = screen.height,
//             screenMax = screenW > screenH ? screenW : screenH,
//             screenMin = screenW + screenH - screenMax,
//             deviceW = function () {
//                 return screenW
//             }, deviceH = function () {
//                 return screenH
//             }, regexFunkyPunc = /[^a-z0-9_\-\.]/gi,
//             regexTrimPunc = /^[\W\s]+|[\W\s]+$|/g,
//             regexCamels = /([a-z])([A-Z])/g,
//             regexDashB4 = /-(.)/g,
//             regexDataPrefix = /^data-(.+)$/,
//             objectCreate = Object.create || function (proto) {
//                 function Type() {}
//                 Type.prototype = proto;
//                 return new Type
//             }, namespaceIt = function (eventName, customNamespace) {
//                 customNamespace = customNamespace || name;
//                 return eventName.replace(regexTrimPunc, "") + "." + customNamespace.replace(regexTrimPunc, "")
//             }, event = {
//                 allLoaded: namespaceIt("allLoaded"),
//                 crossover: namespaceIt("crossover")
//             }, matchMedia = win.matchMedia || win.msMatchMedia,
//             media = matchMedia || function () {
//                 return {}
//             }, viewportW = function (win, docElem, mM) {
//                 var client = docElem["clientWidth"],
//                     inner = win["innerWidth"];
//                 return mM && client < inner && true === mM("(min-width:" + inner + "px)")["matches"] ? function () {
//                     return win["innerWidth"]
//                 } : function () {
//                     return docElem["clientWidth"]
//                 }
//             }(win, docElem, matchMedia),
//             viewportH = function (win, docElem, mM) {
//                 var client = docElem["clientHeight"],
//                     inner = win["innerHeight"];
//                 return mM && client < inner && true === mM("(min-height:" + inner + "px)")["matches"] ? function () {
//                     return win["innerHeight"]
//                 } : function () {
//                     return docElem["clientHeight"]
//                 }
//             }(win, docElem, matchMedia);

//         function doError(msg) {
//             throw new TypeError(msg ? name + "." + msg : name)
//         }

//         function isNumber(item) {
//             return typeof item == "number" && item === item
//         }

//         function ssvToArr(ukn) {
//             return typeof ukn == "string" ? sift(ukn.split(" ")) : isArray(ukn) ? sift(ukn) : []
//         }

//         function each(ob, callback, scope) {
//             if (null == ob) {
//                 return ob
//             }
//             var i = 0,
//                 len = ob.length;
//             while (i < len) {
//                 callback.call(scope || ob[i], ob[i], i++, ob)
//             }
//             return ob
//         }

//         function affix(arr, prefix, suffix) {
//             var r = [],
//                 l = arr.length,
//                 i = 0,
//                 v;
//             prefix = prefix || "";
//             suffix = suffix || "";
//             while (i < l) {
//                 v = arr[i++];
//                 null == v || r.push(prefix + v + suffix)
//             }
//             return r
//         }

//         function sift(ob, fn, scope) {
//             var l, u = 0,
//                 i = 0,
//                 v, ret = [],
//                 invert, isF = typeof fn == "function";
//             if (!ob) {
//                 return ret
//             }
//             scope = (invert = true === scope) ? null : scope;
//             for (l = ob.length; i < l; i++) {
//                 v = ob[i];
//                 invert === !(isF ? fn.call(scope, v, i, ob) : fn ? typeof v === fn : v) && (ret[u++] = v)
//             }
//             return ret
//         }

//         function merge(base, adds) {
//             var k, l;
//             if (!base || !adds) {
//                 return base
//             }
//             if (typeof adds != "function" && isNumber(l = adds.length)) {
//                 for (k = 0; k < l; k++) {
//                     void 0 === adds[k] || (base[k] = adds[k])
//                 }
//                 base.length > k || (base.length = k)
//             } else {
//                 for (k in adds) {
//                     owns.call(adds, k) && void 0 !== adds[k] && (base[k] = adds[k])
//                 }
//             }
//             return base
//         }

//         function route(item, fn, scope) {
//             if (null == item) {
//                 return item
//             }
//             if (typeof item == "object" && !item.nodeType && isNumber(item.length)) {
//                 each(item, fn, scope)
//             } else {
//                 fn.call(scope || item, item)
//             }
//             return item
//         }

//         function ranger(fn) {
//             return function (min, max) {
//                 var n = fn();
//                 min = n >= (min || 0);
//                 return max ? min && n <= max : min
//             }
//         }
//         band = ranger(viewportW);
//         wave = ranger(viewportH);
//         device.band = ranger(deviceW);
//         device.wave = ranger(deviceH);

//         function dpr(decimal) {
//             var dPR = win.devicePixelRatio;
//             if (null == decimal) {
//                 return dPR || (dpr(2) ? 2 : dpr(1.5) ? 1.5 : dpr(1) ? 1 : 0)
//             }
//             if (!isFinite(decimal)) {
//                 return false
//             }
//             if (dPR && dPR > 0) {
//                 return dPR >= decimal
//             }
//             decimal = "only all and (min--moz-device-pixel-ratio:" + decimal + ")";
//             if (media(decimal).matches) {
//                 return true
//             }
//             return !!media(decimal.replace("-moz-", "")).matches
//         }

//         function camelize(s) {
//             return s.replace(regexDataPrefix, "$1").replace(regexDashB4, function (m, m1) {
//                 return m1.toUpperCase()
//             })
//         }

//         function datatize(s) {
//             return "data-" + (s ? s.replace(regexDataPrefix, "$1").replace(regexCamels, "$1-$2").toLowerCase() : s)
//         }

//         function render(s) {
//             var n;
//             return !s || typeof s != "string" ? s : "true" === s ? true : "false" === s ? false : "undefined" === s ? n : "null" === s ? null : (n = parseFloat(s)) === +n ? n : s
//         }

//         function getNative(e) {
//             return !e ? false : e.nodeType === 1 ? e : e[0] && e[0].nodeType === 1 ? e[0] : false
//         }

//         function datasetChainable(key, value) {
//             var numOfArgs = arguments.length,
//                 elem = getNative(this),
//                 ret = {}, renderData = false,
//                 n;
//             if (numOfArgs) {
//                 if (isArray(key)) {
//                     renderData = true;
//                     key = key[0]
//                 }
//                 if (typeof key === "string") {
//                     key = datatize(key);
//                     if (1 === numOfArgs) {
//                         ret = elem.getAttribute(key);
//                         return renderData ? render(ret) : ret
//                     }
//                     if (this === elem || 2 > (n = this.length || 1)) {
//                         elem.setAttribute(key, value)
//                     } else {
//                         while (n--) {
//                             if (n in this) {
//                                 datasetChainable.apply(this[n], arguments)
//                             }
//                         }
//                     }
//                 } else if (key instanceof Object) {
//                     for (n in key) {
//                         key.hasOwnProperty(n) && datasetChainable.call(this, n, key[n])
//                     }
//                 }
//                 return this
//             }
//             if (elem.dataset && DOMStringMap) {
//                 return elem.dataset
//             }
//             each(elem.attributes, function (a) {
//                 if (a && (n = String(a.name).match(regexDataPrefix))) {
//                     ret[camelize(n[1])] = a.value
//                 }
//             });
//             return ret
//         }

//         function deletesChainable(keys) {
//             if (this && typeof keys === "string") {
//                 keys = ssvToArr(keys);
//                 route(this, function (el) {
//                     each(keys, function (key) {
//                         if (key) {
//                             el.removeAttribute(datatize(key))
//                         }
//                     })
//                 })
//             }
//             return this
//         }

//         function dataset(elem, key, value) {
//             return datasetChainable.apply(elem, slice.call(arguments, 1))
//         }

//         function deletes(elem, keys) {
//             return deletesChainable.call(elem, keys)
//         }

//         function selectify(keys) {
//             var k, r = [],
//                 i = 0,
//                 l = keys.length;
//             while (i < l) {
//                 (k = keys[i++]) && r.push("[" + datatize(k.replace(regexTrimPunc, "").replace(".", "\\.")) + "]")
//             }
//             return r.join()
//         }

//         function target(keys) {
//             return $(selectify(ssvToArr(keys)))
//         }

//         function scrollX() {
//             return window.pageXOffset || docElem.scrollLeft
//         }

//         function scrollY() {
//             return window.pageYOffset || docElem.scrollTop
//         }

//         function rectangle(el, verge) {
//             var r = el.getBoundingClientRect ? el.getBoundingClientRect() : {};
//             verge = typeof verge == "number" ? verge || 0 : 0;
//             return {
//                 top: (r.top || 0) - verge,
//                 left: (r.left || 0) - verge,
//                 bottom: (r.bottom || 0) + verge,
//                 right: (r.right || 0) + verge
//             }
//         }

//         function inX(elem, verge) {
//             var r = rectangle(getNative(elem), verge);
//             return !!r && r.right >= 0 && r.left <= viewportW()
//         }

//         function inY(elem, verge) {
//             var r = rectangle(getNative(elem), verge);
//             return !!r && r.bottom >= 0 && r.top <= viewportH()
//         }

//         function inViewport(elem, verge) {
//             var r = rectangle(getNative(elem), verge);
//             return !!r && r.bottom >= 0 && r.top <= viewportH() && r.right >= 0 && r.left <= viewportW()
//         }

//         function detectMode(elem) {
//             var srcElems = {
//                 img: 1,
//                 input: 1,
//                 source: 3,
//                 embed: 3,
//                 track: 3,
//                 iframe: 5,
//                 audio: 5,
//                 video: 5,
//                 script: 5
//             }, modeID = srcElems[elem.nodeName.toLowerCase()] || -1;
//             return 4 > modeID ? modeID : null != elem.getAttribute("src") ? 5 : -5
//         }

//         function store($elems, key, source) {
//             var valToStore;
//             if (!$elems || null == key) {
//                 doError("store")
//             }
//             source = typeof source == "string" && source;
//             route($elems, function (el) {
//                 if (source) {
//                     valToStore = el.getAttribute(source)
//                 } else if (0 < detectMode(el)) {
//                     valToStore = el.getAttribute("src")
//                 } else {
//                     valToStore = el.innerHTML
//                 }
//                 null == valToStore ? deletes(el, key) : dataset(el, key, valToStore)
//             });
//             return Response
//         }

//         function access(elem, keys) {
//             var ret = [];
//             elem && keys && each(ssvToArr(keys), function (k, i) {
//                 ret.push(dataset(elem, k))
//             }, elem);
//             return ret
//         }

//         function addTest(prop, fn) {
//             if (typeof prop == "string" && typeof fn == "function") {
//                 propTests[prop] = fn;
//                 isCustom[prop] = 1
//             }
//             return Response
//         }
//         Elemset = function () {
//             var crossover = event.crossover,
//                 min = Math.min;

//             function sanitize(key) {
//                 return typeof key == "string" ? key.toLowerCase().replace(regexFunkyPunc, "") : ""
//             }
//             return {
//                 $e: 0,
//                 mode: 0,
//                 breakpoints: null,
//                 prefix: null,
//                 prop: "width",
//                 keys: [],
//                 dynamic: null,
//                 custom: 0,
//                 values: [],
//                 fn: 0,
//                 verge: null,
//                 newValue: 0,
//                 currValue: 1,
//                 aka: null,
//                 lazy: null,
//                 i: 0,
//                 uid: null,
//                 reset: function () {
//                     var subjects = this.breakpoints,
//                         i = subjects.length,
//                         tempIndex = 0;
//                     while (!tempIndex && i--) {
//                         this.fn(subjects[i]) && (tempIndex = i)
//                     }
//                     if (tempIndex !== this.i) {
//                         $win.trigger(crossover).trigger(this.prop + crossover);
//                         this.i = tempIndex || 0
//                     }
//                     return this
//                 },
//                 configure: function (options) {
//                     merge(this, options);
//                     var i, prefix, aliases, aliasKeys, isNumeric = true,
//                         arr, prop = this.prop;
//                     this.uid = suid++;
//                     this.verge = isFinite(this.verge) ? this.verge : min(screenMax, 500);
//                     this.fn = propTests[prop] || doError("create @fn");
//                     if (typeof this.dynamic != "boolean") {
//                         this.dynamic = !! ("device" !== prop.substring(0, 6))
//                     }
//                     this.custom = isCustom[prop];
//                     prefix = this.prefix ? sift(map(ssvToArr(this.prefix), sanitize)) : ["min-" + prop + "-"];
//                     aliases = 1 < prefix.length ? prefix.slice(1) : 0;
//                     this.prefix = prefix[0];
//                     arr = this.breakpoints;
//                     if (isArray(arr)) {
//                         each(arr, function (v) {
//                             if (!v && v !== 0) {
//                                 throw "invalid breakpoint"
//                             }
//                             isNumeric = isNumeric && isFinite(v)
//                         });
//                         arr = isNumeric ? arr.sort(function (a, b) {
//                             return a - b
//                         }) : arr;
//                         arr.length || doError("create @breakpoints")
//                     } else {
//                         arr = defaultBreakpoints[prop] || defaultBreakpoints[prop.split("-").pop()] || doError("create @prop")
//                     }
//                     this.breakpoints = isNumeric ? sift(arr, function (n) {
//                         return n <= screenMax
//                     }) : arr;
//                     this.keys = affix(this.breakpoints, this.prefix);
//                     this.aka = null;
//                     if (aliases) {
//                         aliasKeys = [];
//                         i = aliases.length;
//                         while (i--) {
//                             aliasKeys.push(affix(this.breakpoints, aliases[i]))
//                         }
//                         this.aka = aliasKeys;
//                         this.keys = concat.apply(this.keys, aliasKeys)
//                     }
//                     sets.all = sets.all.concat(sets[this.uid] = this.keys);
//                     return this
//                 },
//                 target: function () {
//                     this.$e = $(selectify(sets[this.uid]));
//                     store(this.$e, initContentKey);
//                     this.keys.push(initContentKey);
//                     return this
//                 },
//                 decideValue: function () {
//                     var val = null,
//                         subjects = this.breakpoints,
//                         sL = subjects.length,
//                         i = sL;
//                     while (val == null && i--) {
//                         this.fn(subjects[i]) && (val = this.values[i])
//                     }
//                     this.newValue = typeof val === "string" ? val : this.values[sL];
//                     return this
//                 },
//                 prepareData: function (elem) {
//                     this.$e = $(elem);
//                     this.mode = detectMode(elem);
//                     this.values = access(this.$e, this.keys);
//                     if (this.aka) {
//                         var i = this.aka.length;
//                         while (i--) {
//                             this.values = merge(this.values, access(this.$e, this.aka[i]))
//                         }
//                     }
//                     return this.decideValue()
//                 },
//                 updateDOM: function () {
//                     if (this.currValue === this.newValue) {
//                         return this
//                     }
//                     this.currValue = this.newValue;
//                     if (0 < this.mode) {
//                         this.$e[0].setAttribute("src", this.newValue)
//                     } else if (null == this.newValue) {
//                         this.$e.empty && this.$e.empty()
//                     } else {
//                         if (this.$e.html) {
//                             this.$e.html(this.newValue)
//                         } else {
//                             this.$e.empty && this.$e.empty();
//                             this.$e[0].innerHTML = this.newValue
//                         }
//                     }
//                     return this
//                 }
//             }
//         }();
//         propTests["width"] = band;
//         propTests["height"] = wave;
//         propTests["device-width"] = device.band;
//         propTests["device-height"] = device.wave;
//         propTests["device-pixel-ratio"] = dpr;

//         function resize(fn) {
//             $win.on("resize", fn);
//             return Response
//         }

//         function crossover(prop, fn) {
//             var temp, eventToFire, eventCrossover = event.crossover;
//             if (typeof prop == "function") {
//                 temp = fn;
//                 fn = prop;
//                 prop = temp
//             }
//             eventToFire = prop ? "" + prop + eventCrossover : eventCrossover;
//             $win.on(eventToFire, fn);
//             return Response
//         }

//         function action(fnOrArr) {
//             route(fnOrArr, function (fn) {
//                 ready(fn);
//                 resize(fn)
//             });
//             return Response
//         }

//         function create(args) {
//             route(args, function (options) {
//                 typeof options == "object" || doError("create @args");
//                 var elemset = objectCreate(Elemset).configure(options),
//                     lowestNonZeroBP, verge = elemset.verge,
//                     breakpoints = elemset.breakpoints,
//                     scrollName = namespaceIt("scroll"),
//                     resizeName = namespaceIt("resize");
//                 if (!breakpoints.length) {
//                     return
//                 }
//                 lowestNonZeroBP = breakpoints[0] || breakpoints[1] || false;
//                 ready(function () {
//                     var allLoaded = event.allLoaded,
//                         lazy = !! elemset.lazy;
//                     each(elemset.target().$e, function (el, i) {
//                         elemset[i] = objectCreate(elemset).prepareData(el);
//                         if (!lazy || inViewport(elemset[i].$e, verge)) {
//                             elemset[i].updateDOM()
//                         }
//                     });

//                     function resizeHandler() {
//                         elemset.reset();
//                         each(elemset.$e, function (el, i) {
//                             elemset[i].decideValue().updateDOM()
//                         }).trigger(allLoaded)
//                     }
//                     if (elemset.dynamic && (elemset.custom || lowestNonZeroBP < screenMax)) {
//                         resize(resizeHandler, resizeName)
//                     }
//                     if (!lazy) {
//                         return
//                     }

//                     function scrollHandler() {
//                         each(elemset.$e, function (el, i) {
//                             if (inViewport(elemset[i].$e, verge)) {
//                                 elemset[i].updateDOM()
//                             }
//                         })
//                     }
//                     $win.on(scrollName, scrollHandler);
//                     elemset.$e.one(allLoaded, function () {
//                         $win.off(scrollName, scrollHandler)
//                     })
//                 })
//             });
//             return Response
//         }

//         function noConflict(callback) {
//             if (root[name] === Response) {
//                 root[name] = old
//             }
//             if (typeof callback == "function") {
//                 callback.call(root, Response)
//             }
//             return Response
//         }

//         function exposeAreaFilters(engine, proto, force) {
//             each(["inX", "inY", "inViewport"], function (methodName) {
//                 (force || !proto[methodName]) && (proto[methodName] = function (verge, invert) {
//                     return engine(sift(this, function (el) {
//                         return !!el && !invert === Response[methodName](el, verge)
//                     }))
//                 })
//             })
//         }

//         function bridge(host, force) {
//             if (typeof host == "function" && host.fn) {
//                 if (force || void 0 === host.fn.dataset) {
//                     host.fn.dataset = datasetChainable
//                 }
//                 if (force || void 0 === host.fn.deletes) {
//                     host.fn.deletes = deletesChainable
//                 }
//                 exposeAreaFilters(host, host.fn, force)
//             }
//             return Response
//         }

//         function chain(host, force) {
//             host = arguments.length ? host : $;
//             return bridge(host, force)
//         }
//         Response = {
//             deviceMin: function () {
//                 return screenMin
//             },
//             deviceMax: function () {
//                 return screenMax
//             },
//             noConflict: noConflict,
//             chain: chain,
//             bridge: bridge,
//             create: create,
//             addTest: addTest,
//             datatize: datatize,
//             camelize: camelize,
//             render: render,
//             store: store,
//             access: access,
//             target: target,
//             object: objectCreate,
//             crossover: crossover,
//             action: action,
//             resize: resize,
//             ready: ready,
//             affix: affix,
//             sift: sift,
//             dpr: dpr,
//             deletes: deletes,
//             scrollX: scrollX,
//             scrollY: scrollY,
//             deviceW: deviceW,
//             deviceH: deviceH,
//             device: device,
//             inX: inX,
//             inY: inY,
//             route: route,
//             merge: merge,
//             media: media,
//             wave: wave,
//             band: band,
//             map: map,
//             each: each,
//             inViewport: inViewport,
//             dataset: dataset,
//             viewportH: viewportH,
//             viewportW: viewportW
//         };
//         ready(function () {
//             var nativeJSONParse, customData = dataset(doc.body, "responsejs");
//             if (customData) {
//                 nativeJSONParse = !! win.JSON && JSON.parse;
//                 if (nativeJSONParse) {
//                     customData = nativeJSONParse(customData)
//                 } else if ($.parseJSON) {
//                     customData = $.parseJSON(customData)
//                 }
//                 customData && customData.create && create(customData.create)
//             }
//             docElem.className = docElem.className.replace(/(^|\s)(no-)?responsejs(\s|$)/, "$1$3") + " responsejs "
//         });
//         return Response
//     });
//     (function () {
//         "use strict";
//         var SectionScrollmation = window.SectionScrollmation = {};
//         SectionScrollmation.ImageScrollmation = Backbone.View.extend({
//             initialize: function (options) {
//                 this.ui = {
//                     container: options.container || $(this.$el.data("scrollmation-container")),
//                     window: $(window)
//                 };
//                 this.isBackground = options.isBackground;
//                 this.appVent = new Backbone.Wreqr.RequestResponse;
//                 _.bindAll(this);
//                 this.$el.addClass("scrollmation");
//                 if (this.$el.find("[data-scrollmation-slides]").length === 0) {
//                     this.$el.wrapInner('<div class="scrollmation-slides" data-scrollmation-slides></div>')
//                 }
//                 this.ui.slidesContainer = this.$el.find("[data-scrollmation-slides]");
//                 this.ui.slidesContainer.sticky({
//                     container: this.ui.container,
//                     watchOn: window
//                 });
//                 this._prepareSlides();
//                 this.listen();
//                 this.running = false;
//                 if (this.isTabletDevice()) {
//                     this.$el.addClass("tablet-only");
//                     this.$(".scrollmation-slides").addClass("hiding");
//                     this.$("div[data-only-for-tablet]").removeClass("hiding")
//                 }
//             },
//             isTabletDevice: function () {
//                 return /iPad/i.test(navigator.userAgent || navigator.vendor || window.opera) || /Android/i.test(navigator.userAgent || navigator.vendor || window.opera) && !/Mobile/i.test(navigator.userAgent || navigator.vendor || window.opera)
//             },
//             listen: function () {
//                 this.listenTo(this.appVent, "scrollmation:slide:activate", this._toggleActivation);
//                 this.ui.window.on("resize scroll mousewheel", this.tick)
//             },
//             destroy: function () {
//                 this.ui.window.off("resize scroll mousewheel", this.tick);
//                 Backbone.View.prototype.destroy.apply(this, arguments)
//             },
//             _toggleActivation: function (slideToActivate) {
//                 if ($.inArray(slideToActivate, this.slides) !== -1) {
//                     $.each(this.slides, function (index, slide) {
//                         if (slide) {
//                             if (slideToActivate === slide) {
//                                 slide.activate()
//                             } else {
//                                 slide.deactivate()
//                             }
//                         }
//                     })
//                 }
//             },
//             tick: function () {
//                 if (!this.running) {
//                     window.requestAnimationFrame(this._refresh)
//                 }
//                 this.running = true
//             },
//             _refresh: function () {
//                 this.ui.slidesContainer.height(window.innerHeight);
//                 var scrollPercentage = this.scrollPercentage = this.getScrollPercentage();
//                 var slideToActivate = this.getSlideAtPercentage(scrollPercentage);
//                 if (slideToActivate && slideToActivate !== this.activeSlide) {
//                     this.appVent.trigger("scrollmation:slide:activate", slideToActivate);
//                     this.activeSlide = slideToActivate
//                 }
//                 this.running = false
//             },
//             getScrollPercentage: function () {
//                 var absoluteScrollTop = this.ui.window.scrollTop();
//                 var viewportHeight = this.ui.window.height();
//                 var containerHeight = this.ui.container.innerHeight();
//                 var relativeScrollTop = absoluteScrollTop - this.ui.container.offset().top;
//                 var scrollPercentage = relativeScrollTop / Math.max(1, containerHeight - viewportHeight);
//                 scrollPercentage = Math.max(0, scrollPercentage);
//                 scrollPercentage = Math.min(1, scrollPercentage);
//                 return scrollPercentage
//             },
//             getSlideAtPercentage: function (percent) {
//                 var slideSize = 1 / this.slides.length;
//                 return _.find(this.slides, function (slide, i) {
//                     var slidePercentage = (i + 1) * slideSize;
//                     return slidePercentage >= percent
//                 }, this)
//             },
//             _prepareSlides: function () {
//                 this.prepareSlides();
//                 this.ui.window.resize()
//             },
//             prepareSlides: function () {
//                 this.slides = this.$("[data-scrollmation-slide]").map(this._makeSlide).get()
//             },
//             render: function () {
//                 this._refresh()
//             },
//             getContentRatio: function () {
//                 return this.$el.data("scrollmation-content-ratio")
//             },
//             _makeSlide: function (i, img) {
//                 return new SectionScrollmation.ImageSlide({
//                     el: img,
//                     isBackground: this.isBackground
//                 })
//             }
//         });
//         SectionScrollmation.ImageSlide = Backbone.View.extend({
//             className: "scrollmation-slide",
//             activeClass: "active",
//             hasAutoscaled: false,
//             initialize: function (options) {
//                 this.$el.addClass(this.className);
//                 _.bindAll(this)
//             },
//             activate: function () {
//                 if (this.options.isBackground && !this.hasAutoscaled) {
//                     this._autoscale()
//                 }
//                 this.$el.addClass(this.activeClass)
//             },
//             deactivate: function () {
//                 this.$el.removeClass(this.activeClass)
//             },
//             _autoscale: function () {
//                 this.$el.autoscale({
//                     mode: "cover"
//                 });
//                 $(window).resize()
//             }
//         });
//         $("[data-scrollmation]").each(function () {
//             var $el = $(this);
//             new SectionScrollmation.ImageScrollmation({
//                 el: $el,
//                 isBackground: $el.data("scrollmation") === "background"
//             })
//         })
//     })();
//     (function ($, Shorthand) {
//         "use strict";
//         Shorthand.helpers.transitionEnd = function () {
//             var el = document.createElement("bootstrap");
//             var transEndEventNames = {
//                 WebkitTransition: "webkitTransitionEnd",
//                 MozTransition: "transitionend",
//                 OTransition: "oTransitionEnd otransitionend",
//                 transition: "transitionend"
//             };
//             var name;
//             for (name in transEndEventNames) {
//                 if (el.style[name] !== undefined) {
//                     return transEndEventNames[name]
//                 }
//             }
//         }()
//     })($, Shorthand);
//     (function () {
//         "use strict";
//         $(function () {
//             var running = false;
//             var $window = $(window);
//             var _refresh = function () {
//                 if (Modernizr.mq("only all") && $window.width() > 1e3) {
//                     var width = $(".scrollmation-two-column:not(.hide) .secondary-column").width();
//                     $(".story .scrollmation-two-column .secondary-column .scrollmation-slides").each(function () {
//                         $(this).css("width", width !== 0 ? width : "")
//                     })
//                 }
//                 running = false
//             };
//             var tick = function () {
//                 if (!running) {
//                     window.requestAnimationFrame(_refresh)
//                 }
//                 running = true
//             };
//             $window.on("load", tick);
//             $window.on("resize", tick)
//         })
//     })();
//     (function (window, $, undefined) {
//         "use strict";
//         var testUserAgent = function (pattern) {
//             return pattern.test(navigator.userAgent || navigator.vendor || window.opera)
//         };
//         var Device = window.Device = {
//             isAndroid: function () {
//                 return testUserAgent(/Android/i)
//             },
//             isBlackBerry: function () {
//                 return testUserAgent(/BlackBerry/i)
//             },
//             isiOS: function () {
//                 return testUserAgent(/iP(hone|od|ad)/i)
//             },
//             isOpera: function () {
//                 return testUserAgent(/Opera M(obi|ini)/i)
//             },
//             isWindows: function () {
//                 return testUserAgent(/IEMobile/i)
//             },
//             isMobile: function () {
//                 return Device.isAndroid() || Device.isBlackBerry() || Device.isiOS() || Device.isOpera() || Device.isWindows()
//             }
//         }
//     })(window, $);
//     (function ($, Device, undefined) {
//         "use strict";
//         $(function () {
//             if (Device.isMobile()) {
//                 $("#story-body .section-text-over-image").css("background-attachment", "scroll")
//             } else {
//                 $("video").show()
//             }
//         })
//     })($, window.Device)
// }).call(this);