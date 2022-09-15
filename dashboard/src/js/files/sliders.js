/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Parallax } from 'swiper';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay, Parallax],

    // Optional parameters
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    parallax: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Autoplay
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  // // Перечень слайдеров
  // // Проверяем, есть ли слайдер на странице
  // if (document.querySelector('.swiper')) { // Указываем класс нужного слайдера
  //   // Создаем слайдер
  //   new Swiper('.swiper', { // Указываем класс нужного слайдера
  //     // Подключаем модули слайдера
  //     // для конкретного случая
  //     modules: [Navigation, Pagination],
  //     // observer: true,
  //     // observeParents: true,
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //     autoHeight: true,
  //     speed: 800,

  //     //touchRatio: 0,
  //     //simulateTouch: false,
  //     loop: true,
  //     //preloadImages: false,
  //     //lazy: true,

  //     /*
  //     // Эффекты
  //     effect: 'fade',
  //     autoplay: {
  //       delay: 3000,
  //       disableOnInteraction: false,
  //     },
  //     */

  //     // Пагинация
  //     pagination: {
  //       el: '.swiper-pagination',
  //       type: 'bullets',
  //       clickable: true,
  //     },

  //     // Скроллбар
  //     /*
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //       draggable: true,
  //     },
  //     */

  //     // Кнопки "влево/вправо"
  //     navigation: {
  //       prevEl: '.swiper-button-prev',
  //       nextEl: '.swiper-button-next',
  //     },

  //     // Брейкпоинты
  //     /*
  //     breakpoints: {
  //       320: {
  //         slidesPerView: 1,
  //         spaceBetween: 0,
  //         autoHeight: true,
  //       },
  //       768: {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       992: {
  //         slidesPerView: 3,
  //         spaceBetween: 20,
  //       },
  //       1268: {
  //         slidesPerView: 4,
  //         spaceBetween: 30,
  //       },
  //     },
  //     */
  //     // События
  //     on: {

  //     }
  //   });
  // }
}
// // Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
// function initSlidersScroll() {
//   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
//   if (sliderScrollItems.length > 0) {
//     for (let index = 0; index < sliderScrollItems.length; index++) {
//       const sliderScrollItem = sliderScrollItems[index];
//       const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
//       const sliderScroll = new Swiper(sliderScrollItem, {
//         observer: true,
//         observeParents: true,
//         direction: 'vertical',
//         slidesPerView: 'auto',
//         freeMode: {
//           enabled: true,
//         },
//         scrollbar: {
//           el: sliderScrollBar,
//           draggable: true,
//           snapOnRelease: false
//         },
//         mousewheel: {
//           releaseOnEdges: true,
//         },
//       });
//       sliderScroll.scrollbar.updateSize();
//     }
//   }
// }

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});