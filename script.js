const navOpenBtn = document.querySelector('#nav-open');
const navCloseBtn = document.querySelector('#nav-close');
const mobileNavCont = document.querySelector('[data-mobile-only]');

navOpenBtn.addEventListener('click', () => {
  mobileNavCont.style.display = 'block';
});

navCloseBtn.addEventListener('click', () => {
  mobileNavCont.style.display = 'none';
});