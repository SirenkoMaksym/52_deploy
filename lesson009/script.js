// console.log('hello, DOM!')

// при объявлении переменной через let вы можете присвоить другое значение
let language = 'javascript'
// console.log('in language variable ====>>> ', language)

language = 'java'
// console.log(language)

// при объявлении через const (константа) переприсвоить значение не получится
const theme = 'DOM'

// theme = 10

// DOM: Document Object Model

// getElementById метод поиска элемента по id
// для удобства переиспользования мы кладем элемент в переменную

const btnPush = document.getElementById('btn-push')

// getElementsByTagName() возвращает массив элементов по тегу

const heading = document.getElementsByTagName('h1')[0]
const box = document.getElementById('box')
const btnBoxChanger = document.querySelector('#bnt-boxChange')
const btnCreateElement = document.getElementById('btn-createElement')

// метод addEventListener() принимает в себя два параметра:

// 1. строка с указанием типа события

// 2.стрелочная функция с описанием действий, которые произойдут, когда событие случится

console.log('document ==> ', document);

btnCreateElement.addEventListener('click', () => {
   // создали новую переменную с тегом <p>
   const newElement = document.createElement('p')
   // добавили текст
   newElement.innerText = 'Кажется, я начинаю понимать DOM'
   newElement.id = 'new-paragraph'
   newElement.className = 'new-paragraph'
   document.body.appendChild(newElement)
})

btnPush.addEventListener('click', () => {
  heading.style.color = 'red'
  heading.style.backgroundColor = 'lightgreen'
  console.log('заголовок красный!')
})

btnBoxChanger.addEventListener('click', () => {
  box.className = 'box box--cyan'
})