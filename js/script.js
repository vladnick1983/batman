//Бургер
const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");
burger.addEventListener("click", () => {
  navigation.classList.add("navigation_active");
});
//Кнопка закриття
const navigationClose = document.querySelector(".navigation__close");
navigationClose.addEventListener("click", () => {
  navigation.classList.remove("navigation_active");
});

//Музика
try {
  const mute = document.querySelector(".mute__checkbox");
  const audio = new Audio("audio/waterTower.mp3");
  mute.addEventListener("change", () => {
    if (mute.checked) {
      audio.play();
    } else {
      audio.pause();
    }
  });
} catch {}

try {
  const sliderThumbs = new Swiper(".slider-thumbs", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loopedSlides: 4,
  });

  sliderThumbs.on("click", (swiper) => {
    swiper.slideTo(swiper.clickedIndex);
  });

  const sliderMain = new Swiper(".slider-main", {
    loop: true,
    loopedSlides: 4,
  });
  sliderThumbs.controller.control = sliderMain;
  sliderMain.controller.control = sliderThumbs;
  const videos = document.querySelectorAll("video");
  sliderMain.on("slideChange", () => {
    for (let i = 0; i < videos.length; i++) {
      videos[i].pause();
    }
  });
  const pagination = document.querySelector(".pagination");
  const paginationButton = document.querySelector(".pagination__array");
  paginationButton.addEventListener("click",()=>{
    pagination.classList.toggle("pagination_active")
  })
} catch {}
