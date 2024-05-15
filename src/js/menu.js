const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav-menu');

function openMenu() {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('active');
}

hamburger.addEventListener('click', openMenu);
