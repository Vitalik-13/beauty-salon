AOS.init();

const swiper = new Swiper(".myswiper", {
  effect: "fade",
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

var swiperTwo = new Swiper(".myswiper-two", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.el.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

swiper.el.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});
document.querySelector(".date").addEventListener("input", function (e) {
  let date = new Date(this.value);
  let day = date.getUTCDay();

  if (day === 6 || day === 0) {
    alert("Вибирати можна тільки робочі дні.");
    this.value = "";
  }
});

document.querySelector(".time").addEventListener("input", function (e) {
  let time = this.value;
  let hours = parseInt(time.split(":")[0], 10);
  let minutes = parseInt(time.split(":")[1], 10);
  if ((hours >= 20 && minutes >= 0) || hours < 8) {
    alert("Вибирати можна тільки час з 08:00 до 20:00.");
    this.value = "";
  }
});

let showForm = document.querySelector(".order");

let forms = document.querySelector(".form-container");
let close = document.querySelector(".return");
let body = document.querySelector(".body");
showForm.addEventListener("click", () => {
  forms.classList.add("show");
  body.classList.add("scrool");
});
close.addEventListener("click", () => {
  if (forms.classList.contains("show")) {
    body.classList.remove("scrool");
    forms.classList.remove("show");
  } else {
  }
});

let cards = document.querySelectorAll(".card");
let cardsArrow = document.querySelectorAll(".card-arrow");
let absoluteBlocks = document.querySelectorAll(".card-description");

cardsArrow.forEach((arrow, idx) => {
  arrow.addEventListener("click", () => {
    // Видаляємо клас "width" у всіх карток
    cards.forEach((el) => {
      el.classList.remove("width");
    });

    // Видаляємо клас "opacity" у всіх блоків опису
    absoluteBlocks.forEach((block) => {
      block.classList.remove("opacity");
    });

    // Видаляємо клас "hide" з усіх стрілок
    cardsArrow.forEach((arrow) => {
      arrow.classList.remove("hide");
    });

    // Додаємо клас "width" до натиснутої картки
    cards[idx].classList.add("width");

    // Додаємо клас "opacity" до опису натиснутої картки
    absoluteBlocks[idx].classList.add("opacity");

    // Приховуємо стрілку для натиснутої картки
    arrow.classList.add("hide");
  });
});
