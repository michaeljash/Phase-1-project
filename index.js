document.addEventListener("DOMContentLoaded", function() {
    // Define an array of objects containing breed names and image elements
    const breeds = [
        { name: "germanshepherd", imageId: "germanShepherdImage" },
        { name: "bulldog", imageId: "bulldogImage" },
        { name: "labrador", imageId: "labradorImage" },
        { name: "chihuahua", imageId: "chihuahuaImage" }
        // Add more breeds as needed
    ];

    // Fetch images for each breed
    breeds.forEach(breed => fetchDogImage(breed.name, breed.imageId));

    // Function to fetch dog images from Dog CEO API
    function fetchDogImage(breed, imageId) {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(response => response.json())
            .then(data => {
                const dogImage = document.getElementById(imageId);
                dogImage.src = data.message;
            })
            .catch(error => console.error('Error fetching dog image:', error));
    }
});


const searchForm = document.getElementById('searchForm');

    // Add event listener to the form submission
    searchForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the search query from the input field
        const searchInput = document.querySelector('input[name="q"]');
        const searchTerm = searchInput.value.trim();

        // Check if search term is not empty
        if (searchTerm !== '') {
            // Fetch images for the searched breed
            const breed = searchTerm.toLowerCase();
            const imageId = `${breed}Image`;
            const breedName = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
            fetchDogImage(breed, imageId, breedName);
        } else {
            console.log('Please enter a search term');
        }
    });
});



    