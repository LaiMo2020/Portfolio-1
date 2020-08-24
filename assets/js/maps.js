function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 11.051243244801395, lng: 43.35887496470792 },
        { lat: 32.764985540531214, lng: 19.203773428828804 },
        { lat: 29.84632575848377, lng: 31.371152405330438 },
        { lat: 39.88104633844934, lng: 22.010800842830438},
        { lat: 50.939849242438726, lng: 1.8509948534708132}
        
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}