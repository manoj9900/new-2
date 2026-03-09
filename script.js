const header = document.querySelector('.header-wrapper');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});






// TOGGLE MOBILE MENU
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    mobileToggle.classList.toggle('active'); // triggers hamburger → X
});












