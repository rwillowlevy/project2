$(document).ready(function() {
    $( ".hidden" ).hide()  
    $( ".hidden2" ).hide()  
    
    $(".search").on("submit", function() {
        //prevent default behavior for button
        event.preventDefault();
        $( ".hidden" ).show()
        $( ".hidden2" ).show()
        //links search inputs from HTML
        let city = $("#searchByCity").val();
        let state = $("#state-input").val();
        let zip = $("#searchByZip").val();

        //sets default url if search inputs are all blank
        let defaultUrl = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=3da48bfd&app_key=3722fd8077a534619738f0de789cd371&pageSize=10'

        //the url that actually gets called
        let queryUrl = defaultUrl;

        //adds on location params to query url if they are entered
        if (city !== '') {
            queryUrl = queryUrl.concat("&city=" + city)
        };
        if (state !== "null") {
            queryUrl = queryUrl.concat("&state=" + state)
        };
        if (zip !== '') {
            queryUrl = queryUrl.concat("&zip=" + zip)
        };

        //settings for ajax call
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": queryUrl,
            "method": "GET",
        }

        console.log(settings.url)

        //ajax call
        
        $.ajax(settings).done(function (response){
            queryUrl = defaultUrl;
            $("#searchByCity").val('')
            $("#state-input").val("")
            $("#searchByZip").val('')
            console.log(response)
           
            
            let block = ``
            for (var i = 0; i <10; i++ ){
                block += `
                <h3>Charity Name: <span data-name = '${response[i].charityName}'>${response[i].charityName}</span></h3>
                <h5>Address: ${response[i].mailingAddress.streetAddress1} ${response[i].mailingAddress.city}, ${response[i].mailingAddress.stateOrProvince} ${response[i].mailingAddress.postalCode} </h5>
                <h6>Deductibility: ${response[i].irsClassification.deductibility}</h6>
                <h6>Type of Charity: ${response[i].irsClassification.nteeType}</h6>
                <h6>Classification: ${response[i].irsClassification.classification}</h6>
                <h6>Affiliation: ${response[i].irsClassification.affiliation}</h6>
                <hr>`
                
            console.log(response[i].charityName)
            console.log(response[i].charityName)
            console.log(response[i].mailingAddress.streetAddress1)            
            console.log(response[i].mailingAddress.city)
            console.log(response[i].mailingAddress.stateOrProvince)
            console.log(response[i].mailingAddress.postalCode)
            };
            $('.charityResults').html(block)
      $('.favorite').on('click',function(){
          console.log($(this).attr('data-name'))
      })       
      var stateID= response[0].mailingAddress.stateOrProvince       
      var queryURL = "https://covidtracking.com/api/v1/states/" + stateID + "/current.json" ;  
    
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
  
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
  
        var negative = response.negative;
        var pSix = $("<p>").text("Negative: " + negative);
        stateDiv.append(pSix);
        // Putting the entire into above the previous state
        $("#states-view").html(stateDiv);
        const pieChart = new Chart(document.getElementById("myChart"), {
          type: 'pie',
          data: {
            labels: ["Positive", "Negative", "Death"],
            datasets: [
              {
                label: "Population",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
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
  
    })
  
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
    $("#add-state").on("click", function (event) {
      event.preventDefault();
      // This line grabs the input from the textbox
      var state = $("#state-input").val().trim();
  
      // Adding state from the textbox to our array
      
  
      // Calling renderButtons which handles the processing of our state array
      renderButtons();
    });
  
    // Adding a click event listener to all elements with a class of "state-btn"
    $(document).on("click", ".state-btn", displayStateInfo);
  
    // Calling the renderButtons function to display the initial buttons
    renderButtons();
  });
   
    });

   









    


