//Use css to reduce the opacity/ or pointer event (turn it to none)/ disable class.
// import kyle from 'charitynavigator.js'
var searchField = $(".searchField");
var queryParams={
    locations: [],
    
};

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){  //Asynchronous like an ajax call.
        //console.log(position);
        queryParams.latitude = position.coords.latitude;
        queryParams.longitude = position.coords.longitude;
        initMap();
    });
}else{
    alert("Geolocation not supported by your browser");
}

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: queryParams.latitude, lng: queryParams.longitude},
        zoom: 11,
        styles: [
          {
            "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [   
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
    });
    console.log(queryParams.locations.length);
    if (queryParams.locations.length != 0){
        console.log(queryParams.locations.length);
        for (var i = 0; i < queryParams.locations.length; i++){
            var marker = new google.maps.Marker({
            position: queryParams.locations[i],
            map: map,
            title: queryParams.locations[i].name,
            });
            
            google.maps.event.addListener(marker, "click", function(e){
                //If the name of the restaurant I clicked on matches the name of the 
                //restaurant objects, then we display the information on the div on the right hand side.
                var displayInfo =  $('#restaurantInfo');
                displayInfo.text("");
                console.log(e.tb.toElement.title);
                for (var i =0; i < queryParams.locations.length; i++){
                    if (e.tb.toElement.title == queryParams.locations[i].name){
                       displayInfo.append(`<h2> Name: <a href= "${queryParams.locations[i].url}">${queryParams.locations[i].name}</a> </h2>`);
                       displayInfo.append(`<h3> Rating: ${queryParams.locations[i].rating} </h3>`);
                       displayInfo.append(`<h3> Address: ${queryParams.locations[i].location} </h3>`);
                       displayInfo.append(`<h3> Phone Number: ${queryParams.locations[i].number} </h3>`);
                    //    displayInfo.append(`<img src="${queryParams.locations[i].imageurl}" width = "30%" height = "350px;">`);
                       //console.log(queryParams.locations[i].imageurl);
                    }
                }
                //historySearch.append(`<button style="width:82%" class = "${cityHistory.name}"  id="history">${ cityHistory.name }</button>`);

            })
        }
    }
}



console.log(kyle)
// $(".showOptions").on("click", function(){
//     qeuryParams = {  //default lat and lon are the user location. (from the if statement above.)
//         locations:[],
//     }
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(function(position){  //Asynchronous like an ajax call.
//             //console.log(position);
//             queryParams.latitude = position.coords.latitude;
//             queryParams.longitude = position.coords.longitude;
//             initMap();
//         });
//     }else{
//         alert("Geolocation not supported by your browser");
//     }
//     queryParams.term = "vegan";
    
//     console.log(queryParams);
//     lookupInfo();
// })

// $(".searchLocale").on("click", function(){
//     var searchTerm = searchField.val();  
//     queryParams = { 
//         "term": "vegan",
//         locations:[],
//     };
//     getLatLon(searchTerm);
// })

// function getLatLon(locale){
//     var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + locale + "&keykey=AIzaSyAjby3pU0mhZRvOI5WS5YoOkWUpd6XJ27o"
//     $.ajax({
//         url: queryURL,
//         method:'GET'
//     }).done((response)=>{
//         console.log(response);
//         queryParams.latitude = response.results[0].geometry.location.lat;
//         queryParams.longitude = response.results[0].geometry.location.lng;
//         console.log(queryParams.latitude);
//         lookupInfo();
//     })
// }




// //yelp api call
// function lookupInfo(){
//     $.ajax({
//         url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?' + $.param(queryParams),
//         method: 'GET',
//         dataType: 'json',
//         headers: {
//             'Authorization': 'Bearer EAiT4QPvfYbZKL0_ajV7ofQBUW6xOOBY1NjctoX5zaX-yfg9sDPalRuX2b5YszI6m_rlXe3ioXqKp476BS1iRe6Of-n9nWt16B2P5zfEhFYqgETjT3xhXbXYOytwXnYx'
//         }
//     }).done((response) => {
//         console.log(response)
//         for (var i = 0; i < response.businesses.length; i++){
//             var currentLocal = {
//                 lat : response.businesses[i].coordinates.latitude,
//                 lng : response.businesses[i].coordinates.longitude,
//                 name : response.businesses[i].name,
//                 imageurl : response.businesses[i].image_url,
//                 url : response.businesses[i].url,
//                 rating : response.businesses[i].rating,
//                 location : response.businesses[i].location.display_address[0],
//                 number : response.businesses[i].display_phone,

//             }
//             queryParams.locations.push(currentLocal);
//         }
//         initMap();
//         console.log(queryParams);
//     }).catch((error) => {
//         console.log("error")
//     })
// }

//Use css to reduce the opacity/ or pointer event (turn it to none)/ disable class.