$(document).ready(function() {

    
    $(".search").on("submit", function() {
        //prevent default behavior for button
        event.preventDefault();

        //links search inputs from HTML
        let city = $("#searchByCity").val();
        let state = $("#searchByState").val();
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
        $.ajax(settings).done(function (response) {
            queryUrl = defaultUrl;
            $("#searchByCity").val(null)
            $("#searchByState").val("null")
            $("#searchByZip").val(null)
            console.log(response);
            console.log(response[0].mailingAddress.streetAddress1)
            console.log(response[1].mailingAddress.streetAddress1)
            console.log(response[2].mailingAddress.streetAddress1)
            console.log(response[3].mailingAddress.streetAddress1)
            console.log(response[4].mailingAddress.streetAddress1)
            console.log(response[5].mailingAddress.streetAddress1)
            console.log(response[6].mailingAddress.streetAddress1)
            console.log(response[7].mailingAddress.streetAddress1)
            console.log(response[8].mailingAddress.streetAddress1)
            console.log(response[9].mailingAddress.streetAddress1)
           

            
            
            

            
            

//IGNORE THIS SECTION!!! Keeping it here for future use
//             $(`#symbolDiv`).html(`
//                 <p class="center-align">
//                     <b><span id="symbol">${responseSumm.symbol}</span></b>
//                 </p>
//             `)
//             $(`#countryDiv`).html(`
//                 <p class="center-align">
//                     <span class="label"><b>Country:</b></span>
//                     </br>
//                     <span id="country">${responseSumm.assetProfile.country}</span>
//                 </p>
//             `)
//             $(`#industryDiv`).html(`
//                 <p class="center-align">
//                     <span class="label"><b>Industry:</b></span>
//                     </br>
//                     <span id="country">${responseSumm.assetProfile.industry}</span>
//                 </p>
//             `)
//         });
        });
    });
});

var kyle = 'my name is kyle'




