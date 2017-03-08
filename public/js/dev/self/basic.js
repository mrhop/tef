/**
 * Created by Donghui Huo on 2016/3/15.
 */
var defaultIndexFirstHeight = 800;
var $ = jQuery = require('jquery');
require("flexslider");
require("bootstrap");
var utilFun = require("utilFun");
$(document).ready(function () {
    var scrollMonitor = require("scrollMonitor");
    //do something
    if($("body").attr("id")=="index"){
        setTimeout (function () {
            if(document.body.scrollTop<710){
                $(".navbar.navbar-fixed-top").addClass("top");
            }else{
                $(".navbar.navbar-fixed-top").removeClass("top");
            }
        }, 100); //100ms for example
        //首页的处理
        var myElement = $(".container.first-container")[0];
        var elementWatcher = scrollMonitor.create( myElement );
        elementWatcher.enterViewport(function() {
            $(".navbar.navbar-fixed-top").addClass("top");
        });
        elementWatcher.exitViewport(function() {
            $(".navbar.navbar-fixed-top").removeClass("top");
        });
        $('.first-container .flexslider').flexslider({
            fadeFirstSlide: false,
            controlNav: false,
            directionNav: true,
            animationSpeed: 1000,
            slideshowSpeed: 5000,
            slideshow: true,
            prevText: "",
            nextText: "",
        });

        $('.fourth-container .flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: true,
            animationLoop: false,
            itemWidth: 500,
            itemMargin: 5,
            prevText: "",
            nextText: ""
        });
    }
});

