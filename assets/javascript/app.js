$(document).ready(function () {

  // Array of initial buttons
  var preselectedComedies = ["The Office", "Catastrophe", "Parks and Rec", "Arrested Development", "Brooklyn 99", "SNL", "Silicon Valley", "30 Rock", "Last Man on Earth", "Mindy Project"];

  // displayComedy function re-renders the HTML to display the appropriate content
  function displayComedy() {

    var comedy = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      comedy + "&api_key=niCgzQKH22tQxcNe0XbYEBVKOeFaKBUp&limit=10";

  // AJAX - GIPHY call using the GET method
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function (response) {
      $("#populated-gifs").empty();

      var results = response.data;
      console.log(response);
      for (var i = 0; i < results.length; i++) {

// Creates a div to hold the comedy
        var comedyDiv = $("<div>");

// Add a rating to each gif
        var rating = results[i].rating;
        var viewRating = $("<p>").text("Rating: " + rating);
        comedyDiv.prepend(viewRating);

// When user clicks a still GIPHY, gif should animate.
// When user clicks a moving gif, it should stop animating. 
        var giphy = $("<img>");
        giphy.attr("src", results[i].images.fixed_height_still.url);
        giphy.attr("data-still", results[i].images.fixed_height_still.url);
        giphy.attr("data-animate", results[i].images.fixed_height.url);
        giphy.attr("data-state", "still");
        comedyDiv.prepend(giphy);

// Display giphy    
        $("#populated-gifs").prepend(comedyDiv); // Creates a div to hold the comedy
      }
      $(".giphy").on("click", function () {
        var state = $(this).attr("data-state");
        console.log(state);

        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
    });
  }

// Populate buttons to appear on the page
  function renderButtons() {
    $("#comedy-buttons").empty();
    for (var i = 0; i < preselectedComedies.length; i++) {
      var comedyAdd = $("<button>");
      comedyAdd.addClass("comedy");
      comedyAdd.attr("data-name", preselectedComedies[i]);
      comedyAdd.text(preselectedComedies[i]);
      $("#comedy-buttons").append(comedyAdd);
    }
  }

  $("#add-show").on("click", function (event) {
    event.preventDefault();
    var comedy = $("#input").val().trim();

  // When a user searches using the input form, add the input to the array.
    preselectedComedies.push(comedy);

  // Call each topic chosen by the user and make a button on the page. (Like Activity 6.7)
    renderButtons();
  });
    $(document).on("click", ".comedy", displayComedy);
    renderButtons();
});