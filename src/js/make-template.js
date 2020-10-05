import itemsTemplate from '../templates/food-items.hbs';
import food from '../menu.json';

const templatingFood = itemsTemplate(food);

const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', templatingFood);
