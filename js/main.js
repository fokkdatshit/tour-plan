$(document).ready(function () {
   const hotelSlider = new Swiper('.hotel-slider', {
      // Optional parameters
      loop: true,


      // Navigation arrows
      navigation: {
         nextEl: '.hotel-slider__button--next',
         prevEl: '.hotel-slider__button--prev',
      },
   });

   const reviewsSlider = new Swiper('.reviews-slider', {
      // Optional parameters
      loop: true,


      // Navigation arrows
      navigation: {
         nextEl: '.reviews-slider__button--next',
         prevEl: '.reviews-slider__button--prev',
      },
   });

   var menuButton = document.querySelector(".menu-button");
   menuButton.addEventListener("click", function () {
      console.log("sada");
      document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
   });

   var modalButton = $("[data-toggle=modal]");
   var closeModalButton = $(".modal__close");
   modalButton.on("click", openModal)
   closeModalButton.on("click", closeModal)

   function openModal() {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.addClass("modal__overlay--visible")
      modalDialog.addClass("modal__dialog--visible")
   }

   function closeModal(event) {
      event.preventDefault();
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible")
      modalDialog.removeClass("modal__dialog--visible")
   }

   // Обработка форм

   $('.form').each(function () {
      $(this).validate({
         errorClass: "invalid",
         messages: {
            name: {
               required: "Укажите Ваше имя",
               minlength: "Имя должно быть не менее 2-ух символов"
            },
            email: {
               required: "емэил рекуа",
               email: "емаил"
            },
            phone: {
               required: "Телефон обязателен",
            },
         }
      });
   })
});