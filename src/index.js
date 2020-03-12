document.addEventListener('DOMContentLoaded', function(){

    console.log('%c HI', 'color: firebrick');

    const images = document.getElementById("dog-image-container");
    const dropdown = document.getElementById("breed-dropdown");
    const breeds = document.getElementById("dog-breeds");

    let apicall = [];

    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => apicall = json)
    .then(apicall => apicall.message.forEach(element => {
        var new_image = document.createElement("IMG");
        new_image.src = element
        images.append(new_image)}));

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => apicall = json)
    .then(apicall => {
        for (var key in apicall.message) {
        var new_breed = document.createElement("LI");
        new_breed.innerText = key;
        breeds.append(new_breed)
        }
    });

    breeds.addEventListener("click", function(event){
        event.target.style.color = "magenta"
    })


    dropdown.addEventListener("change", function(event){
        breeds.innerHTML=''

        fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(json => apicall = json)
        .then(apicall => {
            for (var key in apicall.message) {
            if (key[0]=== dropdown.value ) {
                var new_breed = document.createElement("LI");
                new_breed.innerText = key;
                breeds.append(new_breed)
            }
            }
        });
    })
})

