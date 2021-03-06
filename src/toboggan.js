/*
 * toboggan
 * https://github.com/arielserafini/toboggan
 *
 * Copyright (c) 2012 Ariel Serafini
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  $.toboggan = function() {

      var $content= $(".content"),
      $activeSlide = $content.find(".active"),
      $wrapper = $(".contentWrapper"),
      wrapperWidth = $wrapper.width();

      $(".titles li").click(function (e) {
        e.preventDefault();
        var index = $(this).index();
        var $slide = $content.children().eq(index);
        var operator = "";
        $activeSlide = $content.find(".active");

        if (!$slide.hasClass("active")) {
          $activeSlide.removeClass("active");

          if (index > $activeSlide.index()) {
            $content.append($content.children().first());
          } else {
            $content.prepend($content.children().last());
          }

          // $content.animate({left: "-=" + $slide.position().left});
          $slide.addClass("active");
        }

        $activeSlide = $(".active");
      });

      $(".next").click(function (e) {
        e.preventDefault();

        var $nextSlide = $(($activeSlide.next()[0] || $activeSlide.siblings()[0]));

        $(".titles li").eq($nextSlide.index()).click();
      });

      $(".prev").click(function (e) {
        e.preventDefault();

        var $prevSlide = $(($activeSlide.prev()[0] || $activeSlide.siblings().last()[0]));


        $(".titles li").eq($prevSlide.index()).click();
      });


  };



}(jQuery));
