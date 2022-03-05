const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const line = $(".header__nav-choice");

const items = $$(".header__nav-item");
const mobileItems = $$(".mobile-menu ul li");

let active = $(".header__nav-item--active");
line.style.width = active.offsetWidth + "px";
line.style.left = active.offsetLeft + "px";

Array.from(items).forEach((item, index) => {
  item.onclick = function () {
    active.classList.remove("header__nav-item--active");

    this.classList.add("header__nav-item--active");
    active = this;

    line.style.width = active.offsetWidth + "px";
    line.style.left = active.offsetLeft + "px";

    // Mobile handle
    $(".mobile-menu__active").classList.remove("mobile-menu--active");
    mobileItems[index].classList.add("mobile-menu--active");
  };
});

// nav menu
const btn = $("#menu-btn--open");
const mobileMenu = $(".mobile-menu");
console.log(mobileMenu);
const closeMenuBtn = $(".mobile-menu__close");
function openMenu() {
  mobileMenu.classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
  document.body.classList.remove("no-scroll");
}
btn.onclick = openMenu;

closeMenuBtn.onclick = closeMenu;
