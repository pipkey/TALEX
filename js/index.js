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


let currentSlidep = 0;
const slidesP = document.querySelectorAll('.slideP');

function showSlide(n) {
    slidesP[currentSlide].classList.remove('activeP');
    currentSlide = (n + slidesP.length) % slidesP.length;
    slidesP[currentSlide].classList.add('activeP');
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);

    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 3000); // Интервал смены слайдов (в миллисекундах)
});

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