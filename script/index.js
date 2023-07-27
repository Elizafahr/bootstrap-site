// var swiper = new Swiper(".swiper-container", {
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });



var swiper = new Swiper(".swiper-container-menu", {
  slidesPerView: 5, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiperEl = document.querySelector('swiper-container')

const params = {
  injectStyles: [`
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }
  `],
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
    },
  },
}

Object.assign(swiperEl, params)

swiperEl.initialize();