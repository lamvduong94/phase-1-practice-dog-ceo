console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    const dogList = document.getElementById('dog-breeds');
    
    dogList.addEventListener('click', function(e) {
        e.target.style.color = 'blue';
    })

    fetchImages();
    fetchBreeds();
    filterBreeds();
})

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(results => {
            results.message.forEach(picUrl => {
                const imgEle = document.createElement('img');
                imgEle.src = picUrl;
                const container = document.getElementById('dog-image-container');
                container.appendChild(imgEle);
            })
        })
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(results => {
            dogBreeds = results.message;
            for (const breed in dogBreeds) {
                const dogUl = document.getElementById('dog-breeds');
                const dogLi = document.createElement('li');
                dogLi.innerText = breed;
                dogUl.appendChild(dogLi);
            }
        })
}

function filterBreeds() {
    const dropDown = document.getElementById('breed-dropdown');
    dropDown.addEventListener('change', function(e) {
        const dogUl = document.getElementById('dog-breeds');
        while (dogUl.firstChild) {
            dogUl.firstChild.remove();
        }
    })
    
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(results => {
            dogBreeds = results.message;
            for ( breed in dogBreeds) {
                let dogLi = document.createElement('li');
                dogLi.innerText = breed;

                if (breed[0] === e.target.value) {
                    dogUl.appendChild(dogLi);
                }
            }
        })
}