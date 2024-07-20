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
    },
    600: {
      items: 2,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 700,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
  onChanged: function (event) {
    const parent = event.target.closest(".carousel-container");

    if (!parent) return;
    const customNext = parent.querySelector(".navigation-next");
    const customPrev = parent.querySelector(".navigation-prev");
    var carousel = event.relatedTarget;
    var hasNext = carousel.relative(carousel.current()) < carousel.maximum();
    var hasPrev = carousel.relative(carousel.current()) > 0;

    if (hasNext) {
      customNext.classList.remove("disabled"); // Enable the next button
    } else {
      customNext.classList.add("disabled"); // Disable the next button
    }

    if (hasPrev) {
      customPrev.classList.remove("disabled"); // Enable the next button
    } else {
      customPrev.classList.add("disabled"); // Disable the next button
    }
  },
});

$(".testemonial-carousel").owlCarousel({
  nav: false,
  items: 1,
  margin: 20,
  autoplay: false,
  autoplayTimeout: 5000,
  smartSpeed: 700,
  onChanged: function (event) {
    const parent = event.target.closest(".carousel-container");

    if (!parent) return;
    const customNext = parent.querySelector(".navigation-next");
    const customPrev = parent.querySelector(".navigation-prev");
    var carousel = event.relatedTarget;
    var hasNext = carousel.relative(carousel.current()) < carousel.maximum();
    var hasPrev = carousel.relative(carousel.current()) > 0;

    if (hasNext) {
      customNext.classList.remove("disabled"); // Enable the next button
    } else {
      customNext.classList.add("disabled"); // Disable the next button
    }

    if (hasPrev) {
      customPrev.classList.remove("disabled"); // Enable the next button
    } else {
      customPrev.classList.add("disabled"); // Disable the next button
    }
  },
});

$(".brand-carousel").owlCarousel({
  loop: true,
  nav: false,
  items: 5,
  margin: 40,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
  },
});

// Custom navigation action
$(document).ready(function () {
  $(".navigation-prev").click(function () {
    var parentCarousel = $(this).closest(".carousel-container");
    var owl = parentCarousel.find(".owl-carousel");
    owl.owlCarousel();
    owl.trigger("prev.owl.carousel");
  });

  $(".navigation-next").click(function () {
    var parentCarousel = $(this).closest(".carousel-container");
    var owl = parentCarousel.find(".owl-carousel");
    owl.owlCarousel();
    owl.trigger("next.owl.carousel");
  });
});

// Video modal
const videoModal = document.querySelector("#video-modal");
const videoPlayIcon = document.querySelector("#videoPlayIcon");

if (videoModal) {
  videoModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-content")) return;

    // Pause the video
    const iframe = videoModal.querySelector("iframe");
    if (iframe)
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
        "*"
      );

    videoModal.classList.add("hide-modal");
  });
}

if (videoPlayIcon) {
  videoPlayIcon.addEventListener("click", () => {
    videoModal.classList.remove("hide-modal");
  });
}

// Mobile menu action
const hamburgerBtn = document.querySelector(".hamburger-btn");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const mobileMenu = document.querySelector(".hide-mobile-nav");

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hide-mobile-nav");
    mobileMenu.classList.add("show-mobile-nav");
  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.add("hide-mobile-nav");
    mobileMenu.classList.remove("show-mobile-nav");
  });
}

$(".nav, .slider").each(function () {
  this.slick.getSlideCount = function () {
    var _ = this,
      slidesTraversed,
      swipedSlide,
      centerOffset;

    centerOffset =
      _.options.centerMode === true
        ? _.slideWidth * Math.floor(_.options.slidesToShow / 2)
        : 0;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find(".slick-slide").each(function (index, slide) {
        var offsetPoint = slide.offsetLeft,
          outerSize = $(slide).outerWidth();

        if (_.options.vertical === true) {
          offsetPoint = slide.offsetTop;
          outerSize = $(slide).outerHeight();
        }
        if (offsetPoint - centerOffset + outerSize / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });
      slidesTraversed =
        Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;

      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  this.slick.getNavigableIndexes = function () {
    var _ = this,
      breakPoint = 0,
      counter = 0,
      indexes = [],
      max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slideCount * -1;
      counter = _.options.slideCount * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter +=
        _.options.slidesToScroll <= _.options.slidesToShow
          ? _.options.slidesToScroll
          : _.options.slidesToShow;
    }

    return indexes;
  };
});
