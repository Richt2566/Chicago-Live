var config = {
    apiKey: "AIzaSyC_iCNRw1-_EefEtmgoyiHN5XdB3UGisvA",
    authDomain: "brew-database-97a1f.firebaseapp.com",
    databaseURL: "https://brew-database-97a1f.firebaseio.com",
    storageBucket: "brew-database-97a1f.appspot.com",
  };

// make sure they are connecting
firebase.initializeApp(config);

var database = firebase.database();

//var locations = [location1, location2];

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
<<<<<<< HEAD
var title = "Ticket Master";
var genre = "Rock";
var startDate = "2017-10-23T00:00:00Z";
var endDate ="2017-10-26T00:00:00Z";
var size="50";
var apiKey="qq8XdJrLt8geS8g2CUjbY9sqKk8crlQw";
var queryURL = "https:app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Chicago&classificationName=music&classificationName="+genre+"&startDateTime="+startDate+"&endDateTime="+endDate+"&size="+size+"&apikey="+apiKey;

//"https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Chicago&endDateTime=2017-10-28T00:00:00Z&startDateTime=2017-10-23T00:00:00Z&classificationId=KZFzniwnSyZfZ7v7nJ&classificationName=pop&size=31&apikey="+ apiKey;

//"https://app.ticketmaster.com/classification/v2/Id=KZFzniwnSyZfZ7v7nJ&apikey"+apiKey;
// "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Chicago&keyword=katy perry&apikey="+ apiKey;
//"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=chicago&apikey="+apiKey;

//the ajax call
$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    // console.log(response.Runtime);
        var events = response._embedded.events;
  console.log(events);
  var myObject = {
    "shows": []
  };
  for(var i=0;i<events.length;i++){
    var aShow ={
      "name": events[i].name,
      "date": events[i].dates.start.localDate
     } ;
    //console.log(aShow);
    myObject.shows.push(aShow);
  }

});
=======
  var startDates = $("#startDate").val();
  var endDates = $("#endDate").val();
  var time = "T00:00:00Z";
  console.log(startDates);
  var title = "Ticket Master";
  var genre = "Rock";
  var startDate = startDates.concat(time);
  var endDate = endDates.concat(time);
  var size="50";
  var apiKey="qq8XdJrLt8geS8g2CUjbY9sqKk8crlQw";
  var queryURL = "https:app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Chicago&classificationName=music&classificationName="+genre+"&startDateTime="+startDate+"&endDateTime="+endDate+"&size="+size+"&apikey="+apiKey;

  //"https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Chicago&endDateTime=2017-10-28T00:00:00Z&startDateTime=2017-10-23T00:00:00Z&classificationId=KZFzniwnSyZfZ7v7nJ&classificationName=pop&size=31&apikey="+ apiKey;

  //"https://app.ticketmaster.com/classification/v2/Id=KZFzniwnSyZfZ7v7nJ&apikey"+apiKey;
  // "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=Chicago&keyword=katy perry&apikey="+ apiKey;
  //"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=chicago&apikey="+apiKey;

  //the ajax call
  $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
      // console.log(response.Runtime);
          var events = response._embedded.events;
    console.log(events);
    var myObject = {
      "shows": []
    };
    for(var i=0;i<events.length;i++){
      var aShow ={
        "name": events[i].name,
        "date": events[i].dates.start.localDate,
        "venue": events[i]._embedded.venues[0].name,
        "latitude": events[i]._embedded.venues[0].location.latitude,
        "longitude": events[i]._embedded.venues[0].location.longitude
       } ;
      console.log(aShow);
      myObject.shows.push(aShow);
    }

  });

});  
>>>>>>> 7a2d39c4813f66899b9e58a0710547133eeee037

//-----------------------------------------------------------

//for loop based on the api results
//for (i = 0; i < apiresults.length; i++) {
  //this will be ten api results
  //buttons with band name - date

  // if(no results) {
  //   console.log("no results - please try again");
  // }

//}

function loadIframe() {
//this will populate the map, once they click one of ten buttons
}

function changeSrc() {
//this will be the function that changes the src in the map

  // we grab what the user types 
  var userLocation = "united+center";

  //$("#type-something").val().trim();

  //once submit gets clicked we change the path of the iframe to what the user has typed
  $("#myFrame").attr('src', "https://www.google.com/maps/embed/v1/search?q=" + userLocation + "&key=AIzaSyB7ydrZE1U4_y3TjyeaO2aVyfWzxUnxKuk");
}

//-----------------------------------------------------------

$(document).ready(function() {
    // Emily what is this?
   $('select').material_select();

    //
<<<<<<< HEAD
    $("#submit-btn").on("click", function(){
=======
   $("#submit-button").on("click", function(){
>>>>>>> 7a2d39c4813f66899b9e58a0710547133eeee037

      //once submit gets clicked ten bands show up 
      //from the div area - maybe reworking into for loop
      // var column = $("<tbody></tbody>");

      //   column.append("<tr>" + something + "</tr>");
      //   column.append("<tr>" + something + "</tr>");
      //   column.append("<tr>" + something + "</tr>");
      //   column.append("<tr>" + something + "</tr>");
      //   column.append("<tr>" + something + "</tr>");
      //   column.append("<tr>" + something + "</tr>");
      //$("#button-pit").append(column);

<<<<<<< HEAD
      //loadIframe()
      changeSrc();
=======
     loadIframe()
     changeSrc();
>>>>>>> 7a2d39c4813f66899b9e58a0710547133eeee037
    });
});

//$(document).on("click", "#submit-btn", onSubmit);