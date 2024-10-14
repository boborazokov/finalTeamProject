let menu = document.getElementById('menu');
let element = document.getElementById('header-ul');
function menuClick() {
    menu.classList.toggle('menu__background');
    element.classList.toggle('active')
}