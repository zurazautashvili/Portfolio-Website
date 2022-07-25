"use strict";

const menu = document.querySelector(".icon-menu");
const list = document.querySelector(".list");
menu.addEventListener("click", function () {
  menu.classList.add("hidden");
  list.classList.remove("hidden");
});
