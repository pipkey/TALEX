ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    center: ["55°41'40.4", "38°00'01.2"], // Координаты вашего местоположения
    zoom: 12, // Масштаб карты
  });

  var myPlacemark = new ymaps.Placemark(["55°41'40.4", "38°00'01.2"], {
    hintContent: "Место, которое вам нужно",
    balloonContent: "Дополнительная информация",
  });

  myMap.geoObjects.add(myPlacemark);
});


const slidesP = document.querySelectorAll('.slideP');
const dotsContainerP = document.querySelector('.paginationP');
let intervalId;

slidesP.forEach((slideP, index) => {
  const dotP = document.createElement('spanP');
  dotP.classList.add('dotP');
  if (index === 0) {
    dotP.classList.add('activeP');
  }
  dotP.addEventListener('click', () => {
    goToSlide(index);
  });
  dotsContainerP.appendChild(dotP);
});

let currentSlideP = 0;

function goToSlide(slideIndexP) {
  slidesP[currentSlideP].classList.remove('activeP');
  slidesP[slideIndexP].classList.add('activeP');
  dotsContainerP.querySelector('.dotP.activeP').classList.remove('activeP');
  dotsContainerP.querySelectorAll('.dotP')[slideIndexP].classList.add('activeP');
  currentSlideP = slideIndexP;
}
function nextSlide() {
  const nextSlideIndex = (currentSlideP + 1) % slidesP.length;
  goToSlide(nextSlideIndex);
}

function startSlider() {
  intervalId = setInterval(nextSlide, 3000); // Прокрутка каждые 5 секунд
}

function stopSlider() {
  clearInterval(intervalId);
}

startSlider();
// slider

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);

    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 3000); // Интервал смены слайдов (в миллисекундах)
});