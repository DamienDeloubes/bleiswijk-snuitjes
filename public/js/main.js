// Template Information
// ==================================================
// * Project Name   :  Petopia – Pet Care Service Template
// * File           :  CSS Base
// * Version        :  1.0.1
// * Last change    :  14 September 2022, Wednesday
// * Author         :  Merkulove - https://themeforest.net/user/merkulove
// * Developer      :  webrok - https://www.fiverr.com/webrok?up_rollout=true
// ==================================================

(function($) {
  "use strict";


  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // Back To Top - End
  // --------------------------------------------------

  // Sticky Header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 140) {
      $('.header_section').addClass("sticky")
    } else {
      $('.header_section').removeClass("sticky")
    }
  });
  // Sticky Header - end
  // --------------------------------------------------


  // Common Carousels - Start
  // --------------------------------------------------
  $('.common_carousel_1col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    prevArrow: ".cc1c_left_arrow",
    nextArrow: ".cc1c_right_arrow"
  });

  $('.common_carousel_3col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    prevArrow: ".cc3c_left_arrow",
    nextArrow: ".cc3c_right_arrow",
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1501,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    ]
  });

  $('.common_carousel_4col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    prevArrow: ".cc4c_left_arrow",
    nextArrow: ".cc4c_right_arrow",
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }
    ]
  });
  // Common Carousels - End
  // --------------------------------------------------

  // Thumbnail Testimonial Slider - Start
  // --------------------------------------------------
  $(".tt_slider_for").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".tt_slider_nav",
    prevArrow: ".tt_for_left_arrow",
    nextArrow: ".tt_for_right_arrow",
  });
  $(".tt_slider_nav").slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".tt_slider_for",
    prevArrow: ".tt_nav_left_arrow",
    nextArrow: ".tt_nav_right_arrow",
  });

  function setSlideCount() {
    var $el = $('.slide_count_wrap2').find('.total2');
    if (slideCount < 10) {
      $el.text('0' + slideCount);
    } else {
      $el.text(slideCount);
    }
  }
  function setCurrentSlideNumber(currentSlide) {
    var $el = $('.slide_count_wrap2').find('.current2');
    $el.text(currentSlide + 1);
  }
  $('.tt_slider_nav').on('init', function (event, slick) {
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
  });
  $('.tt_slider_nav').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setCurrentSlideNumber(nextSlide);
  });
  // Thumbnail Testimonial Slider - End
  // --------------------------------------------------

  // Instagram Carousel - Start
  // --------------------------------------------------
  $('.instagram_carousel').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    prevArrow: ".ic_left_arrow",
    nextArrow: ".ic_right_arrow",
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }
    ]
  });
  // Instagram Carousel - End
  // --------------------------------------------------


  // Quantity Form - end
  // --------------------------------------------------

  // Priceing Range - Start
  // --------------------------------------------------
  if($("#slider-range").length){
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 1000,
      values: [5.0, 355.0],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  }

  $('.ar_top').on('click', function () {
    var getID = $(this).next().attr('id');
    var result = document.getElementById(getID);
    var qty = result.value;
    $('.proceed_to_checkout .update-cart').removeAttr('disabled');
    if( !isNaN( qty ) ) {
      result.value++;
    }else{
      return false;
    }
  });
  // Priceing Range - End
  // --------------------------------------------------

})(jQuery);