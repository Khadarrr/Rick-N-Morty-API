const resultContainer = document.querySelector("#js-results");
const searchEL = document.querySelector("#js-search");

const url = "https://rickandmortyapi.com/api/character";

fetchCharacter();

searchEL.addEventListener("keyup", function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    fetchCharacter(searchValue);
});

async function fetchCharacter(searchValue = "") {
    try {
        resultContainer.innerHTML = `<div class="loader"></div>`;
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
        const characters = json.results;

        const filteredCharacters = characters.filter(function (character) {
            return character.name.toLowerCase().includes(searchValue);
        });

        resultContainer.innerHTML = ``;
        
        filteredCharacters.forEach(function (character) {
            resultContainer.innerHTML += `<a href="/details.html?id=${character.id}" class="card">
            <div class="image" style="background-image: url(${character.image});"></div>
            <div class="details">
                <h4 class="name">${character.name}</h4>
                <h4>${character.gender}</h4>  
                <span>${character.status}</span>
                <span>${character.species}</span>                                                                                                                                                     
            </div>
        </a>`;
        });
    } catch (error) {
        console.log(error);
    }
} 

fetchCharacter();

