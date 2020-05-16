$(document).ready(function() {
      // Initial array of states
      var states = ["IL", "TX", "IN", "ID"];

      // displayStateInfo function re-renders the HTML to display the appropriate content
      function displayStateInfo() {

        var state = $(this).attr("data-name");
        var queryURL = "https://covidtracking.com/api/v1/states/" + state +"/current.json";

        // Creating an AJAX call for the specific state button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

          // Creating a div to hold the state
          var stateDiv = $("<div class='state'>");
          // Storing the state data
          var state = response.state;

          // Creating an element to have the state displayed
          var pOne = $("<p>").text("State: " + state);

          // Displaying the state
          stateDiv.append(pOne);
          
          // Storing the time data
          var dateModified = response.dateModified;

          // Creating an element to have the time displayed
          var pTwo = $("<p>").text("Last modified: " + dateModified);

          // Displaying the time
          stateDiv.append(pTwo);

          // Storing the tests
          var tested = response.totalTestResults;

          // Creating an element to hold the tests
          var pThree = $("<p>").text("Tested: " + tested);

          // Displaying the tests
          stateDiv.append(pThree);

          // Storing the positive
          var positive = response.positive;

          // Creating an element to hold the positive
          var pFour = $("<p>").text("Positive: " + positive);

          // Appending the positive
          stateDiv.append(pFour);

          // Storing the deaths
          var death = response.death;

          // Creating an element to hold the deaths
          var pFive = $("<p>").text("Deaths: " + death);

          // Appending the deaths
          stateDiv.append(pFive);


          // Putting the entire into above the previous state
          $("#states-view").prepend(stateDiv);
          
          //chart
          new Chart(document.getElementById("myChart"), {
          type: 'pie',
          data: {
          labels: ["Positive", "Negative", "Death"],
          datasets: [
          {
          label: "Population",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [positive, negative, death]
          }
          ]
          },
          options: {
          title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
          }
        }
        });
        });

      }

      // Function for displaying state data
      function renderButtons() {

        // Deleting the state prior to adding new states
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of states
        for (var i = 0; i < states.length; i++) {

          // Then dynamicaly generating buttons for each state in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of state-btn to our button
          a.addClass("state-btn");
          // Adding a data-attribute
          a.attr("data-name", states[i]);
          // Providing the initial button text
          a.text(states[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a state button is clicked
      $("#add-state").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var state = $("#state-input").val().trim();

        // Adding state from the textbox to our array
        states.push(state);

        // Calling renderButtons which handles the processing of our state array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "state-btn"
      $(document).on("click", ".state-btn", displayStateInfo);

      // Calling the renderButtons function to display the initial buttons
      renderButtons();
    })
