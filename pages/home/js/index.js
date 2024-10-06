const likeableIcons = document.querySelectorAll('.likeable');
likeableIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        this.classList.toggle('liked'); 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Находим бургер-иконку и меню
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    // Добавляем обработчик событий на бургер-иконку
    menuIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('active'); // Переключаем класс active на меню
    });
});

