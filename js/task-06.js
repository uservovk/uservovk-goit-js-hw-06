const targetInputRef = document.querySelector('#validation-input');

const requiredNumberOfSymbols = Number(targetInputRef.dataset.length);

targetInputRef.addEventListener('blur', onTargetInputRefBlur); 

function onTargetInputRefBlur(event) {
    if (event.currentTarget.value.length === requiredNumberOfSymbols) {
        targetInputRef.classList.add('valid');
        removeClass();
    } else { targetInputRef.classList.add('invalid'); };
    
};

function removeClass() {
    if (targetInputRef.classList.contains('invalid')) {
        targetInputRef.classList.remove('invalid');
    };
};