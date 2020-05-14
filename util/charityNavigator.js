$(document).ready(function() {
    let charitiesArray = [];

    $(".search").on("submit", function() {
        //prevent default behavior for button
        event.preventDefault();

        //API ID and Key (these will be hidden in a .env file once we set up the server, but I hard-coded them for now)
        let apiId = "3da48bfd";
        let apiKey = "3722fd8077a534619738f0de789cd371";

        //links search inputs from HTML
        let city = $("#searchByCity").val();
        let state = $("#searchByState").val();
        let zip = $("#searchByZip").val();

        //sets default url if search inputs are all blank
        let defaultUrl = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${apiId}&app_key=${apiKey}&pageSize=5`

        //the url that actually gets called
        let queryUrl = defaultUrl;

        //adds on location params to query url if they are entered
        if (city !== '') {
            queryUrl = queryUrl.concat("&city=" + city)
        };
        if (state !== "null") {
            queryUrl = queryUrl.concat("&state=" + state)s
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
            charitiesArray = [];
            queryUrl = defaultUrl;
            $("#searchByCity").val(null)
            $("#searchByState").val("null")
            $("#searchByZip").val(null)

            response.forEach(charity => {
                let info = {
                    name: charity.charityName,
                    url: charity.charityNavigatorURL,
                    mailingAddress: [
                        charity.mailingAddress.streetAddress1,
                        charity.mailingAddress.city,
                        charity.mailingAddress.stateOrProvince,
                        charity.mailingAddress.postalCode
                    ]
                }
                charitiesArray.push(info)
            });

            console.log(charitiesArray)

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
})
