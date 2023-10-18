document.addEventListener("DOMContentLoaded", function () {
  
  var swiper1 = new Swiper(".mySwiper-Inicio", {
    slidesPerView: 1, // Mostrar siempre 1 producto
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


  // Inicializar Swiper para cada pestaña
  var swiper1 = new Swiper(".mySwiper-1", {
      slidesPerView: getSlidesPerView(), // Llama a la función para obtener slidesPerView
      spaceBetween: 30,
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

  var swiper2 = new Swiper(".mySwiper-2", {
      slidesPerView: getSlidesPerView(), // Llama a la función para obtener slidesPerView
      spaceBetween: 30,
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

  var swiper3 = new Swiper(".mySwiper-3", {
      slidesPerView: getSlidesPerView(), // Llama a la función para obtener slidesPerView
      spaceBetween: 30,
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

  // Función para determinar el número de slides por vista según el ancho de la pantalla
  function getSlidesPerView() {
      if (window.innerWidth < 768) {
          // En pantallas pequeñas (menos de 768px), mostrar 1 producto por vez
          return 1;
      } else {
          // En pantallas más grandes, mostrar 3 productos por vez
          return 3;
      }
  }

  // Actualizar el número de slides por vista cuando se redimensione la ventana
  window.addEventListener("resize", function () {
      swiper1.params.slidesPerView = getSlidesPerView();
      swiper1.update();

      swiper2.params.slidesPerView = getSlidesPerView();
      swiper2.update();

      swiper3.params.slidesPerView = getSlidesPerView();
      swiper3.update();
  });
});
