//var locations = [location1, location2];

//api call will .push into the array...
var locationsEmpty = [];
 

$(document).ready(function() {
    // Emily what is this?
    $('select').material_select();

    //
    $("#submit-button").on("click", function(){


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

      loadIframe()
      changeSrc();
    });
});

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 2, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

//for loop based on the api results
for (i = 0; i < apiresults.length; i++) {
  //this will be ten api results
  //buttons with band name - date

}

function loadIframe() {

//this will populate the map, once they click one of ten buttons

}

function changeSrc() {
//this will be the function that changes the src in the map

  // we grab what the user types 
  var userLocation = $("#type-something").val().trim();

  //once submit gets clicked we change the path of the iframe to what the user has typed
  $("#myFrame").attr('src', "https:www.google.com/maps/embed/v1/place?key=AIzaSyB7ydrZE1U4_y3TjyeaO2aVyfWzxUnxKuk&q=" + userLocation);

}