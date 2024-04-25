const joke = document.querySelector('#joke');
const btn = document.querySelector('#btn')
const btnNext = document.querySelector('#btn-next')

function getjoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
        .then(data => {
            const setup = data.setup;
            const punchline = data.punchline;
            joke.innerText = `${setup}`
            btn.addEventListener('click', function () {
                joke.innerText = punchline;
            });
        })
    }
    
    getjoke()
    btnNext.addEventListener('click', function () {
        getjoke()
    });

