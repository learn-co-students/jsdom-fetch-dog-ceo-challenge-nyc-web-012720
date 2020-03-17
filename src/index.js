document.addEventListener('DOMContentLoaded', function(){
    console.log('%c HI', 'color: firebrick')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetchImages()
    fetchBreeds()

    const ulTag = document.getElementById("dog-breeds")
    ulTag.addEventListener('click', function(e){
       e.target.style.color = "pink"
    })
   
function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => showImages(json.message))
}

function showImages(json) {
    json.forEach(dog => {
        const imgDiv = document.getElementById('dog-image-container');
        let dogImg = document.createElement('img');
        dogImg.src= `${dog}`;
        imgDiv.appendChild(dogImg)
    })
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        let breeds = Object.keys(json.message)
        showBreeds(breeds)
        filterDogs(breeds)
    })
}

function showBreeds(json){
    json.forEach(breed => {
        const ulTag = document.getElementById("dog-breeds")
        let liTag = document.createElement('li')
        liTag.innerHTML = `${breed}`
        ulTag.appendChild(liTag)
    })
}

function filterDogs(breeds){
    const dropDown = document.getElementById("breed-dropdown")
    dropDown.addEventListener("change", function(e) {
        let letter = e.target.value
        ulTag.innerHTML = ""
        for (let i = 0; i < breeds.length; i++) {
            let li = document.createElement('li')
            if (breeds[i][0] === letter) {
                li.innerHTML = breeds[i]
                ulTag.appendChild(li)
            } 
        }
        if (letter === "") {
            showBreeds(breeds)
        }
    })
}

})