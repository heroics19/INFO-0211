let slideIndex = 1; // Start at slide 1

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    setInterval(() => plusSlides(1), 8000); // Auto change slide every 8 seconds
});

// Hamburger Functions--------------------------------------------------------------
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const hiddenNav = document.getElementById('hiddenNav');

    hamburger.classList.toggle('open');
    hiddenNav.classList.toggle('active');
}

// Slideshow code...

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});

// Highlight navigation
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash) {
        const section = document.querySelector(hash);
        if (section) {
            section.classList.add('highlight');
            setTimeout(() => {
                section.classList.remove('highlight');
            }, 2000); // 2 seconds duration
        }
    }
});