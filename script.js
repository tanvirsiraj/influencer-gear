const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const navMenu = document.querySelector('.nav-menu');
// console.log(menuOpen);

menuOpen.addEventListener('click', () => {
    navMenu.classList.add('active');
})
menuClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
})
