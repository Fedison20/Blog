let currentSlide = 0; // Tracks the current slide
const slides = document.querySelector('.slides');
const indicators = document.querySelectorAll('.indicator');
const nextButton = document.getElementById('nextButton');

// Dynamically calculate the total slides
const totalSlides = document.querySelectorAll('.slide').length;

// Prevent multiple triggers during animation
let isAnimating = false;

// Updates the active indicator
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Moves to a specific slide
function goToSlide(index) {
    if (isAnimating) return; // Prevent action during animation
    isAnimating = true;

    currentSlide = index;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateIndicators();
    updateNextButton();

    // Allow new animations after the current one completes
    setTimeout(() => {
        isAnimating = false;
    }, 300); // Match the CSS transition duration (e.g., 0.3s)
}

// Goes to the next slide or redirects on the last slide
function nextSlide() {
    if (currentSlide === totalSlides - 1) {
        // Redirect to the new page if the user is on the last slide
        window.location.href = "create.html"; // Replace with your URL
    } else {
        goToSlide(currentSlide + 1);
    }
}

// Goes to the previous slide
function prevSlide() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

// Updates the "Next" button text
function updateNextButton() {
    nextButton.textContent = currentSlide === totalSlides - 1 ? "Start" : "Next";
}

// Swipe functionality for touch devices
let startX = 0;
let endX = 0;

slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slides.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

slides.addEventListener('touchend', () => {
    const swipeThreshold = 50; // Minimum distance in pixels to count as a swipe
    if (startX - endX > swipeThreshold) {
        nextSlide();
    } else if (endX - startX > swipeThreshold) {
        prevSlide();
    }
});

// Event listener for the "Next" button
nextButton.addEventListener('click', nextSlide);

// Initialize indicators and button text on page load
updateIndicators();
updateNextButton();