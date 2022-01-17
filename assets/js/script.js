




function getCovidData() {

    //var covidApiUrl = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/us_only?min_date=2022-01-01T00:00:00.000Z&max_date=2022-01-01T00:00:00.000Z&state=Alabama&hide_fields=_id, date, country, combined_name, fips, uid";
    //var covidApiUrl = ""https://data.cdc.gov/resource/9mfq-cb36.json";
    //var covidApiUrl = "https://covid19-api.com/country?name=canada&format=json";
    var covidApiUrl = "https://api.covidtracking.com/v1/states/current.json"
    fetch(covidApiUrl)
        .then(async function (response) {
            var covidData = await response.json();
            console.log(covidData[50].state);

            for (var i = 0; i < covidData.length; i++) {
                $("#covid").append('<option value="' + covidData[i].state + '">');
                console.log(covidData[i].state);
            }
            $(".covid").change(function() {
                alert("Handler for .change() called.");
            })
        });
}

getCovidData();


function playerData() {

    var playerUrl = "http://data.nba.net/10s/prod/v1/2021/players.json"
    fetch(playerUrl)
        .then(async function (response) {
            var playerData = await response.json();
            console.log(playerData);
        });
}

playerData();

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


