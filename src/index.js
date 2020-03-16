console.log('%c HI', 'color: firebrick')
function fetchImages() {
    return (
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json() )
    .then(function(json) {
      const main = document.querySelector("#dog-image-container")
      for (const image in json) {
        // console.log(json[image])
        let im = json[image]
        for (const url of im){
          // console.log(url)
          const imgUrl = document.createElement('img')
          imgUrl.src = `${url}`
          main.appendChild(imgUrl)
        }
      } 
    }));
}

function fetchBreeds() 
{
  // add brreeds to browser
      let r = fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json() )
      .then( function(json){
        const q = json.message
        const addB = document.querySelector("#dog-breeds")

        for (const b in q){
          const h2 = document.createElement('h2')
          h2.innerHTML = `${b}`
          addB.appendChild(h2)
        }
      })    
      
      
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds() 
  
})

