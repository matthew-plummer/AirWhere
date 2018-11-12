 mapboxgl.accessToken = 'pk.eyJ1Ijoiam1rNjQzNiIsImEiOiJjamRtM2U0bDQwZ2RnMnFvNHluMWR2Zjg1In0.9-Q_u-oGKWoq54QDssVViQ';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            center: [-75.3, 40.0],
            zoom: 11,
            width: 300,
            height: 300
        });

        map.on('load', function () {

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