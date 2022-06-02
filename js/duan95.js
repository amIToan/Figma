const ArrayFrom = Array.from(
  document.querySelectorAll(".header__categories__text")
);
const headerCate = document.querySelector(".header__categories");

headerCate.onclick = (e) => {
  for (let index = 0; index < ArrayFrom.length; index++) {
    ArrayFrom[index].classList.remove("header__categories__pseudo-element");
  }
  if (!e.target.classList.contains("header__categories__text")) return true;
  e.target.classList.add("header__categories__pseudo-element");
};
