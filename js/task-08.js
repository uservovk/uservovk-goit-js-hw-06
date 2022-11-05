const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormRefSubmit);

function onFormRefSubmit(event) {
    event.preventDefault();

    const formRefElements = event.currentTarget.elements;
    const email = formRefElements.email.value;
    const password = formRefElements.password.value;

    if (email === '' || password === '') {
        return alert('Please fill in all the fields!');
    };

    const formRefData = {
        email, password
    };
    console.log(formRefData);

    event.currentTarget.reset();
};