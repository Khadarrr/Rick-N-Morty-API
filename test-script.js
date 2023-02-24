const gameDetailContainer = document.querySelector(".game-detail");
const url = "https://rickandmortyapi.com/api/character";

async function fetchGames() {
    try {
      const response = await fetch(url);
      const json = await response.json();

      console.log(json);

      gameDetailContainer.innerHTML = "";

      const games = json.results;


      games.forEach(function (game) {
        gameDetailContainer.innerHTML += `
        <a href="/details.html?id=${game.id}" class="card">
            <div class="image" style="background-image: url(${game.image});"></div>
            <div class="details">
                <h4 class="name">${game.name}</h4>
                <h4>${game.gender}</h4>  
                <span>${game.status}</span>
                <span>${game.species}</span>                                                                                                                                                     
            </div>
        </a>
        `;
        const status = games.filter(function(games) {
          return games.gender === "Male";
        });
      });
    } catch (error) {
      console.log(error);
      gameDetailContainer.innerHTML = message("error", error);
    }
  }

  fetchGames();