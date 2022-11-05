const targetInputRef = document.querySelector('#name-input');
const titleNameRef = document.querySelector('#name-output');

targetInputRef.addEventListener('input', onTargetInputRefInput);

function onTargetInputRefInput(event) {
    titleNameRef.textContent = event.currentTarget.value;
    
    if (targetInputRef.value === '') {
        titleNameRef.textContent = 'Anonymous';
    };
};