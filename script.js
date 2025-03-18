// Code for resizing the window
window.onload = function () {
    const logo = document.querySelector('.logo');

    function smoothResize(targetHeight) {
        // Apply smooth transition
        logo.style.transition = "height 0.8s ease-out";
        logo.style.height = targetHeight + "px";
    }

    function updateHeight() {
        let targetHeight;

        if (window.innerWidth >= 1600) {
            targetHeight = 750;
        } else if (window.innerWidth >= 1282) {
            targetHeight = 600;
        } else if (window.innerWidth >= 1030) {
            targetHeight = 500;
        } else if (window.innerWidth >= 854) {
            targetHeight = 400;
        } else if (window.innerWidth >= 625) {
            targetHeight = 350;
        } else {
            targetHeight = 300;
        }

        smoothResize(targetHeight);
    }

    updateHeight(); // Initial call

    // Listen for resize events and smoothly transition
    window.addEventListener('resize', updateHeight);
};