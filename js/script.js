"use strict";

$(".hero-carousel").owlCarousel({
  loop: true,
  nav: false,
  items: 1,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 700,
});

$(".product-carousel").owlCarousel({
  loop: false,
  nav: false,
  items: 4,
  margin: 20,
  responsive: {
    0: {
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 700,
      loop: true,
    },
    600: {
      items: 2,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 700,
      loop: true,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

$(".testemonial-carousel").owlCarousel({
  loop: true,
  nav: false,
  items: 1,
  margin: 20,
  autoplay: false,
  autoplayTimeout: 5000,
  smartSpeed: 700,
});

$(".brand-carousel").owlCarousel({
  loop: true,
  nav: false,
  items: 5,
  margin: 20,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 5,
    },
  },
});

$('.navigation-prev').click(function () {
  var parentCarousel = $(this).closest('.carousel-container');
  var owl = parentCarousel.find('.owl-carousel');
  owl.owlCarousel();
  owl.trigger('prev.owl.carousel');
});

$('.navigation-next').click(function () {
  var parentCarousel = $(this).closest('.carousel-container');
  var owl = parentCarousel.find('.owl-carousel');
  owl.owlCarousel();
  owl.trigger('next.owl.carousel');
});