console.log('hello');

const inputEl = document.getElementById('input');
const btnEl = document.getElementById('btn');
const formEl = document.querySelector('.form');
const errorEl = document.querySelector('.form__msg--error');

formEl.addEventListener('submit', e => {
    e.preventDefault();
    const inputValue = inputEl.value;
    if (inputValue && inputValue != 0) {
        // console.log("not null");
        if (emailIsValid(inputValue)) {
            // console.log("valid");
            // const validEmail = inputValue;
            sendPostRequest(inputValue);
            errorEl.innerText = 'Thank you. Your email has been sent';
            errorEl.classList.add('form__msg--success');
            inputEl.value = '';

        } else {
            errorEl.innerText = "please check your email";
        }
    } else {
        errorEl.innerText = "please enter an email";
        return;
    }

})

// functions

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sendPostRequest(validEmail) {
    axios.post('https://reqres.in/api/users', {
            email: validEmail
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
}