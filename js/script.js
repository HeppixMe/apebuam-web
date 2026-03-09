// Slider für Event-Bilder
let currentIndex = 0;

function createDots() {
    const dotsContainer = document.getElementById('dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < eventImages.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentIndex = i;
            showImage(currentIndex);
            updateDots();
        });
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function showImage(index) {
    const slider = document.getElementById('event-slider');
    slider.src = eventImages[index];
    updateDots();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % eventImages.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + eventImages.length) % eventImages.length;
    showImage(currentIndex);
}

// Automatisches Durchscrollen alle 3 Sekunden
setInterval(nextImage, 3000);

// Initial anzeigen
if (eventImages.length > 0) {
    createDots();
    showImage(0);
}