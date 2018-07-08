const body = document.querySelector('body');
const navToggle = document.querySelector('#js-navbar-toggle');
const filterToggle = document.querySelector('#js-filter-toggle');

export function toggleMobileNav() {
  const mobileMenu = document.querySelector('#js-mobile-nav');

  body.classList.toggle('active');
  navToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

export function toggleFilterOptions() {
  const filterOptions = document.querySelector('#js-filter-options');
  const iconAdd = filterToggle.getElementsByClassName('mi-add')[0];
  const iconRemove = filterToggle.getElementsByClassName(
      'mi-remove')[0];

  filterToggle.classList.toggle('active');

  filterOptions.classList.toggle('active');
  iconAdd.classList.toggle('active');
  iconRemove.classList.toggle('active');
}

export function toggleSearchBar() {
  return alert('We can open up a search bar or something on this button click');
}