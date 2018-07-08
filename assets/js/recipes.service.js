export function getRecipes() {
  return [
    {
      id: 1,
      date: '5TH MARCH 2016',
      nationality: 'Thai',
      headline: 'Thai Yellow Curry Noodles with Shiitake Mushrooms',
      image: './dist/media/images/recipe1.jpg',
    },
    {
      id: 2,
      date: '17TH MARCH 2016',
      nationality: 'ITALIAN',
      headline: 'Cappellini with Cherry Tomatoes and Fresh Basil',
      image: './dist/media/images/recipe2.jpg',
    },
    {
      id: 3,
      date: '4TH APRIL 2016',
      nationality: 'ITALIAN',
      headline: 'Baked Turkey Sausage and Mascarpone Stuffed Shells',
      image: './dist/media/images/recipe3.jpg',
    },

    {
      id: 4,
      date: '24TH MAY 2016',
      nationality: 'ITALIAN',
      headline: 'Caramelised Apple and Herb Fiocchi',
      image: './dist/media/images/recipe4.jpg',
    },
    {
      id: 5,
      date: '25TH MAY 2016',
      nationality: 'SPANISH',
      headline: 'Pumpkin Beer Cheese Soup',
      image: './dist/media/images/recipe5.jpg',
    },
    {
      id: 6,
      date: '22TH SEPTEMBER 2016',
      nationality: 'THAI',
      headline: 'Yum Woon Sen with Shrimp (Glass noodle salad with Shrimp)',
      image: './dist/media/images/recipe6.jpg',
    },
    {
      id: 7,
      date: '14TH OCTOBER 2016',
      nationality: 'THAI',
      headline: 'Beef Satay',
      image: './dist/media/images/recipe7.jpg',
    },
    {
      id: 8,
      date: '29TH OCTOBER 2016',
      nationality: 'FRENCH',
      headline: 'Creamy French Onion Soup Dip in a Bread Bowl',
      image: './dist/media/images/recipe8.jpg',
    },
    {
      id: 9,
      date: '11TH NOVEMBER 2016',
      nationality: 'SPANISH',
      headline: 'Bocadillo Bites',
      image: './dist/media/images/recipe9.jpg',
    },
    {
      id: 10,
      date: '12TH NOVEMBER 2016',
      nationality: 'SPANISH',
      headline: 'Paella',
      image: './dist/media/images/recipe10.jpg',
    },
    {
      id: 11,
      date: '24TH DECEMBER 2016',
      nationality: 'THAI',
      headline: 'Spicy black Bean Burger',
      image: './dist/media/images/recipe11.jpg',
    },
  ];
}

export function recipeCard(recipe) {
  return `<div class="col-lg-3 col-sm-6 col-12">
          <div class="recipe-card recipe-${recipe.id}">
          <div class="recipe-card-header">
          <div class="row">
          <div class="col text-left recipe-date">
          ${recipe.date}
          </div>
          <div class="col-4 text-right recipe-nationality">
          ${recipe.nationality}
          </div>
          </div>
          </div>
          <div class="recipe-card-body">
          <h3 class="recipe-headline">${recipe.headline}</h3>
          </div>
          <div class="recipe-card-footer">
          <img class="recipe-image" src="${recipe.image}" alt="${recipe.headline} image">
          </div>
        </div></div>`;
}