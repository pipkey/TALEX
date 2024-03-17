ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: ["55°41'40.4", "38°00'01.2"], // Координаты вашего местоположения
        zoom: 12 // Масштаб карты
    });

    var myPlacemark = new ymaps.Placemark(["55°41'40.4", "38°00'01.2"], {
        hintContent: 'Место, которое вам нужно',
        balloonContent: 'Дополнительная информация'
    });

    myMap.geoObjects.add(myPlacemark);
});