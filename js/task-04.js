const counterValue = {
    value: 0,
    decrement(value) {
        this.value -= 1;
    },
    increment(value) {
        this.value += 1;
    },
};

const counter = document.querySelector('div');

const decrement = counter.firstElementChild;

const value = document.querySelector('#value');

const increment = counter.lastElementChild;

decrement.addEventListener('click', function () {
    counterValue.decrement();
    value.textContent = counterValue.value;
},);

increment.addEventListener('click', function () {
    counterValue.increment();
    value.textContent = counterValue.value;
},);
