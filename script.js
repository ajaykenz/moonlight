const parallaxSection = document.getElementById('parallax');

// Add a scroll event listener
window.addEventListener('scroll', function() {

    // Get the scroll position
    let scrollPosition = window.scrollY;

    // Apply the parallax effect by adjusting the background position
    parallaxSection.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px'; // Adjust parallax speed

    // Calculate the blur effect based on scroll position
    let blurAmount = Math.min(scrollPosition / 20, 4); // Limit the blur to a maximum of 10px

    // Apply the blur effect to the parallax section
    parallaxSection.style.filter = `blur(${blurAmount}px)`;
});


// image-slider

let currentIndex = 0;

function moveSlide(direction) {
    const cards = document.querySelector('.cards');
    const totalCards = document.querySelectorAll('.card').length;
    
    currentIndex += direction;

    // Loop through the cards
    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }
    
    // Move the cards container to show the correct card
    cards.style.transform = `translateX(-${currentIndex * 270}px)`;  // Adjust for the card width + margin
}