const hamburger = document.querySelector('#toggleMenu');
const closeMenu = document.querySelector('#closeMenu');
var mobileMenu = document.querySelector('.mobileMenu');

hamburger.addEventListener('click', ()=>{
    mobileMenu.style.display = 'block';
    console.log('hamburger clicked');
});

closeMenu.addEventListener('click', ()=>{
    mobileMenu.style.display = 'none';
});