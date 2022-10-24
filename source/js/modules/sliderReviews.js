const sliderReviews = () => {

  const miniSliderReviews = new Swiper('.slider-reviews', {
    init: true,
    // Свои классы
    wrapperClass: "slider-reviews__wrapper",
    slideClass: "slider-reviews__screen",

    // Вертикальный слайдер
    direction: 'horizontal',

    // Количество сладов для показа
    slidesPerView: "auto",

    autoplay: {
      delay: 5000000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },

    // Скорость
    speed: 800,

    // Навигация
    navigation: {
      nextEl: '.slider-reviews__button-next',
      prevEl: '.slider-reviews__button-prev',
      disabledClass: "slider-reviews__button-disabled"
    },
    // События
    on: {
      init: function () {

      }
    }

  });


}

export default sliderReviews;
