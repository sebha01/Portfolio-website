// Code for resizing the window
window.onload = function () 
{
    const logo = document.querySelector('.logo');

    function smoothResize(targetHeight) 
    {
        // Apply smooth transition
        logo.style.transition = "height 0.25s ease-out";
        logo.style.height = targetHeight + "px";
    }

    function updateHeight() {
        let targetHeight;

        if (window.innerWidth >= 2500) {
            targetHeight = 700;
        } else if (window.innerWidth >= 1977) {
            targetHeight = 650;
        } else if (window.innerWidth >= 1440) {
            targetHeight = 450; 
        } else if (window.innerWidth >= 1024) {
            targetHeight = 310; 
        } else if (window.innerWidth >= 766) {
            targetHeight = 220; 
        } else if (window.innerWidth >= 582) {
            targetHeight = 190;
        } else if (window.innerWidth >= 475) {
            targetHeight = 150;
        } else if (window.innerWidth >= 415) {
            targetHeight = 140;
        } else if (window.innerWidth >= 350) {
            targetHeight = 120;
        } else {
            targetHeight = 100;
        }

        smoothResize(targetHeight);
    }

    updateHeight(); // Initial call

    // Listen for resize events and smoothly transition
    window.addEventListener('resize', updateHeight);
};