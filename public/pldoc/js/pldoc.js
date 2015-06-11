!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(t){function e(t){return t.replace(/(:|\.|\/)/g,"\\$1")}var n="1.5.5",s={},l={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},i=function(e){var n=[],s=!1,l=e.dir&&"left"===e.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var e=t(this);e[l]()>0?n.push(this):(e[l](1),s=e[l]()>0,s&&n.push(this),e[l](0))}}),n.length||this.each(function(){"BODY"===this.nodeName&&(n=[this])}),"first"===e.el&&n.length>1&&(n=[n[0]]),n};t.fn.extend({scrollable:function(t){var e=i.call(this,{dir:t});return this.pushStack(e)},firstScrollable:function(t){var e=i.call(this,{el:"first",dir:t});return this.pushStack(e)},smoothScroll:function(n,s){if(n=n||{},"options"===n)return s?this.each(function(){var e=t(this),n=t.extend(e.data("ssOpts")||{},s);t(this).data("ssOpts",n)}):this.first().data("ssOpts");var l=t.extend({},t.fn.smoothScroll.defaults,n),i=t.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(n){var s=this,a=t(this),r=t.extend({},l,a.data("ssOpts")||{}),o=l.exclude,c=r.excludeWithin,h=0,u=0,f=!0,d={},p=location.hostname===s.hostname||!s.hostname,v=r.scrollTarget||t.smoothScroll.filterPath(s.pathname)===i,g=e(s.hash);if(r.scrollTarget||p&&v&&g){for(;f&&h<o.length;)a.is(e(o[h++]))&&(f=!1);for(;f&&u<c.length;)a.closest(c[u++]).length&&(f=!1)}else f=!1;f&&(r.preventDefault&&n.preventDefault(),t.extend(d,r,{scrollTarget:r.scrollTarget||g,link:s}),t.smoothScroll(d))}),this}}),t.smoothScroll=function(e,n){if("options"===e&&"object"==typeof n)return t.extend(s,n);var l,i,a,r,o,c=0,h="offset",u="scrollTop",f={},d={};"number"==typeof e?(l=t.extend({link:null},t.fn.smoothScroll.defaults,s),a=e):(l=t.extend({link:null},t.fn.smoothScroll.defaults,e||{},s),l.scrollElement&&(h="position","static"===l.scrollElement.css("position")&&l.scrollElement.css("position","relative"))),u="left"===l.direction?"scrollLeft":u,l.scrollElement?(i=l.scrollElement,/^(?:HTML|BODY)$/.test(i[0].nodeName)||(c=i[u]())):i=t("html, body").firstScrollable(l.direction),l.beforeScroll.call(i,l),a="number"==typeof e?e:n||t(l.scrollTarget)[h]()&&t(l.scrollTarget)[h]()[l.direction]||0,f[u]=a+c+l.offset,r=l.speed,"auto"===r&&(o=f[u]-i.scrollTop(),0>o&&(o*=-1),r=o/l.autoCoefficient),d={duration:r,easing:l.easing,complete:function(){l.afterScroll.call(l.link,l)}},l.step&&(d.step=l.step),i.length?i.stop().animate(f,d):l.afterScroll.call(l.link,l)},t.smoothScroll.version=n,t.smoothScroll.filterPath=function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},t.fn.smoothScroll.defaults=l}),$(document).ready(function(){function t(t){$.smoothScroll({offset:-200,easing:"swing",preventDefault:!1,speed:1e3,scrollElement:null,scrollTarget:$(this).attr("href")})}function e(t){$(".pldoc-nav-elements .pldoc-link").removeClass("is-current"),$(this).addClass("is-current")}function n(t){t.preventDefault(),window.open($(this).attr("href"))}function s(t){if("undefined"!=typeof t){var e,n=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);e=n&&4===n.length?"#"+("0"+parseInt(n[1],10).toString(16)).slice(-2)+("0"+parseInt(n[2],10).toString(16)).slice(-2)+("0"+parseInt(n[3],10).toString(16)).slice(-2):""}else e=" --- ";return e}$body=$("body"),$html=$("html"),$html.removeClass("no-js"),$('a[href^="#"]').not(".pldoc-tab-wrapper .pldoc-link").on("click",t),$('a[rel="external"]').on("click",n),$(".pldoc-nav-elements .pldoc-link").on("click",e);var l={vars:{tabContainer:$(".pldoc-tab-wrapper"),tabs:$(".pldoc-tab-labels"),tab:$(".pldoc-tab-label"),panels:$(".pldoc-tabs"),panel:$(".pldoc-tab"),activeClass:"is-active",hiddenClass:"is-hidden"},init:function(){this.handleTabClick()},resetInterface:function(t){var e=this;t.find(".pldoc-link").each(function(){$(this).removeClass(e.vars.activeClass)}),t.find(e.vars.panel).each(function(){$(this).removeClass(e.vars.activeClass).addClass(e.vars.hiddenClass)})},handleTabClick:function(){var t=this;t.vars.tab.find(".pldoc-link").on("click",function(e){e.preventDefault();var n=$(this).attr("href");t.resetInterface($(this).parent().parent().parent()),t.makeActive($(this),n)})},makeActive:function(t,e){var n=this;t.addClass(n.vars.activeClass),$(e).addClass(n.vars.activeClass).removeClass(n.vars.hiddenClass)}};$(".pldoc-tab-wrapper").length&&l.init(),$(".example").length&&$(".example").each(function(){var t=$(this).find(".swatch-color").css("backgroundColor");$(this).find(".swatch-meta .color-rgb").val(t),$(this).find(".swatch-meta .color-hex").val(s(t))}),$(".swatch-meta input").focus(function(){var t=$(this);t.select(),t.mouseup(function(){return t.unbind("mouseup"),!1})})}),$(function(){var t={vars:{wrapper:$("#icons-preview"),heading:$(".pldoc-tab-heading"),example:$(".example-icon .icon-display"),sliderControl:$("#iconFontSlider"),sliderValue:$("#iconFontSliderValue")},init:function(){this.listenForSlider()},listenForSlider:function(){var t=this;t.vars.sliderControl.on("input change",function(){t.updateIconSize($(this).val()),t.updateAria($(this).val()),t.updateInputText($(this).val())})},updateAria:function(t){var e=this;e.vars.sliderControl.attr("aria-now",t)},updateIconSize:function(t){var e=this;e.vars.example.css({width:t+"px"})},updateInputText:function(t){var e=this;e.vars.sliderValue.val(t)}};t.init()}),$(function(){var t={vars:{failClass:"fail-a11y-color"},init:function(){this.checkContrast()},rgbaToHex:function(t){var e,n=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);return e=n&&4===n.length?"#"+("0"+parseInt(n[1],10).toString(16)).slice(-2)+("0"+parseInt(n[2],10).toString(16)).slice(-2)+("0"+parseInt(n[3],10).toString(16)).slice(-2):"",e=e.replace("#","")},checkContrast:function(){var t,e,n=this;$(".example-color").each(function(){t=n.getL(n.rgbaToHex($(this).find(".swatch-color").css("backgroundColor"))),e=n.getL(n.rgbaToHex($(this).find(".color-class").css("color")));var s=(Math.max(t,e)+.05)/(Math.min(t,e)+.05),l=[4.5,3];s<l[0]&&n.applyHighlighting($(this)),s<l[1]})},getL:function(t){var e,n,s,l,i=this,a=!1;return 3==t.length?(e=i.getsRGB(t.substring(0,1)+t.substring(0,1)),n=i.getsRGB(t.substring(1,2)+t.substring(1,2)),s=i.getsRGB(t.substring(2,3)+t.substring(2,3)),a=!0):6==t.length?(e=i.getsRGB(t.substring(0,2)),n=i.getsRGB(t.substring(2,4)),s=i.getsRGB(t.substring(4,6)),a=!0):a=!1,a===!0?l=.2126*e+.7152*n+.0722*s:!1},getsRGB:function(t){var e=this;return t=e.getRGB(t),t!==!1?(t/=255,t=.03928>=t?t/12.92:Math.pow((t+.055)/1.055,2.4)):!1},getRGB:function(t){var e;try{e=parseInt(t,16)}catch(n){e=!1}return e},applyHighlighting:function(t){var e=this;$(t).find($(".swatch-meta")).addClass(e.vars.failClass)}};t.init()});