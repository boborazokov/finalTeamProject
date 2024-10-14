<<<<<<< HEAD
// Like (heart) ikonasi uchun kod
const heartIcons = document.querySelectorAll(".recommendation_shoes .favorite");
=======
const toEnterShop = document.getElementById("toEnterShop");

toEnterShop.addEventListener("click", () => {
  var block = document.getElementsByClassName("basket_folder")[0];
  block.style.display = "none";

  var recommendations = document.getElementsByClassName("recommendations")[0];
  recommendations.style.display = "block";
});

const heartIcons = document.querySelectorAll(".recommendation_shoes .favorite");
console.log(heartIcons);

>>>>>>> c99449505c77401cd7538f0db8c53a2f60934a58
heartIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    this.classList.toggle("active");
    this.classList.toggle("fas");
  });
});
<<<<<<< HEAD

function updateSelectedCount() {
  const cards = document.querySelectorAll(".products_cards .product_card");
  const selectedProductsCount = document.getElementById("selected-count");
  selectedProductsCount.innerHTML = cards.length + " " + "товара";
}

function checkProducts() {
  const cards = document.querySelectorAll(".products_cards .product_card");
  const basket = document.getElementById("empty_basket");
  const products = document.getElementsByClassName("products")[0];

  if (cards.length === 0) {
    basket.style.display = "block";
    products.style.display = "none";
  } else {
    basket.style.display = "none";
    products.style.display = "block";
  }
}

function selectionProductsCount() {
  const cards = document.querySelectorAll(".products_cards .product_card");

  cards.forEach((card) => {
    let countProduct = +card.querySelector(".count").textContent;
    const decriment = card.querySelector(".decriment");
    const increment = card.querySelector(".increment");
    const countElement = card.querySelector(".count");

    const newPrice = card.querySelector(".newPrice");
    const oldPrice = card.querySelector(".oldPrice");
    const deleteCard = card.querySelector("#product_card-delete");

    deleteCard.addEventListener("click", () => {
      card.remove();
      updateSelectedCount();
      checkProducts();
    });

    function updatePrice() {
      const unitNewPrice = +newPrice.getAttribute("data-unit-price");
      const totalNewPrice = countProduct * unitNewPrice;
      newPrice.textContent = `${totalNewPrice.toLocaleString()} ₽`;
    }

    function updateOldPrice() {
      if (oldPrice) {
        const unitOldPrice = +oldPrice.getAttribute("data-unit-price");
        const totalOldPrice = countProduct * unitOldPrice;
        oldPrice.textContent = `${totalOldPrice.toLocaleString()} ₽`;
      }
    }

    decriment.addEventListener("click", () => {
      if (countProduct > 1) {
        countProduct--;
        countElement.textContent = countProduct;
        updatePrice();
        updateOldPrice();
      }
    });

    increment.addEventListener("click", () => {
      countProduct++;
      countElement.textContent = countProduct;
      updatePrice();
      updateOldPrice();
    });
  });

  updateSelectedCount();
  checkProducts();
}

selectionProductsCount();

function deleteAllCard() {
  const cards = document.querySelectorAll(".product_card");
  cards.forEach((card) => {
    card.remove();
  });

  updateSelectedCount();
  checkProducts();
}
=======
>>>>>>> c99449505c77401cd7538f0db8c53a2f60934a58
