const flowersContainer = document.querySelector('#flowersContainer')

async function getFlowers() {
    const res = await fetch('https://sirenkomaksym.github.io/flowers/flowers-api.json')
    const data = await res.json()
    data.map(flower => {
        const { name, color, description, image } = flower
        const card = document.createElement("div")
        card.classList.add('flowerCard')
        const cardHeading = document.createElement('h3')
        cardHeading.textContent = name.charAt(0).toUpperCase() + name.slice(1)
        cardHeading.classList.add('flowersCardHeading')
        const cardDesc = document.createElement("p")
        cardDesc.textContent = description + `.` 
        const cardColor = document.createElement("p")
        cardColor.textContent = `Color: ${color}`
        cardColor.style = `color: ${color}`
        const cardImage = document.createElement("img")
        cardImage.src = image
        cardImage.classList.add('cardImg')
        card.append(cardHeading, cardDesc, cardColor, cardImage)
        console.log(card)
        flowersContainer.append(card)
    })


}
getFlowers()