window.dataLayer.forEach(function(event) {
  var newEvent = document.createElement("li");
  newEvent.innerHTML =
    '<div class="info"><h2 class="title">' +
    event.short_description.fi +
    '</h2><p class="desc">' +
    event.description.fi +
    "</p></div>";
  document.getElementById("event-list").appendChild(newEvent);
});

/*  var helsinkiAirportDeparture = [

{
    airlines: 'norwegian',
    destination: 'oslo',
    departure: '11:00'
},
{
    airlines: 'finnair',
    destination: 'helsinki',
    departure: '12:00'
},
{
    airlines: 'british airways',
    destination: 'london',
    departure: '10:00'
}

];

helsinkiAirportDeparture.forEach(function(flight){

    var newFlight = document.createElement('li');
    newFlight.innerHTML.HTML = '<div class="info"><h2 class ="titile">' 
            + flight.airlines 
            + '</h2><h2 class="desc">'
            + flight.destination
            + '</h2></div>';

            document.getElementById('departure-list').appendChild(newFlight);
});


 */
