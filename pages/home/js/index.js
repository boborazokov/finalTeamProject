const likeableIcons = document.querySelectorAll('.likeable');
likeableIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        this.classList.toggle('liked'); 
    });
});
