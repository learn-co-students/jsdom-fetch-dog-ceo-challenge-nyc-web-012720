// console.log('%c HI', 'color: firebrick')
//TODO:: 1. do challege 4

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// document.addEventListener("change", function(event){

//     event.target.forEach(function(input){
//         let firstLetter = input.value
//     })
// })

    const divContainer = document.getElementById("dog-image-container");
    const ul =  document.getElementById("dog-breeds");
    const select = document.getElementById("breed-dropdown");
    let dogs;
    
    ul.addEventListener("click", function(event){
        if(event.target.className === "list"){
            if(!event.target.style.color){
                event.target.style.color = "red";
            }else if(event.target.style.color === "red"){
                event.target.style.color = "black";
            }
        }
    });

document.addEventListener("change", function(event){

    Array.from(event.target.options).forEach(function(option){
        if(!!option.selected){
            ul.innerHTML = `<ul id="dog-breeds"></ul>`;
            // debugger
            fetchBreed();
            return firstLetterMatchDog(dogs, option.value);
        }
    });
});


function fetchImages(){
    return fetch(imgUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        // debugger
        dogs = json.message
        displayImages(dogs)
    })
}

function fetchBreed(){
    return fetch(breedUrl)
    .then(function(response){
        return response.json() 
    })
    .then(function(json){
       dogs = json.message;
    })
}

function displayImages(images){
    let container = [];

    images.forEach(function(image){
        container.push(image);
    })

    container.forEach(function(image){
        // debugger
        divContainer.innerHTML += `<li class="list"><img src=${image}></li>`;
    });
}

// function breedList(dogs){
//     for(const breeds in dogs){
//         if(!!dogs[breeds].length){
//             const new_h4 = document.createElement("h4");
//             new_h4.dataset.name = breeds;
//             new_h4.innerText = breeds;
//             ul.append(new_h4);
//             // debugger;
            
//             const new_h4_name_breed = document.querySelector(`h4[data-name="${breeds}"]`)
//             dogs[breeds].forEach(function(breed){
//                 new_h4_name_breed.innerHTML += `<li class="list">${breed}</li>`;
//             });
//         }
//     }
// }

function firstLetterMatchDog(dogs, firstLetter){
    for(const dog in dogs){
        if(dog.charAt(0) === firstLetter && !!dogs[dog].length){
            const new_h4 = document.createElement("h4");
            new_h4.dataset.name = dog;
            new_h4.innerText = dog;
            new_h4.className = "h4-dog";

            ul.append(new_h4);
            
            const new_h4_name_breed = document.querySelector(`h4[data-name="${dog}"]`)
            dogs[dog].forEach(function(breed){
            new_h4_name_breed.innerHTML += `<li class="list">${breed}</li>
            `;

        });
    }
}
}

