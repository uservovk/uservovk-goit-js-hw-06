const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const nameOfBgColorRef = document.querySelector('.color');

buttonRef.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  nameOfBgColorRef.textContent = bodyRef.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

