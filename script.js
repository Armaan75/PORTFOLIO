document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById('scroll-btn');
    const sections = document.querySelectorAll('.section');
    const contactSection = document.getElementById('contact'); // Get the contact section

    let currentSectionIndex = 0;

    // Show or hide the scroll button based on scroll position
    window.addEventListener('scroll', () => {
        // Toggle visibility when scrolling past 300px
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible'); // Show the button
        } else {
            scrollBtn.classList.remove('visible'); // Hide the button
        }

        // Get the Contact section position relative to the viewport
        const contactRect = contactSection.getBoundingClientRect();

        // Change the scroll button direction when contact section is near the viewport
        if (contactRect.top <= window.innerHeight && contactRect.bottom >= 0) {
            scrollBtn.classList.remove('scroll-down');
            scrollBtn.classList.add('scroll-up'); // Point the arrow up
        } else {
            scrollBtn.classList.remove('scroll-up');
            scrollBtn.classList.add('scroll-down'); // Point the arrow down
        }

        // Update arrow direction when near the bottom of the page
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition >= document.body.scrollHeight - 1) {
            scrollBtn.classList.remove('scroll-down');
            scrollBtn.classList.add('scroll-up'); // Change to up when at the bottom
        } else {
            scrollBtn.classList.remove('scroll-up');
            scrollBtn.classList.add('scroll-down'); // Revert to down when scrolling up
        }
    });

    // Handle scroll button clicks
    scrollBtn.addEventListener('click', () => {
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition >= document.body.scrollHeight - 1) {
            // Scroll to the top if we're at the bottom
            window.scrollTo({ top: 0, behavior: 'smooth' });
            currentSectionIndex = 0;
        } else {
            // Scroll to the next section
            currentSectionIndex = (currentSectionIndex + 1) % sections.length;
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
    });

});


const nameElement = document.querySelector('.name-container');

nameElement.addEventListener('mouseover', () => {
    nameElement.style.animation = 'gradientMove 2s linear infinite';
});

nameElement.addEventListener('mouseout', () => {
    nameElement.style.animation = 'gradientMove 5s linear infinite';
});
