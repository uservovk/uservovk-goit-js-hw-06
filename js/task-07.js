const targetInputRef = document.querySelector('#font-size-control');
const targetSpanRef = document.querySelector('#text');

targetInputRef.addEventListener('input', onTargetInputRefInput);

function onTargetInputRefInput(event) {
    const step = event.currentTarget.value;
    
    targetSpanRef.style.fontSize = `${step}px`;
};