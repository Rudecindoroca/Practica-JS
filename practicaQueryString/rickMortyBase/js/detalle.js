
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let characterId = getQueryParam('id');


if (characterId) {
    let url = `https://rickandmortyapi.com/api/character/${characterId}`;

    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
           
            console.log(data);

            
            let characterName = document.querySelector('.character-name');
            let characterStatus = document.querySelector('.character-status');
            let characterSpecies = document.querySelector('.character-species');
            let characterImage = document.querySelector('.character-image');

            
            characterName.textContent = data.name;
            characterStatus.textContent += data.status;
            characterSpecies.textContent += data.species;
            characterImage.src = data.image;
            characterImage.alt = data.name;
        })
        .catch(function(e) {
            console.log(e);
        });
} else {
    console.error('No hay un id en la URL');
}

