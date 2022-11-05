//-------------------------------NUMBER OF CATEGORIES-----------------------------------
const ulCategoriesRef = document.querySelector('ul');

const ulNumberOfCategoriesRef = ulCategoriesRef.children;
console.log('Number of categories:', ulNumberOfCategoriesRef.length);


// --------------------------------CATEGORY ANIMALS-------------------------------------

const firstCategoryRef = ulNumberOfCategoriesRef[0];

const firstElementChildRef = firstCategoryRef.firstElementChild;
console.log('Category:', firstElementChildRef.textContent);

const lastElementChildRef = firstCategoryRef.lastElementChild;
const amountElementsLastChild = lastElementChildRef.children;
console.log('Elements:', amountElementsLastChild.length);


// --------------------------------CATEGORY PRODUCTS-------------------------------------

const secondCategoryRef = ulNumberOfCategoriesRef[1];

const secondElementChildRef = secondCategoryRef.firstElementChild;
console.log('Category:', secondElementChildRef.textContent);

const lastElementsChildRef = secondCategoryRef.lastElementChild;
const amountElementLastChildRef = lastElementsChildRef.children;
console.log('Elements:', amountElementLastChildRef.length);


// --------------------------------CATEGORY TECHNOLOGIES----------------------------------

const thirdCategoryEl = ulNumberOfCategoriesRef[2];

const firstElementChildEl = thirdCategoryEl.firstElementChild;
console.log('Category:', firstElementChildEl.textContent);

const lastElementChildEl = thirdCategoryEl.lastElementChild;
const amountElementsLastChildEl = lastElementChildEl.children;
console.log('Elements:', amountElementsLastChildEl.length);