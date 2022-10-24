const slider = () => {

  const miniSlider = new Swiper('.slider', {
    init: true,
    // Свои классы
    wrapperClass: "slider__wrapper",
    slideClass: "slider__screen",

    // Вертикальный слайдер
    direction: 'horizontal',

    // Количество сладов для показа
    slidesPerView: "auto",

    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },

    // Скорость
    speed: 800,

    // Навигация
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
      disabledClass: "slider__button-disabled"
    },
    // События
    on: {
      init: function () {

      }
    }

  });


}

export default slider;
