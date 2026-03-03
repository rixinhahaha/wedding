/* ============================================
   Wedding Website - JavaScript
   ============================================ */

// ========== CONFIG ==========
// Replace this URL with your Google Apps Script web app URL after deployment
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyxUksGuwKVuGCrdrnWtTjqWXibfEy2ottwQzge_D3RNKGTM90pcg0jBZpj5hUoDXuMag/exec';

// Wedding date: December 19, 2026 at 12:00 PM SGT (UTC+8)
const WEDDING_DATE = new Date('2026-12-19T12:00:00+08:00');

// ========== COUNTDOWN TIMER ==========
function updateCountdown() {
  const now = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '0';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ========== NAVIGATION ==========
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Sticky nav background on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

// ========== SCROLL REVEAL ==========
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger animation for sibling reveals
      const delay = entry.target.closest('.timeline-item') ? 0 : index * 100;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ========== PARALLAX HERO ==========
const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight) {
    heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.3}px)`;
  }
});

// ========== RSVP FORM ==========
const form = document.getElementById('rsvpForm');
const conditionalFields = document.getElementById('conditionalFields');
const plusOneNameGroup = document.getElementById('plusOneName');
const plusOneDietary = document.getElementById('plusOneDietary');
const dietaryOther = document.getElementById('dietaryOther');
const formMessage = document.getElementById('formMessage');

// Show/hide conditional fields based on attendance
document.querySelectorAll('input[name="attending"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    if (e.target.value === 'yes') {
      conditionalFields.classList.add('show');
    } else {
      conditionalFields.classList.remove('show');
    }
  });
});

// Show/hide plus one name field
document.querySelectorAll('input[name="plusOne"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    if (e.target.value === 'yes') {
      plusOneNameGroup.style.display = 'block';
      plusOneDietary.style.display = 'block';
    } else {
      plusOneNameGroup.style.display = 'none';
      plusOneDietary.style.display = 'none';
    }
  });
});

// Show/hide dietary other field
document.getElementById('dietary').addEventListener('change', (e) => {
  dietaryOther.style.display = e.target.value === 'other' ? 'block' : 'none';
});

// Form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');

  // Disable button and show loading
  submitBtn.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';
  formMessage.className = 'form-message';
  formMessage.style.display = 'none';

  // Collect form data
  const formData = new FormData(form);
  const data = {
    timestamp: new Date().toISOString(),
    name: formData.get('name'),
    email: formData.get('email'),
    attending: formData.get('attending'),
    plusOne: formData.get('plusOne') || 'no',
    plusOneName: formData.get('plusOneName') || '',
    dietary: formData.get('dietary') || 'none',
    dietaryDetails: formData.get('dietaryDetails') || '',
    plusOneDietary: formData.get('plusOneDietary') || 'none',
    message: formData.get('message') || ''
  };

  // Check if Google Script URL is configured
  if (!GOOGLE_SCRIPT_URL) {
    formMessage.textContent = 'RSVP form is not yet connected. Please set up Google Sheets integration (see SETUP.md).';
    formMessage.className = 'form-message error';
    submitBtn.disabled = false;
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
    return;
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    // With no-cors, we can't read the response, but if no error was thrown, it likely succeeded
    if (data.attending === 'yes') {
      form.innerHTML = `
        <div class="rsvp-success">
          <div class="heart-container">
            <div class="heart"></div>
          </div>
          <h3 class="success-title">Thank You!</h3>
          <p class="success-text">Your RSVP has been received.<br>We can't wait to celebrate with you!</p>
        </div>
      `;
    } else {
      form.innerHTML = `
        <div class="rsvp-success">
          <div class="heart-container">
            <div class="heart heart-sad"></div>
          </div>
          <h3 class="success-title">We'll Miss You!</h3>
          <p class="success-text">We're sad you can't make it, but we appreciate you letting us know.<br>You'll be in our hearts on the big day!</p>
        </div>
      `;
    }
  } catch (error) {
    formMessage.textContent = 'Something went wrong. Please try again or contact us directly.';
    formMessage.className = 'form-message error';
    formMessage.style.display = 'block';
    submitBtn.disabled = false;
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
  }
});

// ========== LIGHTBOX ==========
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.lightbox-trigger').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (!href) return;
    lightboxImg.src = href;
    lightboxImg.alt = link.querySelector('img')?.alt || '';
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});
