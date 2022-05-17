export function map() {
    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("ymap", {
            center: [59.939135, 30.321458],
            zoom: 17,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });

        var myPlacemark = new ymaps.Placemark([59.938669, 30.323118], {},
            {
                iconLayout: 'default#image',
                iconImageHref: '@img/marker-map.png',
                iconImageSize: [231, 190],
                iconImageOffset: [-50, -210]
            });
        myMap.geoObjects.add(myPlacemark);
    }
}