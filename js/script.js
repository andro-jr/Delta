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
});
