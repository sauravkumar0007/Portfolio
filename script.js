const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const hamIcon = hamburger.querySelector('.hamburger-icon');
const crossIcon = hamburger.querySelector('.cross-icon');

// Hide menu and show hamburger by default on small screens
function setMenuDisplay() {
    if (window.innerWidth <= 900) {
        menu.style.display = 'none';
        hamIcon.style.display = 'inline-block';
        crossIcon.style.display = 'none';
    } else {
        menu.style.display = 'block';
        hamIcon.style.display = 'none';
        crossIcon.style.display = 'none';
    }
}

// Hamburger click event: Toggle menu and icons
hamburger.addEventListener('click', function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamIcon.style.display = 'inline-block';
        crossIcon.style.display = 'none';
    } else {
        menu.style.display = 'block';
        hamIcon.style.display = 'none';
        crossIcon.style.display = 'inline-block';
    }
});

// Responsive: auto-adapt menu on window resize
window.addEventListener('resize', setMenuDisplay);

// Initialize menu on page load
window.addEventListener('DOMContentLoaded', setMenuDisplay);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}


