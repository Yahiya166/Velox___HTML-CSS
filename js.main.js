$(document).ready(function () {
  $(".all1").owlCarousel({
    loop: true,
    navigation: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 3,
    mousewheel: false,
    dots: true,
    slideBy: 1,
    smartSpeed: 900,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      200: {
        items: 1,
        nav: false,
      },
      300: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
      },
      700: {
        items: 1,
      },
      900: {
        items: 1,
      },
      1000: {
        items: 1,
        loop: true,
      },
    },
  });
});
$(".section4__btnright").click(function () {
  var owl = $(".all1");
  owl.trigger("next.owl.carousel");
});
$(".section4__btnleft").click(function () {
  var owl = $(".all1");
  owl.trigger("prev.owl.carousel");
});
