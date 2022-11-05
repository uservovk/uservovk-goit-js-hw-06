const targetInput = document.querySelector('#name-input');
const titleName = document.querySelector('#name-output');

targetInput.addEventListener('input', onTargetInputInput);

function onTargetInputInput(event) {
    titleName.textContent = event.currentTarget.value;
    
    if (targetInput.value === '') {
        titleName.textContent = 'Anonymous';
    };
};