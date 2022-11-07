const listOfCategoriesRef = document.querySelector('ul');
const itemsOfListRef = listOfCategoriesRef.children;
console.log('Number of categories:', itemsOfListRef.length);

for (const item of itemsOfListRef) {
    console.log('Category:', item.firstElementChild.textContent);
    const lastElementsChildRef = item.lastElementChild;
    console.log('Elements:', lastElementsChildRef.children.length);
};