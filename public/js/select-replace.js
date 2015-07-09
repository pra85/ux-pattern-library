define(["jquery"],function(e){var s={vars:{replaced:e(".replace-select"),replacedClass:"is-replaced is-transparent",customClass:"wrapper-custom-select",wrapperClass:"wrapper-replace-select",valueClass:"replace-value",iconClass:"icon-caret-down",hoverClass:"is-hover"},init:function(){this.replaceFoundSelects(),this.listenForSelectClick(),this.listenForSelectEvents()},replaceFoundSelects:function(){var a=this.vars;a.replaced.length&&a.replaced.each(function(t,l){var r=e(l),n=r.clone(),i=[];r.hasClass("has-success")&&i.push("has-success"),r.hasClass("has-error")&&i.push("has-error"),r.is(":disabled")&&(console.log(n),i.push("is-disabled")),r.addClass(a.replacedClass),r.replaceWith(['<div class="'+a.wrapperClass+'">','<select class="'+n[0].className+' is-replaced" id="'+n[0].id+'" name="'+n[0].name+'" '+n[0].attributes[0].name+">"+n[0].innerHTML+"</select>",'<span class="'+a.customClass+" "+i.join(" ")+'" aria-hidden="true">','<span class="'+a.valueClass+'">'+s.setInitialText(r)+"</span>",'<svg class="icon '+a.iconClass+'" title="Down arrow">','<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/public/images/edx-svg/svgdefs.svg#'+a.iconClass+'"></use>',"</svg>","</span>","</div>"].join(""))})},setInitialText:function(e){return e.find("option:first").text()},listenForSelectClick:function(){e(".field").on("change",this.vars.replaced,function(a){s.updateReplacedOption(e(a.target))})},updateReplacedOption:function(e){var s=e.val(),a=e.parent("."+this.vars.wrapperClass),t=a.find("."+this.vars.valueClass);t.text(s)},listenForSelectEvents:function(){var s=this.vars;s.replaced.on("hover mouseover mouseenter",function(a){var t=e(a.target);t.next(s.customWrapper).addClass(s.hoverClass)}).on("blur mouseout mouseleave",function(a){var t=e(a.target);t.next(s.customWrapper).removeClass(s.hoverClass)})}};s.init()});