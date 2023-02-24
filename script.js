const resultContainer = document.querySelector("#js-results");
const formEl = document.querySelector("#js-search-form");
const searchEL = document.querySelector("#js-search");
const genderEl = document.querySelector("#js-gender");
const maleCheckbox = document.querySelector("#js-male");
const femaleCheckbox = document.querySelector("#js-female");
const unknownCheckbox = document.querySelector("#js-unknown");



const url = "https://rickandmortyapi.com/api/character";

let characters = [];

fetchCharacters();

searchEL.addEventListener("keyup", function() {
    event.preventDefault();
    fetchCharacters(searchEL.value.toLowerCase(), getSelectedGender());
});

searchEL.addEventListener("search", function (event) {
    event.preventDefault();
    fetchCharacters(searchEL.value.toLowerCase(), getSelectedGender());
});

maleCheckbox.addEventListener("change", function (event) {
    event.preventDefault();
    fetchCharacters(searchEL.value.toLowerCase(), getSelectedGender());
});

femaleCheckbox.addEventListener("change", function (event) {
    event.preventDefault();
    fetchCharacters(searchEL.value.toLowerCase(), getSelectedGender());
});

unknownCheckbox.addEventListener("change", function (event) {
    event.preventDefault();
    fetchCharacters(searchEL.value.toLowerCase(), getSelectedGender());
});

async function fetchCharacters(searchValue = "", selectedGender = "") {
    try {
        const response = await fetch(url);
        const json = await response.json();

        characters = json.results;

        resultContainer.innerHTML = "";
       
        const filteredCharacters = characters.filter((character) => {
            const allName = character.name.toLowerCase().includes(searchValue);
            const allGenders = selectedGender === "" || character.gender.toLowerCase() === selectedGender;

            return allName && allGenders;
        });

        filteredCharacters.forEach(function (character) {
            resultContainer.innerHTML += `<a href="/details.html?id=${character.id}" class="card">
            <div class="image" style="background-image: url(${character.image});"></div>
            <div class="details">
                <h4 class="name">${character.name}</h4>
                <h4>${character.gender}</h4>  
                <h4 class="name">${character.species}</h4>                                                                                                                                                     
            </div>
        </a>`;
        });

    } catch (error) {
        console.log("error could not fetch charackters",error);
    }
}

function getSelectedGender() {
    if (maleCheckbox.checked && !femaleCheckbox.checked && !unknownCheckbox.checked) {
        return "male";
    } else if (!maleCheckbox.checked && femaleCheckbox.checked && !unknownCheckbox.checked) {
        return "female";
    } else if (!maleCheckbox.checked && !femaleCheckbox.checked && unknownCheckbox.checked) {
        return "unknown";
    } else {
        return "";
    }
}
