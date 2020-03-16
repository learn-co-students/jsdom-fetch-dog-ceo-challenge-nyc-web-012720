document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const dogImages = document.getElementById('dog-image-container');
    const ul = document.getElementById('dog-breeds');
    const dropDown = document.getElementById('breed-dropdown');

    fetch(imgUrl)
        .then(res => res.json())
        .then(json => showDogs(json));

    fetch(breedUrl)
        .then(res => res.json())
        .then(json => {
            addBreeds(json);
            filterBreeds(json);
        });

    const showDogs = (json) => {
        json.message.forEach(img => {
            const image = document.createElement("img");
            image.setAttribute("src", `${img}`)
            dogImages.appendChild(image);
        });
    };

    const addBreeds = (json) => {
        for (const breed in json.message){
            const li = document.createElement('li');
            li.innerHTML = breed;
            ul.appendChild(li);
        };       
    };

    document.addEventListener('click', (e) => {
        if(e.target.localName === "li"){
            e.target.style.color = "#910002"
        }
    });

    const filterBreeds = (json) => {
        dropDown.onchange = (e) => {
            ul.innerHTML = "";
            for (const breed in json.message){
                if (dropDown.value === breed[0]){
                    const li = document.createElement('li');
                    li.innerHTML = breed;
                    ul.appendChild(li);
                } ;
            };
        };
    };

});

