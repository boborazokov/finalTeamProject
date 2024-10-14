const toEnterShop = document.getElementById("toEnterShop");

toEnterShop.addEventListener("click", () => {
  var block = document.getElementsByClassName("basket_folder")[0];
  block.style.display = "none";

  var recommendations = document.getElementsByClassName("recommendations")[0];
  recommendations.style.display = "block";
});

const heartIcons = document.querySelectorAll(".recommendation_shoes .favorite");
console.log(heartIcons);

heartIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    this.classList.toggle("active");
    this.classList.toggle("fas");
  });
});
