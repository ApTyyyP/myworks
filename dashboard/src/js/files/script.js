// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const asideLink = document.getElementsByClassName('aside__list-item');
const paginationItem = document.getElementsByClassName('main__card-pagination-item');

for (let i = 0; i < asideLink.length; i++) {
  asideLink[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}

for (let i = 0; i < paginationItem.length; i++) {
  paginationItem[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("--active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" --active", "");
    }

    this.className += " --active";
  });
}