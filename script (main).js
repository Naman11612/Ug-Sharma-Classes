// === Intersection Observer Animation ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.stunning-fade-up, .stunning-zoom-in, .stunning-slide-left').forEach(el => {
  observer.observe(el);
});

// === Image Slider Functionality ===
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');

let currentSlide = 0;
const totalSlides = slides.length;

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.setAttribute('data-slide-index', i);
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const slideIndex = parseInt(e.target.getAttribute('data-slide-index'));
    showSlide(slideIndex);
  });
});

showSlide(currentSlide);

// === Swipe Gesture Support for Mobile ===
let touchStartX = 0;
let touchEndX = 0;

const sliderElement = document.querySelector('.slider-container');

sliderElement.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

sliderElement.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}, { passive: true });

function handleSwipeGesture() {
  if (touchEndX < touchStartX - 50) {
    showSlide(currentSlide + 1); // Swipe Left → Next
  }
  if (touchEndX > touchStartX + 50) {
    showSlide(currentSlide - 1); // Swipe Right → Previous
  }
}


// Scroll animation for about section with unique animations
function animateAboutOnScroll() {
    const aboutHeading = document.querySelector('.about-heading');
    const aboutLeft = document.querySelector('.about-left');
    const aboutRight = document.querySelector('.about-right');

    if (aboutHeading) {
        const rect = aboutHeading.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            aboutHeading.classList.add('about-animate');
        }
    }
    if (aboutLeft) {
        const rect = aboutLeft.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            aboutLeft.classList.add('about-animate');
        }
    }
    if (aboutRight) {
        const rect = aboutRight.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            aboutRight.classList.add('about-animate');
        }
    }
}
window.addEventListener('scroll', animateAboutOnScroll);
window.addEventListener('DOMContentLoaded', animateAboutOnScroll);


// Scroll animation for gallery section with unique animations
function animateGalleryOnScroll() {
    const galleryHeading = document.querySelector('.gallery-heading');
    const sliderContainer = document.querySelector('.slider-container');
    const galleryDescription = document.querySelector('.gallery-description');

    if (galleryHeading) {
        const rect = galleryHeading.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            galleryHeading.classList.add('gallery-animate');
        }
    }
    if (sliderContainer) {
        const rect = sliderContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            sliderContainer.classList.add('gallery-animate');
        }
    }
    if (galleryDescription) {
        const rect = galleryDescription.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            galleryDescription.classList.add('gallery-animate');
        }
    }
}
window.addEventListener('scroll', animateGalleryOnScroll);
window.addEventListener('DOMContentLoaded', animateGalleryOnScroll);


// Scroll animation for founder section with unique animations
function animateFounderOnScroll() {
    const founderHeading = document.querySelector('.founder-heading');
    const founderLeft = document.querySelector('.founder-left');
    const founderCard = document.querySelector('.founder-card');

    if (founderHeading) {
        const rect = founderHeading.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            founderHeading.classList.add('founder-animate');
        }
    }
    if (founderLeft) {
        const rect = founderLeft.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            founderLeft.classList.add('founder-animate');
        }
    }
    if (founderCard) {
        const rect = founderCard.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            founderCard.classList.add('founder-animate');
        }
    }
}
window.addEventListener('scroll', animateFounderOnScroll);
window.addEventListener('DOMContentLoaded', animateFounderOnScroll);

//Script for scrtoll animation for founder section with unique animations
function animateFounderOnScroll() {
    // Heading
    document.querySelectorAll('.founder-heading.stunning-fade-up').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add('visible');
        }
    });
    // Image
    document.querySelectorAll('.founder-left.stunning-zoom-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add('visible');
        }
    });
    // Card
    document.querySelectorAll('.founder-card.stunning-slide-left').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', animateFounderOnScroll);
window.addEventListener('DOMContentLoaded', animateFounderOnScroll);

// Add this to your scroll animation script
document.querySelectorAll('.contact-heading.stunning-fade-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) el.classList.add('visible');
});


// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');

// Check for saved theme preference, otherwise use system preference
const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Apply theme to document
const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

// Initialize theme
applyTheme(getPreferredTheme());

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});


