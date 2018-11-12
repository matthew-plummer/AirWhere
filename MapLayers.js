map.on('load', function () {

    map.addSource('Airports', {
        type: 'geojson',
        data: "https://github.com/matthew-plummer/AirWhere/blob/master/usa_airports.geojson"
    });

    map.addLayer({
        "id": "United1",
        "type": "circle",
        "source": {
            "type": "geojson",
            "data": bikeThefts
        },

    });

    map.setFilter('United1', ['==', 'UCR', '625'])


    map.addLayer({
        "id": "Southwest1",
        "type": "circle",
        "source": {
            "type": "geojson",
            "data": bikeThefts
        },

    });

    map.setFilter('Southwest1', ['==', 'UCR', '615'])


    map.addLayer({
        "id": "Delta1",
        "type": "circle",
        "source": {
            "type": "geojson",
            "data": bikeThefts
        },

    });

    map.setFilter('Delta1', ['==', 'UCR', '635'])


    map.addLayer({
        "id": "American1",
        "type": "circle",
        "source": {
            "type": "geojson",
            "data": bikeThefts
        },

    });

    map.setFilter('American1', ['==', 'UCR', '645'])
});