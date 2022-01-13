

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

function teamApiData() {
    
    // var nbaApi = "http://data.nba.net/10s/prod/v1/today.json"
    var teamUrl = "http://data.nba.net/10s/prod/v2/2021/teams.json"
    fetch(teamUrl)
    .then(async function(response) {
        var teamData = await response.json();
        console.log(teamData);
    });
}

teamApiData();

function playerApiData() {
    
    // var nbaApi = "http://data.nba.net/10s/prod/v1/today.json"
    var playerUrl = "http://data.nba.net/10s/prod/v2/2021/teams.json"
    fetch(playerUrl)
    .then(async function(response) {
        var playerData = await response.json();
        console.log(playerData);
    });
}

playerApiData();

