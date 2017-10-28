var config = {
    apiKey: "AIzaSyC_iCNRw1-_EefEtmgoyiHN5XdB3UGisvA",
    authDomain: "brew-database-97a1f.firebaseapp.com",
    databaseURL: "https://brew-database-97a1f.firebaseio.com",
    storageBucket: "brew-database-97a1f.appspot.com",
  };

// make sure they are connecting
firebase.initializeApp(config);

// Add comment

var database = firebase.database();

//api call will .push into the array...
var locationsEmpty = [];
 
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 2, // Creates a dropdown of 15 years to control year,
    format: 'yyyy-mm-dd',
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
});

//-----------------------------------------------------------
$("#submit-btn").on("click", function(event){
  event.preventDefault();

// constructing a queryURL variable we will use instead of the literal string inside of the ajax method
  var startDates = $("#startDate").val();
  var endDates = $("#endDate").val();
  var time = "T00:00:00Z";
  var title = "Ticket Master";
  var genre = $("#genre").val();
  var startDate = startDates.concat(time);
  var endDate = endDates.concat(time);
  var size= parseInt($("#size").val());
  var apiKey="qq8XdJrLt8geS8g2CUjbY9sqKk8crlQw";
  var queryURL = "https:app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Chicago&classificationName=music&classificationName="+genre+"&startDateTime="+startDate+"&endDateTime="+endDate+"&size="+size+"&apikey="+apiKey;

  var myShows = {
    "shows": []
  };

  //"https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Chicago&endDateTime=2017-10-28T00:00:00Z&startDateTime=2017-10-23T00:00:00Z&classificationId=KZFzniwnSyZfZ7v7nJ&classificationName=pop&size=31&apikey="+ apiKey;
  //"https://app.ticketmaster.com/classification/v2/Id=KZFzniwnSyZfZ7v7nJ&apikey"+apiKey;
  // "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Chicago&keyword=katy perry&apikey="+ apiKey;
  //"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=chicago&apikey="+apiKey;

  //the ajax call
  $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      //console.log(response);
      // console.log(response.Runtime);
        var events = response._embedded.events;
    //console.log(events);
      myShows = {
        "shows": []
    };

    for(var i=0;i<events.length;i++){
      var aShow ={
        "name": events[i].name,
        "date": events[i].dates.start.localDate,
        "venue": events[i]._embedded.venues[0].name,
        "photoURL": events[i].images[0].url,
        "ticketURL": events[i].url
        //"latitude": events[i]._embedded.venues[0].location.latitude,
        //"longitude": events[i]._embedded.venues[0].location.longitude
       } ;
      //console.log(aShow);
      myShows.shows.push(aShow);
      var myButton = $("<button class='api-btn'>" + events[i].name + "</button>");
      // var myMarker = new google.maps.Marker({
      //         position: events[i]._embedded.venues[0].name.geometry.location
      //       });
      myButton.attr("data-show", i);
      myButton.click(function() {

        // Do something with the value

        var showIndex = $(this).attr('data-show'); // grabs the index of show
        console.log(myShows.shows[showIndex].venue);

      changeSrc(myShows.shows[showIndex].venue);

      });

      $('.concert-btn').append(myButton);

      // if ( no api calls ) {
      //   var noShow = ("<h1> Sorry no results found. </h1>");
      // }
    }

  });

});  

//-----------------------------------------------------------

function loadIframe() {
//this will populate the map, once they click one of ten buttons
}

function changeSrc(myobj) {
//this will be the function that changes the src in the map

  // we grab what the user types 
  var userLocation = myobj;

  //once submit gets clicked we change the path of the iframe to what the user has typed
  $("#myFrame").attr('src', "https://www.google.com/maps/embed/v1/search?q=" + userLocation + "&key=AIzaSyB7ydrZE1U4_y3TjyeaO2aVyfWzxUnxKuk");
}

//-----------------------------------------------------------

$(document).ready(function() {
    // Emily what is this?
   $('select').material_select();

   //once submit is pressed
    // $("#submit-btn").on("click", function(){

    //  loadIframe()

    // });

    // $(".api-btn").on("click", function(){
    //   console.log("button clicked!!!");

    // });
});

$("#result").on("click", function() {

  //when the api result shows
  //you can click a check "interested"
  //set the database for what you have interested


});