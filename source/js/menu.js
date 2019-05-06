var menuToggle = document.querySelector(".page-header__menu-toggle");
var menuList = document.querySelector(".page-header__menu-list");
var shopperMenu = document.querySelector(".page-header__shopper-menu");
var modal = document.querySelector(".modal");
var cardButton = document.querySelector(".product-card__button");
var modalClose = document.querySelector(".modal__overlay");
var modalAddButton = document.querySelector(".modal__button");
var linkAddProduct = document.querySelectorAll(".product-snippet__button");

document.addEventListener('DOMContentLoaded', function() {
  menuList.classList.remove("show-menu");
  shopperMenu.classList.remove("show-menu");
  menuToggle.classList.add("page-header__menu-toggle--close");
}, false);

menuToggle.addEventListener("click", function(evt) {
  evt.preventDefault ();
  menuList.classList.toggle("show-menu");
  shopperMenu.classList.toggle("show-menu");
  menuToggle.classList.toggle("page-header__menu-toggle--open");
  menuToggle.classList.toggle("page-header__menu-toggle--close");
});

if (cardButton) {
  cardButton.addEventListener("click", function (evt) {
    evt.preventDefault ();
    modal.classList.add("modal--show");
  });
};

modalClose.addEventListener("click", function () {
  modal.classList.remove("modal--show");
});

modalAddButton.addEventListener("click", function () {
  modal.classList.remove("modal--show");
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
    };
  };
});

for (var i = 0; i < linkAddProduct.length; i++) {
  linkAddProduct[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
  });
};
