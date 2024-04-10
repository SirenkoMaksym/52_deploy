// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  const clonedBtn = btn.cloneNode(true);
  // задали id
  clonedBtn.id = "magic-btn-2";
  clonedBtn.innerText = "Я изменю тебя"
  clonedBtn.style.color = "white"
  clonedBtn.style.background = "#a78b71"
  document.body.appendChild(clonedBtn);
clonedBtn.addEventListener('click', () => {
//  вариант1
//   btn.style.color = "black"
//   btn.style.background = "#9c4a1a"
// вариант2, если нам типа известен только класс
document.querySelector('#magic-btn').style.color ="black"
document.querySelector('#magic-btn').style.background = "#9c4a1a"
})



})

// здесь можете создать EventListener для второй кнопки