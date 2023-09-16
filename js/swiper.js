const theLatestSwiper = new Swiper('.the-latest-swiper', {
  breakpoints: {
    425: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
});
const cdSwiper = new Swiper('.cd-swiper', {
  breakpoints: {
    425: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
});
const vinylSwiper = new Swiper('.vinyl-swiper', {
  breakpoints: {
    slidesPerView: 1,
    425: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
});
const clothingSwiper = new Swiper('.clothing-swiper', {
  breakpoints: {
    slidesPerView: 1,
    425: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
});
const faqSwiper = new Swiper('.faq-swiper', {
  breakpoints: {
    slidesPerView: 1,
    425: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 18
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
});