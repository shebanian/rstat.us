(function(b){b.fn.equalHeights=function(d,a){tallest=d?d:0;this.each(function(){if(b.browser.msie&&b.browser.version.substr(0,1)<7){if(this.offsetHeight>tallest){tallest=this.offsetHeight}}else{if(b(this).height()>tallest){tallest=b(this).height()}}});if(a&&tallest>a){tallest=a}return this.each(function(){b.browser.msie&&b.browser.version.substr(0,1)<7?b(this).height(tallest):b(this).css({"*height":tallest,"min-height":tallest});$childElements=b(this).children(".autoPadDiv");$childElements.css({"*height":tallest,"min-height":tallest})})}})(jQuery);(function(){$(document).ready(function(){return $("#pitch").equalHeights()})}).call(this);(function(){$(document).ready(function(){return $("#flash").delay(2000).slideUp("slow")})}).call(this);(function(){var a;a=140;$(document).ready(function(){var e,f,c,b,d;$("html").removeClass("no-js").addClass("js");c=$("#update-form textarea");d=$("#update-form #update-referral");b=function(){var g,h;h=a-c.val().length;g=$("#update-count .update-count").first();if(g.length){g.text(h)}else{$("#update-count").append('<span class="update-count">'+h+"</span>/"+a)}return $("#update-info").toggleClass("negative",h<0)};c.keypress(b).keyup(b);$("#update-form").submit(function(){if(c.val().length<=0||c.val().length>a){return false}});f=function(g){return"RS @"+$(g).data("name")+": "+$(g).find(".text").text().trim()};e=function(h){var g;$(d).attr("value",$(h).data("id"));g=c.text().length;c.keypress();c[0].setSelectionRange(g,g);c.focus();return window.scrollTo(0,$(c).position().top)};return $(".has-update-form .update").each(function(){var g;g=$(this);$(this).find(".reply").bind("click",function(h){h.preventDefault();c.text("@"+$(g).data("name")+" ");return e(g)});return $(this).find(".share").bind("click",function(h){h.preventDefault();c.text(f(g));return e(g)})})})}).call(this);(function(){$(document).ready(function(){return $(".remove-update").click(function(){return confirm("Are you sure you want to delete this update?")})})}).call(this);(function(){$(document).ready(function(){return $(".unfollow").click(function(){return confirm("Are you sure you want to unfollow this user?")})})}).call(this);