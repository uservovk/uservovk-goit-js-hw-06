const counterValue = {
    value: 0,
    decrement(value) {
        this.value -= 1;
    },
    increment(value) {
        this.value += 1;
    },
};

const counterRef = document.querySelector('div');

const decrementRef = counterRef.firstElementChild;

const valueRef = decrementRef.nextElementSibling;

const incrementRef = counterRef.lastElementChild;

decrementRef.addEventListener('click', function () {
    counterValue.decrement();
    valueRef.textContent = counterValue.value;
},);

incrementRef.addEventListener('click', function () {
    counterValue.increment();
    valueRef.textContent = counterValue.value;
},);
