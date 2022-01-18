
function getCovidData() {

    var covidApiUrl = "https://api.covidtracking.com/v1/states/current.json"
    fetch(covidApiUrl)
        .then(async function (response) {
            var covidData = await response.json();
            // console.log(covidData[50].state);

            for (var i = 0; i < covidData.length; i++) {
                $("#covidstate").append('<option value="' + [i] + '">' + covidData[i].state + '</option');
                // console.log(covidData);
            }
            $(".covid").change(function() {
                $("#date").empty();
                $("#testpositive").empty();
                $("#death").empty();
                $("#hospital").empty();
                $("#onventilator").empty();
                $("#viral").empty();
                pickedState = (event.target.value);
                console.log(pickedState);
                console.log(covidData[pickedState].death);
                var dateEl = document.createElement('p');
                var dateNo = (covidData[pickedState].date);
                var testPositiveEl = document.createElement('p');
                var testPositiveNo = (covidData[pickedState].positive);
                var deathEl = document.createElement('p');
                var deathNo = (covidData[pickedState].death);
                var hospitalizedEl = document.createElement('p');
                var hospitalNo = (covidData[pickedState].hospitalized);
                var onVentilatorEl = document.createElement('p');
                var ventilator = (covidData[pickedState].onVentilatorCurrently);
                var testViralEl = document.createElement('p');
                var testViral = (covidData[pickedState].totalTestsViral);
                // console.log(deathNo);
                // console.log(hospitalNo);
                $("#date").append(dateEl);
                dateEl.textContent = dateNo;
                $("#testpositive").append(testPositiveEl);
                testPositiveEl.textContent = testPositiveNo;
                $("#death").append(deathEl);
                deathEl.textContent = deathNo;
                $("#hospital").append(hospitalizedEl);
                hospitalizedEl.textContent = hospitalNo;
                $("#onventilator").append(onVentilatorEl);
                onVentilatorEl.textContent = ventilator;
                $("#viral").append(testViralEl);
                testViralEl.textContent = testViral;
                // $("#death").append("Total death for " + (covidData[pickedState].state) + " is: " + deathNo);
                // $("#death").html(covidData[pickedState].death);
                // $("hospital").html(covidData[pickedState].hospitalized);
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


