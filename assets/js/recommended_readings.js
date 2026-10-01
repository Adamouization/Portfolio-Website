document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('.carousel-container');

    if (!carousel) {
        return;
    }

    carousel.addEventListener('scroll', function () {
        if (carousel.scrollLeft > 8) {
            carousel.classList.add('is-scrolled');
        }
    }, { passive: true });
});
