function initMapHeadquaters() {
    const location = { lat: 49.582283, lng: 17.258679 };

    const mapElement = document.querySelector(".mapHeadquaters");

    const map = new google.maps.Map(mapElement, {
        zoom: 16,
        center: location,
    });

    new google.maps.Marker({
        position: location,
        map: map,
        title: "Sídlo OFN",
    });
}

function initMapEvent() {
    const location = { lat: 49.5991489, lng: 17.2477681 };

    const mapElement = document.querySelector(".mapEvent");

    const map = new google.maps.Map(mapElement, {
        zoom: 16,
        center: location,
    });

    new google.maps.Marker({
        position: location,
        map: map,
        title: "Místo dalšího galavečera",
    });
}

