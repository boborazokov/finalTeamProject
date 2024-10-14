const likeableIcons = document.querySelectorAll('.likeable');
likeableIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        this.classList.toggle('liked'); 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    menuIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('active'); 
    });
});

