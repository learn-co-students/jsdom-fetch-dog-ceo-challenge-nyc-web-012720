const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let ul = document.getElementById('dog-breeds')
let selector = document.getElementById('breed-dropdown')

console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function(){
    // dog images on load
    fetch(imgUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(json){ 
        json.message.forEach(function(dogImg){
            let image = document.createElement('img')
            image.src = dogImg
            ul.append(image)
        })
    })

    // dog breeds on load
    fetch(breedUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        console.log(json.message)
        function dogBreedIterator(dogBreedObject){
            for (dogBreed in dogBreedObject){
                if (typeof dogBreed === 'object'){
                    dogBreedIterator(dogBreed)
                } else {
                    let breed = document.createElement('li')
                    breed.innerText = dogBreed 
                    if (json.message[dogBreed].length > 0) {
                        breed.innerText = dogBreed + ":" + " " + json.message[dogBreed].join(", ")
                    }
                    ul.appendChild(breed)
                    
                    if (!Array.from(selector.children).find(option => option.value === breed.innerText[0])){
                        let newOption = document.createElement('option')
                        newOption.value = breed.innerText[0]
                        newOption.innerText = breed.innerText[0]
                        selector.appendChild(newOption)
                    }
                }
            }
        }
        dogBreedIterator(json.message)
    })

    // li changes color
    ul.addEventListener('click', function(event){
        if (event.target.style.color === ''){
            Array.from(ul.children).map(li => li.style.color = '')
            event.target.style.color = 'firebrick'
        } else if (event.target.style.color === 'firebrick'){
            event.target.style.color = ''
        }
    })

    // filter through breeds
    selector.addEventListener('change', function(event){
        let seleected = Array.from(ul.children).filter(li => li.innerText[0] === event.target.value)
        seleected.map(li => li.style.display = 'block')
        let nonSelect = Array.from(ul.children).filter(li => li.innerText[0] !== event.target.value)
        nonSelect.map(li => li.style.display = 'none')
    })
})