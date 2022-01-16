

function getCovidData() {

    //var covidApiUrl = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/us_only?min_date=2022-01-01T00:00:00.000Z&max_date=2022-01-01T00:00:00.000Z&state=Alabama&hide_fields=_id, date, country, combined_name, fips, uid";
    //var covidApiUrl = "https://covid-19-data.p.rapidapi.com/country/code?code=canada";
    //var covidApiUrl = "https://covid19-api.com/country?name=canada&format=json";
    fetch(covidApiUrl)
        .then(async function (response) {
            var data = await response.json();
            console.log(data.length);
           
        })


}

//getCovidData();


function soccerData() {

    var soccerUrl = "https://app.sportdataapi.com/api/v1/status?apikey=bc937e20-740c-11ec-9f34-271cd849eb30&continent=Europe"
    fetch(soccerUrl)
        .then(async function (response) {
            var soccerData = await response.json();
            console.log(soccerData);
        });
}

//soccerData();

function teamApiData() {

    // var nbaApi = "http://data.nba.net/10s/prod/v1/today.json"
    var teamUrl = "http://data.nba.net/10s/prod/v2/2021/teams.json"
    fetch(teamUrl)
        .then(async function (response) {
            var teamData = await response.json();
            console.log(teamData);

            for (var i = 0; i < teamData.league.standard.length; i++) {
                $("#teams").append('<option value="' + teamData.league.standard[i].teamId + '">' + teamData.league.standard[i].fullName + '</option');
            }
        });
}

teamApiData();

function playerApiData() {

    // var nbaApi = "http://data.nba.net/10s/prod/v1/today.json"
    var playerUrl = "http://data.nba.net/10s/prod/v2/2021/teams.json"
    fetch(playerUrl)
        .then(async function (response) {
            var playerData = await response.json();
            console.log(playerData);
        });
}

playerApiData();
//getCovidData();


