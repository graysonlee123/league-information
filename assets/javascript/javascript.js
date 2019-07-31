const apiKey = "RGAPI-57b5ee7b-71e2-4449-a0ae-59d056d977cb";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

let accountID = null;

console.log("Hello world");

$("#submitSearch").on("click", function (e) {
    e.preventDefault();

    let summonerName = $("#summonerNameSearch").val();
    
    console.log(summonerName);
    getSummoner(summonerName);
});

function getSummoner(name) {
    $.ajax({
        url: `${corsAnywhere}https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`,
        method: "GET"
    }).then(function (data) {
        accountID = data.accountId;
        getMatchHistory(data.accountID);
    });
}

function getMatchHistory(account) {
    $.ajax({
        url: `${corsAnywhere}https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountID}?api_key=${apiKey}`,
        method: "GET"
    }).then(function (data) {
        console.log(data);
    });
}