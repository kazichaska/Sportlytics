

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


function soccerData() {
    
    var soccerUrl = "https://app.sportdataapi.com/api/v1/status?apikey=bc937e20-740c-11ec-9f34-271cd849eb30&continent=Europe"
    fetch(soccerUrl)
    .then(async function(response) {
        var soccerData = await response.json();
        console.log(soccerData);
    });
}

soccerData();

function leagueApiData() {
    
    // var nbaApi = "http://data.nba.net/10s/prod/v1/today.json"
    var leagueRoaster = "http://data.nba.net/10s/prod/v1/2021/coaches.json"
    fetch(leagueRoaster)
    .then(async function(response) {
        var leagueData = await response.json();
        console.log(leagueData);
    });
}

leagueApiData();

