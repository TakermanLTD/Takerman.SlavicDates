(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[4],{1:function(t,e){t.exports=googlesitekit.i18n},10:function(t,e,n){"use strict";n.d(e,"y",(function(){return u.b})),n.d(e,"v",(function(){return c.a})),n.d(e,"z",(function(){return c.b})),n.d(e,"x",(function(){return v})),n.d(e,"f",(function(){return p.a})),n.d(e,"m",(function(){return p.b})),n.d(e,"t",(function(){return g.c})),n.d(e,"u",(function(){return g.d})),n.d(e,"q",(function(){return g.b})),n.d(e,"l",(function(){return g.a})),n.d(e,"r",(function(){return y})),n.d(e,"g",(function(){return w})),n.d(e,"b",(function(){return O.b})),n.d(e,"a",(function(){return O.a})),n.d(e,"c",(function(){return O.e})),n.d(e,"i",(function(){return O.f})),n.d(e,"w",(function(){return O.k})),n.d(e,"j",(function(){return k.b})),n.d(e,"p",(function(){return k.c})),n.d(e,"e",(function(){return k.a})),n.d(e,"o",(function(){return j.b})),n.d(e,"k",(function(){return j.a})),n.d(e,"s",(function(){return j.d})),n.d(e,"n",(function(){return _})),n.d(e,"d",(function(){return x})),n.d(e,"A",(function(){return S})),n.d(e,"h",(function(){return D}));var r=n(120),a=n.n(r),i=n(115),o=n.n(i),u=n(32),c=n(63),s=n(28),l=n.n(s),f=n(77),d=n.n(f),v=function(t){return d()(JSON.stringify(function t(e){var n={};return Object.keys(e).sort().forEach((function(r){var a=e[r];a&&"object"===l()(a)&&!Array.isArray(a)&&(a=t(a)),n[r]=a})),n}(t)))};var p=n(78),g=(n(84),n(72));function h(t){return t.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function b(t){return"<p>".concat(t.replace(/\n{2,}/g,"</p><p>"),"</p>")}function m(t){return t.replace(/\n/gi,"<br>")}function y(t){for(var e=t,n=0,r=[h,b,m];n<r.length;n++){e=(0,r[n])(e)}return e}var w=function(t){return t=parseFloat(t),isNaN(t)||0===t?[0,0,0,0]:[Math.floor(t/60/60),Math.floor(t/60%60),Math.floor(t%60),Math.floor(1e3*t)-1e3*Math.floor(t)]},O=n(58),k=n(85),j=n(50),_=function(t){switch(t){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},x=function(t,e){if("0"===t||0===t||isNaN(t))return null;var n=(e-t)/t;return isNaN(n)||!a()(n)?null:n},S=function(t){try{return JSON.parse(t)&&!!t}catch(t){return!1}},D=function(t){if(!t)return"";var e=t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(e)})).replace(/(\\)/g,"");return o()(e)}},12:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return f}));var r="core/user",a="connected_url_mismatch",i="googlesitekit_authenticate",o="googlesitekit_setup",u="googlesitekit_view_dashboard",c="googlesitekit_manage_options",s="googlesitekit_read_shared_module_data",l="googlesitekit_manage_module_sharing_options",f="googlesitekit_delegate_module_sharing_management"},249:function(t,e,n){"use strict";(function(t){var r=n(55),a=n.n(r),i=n(250),o=t._googlesitekitAPIFetchData||{},u=o.nonce,c=o.nonceEndpoint,s=o.preloadedData,l=o.rootURL;a.a.nonceEndpoint=c,a.a.nonceMiddleware=a.a.createNonceMiddleware(u),a.a.rootURLMiddleware=a.a.createRootURLMiddleware(l),a.a.preloadingMiddleware=Object(i.a)(s),a.a.use(a.a.nonceMiddleware),a.a.use(a.a.mediaUploadMiddleware),a.a.use(a.a.rootURLMiddleware),a.a.use(a.a.preloadingMiddleware),e.default=a.a}).call(this,n(21))},250:function(t,e,n){"use strict";var r=n(227);e.a=function(t){var e=Object.keys(t).reduce((function(e,n){return e[Object(r.getStablePath)(n)]=t[n],e}),{}),n=!1;return function(t,a){if(n)return a(t);setTimeout((function(){n=!0}),1e3);var i=t.parse,o=void 0===i||i,u=t.path;if("string"==typeof t.path){var c,s=(null===(c=t.method)||void 0===c?void 0:c.toUpperCase())||"GET",l=Object(r.getStablePath)(u);if(o&&"GET"===s&&e[l]){var f=Promise.resolve(e[l].body);return delete e[l],f}if("OPTIONS"===s&&e[s]&&e[s][l]){var d=Promise.resolve(e[s][l]);return delete e[s][l],d}}return a(t)}}},29:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r="_googlesitekitDataLayer",a="data-googlesitekit-gtag"},32:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return m}));var r=n(86),a=t._googlesitekitTrackingData||{},i=a.activeModules,o=void 0===i?[]:i,u=a.isSiteKitScreen,c=a.trackingEnabled,s=a.trackingID,l=a.referenceSiteURL,f=a.userIDHash,d=a.isAuthenticated,v={activeModules:o,trackingEnabled:c,trackingID:s,referenceSiteURL:l,userIDHash:f,isSiteKitScreen:u,userRoles:a.userRoles,isAuthenticated:d,pluginVersion:"1.79.1"},p=Object(r.a)(v),g=p.enableTracking,h=p.disableTracking,b=(p.isTrackingEnabled,p.initializeSnippet),m=p.trackEvent;function y(t){t?g():h()}u&&c&&b()}).call(this,n(21))},33:function(t,e,n){"use strict";(function(t){var r,a;n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=new Set((null===(r=t)||void 0===r||null===(a=r._googlesitekitBaseData)||void 0===a?void 0:a.enabledFeatures)||[]),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return e instanceof Set&&e.has(t)}}).call(this,n(21))},35:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return t instanceof Date&&!isNaN(t)}},41:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(35),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="string"==typeof t;if(!e)return!1;var n=t.split("-");return 3===n.length&&Object(r.a)(new Date(t))}},44:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return b})),n.d(e,"d",(function(){return m})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return w}));var r=n(5),a=n.n(r),i=n(14),o=n.n(i),u=(n(24),n(10));function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){u=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw i}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l,f="googlesitekit_".concat("1.79.1","_"),d=["sessionStorage","localStorage"],v=[].concat(d),p=function(){var e=o()(a.a.mark((function e(n){var r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t[n]){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,i="__storage_test__",r.setItem(i,i),r.removeItem(i),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0 instanceof DOMException&&(22===e.t0.code||1014===e.t0.code||"QuotaExceededError"===e.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.t0.name)&&0!==r.length);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();function g(){return h.apply(this,arguments)}function h(){return(h=o()(a.a.mark((function e(){var n,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===l){e.next=2;break}return e.abrupt("return",l);case 2:n=c(v),e.prev=3,n.s();case 5:if((r=n.n()).done){e.next=15;break}if(i=r.value,!l){e.next=9;break}return e.abrupt("continue",13);case 9:return e.next=11,p(i);case 11:if(!e.sent){e.next=13;break}l=t[i];case 13:e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:return void 0===l&&(l=null),e.abrupt("return",l);case 25:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})))).apply(this,arguments)}var b=function(){var t=o()(a.a.mark((function t(e){var n,r,i,o,u,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:if(!(n=t.sent)){t.next=10;break}if(!(r=n.getItem("".concat(f).concat(e)))){t.next=10;break}if(i=JSON.parse(r),o=i.timestamp,u=i.ttl,c=i.value,s=i.isError,!o||u&&!(Math.round(Date.now()/1e3)-o<u)){t.next=10;break}return t.abrupt("return",{cacheHit:!0,value:c,isError:s});case 10:return t.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=o()(a.a.mark((function e(n,r){var i,o,c,s,l,d,v,p,h=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]?h[2]:{},o=i.ttl,c=void 0===o?u.b:o,s=i.timestamp,l=void 0===s?Math.round(Date.now()/1e3):s,d=i.isError,v=void 0!==d&&d,e.next=3,g();case 3:if(!(p=e.sent)){e.next=14;break}return e.prev=5,p.setItem("".concat(f).concat(n),JSON.stringify({timestamp:l,ttl:c,value:r,isError:v})),e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(5),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=o()(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:if(!(r=e.sent)){e.next=13;break}return e.prev=4,r.removeItem("".concat(f).concat(n)),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",!1);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=o()(a.a.mark((function e(){var n,r,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:if(!(n=e.sent)){e.next=14;break}for(e.prev=4,r=[],i=0;i<n.length;i++)0===(o=n.key(i)).indexOf(f)&&r.push(o.substring(f.length));return e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(4),t.console.warn("Encountered an unexpected storage error:",e.t0),e.abrupt("return",[]);case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}()}).call(this,n(21))},48:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(29);function a(t){return function(){t[r.a]=t[r.a]||[],t[r.a].push(arguments)}}},50:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return c}));var r=n(111);function a(t){try{return new URL(t).pathname}catch(t){}return null}function i(t,e){try{return new URL(e,t).href}catch(t){}return("string"==typeof t?t:"")+("string"==typeof e?e:"")}function o(t){return"string"!=typeof t?t:t.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}function u(t){return/^#\w[A-Za-z0-9-_]*$/.test(t)}function c(t,e){if(!Object(r.a)(t))return t;if(t.length<=e)return t;var n=new URL(t),a=t.replace(n.origin,"");if(a.length<e)return a;var i=a.length-Math.floor(e)+1;return"…"+a.substr(i)}},58:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"g",(function(){return f})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return p.a})),n.d(e,"f",(function(){return y})),n.d(e,"k",(function(){return g}));var r="Invalid dateString parameter, it must be a string.",a='Invalid date range, it must be a string with the format "last-x-days".',i=3600,o=86400,u=604800,c=n(7),s=n.n(c),l=n(35),f=function(t){var e=new Date(t);s()(Object(l.a)(e),"Date param must construct to a valid date instance or be a valid date instance itself.");var n="".concat(e.getMonth()+1),r="".concat(e.getDate());return[e.getFullYear(),n.length<2?"0".concat(n):n,r.length<2?"0".concat(r):r].join("-")},d=n(13),v=n.n(d),p=n(41),g=function(t){s()(Object(p.a)(t),r);var e=t.split("-"),n=v()(e,3),a=n[0],i=n[1],o=n[2];return new Date(a,i-1,o)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=g(t);return n.setDate(n.getDate()-e),f(n)},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("-");return 3===e.length&&"last"===e[0]&&!Number.isNaN(e[1])&&!Number.isNaN(parseFloat(e[1]))&&"days"===e[2]};var m=n(1);function y(){var t=function(t){return Object(m.sprintf)(
/* translators: %s: number of days */
Object(m._n)("Last %s day","Last %s days",t,"google-site-kit"),t)};return{"last-7-days":{slug:"last-7-days",label:t(7),days:7},"last-14-days":{slug:"last-14-days",label:t(14),days:14},"last-28-days":{slug:"last-28-days",label:t(28),days:28},"last-90-days":{slug:"last-90-days",label:t(90),days:90}}}},600:function(t,e,n){"use strict";(function(t){var r=n(5),a=n.n(r),i=n(14),o=n.n(i),u=n(7),c=n.n(u),s=n(249),l=n(268),f=n(44),d=n(10),v=n(66),p=n(712),g=n(12),h=!0,b=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=[t,e,n].filter((function(t){return!!t&&t.length}));return 3===a.length&&r&&r.constructor===Object&&Object.keys(r).length&&a.push(Object(d.x)(r)),a.join("::")},m=function(e){var n,r,a,i=null===(n=t.googlesitekit)||void 0===n||null===(r=n.data)||void 0===r||null===(a=r.dispatch)||void 0===a?void 0:a.call(r,g.a);i&&(Object(v.d)(e)?i.setPermissionScopeError(e):Object(v.b)(e)&&i.setAuthError(e))},y=function(){var e=o()(a.a.mark((function e(n,r,i){var o,u,v,g,h,y,w,O,j,_,x,S,D,E,P,I,L,N=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=N.length>3&&void 0!==N[3]?N[3]:{},u=o.bodyParams,v=o.cacheTTL,g=void 0===v?d.b:v,h=o.method,y=void 0===h?"GET":h,w=o.queryParams,O=o.useCache,j=void 0===O?void 0:O,_=o.signal,c()(n,"`type` argument for requests is required."),c()(r,"`identifier` argument for requests is required."),c()(i,"`datapoint` argument for requests is required."),x="GET"===y&&(void 0!==j?j:k()),S=b(n,r,i,w),!x){e.next=18;break}return e.next=9,Object(f.b)(S);case 9:if(D=e.sent,E=D.cacheHit,P=D.value,!D.isError){e.next=16;break}throw m(P),P;case 16:if(!E){e.next=18;break}return e.abrupt("return",P);case 18:return e.prev=18,e.next=21,Object(s.default)({data:u,method:y,signal:_,path:Object(l.a)("/google-site-kit/v1/".concat(n,"/").concat(r,"/data/").concat(i),w)});case 21:if(I=e.sent,!x){e.next=25;break}return e.next=25,Object(f.d)(S,I,{ttl:g});case 25:return e.abrupt("return",I);case 28:if(e.prev=28,e.t0=e.catch(18),!(null==_?void 0:_.aborted)){e.next=32;break}throw e.t0;case 32:if(!(null===e.t0||void 0===e.t0||null===(L=e.t0.data)||void 0===L?void 0:L.cacheTTL)){e.next=35;break}return e.next=35,Object(f.d)(S,e.t0,{ttl:e.t0.data.cacheTTL,isError:!0});case 35:throw Object(p.a)({method:y,datapoint:i,type:n,identifier:r,error:e.t0}),m(e.t0),t.console.error("Google Site Kit API Error","method:".concat(y),"datapoint:".concat(i),"type:".concat(n),"identifier:".concat(r),'error:"'.concat(e.t0.message,'"')),e.t0;case 39:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(){var t=o()(a.a.mark((function t(e,n,r,i){var o,u,c,s,l,f,v=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=v.length>4&&void 0!==v[4]?v[4]:{},u=o.cacheTTL,c=void 0===u?d.b:u,s=o.useCache,l=void 0===s?void 0:s,f=o.signal,t.abrupt("return",y(e,n,r,{cacheTTL:c,queryParams:i,useCache:l,signal:f}));case 2:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),O=function(){var t=o()(a.a.mark((function t(e,n,r,i){var o,u,c,s,l,f,d,v=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=v.length>4&&void 0!==v[4]?v[4]:{},u=o.method,c=void 0===u?"POST":u,s=o.queryParams,l=void 0===s?{}:s,f=o.signal,t.next=3,y(e,n,r,{bodyParams:{data:i},method:c,queryParams:l,useCache:!1,signal:f});case 3:return d=t.sent,t.next=6,j(e,n,r);case 6:return t.abrupt("return",d);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),k=function(){return h},j=function(){var t=o()(a.a.mark((function t(e,n,r){var i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=b(e,n,r),t.next=3,Object(f.c)();case 3:t.sent.forEach((function(t){0===t.indexOf(i)&&Object(f.a)(t)}));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),_={invalidateCache:j,get:w,set:O,setUsingCache:function(t){return h=!!t},usingCache:k};e.a=_}).call(this,n(21))},61:function(t,e,n){"use strict";(function(t){var r=n(0),a=n.n(r),i=n(8),o=n.n(i);function ChangeArrow(e){var n=e.direction,r=e.invertColor,a=e.width,i=e.height;return t.createElement("svg",{className:o()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(n),{"googlesitekit-change-arrow--inverted-color":r}),width:a,height:i,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:a.a.string,invertColor:a.a.bool,width:a.a.number,height:a.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},e.a=ChangeArrow}).call(this,n(3))},63:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return u}));var r=n(28),a=n.n(r),i=n(73),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:i.a.sanitize(t,e)}};function u(t){var e,n="object"===a()(t)?t.toString():t;return null==n||null===(e=n.replace)||void 0===e?void 0:e.call(n,/\/+$/,"")}},66:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return c}));n(54);var r="missing_required_scopes",a="insufficientPermissions",i="forbidden";function o(t){return(null==t?void 0:t.code)===r}function u(t){var e;return[a,i].includes(null==t||null===(e=t.data)||void 0===e?void 0:e.reason)}function c(t){var e;return!!(null==t||null===(e=t.data)||void 0===e?void 0:e.reconnectURL)}},712:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(5),a=n.n(r),i=n(14),o=n.n(i),u=n(10),c=["fetch_error"];function s(t){return l.apply(this,arguments)}function l(){return(l=o()(a.a.mark((function t(e){var n,r,i,o,s,l,f,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.method,o=e.type,s=e.identifier,l=e.datapoint,(f=e.error)&&!c.includes(null==f?void 0:f.code)){t.next=3;break}return t.abrupt("return");case 3:return d="code: ".concat(f.code),(null===(n=f.data)||void 0===n?void 0:n.reason)&&(d+=", reason: ".concat(f.data.reason)),t.next=7,Object(u.y)("api_error","".concat(i,":").concat(o,"/").concat(s,"/data/").concat(l),"".concat(f.message," (").concat(d,")"),(null===(r=f.data)||void 0===r?void 0:r.status)||f.code);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},72:function(t,e,n){"use strict";(function(t){n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return _})),n.d(e,"a",(function(){return x}));var r=n(13),a=n.n(r),i=n(28),o=n.n(i),u=n(6),c=n.n(u),s=n(19),l=n.n(s),f=n(25),d=n(70),v=n.n(d),p=n(1);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=m(t,e),r=n.formatUnit,a=n.formatDecimal;try{return r()}catch(t){return a()}},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=parseInt(t,10),Number.isNaN(t)&&(t=0);var n=Math.floor(t/60/60),r=Math.floor(t/60%60),a=Math.floor(t%60);return{hours:n,minutes:r,seconds:a,formatUnit:function(){var i=e.unitDisplay,o=h(h({unitDisplay:void 0===i?"short":i},l()(e,["unitDisplay"])),{},{style:"unit"});return 0===t?j(a,h(h({},o),{},{unit:"second"})):Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),a?j(a,h(h({},o),{},{unit:"second"})):"",r?j(r,h(h({},o),{},{unit:"minute"})):"",n?j(n,h(h({},o),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var e=Object(p.sprintf)(// translators: %s number of seconds with "s" as the abbreviated unit.
Object(p.__)("%ds","google-site-kit"),a);if(0===t)return e;var i=Object(p.sprintf)(// translators: %s number of minutes with "m" as the abbreviated unit.
Object(p.__)("%dm","google-site-kit"),r),o=Object(p.sprintf)(// translators: %s number of hours with "h" as the abbreviated unit.
Object(p.__)("%dh","google-site-kit"),n);return Object(p.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(p._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),a?e:"",r?i:"",n?o:"").trim()}}},y=function(t){return 1e6<=t?Math.round(t/1e5)/10:1e4<=t?Math.round(t/1e3):1e3<=t?Math.round(t/100)/10:t},w=function(t){var e={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in millions.
Object(p.__)("%sM","google-site-kit"),j(y(t),t%10==0?{}:e)):1e4<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),j(y(t))):1e3<=t?Object(p.sprintf)(// translators: %s: an abbreviated number in thousands.
Object(p.__)("%sK","google-site-kit"),j(y(t),t%10==0?{}:e)):j(t,{signDisplay:"never",maximumFractionDigits:1})},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=Object(f.isFinite)(t)?t:Number(t),Object(f.isFinite)(t)||(console.warn("Invalid number",t,o()(t)),t=0);var n={};if("%"===e)n={style:"percent",maximumFractionDigits:2};else{if("s"===e)return b(t,{unitDisplay:"narrow"});e&&"string"==typeof e?n={style:"currency",currency:e}:Object(f.isPlainObject)(e)&&(n=h({},e))}var r=n,a=r.style,i=void 0===a?"metric":a;return"metric"===i?w(t):"duration"===i?b(t,e):j(t,n)},k=v()(console.warn),j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.locale,r=void 0===n?x():n,i=l()(e,["locale"]);try{return new Intl.NumberFormat(r,i).format(t)}catch(e){k("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(r),", ").concat(JSON.stringify(i)," ).format( ").concat(o()(t)," )"),e.message)}for(var u={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},c=["signDisplay","compactDisplay"],s={},f=0,d=Object.entries(i);f<d.length;f++){var v=a()(d[f],2),p=v[0],g=v[1];u[p]&&g===u[p]||(c.includes(p)||(s[p]=g))}try{return new Intl.NumberFormat(r,s).format(t)}catch(e){return new Intl.NumberFormat(r).format(t)}},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.locale,r=void 0===n?x():n,a=e.style,i=void 0===a?"long":a,o=e.type,u=void 0===o?"conjunction":o;if(Intl.ListFormat){var c=new Intl.ListFormat(r,{style:i,type:u});return c.format(t)}
/* translators: used between list items, there is a space after the comma. */var s=Object(p.__)(", ","google-site-kit");return t.join(s)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=Object(f.get)(e,["_googlesitekitLegacyData","locale"]);if(n){var r=n.match(/^(\w{2})?(_)?(\w{2})/);if(r&&r[0])return r[0].replace(/_/g,"-")}return e.navigator.language}}).call(this,n(21))},73:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a}));var r=n(121),a=n.n(r)()(t)}).call(this,n(21))},78:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s}));var r=n(13),a=n.n(r);function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=function(){t.localStorage&&t.localStorage.clear(),t.sessionStorage&&t.sessionStorage.clear()},c=function(t){for(var e=location.search.substr(1).split("&"),n={},r=0;r<e.length;r++)n[e[r].split("=")[0]]=decodeURIComponent(e[r].split("=")[1]);return t?n.hasOwnProperty(t)?decodeURIComponent(n[t].replace(/\+/g," ")):"":n},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,n=new URL(e.href);if(t)return n.searchParams&&n.searchParams.get?n.searchParams.get(t):c(t);var r,o={},u=i(n.searchParams.entries());try{for(u.s();!(r=u.n()).done;){var s=a()(r.value,2),l=s[0],f=s[1];o[l]=f}}catch(t){u.e(t)}finally{u.f()}return o}}).call(this,n(21))},84:function(t,e,n){"use strict";(function(t){n(46),n(47)}).call(this,n(21))},85:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var r=n(174),a=n(61),i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(e)))return"";var i=n.invertColor,o=void 0!==i&&i;return Object(r.a)(t.createElement(a.a,{direction:e>0?"up":"down",invertColor:o}))},o=function(t){var e,n,r,a,i,o,u,c,s,l,f,d,v,p,g;if(void 0!==t)return 1===(null==t||null===(e=t[0])||void 0===e||null===(n=e.data)||void 0===n||null===(r=n.rows)||void 0===r?void 0:r.length)||(null==t||null===(a=t[0])||void 0===a||null===(i=a.data)||void 0===i||null===(o=i.rows)||void 0===o||null===(u=o[0])||void 0===u||null===(c=u.metrics)||void 0===c||null===(s=c[0])||void 0===s||null===(l=s.values)||void 0===l?void 0:l[0])===(null==t||null===(f=t[0])||void 0===f||null===(d=f.data)||void 0===d||null===(v=d.totals)||void 0===v||null===(p=v[0])||void 0===p||null===(g=p.values)||void 0===g?void 0:g[0])},u=function(t,e){return t>0&&e>0?t/e-1:t>0?1:e>0?-1:0}}).call(this,n(3))},86:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l}));var r=n(6),a=n.n(r),i=n(87),o=n(88);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s={activeModules:[],isAuthenticated:!1,referenceSiteURL:"",trackingEnabled:!1,trackingID:"",userIDHash:"",userRoles:[]};function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=c(c({},s),e);a.referenceSiteURL&&(a.referenceSiteURL=a.referenceSiteURL.toString().replace(/\/+$/,""));var u=Object(i.a)(a,n);return{enableTracking:function(){a.trackingEnabled=!0},disableTracking:function(){a.trackingEnabled=!1},initializeSnippet:u,isTrackingEnabled:function(){return!!a.trackingEnabled},trackEvent:Object(o.a)(a,n,u,r)}}}).call(this,n(21))},87:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var r=n(48),a=n(29);function i(e,n){var i,o=Object(r.a)(n);return function(){var n=t.document;if(void 0===i&&(i=!!n.querySelector("script[".concat(a.b,"]"))),!i){var r=n.createElement("script");r.setAttribute(a.b,""),r.async=!0,r.src="https://www.googletagmanager.com/gtag/js?id=".concat(e.trackingID,"&l=").concat(a.a),n.head.appendChild(r),o("js",new Date),o("config",e.trackingID,{send_page_view:e.isSiteKitScreen}),i=!0}}}}).call(this,n(21))},88:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(5),a=n.n(r),i=n(6),o=n.n(i),u=n(14),c=n.n(u),s=n(48),l=n(33);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n,r){var i=Object(s.a)(e);return function(){var e=c()(a.a.mark((function e(o,u,c,s){var f,v,p,g,h,b,m,y,w,O;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=t.activeModules,v=t.referenceSiteURL,p=t.trackingEnabled,g=t.trackingID,h=t.userIDHash,b=t.userRoles,m=void 0===b?[]:b,y=t.isAuthenticated,w=t.pluginVersion,p){e.next=3;break}return e.abrupt("return");case 3:return n(),O={send_to:g,event_category:o,event_label:c,value:s,dimension1:v,dimension2:m.join(","),dimension3:h,dimension4:w||"",dimension5:Array.from(l.a).join(","),dimension6:f.join(","),dimension7:y?1:0},e.abrupt("return",new Promise((function(t){var e,n,a=setTimeout((function(){r.console.warn('Tracking event "'.concat(u,'" (category "').concat(o,'") took too long to fire.')),t()}),1e3),c=function(){clearTimeout(a),t()};i("event",u,d(d({},O),{},{event_callback:c})),(null===(e=r._gaUserPrefs)||void 0===e||null===(n=e.ioo)||void 0===n?void 0:n.call(e))&&c()})));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}()}},886:function(t,e,n){"use strict";n.r(e),function(t){var r=n(600);void 0===t.googlesitekit&&(t.googlesitekit={}),void 0===t.googlesitekit.api&&(t.googlesitekit.api=r.a),e.default=r.a}.call(this,n(21))}},[[886,1,0]]]);