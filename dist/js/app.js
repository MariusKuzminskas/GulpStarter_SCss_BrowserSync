console.log('hello');


const inputEl = document.getElementById('input');
const btnEl = document.getElementById('btn');
const formEl = document.querySelector('.form');

formEl.addEventListener('click', e => {
    e.preventDefault();
    console.log(inputEl.value);

    if (emailIsValid(inputEl.value)) {

    }


    axios.post('https://reqres.in/api/users', {
            name: 'Fred',
            job: 'Flintstone'
        }, {
            headers: {
                'X-ShopId': 'sh_9f57832f-456b-44f3-888f-8a370b155a18',
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
})


function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}