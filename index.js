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

    // Function to create a breed element with image, like, and dislike buttons
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

    // Add event listeners to dynamically added like buttons
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

    // Function to fetch dog images from Dog CEO API
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
                return 'placeholder.jpg'; // Use a placeholder image in case of error
            });
    }

    // Function to display breed information
    function displayBreedInfo(breedName, breedDescription) {
        const breedDiv = createBreedElement(breedName, '');
        breedsContainer.appendChild(breedDiv);

        // Fetch image for the breed
        fetchDogImage(breedName)
            .then(imageUrl => {
                const imgElement = breedDiv.querySelector('img');
                imgElement.src = imageUrl;
                imgElement.alt = breedName;
            })
            .catch(error => console.error('Error displaying breed info:', error));
    }

    // Get the search form and input element
    const searchForm = document.getElementById('searchForm');

    // Add event listener to the form submission
    searchForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Extract the search term from the input field
        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.trim();

        // Check if search term is not empty
        if (searchTerm !== '') {
            // Clear existing breeds
            breedsContainer.innerHTML = '';

            // Display breed information based on the search term
            displayBreedInfo(searchTerm, "Description will be available once we fetch it from API.");
        } else {
            console.log('Please enter a search term');
        }
    });
});







document.addEventListener("DOMContentLoaded", function() {
    const breedsContainer = document.getElementById('breedsContainer');

    // Function to create a breed element with image, like, and dislike buttons
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

    // Add event listeners to dynamically added like buttons
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
            // Handle order button click
            const breedName = target.parentElement.querySelector('h2').textContent;
            alert(`Order placed for ${breedName}`);
        }
    });

    // Function to fetch dog images from Dog CEO API
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
                return 'placeholder.jpg'; // Use a placeholder image in case of error
            });
    }

    // Function to display breed information
    function displayBreedInfo(breedName, breedDescription) {
        const breedDiv = createBreedElement(breedName, '');
        breedsContainer.appendChild(breedDiv);

        // Fetch image for the breed
        fetchDogImage(breedName)
            .then(imageUrl => {
                const imgElement = breedDiv.querySelector('img');
                imgElement.src = imageUrl;
                imgElement.alt = breedName;
            })
            .catch(error => console.error('Error displaying breed info:', error));
    }

    // Get the search form and input element
    const searchForm = document.getElementById('searchForm');

    // Add event listener to the form submission
    searchForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Extract the search term from the input field
        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.trim();

        // Check if search term is not empty
        if (searchTerm !== '') {
            // Clear existing breeds
            breedsContainer.innerHTML = '';

            // Display breed information based on the search term
            displayBreedInfo(searchTerm, "Description will be available once we fetch it from API.");
        } else {
            console.log('Please enter a search term');
        }
    });
});
