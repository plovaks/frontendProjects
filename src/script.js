const menuBarMobile = document.querySelector('.menu-bar');
const firstPage = document.querySelector('.first-page');
const menuMobileVersion = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');

menuMobileVersion.classList.add('hidden');

menuBarMobile.addEventListener('click', function() {
    firstPage.classList.add('hidden');
    menuMobileVersion.classList.remove('hidden');
    menuBarMobile.classList.add('hidden');
});

closeIcon.addEventListener('click', function() {
    firstPage.classList.remove('hidden');
    menuMobileVersion.classList.add('hidden');
    menuBarMobile.classList.remove('hidden');
});
