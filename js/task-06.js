const targetInput = document.querySelector('#validation-input');

const requiredNumberOfSymbols = Number(targetInput.dataset.length);

targetInput.addEventListener('blur', onTargetInputBlur); 

function onTargetInputBlur(event) {
    if (event.currentTarget.value.length === requiredNumberOfSymbols) {
        targetInput.classList.add('valid');
        removeClass();
    } else { targetInput.classList.add('invalid'); };
    
};

function removeClass() {
    if (targetInput.classList.contains('invalid')) {
        targetInput.classList.remove('invalid');
    };
};