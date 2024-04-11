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
    const breeds = [
        { name: "germanshepherd", imageId: "germanShepherdImage", descriptionId: "germanShepherdDescription", breedName: "German Shepherd" },
        { name: "bulldog", imageId: "bulldogImage", descriptionId: "bulldogDescription", breedName: "Bulldog" },
        { name: "labrador", imageId: "labradorImage", descriptionId: "labradorDescription", breedName: "Labrador" },
        { name: "chihuahua", imageId: "chihuahuaImage", descriptionId: "chihuahuaDescription", breedName: "Chihuahua" }
        // Add more breeds as needed
    ];

    breeds.forEach(breed => {
        fetchDogImage(breed.name, breed.imageId, breed.breedName);
        fetchBreedDescription(breed.name, breed.descriptionId);
    });

    function fetchDogImage(breed, imageId, breedName) {
        const dogImage = document.getElementById(imageId);
        const errorMessage = `Failed to load image for ${breedName}`;

        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(errorMessage);
                }
                return response.json();
            })
            .then(data => {
                dogImage.src = data.message;
                dogImage.alt = breedName;
            })
            .catch(error => {
                console.error(error);
                dogImage.src = 'placeholder.jpg'; 
                dogImage.alt = breedName;
            });
    }

    function fetchBreedDescription(breed, descriptionId) {
        const breedDescription = document.getElementById(descriptionId);
        const errorMessage = `Failed to load description for ${breed}`;

        fetch(`https://dog.ceo/api/breed/${breed}/list`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(errorMessage);
                }
                return response.json();
            })
            .then(data => {
                const breedsList = data.message;
                const description = breedsList[breed].join(', ');
                breedDescription.textContent = description;
            })
            .catch(error => {
                console.error(error);
                breedDescription.textContent = "Description not available";
            });
    }

    // Add event listeners for like and dislike buttons (similar to previous code)
});
