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


// card-slider

const slides=document.querySelectorAll("#slider")
// console.log(slider);
slides.forEach((slider,index)=>{
    slider.style.left=`${index*18}rem`
})

var count=0
const goPrev=()=>{
    count--
    if(count>=0 && count<5){
    slideImage()
    }
    else{
        count++
    }
}
const goNext=()=>{
    count++
    if(count>=0 && count<=4){
        slideImage()
        } else{
            count--
        }
}
const slideImage=()=>{
    slides.forEach((slider)=>{
        slider.style.transform=`translateX(-${count*18}rem)`
    })
}
