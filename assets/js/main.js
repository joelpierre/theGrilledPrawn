import * as recipesService from './recipes.service';
import * as newsletterService from './newsletter.service';
import * as togglesService from './toggles.service';

const navToggle = document.querySelector('#js-navbar-toggle');
const filterToggle = document.querySelector('#js-filter-toggle');
const searchToggle = document.querySelector('#js-search-toggle');
const singupForm = document.querySelector('#js-newsletter-signup-form');

const userSignupRows = document.querySelectorAll('.signup-user-row');

const signupRowContainer = document.querySelector('#js-signup-row-container');
const recipeContainer = document.querySelector('#js-recipe-container');
const recipes = recipesService.getRecipes();

let signupRowCount = userSignupRows.length;

(() => {
  // Pull through recipes on load
  for (const recipe of recipes) {
    recipeContainer.insertAdjacentHTML(
        'beforeend', recipesService.recipeCard(recipe));
  }
})();

// Navbar Toggle Click
navToggle.addEventListener('click', () => {
  return togglesService.toggleMobileNav();
});

// Filter Toggle Click
filterToggle.addEventListener('click', () => {
  return togglesService.toggleFilterOptions();
});

// Search Toggle Click
searchToggle.addEventListener('click', () => {
  return togglesService.toggleSearchBar();
});

// Form Submit
singupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();
  return alert(
      'Here we need to validate the inputted data and submit the form values to an external API etc.');
});

// Add Newsletter rows
signupRowContainer.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();

  const elm = event.target;

  if (event.target.matches('.btn-delete-user-row')) {
    const rowContainer = elm.closest('.signup-user-row');
    rowContainer.parentNode.removeChild(rowContainer);
  }

  if (event.target.matches('.btn-add-user-row')) {
    signupRowCount++;

    newsletterService.addRemoveBtn(elm);

    signupRowContainer.insertAdjacentHTML(
        'beforeend', newsletterService.newSignupRow(signupRowCount));
  }
});