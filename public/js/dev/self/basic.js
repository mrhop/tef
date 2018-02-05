/**
 * Created by Donghui Huo on 2016/3/15.
 */
var defaultIndexFirstHeight = 800;
var $ = jQuery = require('jquery');
require("flexslider");
require("bootstrap");
var utilFun = require("utilFun");
$(document).ready(function () {
    $(".navbar-nav li.active").removeClass("active");
    $(".navbar-nav li." + $("body").attr("id") + "-li").addClass("active");
    $(".navbar-nav li.parent-" + $("body").attr("id") + "-li").addClass("active");
    var scrollMonitor = require("scrollMonitor");
    //do something
    if ($("body").attr("id") == "index") {
        setTimeout(function () {
            if (document.documentElement.scrollTop < 740) {
                $(".navbar.navbar-fixed-top").addClass("top");
            } else {
                $(".navbar.navbar-fixed-top").removeClass("top");
            }
        }, 100); //100ms for example
        //首页的处理
        var myElement = $(".container.first-container")[0];
        var elementWatcher = scrollMonitor.create(myElement);
        elementWatcher.enterViewport(function () {
            $(".navbar.navbar-fixed-top").addClass("top");
        });
        elementWatcher.exitViewport(function () {
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
        $('.third-container-pre-2 .flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: false,
            animationLoop: false,
            prevText: "",
            nextText: ""
        });
        $('.third-container-pre .flexslider').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: true,
            animationLoop: false,
            itemWidth: 300,
            itemMargin: 5,
            prevText: "",
            nextText: ""
        });
    }
    else if ($("body").attr("id") == "cefc") {
        $('div .cefc_map_area').hide()
        $('#div_cefc_map_area_0').show()
        $("img.cefc-pic").hover(function () {
            $('div .cefc_map_area').hide()
            $('#div_cefc_map_area_0').show()
        })
        $("#cefcmap area").click(function (e) {
            e.preventDefault()
            return false
        }).hover(function () {
            $('div .cefc_map_area').hide()
            $('#div_' + $(this).attr('id')).show()
        })
        $('#cefcmap').imageMapResize();
        $('.second-container-pre-1 .flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: false,
            animationLoop: false,
            prevText: "",
            nextText: ""
        });
        $('.second-container-pre-2 .flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: false,
            animationLoop: false,
            prevText: "",
            nextText: ""
        });
        $('.second-container-pre-3 .flexslider').flexslider({
            animation: "fade",
            controlNav: "thumbnails",
            directionNav: false,
            animationLoop: false,
            prevText: "",
            nextText: ""
        });
    }


});

