var menuToggle = document.querySelector(".page-header__menu-toggle");
var menuList = document.querySelector(".page-header__menu-list");
var shopperList = document.querySelector(".page-header__shopper-list");

menuToggle.addEventListener("click", function(evt) {
  evt.preventDefault ();
  menuList.classList.toggle("show-menu");
  shopperList.classList.toggle("show-menu");
  menuToggle.classList.toggle("page-header__menu-toggle--open");
});
