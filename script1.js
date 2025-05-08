
// script1.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const navWrapper = document.querySelector('.nav__wrapper');

    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close menu when a menu item is clicked
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu li a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });

    // Handle window resize to properly show/hide navigation elements
    function handleWindowResize() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
            navWrapper.style.display = 'none';
        } else {
            hamburger.style.display = 'none';
            navWrapper.style.display = 'block';
            mobileMenu.style.display = 'none';
        }
    }

    // Initial call to set correct display state
    handleWindowResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleWindowResize);
});
