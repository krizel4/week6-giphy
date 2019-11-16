$(document).ready(function(){

    // Array of initial buttons
    var preselectedComedies = ["The Office", "Catastrophe", "Parks and Rec", "Arrested Development", "Brooklyn 99", "SNL", "Silicon Valley", "30 Rock", "The Last Man on Earth", "Mindy Project"];

    // AJAX - GIPHY call using the GET method
     var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

    
    // Create a loop that appends a button for each string in the array
    for(var i = 0; i < results.length; i++) {
      var comediesDiv = $("<div>");
    };
         
    // Display giphy
    comediesDiv.prepend(giphyeImage);
    $("#populated-gifs").prepend(comediesDiv);
    
    // On click, page should grab 10 static, non-animated gif images

    // When user clicks a still GIPHY, gif should animate. 
    var giphy = $("<img>");
   
    
    // When user clicks a moving gif, it should stop animating.
    $(".giphy").on("click", function() {
      var state = $(this).attr("data-state");
      console.log(state);
    });

    // Add a rating to each gif
    var rating = results[i].rating;
    var p = $("<h2>").text("Rating: " + rating);
    giphy.prepend(p);

    // When a user searches using the input form, add the input to the array.

    // Call each topic chosen by the user and make a button on the page. (Like Activity 6.7)

    //    * Be sure to read about these GIPHY parameters (hint, hint):
    //      * `q`
    //      * `limit`
    //      * `rating`
    
    
});