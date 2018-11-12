var time = [
    'Morning',
    'Afternoon',
    'Evening',
    'Redeye'
];

function filterBy(time) {

    var filters = ['==', 'time', time];
    map.setFilter('Time of Day', filters);

    // Set the label to the month
    document.getElementById('time').textContent = time[time];
}

map.on('load', function () {

    // Data courtesy of http://earthquake.usgs.gov/
    // Query for significant earthquakes in 2015 URL request looked like this:
    // http://earthquake.usgs.gov/fdsnws/event/1/query
    //    ?format=geojson
    //    &starttime=2015-01-01
    //    &endtime=2015-12-31
    //    &minmagnitude=6'
    //
    // Here we're using d3 to help us make the ajax request but you can use
    // Any request method (library or otherwise) you wish.

        filterBy(0);

        document.getElementById('slider').addEventListener('input', function (e) {
            var time = parseInt(e.target.value, 3);
            filterBy(time);
        });
    });
});