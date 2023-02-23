const detailContainer = document.querySelector("#game-detail");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = `https://rickandmortyapi.com/api/character/${id}`;
console.log(url);

async function fetchGames() {
    try {
        detailContainer.innerHTML = `<div class="loader"></div>`;
        const response = await fetch(url);
        const details = await response.json();


        
        createHtml(details);
    } catch (error) {
        console.log(error);
    }
}

fetchGames();

function createHtml(details) {
    detailContainer.innerHTML = `
      <div class="details-image" style="background-image: url('${details.image}')"></div>
      <h2 class="details-info">${details.name}</h2>
      <div class="details-info">Status: ${details.status}</div>
      <h2><div><img class="rnm-pic" src="/pngaaa.com-2998297.png" alt="rick n morty logo"></h2></div>
      `;
  }
  