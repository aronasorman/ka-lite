(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("../third_party/jquery.mobile.vmouse.js"),window.DrawingScratchpad=function(t){function e(){for(var t=0,e=[];t<z.length;t++)z[t].removed||"path"===z[t].type&&e.push({path:z[t].attr("path").toString(),stroke:z[t].attr("stroke"),type:"path"});D.push(e)}function a(t){z.remove();for(var e=0;e<t.length;e++)"path"===t[e].type&&z.push(y.path(t[e].path).attr(b).attr({stroke:t[e].stroke,"clip-rect":[0,40,y.width,y.height-40]}))}function r(){M.animate({x:2},100),L="draw"}function f(){M.animate({x:32},100),L="erase"}function o(){D.length&&a(D.pop())}function n(t,a,r){t&&a&&r&&(40>=a||(Y&&(Y.remove(),Y=null),"draw"===L?(e(),i(t,a)):"erase"===L&&(Y=y.rect(t,a,0,0).attr({"fill-opacity":.15,"stroke-opacity":.5,fill:"#ff0000",stroke:"#ff0000"}),Y.sx=t,Y.sy=a)))}function i(t,e){var a=k===v?m():k;j=y.path("M"+t+","+e).attr(b).attr({stroke:a,"clip-rect":[0,40,y.width,y.height-40]}),X=j.attr("path"),z.push(j),S={x:t,y:e}}function l(t,e){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function c(t,a){if("draw"===L&&j&&(X+="L"+t+","+a,S=null,j.attr("path",X)),j=null,"erase"===L&&Y){e();for(var r=!1,f=Y.getBBox(),o=0;o<z.length;o++)l(f,z[o].getBBox())&&(r=!0,z[o].remove());r||D.pop();var n=Y;Y=null,n.animate({opacity:0},100,function(){n.remove()})}}function h(t,e){if("draw"===L&&j)X+="Q"+S.x+","+S.y+","+(S.x+t)/2+","+(S.y+e)/2,S={x:t,y:e},j.attr("path",X);else if("erase"===L&&Y){var a=Math.min(t,Y.sx),r=Math.max(t,Y.sx),f=Math.max(40,Math.min(e,Y.sy)),o=Math.max(40,Math.max(e,Y.sy));Y.attr({x:a,y:f,width:r-a,height:o-f})}}var s="M25.31,2.872l-3.384-2.127c-0.854-0.536-1.979-0.278-2.517,0.576l-1.334,2.123l6.474,4.066l1.335-2.122C26.42,4.533,26.164,3.407,25.31,2.872zM6.555,21.786l6.474,4.066L23.581,9.054l-6.477-4.067L6.555,21.786zM5.566,26.952l-0.143,3.819l3.379-1.787l3.14-1.658l-6.246-3.925L5.566,26.952z",u="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248",p="M12.981,9.073V6.817l-12.106,6.99l12.106,6.99v-2.422c3.285-0.002,9.052,0.28,9.052,2.269c0,2.78-6.023,4.263-6.023,4.263v2.132c0,0,13.53,0.463,13.53-9.823C29.54,9.134,17.952,8.831,12.981,9.073z",v="0-#00ff00-#ff0000:50-#0000ff",m=function(){var t=.05,e=0;return function(){var a=127*Math.sin(t*e+-3)+128,r=127*Math.sin(t*e+-1)+128,f=127*Math.sin(t*e+1)+128;return e++,"rgb("+a+","+r+","+f+")"}}();if(!t)throw new Error("No element provided to DrawingScratchpad");var d=$(t),y=Raphael(d[0],d.width(),d.height());this.resize=function(){y.setSize(d.width(),d.height())};for(var g=y.set(),k=v,w=[v,"#000000","#3f3f3f","#7f7f7f","#bfbfbf","#ff0000","#ff7f00","#ffff00","#00ff00","#00ffff","#007fff","#0000ff","#7f00ff"],x=0;x<w.length;x++)!function(t){var e=function(e){k=t,g.animate({y:7},100),this.animate({y:15},100),r()};g.push(y.rect(90+27*x,7,24,24).attr({fill:t,stroke:"#ccc"}).touchstart(e).click(e))}(w[x]);g[0].attr({y:15});var M=y.rect(2,2,30,30).attr({r:5,stroke:"",fill:"rgba(30, 157, 186, 0.5)"}),b={"stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},z=y.set(),D=[[]],B=y.set();B.push(y.path(s).scale(.8).translate(0,0)),B.push(y.path(u).translate(30,0)),B.push(y.path(p).scale(.7).translate(60,1));var L="draw";y.rect(2,2,30,30).attr({stroke:"",fill:"black","fill-opacity":0}).click(r).touchstart(r),y.rect(32,2,30,30).attr({stroke:"",fill:"black","fill-opacity":0}).click(f).touchstart(f),y.rect(62,2,30,30).attr({stroke:"",fill:"black","fill-opacity":0}).click(o).touchstart(o),B.attr({fill:"#000",stroke:"none"});var S,j=null,X="",Y=null,q=function(t){var e=$(d).offset();h(t.pageX-e.left,t.pageY-e.top),t.preventDefault()};$(d).on("vmousedown",function(t){var e=$(d).offset();n(t.pageX-e.left,t.pageY-e.top,t),t.preventDefault(),$(document).on("vmousemove",q),$(document).one("vmouseup",function(t){c(t.pageX-e.left,t.pageY-e.top,t),t.preventDefault(),$(document).off("vmousemove",q)})}),this.clear=function(){z.remove(),D=[[]]}};
},{"../third_party/jquery.mobile.vmouse.js":2}],2:[function(require,module,exports){
!function(t,e,n,o){function a(t){for(;t&&"undefined"!=typeof t.originalEvent;)t=t.originalEvent;return t}function i(e,n){var i,r,u,s,c,h,v,d,l=e.type;if(e=t.Event(e),e.type=n,i=e.originalEvent,r=t.event.props,l.search(/mouse/)>-1&&(r=I),i)for(v=r.length,s;v;)s=r[--v],e[s]=i[s];if(l.search(/mouse(down|up)|click/)>-1&&!e.which&&(e.which=1),-1!==l.search(/^touch/)&&(u=a(i),l=u.touches,c=u.changedTouches,h=l&&l.length?l[0]:c&&c.length?c[0]:o))for(d=0,len=Y.length;d<len;d++)s=Y[d],e[s]=h[s];return e}function r(e){for(var n,o,a={};e;){n=t.data(e,y);for(o in n)n[o]&&(a[o]=a.hasVirtualBinding=!0);e=e.parentNode}return a}function u(e,n){for(var o;e;){if(o=t.data(e,y),o&&(!n||o[n]))return e;e=e.parentNode}return null}function s(){V=!1}function c(){V=!0}function h(){z=0,L.length=0,S=!1,c()}function v(){s()}function d(){l(),B=setTimeout(function(){B=0,h()},t.vmouse.resetTimerDuration)}function l(){B&&(clearTimeout(B),B=0)}function f(e,n,o){var a;return(o&&o[e]||!o&&u(n.target,e))&&(a=i(n,e),t(n.target).trigger(a)),a}function p(e){var n=t.data(e.target,P);if(!(S||z&&z===n)){var o=f("v"+e.type,e);o&&(o.isDefaultPrevented()&&e.preventDefault(),o.isPropagationStopped()&&e.stopPropagation(),o.isImmediatePropagationStopped()&&e.stopImmediatePropagation())}}function g(e){var n,o,i=a(e).touches;if(i&&1===i.length&&(n=e.target,o=r(n),o.hasVirtualBinding)){z=q++,t.data(n,P,z),l(),v(),H=!1;var u=a(e).touches[0];N=u.pageX,x=u.pageY,f("vmouseover",e,o),f("vmousedown",e,o)}}function m(t){V||(H||f("vmousecancel",t,r(t.target)),H=!0,d())}function b(e){if(!V){var n=a(e).touches[0],o=H,i=t.vmouse.moveDistanceThreshold;H=H||Math.abs(n.pageX-N)>i||Math.abs(n.pageY-x)>i,flags=r(e.target),H&&!o&&f("vmousecancel",e,flags),f("vmousemove",e,flags),d()}}function D(t){if(!V){c();var e,n=r(t.target);if(f("vmouseup",t,n),!H){var o=f("vclick",t,n);o&&o.isDefaultPrevented()&&(e=a(t).changedTouches[0],L.push({touchID:z,x:e.clientX,y:e.clientY}),S=!0)}f("vmouseout",t,n),H=!1,d()}}function T(e){var n,o=t.data(e,y);if(o)for(n in o)if(o[n])return!0;return!1}function k(){}function w(e){var n=e.substr(1);return{setup:function(o,a){T(this)||t.data(this,y,{});var i=t.data(this,y);i[e]=!0,M[e]=(M[e]||0)+1,1===M[e]&&Q.bind(n,p),t(this).bind(n,k),j&&(M.touchstart=(M.touchstart||0)+1,1===M.touchstart&&Q.bind("touchstart",g).bind("touchend",D).bind("touchmove",b).bind("scroll",m))},teardown:function(o,a){--M[e],M[e]||Q.unbind(n,p),j&&(--M.touchstart,M.touchstart||Q.unbind("touchstart",g).unbind("touchmove",b).unbind("touchend",D).unbind("scroll",m));var i=t(this),r=t.data(this,y);r&&(r[e]=!1),i.unbind(n,k),T(this)||i.removeData(y)}}}var y="virtualMouseBindings",P="virtualTouchID",X="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),Y="clientX clientY pageX pageY screenX screenY".split(" "),E=t.event.mouseHooks?t.event.mouseHooks.props:[],I=t.event.props.concat(E),M={},B=0,N=0,x=0,H=!1,L=[],S=!1,V=!1,j="addEventListener"in n,Q=t(n),q=1,z=0;t.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var A=0;A<X.length;A++)t.event.special[X[A]]=w(X[A]);j&&n.addEventListener("click",function(e){var n,o,a,i,r,u,s=L.length,c=e.target;if(s)for(n=e.clientX,o=e.clientY,threshold=t.vmouse.clickDistanceThreshold,a=c;a;){for(i=0;s>i;i++)if(r=L[i],u=0,a===c&&Math.abs(r.x-n)<threshold&&Math.abs(r.y-o)<threshold||t.data(a,P)===r.touchID)return e.preventDefault(),void e.stopPropagation();a=a.parentNode}},!0)}(jQuery,window,document);
},{}]},{},[1]);
