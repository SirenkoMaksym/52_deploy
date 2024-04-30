const ferrariContainer = document.querySelector('#ferrariContainer')

async function getFerrari() {
    const res = await fetch('https://sirenkomaksym.github.io/ferrari/auto.json')
    const data = await res.json()
    data.map(ferrari => {
        console.log(ferrari)
        const card = document.createElement("div")
        card.classList.add('ferrariCard')

        const cardHeading = document.createElement('h3')
        cardHeading.textContent =ferrari.id.charAt(0)+ ferrari.id.toLowerCase().slice(1)
        cardHeading.classList.add('ferrariCardHeading')

        const nameFer = document.createElement('p')
        nameFer.textContent = "Название модели: "+ferrari.name
        const cardYearFrom = document.createElement("p")
        cardYearFrom.textContent = "Начало выпуска: " + ferrari["year-from"]  
        const cardYearTo = document.createElement("p")
         cardYearTo.textContent = `Конец выпуска: ${ferrari["year-to"]}`
         
        const cardClassFer = document.createElement("p")
        cardClassFer.textContent = "Класс авто: " + ferrari.class
        cardClassFer.classList.add('cardClassFer')
        card.append(cardHeading, cardClassFer, nameFer, cardYearFrom,cardYearTo )
        console.log(card)
        ferrariContainer.append(card)
    })


}
getFerrari()