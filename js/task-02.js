const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsMarkup = ingredients.map ( (ingredients) => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = `${ingredients}`
  
  return ingredientsItem;
})
console.log(ingredientsMarkup);

ingredientsList.append(...ingredientsMarkup);
