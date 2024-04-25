const image = document.querySelector('#fox-img')
const button = document.querySelector('#btn-change')


// function getFox(){
//     button.innerText  = 'Loading...'
// fetch('https://randomfox.ca/floof')
// .then(res => res.json())
// .then(data => {
//     image.src = data.image
//     button.innerText = 'Change image'
// })
// }

async function getFox(){
    button.innerText  = 'Loading...'
    const responce = await fetch("https://randomfox.ca/floof")
    const data = await responce.json()
    image.src = data.image
    button.innerText = 'Change image'
}


getFox()

button.addEventListener('click', getFox)