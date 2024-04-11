document.addEventListener("DOMContentLoaded", function() {
    const breeds = [
        { name: "germanshepherd", imageId: "germanShepherdImage", breedName: "German Shepherd" },
        { name: "bulldog", imageId: "bulldogImage", breedName: "Bulldog" },
        { name: "labrador", imageId: "labradorImage", breedName: "Labrador" },
        { name: "chihuahua", imageId: "chihuahuaImage", breedName: "Chihuahua" }
        // Add more breeds as needed
    ];

    breeds.forEach(breed => fetchDogImage(breed.name, breed.imageId, breed.breedName));

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
                dogImage.src = 'placeholder.jpg'; // Use a placeholder image or show an error message
                dogImage.alt = breedName;
            });
    }

    
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchInput = document.querySelector('input[name="q"]');
        const searchTerm = searchInput.value.trim();

        if (searchTerm !== '') {
            const breed = searchTerm.toLowerCase();
            const imageId = `${breed}Image`;
            const breedName = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
            fetchDogImage(breed, imageId, breedName);
        } else {
            console.log('Please enter a search term');
        }
    });
});





    