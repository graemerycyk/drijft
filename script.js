// Language handling
let currentLanguage = 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.setAttribute('lang', lang);
    
    // Update active state of language buttons
    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(button => {
        if (button.textContent.toLowerCase() === lang.toLowerCase()) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    updateContent();
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' && element.getAttribute('placeholder')) {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Modal handling
const modal = document.getElementById('waitlistModal');
const btn = document.getElementById('joinWaitlistBtn');
const span = document.getElementsByClassName('close-modal')[0];
const form = document.getElementById('waitlistForm');

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    // Here you would typically send this to your backend
    console.log('Email submitted:', email);
    modal.style.display = "none";
    alert('Thank you for joining the waitlist!');
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language based on browser preference
    const browserLang = navigator.language.split('-')[0];
    const supportedLanguages = ['en', 'nl', 'fr'];
    const initialLang = supportedLanguages.includes(browserLang) ? browserLang : 'en';
    setLanguage(initialLang);

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}); 