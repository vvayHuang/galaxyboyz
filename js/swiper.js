import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  mousewheel: true,
});
