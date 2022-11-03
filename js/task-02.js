const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('ul');

const makeItemsList = items => {
  return items.map(item => {
    const liRef = document.createElement('li');
  
    liRef.classList.add('item');
    liRef.textContent = item;
  
    return liRef;
  });
};

const elements = makeItemsList(ingredients);
ulRef.append(...elements);