document.getElementById("playerSubmit").addEventListener("click",function(event){
  event.preventDefault();
  const value = document.getElementById("playerInput").value;
  if (value === "")
    return;
    const url = "https://www.balldontlie.io/api/v1/players/?search=" + value;
      fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          let results = "";
          results += '<h2>' + json.data[0].first_name +" "+ json.data[0].last_name + " (" + json.data[0].team.full_name + ")" + "</h2>";
          document.getElementById("playerResults").innerHTML = results;
          const url2 = "https://www.balldontlie.io/api/v1/season_averages?player_ids[]=" + json.data[0].id
          fetch(url2)
            .then(function(response) {
              return response.json();
            }).then(function(json) {
              let results2 = "";
              results2 += "<p> 2019-2020 Season stats: </p>";
              results2 += "<p>" + "Points per game: " + json.data[0].pts + "</p>";
              results2 += "<p>" + "Rebounds per game: " + json.data[0].reb + "</p>";
              results2 += "<p>" + "Assists per game: " + json.data[0].ast + "</p>";
              document.getElementById("playerStat").innerHTML = results2;
            });
        });
});
