!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.query=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if("string"!=typeof e)return e;return t.querySelector(e)},t.queryAll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if("string"!=typeof e)return e;return Array.prototype.slice.call(t.querySelectorAll(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.link=document.createElement("a")}return o(e,[{key:"setPath",value:function(e){this.link.href=e}},{key:"getPath",value:function(){var e=this.link.pathname;return"/"!=e[0]&&(e="/"+e),e}},{key:"getAddress",value:function(){var e=this.link.pathname+this.link.search;return"/"!=e[0]&&(e="/"+e),e}},{key:"getHash",value:function(){return this.link.hash}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=x(n(8)),s=x(n(10)),a=x(n(1)),l=x(n(11)),c=x(n(12)),u=x(n(13)),d=x(n(14)),h=x(n(15)),p=x(n(16)),f=x(n(17)),m=x(n(18)),g=x(n(19)),v=x(n(20)),y=x(n(21)),w=x(n(22)),b=x(n(23)),E=x(n(24)),k=x(n(25)),S=x(n(26)),P=x(n(27)),L=x(n(28)),T=x(n(29)),C=n(0);function x(e){return e&&e.__esModule?e:{default:e}}var A=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n={cache:!0,animationSelector:'[class*="transition-"]',elements:["#swup"],pageClassPrefix:"",debugMode:!1,scroll:!0,doScrollingRightAway:!1,animateScroll:!0,scrollFriction:.3,scrollAcceleration:.04,preload:!0,support:!0,plugins:[],skipPopStateHandling:function(e){return!e.state||"swup"!=e.state.source},animateHistoryBrowsing:!1,LINK_SELECTOR:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',FORM_SELECTOR:"form[data-swup-form]"};this.transition={};var i=o({},n,t);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],hoverLink:[],openPageInNewTab:[],pageLoaded:[],pagePreloaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],scrollDone:[],scrollStart:[],serverError:[],submitForm:[],willReplaceContent:[]},this.scrollToElement=null,this.preloadPromise=null,this.options=i,this.plugins=[],this.getUrl=m.default,this.cache=new s.default,this.link=new a.default,this.transitionEndEvent=(0,l.default)(),this.getDataFromHtml=u.default,this.getPage=c.default,this.scrollTo=g.default,this.loadPage=d.default,this.renderPage=h.default,this.createState=p.default,this.triggerEvent=f.default,this.classify=v.default,this.doScrolling=y.default,this.markSwupElements=w.default,this.on=b.default,this.off=E.default,this.updateTransition=k.default,this.preloadPage=S.default,this.preloadPages=P.default,this.usePlugin=L.default,this.log=T.default,this.enable=this.enable,this.destroy=this.destroy,this.options.debugMode&&(window.swup=this),this.getUrl(),this.enable()}return i(e,[{key:"enable",value:function(){var e=this;if(this.options.support){if(!("pushState"in window.history))return void console.warn("pushState is not supported");if(!(0,l.default)())return void console.warn("transitionEnd detection is not supported");if(this.transitionEndEvent=(0,l.default)(),"undefined"==typeof Promise||-1===Promise.toString().indexOf("[native code]"))return void console.warn("Promise is not supported")}this.delegatedListeners={},this.delegatedListeners.click=(0,r.default)(document,this.options.LINK_SELECTOR,"click",this.linkClickHandler.bind(this)),this.delegatedListeners.mouseover=(0,r.default)(document.body,this.options.LINK_SELECTOR,"mouseover",this.linkMouseoverHandler.bind(this)),this.delegatedListeners.formSubmit=(0,r.default)(document,this.options.FORM_SELECTOR,"submit",this.formSubmitHandler.bind(this)),window.addEventListener("popstate",this.popStateHandler.bind(this));var t=this.getDataFromHtml(document.documentElement.outerHTML);t.url=this.currentUrl,this.options.cache&&this.cache.cacheUrl(t,this.options.debugMode),this.markSwupElements(document.documentElement),this.options.plugins.forEach((function(t){return e.usePlugin(t)})),window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href),this.options.animateHistoryBrowsing&&(window.history.scrollRestoration="manual"),this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),this.triggerEvent("pageView"),this.preloadPages()}},{key:"destroy",value:function(){this.delegatedListeners.click.destroy(),this.delegatedListeners.mouseover.destroy(),window.removeEventListener("popstate",this.popStateHandler.bind(this)),this.cache.empty(),(0,C.queryAll)("[data-swup]").forEach((function(e){delete e.dataset.swup})),this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)this.triggerEvent("openPageInNewTab",e);else if(0===e.button){this.triggerEvent("clickLink",e);var t=new a.default;if(e.preventDefault(),t.setPath(e.delegateTarget.href),t.getAddress()==this.currentUrl||""==t.getAddress())if(""!=t.getHash()){this.triggerEvent("samePageWithHash",e);var n=document.querySelector(t.getHash());if(null!=n){if(this.options.scroll){var o=n.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,o)}history.replaceState({url:t.getAddress()+t.getHash(),random:Math.random(),source:"swup"},document.title,t.getAddress()+t.getHash())}else console.warn("Element for offset not found ("+t.getHash()+")")}else this.triggerEvent("samePage",e),this.options.scroll&&this.scrollTo(document.body,0,1);else{""!=t.getHash()&&(this.scrollToElement=t.getHash());var i=e.delegateTarget.dataset.swupTransition;this.loadPage({url:t.getAddress(),customTransition:i},!1)}}}},{key:"linkMouseoverHandler",value:function(e){var t=this;if(this.triggerEvent("hoverLink",e),this.options.preload){var n=new a.default;n.setPath(e.delegateTarget.href),n.getAddress()==this.currentUrl||this.cache.exists(n.getAddress())||null!=this.preloadPromise||(this.preloadPromise=new Promise((function(o,i){t.getPage({url:n.getAddress()},(function(r,s){if(500===s.status)return t.triggerEvent("serverError",e),void i(n.getAddress());var a=t.getDataFromHtml(r,s);null!=a?(a.url=n.getAddress(),t.cache.cacheUrl(a,t.options.debugMode),t.triggerEvent("pagePreloaded",e),o(),t.preloadPromise=null):i(n.getAddress())}))})),this.preloadPromise.route=n.getAddress())}}},{key:"formSubmitHandler",value:function(e){if(e.metaKey)this.triggerEvent("openFormSubmitInNewTab",e);else{this.triggerEvent("submitForm",e),e.preventDefault();var t=e.target,n=new FormData(t),o=new a.default;if(o.setPath(t.action),""!=o.getHash()&&(this.scrollToElement=o.getHash()),"get"!=t.method.toLowerCase())this.cache.remove(o.getAddress()),this.loadPage({url:o.getAddress(),method:t.method,data:n});else{var i=o.getAddress()||window.location.href,r=(0,C.queryAll)("input, select",t);-1==i.indexOf("?")?i+="?":i+="&",r.forEach((function(e){"checkbox"==e.type||"radio"==e.type?e.checked&&(i+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"):i+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"})),i=i.slice(0,-1),this.cache.remove(i),this.loadPage({url:i})}}}},{key:"popStateHandler",value:function(e){var t=new a.default;this.options.skipPopStateHandling(e)||(t.setPath(e.state?e.state.url:window.location.pathname),""!=t.getHash()?this.scrollToElement=t.getHash():e.preventDefault(),this.triggerEvent("popState",e),this.loadPage({url:t.getAddress()},e))}}]),e}();t.default=A},function(e,t,n){"use strict";n.r(t);n(4),n(5),n(6);var o=n(2);const i=new(n.n(o).a)({doScrollingRightAway:!1,animateScroll:!1,scrollFriction:.3,scrollAcceleration:.04});document.body.classList.remove("no-js"),document.body.classList.add("js");let r=document.querySelectorAll(".lazyload");var s;lazyload(r,{root:null,rootMargin:"0px",threshold:0}),(s=jQuery)((function(){s(".overlay-search").removeClass("overlay-open"),s("body").removeClass("overlay-open"),s("body").removeClass("search-open"),s(".search-results > div").remove(),jQuery(".search-mobile input").val(null),jQuery(".overlay-search input").val(null),s("textarea#comment").keyup((function(){s(".hidden-by-default").addClass("show")})),void 0===s("a").attr('href^="#"')||s('a[href^="#"]').on("click",(function(e){e.preventDefault();var t=this.hash,n=s(t);s("html, body").stop().animate({scrollTop:n.offset().top},500,"swing",(function(){window.location.hash=t}))})),i.on("contentReplaced",(function(){s(".overlay-search").removeClass("overlay-open"),s("body").removeClass("overlay-open"),s("body").removeClass("search-open"),s(".search-results > div").remove(),jQuery(".search-mobile input").val(null),jQuery(".overlay-search input").val(null),s("textarea#comment").keyup((function(){s(".hidden-by-default").addClass("show")})),s('a[href^="#"]').on("click",(function(e){e.preventDefault();var t=this.hash,n=s(t);s("html, body").stop().animate({scrollTop:n.offset().top},500,"swing",(function(){window.location.hash=t}))}));var e=new Vue({el:".block-loadable .items-vue",data:{posts:[]}});jQuery(".block-loadable button.load-more").on("click",(function(t){t.preventDefault(),function(){jQuery(".block-loadable .load-more-spinner").show(),jQuery(".block-loadable .no-posts").hide();var t=jQuery(".block-loadable button.load-more").closest(".load-more-container"),n=jQuery(".block-loadable .load-more-container").attr("data-use-query"),o=window[n],i=jQuery(".items-vue .post:first"),r=i.offset().top-s(document).scrollTop();o.paged=o.paged+1,o._embed=!0,jQuery.ajax({url:air.baseurl+"wp_query/args/?"+jQuery.param(o)}).done((function(n){jQuery(document).scrollTop(i.offset().top-r),0!==n.length&&!1!==n?(jQuery.each(n,(function(){e.posts.push(this),jQuery(".block-loadable .load-more-spinner").hide()})),n.length<air.posts_per_page?t.hide():t.show()):0==n&&(t.hide(),jQuery(".block-loadable .load-more-spinner").hide())}))}()})),document.body.classList.remove("no-js"),document.body.classList.add("js")}));var e,t,n,o,r=new Vue({el:".block-loadable .items-vue",data:{posts:[]}});jQuery(".block-loadable button.load-more").on("click",(function(e){e.preventDefault(),function(){jQuery(".block-loadable .load-more-spinner").show(),jQuery(".block-loadable .no-posts").hide();var e=jQuery(".block-loadable button.load-more").closest(".load-more-container"),t=jQuery(".block-loadable .load-more-container").attr("data-use-query"),n=window[t],o=jQuery(".items-vue .post:first"),i=o.offset().top-s(document).scrollTop();n.paged=n.paged+1,n._embed=!0,jQuery.ajax({url:air.baseurl+"wp_query/args/?"+jQuery.param(n)}).done((function(t){jQuery(document).scrollTop(o.offset().top-i),0!==t.length&&!1!==t?(jQuery.each(t,(function(){r.posts.push(this),jQuery(".block-loadable .load-more-spinner").hide()})),t.length<air.posts_per_page?e.hide():e.show()):0==t&&(e.hide(),jQuery(".block-loadable .load-more-spinner").hide())}))}()})),s(window).scroll((function(){s(window).scrollTop()>=200?(s(".scroll-indicator").addClass("fadeout"),setTimeout((function(){s(".scroll-indicator").hide()}),500)):(s(".scroll-indicator").removeClass("fadeout"),setTimeout((function(){s(".scroll-indicator").show()}),500))})),s(window).ready((function(){s(".container-article img").each((function(){s(this).width()>350&&s(this).addClass("size-large")}))})),s(".nav-burger").click((function(){s("body").toggleClass("site-head-open")})),s(".site-head-logo").hover((function(){s("body").addClass("splat-toggle")}),(function(){s("body").removeClass("splat-toggle")})),function(){s(".rain").empty();for(var e=0,t="",n="";e<100;){var o=Math.floor(98*Math.random()+1),i=Math.floor(4*Math.random()+2);t+='<div class="drop" style="left: '+(e+=i)+"%; bottom: "+(i+i-1+100)+"%; animation-delay: 0."+o+"s; animation-duration: 0.5"+o+'s;"><div class="stem" style="animation-delay: 0.'+o+"s; animation-duration: 0.5"+o+'s;"></div><div class="splat" style="animation-delay: 0.'+o+"s; animation-duration: 0.5"+o+'s;"></div></div>',n+='<div class="drop" style="right: '+e+"%; bottom: "+(i+i-1+100)+"%; animation-delay: 0."+o+"s; animation-duration: 0.5"+o+'s;"><div class="stem" style="animation-delay: 0.'+o+"s; animation-duration: 0.5"+o+'s;"></div><div class="splat" style="animation-delay: 0.'+o+"s; animation-duration: 0.5"+o+'s;"></div></div>'}s(".rain.front-row").append(t),s(".rain.back-row").append(n)}(),s(".search-trigger").on("click",(function(e){e.preventDefault(),s("body").removeClass("main-navigation-open"),s("body").removeClass("is-scrolling-prevented"),s(".main-navigation").fadeOut(600),s(".main-navigation").removeClass("is-open"),s(".overlay-search, body").addClass("overlay-open"),s("body").addClass("search-open")})),s(".button-close, .article--link").on("click",(function(){s(this).parent().parent().parent(".overlay").removeClass("overlay-open"),s("body").removeClass("overlay-open"),s("body").removeClass("search-open"),s(".search-results > div").remove(),jQuery(".search-mobile input").val(null),jQuery(".overlay-search input").val(null)})),s(".search-input").keyup((function(e){27===e.keyCode&&(s(this).parent().parent().parent(".overlay").removeClass("overlay-open"),s("body").removeClass("overlay-open"),s("body").removeClass("search-open"),s(".search-results > div").remove(),jQuery(".search-mobile input").val(null),jQuery(".overlay-search input").val(null))})),s(".search-form input").on("propertychange change click keyup input paste",(e=function(){var e=s(".search-form input").val();e.trim()?s.getJSON(air.baseurl+"rollemaa/v1/search?s="+e,(function(e){s(".search-results").empty(),0===e.length?s(".search-results").append('<li class="no-results"><h2>Ei hakutuloksia.</h2></li>'):s.each(e,(function(e,t){s(".search-results").append('<li><h2><a class="article--link" href="'+t.link+'">'+t.post_title+"</a></h2></li>")}))})):s(".search-results").empty()},t=250,function(){var i=this,r=arguments,s=function(){o=null,n||e.apply(i,r)},a=n&&!o;clearTimeout(o),o=setTimeout(s,t),a&&e.apply(i,r)}))}))},function(e,t){/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",(function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())}),!1)},function(e,t,n){
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.7
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
var o;o=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var e=document.documentElement,t=null,n="initial",o=n,i=Date.now(),r="false",s=["button","input","select","textarea"],a=[],l=[16,17,18,91,93],c=[],u={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch",touchend:"touch"},d=!1,h={x:null,y:null},p={2:"touch",3:"touch",4:"mouse"},f=!1;try{var m=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("test",null,m)}catch(e){}var g=function(){var e=!!f&&{passive:!0};document.addEventListener("DOMContentLoaded",v),window.PointerEvent?(window.addEventListener("pointerdown",y),window.addEventListener("pointermove",b)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",y),window.addEventListener("MSPointerMove",b)):(window.addEventListener("mousedown",y),window.addEventListener("mousemove",b),"ontouchstart"in window&&(window.addEventListener("touchstart",y,e),window.addEventListener("touchend",y))),window.addEventListener(T(),b,e),window.addEventListener("keydown",y),window.addEventListener("keyup",y),window.addEventListener("focusin",E),window.addEventListener("focusout",k)},v=function(){if(r=!(e.getAttribute("data-whatpersist")||"false"===document.body.getAttribute("data-whatpersist")))try{window.sessionStorage.getItem("what-input")&&(n=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(o=window.sessionStorage.getItem("what-intent"))}catch(e){}w("input"),w("intent")},y=function(e){var t=e.which,i=u[e.type];"pointer"===i&&(i=P(e));var r=!c.length&&-1===l.indexOf(t),a=c.length&&-1!==c.indexOf(t),d="keyboard"===i&&t&&(r||a)||"mouse"===i||"touch"===i;if(L(i)&&(d=!1),d&&n!==i&&(S("input",n=i),w("input")),d&&o!==i){var h=document.activeElement;h&&h.nodeName&&(-1===s.indexOf(h.nodeName.toLowerCase())||"button"===h.nodeName.toLowerCase()&&!A(h,"form"))&&(S("intent",o=i),w("intent"))}},w=function(t){e.setAttribute("data-what"+t,"input"===t?n:o),C(t)},b=function(e){var t=u[e.type];"pointer"===t&&(t=P(e)),x(e),(!d&&!L(t)||d&&"wheel"===e.type||"mousewheel"===e.type||"DOMMouseScroll"===e.type)&&o!==t&&(S("intent",o=t),w("intent"))},E=function(n){n.target.nodeName?(t=n.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),n.target.classList&&n.target.classList.length&&e.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))):k()},k=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},S=function(e,t){if(r)try{window.sessionStorage.setItem("what-"+e,t)}catch(e){}},P=function(e){return"number"==typeof e.pointerType?p[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},L=function(e){var t=Date.now(),o="mouse"===e&&"touch"===n&&t-i<200;return i=t,o},T=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},C=function(e){for(var t=0,i=a.length;t<i;t++)a[t].type===e&&a[t].fn.call(void 0,"input"===e?n:o)},x=function(e){h.x!==e.screenX||h.y!==e.screenY?(d=!1,h.x=e.screenX,h.y=e.screenY):d=!0},A=function(e,t){var n=window.Element.prototype;if(n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest)return e.closest(t);do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null};return"addEventListener"in window&&Array.prototype.indexOf&&(u[T()]="mouse",g()),{ask:function(e){return"intent"===e?o:n},element:function(){return t},ignoreKeys:function(e){l=e},specificKeys:function(e){c=e},registerOnChange:function(e,t){a.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=function(e){for(var t=0,n=a.length;t<n;t++)if(a[t].fn===e)return t}(e);(t||0===t)&&a.splice(t,1)},clearStorage:function(){window.sessionStorage.clear()}}}()}])},e.exports=o()},function(e,t,n){(function(t){
/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 * Modified by rolle
 *
 */
var n;n=void 0!==t?t:this.window||this.global,e.exports=function(e){"use strict";e=window;const t={src:"data-src",srcmobile:"data-src-mobile",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0},n=function(){let e={},t=!1,o=0,i=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],o++);let r=function(o){for(let i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t&&"[object Object]"===Object.prototype.toString.call(o[i])?e[i]=n(!0,e[i],o[i]):e[i]=o[i])};for(;o<i;o++)r(arguments[o]);return e};function o(e,o){this.settings=n(t,o||{}),this.images=e||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}if(o.prototype={init:function(){if(!e.IntersectionObserver)return void this.loadImages();let t=this,n={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver((function(e){Array.prototype.forEach.call(e,(function(e){if(e.isIntersecting){const n=e.target;void 0!==n.nextElementSibling&&null!=n.nextElementSibling&&n.nextElementSibling.classList.add("reveal"),t.observer.unobserve(e.target);let o=n.getAttribute(t.settings.src),i=(n.getAttribute(t.settings.srcset),n.getAttribute(t.settings.srcmobile));"img"===n.tagName.toLowerCase()?document.documentElement.clientWidth<600?n.src=i:n.src=o:document.documentElement.clientWidth<600?n.nextElementSibling.style.backgroundImage="url("+i+")":n.nextElementSibling.style.backgroundImage="url("+o+")"}}))}),n),Array.prototype.forEach.call(this.images,(function(e){t.observer.observe(e)}))},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let e=this;Array.prototype.forEach.call(this.images,(function(t){let n=t.getAttribute(e.settings.src),o=t.getAttribute(e.settings.srcset),i=t.getAttribute(e.settings.srcmobile);"img"===t.tagName.toLowerCase()?(n&&(t.src=n),o&&(t.srcset=o),i&&(t.srcmobile=i)):document.documentElement.clientWidth<600?t.style.backgroundImage="url('"+i+"')":t.style.backgroundImage="url('"+n+"')"}))},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},e.lazyload=function(e,t){return new o(e,t)},e.jQuery){const t=e.jQuery;t.fn.lazyload=function(e){return(e=e||{}).attribute=e.attribute||"data-src",new o(t.makeArray(this),e),this}}return o}(n)}).call(this,n(7))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var o=n(9);function i(e,t,n,i){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&i.call(e,n)}}e.exports=function(e,t,n,o,r){var s=i.apply(this,arguments);return e.addEventListener(n,s,r),{destroy:function(){e.removeEventListener(n,s,r)}}}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pages={},this.count=0,this.last=null}return o(e,[{key:"cacheUrl",value:function(e,t){this.count++,e.url in this.pages==!1&&(this.pages[e.url]=e),this.last=this.pages[e.url],t&&this.displayCache()}},{key:"getPage",value:function(e){return this.pages[e]}},{key:"displayCache",value:function(){for(var e in console.groupCollapsed("Cache ("+Object.keys(this.pages).length+")"),this.pages)console.log(this.pages[e]);console.groupEnd()}},{key:"exists",value:function(e){return e in this.pages}},{key:"empty",value:function(e){this.pages={},this.count=0,this.last=null,e&&console.log("Cache cleared")}},{key:"remove",value:function(e){delete this.pages[e]}}]),e}();t.default=i},function(e,t,n){"use strict";e.exports=function(){var e=document.createElement("div"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return t[n];return!1}},function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={url:window.location.pathname+window.location.search,method:"GET",data:null},i=o({},n,e),r=new XMLHttpRequest;return r.onreadystatechange=function(){4===r.readyState&&(500!==r.status?t(r.responseText,r):t(null,r))},r.open(i.method,i.url,!0),r.setRequestHeader("X-Requested-With","swup"),r.send(i.data),r}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e,t){var n=this,i=e.replace("<body",'<div id="swupBody"').replace("</body>","</div>"),r=document.createElement("div");r.innerHTML=i;for(var s=[],a=0;a<this.options.elements.length;a++){if(null==r.querySelector(this.options.elements[a]))return console.warn("Element "+this.options.elements[a]+" is not found in cached page."),null;(0,o.queryAll)(this.options.elements[a]).forEach((function(e,t){(0,o.queryAll)(n.options.elements[a],r)[t].dataset.swup=s.length,s.push((0,o.queryAll)(n.options.elements[a],r)[t].outerHTML)}))}return{title:r.querySelector("title").innerText,pageClass:r.querySelector("#swupBody").className,originalContent:e,blocks:s,responseURL:null!=t?t.responseURL:window.location.href}}},function(e,t,n){"use strict";var o=n(0),i=Array.prototype.forEach;e.exports=function(e,t){var n=this;this.options.doScrollingRightAway&&!this.scrollToElement&&this.doScrolling(t);var r=[];if(null!=e.customTransition?(this.updateTransition(window.location.pathname,e.url,e.customTransition),document.documentElement.classList.add("to-"+this.classify(e.customTransition))):this.updateTransition(window.location.pathname,e.url),!t||this.options.animateHistoryBrowsing){this.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing"),document.documentElement.classList.add("is-leaving"),document.documentElement.classList.add("is-animating"),t&&document.documentElement.classList.add("is-popstate"),document.documentElement.classList.add("to-"+this.classify(e.url));var s=(0,o.queryAll)(this.options.animationSelector);if(i.call(s,(function(e){var t=new Promise((function(t){e.addEventListener(n.transitionEndEvent,(function(n){e==n.target&&t()}))}));r.push(t)})),Promise.all(r).then((function(){n.triggerEvent("animationOutDone")})),null!=this.scrollToElement)var a=e.url+this.scrollToElement;else a=e.url;t||this.createState(a)}else this.triggerEvent("animationSkipped");if(this.cache.exists(e.url)){var l=new Promise((function(e){e()}));this.triggerEvent("pageRetrievedFromCache")}else if(this.preloadPromise&&this.preloadPromise.route==e.url)l=this.preloadPromise;else var l=new Promise((function(t,o){n.getPage(e,(function(i,r){if(500===r.status)return n.triggerEvent("serverError"),void o(e.url);var s=n.getDataFromHtml(i,r);null!=s?(s.url=e.url,n.cache.cacheUrl(s,n.options.debugMode),n.triggerEvent("pageLoaded"),t()):o(e.url)}))}));Promise.all(r.concat([l])).then((function(){n.renderPage(n.cache.getPage(e.url),t),n.preloadPromise=null})).catch((function(e){n.options.skipPopStateHandling=function(){return window.location=e,!0},window.history.go(-1)}))}},function(e,t,n){"use strict";var o,i=n(0),r=n(1),s=(o=r)&&o.__esModule?o:{default:o};var a=Array.prototype.forEach;e.exports=function(e,t){var n=this;document.documentElement.classList.remove("is-leaving");var o=new s.default;o.setPath(e.responseURL),window.location.pathname!==o.getPath()&&window.history.replaceState({url:o.getPath(),random:Math.random(),source:"swup"},document.title,o.getPath()),t&&!this.options.animateHistoryBrowsing||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent");for(var r=0;r<e.blocks.length;r++)document.body.querySelector('[data-swup="'+r+'"]').outerHTML=e.blocks[r];document.title=e.title,!1!==this.options.pageClassPrefix&&document.body.className.split(" ").forEach((function(e){""!=e&&e.includes(n.options.pageClassPrefix)&&document.body.classList.remove(e)})),""!=e.pageClass&&e.pageClass.split(" ").forEach((function(e){""!=e&&e.includes(n.options.pageClassPrefix)&&document.body.classList.add(e)})),this.triggerEvent("contentReplaced"),this.triggerEvent("pageView"),this.options.cache||this.cache.empty(this.options.debugMode),setTimeout((function(){t&&!n.options.animateHistoryBrowsing||(n.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating"))}),10),this.options.doScrollingRightAway&&!this.scrollToElement||this.doScrolling(t);var l=(0,i.queryAll)(this.options.animationSelector),c=[];a.call(l,(function(e){var t=new Promise((function(t){e.addEventListener(n.transitionEndEvent,(function(n){e==n.target&&t()}))}));c.push(t)})),this.preloadPages(),t&&!this.options.animateHistoryBrowsing||Promise.all(c).then((function(){n.triggerEvent("animationInDone"),document.documentElement.className.split(" ").forEach((function(e){(new RegExp("^to-").test(e)||"is-changing"===e||"is-rendering"===e||"is-popstate"===e)&&document.documentElement.classList.remove(e)}))})),this.getUrl(),this.scrollToElement=null}},function(e,t,n){"use strict";e.exports=function(e){window.history.pushState({url:e||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,e||window.location.href.split(window.location.hostname)[1])}},function(e,t,n){"use strict";e.exports=function(e,t){this.options.debugMode&&t?(console.groupCollapsed("%cswup:%c"+e,"color: #343434","color: #009ACD"),console.log(t),console.groupEnd()):this.options.debugMode&&console.log("%cswup:%c"+e,"color: #343434","color: #009ACD"),this._handlers[e].forEach((function(e){try{e(t)}catch(e){console.error(e)}}));var n=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(n)}},function(e,t,n){"use strict";e.exports=function(){this.currentUrl=window.location.pathname+window.location.search}},function(e,t,n){"use strict";e.exports=function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.options.animateScroll,i=1-this.options.scrollFriction,r=this.options.scrollAcceleration,s=0,a=0,l=0,c=0,u=0,d=null;function h(){return document.body.scrollTop||document.documentElement.scrollTop}var p=function e(){f();g(),1===u&&l>s||-1===u&&l<s?d=requestAnimationFrame(e):(window.scrollTo(0,l),n.triggerEvent("scrollDone"))};function f(){var e=c-s;return m(e*r),s+=a*=i,e}var m=function(e){a+=e},g=function(){window.scrollTo(0,s)};window.addEventListener("mousewheel",(function(e){d&&(cancelAnimationFrame(d),d=null)}),{passive:!0});var v=function(e,t){s=h(),c=e+(u=s>e?-1:1),a=0,s!=(l=e)?p():n.triggerEvent("scrollDone")};this.triggerEvent("scrollStart"),0==o?(window.scrollTo(0,t),this.triggerEvent("scrollDone")):v(t)}},function(e,t,n){"use strict";e.exports=function(e){var t=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return"/"==t[0]&&(t=t.splice(1)),""==t&&(t="homepage"),t}},function(e,t,n){"use strict";e.exports=function(e){if(this.options.scroll&&(!e||this.options.animateHistoryBrowsing))if(null!=this.scrollToElement){var t=document.querySelector(this.scrollToElement);if(null!=t){var n=t.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,n)}else console.warn("Element for offset not found ("+this.scrollToElement+")");this.scrollToElement=null}else this.scrollTo(document.body,0)}},function(e,t,n){"use strict";var o=n(0);e.exports=function(e){for(var t=this,n=0,i=0;i<this.options.elements.length;i++)null==e.querySelector(this.options.elements[i])?console.warn("Element "+this.options.elements[i]+" is not in current page."):(0,o.queryAll)(this.options.elements[i]).forEach((function(r,s){(0,o.queryAll)(t.options.elements[i],e)[s].dataset.swup=n,n++}))}},function(e,t,n){"use strict";e.exports=function(e,t){this._handlers[e]?this._handlers[e].push(t):console.warn("Unsupported event "+e+".")}},function(e,t,n){"use strict";e.exports=function(e,t){var n=this;if(null!=e)if(null!=t)if(this._handlers[e]&&this._handlers[e].filter((function(e){return e===t})).length){var o=this._handlers[e].filter((function(e){return e===t}))[0],i=this._handlers[e].indexOf(o);i>-1&&this._handlers[e].splice(i,1)}else console.warn("Handler for event '"+e+"' no found.");else this._handlers[e]=[];else Object.keys(this._handlers).forEach((function(e){n._handlers[e]=[]}))}},function(e,t,n){"use strict";e.exports=function(e,t,n){"/"==e&&(e="/homepage"),"/"==t&&(t="/homepage"),this.transition={from:e.replace("/",""),to:t.replace("/","")},n&&(this.transition.custom=n)}},function(e,t,n){"use strict";var o,i=n(1),r=(o=i)&&o.__esModule?o:{default:o};e.exports=function(e){var t=this,n=new r.default;return n.setPath(e),new Promise((function(e,o){n.getAddress()==t.currentUrl||t.cache.exists(n.getAddress())?e(t.cache.getPage(n.getAddress())):t.getPage({url:n.getAddress()},(function(i,r){if(500===r.status)t.triggerEvent("serverError"),o();else{var s=t.getDataFromHtml(i,r);null!=s&&(s.url=n.getAddress(),t.cache.cacheUrl(s,t.options.debugMode),t.triggerEvent("pagePreloaded")),e(t.cache.getPage(n.getAddress()))}}))}))}},function(e,t,n){"use strict";var o=n(0);e.exports=function(){var e=this;this.options.preload&&(0,o.queryAll)("[data-swup-preload]").forEach((function(t){e.preloadPage(t.href)}))}},function(e,t,n){"use strict";e.exports=function(e,t){var n=this;t=Object.assign({},e.options,t),e.options=t;return this.plugins.push(e),e.exec(t,this,(function(){var e=n.cache.getPage(window.location.pathname+window.location.search),t=document.createElement("html");return t.innerHTML=e.originalContent,t})),this.plugins}},function(e,t,n){"use strict";e.exports=function(e){this.options.debugMode&&console.log(e+"%c","color: #009ACD")}}]);