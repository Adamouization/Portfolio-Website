// Get all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add event listeners to accordion headers
/**
 * Use querySelectorAll to get all the accordion headers, and forEach to add event listeners to each header.
 * Inside the event listener function, use classList to toggle the active class on the header and toggle button,
 * and style.display to toggle the visibility of the accordion body.
 */
accordionHeaders.forEach(header => {
    // Toggle visibility of accordion body when header is clicked
    header.addEventListener('click', function() {
        this.classList.toggle('active');
        const accordionBody = this.nextElementSibling;
        if (accordionBody.style.display === 'block') {
            accordionBody.style.display = 'none';
        } else {
            accordionBody.style.display = 'block';
        }
        const accordionToggle = this.querySelector('.accordion-toggle');
        accordionToggle.classList.toggle('active');
        accordionToggle.classList.toggle('collapsed');
    });
});