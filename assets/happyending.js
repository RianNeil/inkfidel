;(function () {
  window._heCss = "LmhhcHB5LWVuZGluZyAub3JkZXItc3VtbWFyeXtwb3NpdGlvbjpzdGF0aWN9LmhhcHB5LWVuZGluZyAuaGUtbW9kdWxlcyAuaGUtbW9kdWxlKy5oZS1tb2R1bGV7bWFyZ2luLXRvcDoyZW19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTlweCl7LmhhcHB5LWVuZGluZyAuaGUtbW9kdWxlc3ttYXJnaW4tdG9wOjJlbSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAwMHB4KXsuaGFwcHktZW5kaW5nICNjaGVja291dH4uaGUtbW9kdWxlc3tmbG9hdDpsZWZ0O3dpZHRoOjI4ZW07bWFyZ2luLWxlZnQ6LTI4LjI1ZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTEwMHB4KXsuaGFwcHktZW5kaW5nICNjaGVja291dH4uaGUtbW9kdWxlc3t3aWR0aDozMS43NWVtO21hcmdpbi1sZWZ0Oi0zMmVtfX0uaGFwcHktZW5kaW5nIC5oZS1kZXNjcmlwdGlvbnttYXJnaW4tYm90dG9tOjFlbX0uaGFwcHktZW5kaW5nIC5mYi1wYWdlLXBsdWdpbnttYXgtd2lkdGg6NTAwcHg7bWFyZ2luOjAgYXV0b30uaGFwcHktZW5kaW5nIC5oZS1tb2R1bGUtcGludGVyZXN0IHNlbGVjdHtmbG9hdDpyaWdodDt3aWR0aDo3MCV9LmhhcHB5LWVuZGluZyAuaGUtbW9kdWxlIC5mb2xsb3d7Y2xlYXI6Ym90aDt0ZXh0LWFsaWduOnJpZ2h0O2ZvbnQtc2l6ZToxMHB4fS5oYXBweS1lbmRpbmcgLmhlLW1vZHVsZS10d2l0dGVyIGRpdi50d2VldC1idXR0b257cGFkZGluZy1yaWdodDoxZW07ZGlzcGxheTp0YWJsZS1jZWxsfS5oYXBweS1lbmRpbmcgLmhlLW1vZHVsZS10d2l0dGVyIGRpdi50d2VldC10ZXh0e3ZlcnRpY2FsLWFsaWduOnRvcDttYXJnaW4tbGVmdDoxMHB4O2xpbmUtaGVpZ2h0OjIzcHg7ZGlzcGxheTp0YWJsZS1jZWxsO2ZvbnQtc3R5bGU6aXRhbGljfS5oYXBweS1lbmRpbmcgLmhlLW1vZHVsZS15b3V0dWJlIC52aWRlb3twb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nLWJvdHRvbTo1Ni4yNSU7cGFkZGluZy10b3A6MzVweDtoZWlnaHQ6MDtvdmVyZmxvdzpoaWRkZW59LmhhcHB5LWVuZGluZyAuaGUtbW9kdWxlLXlvdXR1YmUgLnZpZGVvIGlmcmFtZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0=";
  window._heConfig = {"redirect":"false","general":{"greeting":false,"description":"","products":[false,"on"],"status":"on"},"facebook":{"username":"inkfidel","show_facepile":[false,"on"],"small_header":false,"show_posts":false,"hide_cover":false,"hide_cta":false},"pinterest":{"username":"inkfidel","pin_tall":[false,"on"],"pin_round":false,"pin_color":"white","pin_count":"below","show_follow_button":[false,"on"]},"twitter":{"username":"theinkfidel","tweet":"Just picked up some primo gear from Inkfidel.com!","size":"large","show_follow_button":[false,"on"],"follow_size":"large","follow_count":"default","follow_show_screen_name":"false"},"youtube":{"username":false,"link":false},"advanced":{"css":""}};
  function HE(e){this.config=e||{},(isInIframe()||this.config.general.status!==!1)&&(this.appDomain=getQueryParameters()["he-domain"]?getQueryParameters()["he-domain"]:"happy-ending.shopstorm.com",this.checkoutToken=window.location.href.match(/[0-9]+\/checkouts\/(\w+)\/thank_you/i)[1],this.shop=window.Shopify.shop,this.scrapeItems(),this.config.general.status!==!1&&this.load(),isInIframe()&&this.listen())}function getQueryParam(e,t){for(var o=e.split("?")[1],s=o.split("&"),n=null,i=0;s.length>i;i++){var a=s[i].split("=");a[0]==t&&(n=a[1])}return n}function loadResource(e,t,o){e=e||"js";var s=document.createElement("css"===e?"link":"script");s.type="css"===e?"text/css":"text/javascript","css"===e&&(s.rel="stylesheet"),s.readyState?s.onreadystatechange=function(){("loaded"==s.readyState||"complete"==s.readyState)&&(s.onreadystatechange=null,o())}:s.onload=function(){o()},"css"===e?s.href=t:s.src=t,document.getElementsByTagName("head")[0].appendChild(s)}function ensurejQuery(e){window.jQuery===void 0||-1===versionCompare(window.jQuery.fn.jquery,1.7)?loadResource("js","//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",function(){$=window.jQuery.noConflict(!0),e()}):($=window.jQuery,e())}function ensureBase64(e){window.btoa===void 0?loadResource("js","//cdnjs.cloudflare.com/ajax/libs/Base64/0.3.0/base64.min.js",function(){e()}):e()}function isShopifyThankYouPage(){return Shopify&&Shopify.Checkout&&"thank_you"===Shopify.Checkout.page}function isOrderStatusAPISupported(){return Shopify.Checkout.OrderStatus&&Shopify.Checkout.OrderStatus.addContentBox&&$("html").hasClass("page--order-status")}function getQueryParameters(e){return(e||document.location.search).replace(/(^\?)/,"").split("&").map(function(e){return e=e.split("="),this[e[0]]=e[1],this}.bind({}))[0]}function isInIframe(){try{return window.self!==window.top}catch(e){return!0}}var $;HE.prototype.load=function(){window._heCss&&$("head").append('<style type="text/css" id="happy-ending-style">'+decodeURIComponent(escape(atob(window._heCss)))+"</style>"),this.restructureHTML(),this.setupModules()},HE.prototype.unload=function(){$("#happy-ending-style").remove(),this.restoreHTML(),this.destroyModules()},HE.prototype.scrapeItems=function(){this.items=[],Shopify.checkout&&Shopify.checkout.line_items&&(this.items=$.map(Shopify.checkout.line_items,function(e,t){var o={name:e.title,clean:e.title,quantity:e.quantity};if(o.thumb=$(".product").eq(t).find("img.product__image").attr("src"),o.thumb&&-1!==o.thumb.indexOf("_150x150_cropped")){var s=o.thumb.split("_150x150_cropped");o.fullImg=s[0]+s[1]}else o.fullImg=o.thumb;return o}))},HE.prototype.restructureHTML=function(){$("body").addClass("happy-ending"),$("div.section--thank-you .btn").before('<div class="he-description"></div>'),$(".section--page-title").append('<div class="he-description"></div>'),$(".os-step__title").closest(".content-box__row").append('<div class="he-description"></div>');var e=$("div.order-summary"),t=e.outerHeight()+parseInt(e.css("margin-top"),10)+parseInt(e.css("margin-bottom"),10);0==$("div.order-summary").closest(".sidebar__content").size()?e.after('<div class="he-modules" style="margin-top:'+t+'px"></div>'):e.after('<div class="he-modules"></div>')},HE.prototype.restoreHTML=function(){$("body").removeClass("happy-ending"),$(".he-modules").remove()},HE.prototype.setupModules=function(){this.setupModule("general"),this.setupModule("facebook"),this.setupModule("twitter"),this.setupModule("pinterest"),this.setupModule("youtube"),this.setupModule("advanced")},HE.prototype.destroyModules=function(){$(".he-module").closest(".content-box").remove(),$("#advanced-css-styles").remove(),$(".shop__desc").remove(),$(".he-description").remove()},HE.prototype.setupModule=function(e){var t=this.config[e],o=$("html").prop("lang")||"en",s=o.split("-")[0];switch(e){case"general":if(this._originalTagline||(this._originalTagline=$(".shop__desc").html()),t.greeting?($(".shop__desc").length||$(".shop a, .main__header a.logo").append('<p class="shop__desc"></p>'),$(".shop__desc").text(t.greeting)):this._originalTagline?$(".shop__desc").html(this._originalTagline):$(".shop__desc").remove(),t.description){try{t.description=decodeURIComponent(escape(atob(t.description)))}catch(n){}$(".he-description").html(t.description)}else $(".he-description").empty();var i=$(".order-summary");if(i[t.products?"show":"hide"](),0==$("div.order-summary").closest(".sidebar__content").size())if(t.products){var a=i.outerHeight()+parseInt(i.css("margin-top"),10)+parseInt(i.css("margin-bottom"),10);$(".he-modules").css("margin-top",a+"px")}else $(".he-modules").css("margin-top","0");break;case"facebook":if(!$(".he-module-facebook").length){var r='<div class="group he-module he-module-facebook" id="facebook-all"><div class="module fb-page-plugin" id="facebook-page-plugin"><div class="fb-page" data-adapt-container-width="true"></div></div></div>';isOrderStatusAPISupported()?Shopify.Checkout.OrderStatus.addContentBox(r):$(".he-modules").append(r)}var d=$(".he-module-facebook");if(t.username){d.show().closest(".content-box").show();var l={href:"https://facebook.com/"+t.username,"show-facepile":t.show_facepile?"true":"false","small-header":t.small_header?"true":"false","show-posts":t.show_posts?"true":"false","hide-cover":t.hide_cover?"true":"false","hide-cta":t.hide_cta?"true":"false",width:d.find(".fb-page-plugin").width()};for(var u in l)d.find(".fb-page-plugin .fb-page").attr(u,l[u]);if(window.FB)FB.XFBML.parse();else{$("body").append('<div id="fb-root"></div>');var p="https://"+this.appDomain+"/facebook-locales/"+o,c=o.replace("-","_");$.ajax({url:p,success:function(e){c=e},complete:function(){(function(e,t,o){var s,n=e.getElementsByTagName(t)[0];e.getElementById(o)||(s=e.createElement(t),s.id=o,s.src="//connect.facebook.net/"+c+"/sdk.js#xfbml=1&version=v2.5",n.parentNode.insertBefore(s,n))})(document,"script","facebook-jssdk")}})}}else d.hide().closest(".content-box").hide();break;case"twitter":if(!$(".he-module-twitter").length){var r='<div class="group module he-module he-module-twitter" id="twitter-tweet-button" style="display:none;"><div class="line"><div class="tweet-button"></div><div class="tweet-text"></div></div><div class="line follow"><div class="follow-button"></div></div></div>';isOrderStatusAPISupported()?Shopify.Checkout.OrderStatus.addContentBox(r):$(".he-modules").append(r)}var h=$(".he-module-twitter");if(t.tweet||t.username&&t.show_follow_button){var m=$("a.logo:first").attr("href")||"http://"+this.shop,f='<a class="twitter-share-button"  lang="'+s+'" href="https://twitter.com/intent/tweet?text='+encodeURIComponent(t.tweet)+'" data-url="'+m+'">Tweet</a>';follow='<a class="twitter-follow-button" lang="'+s+'" href="https://twitter.com/'+t.username+'" data-url="'+m+'">Follow</a>',h.find(".tweet-button").html(f),h.find(".follow-button").html(follow),h.find(".twitter-share-button").attr("data-text",t.tweet).attr("data-related",t.username).attr("data-count",t.count).attr("data-size",t.size).parent()[t.tweet?"show":"hide"](),h.find(".tweet-text").html(t.tweet),h.find(".twitter-follow-button").attr("href","https://twitter.com/"+t.username).attr("data-show-count",t.follow_count).attr("data-show-screen-name",t.follow_show_screen_name).attr("data-size",t.follow_size).text("Follow @"+t.username).parent()[t.username&&t.show_follow_button?"show":"hide"](),h.show().closest(".content-box").show(),window.twttr&&window.twttr.widgets?window.twttr.widgets.load():!function(e,t,o){var s,n=e.getElementsByTagName(t)[0];e.getElementById(o)||(s=e.createElement(t),s.id=o,s.src="//platform.twitter.com/widgets.js",n.parentNode.insertBefore(s,n))}(document,"script","twitter-wjs")}else h.hide().closest(".content-box").hide();break;case"pinterest":if(!$(".he-module-pinterest").length){var r='<div class="group module he-module he-module-pinterest" id="pinterest-pinit-button" style="display:none;"><div class="line"><span class="button"><a data-pin-do="buttonPin" data-pin-config="none"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png" /></a></span><span class="item"><select></select></span></div><div class="line follow"><div class="follow-button"></div></div></div>';isOrderStatusAPISupported()?Shopify.Checkout.OrderStatus.addContentBox(r):$(".he-modules").append(r)}var w=$(".he-module-pinterest");if(t.username){if(w.find(".followlink").attr("href","https://pinterest.com/"+t.username).find("span.username").text(t.username),window.rebuildPinterestButtons||function(e,t,o){var s,n=e.getElementsByTagName(t)[0];e.getElementById(o)||(s=e.createElement(t),s.id=o,s.src="//assets.pinterest.com/js/pinit.js",s["data-pin-build"]="rebuildPinterestButtons",n.parentNode.insertBefore(s,n))}(document,"script","pinterest-pinit"),this._pinterestSetup){var g=w.find("select option:selected");this.rebuildPinterestButton({description:g.text(),media:g.attr("value"),url:g.data("url")})}else this.setupPinterestOptions();w.show().closest(".content-box").show()}else w.hide().closest(".content-box").hide();break;case"youtube":if(!$(".he-module-youtube").length){var r='<div class="group module he-module he-module-youtube" id="youtube-video" style="display:none;"><div class="line video"><iframe id="on-load-video" width="100%" frameborder="0" allowfullscreen></iframe></div><div class="line follow"><a class="followlink">Follow <span class="username"></span> on YouTube</a></div></div>';isOrderStatusAPISupported()?Shopify.Checkout.OrderStatus.addContentBox(r):$(".he-modules").append(r)}var v=$(".he-module-youtube");if(t.link){var y=t.link;t.link.indexOf("youtube.com")>-1&&(y=getQueryParam(t.link,"v")),v.find("iframe").attr("src","https://youtube.com/embed/"+y+"?rel=0"),v.find(".followlink").attr("href","https://youtube.com/"+t.username).find("span.username").text(t.username),v.find(".followlink")[t.username?"show":"hide"](),v.show().closest(".content-box").show()}else v.hide().closest(".content-box").hide();break;case"advanced":$("body #advanced-css-styles").length||$("body").append('<style type="text/css" id="advanced-css-styles"></style>');var b=$("#advanced-css-styles");if(t.css){try{t.css=decodeURIComponent(escape(atob(t.css)))}catch(n){}0===t.css.indexOf("http")?($("#advanced-css-link").remove(),loadResource("css",t.css,function(){$("head").find("link:last").attr("id","advanced-css-link")}),b.html("")):($("#advanced-css-link").remove(),b.text(t.css))}else b.text("")}},HE.prototype.setupPinterestOptions=function(){var e=this,t=$(".he-module-pinterest .item select");for(num=0;this.items.length>num;num++){var o=this.items[num],s='<option value="'+o.fullImg+'" data-url="">'+o.clean+"</option>";t.append(s),0===num&&this.rebuildPinterestButton({description:o.clean,media:o.fullImg,url:"http://"+e.shop})}var n="https://"+this.appDomain+"/productimages/"+this.shop+"/"+this.checkoutToken;$.ajax({url:n,success:function(o){o&&o.length&&(t.empty(),$.each(o,function(o,s){var n='<option value="'+s.image+'" data-url="http://'+e.shop+"/products/"+s.handle+'">'+s.title+"</option>";t.append(n)}),e.rebuildPinterestButton({description:o[0].title,media:o[0].image,url:"http://"+e.shop+"/products/"+o[0].handle}))}}),t.on("change",function(){var o=t.find("option:selected");e.rebuildPinterestButton({description:o.text(),media:o.attr("value"),url:o.data("url")})}),this._pinterestSetup=!0},HE.prototype.rebuildPinterestButton=function(e){e={description:e.description,media:e.media,ref:"http://happy-ending.shopstorm.com",url:e.url};var t=this.config.pinterest,o="//pinterest.com/pin/create/button/?"+$.param(e),s=t.pin_round?' data-pin-round="true"':"",n=t.pin_color?' data-pin-color="'+t.pin_color+'"':"",i=t.pin_count?' data-pin-count="'+t.pin_count+'"':"",a=t.pin_tall?' data-pin-tall="true"':"",r=' data-pin-lang="'+($("html").prop("lang")||"en").split("-")[0]+'"',d='<a href="'+o+'" data-pin-do="buttonPin"'+s+n+i+a+r+'><img border="0" src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_20.png"/></a>';$("#pinterest-pinit-button .button").html(d),$("#pinterest-pinit-button .follow-button").html('<a data-pin-do="buttonFollow" href="https://www.pinterest.com/'+t.username+'">Follow '+t.username+"</a>")[t.show_follow_button?"show":"hide"](),window.rebuildPinterestButtons!==void 0&&window.rebuildPinterestButtons()},HE.prototype.listen=function(){var e=this,t=window.addEventListener?"addEventListener":"attachEvent",o="attachEvent"==t?"onmessage":"message",s=["https://happy-skyverge.fwd.wf","https://happy-ending.shopstorm.com"];window[t](o,function(t){if(!(0>s.indexOf(t.origin))){var o=t.data;switch(o.type){case"updateModule":if(!o.module)return;$.extend(e.config[o.module],o.data),e.setupModule(o.module);break;case"updateConfig":$.extend(e.config,o.data);var n=e.config.general.status?"load":"unload";e[n]()}}},!1)},versionCompare=function(e,t){if("stringstring"!=typeof e+typeof t)return!1;for(var o=e.split("."),s=t.split("."),n=0,i=Math.max(o.length,s.length);i>n;n++){if(o[n]&&!s[n]&&parseInt(o[n])>0||parseInt(o[n])>parseInt(s[n]))return 1;if(s[n]&&!o[n]&&parseInt(s[n])>0||parseInt(o[n])<parseInt(s[n]))return-1}return 0},isShopifyThankYouPage()&&ensurejQuery(function(){ensureBase64(function(){new HE(window._heConfig)})});
})();