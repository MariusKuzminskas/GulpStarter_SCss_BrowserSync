console.log('hello');

const inputEl = document.getElementById('input');
const btnEl = document.getElementById('btn');
const formEl = document.querySelector('.form');

formEl.addEventListener('click', e => {
    e.preventDefault();
    console.log(inputEl.value);
})