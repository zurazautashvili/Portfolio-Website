"use strict";

const menu = document.querySelector(".icon-menu");
const list = document.querySelector(".list");
const listClose = document.querySelector(".list-close");
const nameShrank = document.querySelector(".siteName");
menu.addEventListener("click", function () {
  menu.classList.add("hidden");
  list.classList.remove("hidden");
  listClose.classList.remove("hidden");
  nameShrank.classList.add("shrank");
  document.querySelectoral(".list-item").classList.remove("hidden");
});

listClose.addEventListener("click", function () {
  menu.classList.remove("hidden");
  list.classList.add("hidden");
  listClose.classList.add("hidden");
  nameShrank.classList.remove("shrank");
  document.querySelectoral(".list-item").classList.add("hidden");
});
