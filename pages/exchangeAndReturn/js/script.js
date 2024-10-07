let menu = document.getElementById("menu");
let hoverLinks = document.getElementsByClassName("hoverA");
function menuClick() {
  menu.classList.toggle("active-menu");
  for (let i = 0; i < hoverLinks.length; i++) {
    hoverLinks[i].style.display = "block";
  }
}
