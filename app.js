$(document).ready(function() {

  $.ajax({
    type: "GET",
    url: "https://myapi.profstream.com/api/2857ac/wines",
    success: function(wines) {
      console.log(wines);
      console.log(
        wines[0].name + " was made in " +
        wines[0].year + " and comes from the " +
        wines[0].region + " region of " +
        wines[0].country + ". " +
        wines[0].description);

      console.log(
        wines[1].name + " was made in " +
        wines[1].year + " and comes from the " +
        wines[1].region + " region of " +
        wines[1].country + ". " +
        wines[1].description);

      console.log(
        wines[2].name + " was made in " +
        wines[2].year + " and comes from the " +
        wines[2].region + " region of " +
        wines[2].country + ". " +
        wines[2].description);

      console.log(
        wines[3].name + " was made in " +
        wines[3].year + " and comes from the " +
        wines[3].region + " region of " +
        wines[3].country + ". " +
        wines[3].description);


      console.log(
        wines[4].name + " was made in " +
        wines[4].year + " and comes from the " +
        wines[4].region + " region of " +
        wines[4].country + ". " +
        wines[4].description);

      console.log(
        wines[5].name + " was made in " +
        wines[5].year + " and comes from the " +
        wines[5].region + " region of " +
        wines[5].country + ". " +
        wines[5].description);

      console.log(
        wines[6].name + " was made in " +
        wines[6].year + " and comes from the " +
        wines[6].region + " region of " +
        wines[6].country + ". " +
        wines[6].description);

      console.log(
        wines[7].name + " was made in " +
        wines[7].year + " and comes from the " +
        wines[7].region + " region of " +
        wines[7].country + ". " +
        wines[7].description);

// to shorten the functions, you can use "forEach"
// wines.forEach(function(wine) {
//   console.log("Wine's name is " + wine.name);
//   console.log("Wine's year is " + wine.year);
// });

    },

    //create console.logs the wine:


      error: function () {
      alert ("Error getting data");
    }
  });





});
