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




    