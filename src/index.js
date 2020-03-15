console.log('%c HI', 'color: firebrick')
let breeds = []

document.addEventListener("DOMContentLoaded", function() {

  });

  function doesMyFetch() {
    fetch('https://dog.ceo/api/breeds/image/random/4',
    { method: "GET"})
        .then(function(response){
            return response.json()
        })
        .then(function(breed){
        const dogContainer = document.querySelector("#dog-image-container")
        dogContainer.innerHTML += `
        <p> <img src="${breed.message[0]}"> </p>
        <p> <img src="${breed.message[1]}"> </p>
        <p> <img src="${breed.message[2]}"> </p>
        <p> <img src="${breed.message[3]}"> </p>
        `
        })

        
        
    }
    function breedFetch() {
        fetch('https://dog.ceo/api/breeds/list/all',
        { method: "GET"})
            .then(function(response){
            return response.json()
            })
            .then(function(list){
            // console.log(list.message)
            breeds = Object.keys(list.message)
            const dogList = document.querySelector("#dog-breeds")
            breeds.forEach(breed => dogList.innerHTML += `<p> ${breed} </p>`)
        })
    }
    
    doesMyFetch()
    breedFetch()
    
    
        let breedDropdown = document.querySelector('#breed-dropdown');
        breedDropdown.addEventListener('change', function (event) {
            event.preventDefault()
        breeds.filter(breed => breed.startsWith(event.target.value)
        )})
    
