// Code for resizing the window
window.onload = function () {

    // Carousel logic for slides
    let slideIndex = 0;  // Track current slide index
    const slides = document.querySelectorAll('.heroContent .slide'); // Get all slides
    const totalSlides = slides.length;

    function showSlide(index) {
        // Hide all slides first
        slides.forEach(slide => slide.style.display = 'none');
        
        // Add smooth fade-in effect for the current slide
        slides[index].style.display = 'block';
        slides[index].style.opacity = 0;  // Start with no opacity
        setTimeout(() => {
            slides[index].style.transition = "opacity 1s ease-in-out"; // Add fade-in transition
            slides[index].style.opacity = 1;
        }, 10); // Small delay to trigger the transition effect
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides; // Loop to first slide after last slide
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides; // Loop to last slide if at the first slide
        showSlide(slideIndex);
    }

    // Initialize the carousel by showing the first slide
    showSlide(slideIndex);

    // Add event listeners to the prev and next buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    }

    // Optional: Auto slide every 8 seconds
    setInterval(nextSlide, 8000);
    
};
