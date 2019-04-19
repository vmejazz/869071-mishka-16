var menuToggle = document.querySelector(".page-header__menu-toggle");
var menuList = document.querySelector(".page-header__menu-list");
var shopperMenu = document.querySelector(".page-header__shopper-menu");

menuToggle.addEventListener("click", function(evt) {
  evt.preventDefault ();
  menuList.classList.toggle("show-menu");
  shopperMenu.classList.toggle("show-menu");
  menuToggle.classList.toggle("page-header__menu-toggle--open");
});
