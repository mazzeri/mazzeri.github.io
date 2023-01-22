(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t);if(e){var r=e.getAttribute("data-src");e.setAttribute("src",r)}};ldv=function(t){var e=document.querySelector(t);if(e){var r=document.querySelector(t+" source"),c=r.getAttribute("data-src");r.setAttribute("src",c),e.load()}};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.un32');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/panorama-di-fiume-c1860-905.jpg');
var e=document.querySelector('.un1');e.setAttribute('src',(dpi>1)?'images/hawaii-sketch1000-1138.jpg':'images/hawaii-sketch1000-569.jpg');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/mastodon-76.jpg':'images/mastodon-38.jpg');
var e=document.querySelector('.un5');e.setAttribute('src',(dpi>1)?'images/104_hq2nxlw1kqorcbbfyo9mkripyrli8-s2048-76.jpg':'images/104_hq2nxlw1kqorcbbfyo9mkripyrli8-s2048-38.jpg');
var e=document.querySelector('.un7');e.setAttribute('src',(dpi>1)?'images/1udf9ausdh57ll-rzn7zkrwcr1i2vtjas-s2048-76.jpg':'images/1udf9ausdh57ll-rzn7zkrwcr1i2vtjas-s2048-38.jpg');
var e=document.querySelector('.un9');e.setAttribute('src',(dpi>1)?'images/pinterest_black_44dp-76.jpeg':'images/pinterest_black_44dp-38.jpeg');
var e=document.querySelector('.un11');e.setAttribute('src',(dpi>1)?'images/youtube_black_44dp-76.jpeg':'images/youtube_black_44dp-38.jpeg');
var e=document.querySelector('.un14');e.setAttribute('src',(dpi>1)?'images/maine-coon_48424606276_o-500.jpg':'images/maine-coon_48424606276_o-250.jpg');
var e=document.querySelector('.un16');e.setAttribute('src',(dpi>1)?'images/48448146001_f5c5edc2fd_o-500.jpg':'images/48448146001_f5c5edc2fd_o-250.jpg');
var e=document.querySelector('.un18');e.setAttribute('src',(dpi>1)?'images/english-cocker-spaniel-500.jpg':'images/english-cocker-spaniel-250.jpg');
var e=document.querySelector('.un23');e.setAttribute('src',(dpi>1)?'images/dandelion-500.jpg':'images/dandelion-250.jpg');
var e=document.querySelector('.un25');e.setAttribute('src',(dpi>1)?'images/lorikeet-family_48428673246_o-500.jpg':'images/lorikeet-family_48428673246_o-250.jpg');
var e=document.querySelector('.un27');e.setAttribute('src',(dpi>1)?'images/large-polyp-stony-coral_48423894856_o-500.jpg':'images/large-polyp-stony-coral_48423894856_o-250.jpg');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.un32');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/panorama-di-fiume-c1860-1560.jpg':'images/panorama-di-fiume-c1860-780.jpg');
var e=document.querySelector('.un1');e.setAttribute('src',(dpi>1)?'images/hawaii-sketch1000-910.jpg':'images/hawaii-sketch1000-455.jpg');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/mastodon-60.jpg':'images/mastodon-30.jpg');
var e=document.querySelector('.un5');e.setAttribute('src',(dpi>1)?'images/104_hq2nxlw1kqorcbbfyo9mkripyrli8-s2048-60.jpg':'images/104_hq2nxlw1kqorcbbfyo9mkripyrli8-s2048-30.jpg');
var e=document.querySelector('.un7');e.setAttribute('src',(dpi>1)?'images/1udf9ausdh57ll-rzn7zkrwcr1i2vtjas-s2048-60.jpg':'images/1udf9ausdh57ll-rzn7zkrwcr1i2vtjas-s2048-30.jpg');
var e=document.querySelector('.un9');e.setAttribute('src',(dpi>1)?'images/pinterest_black_44dp-60.jpeg':'images/pinterest_black_44dp-30.jpeg');
var e=document.querySelector('.un11');e.setAttribute('src',(dpi>1)?'images/youtube_black_44dp-60.jpeg':'images/youtube_black_44dp-30.jpeg');
var e=document.querySelector('.un14');e.setAttribute('src',(dpi>1)?'images/maine-coon_48424606276_o-442.jpg':'images/maine-coon_48424606276_o-221.jpg');
var e=document.querySelector('.un16');e.setAttribute('src',(dpi>1)?'images/48448146001_f5c5edc2fd_o-440.jpg':'images/48448146001_f5c5edc2fd_o-220.jpg');
var e=document.querySelector('.un18');e.setAttribute('src',(dpi>1)?'images/english-cocker-spaniel-442.jpg':'images/english-cocker-spaniel-221.jpg');
var e=document.querySelector('.un23');e.setAttribute('src',(dpi>1)?'images/dandelion-440.jpg':'images/dandelion-220.jpg');
var e=document.querySelector('.un25');e.setAttribute('src',(dpi>1)?'images/lorikeet-family_48428673246_o-440.jpg':'images/lorikeet-family_48428673246_o-220.jpg');
var e=document.querySelector('.un27');e.setAttribute('src',(dpi>1)?'images/large-polyp-stony-coral_48423894856_o-440.jpg':'images/large-polyp-stony-coral_48423894856_o-220.jpg');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.un32');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/panorama-di-fiume-c1860-1248.jpg':'images/panorama-di-fiume-c1860-624.jpg');
var e=document.querySelector('.un1');e.setAttribute('src',(dpi>1)?'images/hawaii-sketch1000-728.jpg':'images/hawaii-sketch1000-364.jpg');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/mastodon-48.jpg':'images/mastodon-24.jpg');
var e=document.querySelector('.un5');e.setAttribute('src',(dpi>1)?'images/104_hq2nxlw1kqorcbbfyo9mkripyrli8-s2048-48.jpg':'images/104_hq2nxlw1kqorcbbfyo9mkripyrli8-s2048-24.jpg');
var e=document.querySelector('.un7');e.setAttribute('src',(dpi>1)?'images/1udf9ausdh57ll-rzn7zkrwcr1i2vtjas-s2048-48.jpg':'images/1udf9ausdh57ll-rzn7zkrwcr1i2vtjas-s2048-24.jpg');
var e=document.querySelector('.un9');e.setAttribute('src',(dpi>1)?'images/pinterest_black_44dp-48.jpeg':'images/pinterest_black_44dp-24.jpeg');
var e=document.querySelector('.un11');e.setAttribute('src',(dpi>1)?'images/youtube_black_44dp-48.jpeg':'images/youtube_black_44dp-24.jpeg');
var e=document.querySelector('.un14');e.setAttribute('src',(dpi>1)?'images/maine-coon_48424606276_o-354.jpg':'images/maine-coon_48424606276_o-177.jpg');
var e=document.querySelector('.un16');e.setAttribute('src',(dpi>1)?'images/48448146001_f5c5edc2fd_o-352.jpg':'images/48448146001_f5c5edc2fd_o-176.jpg');
var e=document.querySelector('.un18');e.setAttribute('src',(dpi>1)?'images/english-cocker-spaniel-354.jpg':'images/english-cocker-spaniel-177.jpg');
var e=document.querySelector('.un23');e.setAttribute('src',(dpi>1)?'images/dandelion-352.jpg':'images/dandelion-176.jpg');
var e=document.querySelector('.un25');e.setAttribute('src',(dpi>1)?'images/lorikeet-family_48428673246_o-352.jpg':'images/lorikeet-family_48428673246_o-176.jpg');
var e=document.querySelector('.un27');e.setAttribute('src',(dpi>1)?'images/large-polyp-stony-coral_48423894856_o-352.jpg':'images/large-polyp-stony-coral_48423894856_o-176.jpg');}else{var a='data-src';var e=document.querySelector('.un32');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/panorama-di-fiume-c1860-520.jpg':'images/panorama-di-fiume-c1860-260.jpg');
var e=document.querySelector('.un1');e.setAttribute('src',(dpi>1)?'images/hawaii-sketch1000-538.jpg':'images/hawaii-sketch1000-269.jpg');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/mastodon-44.jpg':'images/mastodon-22.jpg');
var e=document.querySelector('.un5');e.setAttribute('src',(dpi>1)?'images/104_hq2nxlw1kqorcbbfyo9mkripyrli8-s2048-44.jpg':'images/104_hq2nxlw1kqorcbbfyo9mkripyrli8-s2048-22.jpg');
var e=document.querySelector('.un7');e.setAttribute('src',(dpi>1)?'images/1udf9ausdh57ll-rzn7zkrwcr1i2vtjas-s2048-44.jpg':'images/1udf9ausdh57ll-rzn7zkrwcr1i2vtjas-s2048-22.jpg');
var e=document.querySelector('.un9');e.setAttribute('src',(dpi>1)?'images/pinterest_black_44dp-44.jpeg':'images/pinterest_black_44dp-22.jpeg');
var e=document.querySelector('.un11');e.setAttribute('src',(dpi>1)?'images/youtube_black_44dp-44.jpeg':'images/youtube_black_44dp-22.jpeg');
var e=document.querySelector('.un14');e.setAttribute('src',(dpi>1)?'images/maine-coon_48424606276_o-246.jpg':'images/maine-coon_48424606276_o-123.jpg');
var e=document.querySelector('.un16');e.setAttribute('src',(dpi>1)?'images/48448146001_f5c5edc2fd_o-246.jpg':'images/48448146001_f5c5edc2fd_o-123.jpg');
var e=document.querySelector('.un18');e.setAttribute('src',(dpi>1)?'images/english-cocker-spaniel-246.jpg':'images/english-cocker-spaniel-123.jpg');
var e=document.querySelector('.un23');e.setAttribute('src',(dpi>1)?'images/dandelion-246.jpg':'images/dandelion-123.jpg');
var e=document.querySelector('.un25');e.setAttribute('src',(dpi>1)?'images/lorikeet-family_48428673246_o-246.jpg':'images/lorikeet-family_48428673246_o-123.jpg');
var e=document.querySelector('.un27');e.setAttribute('src',(dpi>1)?'images/large-polyp-stony-coral_48423894856_o-246.jpg':'images/large-polyp-stony-coral_48423894856_o-123.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var n=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));n||(n=1);var r=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];if(!r)return;var l=/chrome/i.test(navigator.userAgent);o=l?r.getBoundingClientRect().top*n+pageYOffset:(r.getBoundingClientRect().top+pageYOffset)*n}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var a=pageYOffset,i=null;requestAnimationFrame(function e(t){i||(i=t);var n=t-i;scrollTo(0,a<o?(o-a)*n/400+a:a-(a-o)*n/400),n<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
wl=new woolite();
wl.init();
wl.addAnimation($('.un2'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un4'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un6'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un8'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un10'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un12'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un13'), "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.un15'), "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.un17'), "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.un19'), "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.un20'), "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.un21'), "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.un22'), "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.un24'), "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.un26'), "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.un28'), "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.un29'), "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.un30'), "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.un31'), "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.un33'), "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.un34'), "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.un35'), "1.00s", "1.00s", 1, 100);
wl.start();
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"0px"===window.getComputedStyle(document.body).getPropertyValue("min-width")&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un141 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}