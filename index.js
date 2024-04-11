document.addEventListener("DOMContentLoaded", function() {
    const likeButtons = document.querySelectorAll('.flex-box button:nth-of-type(1)');
    likeButtons.forEach(likeButton => {
        likeButton.addEventListener('click', function() {
            const countElement = this.parentElement.querySelector('p');
            let count = parseInt(countElement.textContent) || 0;
            count++;
            countElement.textContent = count;
        });
    });

    const dislikeButtons = document.querySelectorAll('.flex-box button:nth-of-type(2)');
    dislikeButtons.forEach(dislikeButton => {
        dislikeButton.addEventListener('click', function() {
            const countElement = this.parentElement.querySelector('p');
            let count = parseInt(countElement.textContent) || 0;
            count--;
            countElement.textContent = count;
        });
    });
});










document.addEventListener("DOMContentLoaded", function() {
    const breedsContainer = document.getElementById('breedsContainer');

    function createBreedElement(breedName, imageUrl) {
        const breedDiv = document.createElement('div');
        breedDiv.classList.add('flex-box');
        breedDiv.innerHTML = `
            <h2>${breedName}</h2>
            <img src="${imageUrl}" alt="${breedName}">
            <button class="like-button">Like</button>
            <button class="dislike-button">Dislike</button>
            <p>0</p>
        `;
        return breedDiv;
    }

    breedsContainer.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('like-button') || target.classList.contains('dislike-button')) {
            const countElement = target.parentElement.querySelector('p');
            let count = parseInt(countElement.textContent) || 0;
            if (target.classList.contains('like-button')) {
                count++;
            } else {
                count--;
            }
            countElement.textContent = count;
        }
    });


    function fetchDogImage(breedName) {
        return fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch image');
                }
                return response.json();
            })
            .then(data => data.message)
            .catch(error => {
                console.error('Error fetching dog image:', error);
                return 'placeholder.jpg'; 
            });
    }

    function displayBreedInfo(breedName, breedDescription) {
        const breedDiv = createBreedElement(breedName, '');
        breedsContainer.appendChild(breedDiv);

        fetchDogImage(breedName)
            .then(imageUrl => {
                const imgElement = breedDiv.querySelector('img');
                imgElement.src = imageUrl;
                imgElement.alt = breedName;
            })
            .catch(error => console.error('Error displaying breed info:', error));
    }

    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function(event) {

        event.preventDefault();

        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.trim();

        
        if (searchTerm !== '') {
            
            breedsContainer.innerHTML = '';

            
            displayBreedInfo(searchTerm, "Description will be available once we fetch it from API.");
        } else {
            console.log('Please enter a search term');
        }
    });
});







document.addEventListener("DOMContentLoaded", function() {
    const breedsContainer = document.getElementById('breedsContainer');

    
    function createBreedElement(breedName, imageUrl) {
        const breedDiv = document.createElement('div');
        breedDiv.classList.add('flex-box');
        breedDiv.innerHTML = `
            <h2>${breedName}</h2>
            <img src="${imageUrl}" alt="${breedName}">
            <button class="like-button">Like</button>
            <button class="dislike-button">Dislike</button>
            <button class="order-button">Order Now</button>
            <p>0</p>
        `;
        return breedDiv;
    }

    
    breedsContainer.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('like-button') || target.classList.contains('dislike-button')) {
            const countElement = target.parentElement.querySelector('p');
            let count = parseInt(countElement.textContent) || 0;
            if (target.classList.contains('like-button')) {
                count++;
            } else {
                count--;
            }
            countElement.textContent = count;
        } else if (target.classList.contains('order-button')) {
            
            const breedName = target.parentElement.querySelector('h2').textContent;
            alert(`Order placed for ${breedName}`);
        }
    });

    
    function fetchDogImage(breedName) {
        return fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch image');
                }
                return response.json();
            })
            .then(data => data.message)
            .catch(error => {
                console.error('Error fetching dog image:', error);
                return 'placeholder.jpg'; 
            });
    }

    
    function displayBreedInfo(breedName, breedDescription) {
        const breedDiv = createBreedElement(breedName, '');
        breedsContainer.appendChild(breedDiv);

        
        fetchDogImage(breedName)
            .then(imageUrl => {
                const imgElement = breedDiv.querySelector('img');
                imgElement.src = imageUrl;
                imgElement.alt = breedName;
            })
            .catch(error => console.error('Error displaying breed info:', error));
    }

    
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function(event) {
        
        event.preventDefault();

        
        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.trim();

        
        if (searchTerm !== '') {
    
            breedsContainer.innerHTML = '';

            
            displayBreedInfo(searchTerm, "Description will be available once we fetch it from API.");
        } else {
            console.log('Please enter a search term');
        }
    });
});











