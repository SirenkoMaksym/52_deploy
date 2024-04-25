const content = document.querySelector('#content')
{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
        const img = document.createElement('img')
        img.alt = 'dog image'
        img.src = data.message
        img.classList.add('dog-img')
        content.append(img)
    })
}




