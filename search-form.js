const resultContainer = document.querySelector("#js-results");
const formEl = document.querySelector("#js-search-form");
const searchEL = document.querySelector("#js-search");
const genderEl = document.querySelector("#js-gender");
const maleCheckbox = document.querySelector("#js-male");
const femaleCheckbox = document.querySelector("#js-female");
const unknownCheckbox = document.querySelector("#js-unknown");

femaleCheckbox.checked = true;
maleCheckbox.checked = true;
unknownCheckbox.checked = true;


const url = "https://rickandmortyapi.com/api/character";

let firstTimePre = true;

fetchCharacters();

searchEL.addEventListener("keyup", function() {
    event.preventDefault();
    fetchCharacters(searchEL.value.toLowerCase());
});

searchEL.addEventListener("search", function (event) {
    event.preventDefault();
    fetchCharacters(searchEL.value.toLowerCase());
});




genderEl.addEventListener("checkbox", function (event) {
    event.preventDefault();
    console.log(genderEl);
    fetchCharacters(genderEl.value.toLowerCase());
});

async function fetchCharacters(searchValue = "") {
    try {
        const response = await fetch(url);
        const json = await response.json();

        const characters = json.results;
        

        if (firstTimePre) {
            resultContainer.innerHTML = "";

            characters.forEach(function (character) {
                resultContainer.innerHTML += `<a href="/details.html?id=${character.id}" class="card">
                <div class="image" style="background-image: url(${character.image});"></div>
                <div class="details">
                    <h4 class="name">${character.name}</h4>
                    <h4>${character.gender}</h4>  
                    <h4 class="name">${character.species}</h4>                                                                                                                                                     
                </div>
            </a>`;
            });
            
            firstTimePre = false;

        } else {
            const filteredCharacters = characters.filter(
                (character) => filterCharacter(character, searchValue,)
            );

            resultContainer.innerHTML = ``;

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

            
            
        }
    } catch (error) {
        console.log(error);
    }
}

function filterCharacter(character, searchValue, selectedGender) {    
    if (searchValue.length !== "") {
        return character.name.toLowerCase().includes(searchValue);
    } else {
        return character.gender.toLowerCase().includes(selectedGender);
    }
}

const selectedGender = genderEl.querySelector("input:checked").value;
            const filteredCharacters = character.filter(
                (character) => filterCharacter(character, searchValue, selectedGender)
            )

            function updatedCharacters() {
                const showMale = maleCheckbox.checked;
                const showFemale = femaleCheckbox.checked;
                const showUnknown = unknownCheckbox.checked;
                
                maleCheckbox.addEventListener("change", updatedCharacters);
                femaleCheckbox.addEventListener("change", updatedCharacters);
                unknownCheckbox.addEventListener("change", updatedCharacters);
            
            
                const filteredCharacters = character.filter(character => {
                    if (showMale && character.gender === "Male") {
                        return true;
                    }
                    if (showFemale && character.gender === "Female"){
                        return true;
                    } 
                    if (showUnknown && character.gender === "Unknown"){
                        return true;
                    }
                });
            
                characters.forEach(character => {
                    const characterElement = document.querySelector(`#${character.id}`);
                    if (filteredCharacters.includes(character)) {
                        characterElement.style.display = "block";
                    } else {
                        characterElement.style.display = "none";
                    }
                });
            }
            updatedCharacters();