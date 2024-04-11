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










