const asideLink = document.getElementsByClassName('aside__list-item');
const paginationItem = document.getElementsByClassName('main__card-pagination-item');

for (let i = 0; i < asideLink.length; i++) {
  asideLink[i].addEventListener("click", function (e) {
    e.preventDefault();

    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";

  });
}

for (let i = 0; i < paginationItem.length; i++) {
  paginationItem[i].addEventListener("click", function (e) {
    e.preventDefault();

    let current = document.getElementsByClassName("--active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" --active", "");
    }

    this.className += " --active";

  });
}

// Burger

const iconMenu = document.querySelector('.menu__icon');
const asideMenu = document.querySelector('.aside');
const asidePlank = document.querySelector('.plank');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle('_active');
    asideMenu.classList.toggle('_active');
    asidePlank.classList.toggle('_active');
  });
}

if (asidePlank) {
  asidePlank.addEventListener("click", function (e) {
    iconMenu.classList.remove('_active');
    asideMenu.classList.remove('_active');
    asidePlank.classList.remove('_active');
  });
}