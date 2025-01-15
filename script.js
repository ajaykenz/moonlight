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



