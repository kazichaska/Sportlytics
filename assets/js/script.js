// variables
var savedTeams = [];

var playerData;

// loadTeamList function
function loadTeamList(teamID, teamName) {
    $("#teams").append('<option value="' + teamID + '">' + teamName + '</option');
}

function storeTeam(teamID, teamName) {
    var nbaTeam = {
        name : "",
        teamId : ""
    };

    nbaTeam.name = teamName;
    nbaTeam.teamId = teamID;
    savedTeams.push(nbaTeam);
    localStorage.setItem('nbaTeams', JSON.stringify(savedTeams));
}

// loadTeams function
function loadTeams() {

    savedTeams = JSON.parse(localStorage.getItem('nbaTeams'));
    if (!savedTeams) {
        savedTeams = [];
        console.log("Loading Teams from api");
        teamApiData();
    }
    else {
        console.log("Loading Teams from localStorage");
        for (var i = 0; i < savedTeams.length; i++) {
            loadTeamList(savedTeams[i].teamId, savedTeams[i].name);
        }
    }
}

// dataTest function
function dataTest(data) {

    if ((typeof (data) !== "undefined") && (typeof (data) !== null)) {
        return data
    }
    else {
        return "unknown";
    }
}

// playerData function
function playerData() {

    var team = $("#teams option:selected").val();
    //console.log("Team ID : " + team);
    $("#players").empty();
    var playerUrl = "https://data.nba.net/10s/prod/v1/2021/players.json";
    fetch(playerUrl)
        .then(async function (response) {
            playerData = await response.json();
            //console.log(playerData);


            for (var i = 0; i < playerData.league.standard.length; i++) {
                if (parseInt(playerData.league.standard[i].teamId) == parseInt(team)) {
                    $("#players").append('<tr><td>' + playerData.league.standard[i].jersey + '</td>' +
                        '<td>' + playerData.league.standard[i].firstName +
                        ' ' + playerData.league.standard[i].lastName + '</td>' +
                        '<td>' + playerData.league.standard[i].yearsPro + '</td>' +
                        '<td>' + playerData.league.standard[i].heightFeet + "'" +
                        playerData.league.standard[i].heightInches + '</td>' +
                        '<td>' + playerData.league.standard[i].collegeName + '</td></tr>');
                }
            }
            //console.log(players);
        });
}

// teamApiData function
function teamApiData() {

    // var nbaApi = "http://data.nba.net/10s/prod/v1/today.json"
    var teamUrl = "https://data.nba.net/10s/prod/v2/2021/teams.json"
    fetch(teamUrl)
        .then(async function (response) {
            var teamData = await response.json();
            //console.log(teamData);

            for (var i = 0; i < teamData.league.standard.length; i++) {
                if (teamData.league.standard[i].isNBAFranchise) {
                    loadTeamList(teamData.league.standard[i].teamId, teamData.league.standard[i].fullName);
                    storeTeam(teamData.league.standard[i].teamId, teamData.league.standard[i].fullName);
                }
            }
        });
}

//teamApiData();
loadTeams();
$("#teams").change(playerData);

// getCovidData function
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

