

function getCovidData() {
    // var covidApiUrl = "https://covid-19-data.p.rapidapi.com/country/code?code=canada";
    var covidApiUrl = "https://covid19-api.com/country?name=canada&format=json"
    fetch(covidApiUrl)
    .then(async function(response) {
        var data = await response.json();
        console.log(data);       
    })
}

getCovidData();


// function getCovidData() {
//     // var covidApiUrl = "https://covid-19-data.p.rapidapi.com/country/code?code=canada";
//     var covidApiUrl = "https://covid19-api.com/country?name=canada&format=json"
//     fetch(covidApiUrl)
//     .then(async function(response) {
//         var data = await response.json();
//         console.log(data);       
//     })
// }

// getCovidData();

function rapidApiData() {
    
    var rapidapi = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/Canada/can&x-rapidapi-host="
    fetch(rapidapi)
    .then(async function(response) {
        var covidData = await response.json();
        console.log(covidData);
    });
}

rapidApiData();