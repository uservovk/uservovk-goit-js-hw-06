const input = document.querySelector('input');

const titleName = document.querySelector('h1>span');

input.addEventListener('input', (event) => {
    titleName.textContent = event.currentTarget.value;
});
