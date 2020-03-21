console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", function() {
    fetchPups();
    challTwo();
    color();
    filter();
})

function color() {
const breedEl2 = document.getElementById("dog-breeds")
    breedEl2.addEventListener("click", function(event) {
        event.target.style.color ="blue";

})
}   

function fetchPups() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(obj => renderImage(obj))
}

function renderImage(obj) {
    console.log(obj)
    const dogCon = document.getElementById("dog-image-container")
    const li = document.createElement("li")
    obj.message.forEach( dog => {
        const img = document.createElement("img")
        img.src = dog
        dogCon.appendChild(img)
    })
}


function challTwo() {
    const breedEl = document.getElementById("dog-breeds")
    console.log(breedEl)
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(bree => Object.keys(bree.message).forEach( x => 
        {const li = document.createElement('li')
            li.innerText = x
            breedEl.appendChild(li)
        }))
}

function filter() {
    const selector = document.getElementById("breed-dropdown")
    let arr = Array.from(selector.children)
    console.log(arr[0])

    // if arr[0] === breed.charAt(0)
    //render dogs
}






















































// document.addEventListener("DOMContentLoaded", function() {
//     fetchDogs()
//     renderBreed()

// })

// function fetchDogs() {
//     fetch("https://dog.ceo/api/breeds/image/random/4")
//     .then(resp => resp.json())
//     .then(json => renderDogs(json))
// }

// function renderDogs(json) {
//     const dogCon = document.getElementById("dog-image-container")
//     json.message.forEach(dog => {
//         const dogImage = document.createElement("img")
//         dogImage.src = dog
//         dogCon.appendChild(dogImage)
//     })
// }

// function renderBreed() {
//     const ul = document.getElementById("dog-breeds")
//     fetch("https://dog.ceo/api/breeds/list/all")
//     .then(resp => resp.json())
//     .then( json => console.log(json)
        
//     //     json.message.forEach(breed => {
//     //     const li = document.createElement("li")
//     //     li.innerText = breed
//     //     ul.appendChild(li)
//     // })
//     )
// }