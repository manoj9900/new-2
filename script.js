// ==============
// 1. NAVBAR SCROLL EFFECT
// =============
const navbar = document.getElementById('main-navbar');
window.addEventListener('load', () => {
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
}
});

window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});

// ==================
// 2. MOBILE MENU & DROPDOWN BEHAVIOR
// ===================
document.addEventListener('DOMContentLoaded', function () {
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const dropdownToggle = document.querySelector('.dropdown > .dropdown-toggle');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownArrow = document.querySelector('.dropdown-arrow');
const mobileBreakpoint = 991;
menuToggle.addEventListener('click', function () {
mainNav.classList.toggle('active');
const expanded = mainNav.classList.contains('active');
menuToggle.setAttribute('aria-expanded', expanded);
if (!expanded) {
closeDropdown();
}
});
dropdownToggle.addEventListener('click', function (e) {
if (window.innerWidth <= mobileBreakpoint) {
e.preventDefault();
dropdownContent.classList.toggle('show');
if (dropdownContent.classList.contains('show')) {
dropdownArrow.classList.remove('bi-caret-down-fill');
dropdownArrow.classList.add('bi-caret-up-fill');
} else {
dropdownArrow.classList.remove('bi-caret-up-fill');
dropdownArrow.classList.add('bi-caret-down-fill');
}
}
});
function closeDropdown() {
dropdownContent.classList.remove('show');
dropdownArrow.classList.remove('bi-caret-up-fill');
dropdownArrow.classList.add('bi-caret-down-fill');
}
window.addEventListener('resize', function () {
if (window.innerWidth > mobileBreakpoint) {
mainNav.classList.remove('active');
menuToggle.setAttribute('aria-expanded', 'false');
closeDropdown();
}
});
});









document.addEventListener('DOMContentLoaded', function() {
var portfolioSwiper = new Swiper('.portfolio-swiper', {
loop: true, 
slidesPerView: 1.2, 
spaceBetween: 20,
centeredSlides: true, 
autoplay: {
delay: 0, 
disableOnInteraction: false, 
},
speed: 4000, 
breakpoints: {
640: {
slidesPerView: 2.2,
spaceBetween: 30,
},
1024: {
slidesPerView: 4,
spaceBetween: 40,
},
1400: {
slidesPerView: 5,
spaceBetween: 40,
}
},
freeMode: {
enabled: true,
momentum: false,
},
});
portfolioSwiper.on('transitionStart', function () {
this.wrapperEl.style.transitionTimingFunction = "linear";
});
});














let currentImageIndex = 0;
let allGalleryItems = []; 
let filteredGalleryItems = []; 

function updateLightbox(index) {
if (filteredGalleryItems.length === 0) return;

if (index < 0) {
index = filteredGalleryItems.length - 1;
} else if (index >= filteredGalleryItems.length) {
index = 0;
}

currentImageIndex = index;
const item = filteredGalleryItems[currentImageIndex];

const largeSrc = item.getAttribute('data-img-src');
const caption = item.querySelector('.card-img').alt; 

document.getElementById('modal-image').src = largeSrc;
document.getElementById('modal-caption').textContent = caption;
}
function openLightbox(initialIndex) {
document.getElementById('lightbox-modal').style.display = 'block';
document.body.style.overflow = 'hidden'; 
updateLightbox(initialIndex); 
}
function closeLightbox() {
document.getElementById('lightbox-modal').style.display = 'none';
document.body.style.overflow = ''; 
}
function navigate(direction) {
let nextIndex = currentImageIndex + direction;
updateLightbox(nextIndex);
}
function filterItems(filterValue) {
const galleryCards = document.querySelectorAll('.gallery-card');
const filterButtons = document.querySelectorAll('.filter-btn');

filteredGalleryItems = []; 
let totalCards = 0;
let visibleCount = 0;
galleryCards.forEach(card => {
const cardCategory = card.getAttribute('data-category');
totalCards++;
if (filterValue === 'all' || cardCategory === filterValue) {
card.classList.remove('hide');
filteredGalleryItems.push(card); 
visibleCount++;
} else {
card.classList.add('hide');
}
});
filterButtons.forEach(button => {
const buttonFilter = button.getAttribute('data-filter');
const categoryCount = buttonFilter === 'all' ? totalCards : Array.from(galleryCards).filter(item => item.getAttribute('data-category') === buttonFilter).length;
let buttonTextBase = button.textContent.split('(')[0].trim();
button.textContent = `${buttonTextBase} (${categoryCount})`;
if (buttonFilter === filterValue) {
button.classList.add('active');
button.textContent = `${buttonTextBase} (${visibleCount})`;
} else {
button.classList.remove('active');
}
});
}


document.addEventListener('DOMContentLoaded', () => {
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
const navbar = document.getElementById('main-navbar');
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryCards = document.querySelectorAll('.gallery-card');
const lightboxModal = document.getElementById('lightbox-modal');
allGalleryItems = Array.from(galleryCards);
const urlParams = new URLSearchParams(window.location.search);
const filterToApply = urlParams.get('filter');

if (filterToApply) {
filterItems(filterToApply);
} else {
filterItems('all'); 
}

menuToggle.addEventListener('click', () => {
const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
menuToggle.setAttribute('aria-expanded', !isExpanded);
mainNav.classList.toggle('active');
});

window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});
filterButtons.forEach(button => {
button.addEventListener('click', () => {
const filterValue = button.getAttribute('data-filter');
filterItems(filterValue); 
});
});

galleryCards.forEach(card => {
card.addEventListener('click', (e) => {
e.preventDefault(); 
const clickedIndex = filteredGalleryItems.indexOf(card);
if (clickedIndex !== -1) {
openLightbox(clickedIndex);
}
});
});

lightboxModal.addEventListener('click', (e) => {
if (e.target === lightboxModal) {
closeLightbox();
}
});

const closeBtn = document.querySelector('.close-btn');
if (closeBtn) {
closeBtn.addEventListener('click', closeLightbox);
}

const prevBtn = document.querySelector('.nav-btn.prev-btn');
const nextBtn = document.querySelector('.nav-btn.next-btn');
if (prevBtn) prevBtn.addEventListener('click', () => navigate(-1));
if (nextBtn) nextBtn.addEventListener('click', () => navigate(1));
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && lightboxModal.style.display === 'block') {
closeLightbox();
} else if (lightboxModal.style.display === 'block') {
if (e.key === 'ArrowLeft') {
navigate(-1);
} else if (e.key === 'ArrowRight') {
navigate(1);
}
}
});
});











(function () {
document.addEventListener('click', function (e) {
var el = e.target;
while (el && el !== document.body) {
if (el.matches && el.matches('.gallery-card')) break;
el = el.parentElement;
}
if (!el || !el.matches) return;
if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
var href = el.getAttribute('href');
if (href) {
e.preventDefault();
window.location.href = href;
}
}, { passive: false });
})();











AOS.init({
duration: 1000,   
once: true,      
offset: 100,      
});





