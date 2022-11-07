const targetInputRef = document.querySelector('#validation-input');

const requiredNumberOfSymbols = Number(targetInputRef.dataset.length);

targetInputRef.addEventListener('blur', onTargetInputRefBlur); 

function onTargetInputRefBlur(event) {
    if (event.currentTarget.value.length === requiredNumberOfSymbols) {
        targetInputRef.classList.add('valid');
        removeClassInvalid();
    } else {
        targetInputRef.classList.add('invalid');
    removeClassValid()};
    
};

function removeClassInvalid() {
    if (targetInputRef.classList.contains('invalid')) {
        targetInputRef.classList.remove('invalid');
    };
};

function removeClassValid() {
    if (targetInputRef.classList.contains('valid')) {
        targetInputRef.classList.remove('valid');
    };
};
