const burgerIcon = document.querySelector('.fa-bars');
const menu = document.getElementById('menuLinks');

burgerIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
});

document.addEventListener('click', () => {
    menu.classList.remove('active');
});
