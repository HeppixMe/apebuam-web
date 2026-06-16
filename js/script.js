let currentIndex = 0;
let autoplayTimer;
let isTransitioning = false;

function createDots() {
    const container = document.getElementById('dots');
    container.innerHTML = '';
    eventImages.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Bild ${i + 1}`);
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        container.appendChild(dot);
    });
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function showImage(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    const slider = document.getElementById('event-slider');
    slider.classList.add('fade');

    setTimeout(() => {
        slider.src = eventImages[index];
        const finish = () => {
            slider.classList.remove('fade');
            isTransitioning = false;
        };
        if (slider.complete && slider.naturalWidth) {
            finish();
        } else {
            slider.onload = finish;
            slider.onerror = finish;
        }
    }, 320);

    updateDots();
}

function goToSlide(index) {
    currentIndex = index;
    showImage(currentIndex);
    resetAutoplay();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % eventImages.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + eventImages.length) % eventImages.length;
    showImage(currentIndex);
}

function startAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextImage, 4000);
}

function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
}

// Arrow buttons
document.getElementById('prevBtn').addEventListener('click', () => {
    prevImage();
    resetAutoplay();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    nextImage();
    resetAutoplay();
});

// Pause autoplay on hover
const sliderTrack = document.querySelector('.slider-track');
sliderTrack.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
sliderTrack.addEventListener('mouseleave', startAutoplay);

// Touch / swipe support
let touchStartX = 0;
sliderTrack.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

sliderTrack.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 48) {
        if (diff > 0) nextImage();
        else prevImage();
        resetAutoplay();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Init
if (eventImages.length > 0) {
    const slider = document.getElementById('event-slider');
    slider.src = eventImages[0];
    createDots();
    startAutoplay();
}
